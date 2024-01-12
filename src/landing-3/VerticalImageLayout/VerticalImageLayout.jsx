import React, { useState } from "react";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
export default function VerticalImageLayout({
  maintitle,
  title1,
  content1,
  title2,
  content2,
  title3,
  content3,

  image1,
  image2,
  image3,
  alt,
  bgColor,
}) {
  return (
    <section
      className="img_text_banner_box"
      style={{ backgroundColor: bgColor }}
    >
      <div className="col_full">
        <div className="img_text_box_wrapper">
          <div className="text_box_wrap right pt_25  m_pt_25 pb_100 m_pb_40">
            {maintitle && (
              <div className="text_box_wrap full-block-wrap ">
                <div className="img_text_box_inner">
                  <div className="justify_content_start container w_100pc">
                    <div className="text_box_content_inner pt_pb_40 max_w_100pc m_pt_pb_50">
                      <h2 className="color_gray_550 mb_0 heading_h2">
                        {maintitle}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="img_text_box_inner container">
              <div className="img_box_wrap justify_content_right m_pb_40">
                <ul className="traditiondragon_list">
                  <li className="list_step_01">
                    <Image
                      src={image1}
                      alt={alt}
                      width={1019}
                      height={705}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                      layout="responsive"
                      style={{ borderRadius: "15px" }}
                    />
                  </li>
                  <li className="list_step_02">
                    <Image
                      src={image2}
                      alt={alt}
                      width={998}
                      height={691}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                      layout="responsive"
                      style={{ borderRadius: "15px" }}
                    />
                  </li>
                  <li className="list_step_03">
                    <Image
                      src={image3}
                      alt={alt}
                      width={999}
                      height={691}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                      layout="responsive"
                      style={{ borderRadius: "15px" }}
                    />
                  </li>
                </ul>
              </div>
              <div className="text_box_content justify_content_start p_0 pl_7pc m_pl_0 m_min_h_reset">
                <div className="text_box_content_inner max_w_100pc ">
                  <div className="d_flex flex_direction_column mb_30">
                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24 mb_20">
                      {title1}
                    </h4>
                    <p className="custom_fs_16 color_gray_550 mb_0 mt_0">
                      {content1}
                    </p>
                  </div>
                  <div className="d_flex flex_direction_column mb_30">
                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24 mb_20">
                      {title2}
                    </h4>
                    <p className="custom_fs_16 color_gray_550 mb_0 mt_0">
                      {content2}
                    </p>
                  </div>
                  <div className="d_flex flex_direction_column mb_30">
                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24 mb_20">
                      {title3}
                    </h4>
                    <p className="custom_fs_16 color_gray_550 mb_0 mt_0">
                      {content3}
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
