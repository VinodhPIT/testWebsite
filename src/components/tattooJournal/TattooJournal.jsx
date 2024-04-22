import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";


import useWindowResize from "@/hooks/useWindowSize";


import { blurDataURL } from "@/constants/constants";



import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./style.module.css";


export default function ListingPage({ data, error }) {
  const { isMobileView } = useWindowResize();
  const { t } = useTranslation();

  const router = useRouter();

  let sliderSettings = {};

  sliderSettings = {
    infinite: false,
    arrows: isMobileView ? false : true,
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
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="text_box_wrap full-block-wrap block_bg_white m_pt_0 pb_20 m_pb_0">
        <div className="img_text_box_inner">
          <div className="justify_content_start container w_100pc">
            <div className="text_box_content_inner m_pr_0 pt_35 pb_40 max_w_100pc m_pt_0 m_pb_0 m_mb_15 m_mt_0">
              <h2 className="color_gray_550 heading_h2 lh_40 mb_10 m_mb_0 m_text_left custom_fs_m_24 position_relative">
                <span className="heading_with_arrow position_relative"> {t("common:homePage.Tattoo Journal")}</span>
              </h2>
              <p className="custom_fs_18 custom_fs_m_14 color_gray_550 m_mt_0 mb_0 m_text_left fw_300">
              {t("common:homePage.journalContent")}
              </p>
            </div>
            <div
              className={`${"mt_0 mb_80 m_mb_25 slider_nav_arrows"} ${
                styles.listing_pageContainer
              }`}
            >
              <Slider
                {...sliderSettings}
            
              >
                {data.map((el, index) => (
                  <div
                    className={`${"listing_gridItem pl_0 pr_10"} ${
                      styles.listing_gridItem
                    }`}
                    key={index}
                  >
                    <div
                      className={`${"listing_grid_img_col"} ${
                        styles.listing_grid_img_col
                      }`}
                    >
                      <Image
                        src={el.imageUrl}
                        alt={el.alt}
                        width={752}
                        height={776}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={blurDataURL}
                        layout="responsive"
                        style={{
                          borderTopRightRadius: "4px",
                          borderTopLeftRadius: "4px",
                        }}
                        className="imggg"
                      />
                    </div>

                    <div
                      className={`${"listing_grid_content_wrap"} ${
                        styles.listing_grid_content_wrap
                      }`}
                    >
                      <div className={styles.listing_grid_profile_details}>
                        <h6 className={styles.listing_grid_profile_title}>
                          {el.title}
                        </h6>
                        <p className={styles.listing_grid_content_disc}>
                          {el.desc}
                        </p>
                        <div className="w_100pc d_flex justify_content_end mt_15">
                          <Link
                            href={el.url}
                            className={styles.link_with_arrow}
                          >
                            Read more
                            <Image
                              src="/arrowBlack.svg"
                              width={16}
                              height={16}
                              alt="arrow"
                              className="mt-2"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
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
