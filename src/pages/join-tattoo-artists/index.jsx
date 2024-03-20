import React, { useEffect } from "react";
import _Form from "@/components/forms/joinArtistform";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";

export default function JoinArtist({}) {
  //Constants
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
        <section className="img_text_banner_box forms_section default_form_block artist_tattoo_form_block">
          <div className="col_full">
            <div className="img_text_box_wrapper custom_new_wrap">
              <div className="text_box_wrap right">
                <div className="img_text_box_inner">
                  <div className="text_box_content justify_content_center align_item_start">
                    <div className="text_box_content_inner m_pr_0 w_100pc max_w_100pc">
                      <div className="form_block_left">
                        <h1 className="color_gray_550 heading_h1 custom_fs_58 custom_fs_50 txt_mob_fs45">
                          <span>{t("common:joinartistPage.title1")}</span>
                          <span className="textBlock">
                            {t("common:joinartistPage.title1-Sub")}
                          </span>
                        </h1>
                        <div className="form_left_wrap">
                          <section className="progress_block">
                            <ul className="progressbar">
                              <li className="active">
                                <div className="progressbar_block">
                                  <h4> {t("common:joinartistPage.head1")}</h4>
                                  <p> {t("common:joinartistPage.text")}</p>
                                </div>
                              </li>
                              {/* <li>
                              <div className="progressbar_block">
                                <h4> {t("common:joinartistPage.head2")}</h4>
                                <p> {t("common:joinartistPage.text")}</p>
                              </div>
                            </li> */}
                              <li>
                                <div className="progressbar_block">
                                  <h4>{t("common:joinartistPage.head2")}</h4>
                                </div>
                              </li>
                            </ul>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="img_box_wrap"
                    style={{ backgroundImage: "url(/joinArtist.jpg)" }}
                  >
                    <div className="form_block_right">
                      <_Form />
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
