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

    // Initialized Default data all keys initialized to 0 or []
    const defaultData = {
      chartData: [],
      contactedWithNoOffer: 0,
      deletedCustomers: 0,
      genderCount: 0,
      joinedFromApp: 0,
      joinedFromWeb: 0,
      noCompletedOffer: 0,
      notCompletedAnyOffer: 0,
      notContacted: 0,
      notCreatedAnyOffers: 0,
      sessionToken: session.user.myToken ?? "",
      referralUsedCustomers: 0,
      totalCustomers: 0,
      voucherUserCustomers: 0,
      role: session.user.role ?? "",
    };


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

        // Destructure the data from responses
        const customerCountData = customerCountResponse.data;
        const customerDetailsData = customerDetailsResponse.data;
   
    return {
      props: {
        data: {
          ...defaultData, // Spreading defaultData to merge with fetched data
          role: session.user.role ?? "",
          chartData: customerDetailsData ?? [],
          contactedWithNoOffer: customerCountData.contacted_with_no_offer || 0,
          deletedCustomers: customerCountData.deleted || 0,
          genderCount: customerCountData.gender || 0,
          joinedFromApp: customerCountData.joined_from_app || 0,
          joinedFromWeb: customerCountData.joined_from_website || 0,
          noCompletedOffer: customerCountData.customer_no_offer_completed || 0,
          notContacted: customerCountData.no_contacted || 0,
          referralUsedCustomers: customerCountData.referral_used_customer || 0,
          sessionToken: session.user.myToken ?? "",
          totalCustomers: customerCountData.total_count || 0,
          voucherUserCustomers: customerCountData.voucher_used_customer || 0,
        },
      },
    };
  } catch (error) {
    return {
      props: {
        data: defaultData,
      },
    };
  }
}
