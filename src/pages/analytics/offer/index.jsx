import React, { useEffect } from "react";
import Head from "next/head";

import { useSession, getSession } from "next-auth/react";
import useTranslation from "next-translate/useTranslation";

import Header from "@/analyticsComponents/common/header";
import PaymentComparison from "@/analyticsComponents/common/paymentComparison";
import BarChart from "@/analyticsComponents/common/monthlyBarChart";
import PieChart from "@/analyticsComponents/common/chart";
import OfferDetails from "@/analyticsComponents/offer/offerDetails";

import useRevenueStore from "@/store/customerAnalytics/revenueList";
import useOfferDetail from "@/store/offerAnalytics/offerDetails";

import API_URL from "@/apiConfig/api.config";
import { axiosInstance } from "@/apiConfig/axios.instance";

import {
  OFFER_COUNT_KEYS_MAPPING,
  Label2,
  DISCOUNT_VARIATION,
} from "@/constants/sharedConstants";

export default function Offer({ data }) {
  const { offerData, fetchOffer, completedOffers, scheduledOffers } =
    useOfferDetail();
  const { revenue, fetchRevenue } = useRevenueStore();
  const { status, data: sessionData } = useSession();
  const { t } = useTranslation();

  const getKeys = Object.keys(data.offerCount)
    .map((key) => OFFER_COUNT_KEYS_MAPPING[key])
    .filter((value) => value !== undefined);

  const getValues = [
    data.offerCount.discount_used,
    data.offerCount.no_discount_used,
  ];

  useEffect(() => {
    fetchRevenue();
    fetchOffer();
  }, [fetchRevenue, fetchOffer, data.sessionToken]);

  return (
    <>
      <Head>
        <title>{t("common:AnalyticsOffer.MetaTitle")}</title>
      </Head>

      <Header data={status === "authenticated" && sessionData.user.name} />

      <section className="pt_20 pb_20 block_bg_gray_150">
        <OfferDetails offerCount={data.offerCount} token={data.sessionToken} />
        <section className="container-fluid">
          <div className="db_customer_detail_wrap">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <BarChart
                  title={t("common:AnalyticsOffer.Total scheduled offers")}
                  chartData={scheduledOffers}
                  type={"type2"}
                  creationDate="offer_date"
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <PieChart
                  title={t("common:AnalyticsOffer.Total Discount")}
                  getKeys={getKeys}
                  getValues={getValues}
                  getColor={DISCOUNT_VARIATION}
                  label={Label2}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid">
          <div className="db_customer_detail_wrap">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <PaymentComparison
                  title={t(
                    "common:AnalyticsOffer.Total amount earned from completed/canceled offers"
                  )}
                  label_1={t("common:AnalyticsOffer.Completed")}
                  label_2={t("common:AnalyticsOffer.Canceled")}
                  revenueData={offerData}
                  isTest={true}
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
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
                <BarChart
                  title={t("common:AnalyticsOffer.Total completed offers")}
                  chartData={completedOffers}
                  type={"type2"}
                  creationDate="offer_date"
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

  // Initialized Default data
  const defaultData = {
    sessionToken:"",
    offerCount: {},
  };

  try {
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${session.user.myToken}`,
      },
    };
    const offerData = await  axiosInstance.get( API_URL.ANALYTICS_OFFER.GET_OFFER_COUNT, axiosConfig);
    return {
      props: {
        data: {
          ...defaultData,
          sessionToken: session.user.myToken ?? "",
          offerCount: offerData.data,
        },
      },
    };
  } catch (error) {
    return {
      props: {
        data:defaultData,
      },
    };
  }
}
