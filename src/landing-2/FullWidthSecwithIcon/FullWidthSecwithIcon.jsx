import React from "react";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";

export default function UniquePartner({ img, alt, title, content, bgColor }) {
  return (
    <section
      className="img_text_banner_box"
      style={{ backgroundColor: bgColor }}
    >
      <div className="col_full">
        <div className="img_text_box_wrapper">
          <div className={"text_box_wrap right pt_75 pb_75 m_pt_pb_50"}>
            <div className="img_text_box_inner container">
              <div className="text_box_content  w_100pc justify_content_center p_0 min_h_reset m_pb_0 m_text_center">
                <div className="text_box_content_inner w_900 max_w_100pc  text_center">
                  <div className="icon">
                    <Image
                      priority
                      width={60}
                      height={60}
                      alt={alt}
                      src={img}
                      blurDataURL={blurDataURL}
                      placeholder="blur"
                      layout="responsive"
                      className="w_auto mb_35"
                    />
                  </div>

                  <div
                    
                  >
                    <h2 className="color_gray_550 mb_20">{title}</h2>
                  </div>
                  <p
                    className="custom_fs_20 lh_33 custom_fs_m_16 color_gray_550 mb_0 mt_10"
                    
                  >
                    {content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
