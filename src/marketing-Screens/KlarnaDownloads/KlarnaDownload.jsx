import React, { useState, useEffect } from "react";
import DownloadApps from "../DownloadApps-klarna/DownloadApps";
import style from "./style.module.css";
import useTranslation from "next-translate/useTranslation";



function Klarnadownloads() {
  const { t } = useTranslation();


    const listingItems =[
        {
          title: t("common:KlarnaMarketing.title1"),
          content:
          t("common:KlarnaMarketing.content1"),
        },
        {
          title:  t("common:KlarnaMarketing.title2"),
          content:
          t("common:KlarnaMarketing.content2"),
        },
    
        {
          title: t("common:KlarnaMarketing.title3"),
          content:
          t("common:KlarnaMarketing.content3"),
        },
        {
          title: t("common:KlarnaMarketing.title4"),
          content:
          t("common:KlarnaMarketing.content4"),
        },
      ];
  return (

    <div>


<section className="img_text_banner_box pt_150 pt_mid_90 m_pt_80">
      <div className="col_full">
        <div className="img_text_box_wrapper">
          <div
            className={"text_box_wrap right pb_75 pt_35 m_pt_25"}
          >
            <div className="container">
            <span className={`${"d_inline_block"} ${style.btn_klarna}`}>
                <img
                    src="/klarna.svg" alt="klarna"
                />            
            </span>
            <h3 className="color_gray_550 text_left heading_h2 pb_50 pt_35">{t("common:KlarnaMarketing.heading")}</h3>
              <div className={style.listGrid}>
                {listingItems.map((el, index) => {
                  return (
                    <div
                      className={`item ${
                        index < listingItems.length - 2
                          ? style.with_margin
                          : style.grid_mobileView
                      }`}
                      key={index}
                    >
                      <h4 className="color_gray_550 custom_fs_26 fw_700 custom_fs_m_24 mb_15">
                        {el.title}
                      </h4>
                      <p className="custom_fs_16 custom_fs_m_16 color_gray_550 mb_0">
                        {el.content}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <DownloadApps title="Download the" subTitle="App & Explore more!"   bgColor="block_bg_pink" />
    </div>
  )
}
export default Klarnadownloads