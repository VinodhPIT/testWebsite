import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import { useSession } from "next-auth/react";
import { getSession } from "next-auth/react";
import Header from "@/analyticsComponents/common/header";
import { analyticsDashboardCount, getCountriesData, getCustomerRequestAnalyticsData } from "@/apiConfig/dashboardService";
import { offerCount } from "@/apiConfig/offerAnalyticsService";
import { analyticsArtistCount } from "@/apiConfig/artistAnalyticsService";
import { analyticsCustomerCount } from "@/apiConfig/customerAnalyticsService";
import TotalAmountEarned from "@/analyticsComponents/dashboard/totalRevenue";
import useTotalRevenue from "@/store/dashboardAnalytics/totalRevenue";
import useTranslation from "next-translate/useTranslation";
import FilterDataComponents from "@/analyticsComponents/customer/filterDataComponents";
import NewDashboardDetails from "@/analyticsComponents/dashboard/newDashboardDetails";
import useAnalyticsStore from "@/store/customerAnalytics/calenderFilter";
import API_URL from "@/apiConfig/api.config";

export default function Dashboard({ data: initialData }) {
  const { status, data: sessionData } = useSession();
  const { totalAmount, fetchTotalRevenue } = useTotalRevenue();
  const [filterData, setFilerData] = useState();
  const [countryData, setCountryData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

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
    const fetchData = async () => {
      try {
        const url = `${process.env.apiDomain}${API_URL.ANALYTICS_DASHBOARD.GET_CUSTOMER_REQUEST_DETAILS_DATA}`;
        const params = {};
        if (filterData?.region) {
          params.region = filterData?.region;
        }

        if (filterData?.start_date) {
          params.start_date = filterData?.start_date;
        }

        if (filterData?.end_date) {
          params.end_date = filterData?.end_date;
        }

        if (filterData?.year) {
          params.year = filterData?.year;
        }
        const response = await axios.post(url, params,
          {
            headers: {
              'Authorization': `Bearer ${initialData.sessionToken}`,
            },
          });
        setFilteredData(response.data.customer_request_data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [filterData]);

  useEffect(() => {
    getCustomerRequestAnalyticsData(initialData.sessionToken).then(response => {
      setFilteredData(response.customer_request_data)
    });
  }, []);

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
        <NewDashboardDetails
          initialCounts={filteredData}
        />
        {/* <DashboardDetails
          initialCounts={initialData}  // old component
          token={initialData.sessionToken}
        /> */}

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
    const [data, offerData, artistCount, customerCount] = await Promise.all([
      analyticsDashboardCount(session.user.myToken),
      offerCount(session.user.myToken),
      analyticsArtistCount(session.user.myToken),
      analyticsCustomerCount(session.user.myToken),
    ]);

    return {
      props: {
        data: {
          androidDownloads: data.android_download_count || 0,
          artistCount,
          customerCount,
          iosDownloads: data.ios_download_count || 0,
          offerData,
          sessionToken: session.user.myToken ?? ""
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
