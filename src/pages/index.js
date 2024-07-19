import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

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

import jsonData from "@/data/journal.json";

export default function Home({}) {
  const router = useRouter();
  const { allListing } = useDisplayAll();
  const { styleList } = useStyleListing();
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
    getAddress("");
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
        mobileBanner="/m_home_banner.png"
        altText={`${t("common:homePage.bannerTitle.part1")} ${t("common:homePage.bannerTitle.part2")}`}
        title={{
          firstPart:t("common:homePage.bannerTitle.part1"),
          part2:t("common:homePage.bannerTitle.part2"),
        }}
        description={t("common:homePage.bannerContent")}
        buttonText= {t("common:getApp")}
        titleWidth="max_w_480"
        descriptionWidth="max_w_440"
        buttonBg=""
        textColor="color_gray_550"
        mob_textColor="color_white"
        isBadge={false}
      />

      <TattooIdea></TattooIdea>

      <TextsCarousel
        title={t("common:explore")}
        subTitle={t("common:tattooArtists")}
        description=""
        data={allListing.artists}
      />

      <KlarnaBanner />

      <ImageCarosuel
        title={t("common:explore")}
        subTitle={t("common:tattoos")}
        description=""
        data={allListing.tattoo_images}
      />

    

      <ListAppFeature />

      {SwitchJournal(router.locale)}

       {/* <Modal />  */}
    </>
  );
}
