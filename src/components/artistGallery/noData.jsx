import React from "react";
import Image from "next/image";
import styles from "@/components/noDatafound/style.module.css";

import useTranslation from "next-translate/useTranslation";

export default function NoData({ category }) {
  const { t } = useTranslation();

  return (
    <div>
      <Image src={"/searchIcon.svg"} alt="SearchIcon" width={30} height={30} />

      <h1 className={styles.title}>{t("common:nodata")}</h1>
    </div>
  );
}
