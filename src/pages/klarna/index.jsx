import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

import { useNavigation } from "@/hooks/useRouter";

import {
  APP_LINK_APPLE,
  APP_LINK_GOOGLE,
  blurDataURL,
} from "@/constants/constants";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

import DownloadApps from "@/components/klarnaComponent/DownloadApps/DownloadApps";
import FiveColumnCarousel from "@/components/klarnaFiveColumnCarousel/fiveColumnCarousel";

function KlarnaNew({}) {
  const { t } = useTranslation();
  const { router } = useNavigation();

  const list = [
    {
      title: t("common:klarnaPage.workingStep1"),
      content: t("common:klarnaPage.workingStepContent-1"),
      num: "1",
    },
    {
      title: t("common:klarnaPage.workingStep2"),
      content: t("common:klarnaPage.workingStepContent-2"),
      num: "2",
    },

    {
      title: t("common:klarnaPage.workingStep3"),
      content: t("common:klarnaPage.workingStepContent-3"),
      num: "3",
    },

    {
      title: t("common:klarnaPage.workingStep4"),
      content: t("common:klarnaPage.workingStepContent-4"),
      num: "4",
    },

    {
      title: t("common:klarnaPage.workingStep5"),
      content: t("common:klarnaPage.workingStepContent-5"),
      num: "5",
    },

    {
      title: t("common:klarnaPage.workingStep6"),
      content: t("common:klarnaPage.workingStepContent-6"),
      num: "6",
    },
  ];

  const trendingArtist = [
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/8560_20231107222351494_76A967EC-A2EC-43CB-BA7C-E53504E3E3D0.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/28739_20231107195304237-medium.jpg",
      name: "PatGry",

      city: "Wuppertal",
      country: "Germany",
      url: `${process.env.LIVE_URL}/${router.locale}/artists/patgry_bnxm5pks`,
    },

    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/8266_20231102220347864_4B2C093E-32F5-4067-9F84-2F7C51392B09.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/28422_20231103121829921-medium.jpg",
      name: "Sam Scylla",

      city: "Rudgwick",
      country: "United Kingdom",
      url: `${process.env.LIVE_URL}/${router.locale}/artists/samscylla_vxnki0ls`,
    },

    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/8224_20231102141102065_CFDBD907-6607-43EB-A93B-3DF521E7144C.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/28407_20231102142832069-medium.jpg",
      name: "Cesar Mesquita",

      city: "Norwich",
      country: "United Kingdom",
      url: `${process.env.LIVE_URL}/${router.locale}/artists/cesarmesquita_v9yu3mul`,
    },

    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/5051_20230412112159932_FB7BDC47-12D1-48B2-B7F0-0C89E354E668.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/24123_20230415152818767-medium.jpg",
      name: "Eani13",

      city: "Madrid",
      country: "Spain",
      url: `${process.env.LIVE_URL}/${router.locale}/artists/Eani13_uao6eo6d`,
    },

    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/2103_CC19866A-E579-4661-9CE0-A1F63AA49E6C.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/9957_20221123205228266-medium.jpg",
      name: "Maya Kubitza",

      city: "Katowice",
      country: "Poland",
      url: `${process.env.LIVE_URL}/${router.locale}/artists/maya-kubitza_f6y17wwp`,
    },

    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/1742_3857121F-A33D-420C-A197-5D9EC3D02905.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/8655_20221110125829007-medium.jpg",
      name: "Luciatattoos",

      city: "London",
      country: "United Kingdom",
      url: `${process.env.LIVE_URL}/${router.locale}/artists/luciatattoos_n98rnvgl`,
    },
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/1947_02F8189E-5AD8-4922-9A1A-85845DD9E3A7.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/9164_20221116191748594-medium.jpg",
      name: "Megan Rae",

      city: "Carlisle",
      country: "United Kingdom",

      url: `${process.env.LIVE_URL}/${router.locale}/artists/meganrae_4dszyy98`,
    },
  ];

  return (
    <>
      <Head>
        <title>{t("common:klarnascreenSEO.title")}</title>
        <meta
          name="description"
          content={t("common:klarnascreenSEO.description")}
        />
        <meta name="keywords" content={t("common:klarnascreenSEO.keyword")} />
      </Head>

      <section className="img_text_banner_box">
        <div className="col_full">
          <div className="img_text_box_wrapper exciting_offer_wrap">
            <div class="text_box_wrap right">
              <div class="img_text_box_inner custom_two_col_banner m_switcher">
                <div class="text_box_content justify_content_center m_min_h_reset">
                  <div class="text_box_content_inner m_pr_0 w_100pc max_w_100pc">
                    <div className="tiny_payment_block pr_10_pc m_pr_0">
                      <h1 className="color_gray_550 heading_h1 custom_fs_60 custom_fs_50 txt_mob_fs38 mt_0 m_mt_5">
                        <span>
                          {" "}
                          {t("common:klarnaPage.bannerTitle1")}
                          <span class="textBlock">
                            {t("common:klarnaPage.bannerTitle1-Sub")}
                          </span>
                        </span>
                      </h1>
                      <p className="mt_30 mb_45 m_mt_15 m_mb_40 custom_fs_m_14">
                        {t("common:klarnaPage.bannerContent")}
                      </p>
                      <div class="text_box_content_inner w_100pc pr_0 dictionary_explore">
                        <ul class="download_app ml_0 w_100pc max_w_100pc mt_0 text_left d_inline_block">
                          <li class="download_app_title mb_10">
                            {t("common:Download the inckd")}
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
                  <div className="klarna_banner_badge">
                    <Image
                      src="/klarna.svg"
                      alt="klarna"
                      width={123}
                      height={27}
                      loading="eager"
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                    />
                  </div>
                  <Image
                    priority
                    src="/klarnaBanner.png"
                    alt={`${t("common:klarnaPage.bannerTitle1")} ${t(
                      "common:klarnaPage.bannerTitle1-Sub"
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
                    src="/klarnaBanner_mob.png"
                    alt="Big Ink.Tiny Payments."
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

      <section className="img_text_banner_box klarna_pay_opt_block">
        <div className="text_box_wrap full-block-wrap">
          <div className="img_text_box_wrapper">
            <div
              className={
                "text_box_wrap right pb_80 pt_80 m_lg_pb_40 m_pt_15 m_pb_30"
              }
            >
              <div className="container">
                <div className="text_box_content_inner max_w_100pc">
                  <h3 className="color_gray_550 text_center m_text_left mb_0 custom_fs_40 fw_400 custom_fs_m_28 pb_35 m_pb_15">
                    {t("common:klarnaPage.availablePayment")}
                  </h3>
                </div>
                <div className="klarna_pay_opt_grid">
                  <div className="klarna_pay_opt_items">
                    <span className="klarna_pay_opt_badge">
                      <Image
                        src="/klarna-marketing-badge.svg"
                        alt="klarna"
                        width={70}
                        height={29}
                        placeholder="blur"
                        blurDataURL={blurDataURL}
                      />
                      <span className="klarna_pay_opt_label">
                      {t("common:klarnaPage.tag1")}
                      </span>
                    </span>
                    <h4 className="color_gray_550 custom_fs_28 custom_fs_m_20 fw_700 mt_25 mb_0">
                    {t("common:klarnaPage.optionTitle-1")}
                    </h4>
                    <p className="custom_fs_18 color_gray_550 mb_0 mt_8">
                    {t("common:klarnaPage.optionContent-1")}
                    </p>
                  </div>

                  <div className="klarna_pay_opt_items">
                    <span className="klarna_pay_opt_badge">
                      <Image
                        src="/klarna-marketing-badge.svg"
                        alt="klarna"
                        width={70}
                        height={29}
                        placeholder="blur"
                        blurDataURL={blurDataURL}
                      />
                      <span className="klarna_pay_opt_label">{t("common:klarnaPage.tag2")}</span>
                    </span>
                    <h4 className="color_gray_550 custom_fs_28 custom_fs_m_20 fw_700 mt_25 mb_0">
                    {t("common:klarnaPage.optionTitle-2")}
                    </h4>
                    <p className="custom_fs_18 color_gray_550 mb_0 mt_8">
                    {t("common:klarnaPage.optionContent-2")}
                    </p>
                  </div>

                  <div className="klarna_pay_opt_items">
                    <span className="klarna_pay_opt_badge">
                      <Image
                        src="/klarna-marketing-badge.svg"
                        alt="klarna"
                        width={70}
                        height={29}
                        placeholder="blur"
                        blurDataURL={blurDataURL}
                      />
                      <span className="klarna_pay_opt_label">{t("common:klarnaPage.tag3")}</span>
                    </span>
                    <h4 className="color_gray_550 custom_fs_28 custom_fs_m_20 fw_700 mt_25 mb_0">
                    {t("common:klarnaPage.optionTitle-3")}
                    </h4>
                    <p className="custom_fs_18 color_gray_550 mb_0 mt_8">
                    {t("common:klarnaPage.optionContent-3")}
                    </p>
                  </div>

                  <div className="klarna_pay_opt_items">
                    <span className="klarna_pay_opt_badge">
                      <Image
                        src="/klarna-marketing-badge.svg"
                        alt="klarna"
                        width={70}
                        height={29}
                        placeholder="blur"
                        blurDataURL={blurDataURL}
                      />
                      <span className="klarna_pay_opt_label">{t("common:klarnaPage.tag4")}</span>
                    </span>
                    <h4 className="color_gray_550 custom_fs_28 custom_fs_m_20 fw_700 mt_25 mb_0">
                    {t("common:klarnaPage.optionTitle-4")}
                    </h4>
                    <p className="custom_fs_18 color_gray_550 mb_0 mt_8">
                    {t("common:klarnaPage.optionContent-4")}
                    </p>
                  </div>
                </div>
                <div className="klarna_pay_terms">
                  <p>
                    Klarna's Pay in 3 and Pay in 30 days are unregulated credit
                    agreements. Borrowing more than you can afford or paying
                    late may negatively impact your financial status and ability
                    to obtain credit. 18+, UK residents only. Subject to status.{" "}
                    <Link href="https://www.klarna.com/uk/terms-and-conditions" target="_blank">
                      Ts&Cs
                    </Link>
                    and late fees apply.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="img_text_banner_box block_bg_aero_blue">
        <div className={`${"col_full"}`}>
          <div className="img_text_box_wrapper">
            <div className={"text_box_wrap right pt_65 pb_65 m_pt_pb_30"}>
              <div className="img_text_box_inner container">
                <div className="text_box_content w_100pc justify_content_center p_0 min_h_reset m_pb_0 m_text_center">
                  <div className="text_box_content_inner max_w_100pc text_center">
                    <h2 className="color_gray_550 mb_30 m_mb_25 custom_fs_m_28">
                    {t("common:klarnaPage.findArtists")}
                    </h2>
                    <Link
                      href={`/${router.locale}/klarna`}
                      className="btn_secondary btn_cutom_new btn_cutom_mob custom_fs_m_16 m_lh_20 b_radius_16"
                    >
                      {t("common:homePage.CreateATattooRequest")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="img_text_banner_box">
        <div className="text_box_wrap full-block-wrap">
          <div className="img_text_box_wrapper">
            <div
              className={
                "text_box_wrap right pb_80 pt_80 m_lg_pb_40 m_pt_20 m_pb_40"
              }
            >
              <div className="container">
                <div className="text_box_content_inner max_w_100pc">
                  <h3 className="color_gray_550 text_center m_text_left mb_0 custom_fs_40 fw_400 custom_fs_m_28 pb_40 m_pb_15">
                    {t("common:klarnaPage.MainTitle1")}
                  </h3>
                </div>
                <div className="klarna_works_block">
                  {list.map((el, index) => {
                    return (
                      <div className="klarna_works_items" key={index}>
                        <span className="klarna_num_count">{el.num}</span>
                        <h4 className="color_gray_550 custom_fs_28 fw_700 mt_15 mb_8">
                          {el.title}
                        </h4>
                        <p className="custom_fs_18 color_gray_550 mb_0 mt_0">
                          {el.content}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Accordion allowZeroExpanded={true}>
  {list.map((el, index) => (
    <AccordionItem key={index}>
      <AccordionItemHeading className="test">
        <AccordionItemButton>{el.num} {el.title} </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <p>{el.content}</p>
      </AccordionItemPanel>
    </AccordionItem>
  ))}
</Accordion>



      <FiveColumnCarousel
        title={t("common:klarnaPage.carosuelTitle")}
        content_sub={t("common:klarnaPage.content_sub")}
        button={t("common:ExploreMoreArtist")}
        trendingArtist={trendingArtist}
        btnLink={`/${router.locale}/explore/tattoo-artists`}
      />

      <DownloadApps
        title={t("common:downloadApp")}
        subTitle={t("common:downloadApp-Sub1")}
        bgColor="block_bg_pink"
      />
    </>
  );
}
export default KlarnaNew;
