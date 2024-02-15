import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import useRevenueStore from "@/store/customerAnalytics/revenueList";
import PaymentComparison from "@/analyticsComponents/paymentComparisonChart/paymentComparison";
import Header from "@/analyticsComponents/header/header";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { offerCount } from "@/action/offerAnalyticsService";
import TotalCustomers from "@/analyticsComponents/totalCustomers/totalCustomers";
import useOfferDetail from "@/store/offerAnalytics/offerDetails";
import PieChart from "@/analyticsComponents/pieChart/chart";
import OfferDeatils from "@/analyticsComponents/offerDetails/offerDetails";



export default function Offer({ data }) {
  const router = useRouter();
  const { revenue, loading, fetchRevenue } = useRevenueStore();
  const { status, data: sessionData } = useSession();

  const {offerData , fetchOffer, completedOffers ,scheduledOffers } = useOfferDetail();


  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/analytics/login");
    }
  }, [status, router]);



  const getValues = [
    data.offerCount.discount_used,
    data.offerCount.no_discount_used,
  ];

  const getKeys = Object.keys(data.offerCount)
    .map((key) => {
      switch (key) {
        case "discount_used":
          return "Discount Used";
        case "no_discount_used":
          return "No Discount used";
        default:
          return null;
      }
    })
    .filter((key) => key !== null); // Filter out null values

  const getColor = ["#187e7e", "#81c784"];

  const label = [
    { id: 1, label: "Discount Used", bgColor: "block_bg_green_dark_400" },
    { id: 2, label: "No Discount used", bgColor: "block_bg_green_light_200" },
  ];


  useEffect(() => {
    fetchRevenue(data.sessionToken);
    fetchOffer(data.sessionToken);
  }, []);
  return (
    <>
      <Head>
        <title>Offer-Analytics</title>
      </Head>

      <Header data={status === "authenticated" && sessionData.user.name} />

      <section className="pt_20 pb_20 block_bg_gray_150">
      <OfferDeatils offerCount={data.offerCount} token={data.sessionToken} />
        <section className="container-fluid">
          <div className="db_customer_detail_wrap">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
              <TotalCustomers
                  title="Total scheduled offers"
                  chartData={scheduledOffers}
                  type={"type2"}
                  creationDate="offer_date"
                />


              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">

              <PieChart
                  title="Total Discount"
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
              <div className="col-lg-6 col-md-12 col-sm-12">

              <PaymentComparison
                  title="Total amount earned from completed/canceled offers"
                  label_1={"Completed"}
                  label_2={"Canceled"}
                  revenueData={offerData}
                  isTest={true}
                />


              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
              <PaymentComparison
                  title="Payment methods"
                  label_1={"Klarna"}
                  label_2={"Stripe payment"}
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


              <TotalCustomers
                  title="Total completed offers"
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

  if (!session) {
    return {
      redirect: {
        destination: "/analytics/login",
        permanent: false,
      },
    };
  }

  try {
    const [data] = await Promise.all([offerCount(session.user.myToken)]);

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