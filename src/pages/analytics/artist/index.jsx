import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import {
  analyticsArtistCount,
  analyticsArtistLeadSourceCount,
} from "@/action/analyticsArtist";
import Header from "@/analyticsComponents/header/header";
import CustomerDetails from "@/analyticsComponents/customerDetails/customerDetails";
import TotalCustomers from "@/analyticsComponents/totalCustomers/totalCustomers";
import PieChart from "@/analyticsComponents/pieChart/chart";
import ArtistConversion from "@/analyticsComponents/artistConversion/artistConversion";
import { getSession } from "next-auth/react";
import ComparisonChart from "@/analyticsComponents/comparisonPiechart/comparisonChart";
import { artistConversion } from "@/analyticsComponents/customerConversion/keys";

import ArtistsByCountryTable from "@/analyticsComponents/ArtistsByCountryTable/ArtistsByCountryTable";

export default function Analytics({ data }) {
  const router = useRouter();
  const { status, data: sessionData } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/analytics/login");
    }
  }, [status, router]);

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
        <title>Artist-Analytics</title>
      </Head>

      <Header data={status === "authenticated" && sessionData.user.name} />

      <section className="pt_20 pb_20 block_bg_gray_150">
        <section className="container-fluid">
          <div className="db_customer_detail_wrap">
            <div className="row">
              <div className="col-lg-8 col-md-6 col-sm-12">
                <TotalCustomers
                  title="Total Artists"
                  chartData={data.chartData}
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <PieChart
                  title="Total Artists by gender"
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
              <div className="col-lg-4 col-md-6 col-sm-12">
                <ComparisonChart
                  totalData={data.chartData}
                  title="Normal vs Referred artists"
                  labe_1="Normal artists"
                  labe_2="Referred artists"
                />
              </div>
              <div className="col-lg-8 col-md-6 col-sm-12">
                <ArtistsByCountryTable data={data.chartData} />
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid">
          <div className="db_customer_detail_wrap">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <ArtistConversion
                  title={"Artist Conversion"}
                  token={data.sessionToken}
                  types={artistConversion}
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
    const [data, customerJoinigData] = await Promise.all([
      analyticsArtistCount(session.user.myToken),
      analyticsArtistLeadSourceCount(session.user.myToken),
    ]);

    return {
      props: {
        data: {
          chartData: customerJoinigData ?? [],
          genderCount: data.gender || 0,
          sessionToken: session.user.myToken ?? "",
        },
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        data: null,
      },
    };
  }
}
