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

export default function Home({}) {
  const [qrCodeSrc, setQrCodeSrc] = useState('/PlayStore_QR.png');
  const osName = getOs();
  const router = useRouter();
  
  const { fetchAll, allListing } = useDisplayAll();
  const { fetchStyle, styleList } = useStyleListing();
  
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
    clearStyleId("");
    setSelectedIds([]);
    getAddress("Location");
    setSearchState((prevSearchState) => ({
      ...prevSearchState,
      query: "",
    }));

    styleCollection();
  }, []);

  useEffect(() => {
    fetchStyle(router.locale.split("-")[1]);
    fetchAll(router.locale.split("-")[0]);
  }, [router.locale]);

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
          <div className="img_text_box_wrapper exciting_offer_wrap mb_8 m_mb_0">
            <div className="text_box_wrap right">
              <div className="img_text_box_inner custom_two_col_banner m_switcher">
                <div className="text_box_content justify_content_center m_min_h_reset m_pt_15 m_pb_25">
                  <div className="text_box_content_inner m_pr_0 w_100pc max_w_100pc">
                    <div className="tiny_payment_block pr_10_pc m_pr_0">
                      <h1 className="color_gray_550 heading_h1 custom_fs_60 custom_fs_50 txt_mob_fs38 mt_0">
                        <span>{t("common:homePage.bannerTitle")}</span>
                      </h1>
                      <p className="m_mt_10 m_mb_10 txt_mob_fs14 m_lh_21">
                        {t("common:homePage.bannerContent")}
                      </p>
                      <div className="text_box_content_inner w_100pc pr_0 dictionary_explore">
                        <ul className="download_app ml_0 w_100pc max_w_100pc mt_25 m_mt_10 text_left d_inline_block download_mob_center">
                          <li className="download_app_title mb_10 m_mb_5 m_lh_19">
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
                <div className="img_box_wrap custom_download_shadow no_shadow_before">
                  <span>
                    <Image
                      priority
                      src="/pexels-jasmin-chew-14664626-2-1.png"
                      alt={t("common:homePage.bannerTitle")}
                      fill
                      objectFit="cover"
                      objectPosition="center"
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                      className="mob_hidden"
                      //layout="responsive"
                    />
                    <Image
                      priority
                      src="/image_2024_01_10T08_41_09_088Z.png"
                      alt={t("common:homePage.bannerTitle")}
                      fill
                      objectFit="cover"
                      objectPosition="center"
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                      className="desk_hidden"
                      //layout="responsive"
                    />
                  </span>
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
        datas={allListing.tattoo_images}
      />

      <ExploreStyle
        title={t("common:homePage.exploreStyle")}
        content={t("common:homePage.worldOfInk")}
        data={styleList}
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

      <Modal />
    </>
  );
}
