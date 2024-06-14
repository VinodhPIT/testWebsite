import React, { useEffect } from "react";
import Head from "next/head";
import { useSession } from "next-auth/react";
import { getSession } from "next-auth/react";
import DashboardDetails from "@/analyticsComponents/dashboard/dashboardDetails";
import Header from "@/analyticsComponents/common/header";
import {analyticsArtistCount} from "@/pages/api/artistAnalytics.service";
import { analyticsDashboardCount } from "@/pages/api/dashboard.service";
import { offerCount } from "@/pages/api/offerAnalytics.service";
import { analyticsCustomerCount } from "@/pages/api/customerAnalytics.service";
import TotalAmountEarned from "@/analyticsComponents/dashboard/totalRevenue";
import useTotalRevenue from "@/store/dashboardAnalytics/totalRevenue";
import useTranslation from "next-translate/useTranslation";

export default function Dashboard({ data: initialData }) {
  const { status, data: sessionData } = useSession();
  const { totalAmount, fetchTotalRevenue } = useTotalRevenue();
  const { t } = useTranslation();


  useEffect(() => {
    fetchTotalRevenue();
  }, []);

  return (
    <>
      <Head>
        <title>{t("common:AnalyticsDashboard.MetaTitle")}</title>
      </Head>

      <Header data={status === "authenticated" && sessionData.user.name} />

      <section className="pt_20 pb_20 block_bg_gray_150">
        <DashboardDetails
          initialCounts={initialData}
          token={initialData.sessionToken}
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
    const [data, offerData, artistCount, customerCount] = await Promise.all([
      analyticsDashboardCount(session),
      offerCount(session),
      analyticsArtistCount(session),
      analyticsCustomerCount(session),
    ]);

    return {
      props: {
        data: {
          androidDownloads: data.android_download_count || 0,
          iosDownloads: data.ios_download_count || 0,
          sessionToken: session,
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
