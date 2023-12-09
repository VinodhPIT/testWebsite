import React from "react";
import style from "./style.module.css";

export default function YellowThreeCol({  methodList }) {
  return (
    <section className="img_text_banner_box">
      <div className=" block_bg_yellow container pt_50 pb_50 ">

 



        <div className="col_full">
          <div className="img_text_box_wrapper">
            <div className={"text_box_wrap right   m_pr_0 m_pb_15"}>
              <>
                <div className="img_text_box_inner ">
                  <div className="text_box_content justify_content_start align_item_normal p_0 text_left w_100pc min_h_reset">
                    <div className="text_box_content_inner max_w_100pc d_flex flex_direction_row m_flex_direction_column flex_wrap">
                      {methodList.map((e) => {
                        return (
                          <>
                            <div className={style.threeColumnBlock}>
                              <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">
                                {e.title}
                              </h4>
                              <p className="custom_fs_20 custom_fs_m_16 color_gray_550 mb_0 mt_10 lh_33">
                                {e.content}
                              </p>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
