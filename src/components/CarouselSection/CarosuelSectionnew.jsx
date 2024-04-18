import React, { useState } from "react";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import styles from "./style.module.css";
import useWindowResize from "@/hooks/useWindowSize";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselSection({
  title,
  content,
  datas,
  buttonName,
  isButtonVisible,
  keyword,
  bottomButton,
  altTag,
}) {
  const { isMobileView } = useWindowResize();
  let sliderSettings = {};

  sliderSettings = {
    infinite: false,
    arrows: isMobileView ? false : true,
    speed: 300,
    slidesToShow: isMobileView ? 1.5 : 5,
    slidesToScroll: isMobileView ? 1 : 4,
    responsive: [
      {
        breakpoint: 1365,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },

      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="img_text_banner_box">
      <div className="text_box_wrap full-block-wrap">
        <div className="img_text_box_inner">
          <div className="justify_content_start container w_100pc">
            <div className="text_box_content_inner m_pr_0 pt_80 pb_40 max_w_100pc m_pt_0 m_pb_30 m_mb_25 m_mt_25">
              <h2 className="color_gray_550 heading_h2 lh_40 mb_10 m_mb_0 m_text_left position_relative">
                <span className="heading_with_arrow position_relative">{title}</span>
              </h2>
              <p className="custom_fs_18 color_gray_550 m_mt_15 mb_0 m_text_left fw_300">
                {content}
              </p>
            </div>
            <div
              className={`${"mt_0 mb_40 m_mb_40 trending_artist_slider slider_nav_arrows"} ${
                styles.listing_pageContainer
              }`}
            >
              <div className={styles.listing_grid_wrapper}>
                <Slider
                  {...sliderSettings}
                  className="custom_slick_slider custom_slick_container"
                >
                  {datas.map((imgPath, index) => (
                    <div className={`${"listing_gridItem"} `} key={index}>
                      <Link href={imgPath.url}>
                        <div className={`${"listing_grid_img_col position_relative m_w_cal_100_10 h_256"}`}>
                          <Image
                            src={imgPath.image}
                            alt={altTag}
                            width={224}
                            height={256}
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={blurDataURL}
                            className="h_inherit"
                            layout="responsive"
                            style={{ borderRadius: "10px" }}
                          />
                          <div class="title_bg_trans">
                            <span>Chinese Dragons</span>
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
