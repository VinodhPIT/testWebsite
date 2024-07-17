import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import useTranslation from "next-translate/useTranslation";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

import { useNavigation } from "@/hooks/useRouter";
import useWindowResize from "@/hooks/useWindowSize";

import useDisplayAll from "@/store/exploreAll/exploreAll";
import usePath from "@/store/setPath/setPath";

import Banner from "@/components/banners/Banner";
import ListAppFeature from "@/components/ appFeatureList/ListAppFeature";
import TextsCarousel from "@/components/carousel/TextsCarosuel";

import {
  BLUR_URL,
  KLARNA_LINK,
} from "@/constants/index";


function KlarnaNew({ }) {
  const { t } = useTranslation();
  const { router } = useNavigation();
  const { setPathname } = usePath();
  const { isMobileView } = useWindowResize();
  const { allListing } = useDisplayAll();

  
  const klarnaOptions = [
    {
      id: "1",
      tag: t("common:klarnaPage.tag1"),
      title: t("common:klarnaPage.optionTitle-1"),
      content: t("common:klarnaPage.optionContent-1"),
    },

    {
      id: "2",
      tag: t("common:klarnaPage.tag2"),
      title: t("common:klarnaPage.optionTitle-2"),
      content: t("common:klarnaPage.optionContent-2"),
    },

    {
      id: "3",
      tag: t("common:klarnaPage.tag3"),
      title: t("common:klarnaPage.optionTitle-3"),
      content: t("common:klarnaPage.optionContent-3"),
    },

    {
      id: "4",
      tag: t("common:klarnaPage.tag4"),
      title: t("common:klarnaPage.optionTitle-4"),
      content: t("common:klarnaPage.optionContent-4"),
    },
  ];

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
  const [expandedItems, setExpandedItems] = useState(['1']); // Initial expanded item

  const handleChange = (uuids) => {
    setExpandedItems(uuids);
  };

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

      <Banner
        bannerImage="/klarnaBanner.png"
        mobileBanner="/klarnaBanner_mob.png"
        altText={`${t("common:klarnaPage.bannerTitle1")} ${t("common:klarnaPage.bannerTitle1-Sub")}`}
        title={{
          firstPart:t("common:klarnaPage.bannerTitle1"),
          part2:t("common:klarnaPage.bannerTitle1-Sub"),
        }}
        description={t("common:klarnaPage.bannerContent")} 
        buttonText= {t("common:getApp")}
        titleWidth="max_w_480"
        descriptionWidth="max_w_520"
        buttonBg="button_primary_white"
        textColor="color_white"
        mob_textColor="color_white"
        isBadge={true}
        badge={'/klarna_badge_new.svg'}
      />

     
      <section className="container_full pt_40 pb_40 m_pb_20"> 
        <div className="row">
          <div className="col-md-6 col-sm-12 col-xs-12 klarna_payment_img_col mob_hidden">
            <div className="position_relative w_100pc h_100pc min_h_945 m_min_h_inherit">
              <div className="w_100pc h_100pc">
                <Image
                  priority={true}
                  src="/payment_opt_img.png"
                  alt={t("common:klarnaPage.paymentOption")}
                  width={650}
                  height={945}
                  placeholder="blur"
                  blurDataURL={BLUR_URL}
                  className="max_w_100pc w_100pc h_100pc object_fit_cover"
                />
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 col-xs-12 klarna_payment_txt_col">
            <div className="position_relative w_100pc h_100pc pl_16 m_pl_0">
              <div className="d_flex flex_direction_column justify_space_between h_100pc">
                {!isMobileView === true ?
                  <div className="klarna_works_accordion">
                    <div className="d_inline_block w_100pc pt_20 pb_40">
                      <h2 className="color_gray_550 custom_fs_38 custom_fs_m_32 fw_900 position_relative mb_0">
                        <span className="position_relative">
                          <span className="position_relative d_block custom_fs_16 lh_19 fw_300 text_fs_m_14 text_transform_upper">{t("common:klarnaPage.available")}</span>
                          {t("common:klarnaPage.paymentOption")}
                        </span>
                      </h2>
                    </div>
                    <Accordion allowZeroExpanded={true} preExpanded={['1']}>
                      {klarnaOptions.map((el, index) => (
                        <AccordionItem key={index} uuid={el.id}>
                          <AccordionItemHeading className="klarna_works_items">
                            <AccordionItemButton>
                              <span className="klarna_pay_opt_badge">
                                <Image
                                  src="/klarna-marketing-badge.svg"
                                  alt="klarna"
                                  width={50}
                                  height={21}
                               
                                />
                                <span className="klarna_pay_opt_label">
                                  {el.tag}
                                </span>
                              </span>
                              <h4 className="color_gray_550 custom_fs_28 fw_800 mt_8 mb_0 m_mt_15">
                                {el.title}
                              </h4>
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <p className="color_gray_550 custom_fs_18 fw_400 custom_fs_m_14 mb_0 mt_8">
                              {el.content}
                            </p>
                          </AccordionItemPanel>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                  :

                  <div className="d_inline_block w_100pc">
                    <div className="d_inline_block w_100pc mb_15">
                      <h2 className="color_gray_550 custom_fs_38 custom_fs_m_32 m_lh_38 fw_900 position_relative mb_0">
                        <span className="position_relative">
                          <span className="position_relative d_block custom_fs_16 lh_19 fw_300 text_fs_m_14 m_lh_19 text_transform_upper">{t("common:klarnaPage.available")}</span>
                          {t("common:klarnaPage.paymentOption")}</span>
                      </h2>
                    </div>
                    <div className="klarna_pay_opt_grid">
                      <div className="klarna_pay_opt_items">
                        <span className="klarna_pay_opt_badge">
                          <Image
                            src="/klarna-marketing-badge.svg"
                            alt="klarna"
                            width={50}
                            height={21}
                          
                          />
                          <span className="klarna_pay_opt_label">
                            {t("common:klarnaPage.tag1")}
                          </span>
                        </span>
                        <h4 className="color_gray_550 custom_fs_28 custom_fs_m_22 fw_800 mt_25 mb_0 m_mt_15">
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
                            width={50}
                            height={21}
                      
                          />
                          <span className="klarna_pay_opt_label">
                            {t("common:klarnaPage.tag2")}
                          </span>
                        </span>
                        <h4 className="color_gray_550 custom_fs_28 custom_fs_m_22 fw_800 mt_25 mb_0 m_mt_15">
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
                            width={50}
                            height={21}
                      
                          />
                          <span className="klarna_pay_opt_label">
                            {t("common:klarnaPage.tag3")}
                          </span>
                        </span>
                        <h4 className="color_gray_550 custom_fs_28 custom_fs_m_22 fw_800 mt_25 mb_0 m_mt_15">
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
                            width={50}
                            height={21}
                      
                          />
                          <span className="klarna_pay_opt_label">
                            {t("common:klarnaPage.tag4")}
                          </span>
                        </span>
                        <h4 className="color_gray_550 custom_fs_28 custom_fs_m_22 fw_800 mt_25 mb_0 m_mt_15">
                          {t("common:klarnaPage.optionTitle-4")}
                        </h4>
                        <p className="custom_fs_18 color_gray_550 custom_fs_m_14 mb_0 mt_8">
                          {t("common:klarnaPage.optionContent-4")}
                        </p>
                      </div>
                    </div>
                  </div>
                }
                {router.locale === "gb-en" && (
                  <div className="klarna_pay_terms m_pt_25">
                    <p>
                      {t("common:klarnaPage.klarnaTerms")}
                      <Link href={KLARNA_LINK} target="_blank">
                        {t("common:klarnaPage.ts&amp;cs")}
                      </Link>
                      {t("common:klarnaPage.lateFeesApply")}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container_full">
        <div className="row g-0">
          <div className="col-md-12">
            <div className=" w_100pc text_center position_relative d_flex justify_content_center align_item_center block_bg_pink_50 m_mt_10 pl_20 pr_20">
              <div className="pt_60 pb_60 m_pt_30 m_pb_30">
                <div className="">
                  <h2 className="color_gray_550 custom_fs_60 custom_fs_m_28 fw_800 mb_40 m_mb_25">
                    {t("common:klarnaPage.findArtists")}
                  </h2>
                  <Link
                    href={`/${router.locale}/createRequest`}
                    onClick={() => setPathname(router.pathname)}
                    className="button_primary"
                  >
                    {t("common:homePage.startRequest")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container_full pt_40 pb_0">
        <div className="row">
          <div className="col-md-12">
            <div className="position_relative d_inline_block w_100pc">
              <div className="d_inline_block w_100pc pb_40 m_pb_0">
                <h2 className="color_gray_550 custom_fs_38 custom_fs_m_32 m_lh_38 fw_900 position_relative mb_0 m_mb_5">
                  <span className="position_relative">
                    <span className="position_relative d_block custom_fs_16 lh_19 fw_300 text_fs_m_14 m_lh_19 text_transform_upper">{t("common:klarnaPage.understand")}</span>
                    {t("common:klarnaPage.howorks")}</span>
                </h2>
              </div>
              <div className="klarna_works_block mob_hidden">
                {list.map((el, index) => {
                  return (
                    <div className="klarna_works_items" key={index}>
                      <span className="klarna_num_count kl_count">{el.num}</span>
                      <h4 className="color_gray_550 custom_fs_28 fw_700 mt_15 mb_8">
                        {el.title}
                      </h4>
                      <p className="custom_fs_18 color_gray_550 fw_400 mb_0 mt_0">
                        {el.content}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="klarna_works_accordion desk_hidden">
              <Accordion allowZeroExpanded={true} preExpanded={expandedItems} onChange={handleChange}>
      {list.map((el, index) => (
        <AccordionItem key={index} uuid={el.num}>
          <AccordionItemHeading className="klarna_works_items">
            <AccordionItemButton>
              <span
                className={`klarna_num_count ${
                  expandedItems.includes(el.num) ? 'active_numCount' : 'inactive_count'
                }`}
              >
                {el.num}
              </span>
              <h4 className="color_gray_550">{el.title}</h4>
            </AccordionItemButton>
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
      </section>

      <TextsCarousel
        title={t("common:explore")}
        subTitle={t("common:tattooArtists")}
        description=""
        data={allListing.artists}
      />
      <ListAppFeature />
    </>
  );
}
export default KlarnaNew;

