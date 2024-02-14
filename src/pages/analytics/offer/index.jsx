import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Header from "@/analyticsComponents/header/header";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { offerCount } from "@/action/offerAnalyticsService";
import TotalCustomers from "@/analyticsComponents/totalCustomers/totalCustomers";
import useOfferDetail from "@/store/offerAnalytics/offerDetails";


export default function Offer({ data }) {
  const router = useRouter();
  const { status, data: sessionData } = useSession();

  const { fetchOffer, completedOffers } = useOfferDetail();


  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/analytics/login");
    }
  }, [status, router]);

  useEffect(() => {
    fetchOffer(data.sessionToken);
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
              <div className="col-lg-6 col-md-12 col-sm-12"></div>
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
