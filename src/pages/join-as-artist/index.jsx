import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import useTranslation from "next-translate/useTranslation";

import useAppStoreLink from "@/hooks/useAppStoreLink";

import { useQrModal } from '@/context/ModalContext';

import {
  APP_LINK_APPLE,
  BLUR_URL,
} from "@/constants/index";


export default function JoinArtist() {
  const { t } = useTranslation();
  const { appStoreLink, imageSrc } = useAppStoreLink();
  const { openModal } = useQrModal();
  return (
    <>
      <Head>
        <title>{t("common:joinArtistScreenSEO.title")}</title>

        <meta
          name="description"
          content={t("common:joinArtistScreenSEO.description")}
        />
        <meta
          name="keywords"
          content={t("common:joinArtistScreenSEO.keyword")}
        />
      </Head>

      <section className="full_block_banner">
        <div class="row g-0">
          <div class="col-md-6">
            <div className="banner_block">
              <div className="banner_col h_100_vh min_h_100_pc m_h_inherit min_h_reset">
                <div className="banner_img_wrap m_pos_relative">                  
                  <Image
                    src="/pexels-jasmin-chew-web.png"
                    alt={t("common:styleGuidePage.Letteringtattoos")}
                    fill
                    placeholder="blur"
                    blurDataURL={BLUR_URL}
                    className="object_fit_cover object_center_top mob_hidden"
                  />
                  <Image
                    src="/pexels-jasmin-chew-mob.png"
                    alt={t("common:styleGuidePage.Letteringtattoos")}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={BLUR_URL}
                    fill
                    className="object_fit_cover desk_hidden m_pos_relative"
                  />
                </div>               
              </div>
            </div>
          </div>
          <div class="col-md-5 offset-md-left-1">
            <div className="banner_block">
              <div className="banner_col m_min_h_inherit pt_80 pb_80 pr_60 m_pr_0 m_pt_20 m_pb_40"> 
                <div className="w_100pc h_100pc d_flex flex_direction_column justify_content_center m_pr_15 m_pl_15">
                  <h1 className="color_gray_550 custom_fs_40 custom_fs_m_38 fw_800 mb_40 m_mb_15">
                    {t("common:joinartistPage.title1")}
                  </h1>
                  <section className="progress_block">
                    <ul className="progressbar">
                      <li className="dwld-app-step">
                        <div className="progressbar_block">
                          <h4>
                            {t("common:joinartistPage.downloadTheApp")}
                          </h4>
                          <p>{t("common:joinartistPage.getStarted")}</p>
                          <button
                            onClick={openModal}
                            className="button_primary button_primary mob_hidden mt_15"
                          >
                           {t("common:download_app")}
                          </button>
                          <Link href={appStoreLink} target="_blank" className="d_inline_block m_mt_15">
                            <Image
                              priority
                              src={imageSrc}
                              alt={
                                appStoreLink === APP_LINK_APPLE
                                  ? "App store"
                                  : "GooglePlay"
                              }
                              width={134}
                              height={41}
                              placeholder="blur"
                              blurDataURL={BLUR_URL}
                              className="custom_download_icons desk_hidden"
                            />
                          </Link>
                        </div>
                      </li>
                      <li className="create-account-step">
                        <div className="progressbar_block">
                          <h4>
                            {t("common:joinartistPage.CreateYourAccnt")}
                          </h4>
                          <p>
                            {t(
                              "common:joinartistPage.CompleteYourProfile"
                            )}
                          </p>
                        </div>
                      </li>
                      <li className="boost-account-step">
                        <div className="progressbar_block">
                          <h4>
                            {t(
                              "common:joinartistPage.BoostYourAccount"
                            )}
                          </h4>
                          <p>
                            {t(
                              "common:joinartistPage.easyVerificationProcess"
                            )}
                          </p>
                        </div>
                      </li>
                    </ul>
                  </section>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
