import React from "react";
import Head from "next/head";

import useCanonicalUrl from '@/hooks/useCanonicalUrl'; 

import useTranslation from "next-translate/useTranslation";
import loadTranslation from "next-translate/loadNamespaces";

import { UseResetRequestFormState} from "@/store/requestManagement/requestForm";
import Main from "@/components/stepperComponents/main";

export default function Requestform({translations}) {

  const { t } = useTranslation("common", { i18n: translations });
  const canonicalUrl = useCanonicalUrl();

  UseResetRequestFormState();

  return (
    <>
        <Head>
         <title>{t("common:customerRequest.title")}</title>

         <link rel="canonical" href={canonicalUrl}/>

        <meta
          name="description"
          content={t("common:customerRequest.description")}
        />
        <meta name="keywords" content={t("common:customerRequest.keyword")} />

        <meta
          property="og:title"
          content={t("common:customerRequest.title")}
        />
        <meta
          property="og:description"
          content= {t("common:customerRequest.description")}
        />
        <meta property="og:image" content={`${process.env.LIVE_URL}/metaCreateRequest.png`} />
        <meta
          property="og:url"
          content={canonicalUrl}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={t("common:customerRequest.title")}
        />
        <meta
          name="twitter:description"
          content={t("common:customerRequest.description")}
        />
        <meta name="twitter:image"  content={`${process.env.LIVE_URL}/metaCreateRequest.png`} />
        <meta name="twitter:site" content="@YourTwitterHandle" />
      </Head>
      <Main />
    </>
  );
}

export async function getServerSideProps(context) {
  const { locale } = context;

  try {
    const translations = await loadTranslation("common", locale);
    return {
      props: {
        translations,
      },
    };
  } catch (error) {
    return {
      props: {
        translations: {}, 
      },
    };
  }
}
