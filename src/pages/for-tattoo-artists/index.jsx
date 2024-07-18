import React  from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { useNavigation } from "@/hooks/useRouter";
import { useModal } from "@/utils/modalUtils";

import useTranslation from "next-translate/useTranslation";

import Banner from "@/components/banners/Banner";
import ArtistPickerModel from "@/components/modalPopup/joinArtistPopup";

import { BLUR_URL} from "@/constants/index";
 
export default function Tattooartists({}) {

  const { router } = useNavigation();
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

      <Banner
        bannerImage="/pexels-outurhead-907596-2.png"
        mobileBanner="/pexels-outurhead-907596-2-m.png"
        altText={`${t("common:forArtistPage.boostYourBusiness.part1")} ${t("common:forArtistPage.boostYourBusiness.part2")}`}
        title={{
          firstPart:t("common:forArtistPage.boostYourBusiness.part1"),
          part2:t("common:forArtistPage.boostYourBusiness.part2"),
          part3:t("common:forArtistPage.boostYourBusiness.part3"),
        }}
        description={t("common:forArtistPage.bannerContent")}
        buttonText={t("common:getApp")}
        titleWidth="max_w_480"
        descriptionWidth="max_w_480"
        buttonBg="button_primary_white"
        textColor="color_white"
        mob_textColor="color_white"
        isBadge={false}
    
      />

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
                <h2 className="color_gray_550 custom_fs_38 custom_fs_m_32 m_lh_38 fw_900 mb_30 m_mb_20 d_max_420 m_max_100">
                  <span className="position_relative">
                    <span className="position_relative d_block custom_fs_16 custom_fs_16 lh_19 fw_300 text_transform_upper">{t("common:forArtistPage.management")}</span>
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
                <h2 className="color_gray_550 custom_fs_38 custom_fs_m_32 m_lh_38 fw_900 mb_20 max_w_300 m_max_100">
                  <span className="position_relative">
                    <span className="position_relative d_block custom_fs_16 custom_fs_16 lh_19 fw_300 text_transform_upper">{t("common:forArtistPage.allInOne")}</span>
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
                <h2 className="color_gray_550 custom_fs_38 custom_fs_m_32 m_lh_38 fw_900 mb_30 m_mb_20 max_w_330 m_max_100">
                  <span className="position_relative">
                    <span className="position_relative d_block custom_fs_16 custom_fs_16 lh_19 fw_300 text_transform_upper">{t("common:forArtistPage.communication")}</span>
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
                <h2 className="color_gray_550 custom_fs_38 custom_fs_m_32 m_lh_38 fw_900 mb_20">
                  <span className="position_relative">
                    <span className="position_relative d_block custom_fs_16 custom_fs_16 lh_19 fw_300 text_transform_upper">{t("common:forArtistPage.bookings")}</span>
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
                <h2 className="color_gray_550 custom_fs_38 custom_fs_m_32 m_lh_38 fw_900 mb_30 m_mb_20">
                  <span className="position_relative">
                    <span className="position_relative d_block custom_fs_16 custom_fs_16 lh_19 fw_300 text_transform_upper">{t("common:forArtistPage.payments")}</span>
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
              <div className="pt_80 pb_80 m_pt_40 m_pb_40 pl_20 pr_20">
                <div className="">
                  <div className="klarna_banner_button">
                    <Image
                      src="/logo_klarna.svg"
                      alt={t("common:tattooPayLater")}
                      width={116}
                      height={29}
                      loading="eager"
                    />
                  </div>
                 
                  <h2 className="color_gray_550 custom_fs_60 custom_fs_m_38 m_lh_38 fw_800 mt_10 mb_40 m_mb_20">
                    <span>{t("common:tattooPayLater")}</span>
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
                <h2 className="color_gray_550 custom_fs_38 custom_fs_m_32 m_lh_38 fw_900 mb_20 max_w_300 m_max_100">
                  <span className="position_relative">
                    <span className="position_relative d_block custom_fs_16 custom_fs_16 lh_19 fw_300 text_transform_upper">{t("common:forArtistPage.studio")}</span>
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

