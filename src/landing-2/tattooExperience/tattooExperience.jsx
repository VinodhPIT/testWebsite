import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BLUR_URL,
  APP_LINK_GOOGLE,
  APP_LINK_APPLE,
} from "@/constants/constants";

export default function TattooExperience({
  mainTitle,
  title1,
  title2,
  title3,
  title4,
  content1,
  content2,
  content3,
  content4,
}) {
  return (
    <section className="img_text_banner_box">
      <div className="text_box_wrap right block_bg_gray_150 pt_75 pb_75 m_pt_pb_50 block_bg_gray_150">
        <div className="img_text_box_inner justify_content_start container w_100pc">
          <div className="text_box_content justify_content_center p_0 min_h_reset flex_direction_column">
            <div className="text_box_content_inner max_w_100pc pb_40">
              <h2 className="color_gray_550 mb_0 heading_h2">{mainTitle}</h2>
            </div>
            <ul class="download_app mt_0 max_w_100pc d_flex flex_flow_wrap justify_content_start ready_embrace_block">
              <li>
                <Link href={APP_LINK_APPLE} target="_blank">
                  <Image
                    priority
                    alt="app store"
                    src="/app-store-new.svg"
                    width={134}
                    height={41}
                    blurDataURL={BLUR_URL}
                    placeholder="blur"
                  />
                </Link>
              </li>
              <li>
                <Link href={APP_LINK_GOOGLE} target="_blank">
                  <Image
                    priority
                    alt="google play"
                    src="/g-play-new.svg"
                    width={134}
                    height={41}
                    blurDataURL={BLUR_URL}
                    placeholder="blur"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="img_box_wrap min_h_reset pl_40 m_pl_0">
            <Image
              priority
              alt="Explore inckd for Your Perfect Partner Tattoo Experience"
              src="/bg-image.png"
              width={555}
              height={416}
              blurDataURL={BLUR_URL}
              placeholder="blur"
              className="object_fit_contain"
            />
          </div>
        </div>
      </div>

      <div className="col_full">
        <div className="img_text_box_wrapper">
          <div className={"text_box_wrap right block_bg_gray_150 pb_75 m_pb_0"}>
            <div className="img_text_box_inner container">
              <div className="text_box_content justify_content_start align_item_normal p_0 pr_40 m_pr_0 min_h_reset">
                <div className="text_box_content_inner max_w_100pc">
                  <div className="d_flex flex_direction_column mb_65 m_mt_15 m_mb_45">
                    <h4 className="color_gray_550 custom_fs_26 fw_600 custom_fs_m_24">
                      {title1}
                    </h4>
                    <p className="custom_fs_16 custom_fs_m_16 color_gray_550 mb_0 mt_5 lh_33">
                      {content1}
                    </p>
                  </div>
                  <div className="d_flex flex_direction_column m_mb_45">
                    <h4 className="color_gray_550 custom_fs_26 fw_600 custom_fs_m_24">
                      {title2}
                    </h4>
                    <p className="custom_fs_16 custom_fs_m_16 color_gray_550 mb_0 mt_5 lh_33 ">
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
                    <p className="custom_fs_16 custom_fs_m_16 color_gray_550 mb_0 mt_5 lh_33">
                      {content3}
                    </p>
                  </div>
                  <div className="d_flex flex_direction_column m_mb_45">
                    <h4 className="color_gray_550 custom_fs_26 fw_600 custom_fs_m_24">
                      {title4}
                    </h4>
                    <p className="custom_fs_16 custom_fs_m_16 color_gray_550 mb_0 mt_5 lh_33 ">
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
