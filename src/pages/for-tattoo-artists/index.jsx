import React  from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { useNavigation } from "@/hooks/useRouter";
import { useModal } from "@/utils/modalUtils";
import useOpenApp from "@/hooks/useOpenApp";
import useAppStoreLink from "@/hooks/useAppStoreLink";

import useTranslation from "next-translate/useTranslation";
import ArtistPickerModel from "@/components/modalPopup/joinArtistPopup";

import {
  APP_LINK_APPLE,
  APP_LINK_GOOGLE,
  BLUR_URL,
} from "@/constants/constants";




export default function Tattooartists({}) {
  //Constants
  const { router } = useNavigation();
  const { openApp } = useOpenApp();
  const { appStoreLink, imageSrc } = useAppStoreLink();
  const { isPopupOpen, openPopup, closePopup } = useModal();
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("common:fortattooArtistScreenSEO.title")}</title>
        <meta
          name="description"
          content={t("common:fortattooArtistScreenSEO.description")}
        />
        <meta
          name="keywords"
          content={t("common:fortattooArtistScreenSEO.keywords")}
        />
      </Head>



      <section className="full_block_banner">
        <div class="row g-0">
          <div class="col-md-12">
            <div className="banner_block m_min_h_698">
              <div className="banner_col">
                <div className="banner_img_wrap">
                  <Image
                    src="/pexels-outurhead-907596-2.png"
                    alt="Banner"
                    placeholder="blur"
                    blurDataURL={BLUR_URL}
                    fill
                    className="object_fit_cover object_center_top mob_hidden"
                  />
                  <Image
                    src="/pexels-outurhead-907596-2-m.png"
                    alt="Banner"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={BLUR_URL}
                    fill                    
                    className="object_fit_cover object_center_top desk_hidden"
                  />
                </div>
                <div className="banner_caption">
                  <div className="d_inline_block">
                    <div className="banner_content">                     
                      <h1 className="color_white heading_h1 custom_fs_80 fw_800 custom_fs_m_60 mt_0 max_w_480 m_max_100">
                        <span>
                        {t("common:forArtistPage.bannerTitle")}
                        </span>
                      </h1>
                      <p className="color_white mt_10 mb_40 m_mb_30 max_w_480 m_max_100">
                      {t("common:forArtistPage.bannerContent")}
                      </p>
                      <button
                        onClick={openApp}
                        target="_blank"
                        className="button_primary button_primary_white mob_hidden"
                      >
                        Get our mobile app
                      </button>
                      <Link href={appStoreLink} target="_blank">
                        <Image
                          priority
                          src={imageSrc}
                          alt={
                            appStoreLink === APP_LINK_APPLE
                              ? "App store"
                              : "GooglePlay"
                          }
                          width={134}
                          height={41}
                          placeholder="blur"
                          blurDataURL={BLUR_URL}
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


      <section className="container_full mt_40 overlap_first">
        <div className="row g-0">
          <div className="col-md-6 col-sm-12 col-xs-12 m_order_2">
            <div className="position_relative w_100pc h_100pc artist_mid_img_block block_bg_gray_250">
              <Image
                priority
                src="/artist_01.png"
                alt={t("common:forArtistPage.title1")}
                width={399}
                height={581}
                blurDataURL={BLUR_URL}
                className="max_w_100pc"
                placeholder="blur"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12 m_order_1">
            <div className="position_relative w_100pc h_100pc pl_75 m_pl_0">
              <div className="w_100pc h_100pc d_flex flex_direction_column justify_content_center m_pb_20">
                <h2 className="color_gray_550 custom_fs_38 custom_fs_m_32 fw_900 mb_30 m_mb_15 d_max_420">
                  <span className="position_relative">
                    <span className="position_relative d_block custom_fs_16 custom_fs_16 lh_19 fw_300 text_transform_upper">MANAGEMENT</span>
                    {t("common:forArtistPage.title1")}</span>
                </h2>
                <div className="d_flex flex_direction_column mb_25 mt_0 m_mb_15">
                  <div className="d_flex align_item_center">
                    <Image
                      src="/icon_heart.svg"
                      width={33}
                      height={33}
                      alt="Free to use & no subscriptions"
                      priority
                      placeholder="blur"
                      blurDataURL={BLUR_URL}
                      className="m_w_24 m_h_24 mr_15"
                    />
                    <div className="d_flex flex_direction_column">
                      <h4 className="color_gray_550 custom_fs_22 lh_27 custom_fs_m_16 m_lh_20 fw_600 d_flex align_item_center mb_0">
                      {t("common:forArtistPage.nosubscriptions")}</h4>
                    </div>
                  </div>
                </div>
                <div className="d_flex flex_direction_column mb_25 m_mb_15">
                  <div className="d_flex align_item_center">
                    <Image
                      src="/icon_hourglass.svg"
                      width={33}
                      height={33}
                      alt="Easy to set up and manage"
                      priority
                      placeholder="blur"
                      blurDataURL={BLUR_URL}
                      className="m_w_24 m_h_24 mr_15"
                    />
                    <div className="d_flex flex_direction_column">
                      <h4 className="color_gray_550 custom_fs_22 lh_27 custom_fs_m_16 m_lh_20 fw_600 d_flex align_item_center mb_0">
                      {t("common:forArtistPage.set-up-and-manage")}</h4>
                    </div>
                  </div>
                </div>
                <div className="d_flex flex_direction_column mb_25 m_mb_15">
                  <div className="d_flex align_item_center">
                    <Image
                      src="/icon_verified.svg"
                      width={33}
                      height={33}
                      alt="Verified users"
                      priority
                      placeholder="blur"
                      blurDataURL={BLUR_URL}
                      className="m_w_24 m_h_24 mr_15"
                    />
                    <div className="d_flex flex_direction_column">
                      <h4 className="color_gray_550 custom_fs_22 lh_27 custom_fs_m_16 m_lh_20 fw_600 d_flex align_item_center mb_0">
                      {t("common:forArtistPage.verified-users")}</h4>
                    </div>
                  </div>
                </div>
                <div className="d_flex flex_direction_column mb_0">
                  <div className="d_flex align_item_center">
                    <Image
                      src="/icon_card.svg"
                      width={33}
                      height={33}
                      alt="Easy payments"
                      priority
                      placeholder="blur"
                      blurDataURL={BLUR_URL}
                      className="m_w_24 m_h_24 mr_15"
                    />
                    <div className="d_flex flex_direction_column">
                      <h4 className="color_gray_550 custom_fs_22 lh_27 custom_fs_m_16 m_lh_20 fw_600 d_flex align_item_center mb_0">
                      {t("common:forArtistPage.easy-payments")}</h4>
                    </div>
                  </div>
                </div>

                <button onClick={openPopup} className="button_primary align_self mt_40 m_mt_25">
                  {t("common:forArtistPage.button")}
                </button>               
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="container_full mt_40">
        <div className="row g-0 overlap_second">
          <div className="col-md-6 col-sm-12 col-xs-12">
            <div className="position_relative w_100pc h_100pc pr_75 m_pr_0">
              <div className="w_100pc h_100pc d_flex flex_direction_column justify_content_center m_pb_20">
                <h2 className="color_gray_550 custom_fs_38 custom_fs_m_32 fw_900 mb_15 d_max_320">
                  <span className="position_relative">
                    <span className="position_relative d_block custom_fs_16 custom_fs_16 lh_19 fw_300 text_transform_upper">ALL iN ONE</span>
                    {t("common:forArtistPage.title2")}</span>
                </h2>
                <p className="color_gray_550 custom_fs_18 fw_400 custom_fs_m_14 mb_0 max_w_455 m_max_100">
                  {t("common:forArtistPage.content2")}
                </p>
                <button onClick={openPopup} className="button_primary align_self mt_40 m_mt_25">
                  {t("common:forArtistPage.button")}
                </button>
               
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12">
            <div className="position_relative w_100pc h_100pc artist_mid_img_block block_bg_gray_250">
              <Image
                priority
                src="/artist_02.png"
                alt={t("common:forArtistPage.title2")}
                width={399}
                height={581}
                blurDataURL={BLUR_URL}
                className="max_w_100pc"
                placeholder="blur"
              />
            </div>            
          </div>
        </div>
      </section>

      <section className="container_full mt_40 overlap_first">
        <div className="row g-0">
          <div className="col-md-6 col-sm-12 col-xs-12 m_order_2">
            <div className="position_relative w_100pc h_100pc artist_mid_img_block block_bg_gray_250">
              <Image
                priority
                src="/artist_03.png"
                alt={t("common:forArtistPage.title3")}
                width={399}
                height={581}
                blurDataURL={BLUR_URL}
                className="max_w_100pc"
                placeholder="blur"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12 m_order_1">
            <div className="position_relative w_100pc h_100pc pl_75 m_pl_0">
              <div className="w_100pc h_100pc d_flex flex_direction_column justify_content_center m_pb_20">
                <h2 className="color_gray_550 custom_fs_38 custom_fs_m_32 fw_900 mb_30 m_mb_15 max_w_260">
                  <span className="position_relative">
                    <span className="position_relative d_block custom_fs_16 custom_fs_16 lh_19 fw_300 text_transform_upper">COMMUNICATION</span>
                    {t("common:forArtistPage.title3")}</span>
                </h2>
                <p className="color_gray_550 custom_fs_18 fw_400 custom_fs_m_14 mb_0 max_w_455 m_max_100">
                  {t("common:forArtistPage.content3")}
                </p>
                <button onClick={openPopup} className="button_primary align_self mt_40 m_mt_25">
                  {t("common:forArtistPage.button")}
                </button>                            
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="container_full mt_40">
        <div className="row g-0">        
          <div className="col-md-12">
            <div className=" w_100pc text_center position_relative d_flex justify_content_center align_item_center block_bg_aero_blue m_mt_10 pl_20 pr_20 m_pl_10 m_pr_10">  
              <div className="pt_60 pb_60 m_pt_30 m_pb_30">
                <div className="">                 
                  <h2 className="color_gray_550 custom_fs_60 custom_fs_m_28 fw_800 mb_40 m_mb_25">
                    {t("common:forArtistPage.title4")}
                    <span class="textBlock">
                      {t("common:forArtistPage.title8")}
                    </span>
                  </h2>
                  <button onClick={openPopup} className="button_primary align_self">
                    {t("common:forArtistPage.button")}
                  </button>
                </div>
              </div>
            </div>          
          </div>
        </div>
      </section>

      <section className="container_full mt_40">
        <div className="row g-0 overlap_second">
          <div className="col-md-6 col-sm-12 col-xs-12">
            <div className="position_relative w_100pc h_100pc pr_75 m_pr_0">
              <div className="w_100pc h_100pc d_flex flex_direction_column justify_content_center m_pb_20">
                <h2 className="color_gray_550 custom_fs_38 custom_fs_m_32 fw_900 mb_15">
                  <span className="position_relative">
                    <span className="position_relative d_block custom_fs_16 custom_fs_16 lh_19 fw_300 text_transform_upper">BOOKINGS</span>
                    {t("common:forArtistPage.title5")}
                    </span>
                </h2>
                <p className="color_gray_550 custom_fs_18 fw_400 custom_fs_m_14 mb_0 max_w_455 m_max_100">
                  {t("common:forArtistPage.content5")}
                </p>
                <button onClick={openPopup} className="button_primary align_self mt_40 m_mt_25">
                  {t("common:forArtistPage.button")}
                </button>
               
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12">
            <div className="position_relative w_100pc h_100pc artist_mid_img_block block_bg_gray_250">
              <Image
                priority
                src="/artist_04.png"
                alt={t("common:forArtistPage.title1")}
                width={399}
                height={581}
                blurDataURL={BLUR_URL}
                className="max_w_100pc"
                placeholder="blur"
              />
            </div>            
          </div>
        </div>
      </section>

      <section className="container_full mt_40 overlap_first">
        <div className="row g-0">
          <div className="col-md-6 col-sm-12 col-xs-12 m_order_2">
            <div className="position_relative w_100pc h_100pc artist_mid_img_block block_bg_gray_250">
              <Image
                priority
                src="/artist_05.png"
                alt={t("common:forArtistPage.title5")}
                width={399}
                height={581}
                blurDataURL={BLUR_URL}
                className="max_w_100pc"
                placeholder="blur"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12 m_order_1">
            <div className="position_relative w_100pc h_100pc pl_75 m_pl_0">
              <div className="w_100pc h_100pc d_flex flex_direction_column justify_content_center m_pb_20">
                <h2 className="color_gray_550 custom_fs_38 custom_fs_m_32 fw_900 mb_30 m_mb_15">
                  <span className="position_relative">
                    <span className="position_relative d_block custom_fs_16 custom_fs_16 lh_19 fw_300 text_transform_upper">PAYMENTS</span>
                    {t("common:forArtistPage.title6")}</span>
                </h2>
                <p className="color_gray_550 custom_fs_18 fw_400 custom_fs_m_14 mb_0 max_w_455 m_max_100">
                  {t("common:forArtistPage.content6")}
                </p>
                <button onClick={openPopup} className="button_primary align_self mt_40 m_mt_25">
                  {t("common:forArtistPage.button")}
                </button>                            
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container_full mt_40">
        <div className="row g-0">        
          <div className="col-md-12">
            <div className=" w_100pc text_center position_relative d_flex justify_content_center align_item_center block_bg_pink_50">  
              <div className="pt_80 pb_80 m_pt_40 m_pb_40">
                <div className="">
                  <div className="klarna_banner_button">
                    <Image
                      src="/logo_klarna.svg"
                      alt="Klarna marketing badge"
                      width={116}
                      height={29}
                      loading="eager"
                    />
                  </div>
                  <h2 className="color_gray_550 custom_fs_60 custom_fs_m_38 fw_800 mt_10 mb_40 m_mb_25 m_max_270">
                    <span>Tattoo now. Pay Later.</span>
                  </h2>                
                  <Link
                    href={`/${router.locale}/klarna`}
                    className="button_primary_outline w_min_245"
                  >
                    {t("common:learnMore")}
                  </Link>
                </div>
              </div>
            </div>          
          </div>
        </div>
      </section>

      <section className="container_full mt_40 mb_40">
        <div className="row g-0 overlap_second">
          <div className="col-md-6 col-sm-12 col-xs-12">
            <div className="position_relative w_100pc h_100pc pr_75 m_pr_0">
              <div className="w_100pc h_100pc d_flex flex_direction_column justify_content_center m_pb_20">
                <h2 className="color_gray_550 custom_fs_38 custom_fs_m_32 fw_900 mb_15 max_w_420">
                  <span className="position_relative">
                    <span className="position_relative d_block custom_fs_16 custom_fs_16 lh_19 fw_300 text_transform_upper">STUDIO</span>
                      {t("common:forArtistPage.title7")}
                    </span>
                </h2>
                <p className="color_gray_550 custom_fs_18 fw_400 custom_fs_m_14 mb_0 max_w_455 m_max_100">
                  {t("common:forArtistPage.content7")}
                </p>
                <button onClick={openPopup} className="button_primary align_self mt_40 m_mt_25">
                  {t("common:forArtistPage.button")}
                </button>
               
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12">
            <div className="position_relative w_100pc h_100pc artist_mid_img_block block_bg_gray_250">
              <Image
                priority
                src="/artist_06.png"
                alt={t("common:forArtistPage.title6")}
                width={399}
                height={581}
                blurDataURL={BLUR_URL}
                className="max_w_100pc"
                placeholder="blur"
              />
            </div>            
          </div>
        </div>
      </section>     

      <ArtistPickerModel
        className="custom-modal"
        isOpen={isPopupOpen}
        closeModal={closePopup}
      />

    </>
  );
}
