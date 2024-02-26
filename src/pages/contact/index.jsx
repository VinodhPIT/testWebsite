import React from "react";
import _Form from "@/components/form/form";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";

export default function Contact({}) {
  const { t } = useTranslation();

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

      <main>
        <div className="page-wrapper">
          <section className="img_text_banner_box forms_section default_form_block contact_form_block">
            <div className="col_full">
              <div className="img_text_box_wrapper custom_new_wrap">
                <div class="text_box_wrap right">
                  <div class="img_text_box_inner">
                    <div class="text_box_content justify_content_center align_item_start">
                      <div class="text_box_content_inner m_pr_0 w_100pc max_w_100pc">
                        <div className="tiny_payment_block">
                          <h1 class="color_gray_550 heading_h1 custom_fs_58 custom_fs_50 txt_mob_fs45 fw_600">
                            {t("common:contactUsPage.title")}
                          </h1>
                          <p className="md_max_75 m_max_100">
                            {t("common:contactUsPage.content")}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="img_box_wrap"
                      style={{ backgroundImage: "url(/contactus-bg.jpg)" }}
                    >
                      <div class="form_block_right">
                        <_Form />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
