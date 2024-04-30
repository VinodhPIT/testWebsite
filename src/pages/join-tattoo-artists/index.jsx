import React, { useEffect } from "react";
import _Form from "@/components/artistForm/form";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  APP_LINK_APPLE,
  APP_LINK_GOOGLE,
  blurDataURL,
} from "@/constants/constants";
export default function JoinArtist({}) {
  const { t } = useTranslation();

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

      <div className="page-wrapper">
        <section className="img_text_banner_box">
          <div className="col_full">
            <div className="img_text_box_wrapper exciting_offer_wrap">
              <div class="text_box_wrap right">
                <div class="img_text_box_inner custom_two_col_banner">
                  <div class="text_box_content justify_content_center m_min_h_reset m_pb_15 m_pt_15">
                    <div class="text_box_content_inner m_pr_0 w_100pc max_w_100pc m_pt_0 m_pb_0 m_pb_35 pt_80">
                      <Image
                        priority={true}
                        src="/pexels-jasmin-chew.png"
                        alt={t("common:styleGuidePage.Letteringtattoos")}
                        width={525}
                        height={661}
                        layout="responsive"
                        className="object_position_left"
                      />
                    </div>
                  </div>
                  <div class="img_box_wrap no_space_center no_shadow_before pt_80 m_pt_20 m_mb_40 m_flex_direction_column justify_content_start">
                    <h1 className="mb_40 custom_fs_40 custom_fs_m_38 fw_600 fw_m_700 ">
                      {t("common:joinartistPage.title1")}
                    </h1>
                    <section className="progress_block">
                      <ul className="progressbar">
                        <li className="dwld-app-step">
                          <div className="progressbar_block">
                            <h4>{t("common:joinartistPage.downloadTheApp")}</h4>
                            <p>{t("common:joinartistPage.getStarted")}</p>
                            <div className="mt_15 app_dwld_img_wrap">
                              <Link href={APP_LINK_APPLE} target="_blank">
                                <Image
                                  priority
                                  src="/app-store-new.svg"
                                  alt="App store"
                                  width={134}
                                  height={41}
                                  placeholder="blur"
                                  blurDataURL={blurDataURL}
                                  className="custom_download_icons w_auto"
                                />
                              </Link>{" "}
                              <Link href={APP_LINK_GOOGLE} target="_blank">
                                <Image
                                  priority
                                  src="/g-play-new.svg"
                                  alt="Play store"
                                  width={134}
                                  height={41}
                                  placeholder="blur"
                                  blurDataURL={blurDataURL}
                                  className="custom_download_icons w_auto"
                                />
                              </Link>
                            </div>
                          </div>
                        </li>
                        <li className="create-account-step">
                          <div className="progressbar_block">
                            <h4>
                              {t("common:joinartistPage.CreateYourAccnt")}
                            </h4>
                            <p>
                              {t("common:joinartistPage.CompleteYourProfile")}
                            </p>
                          </div>
                        </li>
                        <li className="boost-account-step">
                          <div className="progressbar_block">
                            <h4>
                              {t("common:joinartistPage.BoostYourAccount")}
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
      </div>
    </>
  );
}
