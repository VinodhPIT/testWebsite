import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import useTranslation from "next-translate/useTranslation";

import useCanonicalUrl from "@/hooks/useCanonicalUrl";

import { useGlobalState } from "@/context/Context";
import useDisplayAll from "@/store/exploreAll/exploreAll";

import Banner from "@/components/banners/Banner";
import KlarnaBanner from "@/components/klarnaBanner/KlarnaBanner";
import TextsCarousel from "@/components/carousel/TextsCarosuel";
import ImageCarosuel from "@/components/carousel/ImageCarosuel";
import TattooIdea from "@/components/tattooIdea/TattooIdea";
import TattooJournal from "@/components/homeScreen/tattooJournal";
import ListAppFeature from "@/components/ appFeatureList/ListAppFeature";
import Modal from "@/components/modalPopup/comingSoon";

import jsonData from "@/data/journal.json";

export default function Home({ }) {
  const canonicalUrl = useCanonicalUrl();
  const router = useRouter();
  const { allListing } = useDisplayAll();

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
