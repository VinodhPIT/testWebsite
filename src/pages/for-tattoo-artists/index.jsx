import React  from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

import { useNavigation } from "@/hooks/useRouter";

import {
  APP_LINK_APPLE,
  APP_LINK_GOOGLE,
  blurDataURL,
} from "@/constants/constants";



export default function Tattooartists({}) {
  const { router } = useNavigation();

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

      <main>
        <div className="page-wrapper fortattoo_artists_new">
          <section className="img_text_banner_box">
            <div className="col_full">
              <div className="img_text_box_wrapper exciting_offer_wrap">
                <div class="text_box_wrap right">
                  <div class="img_text_box_inner custom_two_col_banner m_switcher">
                    <div class="text_box_content justify_content_center m_min_h_reset m_pt_25 m_pb_25">
                      <div class="text_box_content_inner m_pr_0 w_100pc max_w_100pc">
                        <div className="tiny_payment_block pr_0">
                          <h1 className="color_gray_550 heading_h1 custom_fs_63 custom_fs_50 custom_fs_m_38 mt_0">
                            <span>
                              {" "}
                              {t("common:forArtistPage.bannerTitle")}                              
                              {/* {t("common:forArtistPage.bannerSubtitle")} 
                              {t("common:forArtistPage.bannerSubtitle3")} */}
                            </span>
                          </h1>
                          <p className="m_mt_15 m_mb_0 custom_fs_m_14">
                            {t("common:forArtistPage.bannerContent")}
                          </p>
                          <div class="text_box_content_inner w_100pc pr_0 dictionary_explore">
                            <ul class="download_app ml_0 w_100pc max_w_100pc mt_25 m_mt_20 text_left d_inline_block">
                              <li class="download_app_title mb_10">
                                {t(
                                  "common:forArtistPage.Download our app from"
                                )}
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
                                    className="custom_download_icons"
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
                                    className="custom_download_icons"
                                  />
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="img_box_wrap custom_download_shadow no_shadow_before">
                      <Image
                        priority
                        src="/alan-king-cz6mWKVLTfM-unsplash-1_n.png"
                        alt="Book your dream tattoo now!"
                        fill
                        objectFit="cover"
                        objectPosition="center"
                        placeholder="blur"
                        blurDataURL={blurDataURL}
                        className="mob_hidden"
                      />
                      <Image
                        priority
                        src="/alan-king-cz6mWKVLTfM-unsplash1_mob.png"
                        alt="Book your dream tattoo now!"
                        fill
                        objectFit="cover"
                        objectPosition="center"
                        placeholder="blur"
                        blurDataURL={blurDataURL}
                        className="desk_hidden"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="img_text_banner_box">
            <div className="img_text_box_wrapper fortattoo_artists">
              <div className="text_box_wrap left block_bg_gray_150">
                <div className="img_text_box_inner container flex_direction_column pt_80 m_md_pt_40 m_pt_30">
                  <div class="row">
                    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 m_order_2">
                      <div className="img_box_wrap m_md_min_h_reset w_100pc h_100pc">
                        <Image
                          priority
                          src="/artist_0_01.png"
                          alt={t("common:forArtistPage.title1")}
                          fill
                          objectFit="contain"
                          objectPosition="bottom"
                          blurDataURL={blurDataURL}
                          className="max_w_100pc m_w_inherit w_auto top_inherit md_pos_rel"
                          placeholder="blur"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 offset-lg-1 offset-md-1 m_order_1">
                      <div className="text_box_content justify_content_start align_item_center m_align_item_start p_0 w_100pc h_100pc m_min_h_reset">
                        <div className="text_box_content_inner pr_0 max_w_100pc w_100pc pt_50 pb_50 m_pt_0 m_pb_40">
                          <h2 className="d_max_550 m_max_410 custom_fs_63 lh_72 custom_fs_50 custom_fs_m_38 color_gray_550 fw_700">
                            {t("common:forArtistPage.title1")}
                          </h2>
                          <ul class="custom-listing">
                            <li>
                              <Image
                                priority
                                src="/heart_icon_b.svg"
                                alt="Free to use & no subscpriptions"
                                width={24}
                                height={24}                              
                              />
                              {t("common:forArtistPage.nosubscpriptions")}
                            </li>
                            <li>
                              <Image
                                priority
                                src="/hourglass_b.svg"
                                alt="Easy to set up and manage"
                                width={24}
                                height={24}                                
                              />
                              {t("common:forArtistPage.set-up-and-manage")}
                            </li>
                            <li>
                              <Image
                                priority
                                src="/shield_check_b.svg"
                                alt="Verified users"
                                width={24}
                                height={24}                               
                              />
                              {t("common:forArtistPage.verified-users")}
                            </li>
                            <li>
                              <Image
                                priority
                                src="/card_b.svg"
                                alt="Easy payments"
                                width={24}
                                height={24}                               
                              />
                              {t("common:forArtistPage.easy-payments")}
                            </li>
                          </ul>
                          <Link
                            href={`/${router.locale}/join-tattoo-artists`}
                            className="btn_secondary btn_cutom_new btn_cutom_new_mob bdr_rad_16"
                          >
                            {t("common:forArtistPage.button")}                            
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="img_text_banner_box">
            <div className="img_text_box_wrapper fortattoo_artists">
              <div className="text_box_wrap left block_bg_white">
                <div className="img_text_box_inner container flex_direction_column pt_80 m_md_pt_40 m_pt_30">
                  <div class="row justify-content-between">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div className="text_box_content justify_content_start align_item_center m_align_item_start p_0 w_100pc h_100pc m_min_h_reset">
                        <div className="text_box_content_inner pr_0 max_w_100pc tattoo_art_mgt_mob w_100pc pt_50 pb_50 m_pt_0 m_pb_40">
                          <h2 className="d_max_420 m_max_270 custom_fs_63 lh_72 custom_fs_50 custom_fs_m_38 color_gray_550 fw_700">
                            {t("common:forArtistPage.title2")}
                          </h2>
                          <p className="m_mt_15 custom_fs_m_14">
                            {t("common:forArtistPage.content2")}
                          </p>
                          <Link
                            href={`/${router.locale}/join-tattoo-artists`}
                            className="btn_secondary btn_cutom_new btn_cutom_new_mob bdr_rad_16"
                          >
                            {t("common:forArtistPage.button")}
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                      <div className="img_box_wrap m_md_min_h_reset w_100pc h_100pc justify_content_end m_justify_content_center">
                        <Image
                          priority
                          alt={t("common:forArtistPage.title2")}
                          src="/artist_02.png"
                          fill
                          objectFit="contain"
                          objectPosition="bottom"
                          blurDataURL={blurDataURL}
                          className="max_w_100pc m_w_inherit w_auto top_inherit md_pos_rel"
                          placeholder="blur"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="img_text_banner_box">
            <div className="img_text_box_wrapper fortattoo_artists">
              <div className="text_box_wrap left block_bg_gray_150">
                <div className="img_text_box_inner container flex_direction_column pt_80 m_md_pt_40 m_pt_30">
                  <div class="row">
                    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 m_order_2">
                      <div className="img_box_wrap m_md_min_h_reset w_100pc h_100pc">
                        <Image
                          priority
                          src="/artist_03.png"
                          alt={t("common:forArtistPage.title3")}
                          fill
                          objectFit="contain"
                          objectPosition="bottom"
                          blurDataURL={blurDataURL}
                          className="max_w_100pc m_w_inherit w_auto top_inherit md_pos_rel"
                          placeholder="blur"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 offset-lg-1 offset-md-1 m_order_1">
                      <div className="text_box_content justify_content_start align_item_center m_align_item_start p_0 w_100pc h_100pc m_min_h_reset">
                        <div className="text_box_content_inner pr_0 max_w_100pc w_100pc pt_50 pb_50 m_pt_0 m_pb_40">
                          <h2 className="d_max_420 m_max_270 custom_fs_63 lh_72 custom_fs_50 custom_fs_m_38 color_gray_550 fw_700">
                            {t("common:forArtistPage.title3")}
                          </h2>
                          <p className="m_mt_15 custom_fs_m_14">
                            {t("common:forArtistPage.content3")}
                          </p>
                          <Link
                            href={`/${router.locale}/join-tattoo-artists`}
                            className="btn_secondary btn_cutom_new btn_cutom_new_mob bdr_rad_16"
                          >
                            {t("common:forArtistPage.button")}                            
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="img_text_banner_box">
            <div className="col_full">
              <div className="img_text_box_wrapper fortattoo_artists">
                <div className="text_box_wrap full-block-wrap block_bg_aero_blue">
                  <div className="img_text_box_inner">
                    <div className="justify_content_start container w_100pc">
                      <div className="text_box_content_inner m_pr_0 pt_40 pb_40 m_pt_30 m_pb_30 max_w_100pc">
                        <h3 className="m_m_auto custom_fs_40 custom_fs_m_28">
                          {t("common:forArtistPage.title4")}
                          <span class="textBlock">
                            {t("common:forArtistPage.title8")}
                          </span>
                        </h3>
                        <Link
                          href={`/${router.locale}/join-tattoo-artists`}
                          className="btn_secondary btn_cutom_new btn_cutom_new_mob bdr_rad_16"
                        >
                          {t("common:forArtistPage.button")}                          
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="img_text_banner_box">
            <div className="img_text_box_wrapper fortattoo_artists">
              <div className="text_box_wrap left block_bg_white">
                <div className="img_text_box_inner container flex_direction_column pt_80 m_md_pt_40 m_pt_30">
                  <div class="row justify-content-between">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div className="text_box_content justify_content_start align_item_center m_align_item_start p_0 w_100pc h_100pc m_min_h_reset">
                        <div className="text_box_content_inner pr_0 max_w_100pc tattoo_art_mgt_mob w_100pc pt_50 pb_50 m_pt_0 m_pb_40">
                          <h2 className="custom_fs_63 lh_72 custom_fs_50 custom_fs_m_38 color_gray_550 fw_700">
                            {t("common:forArtistPage.title5")}
                          </h2>
                          <p className="m_mt_15 custom_fs_m_14">
                            {t("common:forArtistPage.content5")}
                          </p>
                          <Link
                            href={`/${router.locale}/join-tattoo-artists`}
                            className="btn_secondary btn_cutom_new btn_cutom_new_mob bdr_rad_16"
                          >
                            {t("common:forArtistPage.button")}
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                      <div className="img_box_wrap m_md_min_h_reset w_100pc h_100pc justify_content_end m_justify_content_center">
                        <Image
                          priority
                          alt={t("common:forArtistPage.title5")}
                          src="/artist_04.png"
                          fill
                          objectFit="contain"
                          objectPosition="bottom"
                          blurDataURL={blurDataURL}
                          className="max_w_100pc m_w_inherit w_auto top_inherit md_pos_rel"
                          placeholder="blur"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="img_text_banner_box">
            <div className="img_text_box_wrapper fortattoo_artists">
              <div className="text_box_wrap left block_bg_gray_150">
                <div className="img_text_box_inner container flex_direction_column pt_80 m_md_pt_40 m_pt_30">
                  <div class="row">
                    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 m_order_2">
                      <div className="img_box_wrap m_md_min_h_reset w_100pc h_100pc">
                        <Image
                          priority
                          src="/artist_05.png"
                          alt={t("common:forArtistPage.title6")}
                          fill
                          objectFit="contain"
                          objectPosition="bottom"
                          blurDataURL={blurDataURL}
                          className="max_w_100pc m_w_inherit w_auto top_inherit md_pos_rel"
                          placeholder="blur"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 offset-lg-1 offset-md-1 m_order_1">
                      <div className="text_box_content justify_content_start align_item_center m_align_item_start p_0 w_100pc h_100pc m_min_h_reset">
                        <div className="text_box_content_inner pr_0 max_w_100pc w_100pc pt_50 pb_50 m_pt_0 m_pb_40">
                          <h2 className="custom_fs_63 lh_72 custom_fs_50 custom_fs_m_38 color_gray_550 fw_700">
                            {t("common:forArtistPage.title6")}
                          </h2>
                          <p className="m_mt_15 custom_fs_m_14">
                            {t("common:forArtistPage.content6")}
                          </p>
                          <Link
                            href={`/${router.locale}/join-tattoo-artists`}
                            className="btn_secondary btn_cutom_new btn_cutom_new_mob bdr_rad_16"
                          >
                            {t("common:forArtistPage.button")}                           
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="img_text_banner_box">
            <div className="img_text_box_wrapper fortattoo_artists">
              <div className="text_box_wrap left block_bg_white">
                <div className="img_text_box_inner container flex_direction_column pt_80 m_md_pt_40 m_pt_30">
                  <div class="row justify-content-between">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <div className="text_box_content justify_content_start align_item_center m_align_item_start p_0 w_100pc h_100pc m_min_h_reset">
                        <div className="text_box_content_inner pr_0 max_w_100pc tattoo_art_mgt_mob w_100pc pt_50 pb_50 m_pt_0 m_pb_40">
                          <h2 className="d_max_420 m_max_100 custom_fs_63 lh_72 custom_fs_50 custom_fs_m_38 color_gray_550 fw_700">
                            {t("common:forArtistPage.title7")}
                          </h2>
                          <p className="m_mt_15 custom_fs_m_14">
                            {t("common:forArtistPage.content7")}
                          </p>
                          <Link
                            href={`/${router.locale}/join-tattoo-artists`}
                            className="btn_secondary btn_cutom_new btn_cutom_new_mob bdr_rad_16"
                          >
                            {t("common:forArtistPage.button")}                            
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                      <div className="img_box_wrap m_md_min_h_reset w_100pc h_100pc justify_content_end m_justify_content_center">
                        <Image
                          priority
                          alt={t("common:forArtistPage.title7")}
                          src="/artist_0_06.png"
                          fill
                          objectFit="contain"
                          objectPosition="bottom"
                          blurDataURL={blurDataURL}
                          className="max_w_100pc m_w_inherit w_auto top_inherit md_pos_rel"
                          placeholder="blur"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
