import React, { useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import {
  analyticsCustomerCount,
  analyticsCustomerLeadSourceCount,
} from "@/apiConfig/customerAnalyticsService";
import Header from "@/analyticsComponents/common/header";
import CustomerDetails from "@/analyticsComponents/customer/customerDetails";
import BarChart from "@/analyticsComponents/common/monthlyBarChart";
import PieChart from "@/analyticsComponents/common/chart";
import CustomerConversion from "@/analyticsComponents/customer/customerConversion";
import useRevenueStore from "@/store/customerAnalytics/revenueList";
import { getSession } from "next-auth/react";
import PaymentComparison from "@/analyticsComponents/common/paymentComparison";
import ComparisonChart from "@/analyticsComponents/customer/comparisonChart";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import CustomerContactTime from "@/analyticsComponents/customer/customerContactTime";
import {
  GET_COLOR,
  GENDER_COUNT_KEYS_MAPPING,
  LABEL,
} from "@/constants/sharedConstants";

export default function Customer({ data }) {
  const { revenue, loading, fetchRevenue } = useRevenueStore();
  const { status, data: sessionData } = useSession();
  const { t } = useTranslation();

  const getKeys = Object.keys(data.genderCount).map((key) => {
    return GENDER_COUNT_KEYS_MAPPING[key] || key;
  });

  const getValues = Object.values(data.genderCount);

  useEffect(() => {
    fetchRevenue(data.sessionToken);
  }, [fetchRevenue, data.sessionToken]);

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
                <BarChart
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
                  getColor={GET_COLOR}
                  label={LABEL}
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
