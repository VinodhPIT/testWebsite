import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { BLUR_URL } from "@/constants/constants";
import styles from "./styles/journal.module.css"
import { useRouter } from 'next/router'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useWindowResize from "@/hooks/useWindowSize";



export default function ListingPage({ data, error }) {
  const { isMobileView } = useWindowResize();
  const router = useRouter();

  let sliderSettings = {};

  sliderSettings = {
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: isMobileView ? 1 : 3,
    slidesToScroll: isMobileView ? 1 : 3,
    dots: false,

    responsive: [
      {
        breakpoint: 1365,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
        },
      },

      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
        },
      },

      {
        breakpoint: 900,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 400,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="text_box_wrap full-block-wrap block_bg_white pt_80 m_pt_35 pb_20 m_pb_0">
        <div className="img_text_box_inner">
          <div className="justify_content_start block_bg_aero_blue_lite container w_100pc">
            <div class="text_box_content_inner max_w_100pc pt_80 pb_20 m_pt_40 m_pb_0">
              <h2 className="color_gray_550 text_center heading_h2 mb_30 m_mb_0">
                <span>Tattoo Journal</span>
              </h2>
              <p className="custom_fs_26 custom_fs_m_18 color_gray_550 lh_33 mb_0 m_mt_20 m_mb_0">Stay in the know with our Tattoo Journal. Get updates on the latest trends, legally required health and safety guidelines, and insider tips from the tattoo industry.</p>
            </div>
            <div className={`${'mt_45 mb_80 m_mb_30 m_mt_25'} ${styles.listing_pageContainer}`}>
              <Slider
                {...sliderSettings}
              // className="custom_content_slick_slider"
              >
                {data.map((el, index) => (
                  <div
                    className={`${"listing_gridItem"} ${styles.listing_gridItem
                      }`}
                    key={index}
                  >
                    {/* <Link href={el.url}> */}
                    <div
                      className={`${"listing_grid_img_col"} ${styles.listing_grid_img_col
                        }`}
                    >
                      <Image
                        src={el.imageUrl}
                        alt={el.alt}
                        width={752}
                        height={776}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={BLUR_URL}
                        layout="responsive"
                        style={{
                          borderTopRightRadius: "4px",
                          borderTopLeftRadius: "4px",
                        }}
                        className="imggg"
                      />
                    </div>

                    <div
                      className={`${"listing_grid_content_wrap"} ${styles.listing_grid_content_wrap
                        }`}
                    >

                      <div className={styles.listing_grid_profile_details}>
                        <h6 className={styles.listing_grid_profile_title}>
                          {el.title}
                        </h6>
                        <div className="mb_5"></div>
                        <p
                          className={styles.listing_grid_content_disc}
                        >
                          {el.desc}
                        </p>
                        <div className="w_100pc d_flex justify_content_end mt_20">
                          <Link href={el.url} className="btn_primary btn_img btn_custom_48">
                            Read more
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
                    {/* </Link> */}
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}