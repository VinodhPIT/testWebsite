import React from "react";
import Head from "next/head";

import useTranslation from "next-translate/useTranslation";
import { UseResetRequestFormState} from "@/store/requestManagement/requestForm";

import Main from "@/components/stepperComponents/main";

export default function Requestform() {

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
      </Head>


      <Main />
    </>
  );
}
