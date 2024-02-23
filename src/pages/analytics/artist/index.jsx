import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { getSession, useSession } from "next-auth/react";
import ArtistDetails from "@/analyticsComponents/artistDetails";
import Header from "@/analyticsComponents/header/header";
import {
  analyticsArtistCount,
  analyticsArtistLeadSourceCount,
} from "@/apiConfig/artistAnalyticsService";
import ArtistsByCountryTable from "@/analyticsComponents/ArtistsByCountryTable/ArtistsByCountryTable";
import ComparisonChart from "@/analyticsComponents/comparisonPiechart/comparisonChart";
import YourComponent from "@/analyticsComponents/customerConversion/keys";
import TotalCustomers from "@/analyticsComponents/totalCustomers/totalCustomers";
import PieChart from "@/analyticsComponents/pieChart/chart";
import ArtistConversion from "@/analyticsComponents/artistConversion/artistConversion";
import useTranslation from "next-translate/useTranslation";



export default function ArtistAnalytics({ data: initialData }) {

  const { status, data } = useSession();
  const router = useRouter();
  const { t } = useTranslation();
  const { artistConversion } = YourComponent();

  const getValues = Object.values(initialData.genderCount);

  const getKeys = Object.keys(initialData.genderCount).map((key) => {
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


  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/analytics/login");
    }
  }, [status, router]);





  return (
    <>
      <Head>
      <title>{t("common:AnalyticsArtist.MetaTitle")}</title>
      </Head>

      <Header data={status === "authenticated" && data.user.name} />
      <section className="pt_20 pb_20 block_bg_gray_150">
        <ArtistDetails
          initialCounts={initialData}
          token={initialData.sessionToken}
        />

        <section className="container-fluid">
          <div className="db_customer_detail_wrap">
            <div className="row">
              <div className="col-lg-8 col-md-6 col-sm-12">
                <TotalCustomers
                  title={t("common:AnalyticsArtist.Total Artists")}
                  chartData={initialData.chartData}

                  type={"type1"} creationDate="created_date"
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <PieChart
                  title={t("common:AnalyticsArtist.Total Artists by gender")}
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
                  totalData={initialData.chartData}
                  title={t("common:AnalyticsArtist.Normal vs Referred artists")}
                  labe_1={t("common:AnalyticsArtist.Normal artists")}
                  labe_2={t("common:AnalyticsArtist.Referred artists")}
                />
              </div>
              <div className="col-lg-8 col-md-6 col-sm-12">
                <ArtistsByCountryTable data={initialData.chartData} />
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid">
          <div className="db_customer_detail_wrap">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <ArtistConversion
                  data={initialData.chartData}
                  title={t("common:AnalyticsArtist.Artist Conversion")}
                  token={initialData.sessionToken}
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
          artistCompletedOffers: data.artist_with_offer || 0,
          artistInCommunication: data.contacted_artist || 0,
          joinedFromApp: data.joined_from_app || 0,
          joinedFromWeb: data.joined_from_website || 0,
          joinedUsingReferral: data.referral_used || 0,
          nonPublicProfiles: data.not_public_artist || 0,
          notCompletedAnyOffer: data.no_offer_completed || 0,
          notContactedCustomer: data.no_contacted || 0,
          notCreatedAnyOffers: data.no_offer_created || 0,
          sessionToken: session.user.myToken ?? "",
          totalArtists: data.total_artist || 0,
          totalPublicArtists: data.public_artist || 0,
          genderCount: data.gender || 0,
        },
      },
    };
  } catch (error) {
    return {
      data: null,
    };
  }
}
