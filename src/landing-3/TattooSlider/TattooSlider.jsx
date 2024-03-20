import React, { useState } from "react";
import Image from "next/image";
import { BLUR_URL } from "@/constants/constants";
import styles from "./processdragontattoo.module.css";
import useWindowResize from "@/hooks/useWindowSize";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
export default function ProcessdragonTattoo({ title, description }) {
  const [images, setImage] = useState([
    { image: "/dragon-pro-1.png" },
    { image: "/dragon-pro-2.png" },
    { image: "/dragon-pro-3.png" },
  ]);

  return (
    <section className="img_text_banner_box">
      <div className="text_box_wrap full-block-wrap">
        <div className="img_text_box_inner">
          <div className="justify_content_start container w_100pc block_bg_gray_100">
            <div
              className={`${"mt_0 mb_80 m_mb_30 m_mt_25 trending_artist_slider"} ${
                styles.listing_pageContainer
              }`}
            >
              <div className={styles.listing_grid_wrapper}>
                {images.map((imgPath, index) => (
                  <div className={styles.listing_gridItem} key={index}>
                    <div className={styles.listing_grid_img_col}>
                      <Image
                        src={imgPath.image}
                        alt="Trending couple tattoos"
                        width={752}
                        height={776}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={BLUR_URL}
                        layout="responsive"
                      />
                    </div>

                    <div className={styles.listing_grid_content_wrap}>
                      <div className={styles.listing_grid_img_profile}>
                        <Image
                          src="/Jamie-Sebastian.png"
                          alt="Trending couple tattoos"
                          width={97}
                          height={97}
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={BLUR_URL}
                          layout="responsive"
                        />
                      </div>
                      <div className={styles.listing_grid_profile_details}>
                        <h6 className={styles.listing_grid_profile_title}>
                          Jamie Sebastian
                        </h6>
                        <span className={styles.listing_grid_profile_address}>
                          Zurich, Switzerland
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="d_flex align_item_center flex_direction_column mt_65 m_mt_25">
                <Link
                  href="/explore/tattoos"
                  className="btn_primary btn_img btn_xxl m_btn_custom_48"
                >
                  Explore more
                  <Image
                    src="/arow-white-right.svg"
                    width={24}
                    height={24}
                    alt="arrow"
                    className="ml-8 mt-2"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
