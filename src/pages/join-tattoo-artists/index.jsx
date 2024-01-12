import React,{useEffect} from "react";
import _Form from "@/components/artistForm/form";

import useTranslation from "next-translate/useTranslation";
import { useGlobalState } from "@/context/Context";
import { getLocaleProps } from '@/utils/getlocale';
import Head from "next/head";




export default function JoinArtist({locale}) {

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
        Discover opportunities: Join our tattoo artist platform
        </title>
        <meta
          name="description"
          content="Find exciting opportunities in the tattoo industry. Join our platform for tattoo artists and kick-start your creative journey today"
        />
        <meta
          name="keywords"
          content="Tattooing FAQs, Tattoo information hub, Tattoo advice and guidance, Tattoo facts and answers"
        />
      </Head>


    <div className="page-wrapper">
      <section class="forms_section default_form_block artist_tattoo_form_block">
        <div class="container">
          <div class="full_block_wrap">
            <div class="form_block_left">
              <h1 class="page_title">
              <span>{t("common:joinartistPage.title1")}</span>
              <span className="textBlock">{t("common:joinartistPage.title1-Sub")}</span>
              </h1>
              <div class="form_left_wrap">
                <section class="progress_block">
                  <ul class="progressbar">
                    <li class="active">
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
                        <h4> {t("common:joinartistPage.head3")}</h4>
            
                      </div>
                    </li>
                  </ul>
                </section>
              </div>
            </div>

            <div class="form_block_right">
              <_Form />
            </div>
          </div>
        </div>
      </section>
    </div>
    </>

  );
}



export async function getServerSideProps(context) {
  const { props } = await getLocaleProps(context);
  return {
    props:{
      locale:props.locale
    }
  };
}