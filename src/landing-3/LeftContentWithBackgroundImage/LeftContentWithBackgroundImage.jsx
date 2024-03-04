import React from "react";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";

export default function WhydragonTattoo({
  title1,
  content1,
  title2,
  content2,
  title3,
  content3,
  title4,
  content4,
  bgImage,
  textColor,
}) {
  return (
    <section className="img_text_banner_box">
      <div className="col_full">
        <div className="img_text_box_wrapper">
          <div
            className={
              "text_box_wrap right block_bg_gray_100 bg_drachen_tattoo"
            }
            style={{
              background: `url(${bgImage}) no-repeat`,
              backgroundSize: "cover",
            }}
          >
            <div className="img_text_box_inner container">
              <div className="text_box_content justify_content_start align_item_center p_0 min_h_reset ml_0 mr_0">
                <div className="text_box_content_inner max_w_100pc">
                  <div className="d_flex flex_direction_column mb_30">
                    <h4
                      className={`custom_fs_32 fw_700 custom_fs_m_24 mb_20 ${textColor}`}
                    >
                      {title1}
                    </h4>
                    <p className={`custom_fs_16  mb_0 mt_0 ${textColor}`}>
                      {content1}
                    </p>
                  </div>
                  <div className="d_flex flex_direction_column mb_30">
                    <h4
                      className={`custom_fs_32 fw_700 custom_fs_m_24 mb_20 ${textColor}`}
                    >
                      {title2}
                    </h4>
                    <p className={`custom_fs_16  mb_0 mt_0 ${textColor}`}>
                      {content2}
                    </p>
                  </div>
                  <div className="d_flex flex_direction_column mb_30">
                    <h4
                      className={`custom_fs_32 fw_700 custom_fs_m_24 mb_20 ${textColor}`}
                    >
                      {title3}
                    </h4>
                    <p className={`custom_fs_16  mb_0 mt_0 ${textColor}`}>
                      {content3}
                    </p>
                  </div>
                  <div className="d_flex flex_direction_column mb_0">
                    <h4
                      className={`custom_fs_32 fw_700 custom_fs_m_24 mb_20 ${textColor}`}
                    >
                      {title4}
                    </h4>
                    <p className={`custom_fs_16  mb_0 mt_0 ${textColor}`}>
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
