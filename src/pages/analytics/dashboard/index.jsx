import React, { useEffect, useState } from "react";
import Head from "next/head";

import axios from "axios";
import { useSession } from "next-auth/react";
import { getSession } from "next-auth/react";
import useTranslation from "next-translate/useTranslation";

import useTotalRevenue from "@/store/dashboardAnalytics/totalRevenue";
import useAnalyticsStore from "@/store/customerAnalytics/calenderFilter";
import Header from "@/analyticsComponents/common/header";
import TotalAmountEarned from "@/analyticsComponents/dashboard/totalRevenue";
import FilterDataComponents from "@/analyticsComponents/customer/filterDataComponents";
import NewCustomerDashboardDetails from "@/analyticsComponents/dashboard/newCustomerDashboardDetails";
import NewOfferDashboardDetails from "@/analyticsComponents/dashboard/newOfferDashboardDetails";
import AcceptedOfferDashboardDetails from "@/analyticsComponents/dashboard/AcceptedOfferDashboardDetails";
import CompletedOfferDashboardDetails from "@/analyticsComponents/dashboard/CompletedOfferDashboardDetails";

import {
  getAcceptedOfferAnalyticsData,
  getCompletedOfferAnalyticsData,
  getCountriesData,
  getCustomerRequestAnalyticsData,
  getOfferRequestAnalyticsData,
} from "@/apiConfig/dashboardService";
import API_URL from "@/apiConfig/api.config";

export default function Dashboard({ data: initialData }) {
  const { status, data: sessionData } = useSession();
  const { totalAmount, fetchTotalRevenue } = useTotalRevenue();
  const [analyticsOfferData, setAnalyticsOfferData] = useState(
    initialData.offerCountData
  );
  const [acceptedOfferData, setAcceptedOfferData] = useState(
    initialData.acceptedOfferData
  );
  const [completedOfferData, setCompletedOfferData] = useState(
    initialData.completedOfferData
  );
  const [countryData, setCountryData] = useState([]);
  const [filterData, setFilerData] = useState();
  const [filteredData, setFilteredData] = useState(
    initialData.customerRequestData.customer_request_data
  );

  const { t } = useTranslation();
  const { handleDateFilter } = useAnalyticsStore();
  useEffect(() => {
    fetchTotalRevenue(initialData.sessionToken);
  }, [fetchTotalRevenue, initialData.sessionToken]);

  useEffect(() => {
    getCountriesData(initialData.sessionToken).then((response) => {
      setCountryData(response);
    });
  }, []);

  useEffect(() => {
    // Generic fetch function
    const fetchApiData = async (url, body, onSuccess, onError) => {
      try {
        const response = await axios.post(url, body, {
          headers: {
            Authorization: `Bearer ${initialData.sessionToken}`,
          },
        });
        onSuccess(response.data);
      } catch (error) {
        onError(error);
      }
    };

    const fetchCustomerRequestData = () => {
      const url = `${process.env.apiDomain}${API_URL.ANALYTICS_DASHBOARD.GET_CUSTOMER_REQUEST_DETAILS_DATA}`;
      const body = getRequestBody(filterData);

      fetchApiData(
        url,
        body,
        (data) => setFilteredData(data.customer_request_data),
        (error) => setFilteredData([])
      );
    };

    const fetchOfferData = () => {
      const url = `${process.env.apiDomain}${API_URL.ANALYTICS_DASHBOARD.GET_OFFER_DASHBOARD_DETAILS}`;
      const body = getRequestBody(filterData);

      fetchApiData(
        url,
        body,
        (data) => setAnalyticsOfferData(data.send_offer_details),
        (error) => setAnalyticsOfferData([])
      );
    };

    const fetchAcceptedOfferData = () => {
      const url = `${process.env.apiDomain}${API_URL.ANALYTICS_DASHBOARD.GET_ACCEPTED_OFFER_DASHBOARD_DETAILS}`;
      const body = getRequestBody(filterData);

      fetchApiData(
        url,
        body,
        (data) => setAcceptedOfferData(data.accepted_offer_details),
        (error) => setAcceptedOfferData([])
      );
    };

    const fetchCompletedOfferData = () => {
      const url = `${process.env.apiDomain}${API_URL.ANALYTICS_DASHBOARD.GET_COMPLETED_OFFER_DASHBOARD_DETAILS}`;
      const body = getRequestBody(filterData);

      fetchApiData(
        url,
        body,
        (data) => setCompletedOfferData(data.completed_offer_detail),
        (error) => setCompletedOfferData([])
      );
    };

    fetchCustomerRequestData();
    fetchOfferData();
    fetchAcceptedOfferData();
    fetchCompletedOfferData();
  }, [filterData]);

  // function to construct the  body based on filterData
  const getRequestBody = (filterData) => {
    let body = {};
    if (filterData?.region) body.region = filterData.region;
    if (filterData?.start_date) body.start_date = filterData.start_date;
    if (filterData?.end_date) body.end_date = filterData.end_date;
    if (filterData?.year) body.year = filterData.year;

    return body;
  };

  const filterDashBoardData = (data) => {
    setFilerData(data);
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
        <NewCustomerDashboardDetails initialCounts={filteredData} />
        <NewOfferDashboardDetails
          initialCounts={analyticsOfferData}
          customerRequestCount={
            filteredData?.filter((item) => item.offer_created === true)
              .length || 0
          }
        />
        <AcceptedOfferDashboardDetails
          initialCounts={acceptedOfferData}
          totalOfferCount={analyticsOfferData.length || 0}
        />
        <CompletedOfferDashboardDetails
          initialCounts={completedOfferData}
          totalAcceptedOfferCount={acceptedOfferData.length || 0}
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

  if (!session) {
    return {
      redirect: {
        destination: "/analytics/login",
        permanent: false,
      },
    };
  }

  try {
    const [
      offerCountData,
      customerRequestData,
      acceptedOfferData,
      completedOfferData,
    ] = await Promise.all([
      getOfferRequestAnalyticsData(session.user.myToken),
      getCustomerRequestAnalyticsData(session.user.myToken),
      getAcceptedOfferAnalyticsData(session.user.myToken),
      getCompletedOfferAnalyticsData(session.user.myToken),
    ]);

    return {
      props: {
        data: {
          customerRequestData: customerRequestData, //
          offerCountData: offerCountData.send_offer_details, //
          sessionToken: session.user.myToken ?? "",
          acceptedOfferData: acceptedOfferData.accepted_offer_details, //
          completedOfferData: completedOfferData.completed_offer_detail, //
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
