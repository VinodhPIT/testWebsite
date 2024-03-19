import React, { useEffect, useState } from "react";
import Head from "next/head";
import useStore from "@/store/cmsData/contentData";
import { useRouter } from "next/router";
import Loader from "@/components/loader";
import useTranslation from "next-translate/useTranslation";

export default function Impressum({ data }) {
  const router = useRouter();
  const { t } = useTranslation();
  let languageSplit = router.locale.split("-");

  const { fetchData, separatedData, loader } = useStore();

  useEffect(() => {
    fetchData(languageSplit[1]);
  }, [router]);

  return (
    <>
      <Head>
        <title>{t("common:Impressum.title")}</title>
      </Head>

      <div className={"mainWrapper"}>
        <div className="container">
          {loader && <Loader />}

          {separatedData["impressum"] && (
            <div
              dangerouslySetInnerHTML={{
                __html: separatedData["impressum"]
                  .map((e) => e.content)
                  .join(""),
              }}
            />
          )}
        </div>
      </div>
    </>
  );
}
