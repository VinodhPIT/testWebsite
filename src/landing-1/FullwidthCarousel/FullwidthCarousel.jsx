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
  keyword,sectionBg ,altTag
}) {
 
  const { isMobileView } = useWindowResize();
  let sliderSettings = {};

  sliderSettings = {
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: isMobileView ? 1 : 4.65,
    slidesToScroll: isMobileView ? 1 : 4,

    responsive: [
      {
        breakpoint: 1099,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          dots: true,
        },
      },

      
      {
        breakpoint: 1054,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },


      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },




      {
        breakpoint: 900,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },

      {
        breakpoint: 460,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className={`img_text_banner_box ${sectionBg}`}>
      <div className="text_box_wrap full-block-wrap">
        <div className="img_text_box_inner flex_direction_column pt_80 m_pt_40 ">
          <div className="d_flex align_item_start text_left justify_space_between m_flex_direction_column container mt_0 mb_10">
            <div className="d_flex align_item_left justify_space_between flex_direction_column md_max_60 m_max_100">
              <h2 className="color_gray_550 text_left heading_h2 mb_15 m_mb_25 mr_0 ">
                <span class="m_dis_inline">{title} </span>
              </h2>
            </div>

            {isButtonVisible === false ? null : (
              <Link
                href={keyword}
                className="btn_primary btn_cutom_new btn_img m_mb_25 mob_hidden"
              >
                {buttonName}
                <Image
                  src="/arow-white-right.svg"
                  width={24}
                  height={24}
                  alt="arrowRight"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  className="ml-8 mt-2"
                />
              </Link>
            )}
          </div>

 {content!== '' ?
          <div className="d_flex align_item_left flex_direction_column mb_80 m_mb_0 m_pb_30 m_max_100 container">
            <p
              class="custom_fs_20 custom_fs_m_16 color_gray_550 lh_33 mb_0 m_pb_15"
              style={{
                "max-width": "850px",
                "text-align": "left",
              }}
            >
              {content}
            </p>
          </div> : <div className="mb_15"></div>}



          <div className="justify_content_start  w_100pc">
            <div
              className={`${"mt_0 mb_80 m_mb_50 trending_artist_slider"} ${
                styles.listing_pageContainer
              }`}
            >
              <div className={styles.listing_grid_wrapper}>
                <Slider
                  {...sliderSettings}
                  className="custom_slick_slider  fullwidthCarousel"
                >
                  {datas.map((imgPath, index) => (
                    <div
                      className={`${"listing_gridItem"} ${
                        styles.listing_gridItem
                      }`}
                      key={index}
                    >
                      <Link href={imgPath.url}>
                        <div
                          className={`${"listing_grid_img_col"} ${
                            styles.listing_grid_img_col
                          }`}
                        >
                          <Image
                            src={imgPath.image}
                            alt={altTag}
                            width={378}
                            height={378}
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={blurDataURL}
                            className="tets"
                            layout="responsive"
                            style={{ borderRadius: "10px" }}
                          />
                        </div>
                      </Link>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>

          <div className="d_flex align_item_start text_left justify_space_between m_flex_direction_column container mt_25 mb_10 desk_hidden">
            {isButtonVisible === false ? null : (
              <Link
                href={keyword}
                className="btn_primary btn_cutom_new btn_img m_mb_25"
              >
                {buttonName}
                <Image
                  src="/arow-white-right.svg"
                  width={24}
                  height={24}
                  alt="arrowRight"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  className="ml-8 mt-2"
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
