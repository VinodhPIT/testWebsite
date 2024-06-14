import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import useRevenueStore from "@/store/customerAnalytics/revenueList";
import PaymentComparison from "@/analyticsComponents/common/paymentComparison";
import Header from "@/analyticsComponents/common/header";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { offerCount } from "../../api/offerAnalytics.service";
import BarChart from "@/analyticsComponents/common/monthlyBarChart";
import useOfferDetail from "@/store/offerAnalytics/offerDetails";
import PieChart from "@/analyticsComponents/common/chart";
import OfferDeatils from "@/analyticsComponents/offer/offerDetails";
import useTranslation from "next-translate/useTranslation";
import { OFFER_COUNT_KEYS_MAPPING, Label2 ,DISCOUNT_VARIATION} from "@/constants/sharedConstants";

export default function Offer({ data }) {
  const { offerData, fetchOffer, completedOffers, scheduledOffers } =
    useOfferDetail();
  const { revenue, loading, fetchRevenue } = useRevenueStore();
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
        <OfferDeatils offerCount={data.offerCount} token={data.sessionToken} />
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

  try {
    const [data] = await Promise.all([offerCount(session)]);

    return {
      props: {
        data: {
          sessionToken: session.user.myToken ?? "",
          offerCount: data || 0,
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
