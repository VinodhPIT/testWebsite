import React from "react";
import Image from "next/image";
import _Form from "@/components/forms/contactForm";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";

export default function Contact({}) {

  //Constants
  
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
          <section className="img_text_banner_box forms_section default_form_block contact_form_block m_pt_0">
            <div className="col_full">
              <div className="img_text_box_wrapper custom_new_wrap">
                <div class="text_box_wrap right">
                  <div class="img_text_box_inner">
                    <div class="text_box_content justify_content_center align_item_center pt_50 pb_50 m_pt_40 m_pb_15">
                      <div class="text_box_content_inner m_pr_0 w_100pc max_w_100pc">
                        <div className="tiny_payment_block">
                          <h1 class="color_gray_550 heading_h1 custom_fs_60 custom_fs_50 txt_mob_fs38 fw_700">
                            {t("common:contactUsPage.title")}
                          </h1>
                          <p className="md_max_75 m_max_100 mt_25 mb_0 custom_fs_m_14 m_mt_15">
                            {t("common:contactUsPage.content")}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="img_box_wrap align_item_center pt_50 pb_50 m_pt_30 m_pb_15"
                      >
                        <Image
                          priority
                          src="/contactus-bg.png"
                          alt={t("common:contactUsPage.title")}
                          fill
                          objectFit="cover"
                          objectPosition="left"
                          className="mob_hidden "
                        />
                        <Image
                          priority
                          src="/contactus-bg-mob.png"
                          alt={t("common:contactUsPage.title")}
                          fill
                          objectFit="cover"
                          objectPosition="center"                         
                          className="desk_hidden"
                        />   
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
