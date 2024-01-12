import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./style.module.css";

import useTranslation from "next-translate/useTranslation";

export default function NoData({ category }) {
  const { t } = useTranslation();

  const router = useRouter();

  const test = () => {
    localStorage.clear();

    router.push(`/explore/${category}`);

    
  };

  return (
    <div>
      <Image src={"/searchIcon.svg"} alt="SearchIcon" width={30} height={30} />

      <h1 className={styles.title}>{t("common:nodata")}</h1>
      <p className={styles.d}>{t("common:notFoundMessage")}</p>

      <button onClick={() => test()} className={styles.button}>
        {t("common:exploreAll")} {category}
      </button>
    </div>
  );
}
