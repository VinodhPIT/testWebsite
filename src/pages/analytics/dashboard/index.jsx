import React, { useEffect, useState } from "react";
import Head from "next/head";

import { useSession, getSession } from "next-auth/react";
import useTranslation from "next-translate/useTranslation";

import useTotalRevenue from "@/store/dashboardAnalytics/totalRevenue";
import useAnalyticsStore from "@/store/customerAnalytics/calenderFilter";

import Header from "@/analyticsComponents/common/header";
import TotalAmountEarned from "@/analyticsComponents/dashboard/totalRevenue";
import FilterDataComponents from "@/analyticsComponents/dashboard/filterDataComponents";
import NewCustomerDashboardDetails from "@/analyticsComponents/dashboard/newCustomerDashboardDetails";
import NewOfferDashboardDetails from "@/analyticsComponents/dashboard/newOfferDashboardDetails";
import AcceptedOfferDashboardDetails from "@/analyticsComponents/dashboard/AcceptedOfferDashboardDetails";
import CompletedOfferDashboardDetails from "@/analyticsComponents/dashboard/CompletedOfferDashboardDetails";

import API_URL from "@/apiConfig/api.config";
import { axiosInstance } from "@/apiConfig/axios.instance";


export default function Dashboard({ data: initialData }) {

  const { status, data: sessionData } = useSession();
  const { totalAmount, fetchTotalRevenue } = useTotalRevenue();
  const [analyticsOfferData, setAnalyticsOfferData] = useState([]);
  const [acceptedOfferData, setAcceptedOfferData] = useState([]);
  const [completedOfferData, setCompletedOfferData] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [filterData, setFilerData] = useState();
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { t } = useTranslation();
  const { handleDateFilter } = useAnalyticsStore();
  useEffect(() => {
    fetchTotalRevenue(initialData.sessionToken);
  }, [fetchTotalRevenue, initialData.sessionToken]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axiosInstance.get(API_URL.ANALYTICS_DASHBOARD.GET_COUNTRIES);
        setCountryData(response.data);
      } catch (error) {
        console.error("Failed to fetch countries data", error);
      }
    };
    fetchCountries();
  }, []);

  const filterDashBoardData = (data) => {
    setFilerData(data);
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchApiData = async (url, body, onSuccess, onError) => {
      try {
        const response = await axiosInstance.post(url, body);
        onSuccess(response.data);
      } catch (error) {
        onError(error);
      } finally {
        setIsLoading(false);
      }
    };

    // Array to hold promises for API calls
    const fetchDataPromises = [];

    const fetchCustomerRequestData = () => {
      const url = `${API_URL.ANALYTICS_DASHBOARD.GET_CUSTOMER_REQUEST_DETAILS_DATA}`;
      const body = getRequestBody(filterData);

      fetchDataPromises.push(
        fetchApiData(
          url,
          body,
          (data) => setFilteredData(data.customer_request_data),
          (error) => setFilteredData([])
        )
      );
    };

    const fetchOfferData = () => {
      const url = `${API_URL.ANALYTICS_DASHBOARD.GET_OFFER_DASHBOARD_DETAILS}`;
      const body = getRequestBody(filterData);

      fetchDataPromises.push(
        fetchApiData(
          url,
          body,
          (data) => setAnalyticsOfferData(data.send_offer_details),
          (error) => setAnalyticsOfferData([])
        )
      );
    };

    const fetchAcceptedOfferData = () => {
      const url = `${API_URL.ANALYTICS_DASHBOARD.GET_ACCEPTED_OFFER_DASHBOARD_DETAILS}`;
      const body = getRequestBody(filterData);

      fetchDataPromises.push(
        fetchApiData(
          url,
          body,
          (data) => setAcceptedOfferData(data.accepted_offer_details),
          (error) => setAcceptedOfferData([])
        )
      );
    };

    const fetchCompletedOfferData = () => {
      const url = `${API_URL.ANALYTICS_DASHBOARD.GET_COMPLETED_OFFER_DASHBOARD_DETAILS}`;
      const body = getRequestBody(filterData);

      fetchDataPromises.push(
        fetchApiData(
          url,
          body,
          (data) => setCompletedOfferData(data.completed_offer_detail),
          (error) => setCompletedOfferData([])
        )
      );
    };

    Promise.all([
      fetchCustomerRequestData(),
      fetchOfferData(),
      fetchAcceptedOfferData(),
      fetchCompletedOfferData(),
    ])
      .then(() => {})
      .catch((error) => {});
    return () => {
    };
  }, [filterData]); // Re-run effect if filterData get changed

  // function to construct the body based on filterData
  const getRequestBody = (filterData) => {
    let body = {};
    if (filterData?.region) body.region = filterData.region;
    if (filterData?.start_date) body.start_date = filterData.start_date;
    if (filterData?.end_date) body.end_date = filterData.end_date;
    if (filterData?.year) body.year = filterData.year;

    return body;
  };

  return (
    <>
      <Head>
        <title>{t("common:AnalyticsDashboard.MetaTitle")}</title>
      </Head>

      <Header data={status === "authenticated" && sessionData.user.name} />
      <section className="pt_20 pb_20 block_bg_gray_150">
        <FilterDataComponents
          filterDashBoardData={filterDashBoardData}
          onUpdateDateFilter={handleDateFilter}
          countryData={countryData}
        />
        <NewCustomerDashboardDetails initialCounts={filteredData}
        loading={isLoading} 
        />
        <NewOfferDashboardDetails
          initialCounts={analyticsOfferData}
          customerRequestCount={
            filteredData?.filter((item) => item.offer_created === true)
              .length || 0
          }
          loading={isLoading} 
        />
        <AcceptedOfferDashboardDetails
          initialCounts={acceptedOfferData}
          totalOfferCount={analyticsOfferData.length || 0}
          loading={isLoading} 
        />
        <CompletedOfferDashboardDetails
          initialCounts={completedOfferData}
          totalAcceptedOfferCount={acceptedOfferData.length || 0}
          loading={isLoading} 
        />
        <section className="container-fluid">
          <div className="db_customer_detail_wrap">
            <div className="row">
              <div className="col-lg-9 col-md-12 col-sm-12">
                <TotalAmountEarned
                  title={t("common:AnalyticsDashboard.Total revenue earned")}
                  revenueData={totalAmount}
                  isTest={true}
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);


  try {
    return {
      props: {
        data: {
          sessionToken: session.user.myToken ?? "",
        },
      },
    };
  } catch (error) {
    return {
      props: {
        data: null,
      },
    };
  }
}
