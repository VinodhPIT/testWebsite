import React from "react";
import useTranslation from "next-translate/useTranslation";


export default function Message() {

  const { t } = useTranslation();


  return (
    <section className=" h_63_vh 
    pt_110  pt_mid_90 m_pt_80 container">
      <div   className="pt_110 m_pt_80">
        <h2 className="color_gray_550 text_center heading_h2 mb_35 m_mb_25 mr_0">
        {t("common:Somethingwrong")}
        </h2>
      </div>
    </section>
  );
}
