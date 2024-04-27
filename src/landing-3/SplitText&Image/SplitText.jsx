import React from "react";
import Image from "next/image";

import { BLUR_URL } from "@/constants/constants";

export default function SplitText({ title, content }) {
  return (
    <div className="text_box_wrap right pt_25 pb_0 block_bg_gray_100">
      <div className="img_text_box_inner justify_content_start  w_100pc block_bg_white bg_shape">
        <div className="text_box_content justify_content_center min_h_reset flex_direction_column block_bg_yellow pr_40 m_pr_15 m_pt_55">
          <div className="text_box_content_inner max_w_100pc pb_40 m_pb_0">
            <h2 className="color_gray_550 mb_25 heading_h2">{title}</h2>
            <p className="custom_fs_16 custom_fs_m_16 color_gray_550 mt_0 mb_20 lh_33">
              {content}
            </p>
            {/* <Link href="#" className="btn_primary btn_img btn_xxl m_btn_custom_48">
                            Explore artists
                            <Image
                            src="/arow-white-right.svg"
                            width={24}
                            height={24}
                            alt="logo"
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={BLUR_URL}
                            className="ml-8 mt-2"
                            />
                        </Link> */}
          </div>
        </div>
        <div className="img_box_wrap min_h_reset">
          <Image
            priority
            alt="Explore inckd for Your Perfect Partner Tattoo Experience"
            src="/dragontattoo.png"
            width={705}
            height={781}
            blurDataURL={BLUR_URL}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}
