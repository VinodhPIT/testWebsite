import React from "react";
import Image from "next/image";
import Head from "next/head";

import { useNavigation } from "@/hooks/useRouter";

import _Form from "@/components/forms/contactForm";
import useTranslation from "next-translate/useTranslation";

import {
  BLUR_URL,
} from "@/constants/index";

export default function Contact({}) {

  const { router } = useNavigation();
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("common:contactUs_Meta.title")}</title>
        <meta
          name="description"
          content={t("common:contactUs_Meta.description")}
        />
        <meta
          name="keywords"
          content={t("common:contactUs_Meta.keyword")}
        />
         <meta
          property="og:title"
          content={t("common:contactUs_Meta.title")}
        />
        <meta
          property="og:description"
          content= {t("common:contactUs_Meta.description")}
        />
        <meta property="og:image" content={`${process.env.LIVE_URL}/metaContact.png`} />
        <meta
          property="og:url"
          content={`${process.env.LIVE_URL}/${router.locale}/contact`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={t("common:contactUs_Meta.title")}
        />
        <meta
          name="twitter:description"
          content={t("common:contactUs_Meta.description")}
        />
        <meta name="twitter:image"  content={`${process.env.LIVE_URL}/metaContact.png`} />
        <meta name="twitter:site" content="@YourTwitterHandle" />

        <meta http-equiv="x-ua-compatible" content="ie=edge" />
       <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
       
      </Head>


      <section className="full_block_banner tab_orie_portrait">
        <div class="row g-0 h_100pc">
          <div class="col-md-6">
            <div className="banner_block">
              <div className="banner_col min_h_100_pc m_h_inherit min_h_reset">
                <div className="banner_img_wrap position_relative m_min_h_380">                  
                  <Image
                    src="/contactus-bg.png"
                    alt={t("common:contactUsPage.title")}
                    fill
                    placeholder="blur"
                    blurDataURL={BLUR_URL}
                    className="object_fit_cover object_center_top mob_hidden position_relative"
                  />
                  <Image
                    src="/contactus-bg-m.png"
                    alt={t("common:contactUsPage.title")}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={BLUR_URL}
                    fill
                    className="object_fit_cover desk_hidden position_relative m_object_position_left"
                  />
                  
                </div>
                <div className="banner_caption m_pt_85 m_pb_30 m_min_h_300 m_align_item_center position_absolute h_100pc m_md_lg_pr_20">
                  <div className="d_inline_block"> 
                    <div className="banner_content word_break">
                      <h1 class="color_white custom_fs_80 fw_700 custom_md_lg_fs_60 custom_fs_m_60 mb_10 letter_spacing_032 letter_spacing_m_024">
                        {t("common:contactUsPage.title")}
                      </h1>
                      <p className="color_white max_w_440 m_max_100 mb_0">
                        {t("common:contactUsPage.content")}
                      </p>                                        
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5 offset-md-left-1">
            <div className="banner_block">
              <div className="banner_col m_min_h_inherit pt_80 pb_80 pr_60 m_pr_0 m_pt_20 m_pb_40"> 
                <div className="w_100pc h_100pc d_flex flex_direction_column justify_content_center align_item_center m_pr_15 m_pl_15"> 
                  <_Form />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
