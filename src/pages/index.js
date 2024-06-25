import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

import useTranslation from "next-translate/useTranslation";
import { getOs } from "../lib/os-detector";
import { useGlobalState } from "@/context/Context";
import useStyleListing from "@/store/styleListing/styleListing";
import useDisplayAll from "@/store/exploreAll/exploreAll";


import KlarnaBanner from "@/components/klarnaBanner/KlarnaBanner";
import TattooIdea from "@/components/tattooIdea/TattooIdea";
import TattooSlider from "@/components/TattooSlider/TattooSlider";
import TattooJournal from "@/components/tattooJournal/TattooJournal";
import PaymentTypes from "@/components/paymentTypes/PaymentTypes";
import ExploreTattoos from "@/components/homeCarousel/exploreTattoos";
import ExploreStyle from "@/components/homeCarousel/exploreStyles";
import Modal from "@/components/modalPopup/comingSoon"


import {
  APP_LINK_APPLE,
  APP_LINK_GOOGLE,
  blurDataURL,
} from "@/constants/constants";
import jsonData from "@/data/journal.json";



export default function Home({isMobile}) {
  const [qrCodeSrc, setQrCodeSrc] = useState('/PlayStore_QR.png');
  const osName = getOs();
  const router = useRouter();

  const { allListing  ,loading} = useDisplayAll();
  const { styleList  ,loader} = useStyleListing();


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
    const correctQRCode = osName === 'Mac OS' ? '/AppStore_QR.png' : '/PlayStore_QR.png';
    setQrCodeSrc(correctQRCode);
  }, [osName]);


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


      <section className="full_block_banner">
        <div class="row g-0">
          <div class="col-md-12">
            <div className="banner_block">
              <div className="banner_col">
                <div className="banner_img_wrap">
                  <Image
                    src="/home_banner.png"
                    alt="Banner"
                    fill
                    objectFit="cover"
                    objectPosition="center top"
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    className="mob_hidden"
                  />
                  <Image
                    src="/m_home_banner.png"
                    alt="Banner"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    fill
                    objectFit="cover"
                    objectPosition="center top"
                    className="desk_hidden"
                  />  
                </div>
                <div className="banner_caption">
                  <div className="d_inline_block">
                    <div className="banner_content">
                      <h1 className="color_black_h heading_h1 custom_fs_80 fw_800 custom_fs_m_60 mt_0 max_w_480 m_max_100">
                        <span>{t("common:homePage.bannerTitle")}</span>
                      </h1>
                      <p className="color_black_h mt_10 mb_40 m_mb_30  max_w_440 m_max_100">
                        {t("common:homePage.bannerContent")}
                      </p>
                      <Link
                        href={`/${router.locale}/createRequest`}  onClick={()=>setPathname(router.pathname)}
                        className="button_primary mob_hidden"
                      >
                        Get our mobile app
                      </Link>
                      <Link href={APP_LINK_APPLE} target="_blank">
                        <Image
                          priority
                          src="/app-store-new.svg"
                          alt="App store"
                          width={134}
                          height={41}
                          placeholder="blur"
                          blurDataURL={blurDataURL}
                          className="custom_download_icons desk_hidden"
                        />
                      </Link>  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TattooIdea></TattooIdea>

      <TattooSlider
        title={t("common:homePage.ArtistSliderTitle")}
        content={t("common:homePage.ArtistSliderContent")}
      />
      <KlarnaBanner />
      <ExploreTattoos
        title={t("common:menus.tattooSearch")}
        content={t("common:homePage.worldOfInk")}
        data={allListing.tattoo_images}
        loading={loading}
      />

      <ExploreStyle
        title={t("common:homePage.exploreStyle")}
        content={t("common:homePage.worldOfInk")}
        data={styleList}
        loading={loader} 
      />      

      <PaymentTypes
        title1={t("common:homePage.Verified tattoo artists")}
        content1={t("common:homePage.We curate a selection")}
        title2={t("common:homePage.User-Friendly Interface")}
        content2={t("common:homePage.Navigate inckd effortlessly")}
        title3={t("common:homePage.Secure Transactions")}
        content3={t("common:homePage.Rest easy knowing")}
        leftSectionImage="/verified_tattoo_artists_01.png"
      />

      {SwitchJournal(router.locale)}

      {/* <Modal /> */}
    </>
  );
}