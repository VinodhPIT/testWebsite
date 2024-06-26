import React from "react";
import Head from "next/head";

import { getSession, useSession } from "next-auth/react";
import useTranslation from "next-translate/useTranslation";

import Header from "@/analyticsComponents/common/header";
import ArtistDetails from "@/analyticsComponents/artist/artistDetails";
import ArtistsByCountryTable from "@/analyticsComponents/artist/artistsByCountry";
import ComparisonChart from "@/analyticsComponents/customer/comparisonChart";
import BarChart from "@/analyticsComponents/common/monthlyBarChart";
import PieChart from "@/analyticsComponents/common/chart";
import ArtistConversion from "@/analyticsComponents/artist/artistConversion";

import API_URL from "@/apiConfig/api.config";
import { axiosInstance } from "@/apiConfig/axios.instance";

import {
  GET_COLOR,
  GENDER_COUNT_KEYS_MAPPING,
  LABEL,
} from "@/constants/index";

export default function ArtistAnalytics({ data: initialData }) {

  const { status, data } = useSession();
  const { t } = useTranslation();

  const getKeys = Object.keys(initialData.genderCount).map((key) => {
    return GENDER_COUNT_KEYS_MAPPING[key] || key;
  });

  const getValues = Object.values(initialData.genderCount);

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
                <BarChart
                  title={t("common:AnalyticsArtist.Total Artists")}
                  chartData={initialData.chartData}
                  type={"type1"}
                  creationDate="created_date"
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <PieChart
                  title={t("common:AnalyticsArtist.Total Artists by gender")}
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
  // Get the user session
  const session = await getSession(context);

  // Initialized Default data all keys initialized to 0 or []
  const defaultData = {
    chartData: [],
    artistCompletedOffers: 0,
    artistInCommunication: 0,
    joinedFromApp: 0,
    joinedFromWeb: 0,
    joinedUsingReferral: 0,
    nonPublicProfiles: 0,
    notCompletedAnyOffer: 0,
    notContactedCustomer: 0,
    notCreatedAnyOffers: 0,
    sessionToken: session.user.myToken ?? "",
    totalArtists: 0,
    totalPublicArtists: 0,
    genderCount: 0,
  };

  try {
    // Configure axios instance with authorization header
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${session.user.myToken}`,
      },
    };

    const [artistCountResponse, artistDetailsResponse] = await Promise.all([
      axiosInstance.get(API_URL.ANALYTICS_ARTISTS.GET_ARTIST_COUNT, axiosConfig),
      axiosInstance.get(API_URL.ANALYTICS_ARTISTS.GET_ARTIST_DETAILS, axiosConfig),
    ]);

    // Destructure the data from responses
    const artistCountData = artistCountResponse.data;
    const artistDetailsData = artistDetailsResponse.data;

    return {
      props: {
        data: {
          ...defaultData, // Spreading defaultData to merge with fetched data
          chartData: artistDetailsData ??'',
          artistCompletedOffers: artistCountData.artist_with_offer || 0,
          artistInCommunication: artistCountData.contacted_artist || 0,
          joinedFromApp: artistCountData.joined_from_app || 0 ,
          joinedFromWeb: artistCountData.joined_from_website || 0,
          joinedUsingReferral: artistCountData.referral_used || 0,
          nonPublicProfiles: artistCountData.not_public_artist || 0,
          notCompletedAnyOffer: artistCountData.no_offer_completed || 0,
          notContactedCustomer: artistCountData.no_contacted || 0,
          notCreatedAnyOffers: artistCountData.no_offer_created || 0,
          totalArtists: artistCountData.total_artist || 0,
          totalPublicArtists: artistCountData.public_artist || 0,
          genderCount: artistCountData.gender || 0,
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

