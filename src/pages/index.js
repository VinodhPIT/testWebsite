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

      <section className="img_text_banner_box">
        <div className="col_full">
          <div className="main_banner_wrap mt_40 m_mt_15">
            <div className="main_banner_block">
              <div className="main_banner_col">
                <div className="main_banner_img_wrap">
                  <div className="main_banner_img">
                    <Image
                      src="/book-your-tattoo-now.png"
                      alt="Banner"
                      fill
                      objectFit="cover"
                      objectPosition="right top"
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                      className="mob_hidden"
                    />
                    <Image
                      src="/book-your-tattoo-now-mob.png"
                      alt="Banner"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                      fill
                      objectPosition="center top"
                      className="desk_hidden"
                    />  
                    
                  </div>
                </div>
                <div className="main_banner_caption">
                  <div className="d_inline_block">
                    <div className="main_banner_content">
                      <h1 className="color_white heading_h1 custom_fs_75 txt_mob_fs50 mt_0 max_w_420 m_max_100">
                        <span>{t("common:homePage.bannerTitle")}</span>
                      </h1>
                      <p className="color_white custom_fs_m_14 mt_15 mb_40 m_mt_0 max_w_520 m_max_100">
                        {t("common:homePage.bannerContent")}
                      </p>
                      <div className="d_inline_block max_w_520 w_100pc"> 
                        <ul className="download_qr_mob_app">
                          <li className="color_white color_white download_qr_mob_app_title">
                            {t("common:homePage.Download the inckd")}
                          </li>
                          <li>
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
                          </li>
                          <li>
                            <Link href={APP_LINK_GOOGLE} target="_blank">
                              <Image
                                priority
                                src="/g-play-new.svg"
                                alt="Play store"
                                width={134}
                                height={41}
                                placeholder="blur"
                                blurDataURL={blurDataURL}
                                className="custom_download_icons desk_hidden"
                              />
                            </Link>
                          </li>
                          <li>                            
                            <Image
                              priority
                              src={qrCodeSrc}
                              alt="QR"
                              width={121}
                              height={121}
                              placeholder="blur"
                              blurDataURL={blurDataURL}
                              className="custom_download_icons app_qr_home mob_hidden"
                            />                           
                          </li>
                        </ul>
                      </div>
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

      {SwitchJournal(router.locale)}

      <PaymentTypes
        title1={t("common:homePage.Verified tattoo artists")}
        content1={t("common:homePage.We curate a selection")}
        title2={t("common:homePage.User-Friendly Interface")}
        content2={t("common:homePage.Navigate inckd effortlessly")}
        title3={t("common:homePage.Secure Transactions")}
        content3={t("common:homePage.Rest easy knowing")}
        leftSectionImage="/verified_tattoo_artists_01.png"
      />

      {/* <Modal /> */}
    </>
  );
}