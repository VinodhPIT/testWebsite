import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import useRevenueStore from "@/store/customerAnalytics/revenueList";
import PaymentComparison from "@/analyticsComponents/paymentComparisonChart/paymentComparison";
import Header from "@/analyticsComponents/header/header";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { offerCount } from "@/action/offerAnalyticsService";

export default function Offer({ data }) {
  const router = useRouter();
  const { revenue, loading, fetchRevenue } = useRevenueStore();
  const { status, data: sessionData } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/analytics/login");
    }
  }, [status, router]);

  useEffect(() => {
    fetchRevenue(data.sessionToken);
  }, []);
  return (
    <>
      <Head>
        <title>Offer-Analytics</title>
      </Head>

      <Header data={status === "authenticated" && sessionData.user.name} />

      <section className="pt_20 pb_20 block_bg_gray_150">
        <section className="container-fluid">
          <div className="db_customer_detail_wrap">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12"></div>
              <div className="col-lg-6 col-md-12 col-sm-12"></div>
            </div>
          </div>
        </section>

        <section className="container-fluid">
          <div className="db_customer_detail_wrap">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12"></div>
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
              <div className="col-lg-12 col-md-12 col-sm-12"></div>
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
