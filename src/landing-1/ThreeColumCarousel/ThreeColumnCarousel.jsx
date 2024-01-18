import React, { useState } from "react";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import styles from "./style.module.css";
import useWindowResize from "@/hooks/useWindowSize";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
export default function ThreeColumCarousel({
  title,
  title_sub,
  content,
  button,
  trendingArtist,
  linkUrl,
}) {
  const { isMobileView } = useWindowResize();
  let sliderSettings = {};

  sliderSettings = {
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: isMobileView ? 1.2 : 3,
    slidesToScroll: isMobileView ? 1 : 3,
    dots: true,

    responsive: [
      {
        breakpoint: 1365,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },

      {
        breakpoint: 1025,
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
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },

      {
        breakpoint: 400,
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
    <section className="img_text_banner_box">
      <div className="text_box_wrap full-block-wrap">
        <div className="img_text_box_inner">
          <div className="justify_content_start container w_100pc">
            <div className="text_box_content_inner max_w_100pc pt_80 pb_25 m_pt_pb_30">
              <div className="d_flex align_item_start text_left justify_space_between m_flex_direction_column">
                <div className="d_flex align_item_left justify_space_between flex_direction_column md_max_60 m_max_100">
                  <h2 className="color_gray_550 text_left heading_h2 mb_35 m_mb_25 mr_0">
                    <span class="m_dis_inline">{title} </span>
                    <span class="textBlock m_dis_inline">{title_sub}</span>
                  </h2>
                </div>

                <Link
                  href={linkUrl}
                  className="btn_primary btn_cutom_new btn_img m_mb_25 mob_hidden"
                >
                  {button}
                  <Image
                    src="/arow-white-right.svg"
                    width={24}
                    height={24}
                    alt="logo"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    className="ml-8 mt-2"
                  />
                </Link>
              </div>

              <p
                class="custom_fs_20 custom_fs_m_16 color_gray_550 lh_33 mb_0 m_pb_15"
                style={{
                  width: "1090px",
                  "max-width": "100%",
                  "text-align": "left",
                }}
              >
                {content}
              </p>
            </div>
            <div
              className={`${"mt_0 mb_80 m_mb_30 trending_artist_slider artistSlider"} ${
                styles.listing_pageContainer
              }`}
            >
              <div className={styles.listing_grid_wrapper}>
                <Slider
                  {...sliderSettings}
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
                          className={`${"listing_grid_img_col"} ${
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
          <div className="text_box_content_inner container max_w_100pc pt_80 pb_25 m_pt_pb_30 ml_0 desk_hidden">
            <div className="d_flex align_item_start text_left justify_space_between m_flex_direction_column">
              <Link
                href={linkUrl}
                className="btn_primary btn_cutom_new btn_img m_mb_0"
              >
                {button}
                <Image
                  src="/arow-white-right.svg"
                  width={24}
                  height={24}
                  alt="logo"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  className="ml-8 mt-2"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
