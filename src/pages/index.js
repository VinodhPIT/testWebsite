import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import useOpenApp from "@/hooks/useOpenApp";
import useAppStoreLink from "@/hooks/useAppStoreLink";
import useTranslation from "next-translate/useTranslation";

import { useGlobalState } from "@/context/Context";
import useStyleListing from "@/store/styleListing/styleListing";
import useDisplayAll from "@/store/exploreAll/exploreAll";

import Banner from "@/components/banners/Banner";
import KlarnaBanner from "@/components/klarnaBanner/KlarnaBanner";
import TextsCarousel from "@/components/carousel/TextsCarosuel";
import ImageCarosuel from "@/components/carousel/ImageCarosuel";
import CaptionImageCarosuel from "@/components/carousel//CaptionImageCarosuel";
import TattooIdea from "@/components/tattooIdea/TattooIdea";
import TattooJournal from "@/components/homeScreen/tattooJournal";
import ListAppFeature from "@/components/ appFeatureList/ListAppFeature";
import Modal from "@/components/modalPopup/comingSoon";

import { APP_LINK_APPLE, BLUR_URL } from "@/constants/constants";
import jsonData from "@/data/journal.json";

export default function Home({}) {
  const router = useRouter();
  const { allListing } = useDisplayAll();
  const { styleList } = useStyleListing();
  const { openApp } = useOpenApp();
  const { appStoreLink, imageSrc } = useAppStoreLink();
  const {
    getAddress,
    clearStyleId,
    setSearchState,
    setSelectedIds,
    styleCollection,
  } = useGlobalState();

  const { t } = useTranslation();

  function SwitchJournal(locale) {
    switch (locale) {
      case "gb-en":
        return <TattooJournal data={jsonData[router.locale]} />;
      case "de-de":
        return <TattooJournal data={jsonData[router.locale]} />;
      default:
        return null;
    }
  }

  useEffect(() => {
    router.replace(`/${router.locale}${router.asPath}`);
    clearStyleId("");
    setSelectedIds([]);
    getAddress("Location");
    setSearchState((prevSearchState) => ({
      ...prevSearchState,
      query: "",
    }));

    styleCollection();
  }, []);

  return (
    <>
      <Head>
        <title>{t("common:homeScreenSEO.title")}</title>
        <meta
          name="description"
          content={t("common:homeScreenSEO.description")}
        />
        <meta name="keywords" content={t("common:homeScreenSEO.keyword")} />
      </Head>

      <Banner
        bannerImage="/home_banner.png"
        mobileBanner="/home_banner.png"
        altText="Book your tattoo now"
        title={{
          firstPart:"Book your",
          part2:"tattoo now.",
        }}
        description={t("common:homePage.bannerContent")}
        buttonText="Get our mobile app"
        titleWidth="max_w_480"
        descriptionWidth="max_w_440"
        buttonBg="button_primary_white"
        theme="blackTheme"
      />

      <TattooIdea></TattooIdea>

      <TextsCarousel
        title="EXPLORE"
        subTitle="Tattoo Artists"
        description=""
        data={allListing.artists}
      />

      <KlarnaBanner />

      <ImageCarosuel
       title="EXPLORE"
       subTitle="Tattoos"
        description=""
        data={allListing.tattoo_images}
      />

       <CaptionImageCarosuel
         title="EXPLORE"
         subTitle="Tattoo Styles"
          description=""
          data={styleList}
      />

      {/* <PaymentTypes
        title1={t("common:homePage.Verified tattoo artists")}
        content1={t("common:homePage.We curate a selection")}
        title2={t("common:homePage.User-Friendly Interface")}
        content2={t("common:homePage.Navigate inckd effortlessly")}
        title3={t("common:homePage.Secure Transactions")}
        content3={t("common:homePage.Rest easy knowing")}
      /> */}

       <ListAppFeature />

      {SwitchJournal(router.locale)}

      {/* <Modal /> */}
    </>
  );
}
