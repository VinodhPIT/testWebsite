import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

import { useNavigation } from "@/hooks/useRouter";
import useWindowResize from "@/hooks/useWindowSize";
import { useRequestPath } from '@/hooks/useRequestPath';

import usePath from'@/store/setPath/setPath'
import DownloadApps from "@/components/klarnaComponent/DownloadApps/DownloadApps";
import FiveColumnCarousel from "@/components/klarnaFiveColumnCarousel/fiveColumnCarousel";

import {
  APP_LINK_APPLE,
  APP_LINK_GOOGLE,
  blurDataURL, KLARNA_LINK
} from "@/constants/constants";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";




function KlarnaNew({}) {
  const { t } = useTranslation();
  const { router } = useNavigation();
  const {setPathname} = usePath()
  const { isMobileView } = useWindowResize();
  const requestPath = useRequestPath(isMobileView);

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
                    src="/klarnaBanner_n_01.png"
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
                    src="/klarnaBanner_n_mob_01.png"
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
                  <h3 className="color_gray_550 text_center m_text_left mb_0 custom_fs_40 fw_400 custom_fs_m_24 pb_35 m_pb_15">
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
                    <h4 className="color_gray_550 custom_fs_28 custom_fs_m_20 fw_700 mt_25 mb_0 m_mt_15">
                    {t("common:klarnaPage.optionTitle-1")}
                    </h4>
                    <p className="custom_fs_18 color_gray_550 custom_fs_m_14 mb_0 mt_8">
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
                    <h4 className="color_gray_550 custom_fs_28 custom_fs_m_20 fw_700 mt_25 mb_0 m_mt_15">
                    {t("common:klarnaPage.optionTitle-2")}
                    </h4>
                    <p className="custom_fs_18 color_gray_550 custom_fs_m_14 mb_0 mt_8">
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
                    <h4 className="color_gray_550 custom_fs_28 custom_fs_m_20 fw_700 mt_25 mb_0 m_mt_15">
                    {t("common:klarnaPage.optionTitle-3")}
                    </h4>
                    <p className="custom_fs_18 color_gray_550 custom_fs_m_14 mb_0 mt_8">
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
                    <h4 className="color_gray_550 custom_fs_28 custom_fs_m_20 fw_700 mt_25 mb_0 m_mt_15">
                    {t("common:klarnaPage.optionTitle-4")}
                    </h4>
                    <p className="custom_fs_18 color_gray_550 custom_fs_m_14 mb_0 mt_8">
                    {t("common:klarnaPage.optionContent-4")}
                    </p>
                  </div>
                </div>
                <div className="klarna_pay_terms">
                  <p>
                  {t("common:klarnaPage.klarnaTerms")}
                    <Link href={KLARNA_LINK} target="_blank">
                    {t("common:klarnaPage.ts&amp;cs")}
                    </Link>
                    {t("common:klarnaPage.lateFeesApply")}
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
                    <h2 className="color_gray_550 mb_30 m_mb_25 custom_fs_m_28 fw_700">
                    {t("common:klarnaPage.findArtists")}
                    </h2>
                    <Link
                      href={requestPath}  onClick={()=>setPathname(router.pathname)}
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
                "text_box_wrap right pb_80 pt_80 m_lg_pb_40 m_pt_30 m_pb_15"
              }
            >
              <div className="container">
                <div className="text_box_content_inner max_w_100pc">
                  <h3 className="color_gray_550 text_center m_text_left mb_0 custom_fs_40 fw_400 custom_fs_m_24 pb_40 m_pb_0 m_mb_5">
                    {t("common:klarnaPage.MainTitle1")}
                  </h3>
                </div>
                <div className="klarna_works_block mob_hidden">
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

                <div className="klarna_works_accordion desk_hidden">
                  <Accordion allowZeroExpanded={true}>
                    {list.map((el, index) => (
                    <AccordionItem key={index} uuid={el.num}>
                      <AccordionItemHeading className="klarna_works_items">
                        <AccordionItemButton><span className="klarna_num_count">{el.num}</span><h4 className="color_gray_550">{el.title}</h4></AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className="color_gray_550">{el.content}</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                    ))}
                  </Accordion>
                </div>



              </div>
            </div>
          </div>
        </div>
      </section>


    



      <FiveColumnCarousel
        title={t("common:klarnaPage.carosuelTitle")}
        content_sub={t("common:klarnaPage.content_sub")}
        
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