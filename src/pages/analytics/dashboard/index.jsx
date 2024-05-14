import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import { useSession } from "next-auth/react";
import { getSession } from "next-auth/react";
import Header from "@/analyticsComponents/common/header";
import { analyticsDashboardCount, getAcceptedOfferAnalyticsData, getCompletedOfferAnalyticsData, getCountriesData, getCustomerRequestAnalyticsData, getOfferRequestAnalyticsData} from "@/apiConfig/dashboardService";
import { offerCount } from "@/apiConfig/offerAnalyticsService";
import { analyticsArtistCount } from "@/apiConfig/artistAnalyticsService";
import { analyticsCustomerCount } from "@/apiConfig/customerAnalyticsService";
import TotalAmountEarned from "@/analyticsComponents/dashboard/totalRevenue";
import useTotalRevenue from "@/store/dashboardAnalytics/totalRevenue";
import useTranslation from "next-translate/useTranslation";
import FilterDataComponents from "@/analyticsComponents/customer/filterDataComponents";
import NewCustomerDashboardDetails from "@/analyticsComponents/dashboard/newCustomerDashboardDetails";
import useAnalyticsStore from "@/store/customerAnalytics/calenderFilter";
import API_URL from "@/apiConfig/api.config";
import NewOfferDashboardDetails from "@/analyticsComponents/dashboard/newOfferDashboardDetails";
import AcceptedOfferDashboardDetails from "@/analyticsComponents/dashboard/AcceptedOfferDashboardDetails";
import CompletedOfferDashboardDetails from "@/analyticsComponents/dashboard/CompletedOfferDashboardDetails";

export default function Dashboard({ data: initialData }) {
  const { status, data: sessionData } = useSession();
  const { totalAmount, fetchTotalRevenue } = useTotalRevenue();
  const [analyticsOfferData, setAnalyticsOfferData] = useState(initialData.offerCountData);
  const [acceptedOfferData, setAcceptedOfferData] = useState(initialData.acceptedOfferData);
  const [completedOfferData, setCompletedOfferData] = useState(initialData.completedOfferData);
  const [countryData, setCountryData] = useState([]);
  const [filterData, setFilerData] = useState();
  const [filteredData, setFilteredData] = useState(initialData.customerRequestData.customer_request_data);

  const { t } = useTranslation();
  const {
    handleDateFilter
  } = useAnalyticsStore();
  useEffect(() => {
    fetchTotalRevenue(initialData.sessionToken);
  }, [fetchTotalRevenue, initialData.sessionToken]);

  useEffect(() => {
    getCountriesData(initialData.sessionToken).then(response => {
      setCountryData(response);
    });
  }, []);

  useEffect(() => {
    const fetchCustomerRequestData = async () => {
      try {
        const url = `${process.env.apiDomain}${API_URL.ANALYTICS_DASHBOARD.GET_CUSTOMER_REQUEST_DETAILS_DATA}`;
        const body = {};
        if (filterData?.region) {
          body.region = filterData?.region;
        }

        if (filterData?.start_date) {
          body.start_date = filterData?.start_date;
        }

        if (filterData?.end_date) {
          body.end_date = filterData?.end_date;
        }

        if (filterData?.year) {
          body.year = filterData?.year;
        }
        const response = await axios.post(url, body,
          {
            headers: {
              'Authorization': `Bearer ${initialData.sessionToken}`,
            },
          });
        setFilteredData(response.data.customer_request_data)
      } catch (error) {
        setFilteredData([]);
      }
    }

    const fetchOfferData = async () => {
      try {
        const url = `${process.env.apiDomain}${API_URL.ANALYTICS_DASHBOARD.GET_OFFER_DASHBOARD_DETAILS}`;
        const body = {};
        if (filterData?.region) {
          body.region = filterData?.region;
        }

        if (filterData?.start_date) {
          body.start_date = filterData?.start_date;
        }

        if (filterData?.end_date) {
          body.end_date = filterData?.end_date;
        }

        if (filterData?.year) {
          body.year = filterData?.year;
        }
        const response = await axios.post(url, body,
          {
            headers: {
              'Authorization': `Bearer ${initialData.sessionToken}`,
            },
          });
        setAnalyticsOfferData(response.data.send_offer_details)
      } catch (error) {
        setAnalyticsOfferData([]);
      }
    }

    const fetchAcceptedOfferData = async () => {
      try {
        const url = `${process.env.apiDomain}${API_URL.ANALYTICS_DASHBOARD.GET_ACCEPTED_OFFER_DASHBOARD_DETAILS}`;
        const body = {};
        if (filterData?.region) {
          body.region = filterData?.region;
        }

        if (filterData?.start_date) {
          body.start_date = filterData?.start_date;
        }

        if (filterData?.end_date) {
          body.end_date = filterData?.end_date;
        }

        if (filterData?.year) {
          body.year = filterData?.year;
        }
        const response = await axios.post(url, body,
          {
            headers: {
              'Authorization': `Bearer ${initialData.sessionToken}`,
            },
          });
          setAcceptedOfferData(response.data.accepted_offer_details)
      } catch (error) {
        setAcceptedOfferData([]);
      }
    }

    const fetchCompletedOfferData = async () => {
      try {
        const url = `${process.env.apiDomain}${API_URL.ANALYTICS_DASHBOARD.GET_COMPLETED_OFFER_DASHBOARD_DETAILS}`;
        const body = {};
        if (filterData?.region) {
          body.region = filterData?.region;
        }

        if (filterData?.start_date) {
          body.start_date = filterData?.start_date;
        }

        if (filterData?.end_date) {
          body.end_date = filterData?.end_date;
        }

        if (filterData?.year) {
          body.year = filterData?.year;
        }
        const response = await axios.post(url, body,
          {
            headers: {
              'Authorization': `Bearer ${initialData.sessionToken}`,
            },
          });
          setCompletedOfferData(response.data.completed_offer_detail)
      } catch (error) {
        setCompletedOfferData([]);
      }
    }

    fetchCustomerRequestData();
    fetchOfferData();
    fetchAcceptedOfferData();
    fetchCompletedOfferData();
  }, [filterData]);

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
        <NewCustomerDashboardDetails
          initialCounts={filteredData}
        />
        <NewOfferDashboardDetails
          initialCounts={analyticsOfferData}
          customerRequestCount={filteredData?.filter(item => item.offer_created === true).length || 0}
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
      data, 
      offerData, 
      artistCount, 
      customerCount, 
      offerCountData, 
      customerRequestData,
      acceptedOfferData,
      completedOfferData
    ] = await Promise.all([
      analyticsDashboardCount(session.user.myToken),
      offerCount(session.user.myToken),
      analyticsArtistCount(session.user.myToken),
      analyticsCustomerCount(session.user.myToken),
      getOfferRequestAnalyticsData(session.user.myToken),
      getCustomerRequestAnalyticsData(session.user.myToken),
      getAcceptedOfferAnalyticsData(session.user.myToken),
      getCompletedOfferAnalyticsData(session.user.myToken)
    ]);

    return {
      props: {
        data: {
          androidDownloads: data.android_download_count || 0,
          artistCount,
          customerCount,
          customerRequestData:customerRequestData,
          iosDownloads: data.ios_download_count || 0,
          offerCountData: offerCountData.send_offer_details,
          offerData,
          sessionToken: session.user.myToken ?? "",
          acceptedOfferData: acceptedOfferData.accepted_offer_details,
          completedOfferData: completedOfferData.completed_offer_detail
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
