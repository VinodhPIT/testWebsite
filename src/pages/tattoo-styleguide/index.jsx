import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import FullWidthcarosuel from "@/components/FullwidthCarousel/FullwidthCarousel";
import { useRouter } from "next/router";
import {
  APP_LINK_APPLE,
  APP_LINK_GOOGLE,
  blurDataURL,
} from "@/constants/constants";
import useWindowResize from "@/hooks/useWindowSize";
import ImageSlider from "@/components/slider/ImageSlider";
import useTranslation from "next-translate/useTranslation";
import { getLocaleProps } from "@/utils/getlocale";
export default function StyleGuide() {

  const router = useRouter();
  const { isMobileView } = useWindowResize();
  const { t } = useTranslation();


  const letteringTattoo = [
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/2426_20220913093723746-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/2adf3477-8803-486e-9c9e-d9fe37f72eae`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/26257_20230821104803244-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/6f3d0066-23a9-49c7-8705-fd2da1d3b3a7`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/7888_20221102141002810-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/0125be4e-89c1-42b6-acbe-d482c43eb537`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/10316_20221128160935591-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/c1005867-9c21-4249-9376-dea1bcb3574f`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/12866_20221227210842279-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/303ff0c3-2e92-4ad7-b5e8-b6f10b94aa4c`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/8635_20221110103751099-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/eb9e342d-55c2-44e6-89a5-2915f16be39a`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/cache/b2/8b/b28b011cda37b2f37ea0f287ecc71e21.jpg",
      url: `${process.env.LIVE_URL}/tattoo/04ef0f8f-2133-4f82-a1c6-7d07502132f4`,
    },
  ];

  const finlineTattoo = [
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/2667_20220914190416690-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/5a629ad1-216f-4b46-96a7-78beb7e7011e`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/8125_20221104174853899-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/7542cf47-3213-4f9f-931d-149118d9ecbd`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/13440_20230102160802048-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/2875c869-fd9a-42cd-9989-dec8888c1ac2`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/13458_20230102163950299-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/9871b7a0-033f-4996-b8da-c3a23c793aed`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/17544_20230204122643244-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/52bd353e-9f4e-4508-848d-60522d6d3212`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/17550_20230204123504272-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/74caf732-9d14-4f5f-8722-65c707eb687d`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/17547_20230204123501185-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/bb2dc20c-a35b-44f6-bed1-156624395726`,
    },
  ];

  const realisticTattoo = [
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/9319_20221117111234098-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/a1b2a7bd-3924-4b8b-aae1-687ae23f2705`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/16382_20230128111259148-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/d3ec0d7b-1bef-4274-86c4-e5b28f8eb8fb`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/12754_20221226235443946-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/d7fb5d39-311a-41c1-83c7-bdf867de0b5f`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/25700_20230727133039790-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/21a3b09f-919d-44be-b31b-a1b48fa8cd30`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/11512_20221211152329664-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/d855a985-7d30-4da5-af9c-adfab8cdf5de`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/7386_20221028143844333-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/0cf44262-b504-4efb-9238-9c67cd17d384`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/23534_20230409045647188-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/4eee1070-98d0-4e8a-821e-cf8ced5da0dc`,
    },
  ];

  const traditionalTattoo = [
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/6074_20221020193122885-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/2ba3e42b-bc43-48c4-b3e7-69a046c78342`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/2316_20220908094806542-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/ea47a79a-f217-4945-a40d-243d461a27c2`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/10804_20221205141544052-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/f783081d-daa9-45ef-b110-f8e0d1a08673`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/6168_20221021120112671-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/cd332dd5-5649-4235-b511-29be55d0dd87`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/3584_20220924154058732-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/031a72ae-846c-4bf3-970a-dbcca0492e66`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/3049_20220920230333305-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/71c9ecfd-ff5c-46d9-b250-8ac270b24a95`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/25143_20230705093427799-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/2af305a1-a209-4f26-90df-4001b3fda216`,
    },
  ];

  return (
    <>
      <Head>
        <title>{t("common:styleGuideScreenSEO.title")}</title>
        <meta
          name="description"
          content={t("common:styleGuideScreenSEO.description")}
        />
        <meta
          name="keywords"
          content={t("common:styleGuideScreenSEO.keyword")}
        />
      </Head>

      <div className="main_wrap_styleguide">
        <section className="img_text_banner_box">
          <div className="col_full">
            <div className="img_text_box_wrapper exciting_offer_wrap">
              <div class="text_box_wrap right">
                <div class="img_text_box_inner custom_two_col_banner m_switcher">
                  <div class="text_box_content justify_content_center m_min_h_reset">
                    <div class="text_box_content_inner m_pr_0 w_100pc max_w_100pc">
                      <div className="tiny_payment_block pr_10_pc m_pr_0">
                        <h1 className="color_gray_550 heading_h1 custom_fs_63 custom_fs_50 txt_mob_fs45 mt_0">
                          <span>{t("common:styleGuidePage.bannerTitle")}</span>
                        </h1>
                        <p className="m_mt_20 m_mb_20">
                          {t("common:styleGuidePage.bannerContent")}
                        </p>
                        <div class="text_box_content_inner w_100pc pr_0 dictionary_explore">
                          <ul class="download_app ml_0 w_100pc max_w_100pc mt_25 m_mt_20 text_left d_inline_block">
                            <li class="download_app_title mb_10">
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
                      src="/pexels-ryan-hiebendahl-9801666-28-hd.png"
                      alt={t("common:styleGuidePage.bannerTitle")}
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
                      src="/image_2024_01_10T08_43_02_053Z.png"
                      alt={t("common:styleGuidePage.bannerTitle")}
                      fill
                      objectFit="cover"
                      objectPosition="center"
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                      className="desk_hidden"
                      //layout="responsive"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* custom_left_img_block */}
        <div className="img_text_box_wrapper mb_35 m_mb_0">
          <div className="text_box_wrap left block_bg_white container custom_left_img_new">
            <div className="img_text_box_inner flex_direction_column">
              <div className="row m_switcher_row">
                <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 m_order_2">
                  <div className="img_box_wrap block_bg_gradient_1 mb_30 m_mb_25 m_mt_0">
                    <div class="box_text_img_over color_yellow md_max_75">
                      <h2 class="txt_mob_fs50 color_yellow">
                        <span className="small">{t("common:MyStyleis")}</span>
                        <span className="textBlock">
                          {t("common:styleGuidePage.Type lettering")}
                        </span>
                      </h2>
                    </div>
                    <Image
                      priority={true}
                      src="/pexels-ademola-w-16248220-12_hd.png"
                      alt={t("common:styleGuidePage.Letteringtattoos")}
                      width={474}
                      height={553}
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                      layout="responsive"
                      className="object_position_left"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 offset-lg-1 offset-md-0 m_order_1">
                  <div className="text_box_content justify_content_start m_min_h_reset m_pt_0 m_pb_35">
                    <div className="text_box_content_inner m_pr_0 pr_0">
                      <h2>
                        <span>
                          {t("common:styleGuidePage.Letteringtattoos")}
                        </span>
                      </h2>
                      <p className="m_mt_15 m_mb_20">
                        {t("common:styleGuidePage.LetteringTattooContent")}
                      </p>
                      <Link
                        href={`/${router.locale}/explore/tattoo-artists`}
                        class="btn_secondary btn_cutom_new btn_img"
                      >
                        {t("common:styleGuidePage.Explore lettering artists")}
                        <Image
                          src="/alt-arrow-right-white.svg"
                          alt="arrow"
                          class="ml-8 mt-2"
                          width={16}
                          height={16}
                          priority
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FullWidthcarosuel
          title={t("common:styleGuidePage.Explore lettering tattoos")}
          content=""
          datas={letteringTattoo}
          buttonName={t("common:ExploreMoreTattoos")}
          keyword={`/${router.locale}/explore/tattoos`}
          sectionBg="#fff"
          altTag={t("common:styleGuidePage.Letteringtattoos")}
        />

        <div className="img_text_box_wrapper">
          <div class="text_box_wrap right block_bg_white container custom_right_img_new">
            <div class="img_text_box_inner m_switcher flex_direction_column">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 offset-lg-right-1 offset-md-right-0">
                  <div class="text_box_content justify_content_start pl_0 pt_30 pb_100 m_pr_0 m_min_h_reset m_pt_20 m_pb_35">
                    <div class="text_box_content_inner m_pr_0 pr_0">
                      <h2>
                        <span>
                          {t("common:styleGuidePage.Finelinetattoos")}
                        </span>
                      </h2>
                      <p className="m_mt_15 m_mb_20">
                        {t("common:styleGuidePage.FinelineTattooContent")}
                      </p>
                      <Link
                        href={`/${router.locale}/explore/tattoo-artists`}
                        class="btn_secondary btn_cutom_new btn_img"
                      >
                        {t("common:styleGuidePage.Explore fineline artists")}
                        <Image
                          src="/alt-arrow-right-white.svg"
                          alt="arrow"
                          class="ml-8 mt-2"
                          width={16}
                          height={16}
                          priority
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12">
                  <div class="img_box_wrap block_bg_gradient_1 mt_30 m_mt_0 m_mb_25">
                    <div class="box_text_img_over color_yellow md_max_75 tattoo_fine_custom_left">
                      <h2 class="txt_mob_fs50">
                        <span className="small">{t("common:MyStyleis")}</span>{" "}
                        <span className="textBlock">
                          {t("common:styleGuidePage.Type fineline")}
                        </span>
                      </h2>
                    </div>
                    <Image
                      priority={true}
                      src="/pexels-ozan-15020597-45-hd.png"
                      alt={t("common:styleGuidePage.Finelinetattoos")}
                      width={474}
                      height={565}
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                      layout="responsive"
                      className="object_position_left"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FullWidthcarosuel
          title={t("common:styleGuidePage.Explore fineline")}
          content=""
          datas={finlineTattoo}
          buttonName={t("common:ExploreMoreTattoos")}
          keyword={`/${router.locale}/explore/tattoos`}
          sectionBg="#fff"
          altTag={t("common:styleGuidePage.Finelinetattoos")}
        />

        <div class="text_box_wrap right app_download_box_wrap mb_0 block_bg_gray_150 mt_25">
          <div class="img_text_box_inner container pt_90 m_md_pt_40 m_pt_20 pb_90 m_md_pb_40 m_pb_20 flex_direction_column app_download_custom_new">
            <div className="row">
              <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12 col-xs-12">
                <div class="text_box_content justify_content_start pl_0 m_pt_0 m_pb_20 m_pr_0">
                  <div class="text_box_content_inner w_100pc m_pr_0">
                    <ul class="download_app ml_0 w_100pc max_w_100pc">
                      <li class="download_app_title">
                        <h6>
                          <span>{t("common:styleGuidePage.download")}</span>

                          <span className="textBlock">
                            {t("common:styleGuidePage.exploreApp")}
                          </span>
                        </h6>
                      </li>
                      <li>
                        <Link href={APP_LINK_APPLE} target="_blank">
                          <Image
                            src="/app-store-new.svg"
                            alt="Appstore"
                            width={134}
                            height={41}
                            priority
                          />
                        </Link>
                      </li>
                      <li>
                        <Link href={APP_LINK_GOOGLE} target="_blank">
                          <Image
                            src="/g-play-new.svg"
                            alt="Playstore"
                            width={134}
                            height={41}
                            priority
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {!isMobileView ? (
                <div className="col-xl-7 col-lg-6 col-md-5 col-sm-12 col-xs-12">
                  <div class="img_box_wrap">
                    <ul class="app_download_img_list after_none justify_content_start m_0">
                      <li>
                        <Image
                          src="/Sytlepage1.png"
                          width={221}
                          height={447}
                          alt={t("common:styleGuidePage.download")}
                          className="b_radius_0"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={blurDataURL}
                        />
                      </li>
                      <li>
                        <Image
                          src="/Stylepage2.png"
                          width={221}
                          height={447}
                          alt={t("common:styleGuidePage.download")}
                          className="b_radius_0"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={blurDataURL}
                        />
                      </li>
                      <li>
                        <Image
                          src="/Sytlepage3.png"
                          alt={t("common:styleGuidePage.download")}
                          className="b_radius_0"
                          width={221}
                          height={447}
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={blurDataURL}
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          {isMobileView ? (
            <ImageSlider
              imagePaths={[
                "/Sytlepage1.png",
                "/Stylepage2.png",
                "/Sytlepage3.png",
              ]}
              imgAlt={t("common:styleGuidePage.download")}
              imgblurDataURL={blurDataURL}
              imgWidth={221}
              imgHeight={447}
            ></ImageSlider>
          ) : (
            ""
          )}
        </div>

        <div className="img_text_box_wrapper mb_35 m_mb_0">
          <div class="text_box_wrap left block_bg_white container custom_left_img_new">
            <div class="img_text_box_inner m_switcher m_mt_0 flex_direction_column">
              <div className="row">
                <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 m_order_2">
                  <div class="img_box_wrap block_bg_gradient_1 mb_30 m_mt_0 m_mb_25">
                    <div class="box_text_img_over color_yellow md_max_75">
                      <h2 class="txt_mob_fs50 color_green_100">
                        <span className="small">{t("common:MyStyleis")}</span>{" "}
                        <span className="textBlock">
                          {t("common:styleGuidePage.Type realistic")}
                        </span>
                      </h2>
                    </div>
                    <Image
                      priority={true}
                      src="/pexels-elena-rubtsova-12301327-4-hd.png"
                      alt={t("common:styleGuidePage.Realistictattoos")}
                      width={474}
                      height={565}
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                      layout="responsive"
                      className="object_position_left"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 offset-lg-1 offset-md-0 m_order_1">
                  <div class="text_box_content justify_content_start m_min_h_reset m_pt_30 m_pb_35">
                    <div class="text_box_content_inner m_pr_0 pr_0">
                      <h2>
                        <span>
                          {t("common:styleGuidePage.Realistictattoos")}
                        </span>
                      </h2>
                      <p className="m_mt_15 m_mb_20">
                        {t("common:styleGuidePage.RealisticTattooContent")}
                      </p>
                      <Link
                        href={`/${router.locale}/explore/tattoo-artists`}
                        class="btn_secondary btn_cutom_new btn_img"
                      >
                        {t("common:styleGuidePage.Explore realistic artists")}
                        <Image
                          src="/alt-arrow-right-white.svg"
                          alt="arrow"
                          class="ml-8 mt-2"
                          width={16}
                          height={16}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FullWidthcarosuel
          title={t("common:styleGuidePage.Explore realistic tattoos")}
          content=""
          datas={realisticTattoo}
          buttonName={t("common:ExploreMoreTattoos")}
          keyword={`/${router.locale}/explore/tattoos`}
          sectionBg="#fff"
          altTag={t("common:styleGuidePage.Realistictattoos")}
        />

        <div className="img_text_box_wrapper">
          <div class="text_box_wrap right block_bg_white container custom_right_img_new">
            <div class="img_text_box_inner m_switcher flex_direction_column">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 offset-lg-right-1 offset-md-right-0">
                  <div class="text_box_content justify_content_start pl_0 pt_30 pb_100 m_pr_0 m_min_h_reset m_pt_20 m_pb_35">
                    <div class="text_box_content_inner m_pr_0 pr_0">
                      <h2>
                        <span>
                          {t("common:styleGuidePage.Traditionaltattoos")}
                        </span>
                      </h2>
                      <p className="m_mt_15 m_mb_20">
                        {t("common:styleGuidePage.TraditionalTattooContent")}
                      </p>
                      <Link
                        href={`/${router.locale}/explore/tattoo-artists`}
                        class="btn_secondary btn_cutom_new btn_img"
                      >
                        {t("common:styleGuidePage.Explore traditional artists")}
                        <Image
                          src="/alt-arrow-right-white.svg"
                          alt="arrow"
                          class="ml-8 mt-2"
                          width={16}
                          height={16}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12">
                  <div class="img_box_wrap block_bg_gradient_1 justify_content_right mt_30 m_mt_0 m_mb_25">
                    <div class="box_text_img_over color_aero_blue md_max_75">
                      <h2 class="txt_mob_fs50 text_right">
                        <span className="small">{t("common:MyStyleis")}</span>{" "}
                        <span className="textBlock">
                          {t("common:styleGuidePage.Type traditional")}
                        </span>
                      </h2>
                    </div>
                    <Image
                      priority={true}
                      src="/pexels-ralph-rabago-3214805-6-hd.png"
                      alt="TraditionalTattoos"
                      width={474}
                      height={565}
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                      layout="responsive"
                      className="object_position_left"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FullWidthcarosuel
          title={t("common:styleGuidePage.Explore traditional tattoos")}
          content=""
          datas={traditionalTattoo}
          buttonName={t("common:ExploreMoreTattoos")}
          keyword={`/${router.locale}/explore/tattoos`}
          sectionBg="#fff"
          altTag={t("common:styleGuidePage.Traditionaltattoos")}
        />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props:null
  };
}