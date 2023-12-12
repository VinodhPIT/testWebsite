import React, { useState } from "react";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import styles from "./dragonslider.module.css";

export default function RightAlignedImageContent({ title, description, bgColor, image }) {
  return (
    <section className="img_text_banner_box  ">
      <div
        className="text_box_wrap full-block-wrap right pt_75 pb_75 m_pt_25 m_pb_25 "
        style={{ backgroundColor: bgColor }}
      >
        <div className=" img_text_box_inner justify_content_start container w_100pc">


        <div className="text_box_content justify_content_center p_0 m_pt_25 m_pb_25 min_h_reset flex_direction_column">
            <div className="text_box_content_inner max_w_100pc p_0 text_left">
              <h2 className="color_gray_550 mb_25 heading_h2">{title}</h2>
              <p className="custom_fs_20 custom_fs_m_16 color_gray_550 mb_0c lh_33 ">
                {description}
              </p>
            </div>
          </div>

          
          <div className="img_box_wrap min_h_reset">
            {/* coverUpTattoo2 */}

            <div
              className={`${" m_mb_30"} ${
                styles.listing_pageContainer
              }`}
            >
              <div className={styles.listing_grid_wrapper}>
                <div className={styles.listing_gridItem}>
                  <div className={styles.listing_grid_img_col}>
                    <Image
                      src={image}
                      alt="overUpTattoo2"
                      width={398}
                      height={454}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                      layout="responsive"
                    />
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
