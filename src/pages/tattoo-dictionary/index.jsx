import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  ZodiacCarousel,
  MythologyCarousel,
  AztecCarousel,
} from "@/components/dictionaryScreen/carousel";
import ImageSlider from "@/components/dictionaryScreen/imageSlider";
import {
  APP_LINK_APPLE,
  APP_LINK_GOOGLE,
  blurDataURL,
} from "@/constants/constants";
import useWindowResize from "@/hooks/useWindowSize";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { TattooSearchModal } from "@/utils/modalUtils";
import { useModal } from "@/utils/modalUtils";
import { getLocaleProps } from "@/utils/getlocale";


export default function Dictionary({ }) {
// Constants

  const { isPopupOpen, openPopup, closePopup } = useModal();
  const { isMobileView } = useWindowResize();
  const { t } = useTranslation();

//Carousel  content
  const items = [
    {
      heading: t("common:dictionaryPage.ZodiacCarousel.title1"),
      image: "/Astrology-taurus-bold.svg",
      text: t("common:dictionaryPage.ZodiacCarousel.content1"),
      button1: t("common:dictionaryPage.reliability"),
      button2: t("common:dictionaryPage.sensuality"),
    },

    {
      heading: t("common:dictionaryPage.ZodiacCarousel.title2"),
      image: "/Astrology-cancer-bold.svg",
      text: t("common:dictionaryPage.ZodiacCarousel.content2"),
      button1: t("common:dictionaryPage.nurturing"),
      button2: t("common:dictionaryPage.protection"),
    },
    {
      heading: t("common:dictionaryPage.ZodiacCarousel.title3"),
      image: "/Astrology-scorpio-bold.svg",
      text: t("common:dictionaryPage.ZodiacCarousel.content3"),
      button1: t("common:dictionaryPage.intensity"),
      button2: t("common:dictionaryPage.passion"),
    },
    {
      heading: t("common:dictionaryPage.ZodiacCarousel.title4"),
      image: "/Astrology-aquarius-bold.svg",
      text: t("common:dictionaryPage.ZodiacCarousel.content4"),
      button1: t("common:dictionaryPage.independence"),
      button2: t("common:dictionaryPage.open-mindedness"),
    },
    {
      heading: t("common:dictionaryPage.ZodiacCarousel.title1"),
      text:    t("common:dictionaryPage.ZodiacCarousel.content1"),
      button1: t("common:dictionaryPage.trust"),
      button2: t("common:dictionaryPage.remembrance"),
    },
  ];

  const items1 = [
    {
      heading: t("common:dictionaryPage.MythologyCarousel.title1"),
      image: "/GreekMyth-dionysus-bold.svg",
      text: t("common:dictionaryPage.MythologyCarousel.content1"),
      button1: t("common:dictionaryPage.pleasure"),
      button2: t("common:dictionaryPage.festivity"),
    },

    {
      heading: t("common:dictionaryPage.MythologyCarousel.title2"),
      image: "/GreekMyth-poseidon-bold.svg",
      text: t("common:dictionaryPage.MythologyCarousel.content2"),
      button1: t("common:dictionaryPage.power"),
      button2: t("common:dictionaryPage.inspiration"),
    },
    {
      heading: t("common:dictionaryPage.MythologyCarousel.title3"),
      image: "/GreekMyth-tethis-bold.svg",
      text: t("common:dictionaryPage.MythologyCarousel.content3"),
      button1: t("common:dictionaryPage.family"),
      button2: t("common:dictionaryPage.connection"),
    },
    {
      heading: t("common:dictionaryPage.MythologyCarousel.title4"),
      image: "/GreekMyth-zeus-bold.svg",
      text: t("common:dictionaryPage.MythologyCarousel.content4"),
      button1: t("common:dictionaryPage.fate"),
      button2: t("common:dictionaryPage.protection"),
    },
    {
      heading: t("common:dictionaryPage.MythologyCarousel.title1"),
      text: t("common:dictionaryPage.MythologyCarousel.content1"),
      button1: t("common:dictionaryPage.trust"),
      button2: t("common:dictionaryPage.remembrance"),
    },
  ];

  const items2 = [
    {
      heading: t("common:dictionaryPage.AztecCarousel.title1"),
      image: "/Aztec-itzcuintli-bold.svg",
      text: t("common:dictionaryPage.AztecCarousel.content1"),
      button1: t("common:dictionaryPage.remembrance"),
      button2: t("common:dictionaryPage.trust"),
    },

    {
      heading: t("common:dictionaryPage.AztecCarousel.title2"),
      image: "/Aztec-ocelotl-bold.svg",
      text: t("common:dictionaryPage.AztecCarousel.content2"),
      button1: t("common:dictionaryPage.power"),
      button2: t("common:dictionaryPage.valor"),
    },
    {
      heading: t("common:dictionaryPage.AztecCarousel.title3"),
      image: "/Aztec-ollin-bold.svg",
      text: t("common:dictionaryPage.AztecCarousel.content3"),
      button1: t("common:dictionaryPage.transmutation"),
      button2: t("common:dictionaryPage.change"),
    },
    {
      heading: t("common:dictionaryPage.AztecCarousel.title4"),
      image: "/Aztec-ozomahtli-bold.svg",
      text: t("common:dictionaryPage.AztecCarousel.content4"),
      button1: t("common:dictionaryPage.fun"),
      button2: t("common:dictionaryPage.creativity"),
    },
    {
      heading: t("common:dictionaryPage.AztecCarousel.title1"),
      text: t("common:dictionaryPage.AztecCarousel.content1"),
      button1: t("common:dictionaryPage.trust"),
      button2: t("common:dictionaryPage.remembrance"),
    },
  ];



  return (
    <>
      <Head>
        <title>{t("common:dictionarycreenSEO.title")}</title>
        <meta
          name="description"
          content={t("common:dictionarycreenSEO.description")}
        />
        <meta
          name="keywords"
          content={t("common:dictionarycreenSEO.keyword")}
        />
      </Head>
      <main>
        <div className="page_wrapper">
          <section className="img_text_banner_box">
            <div className="col_full">
              <div className="img_text_box_wrapper">
                <section className="img_text_banner_box">
                  <div className="col_full">
                    <div className="img_text_box_wrapper exciting_offer_wrap">
                      <div class="text_box_wrap right">
                        <div class="img_text_box_inner custom_two_col_banner m_switcher">
                          <div class="text_box_content justify_content_center m_min_h_reset">
                            <div class="text_box_content_inner m_pr_0 w_100pc max_w_100pc">
                              <div className="tiny_payment_block pr_10_pc m_pr_0">
                                <h1 className="color_gray_550 heading_h1 custom_fs_63 custom_fs_50 txt_mob_fs45 mt_0">
                                  <span>
                                    {t("common:dictionaryPage.bannerTitle")}
                                    <span class="textBlock">
                                      {t(
                                        "common:dictionaryPage.bannerTitle-Sub"
                                      )}
                                    </span>
                                  </span>
                                </h1>
                                <p>
                                  {t("common:dictionaryPage.bannerContent")}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="img_box_wrap custom_download_shadow no_shadow_before">
                            <span>
                              <Image
                                priority
                                src="/pexels-cottonbro-studio-4979427_01.png"
                                alt={`${t(
                                  "common:dictionaryPage.bannerTitle"
                                )} ${t(
                                  "common:dictionaryPage.bannerTitle-Sub"
                                )}`}
                                fill
                                objectFit="cover"
                                objectPosition="center"
                                placeholder="blur"
                                blurDataURL={blurDataURL}
                                className="mob_hidden"
                              />
                              <Image
                                priority
                                src="/pexels-cottonbro-studio-4979427-1_mob.png"
                                alt={`${t(
                                  "common:dictionaryPage.bannerTitle"
                                )} ${t(
                                  "common:dictionaryPage.bannerTitle-Sub"
                                )}`}
                                fill
                                objectFit="cover"
                                objectPosition="center"
                                placeholder="blur"
                                blurDataURL={blurDataURL}
                                className="desk_hidden"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="text_box_wrap full-block-wrap block_bg_yellow_500">
                  <div className="img_text_box_inner">
                    <div className="justify_content_start container w_100pc">
                      <div className="text_box_find_tattoo">
                        <div className="find_tattoo_wrap">
                          <div className="find_tattoo_left">
                            <h3>
                              {" "}
                              <span className="m_dis_inline">
                                {t("common:dictionaryPage.Find your Tattoo")}{" "}
                              </span>
                              <span className="textBlock m_dis_inline">
                                {t("common:dictionaryPage.based on Emotions")}
                              </span>
                            </h3>
                          </div>
                        </div>
                        <div className="keywords_wrap">
                          <ul className="keywords_list">
                            <li>{t("common:dictionaryPage.enlighenment")}</li>
                            <li>{t("common:dictionaryPage.love")}</li>
                            <li>{t("common:dictionaryPage.transformation")}</li>
                            <li
                              onClick={openPopup}
                              style={{ cursor: "pointer" }}
                            >
                              {t("common:dictionaryPage.explore-more-emotions")}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <section class="img_text_banner_box">
                  <div class="img_text_box_wrapper">
                    <div className="text_box_wrap left container custom_left_img_new">
                      <div className="img_text_box_inner flex_direction_column mt_110 mb_110 m_md_mt_80 m_md_mb_80 m_mt_40 m_mb_40">
                        <div className="row">
                          <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12">
                            <div className="img_box_wrap block_bg_gradient_1 mt_0 mb_0 h_100pc m_h_inherit m_mb_40">
                              <div className="box_text_img_over color_white pl_40 pr_30 bottom_10pc m_bottom_4pc">
                                <h2>
                                  <span className="m_dis_inline">
                                    {t("common:dictionaryPage.title2")}{" "}
                                  </span>
                                  <span className="textBlock">
                                    {t("common:dictionaryPage.title2-Sub")}
                                  </span>
                                </h2>
                                <p className="custom_fs_22 custom_fs_m_18 max_m_w_100pc">
                                  {t("common:dictionaryPage.content2")}
                                </p>
                              </div>
                              <Image
                                priority
                                src="/pitched_please_an_image_of_the_univers_with_a_lot_of_start_high_e2e486f6-9c85-484e-af56-c0f713ea8f2a 2.png"
                                alt={`${t("common:dictionaryPage.title2")} ${t(
                                  "common:dictionaryPage.title2-Sub"
                                )}`}
                                width={472}
                                height={622}
                                placeholder="blur"
                                blurDataURL={blurDataURL}
                                layout="responsive"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 offset-lg-1 offset-md-0">
                            <div className="text_box_content justify_content_start p_0 custom_dictionary_slider right_content">
                              <div className="text_box_content_inner custom_carousel_wrap pr_0 ">
                                <ZodiacCarousel
                                  items={items}
                                  itemStyle="d_flex keywords_item_block"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <div class="text_box_wrap right app_download_box_wrap mb_0 block_bg_yellow_500">
                  <div class="img_text_box_inner container pt_90 m_md_pt_40 m_pt_20 pb_90 m_md_pb_40 m_pb_20 flex_direction_column dictionary_app app_download_custom_new">
                    <div className="row">
                      {!isMobileView ? (
                        <div className="col-xl-6 col-lg-6 col-md-5 col-sm-12 col-xs-12">
                          <div class="img_box_wrap">
                            <ul class="app_download_img_list after_none justify_content_start m_0 m_md_gap_25 gap_54">
                              <li className="no_filter pl_0">
                                <Image
                                  src="/Tattoodictonary1.png"
                                  alt={`${t(
                                    "common:dictionaryPage.expoloreMore"
                                  )} ${t(
                                    "common:dictionaryPage.expoloreMore-Sub"
                                  )}`}
                                  className="b_radius"
                                  width={248}
                                  height={508}
                                  priority
                                  placeholder="blur"
                                  blurDataURL={blurDataURL}
                                />
                              </li>
                              <li className="no_filter pl_0">
                                <Image
                                  src="/Tattoodictionary2.png"
                                  alt={`${t(
                                    "common:dictionaryPage.expoloreMore"
                                  )} ${t(
                                    "common:dictionaryPage.expoloreMore-Sub"
                                  )}`}
                                  className="b_radius"
                                  width={248}
                                  height={508}
                                  priority
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
                      <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-xs-12 offset-xl-1 offset-lg-1 offset-md-1">
                        <div class="text_box_content justify_content_start p_0 m_pb_20">
                          <div class="text_box_content_inner w_100pc dictionary_explore">
                            <ul class="download_app ml_0 w_100pc max_w_100pc pb_0 text_left">
                              <li class="download_app_title mb_0">
                                <h6>
                                  <span>
                                    {t("common:dictionaryPage.expoloreMore")}
                                  </span>
                                  <span className="textBlock">
                                    {t(
                                      "common:dictionaryPage.expoloreMore-Sub"
                                    )}
                                  </span>{" "}
                                </h6>
                                <p className="custom_fs_m_18">
                                  {t("common:dictionaryPage.content3")}
                                </p>
                              </li>
                              <li>
                                <Link href={APP_LINK_APPLE} target="_blank">
                                  <Image
                                    src="/app-store-new.svg"
                                    alt="AppStore"
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
                                    alt="PlayStore"
                                    width={134}
                                    height={41}
                                  />
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {isMobileView ? (
                    <ImageSlider
                      imagePaths={[
                        "/Tattoodictonary1.png",
                        "/Tattoodictionary2.png",
                      ]}
                      imgAlt="Tattoo"
                      imgblurDataURL={blurDataURL}
                      imgWidth={248}
                      imgHeight={508}
                    ></ImageSlider>
                  ) : (
                    ""
                  )}
                </div>

                <section class="img_text_banner_box">
                  <div class="img_text_box_wrapper">
                    <div className="text_box_wrap right container custom_right_img_new">
                      <div className="img_text_box_inner flex_direction_column mt_110 mb_110 m_md_mt_80 m_md_mb_80 m_mt_40 m_mb_40">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 offset-lg-right-1 offset-md-right-0">
                            <div className="text_box_content justify_content_start p_0 custom_dictionary_slider left_content">
                              <div className="text_box_content_inner custom_carousel_wrap pr_0">
                                <MythologyCarousel
                                  items={items1}
                                  itemStyle="d_flex keywords_item_block"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12">
                            <div className="img_box_wrap block_bg_gradient_1 mt_0 mb_0 h_100pc m_h_inherit m_mt_40">
                              <div className="box_text_img_over color_white pr_40 pl_30 m_pl_40 m_pr_30 bottom_10pc m_bottom_4pc text_right justify_content_right m_justify_content_left m_text_left">
                                <h2>
                                  <span>
                                    {t("common:dictionaryPage.title4")}
                                  </span>
                                  <span className="textBlock">
                                    {t("common:dictionaryPage.title4-Sub")}
                                  </span>
                                </h2>
                                <p class="custom_fs_22 custom_fs_m_18 max_m_w_100pc">
                                  {t("common:dictionaryPage.content4")}
                                </p>
                              </div>
                              <Image
                                priority
                                src="/pitched_please_an_image_of_the_univers_with_a_lot_of_start_high_e2e486f6-9c85-484e-af56-c0f713ea8f2a 2.png"
                                alt={`${t("common:dictionaryPage.title4")} ${t(
                                  "common:dictionaryPage.title4-Sub"
                                )}`}
                                width={472}
                                height={622}
                                placeholder="blur"
                                blurDataURL={blurDataURL}
                                layout="responsive"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="text_box_wrap full-block-wrap block_bg_yellow_500">
                  <div className="img_text_box_inner">
                    <div className="justify_content_start container w_100pc">
                      <div className="text_box_find_tattoo">
                        <div className="find_tattoo_wrap">
                          <div className="find_tattoo_left">
                            <h3 className="m_mxw_290">
                              {" "}
                              <span className="m_dis_inline">
                                {t("common:dictionaryPage.Find your Tattoo")}{" "}
                              </span>
                              <span className="textBlock m_dis_inline">
                                {t("common:dictionaryPage.based on Emotions")}
                              </span>
                            </h3>
                          </div>
                        </div>
                        <div className="keywords_wrap">
                          <ul className="keywords_list">
                            <li>{t("common:dictionaryPage.animals")}</li>
                            <li>{t("common:dictionaryPage.flowers")}</li>
                            <li>{t("common:dictionaryPage.norseMythology")}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <section class="img_text_banner_box">
                  <div class="img_text_box_wrapper">
                    <div className="text_box_wrap left container custom_left_img_new">
                      <div className="img_text_box_inner flex_direction_column mt_110 mb_110 m_md_mt_80 m_md_mb_80 m_mt_40 m_mb_40">
                        <div className="row">
                          <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12">
                            <div className="img_box_wrap block_bg_gradient_1 mt_0 mb_0 h_100pc m_h_inherit m_mb_40">
                              <div className="box_text_img_over custom_spc_left_d_590 color_white pl_40 pr_30 bottom_10pc m_bottom_0">
                                <h2>
                                  <span>
                                    {t("common:dictionaryPage.title3")}
                                  </span>
                                  <span className="textBlock">
                                    {" "}
                                    {t("common:dictionaryPage.title3-Sub")}
                                  </span>
                                </h2>
                                <p class="custom_fs_22 custom_fs_m_18 max_m_w_100pc">
                                  {t("common:dictionaryPage.content3")}
                                </p>
                              </div>
                              <Image
                                priority
                                src="/wallpaperflare_00_1.png"
                                alt={`${t("common:dictionaryPage.title3")} ${t(
                                  "common:dictionaryPage.title3-Sub"
                                )}`}
                                width={474}
                                height={622}
                                placeholder="blur"
                                blurDataURL={blurDataURL}
                                layout="responsive"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 offset-lg-1 offset-md-0">
                            <div className="text_box_content justify_content_start p_0 custom_dictionary_slider">
                              <div className="text_box_content_inner custom_carousel_wrap pr_0 ">
                                <AztecCarousel
                                  items={items2}
                                  itemStyle="d_flex keywords_item_block"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </div>
        <TattooSearchModal
          className="custom-modal"
          isOpen={isPopupOpen}
          closeModal={closePopup}
        />
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const { props } = await getLocaleProps(context);
  return {
    props: {
      locale: props.locale,
    },
  };
}