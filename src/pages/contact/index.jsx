import React,{useEffect} from 'react'
import Link from "next/link";
import Image from "next/image";
import _Form from '@/components/form/form'
import useTranslation from "next-translate/useTranslation";
import { useGlobalState } from "@/context/Context";
import { getLocaleProps } from '@/utils/getlocale';
import Head from 'next/head';
import {
  APP_LINK_APPLE,
  APP_LINK_GOOGLE,
  blurDataURL,
} from "@/constants/constants";



export default function Contact({locale}) {

  const {getLocale } = useGlobalState();

  const { t } = useTranslation();


  useEffect(() => {
    try {
      getLocale({
        locale,
      });
    } catch (error) {}
  }, [locale]);

  return (  
<>
<Head>
<title>
        {t("common:contactUsScreenSEO.title")}

        </title>
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
                        <h1 class="color_gray_550 heading_h1 custom_fs_58 custom_fs_50 txt_mob_fs45 fw_600">{t("common:contactUsPage.title")}</h1>
                        <p className="md_max_75 m_max_100">{t("common:contactUsPage.content")}</p>
                      </div>
                    </div>
                  </div>
                  <div class="img_box_wrap" style={{ backgroundImage: 'url(/contactus-bg.jpg)' }}>
                    <div class="form_block_right">              
                      <_Form/>
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
  )
}


export async function getServerSideProps(context) {
  const { props } = await getLocaleProps(context);
  return {
    props:{
      locale:props.locale
    }
  };
}
