import React, { useEffect, useRef } from "react";
import Head from "next/head";

import { useSession, getSession } from "next-auth/react";
import useTranslation from "next-translate/useTranslation";

import Header from "@/analyticsComponents/common/header";
import CustomerDetails from "@/analyticsComponents/customer/customerDetails";
import BarChart from "@/analyticsComponents/common/monthlyBarChart";
import PieChart from "@/analyticsComponents/common/chart";
import CustomerConversion from "@/analyticsComponents/customer/customerConversion";
import PaymentComparison from "@/analyticsComponents/common/paymentComparison";
import ComparisonChart from "@/analyticsComponents/customer/comparisonChart";
import CustomerContactTime from "@/analyticsComponents/customer/customerContactTime";

import useRevenueStore from "@/store/customerAnalytics/revenueList";

import {
  GET_COLOR,
  GENDER_COUNT_KEYS_MAPPING,
  LABEL,
} from "@/constants/sharedConstants";

import API_URL from "@/apiConfig/api.config";
import { axiosInstance } from "@/apiConfig/axios.instance";

export default function Customer({ data }) {

  const { revenue, loading, fetchRevenue } = useRevenueStore();
  const { status, data: sessionData } = useSession();
  const { t } = useTranslation();

  const getKeys = Object.keys(data.genderCount).map((key) => {
    return GENDER_COUNT_KEYS_MAPPING[key] || key;
  });

  const getValues = Object.values(data.genderCount);

  useEffect(() => {
    fetchRevenue();
  }, [fetchRevenue]);
  

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
                  <CustomerConversion  />
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
  // Get the user session
  const session = await getSession(context);

  try {
    // Configure axios instance with authorization header
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${session.user.myToken}`,
      },
    };

    const [customerCountResponse, customerDetailsResponse] = await Promise.all([
      axiosInstance.get(
        API_URL.ANALYTICS_CUSTOMER.GET_CUSTOMER_COUNT,
        axiosConfig
      ),
      axiosInstance.get(
        API_URL.ANALYTICS_CUSTOMER.GET_CUSTOMER_DETAILS,
        axiosConfig
      ),
    ]);

    // Destructured necessary data
    const {
      contacted_with_no_offer: contactedWithNoOffer = 0,
      deleted = 0,
      gender = 0,
      joined_from_app: joinedFromApp = 0,
      joined_from_website: joinedFromWeb = 0,
      customer_no_offer_completed: noCompletedOffer = 0,
      no_contacted: notContacted = 0,
      referral_used_customer: referralUsedCustomers = 0,
      total_count: totalCustomers = 0,
      voucher_used_customer: voucherUserCustomers = 0,
    } = customerCountResponse.data || {};

    const chartData = customerDetailsResponse.data || [];

    return {
      props: {
        data: {
          role: session.user.role ?? "",
          chartData,
          contactedWithNoOffer,
          deletedCustomers: deleted,
          genderCount: gender,
          joinedFromApp,
          joinedFromWeb,
          noCompletedOffer,
          notContacted,
          referralUsedCustomers,
          sessionToken: session.user.myToken ?? "",
          totalCustomers,
          voucherUserCustomers,
        },
      },
    };
  } catch (error) {
    // Log the error if API request fails
    console.error("Error fetching analytics data:", error);
    return {
      props: {
        data: null,
      },
    };
  }
}
