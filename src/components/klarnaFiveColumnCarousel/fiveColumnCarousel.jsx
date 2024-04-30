import React from "react";
import Image from "next/image";
import Link from "next/link";

import useWindowResize from "@/hooks/useWindowSize";

import { blurDataURL } from "@/constants/constants";
import sliderSettings from "@/constants/homeSliderSettings";

import styles from "./style.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FiveColumnCarousel({
  title,
  content_sub,
  trendingArtist,
}) {
  const { isMobileView } = useWindowResize();
  const settings = sliderSettings(isMobileView);

  

  return (
    <section className="img_text_banner_box">
      <div className="text_box_wrap full-block-wrap">
        <div className="img_text_box_inner">
          <div className="justify_content_start container w_100pc">
            <div className="text_box_content_inner m_pr_0 pt_0 pb_40 max_w_100pc m_pt_0 m_pb_0 m_mb_15 m_mt_15">
              <h2 className="color_gray_550 heading_h2 lh_40 mb_10 m_mb_0 m_text_left custom_fs_m_24 position_relative">
                <span className="heading_with_arrow position_relative">
                  {title}
                </span>
              </h2>
              <p className="custom_fs_18 custom_fs_m_14 color_gray_550 m_mt_0 mb_0 m_text_left fw_300">
                {content_sub}
              </p>
            </div>

            <div
              className={`${"mt_0 mb_60 m_mb_0 trending_artist_slider artistSlider slider_nav_arrows"} ${
                styles.listing_pageContainer
              }`}
            >
              <div className={styles.listing_grid_wrapper}>
                <Slider
                  {...settings}
                  className="custom_content_slick_slider"
                >
                  {trendingArtist.map((el, index) => (
                    <div
                      className={`${"listing_gridItem"} ${
                        styles.listing_gridItem
                      }`}
                      key={index}
                    >
                      <Link href={el.url}>
                        <div
                          className={`${"listing_grid_five_col"} ${
                            styles.listing_grid_img_col
                          }`}
                        >
                          <Image
                            src={el.image}
                            alt={el.name}
                            width={752}
                            height={776}
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={blurDataURL}
                            layout="responsive"
                            style={{
                              borderTopRightRadius: "9px",
                              borderTopLeftRadius: "9px",
                            }}
                            className="imggg"
                          />
                        </div>

                        <div
                          className={`${"listing_grid_content_wrap"} ${
                            styles.listing_grid_content_wrap
                          }`}
                        >
                          <div className={styles.listing_grid_img_profile}>
                            <Image
                              src={el.artistImage}
                              alt={el.name}
                              width={97}
                              height={97}
                              loading="lazy"
                              placeholder="blur"
                              blurDataURL={blurDataURL}
                              layout="responsive"
                            />
                          </div>
                          <div className={styles.listing_grid_profile_details}>
                            <h6 className={styles.listing_grid_profile_title}>
                              {el.name}
                            </h6>

                            <span
                              className={styles.listing_grid_profile_address}
                            >
                              {el.city}, {el.country}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
