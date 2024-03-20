import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BLUR_URL } from "@/constants/constants";

export default function OrangeTwoRowBlock({
  mainTitle,
  img1,
  title1,
  content1,
  img2,
  title2,
  content2,
  bgColor,
  imgAlt1,
  imgAlt2,
}) {
  return (
    <section className="img_text_banner_box">
      <div
        className="text_box_wrap full-block-wrap"
        style={{ backgroundColor: bgColor }}
      >
        {mainTitle !== "" ? (
          <div className="img_text_box_inner">
            <div className="justify_content_start container w_100pc">
              <div className="text_box_content_inner pt_80 pb_40 m_pt_45 max_w_100pc ">
                <h3 className="color_gray_550 mb_0  text_left heading_h2">
                  {mainTitle}
                </h3>
              </div>
            </div>
          </div>
        ) : (
          <div className="pt_65"></div>
        )}
      </div>

      <div className="col_full">
        <div className="img_text_box_wrapper">
          <div
            className={"text_box_wrap right pb_20 m_pr_0 m_pb_15"}
            style={{ backgroundColor: bgColor }}
          >
            <div className="img_text_box_inner container">
              <div className="text_box_content justify_content_start align_item_normal p_0 text_left w_100pc min_h_reset">
                <div className="text_box_content_inner max_w_100pc d_flex flex_direction_row m_flex_direction_column">
                  <div className="d_flex flex_direction_column pr_40 m_pr_0 m_pb_35">
                    <div className="icon">
                      <Image
                        priority
                        width={54}
                        height={54}
                        alt={"Album"}
                        src={img2}
                        blurDataURL={BLUR_URL}
                        placeholder="blur"
                        layout="responsive"
                        className="w_auto mb_35"
                      />
                    </div>
                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">
                      {title1}
                    </h4>
                    <p className="custom_fs_16 custom_fs_m_16 color_gray_550 mb_0 mt_10 ">
                      {content1}
                    </p>
                  </div>
                  <div className="d_flex flex_direction_column pr_40 m_pr_0 m_pb_35">
                    <div className="icon">
                      <Image
                        priority
                        width={54}
                        height={54}
                        alt={"LinkRound"}
                        src={img1}
                        blurDataURL={BLUR_URL}
                        placeholder="blur"
                        layout="responsive"
                        className="w_auto mb_35"
                      />
                    </div>
                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">
                      {title2}
                    </h4>
                    <p className="  custom_fs_16  custom_fs_m_16 color_gray_550 mb_0 mt_10  ">
                      {content2}
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
