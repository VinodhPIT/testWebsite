import React, { useEffect } from "react";
import Head from "next/head";
import { useSession } from "next-auth/react";
import { getSession } from "next-auth/react";
import DashboardDetails from "@/analyticsComponents/dashboard/dashboardDetails";
import Header from "@/analyticsComponents/common/header";
import { analyticsDashboardCount, getCustomerRequestAnalyticsData } from "@/apiConfig/dashboardService";
import { offerCount } from "@/apiConfig/offerAnalyticsService";
import { analyticsArtistCount } from "@/apiConfig/artistAnalyticsService";
import { analyticsCustomerCount } from "@/apiConfig/customerAnalyticsService";
import TotalAmountEarned from "@/analyticsComponents/dashboard/totalRevenue";
import useTotalRevenue from "@/store/dashboardAnalytics/totalRevenue";
import useTranslation from "next-translate/useTranslation";
import FilterDataComponents from "@/analyticsComponents/customer/filterDataComponents";
import NewDashboardDetails from "@/analyticsComponents/dashboard/newDashboardDetails";


const responseFormat = {
  "customer_request_data": [
    {
      "customer_name": "ss dd",
      "profile_created_time": "2023-11-07T07:30:54Z",
      "first_chat_time": "2024-04-16T07:10:37.670302Z",
      "single_request": true,
      "multiple_request": false
    },
    {
      "customer_name": "spider man",
      "profile_created_time": "2024-01-04T10:14:13Z",
      "first_chat_time": null,
      "single_request": false,
      "multiple_request": false
    },
    {
      "customer_name": "nolan nolan",
      "profile_created_time": "2010-01-21T10:08:00Z",
      "first_chat_time": null,
      "single_request": false,
      "multiple_request": false
    },
    {
      "customer_name": "Tomas Tom",
      "profile_created_time": "2024-02-05T06:26:45Z",
      "first_chat_time": null,
      "single_request": false,
      "multiple_request": false
    },
    {
      "customer_name": "december december",
      "profile_created_time": "2015-12-21T10:19:23Z",
      "first_chat_time": null,
      "single_request": false,
      "multiple_request": false
    },
    {
      "customer_name": "test test asd",
      "profile_created_time": "2024-02-02T12:25:02Z",
      "first_chat_time": null,
      "single_request": false,
      "multiple_request": false
    },
    {
      "customer_name": "female female",
      "profile_created_time": "2024-02-07T05:34:36Z",
      "first_chat_time": null,
      "single_request": false,
      "multiple_request": false
    },
    {
      "customer_name": "arun customer arun",
      "profile_created_time": "2017-11-06T12:21:06Z",
      "first_chat_time": null,
      "single_request": false,
      "multiple_request": false
    },
    {
      "customer_name": "test analytic test",
      "profile_created_time": "2024-02-07T05:32:41Z",
      "first_chat_time": null,
      "single_request": false,
      "multiple_request": false
    },
    {
      "customer_name": "hitler boss",
      "profile_created_time": "2023-09-14T11:19:34Z",
      "first_chat_time": null,
      "single_request": false,
      "multiple_request": false
    },
    {
      "customer_name": "asd customer asd",
      "profile_created_time": "2023-11-07T05:45:20Z",
      "first_chat_time": null,
      "single_request": false,
      "multiple_request": false
    },
    {
      "customer_name": "sad sdddd",
      "profile_created_time": "2023-11-06T12:23:14Z",
      "first_chat_time": null,
      "single_request": false,
      "multiple_request": false
    },
    {
      "customer_name": "stiljo stip",
      "profile_created_time": "2024-02-05T06:32:26Z",
      "first_chat_time": null,
      "single_request": false,
      "multiple_request": false
    },
    {
      "customer_name": "binary bin",
      "profile_created_time": "2024-02-07T05:36:27Z",
      "first_chat_time": null,
      "single_request": false,
      "multiple_request": false
    },
    {
      "customer_name": "domi domi",
      "profile_created_time": "2024-02-07T10:07:45Z",
      "first_chat_time": "2024-04-09T06:58:36.542883Z",
      "single_request": false,
      "multiple_request": true
    },
    {
      "customer_name": "gender dender",
      "profile_created_time": "2024-02-08T07:30:40Z",
      "first_chat_time": "2024-04-16T07:05:54.098689Z",
      "single_request": true,
      "multiple_request": false
    },
    {
      "customer_name": "new man new man",
      "profile_created_time": "2024-02-08T07:31:34Z",
      "first_chat_time": "2024-03-15T10:15:53.933071Z",
      "single_request": false,
      "multiple_request": true
    },
    {
      "customer_name": "NOB NOB",
      "profile_created_time": "2024-02-07T05:35:49Z",
      "first_chat_time": null,
      "single_request": false,
      "multiple_request": false
    }
  ]
}

export default function Dashboard({ data: initialData }) {
  const { status, data: sessionData } = useSession();
  const { totalAmount, fetchTotalRevenue } = useTotalRevenue();
  const { t } = useTranslation();

  useEffect(() => {
    fetchTotalRevenue(initialData.sessionToken);
  }, [fetchTotalRevenue, initialData.sessionToken]);
  //api implementation not completed

  // useEffect(()=>{
  //   getCustomerRequestAnalyticsData()
  // })

  const onFilterDashbardData = (region) => {
    getCustomerRequestAnalyticsData({region});
  }

  return (
    <>
      <Head>
        <title>{t("common:AnalyticsDashboard.MetaTitle")}</title>
      </Head>

      <Header data={status === "authenticated" && sessionData.user.name} />

      <section className="pt_20 pb_20 block_bg_gray_150">
        <FilterDataComponents
          onFilterDashbardData={onFilterDashbardData}
        />
        <NewDashboardDetails
          initialCounts={responseFormat.customer_request_data}
          token={initialData.sessionToken}
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
          iosDownloads: data.ios_download_count || 0,
          sessionToken: session.user.myToken ?? "",
          offerData,
          artistCount,
          customerCount,
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
