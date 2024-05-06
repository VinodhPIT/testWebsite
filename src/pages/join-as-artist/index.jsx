import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import useTranslation from "next-translate/useTranslation";
import _Form from "@/components/artistForm/form";

import {
  APP_LINK_APPLE,
  APP_LINK_GOOGLE,
  blurDataURL,
} from "@/constants/constants";


export default function JoinArtist() {
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
            <div className="img_text_box_wrapper">
              <div className="text_box_wrap left container custom_left_img_new pt_80 pb_100 m_pt_0 m_mt_15 m_pb_40">
                <div className="img_text_box_inner flex_direction_column">
                  <div className="row m_switcher_row">
                    <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                      <div className="img_box_wrap mb_0 mt_0">
                        <Image
                          priority={true}
                          src="/pexels-jasmin-chew.png"
                          alt={t("common:styleGuidePage.Letteringtattoos")}
                          width={525}
                          height={661}
                          layout="responsive"
                          className="mob_hidden"
                        />
                        <Image
                          priority={true}
                          src="/pexels-jasmin-chew-mob.png"
                          alt={t("common:styleGuidePage.Letteringtattoos")}
                          width={525}
                          height={661}
                          layout="responsive"
                          className="desk_hidden"
                        />
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 offset-lg-1 offset-md-1">
                      <div className="text_box_content justify_content_start align_item_start m_min_h_reset m_0 p_0">
                        <div className="text_box_content_inner">
                          <h1 className="color_gray_550 custom_fs_40 custom_fs_m_38 fw_600 fw_m_700 mb_40 m_mb_15 m_mt_15 m_pt_20">
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
                                  <div className="mt_15 app_dwld_img_wrap">
                                    <Link href={APP_LINK_APPLE} target="_blank">
                                      <Image
                                        priority
                                        src="/app-store-new.svg"
                                        alt={t("common:appStoreDownload")}
                                        width={134}
                                        height={41}
                                        placeholder="blur"
                                        blurDataURL={blurDataURL}
                                        className="custom_download_icons w_auto"
                                      />
                                    </Link>{" "}
                                    <Link
                                      href={APP_LINK_GOOGLE}
                                      target="_blank"
                                    >
                                      <Image
                                        priority
                                        src="/g-play-new.svg"
                                        alt={t("common:playStoreDownload")}
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
              </div>
            </div>
          </div>
        </section>
      </div>
    
    </>
  );
}
