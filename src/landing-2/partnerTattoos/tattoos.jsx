import React from "react";
import Image from "next/image";

import { BLUR_URL } from "@/constants/constants";

import styles from "./partnertattoos.module.css";

export default function PartnerTattoos({
  mainTitle,
  content1,
  content2,
  tattooTitle1,
  partnerTattoo1,
  tattooContent1,
  tattooTitle2,
  partnerTattoo2,
  tattooContent2,
  tattooTitle3,
  partnerTattoo3,
  tattooContent3,
}) {
  return (
    <section className="img_text_banner_box block_bg_gray_150">
      <div className="text_box_wrap full-block-wrap">
        <div className="img_text_box_inner">
          <div className="justify_content_start container w_100pc">
            <div className="text_box_content_inner m_pr_0 pt_80 pb_40  m_pt_50 max_w_100pc text_left">
              <h3 className="color_gray_550 mb_15 custom_fs_m_45 custom_fs_m_40 text_left">
                {mainTitle}
              </h3>
              <p className="custom_fs_20 custom_fs_m_16 color_gray_550 lh_33 mb_0">
                {content1}
              </p>
            </div>
            <div className={styles.listing_pageContainer}>
              <div className={styles.listing_grid_wrapper}>
                <div className={styles.listing_gridItem}>
                  <div className={styles.listing_grid_img_col}>
                    <Image
                      src={partnerTattoo1}
                      alt={tattooTitle1}
                      width={746}
                      height={776}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={BLUR_URL}
                      layout="responsive"
                    />
                  </div>
                  <div className={styles.listing_grid_details}>
                    <h4 className={styles.listing_grid_title}>
                      {tattooTitle1}
                    </h4>
                    <p className={styles.listing_grid_desc}>{tattooContent1}</p>
                  </div>
                </div>

                <div className={styles.listing_gridItem}>
                  <div className={styles.listing_grid_img_col}>
                    <Image
                      src={partnerTattoo2}
                      alt={tattooTitle2}
                      width={746}
                      height={776}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={BLUR_URL}
                      layout="responsive"
                    />
                  </div>
                  <div className={styles.listing_grid_details}>
                    <h4 className={styles.listing_grid_title}>
                      {tattooTitle2}
                    </h4>
                    <p className={styles.listing_grid_desc}>
                      {tattooContent2}{" "}
                    </p>
                  </div>
                </div>

                <div className={styles.listing_gridItem}>
                  <div className={styles.listing_grid_img_col}>
                    <Image
                      src={partnerTattoo3}
                      alt={tattooTitle3}
                      width={746}
                      height={776}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={BLUR_URL}
                      layout="responsive"
                    />
                  </div>
                  <div className={styles.listing_grid_details}>
                    <h4 className={styles.listing_grid_title}>
                      {tattooTitle3}
                    </h4>
                    <p className={styles.listing_grid_desc}>{tattooContent3}</p>
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
