import React from "react";
import Image from "next/image";
import _Form from "@/components/forms/contactForm";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import Link from "next/link";

import useAppStoreLink from "@/hooks/useAppStoreLink";
import { useQrModal } from '@/context/ModalContext';

import {
  APP_LINK_APPLE,
  BLUR_URL,
} from "@/constants/index";

export default function Contact({}) {

  //Constants
  
  const { t } = useTranslation();
  const { appStoreLink, imageSrc } = useAppStoreLink();
  const { openModal } = useQrModal();

  return (
    <>
      <Head>
        <title>{t("common:contactUsScreenSEO.title")}</title>
        <meta
          name="description"
          content={t("common:contactUsScreenSEO.description")}
        />
        <meta
          name="keywords"
          content={t("common:contactUsScreenSEO.keyword")}
        />
      </Head>


      <section className="full_block_banner">
        <div class="row g-0">
          <div class="col-md-6">
            <div className="banner_block">
              <div className="banner_col h_100_vh min_h_100_pc m_h_inherit min_h_reset">
                <div className="banner_img_wrap">                  
                  <Image
                    src="/contactus-bg.png"
                    alt={t("common:contactUsPage.title")}
                    fill
                    placeholder="blur"
                    blurDataURL={BLUR_URL}
                    className="object_fit_cover object_center_top mob_hidden"
                  />
                  <Image
                    src="/contactus-bg-m.png"
                    alt={t("common:contactUsPage.title")}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={BLUR_URL}
                    fill
                    className="object_fit_cover desk_hidden"
                  />
                </div>

                <div className="banner_caption m_pt_85 m_pb_30 m_min_h_300 m_align_item_center">
                  <div className="d_inline_block"> 
                    <div className="banner_content word_break">
                      <h1 class="color_white custom_fs_80 fw_800 custom_fs_m_60 mb_10 letter_spacing_032 letter_spacing_m_024">
                        {t("common:contactUsPage.title")}
                      </h1>
                      <p className="color_white md_max_75 m_max_100 mb_0">
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
