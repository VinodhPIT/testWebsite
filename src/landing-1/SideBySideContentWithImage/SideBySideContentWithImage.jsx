import React from "react";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import styles from "./style.module.css";

export default function SideBySideContentWithImage({
  mainTitle,
  title1,
  title2,
  title3,
  title4,
  content1,
  content2,
  content3,
  content4,
  leftSectionImage,
  rightSecImage,
  alt1,
  alt2,
}) {
  return (
    <section className="img_text_banner_box">
      {mainTitle && (
        <div className="text_box_wrap full-block-wrap block_bg_gray_150">
          <div className="img_text_box_inner">
            <div className="justify_content_start container w_100pc">
              <div className="text_box_content_inner pt_pb_80 max_w_100pc m_pt_pb_50">
                <h2 className="color_gray_550 mb_0 heading_h2">{mainTitle}</h2>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="col_full">
        <div className="img_text_box_wrapper">
          {/* <div className={`${'btn_custom_m'} ${styles.hi}`}> */}

          <div
            className={`${"text_box_wrap right block_bg_gray_150 pb_75 m_pb_40  m_pt_20"}  ${
              mainTitle === "" ? "pt_75 m_pt_40" : null
            }`}
          >
            <div className="img_text_box_inner container">
              <div className="text_box_content justify_content_start align_item_center p_0 pr_40 m_pr_0 m_min_h_reset">
                <div className="text_box_content_inner max_w_100pc m_mt_0">
                  <div className="d_flex flex_direction_column mb_65 mt_0 m_mb_45">
                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">
                      {title1}
                    </h4>
                    <p className="custom_fs_20 custom_fs_m_16 color_gray_550 mb_0 mt-15 lh_33">
                      {content1}
                    </p>
                  </div>

                  {title2 !== "" ? (
                    <div className="d_flex flex_direction_column mb_65 m_mb_45">
                      <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">
                        {title2}
                      </h4>
                      <p className="custom_fs_20 custom_fs_m_16 color_gray_550 mb_0 mt-15 lh_33 ">
                        {content2}
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>

              <div class="img_box_wrap justify_content_center">
                <ul class="justify_content_center pl_0">
                  <li>
                    <Image
                      priority
                      alt={alt1}
                      src={leftSectionImage}
                      width={591}
                      height={600}
                      blurDataURL={blurDataURL}
                      placeholder="blur"
                      className={styles.imageResponsive}
                    />
                  </li>
                </ul>
              </div>
            </div>

            <div className="img_text_box_inner container m_switcher">
              <div class="img_box_wrap justify_content_center m_order_2">
                <ul class="justify_content_center pl_0">
                  <li>
                    <Image
                      priority
                      alt={alt2}
                      src={rightSecImage}
                      width={591}
                      height={600}
                      blurDataURL={blurDataURL}
                      placeholder="blur"
                      className={styles.imageResponsive}
                    />
                  </li>
                </ul>
              </div>
              <div className="text_box_content justify_content_start align_item_center p_0 pl_40 m_pl_0 m_min_h_reset m_order_1">
                <div className="text_box_content_inner max_w_100pc">
                  <div
                    className={`d_flex flex_direction_column  mt_0 m_mt_15 m_mb_45 ${
                      title4 !== "" ? "mb_65" : "mb_0"
                    }`}
                  >
                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">
                      {title3}
                    </h4>
                    <p className="custom_fs_20 custom_fs_m_16 color_gray_550 mb_0 mt-15 lh_33">
                      {content3}
                    </p>
                  </div>
                  {title4 !== "" ? (
                    <div className="d_flex flex_direction_column mb_65 m_mb_45">
                      <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">
                        {title4}
                      </h4>
                      <p className="custom_fs_20 custom_fs_m_16 color_gray_550 mb_0 mt-15 lh_33 ">
                        {content4}
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
