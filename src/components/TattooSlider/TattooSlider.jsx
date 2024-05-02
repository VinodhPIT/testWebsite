import React, { useState } from "react";
import Image from "next/image";

import useWindowResize from "@/hooks/useWindowSize";
import useDisplayAll from "@/store/exploreAll/exploreAll";


import sliderSettings from "@/constants/homeSliderSettings";
import { blurDataURL } from "@/constants/constants";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./processdragontattoo.module.css";

export default function FourColumnCarousel({ title, content }) {
  const { isMobileView } = useWindowResize();
  const settings = sliderSettings(isMobileView);

  const {allListing} = useDisplayAll();



  return (
    <section className="img_text_banner_box">
      <div className="text_box_wrap full-block-wrap">
        <div className="img_text_box_inner">
          <div className="justify_content_start container w_100pc">
            <div className="text_box_content_inner m_pr_0 pt_80 pb_40 max_w_100pc m_pt_0 m_pb_0 m_mb_15 m_mt_15">
              <h2 className="color_gray_550 heading_h2 lh_40 mb_10 m_mb_0 m_text_left custom_fs_m_24 position_relative">
                <span className="heading_with_arrow position_relative">{title}</span>
              </h2>
              <p className="custom_fs_18 custom_fs_m_14 color_gray_550 m_mt_0 mb_0 m_text_left fw_300">
                {content} 
              </p>
            </div>
            <div
              className={`${"mt_0 mb_80 m_mb_20 trending_artist_slider slider_nav_arrows"} ${
                styles.listing_pageContainer
              }`}
            >
              <div >
                <Slider
                  {...settings}
                  className="custom_content_slick_slider"
               
                >
                  {allListing.artists && allListing.artists.map((el, index) => (
                    <div
                      className={`${"listing_gridItem pl_0 pr_10"} ${
                        styles.listing_gridItem
                      }`}
                      key={index}
                    >
                        <div
                          className={`${"listing_grid_four_col max_h_230"} ${
                            styles.listing_grid_img_col
                          }`}
                        >
                          <Image
                            src={el.latest_tattoo === '' || el.latest_tattoo === null || el.latest_tattoo === undefined ? '/placeHolder.png' : el.latest_tattoo}
                            alt={el.first_name}
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
                              src={el.profile_image_url}
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
                              {el.first_name}
                            </h6>
                            <span
                              className={styles.listing_grid_profile_address}
                            >
                              {el.studio_city}, {el.studio_country}
                            </span>
                          </div>
                        </div>
                   
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

