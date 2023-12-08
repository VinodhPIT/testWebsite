import React from "react";

export default function FourColumnSection({
  title1,
  content1,
  title2,
  content2,
  title3,
  content3,
  title4,
  content4,
}) {
  return (
    <section className="img_text_banner_box">
      <div className="col_full">
        <div className="img_text_box_wrapper">
          <div
            className={
              "text_box_wrap right block_bg_green_100  pb_75 pt_75 mb_35 m_pt_25 m_pb_0"
            }
          >
            <div className="img_text_box_inner container">
              <div className="text_box_content justify_content_start align_item_normal p_0 pr_40 m_pr_0 min_h_reset">
                <div className="text_box_content_inner max_w_100pc">
                  <div className="d_flex flex_direction_column mb_65 m_mt_15 m_mb_45">
                    <h4 className="color_gray_550 custom_fs_26 fw_600 custom_fs_m_24">
                      {title1}
                    </h4>
                    <p className="custom_fs_16 custom_fs_m_16 color_gray_550 mb_0 mt_5 ">
                      {content1}
                    </p>
                  </div>
                  <div className="d_flex flex_direction_column m_mb_45">
                    <h4 className="color_gray_550 custom_fs_26 fw_600 custom_fs_m_24">
                      {title2}
                    </h4>
                    <p className="custom_fs_16 custom_fs_m_16 color_gray_550 mb_0 mt_5">
                      {content2}
                    </p>
                  </div>
                </div>
              </div>
              <div className="text_box_content justify_content_start align_item_normal p_0 pr_40 m_pr_0 min_h_reset">
                <div className="text_box_content_inner max_w_100pc">
                  <div className="d_flex flex_direction_column mb_65 m_mt_15 m_mb_45">
                    <h4 className="color_gray_550 custom_fs_26 fw_600 custom_fs_m_24">
                      {title3}
                    </h4>
                    <p className="custom_fs_16 custom_fs_m_16 color_gray_550 mb_0 mt_5 ">
                      {content3}
                    </p>
                  </div>
                  <div className="d_flex flex_direction_column m_mb_45">
                    <h4 className="color_gray_550 custom_fs_26 fw_600 custom_fs_m_24">
                      {title4}
                    </h4>
                    <p className="custom_fs_16 custom_fs_m_16 color_gray_550 mb_0 mt_5 ">
                      {content4}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
