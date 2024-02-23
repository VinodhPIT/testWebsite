import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import {
  analyticsCustomerCount,
  analyticsCustomerLeadSourceCount,
} from "@/apiConfig/customerAnalyticsService";
import Header from "@/analyticsComponents/header/header";
import CustomerDetails from "@/analyticsComponents/customerDetails/customerDetails";
import TotalCustomers from "@/analyticsComponents/totalCustomers/totalCustomers";
import PieChart from "@/analyticsComponents/pieChart/chart";
import CustomerConversion from "@/analyticsComponents/customerConversion/customerConversion";
import useRevenueStore from "@/store/customerAnalytics/revenueList";
import { getSession } from "next-auth/react";
import PaymentComparison from "@/analyticsComponents/paymentComparisonChart/paymentComparison";
import ComparisonChart from "@/analyticsComponents/comparisonPiechart/comparisonChart";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import CustomerContactTime from "@/analyticsComponents/customerContactTime/customerContactTime";

export default function Analytics({ data }) {
  const { status, data: sessionData } = useSession();
  const { revenue, loading, fetchRevenue } = useRevenueStore();
  const { t } = useTranslation();

  useEffect(() => {
    fetchRevenue(data.sessionToken);
  }, []);

  const getValues = Object.values(data.genderCount);

  const getKeys = Object.keys(data.genderCount).map((key) => {
    switch (key) {
      case "male_count":
        return "Male";
      case "female_count":
        return "Female";
      case "non_binary_count":
        return "Other";
      default:
        return key;
    }
  });

  const getColor = ["#1976D2", "#FF80FF", "#EAEAEA"];

  const label = [
    { id: 1, label: "Male", bgColor: "block_bg_blue" },
    { id: 2, label: "Female", bgColor: "block_bg_pink_100" },
    { id: 3, label: "Other", bgColor: "block_bg_gray_light_200" },
  ];

  return (
    <>
      <Head>
        <title>{t("common:AnalyticsCustomer.MetaTitle")}</title>
      </Head>

      <Header data={status === "authenticated" && sessionData.user.name} />

      <section className="pt_20 pb_20 block_bg_gray_150">
        <CustomerDetails initialCounts={data} token={data.sessionToken} />
        <section className="container-fluid">
          <div className="db_customer_detail_wrap">
            <div className="row">
              <div className="col-lg-8 col-md-6 col-sm-12">
                <TotalCustomers
                  title={t("common:AnalyticsCustomer.TotalCustomers")}
                  chartData={data.chartData}
                  type="type1"
                  creationDate="created_date"
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <PieChart
                  title={t("common:AnalyticsCustomer.TotalCustomersByGender")}
                  getKeys={getKeys}
                  getValues={getValues}
                  getColor={getColor}
                  label={label}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid">
          <div className="db_customer_detail_wrap">
            <div className="row">
              <div className="col-lg-12 col-md-6 col-sm-12">
                <CustomerContactTime
                  title="Customer average time"
                  chartData={data.chartData}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid">
          <div className="db_customer_detail_wrap">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                {loading ? null : (
                  <ComparisonChart
                    totalData={data.chartData}
                    title={t(
                      "common:AnalyticsCustomer.Normal vs referred customers"
                    )}
                    labe_1="Normal Customers"
                    labe_2="Referred Customers"
                  />
                )}
              </div>
              <div className="col-lg-8 col-md-6 col-sm-12">
                <PaymentComparison
                  title={t("common:Payment methods")}
                  label_1={t("common:menus.klarna")}
                  label_2={t("common:Stripe payment")}
                  revenueData={revenue}
                  isTest={false}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid">
          <div className="db_customer_detail_wrap">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                {data.role === "Analytic Admin" && (
                  <CustomerConversion token={data.sessionToken} />
                )}
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
    const [data, customerJoinigData] = await Promise.all([
      analyticsCustomerCount(session.user.myToken),
      analyticsCustomerLeadSourceCount(session.user.myToken),
    ]);

    return {
      props: {
        data: {
          role: session.user.role ?? "",
          chartData: customerJoinigData ?? [],
          contactedWithNoOffer: data.contacted_with_no_offer || 0,
          deletedCustomers: data.deleted || 0,
          genderCount: data.gender || 0,
          joinedFromApp: data.joined_from_app || 0,
          joinedFromWeb: data.joined_from_website || 0,
          noCompletedOffer: data.customer_no_offer_completed || 0,
          notContacted: data.no_contacted || 0,
          referralUsedCustomers: data.referral_used_customer || 0,
          sessionToken: session.user.myToken ?? "",
          totalCustomers: data.total_count || 0,
          voucherUserCustomers: data.voucher_used_customer || 0,
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
