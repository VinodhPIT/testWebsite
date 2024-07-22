import React from "react";
import Head from "next/head";

import { useNavigation } from "@/hooks/useRouter";

import useTranslation from "next-translate/useTranslation";

import { UseResetRequestFormState} from "@/store/requestManagement/requestForm";
import Main from "@/components/stepperComponents/main";

export default function Requestform() {

  const { router } = useNavigation();
  const { t } = useTranslation();
  
  UseResetRequestFormState();

  return (
    <>
        <Head>
         <title>{t("common:customerRequest.title")}</title>
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
          content={`${process.env.LIVE_URL}/${router.locale}/createRequest`}
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
