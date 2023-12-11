import React from "react";
import style from "./style.module.css";
export default function ListingGridTwoColumn({ data, bgColor }) {
  return (
    <section className="img_text_banner_box">
      <div className="col_full contai">
        <div className="img_text_box_wrapper">
          <div
            className={"text_box_wrap right  m_pt_14   pb_75 pt_75  m_pt_25"}
            style={{ backgroundColor: bgColor }}
          >
            <div className="container">
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
                      <h4 className="color_gray_550 custom_fs_26 fw_600 custom_fs_m_24">
                        {el.title}
                      </h4>
                      <p className="custom_fs_16 custom_fs_m_16 color_gray_550 mb_0 mt_5 ">
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
