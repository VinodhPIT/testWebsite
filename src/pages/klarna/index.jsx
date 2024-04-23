import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import DownloadApps from "@/marketingScreens/DownloadApps/DownloadApps";
import style from "./style.module.css";
import useTranslation from "next-translate/useTranslation";
import { useNavigation } from "@/hooks/useRouter";
import FiveColumnCarousel from "@/components/klarnaFiveColumnCarousel/fiveColumnCarousel";
import {
  APP_LINK_APPLE,
  APP_LINK_GOOGLE,
  blurDataURL,
} from "@/constants/constants";

function KlarnaNew({}) {
  const { t } = useTranslation();
  const { router } = useNavigation();

  const listingItems = [
    {
      title: t("common:klarnaPage.heading1"),
      content: t("common:klarnaPage.Text1"),
    },
    {
      title: t("common:klarnaPage.heading2"),
      content: t("common:klarnaPage.Text2"),
    },

    {
      title: t("common:klarnaPage.heading3"),
      content: t("common:klarnaPage.Text3"),
    },
    {
      title: t("common:klarnaPage.heading4"),
      content: t("common:klarnaPage.Text4"),
    },
  ];

  const list1 = [
    {
      title: t("common:klarnaPage.Download App"),
      content: t("common:klarnaPage.Seamlessly download"),
      num: "01",
    },
    {
      title: t("common:klarnaPage.Accept an offer"),
      content: t("common:klarnaPage.Effortlessly accept"),
      num: "02",
    },

    {
      title: t("common:klarnaPage.Select Klarna"),
      content: t(
        "common:klarnaPage.Select Klarna for a smooth and safe payment"
      ),
      num: "03",
    },

    {
      title: t("common:klarnaPage.Get your tattoo done"),
      content: t("common:klarnaPage.Enjoy superior tattoo skills"),
      num: "04",
    },

    {
      title: t("common:klarnaPage.Pay later"),
      content: t("common:klarnaPage.Enjoy convenient"),
      num: "05",
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
                      <span
                        className={`${"d_inline_block"} ${style.btn_klarna}`}
                      >
                        <Image
                          src="/klarna.svg"
                          alt="klarna"
                          width={92}
                          height={21}
                          loading="eager"
                          placeholder="blur"
                          blurDataURL={blurDataURL}
                        />
                      </span>

                      <h1 className="color_gray_550 heading_h1 custom_fs_63 custom_fs_50 txt_mob_fs45 mt_25">
                        <span>
                          {" "}
                          {t("common:klarnaPage.bannerTitle1")}
                          <span class="textBlock">
                            {t("common:klarnaPage.bannerTitle1-Sub")}
                          </span>
                        </span>
                      </h1>

                      <div class="text_box_content_inner w_100pc pr_0 dictionary_explore">
                        <ul class="download_app ml_0 w_100pc max_w_100pc mt_50 m_mt_35 text_left d_inline_block">
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
                  <Image
                    priority
                    src="/klarnaBanner1.png"
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
            <div className={"text_box_wrap right pb_80 pt_80 m_lg_pb_40 m_pt_20 m_pb_40"}>
              <div className="container">
                <div className="text_box_content_inner max_w_100pc">
                  <h3 className="color_gray_550 text_center mb_0 custom_fs_40 fw_400 pb_35 m_pb_30">
                    Available payment options:
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
                      <span className="klarna_pay_opt_label">Pay in 30 days</span>
                    </span>
                    <h4 className="color_gray_550 custom_fs_28 custom_fs_m_20 fw_700 mt_25 mb_0">Get an extra 30 days to pay.</h4>
                    <p className="custom_fs_18 color_gray_550 mb_0 mt_8">Take your time deciding on your perfect tattoo. We offer an extra 30 days to complete your payment, totally interest-free.</p>
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
                      <span className="klarna_pay_opt_label">Instalments</span>
                    </span>
                    <h4 className="color_gray_550 custom_fs_28 custom_fs_m_20 fw_700 mt_25 mb_0">Enjoy 3 interest-free instalments.</h4>
                    <p className="custom_fs_18 color_gray_550 mb_0 mt_8">Experience a modern way to commit to your next tattoo with the option to pay in 3 equal, interest-free instalments.</p>
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
                      <span className="klarna_pay_opt_label">Instalments</span>
                    </span>
                    <h4 className="color_gray_550 custom_fs_28 custom_fs_m_20 fw_700 mt_25 mb_0">Enjoy 4 interest-free instalments.</h4>
                    <p className="custom_fs_18 color_gray_550 mb_0 mt_8">Experience a modern way to commit to your next tattoo with the option to pay in 3 equal, interest-free instalments.</p>
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
                      <span className="klarna_pay_opt_label">Financing</span>
                    </span>
                    <h4 className="color_gray_550 custom_fs_28 custom_fs_m_20 fw_700 mt_25 mb_0">Up to 36 months to pay for your tattoo.</h4>
                    <p className="custom_fs_18 color_gray_550 mb_0 mt_8">Experience a modern way to commit to your next tattoo with the option to pay in 3 equal, interest-free instalments.</p>
                  </div>
                </div>
                <div className="klarna_pay_terms">
                  <p>Klarna's Pay in 3 and Pay in 30 days are unregulated credit agreements. Borrowing more than you can afford or paying late may negatively impact your financial status and ability to obtain credit. 18+, UK residents only. Subject to status. <Link href="#" target="_blank">Ts&Cs</Link> and late fees apply.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="img_text_banner_box block_bg_aero_blue">
        <div className={`${"col_full"}`}>
          <div className="img_text_box_wrapper">
            <div className={"text_box_wrap right pt_65 pb_65 m_pt_pb_50"}>
              <div className="img_text_box_inner container">
                <div className="text_box_content w_100pc justify_content_center p_0 min_h_reset m_pb_0 m_text_center">
                  <div className="text_box_content_inner max_w_100pc text_center">
                    <h2 className="color_gray_550 mb_30">Need help to find the right tattoo artist?</h2>
                    <Link
                      href={`/${router.locale}/klarna`}
                      className="btn_secondary btn_cutom_new btn_cutom_mob b_radius_16"
                    >
                      Create a tattoo request
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>






      <section className="img_text_banner_box partner_tattoo_block">
        <div className="text_box_wrap full-block-wrap">
          <div className="img_text_box_wrapper">
            <div
              className={
                "text_box_wrap right pb_80 pt_80 m_lg_pb_40 m_pt_20 m_pb_40"
              }
            >
              <div className="container">
                <div className="text_box_content_inner max_w_100pc">
                  <h3 className="color_gray_550 text_left heading_h2 pb_50 m_pb_30">
                    {t("common:klarnaPage.MainTitle1")}
                  </h3>
                </div>
                <div className={`${"partner_tattoo_list"} ${style.listGrid}`}>
                  {list1.map((el, index) => {
                    return (
                      <div
                        className={`item ${
                          index < list1.length - 2
                            ? style.with_margin
                            : style.grid_mobileView
                        }`}
                        key={index}
                      >
                        <span className="klarna_num_count">{el.num}</span>
                        <h4 className="color_gray_550 custom_fs_32 fw_700 m_lg_custom_fs_26 custom_fs_m_24">
                          {el.title}
                        </h4>
                        <p className="custom_fs_18 color_gray_550 mb_0 mt_10">
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



      






      <section className="img_text_banner_box">
        <div className="img_text_box_wrapper">
          <div class="text_box_wrap left block_bg_gray_150 container">
            <div className="img_text_box_wrapper">
              <div
                className={"text_box_wrap right pb_80 pt_80 m_pt_40 m_pb_40"}
              >
                <h3 className="color_gray_550 text_left heading_h2 pb_50 pt_0 m_pb_30 m_text_Black">
                  {" "}
                  {t("common:klarnaPage.MainTitle2")}
                </h3>
                <div className={style.listGrid}>
                  {listingItems.map((el, index) => {
                    return (
                      <div
                        className={`item ${
                          index < listingItems.length - 2
                            ? style.with_margin
                            : style.grid_mobileView
                        }`}
                        key={index}
                      >
                        <h4 className="color_gray_550 custom_fs_26 fw_700 custom_fs_m_24 mb_15">
                          {el.title}
                        </h4>
                        <p className="custom_fs_18 color_gray_550 mb_0">
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

      <FiveColumnCarousel
        title={t("common:klarnaPage.carosuelTitle")}
        title_sub={t("common:klarnaPage.carosuelTitle-Sub")}
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
