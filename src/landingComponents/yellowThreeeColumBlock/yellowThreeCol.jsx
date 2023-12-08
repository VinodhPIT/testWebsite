import React from "react";


export default function YellowThreeCol({
  mainTitle,
  img,
  title1,
  content1,
  img2,
  title2,
  content2,
  img3,
  title3,
  content3,
  title4,
  content4,
  title5,
  content5,
  title6,
  content6,
}) {
  return (
    <section className="img_text_banner_box">
      <div className="text_box_wrap full-block-wrap block_bg_yellow">
        <div className="img_text_box_inner">
          <div className="justify_content_start container w_100pc">
            <div className="text_box_content_inner pt_80 pb_40 m_pt_45 max_w_100pc ">
              <h3 className="color_gray_550 mb_0  text_left heading_h2">
                {mainTitle}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="col_full">
        <div className="img_text_box_wrapper">
          <div
            className={
              "text_box_wrap right block_bg_yellow pb_75 m_pr_0 m_pb_15"
            }
          >
            <div className="img_text_box_inner container">
              <div className="text_box_content justify_content_start align_item_normal p_0 text_left w_100pc min_h_reset">
                <div className="text_box_content_inner max_w_100pc d_flex flex_direction_row m_flex_direction_column">
                  <div
                    className="d_flex flex_direction_column  m_pr_0 m_pb_35"
                    style={{ flex: "1" }}
                  >
                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">
                      {title1}
                    </h4>
                    <p className="custom_fs_20 custom_fs_m_16 color_gray_550 mb_0 mt_10 lh_33">
                      {content1}
                    </p>
                  </div>
                  <div
                    className="d_flex flex_direction_column  m_pr_0 m_pb_35"
                    style={{ flex: "1" }}
                  >
                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">
                      {title2}
                    </h4>
                    <p className="custom_fs_20 custom_fs_m_16 color_gray_550 mb_0 mt_10 lh_33 ">
                      {content2}
                    </p>
                  </div>
                  <div
                    className="d_flex flex_direction_column m_pr_0 m_pb_35"
                    style={{ flex: "1" }}
                  >
                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">
                      {title3}
                    </h4>
                    <p className="custom_fs_20 custom_fs_m_16 color_gray_550 mb_0 mt_10 lh_33 ">
                      {content3}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="img_text_box_inner container mt_25">
              <div className="text_box_content justify_content_start align_item_normal p_0 text_left w_100pc min_h_reset">
                <div className="text_box_content_inner max_w_100pc d_flex flex_direction_row m_flex_direction_column">
                  <div
                    className="d_flex flex_direction_column  m_pr_0 m_pb_35"
                    style={{ flex: "1" }}
                  >
                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">
                      {title4}
                    </h4>
                    <p className="custom_fs_20 custom_fs_m_16 color_gray_550 mb_0 mt_10 lh_33">
                      {content4}
                    </p>
                  </div>
                  <div
                    className="d_flex flex_direction_column  m_pr_0 m_pb_35"
                    style={{ flex: "1" }}
                  >
                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">
                      {title5}
                    </h4>
                    <p className="custom_fs_20 custom_fs_m_16 color_gray_550 mb_0 mt_10 lh_33 ">
                      {content5}
                    </p>
                  </div>
                  <div
                    className="d_flex flex_direction_column  m_pr_0 m_pb_35"
                    style={{ flex: "1" }}
                  >
                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">
                      {title6}
                    </h4>
                    <p className="custom_fs_20 custom_fs_m_16 color_gray_550 mb_0 mt_10 lh_33 ">
                      {content6}
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
