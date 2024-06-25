import React from "react";
import style from "./style.module.css";

export default function ListingGridThreeColumn({ mainTitle, data, bgColor }) {
  return (
    <section className="img_text_banner_box">
      <div className="col_full contai">
        <div className="img_text_box_wrapper">
          <div
            className={"text_box_wrap right   pb_50 pt_50  m_pt_25 m_pb_0"}
            style={{ backgroundColor: bgColor }}
          >
            <div className="container">
              {mainTitle !== "" ? (
                <div className="text_box_content_inner  max_w_100pc">
                  <h3 className="color_gray_550   text_left heading_h2  pb_40">
                    {mainTitle}
                  </h3>
                </div>
              ) : null}

              <div className={style.listGrid}>
                {data.map((el, index) => {
                  return (
                    <div
                      className={`item ${
                        index < data.length - 2
                          ? style.with_margin
                          : style.grid_mobileView
                      }`}
                      key={index}
                    >
                      <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">
                        {el.title}
                      </h4>
                      <p className="custom_fs_20 custom_fs_m_16 color_gray_550 mb_0 mt_10 lh_33">
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
  );
}
