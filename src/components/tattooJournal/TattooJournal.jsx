import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import styles from "./style.module.css";
import { useRouter } from "next/router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useWindowResize from "@/hooks/useWindowSize";
import useTranslation from "next-translate/useTranslation";

export default function ListingPage({ data, error }) {
  const { isMobileView } = useWindowResize();
  const { t } = useTranslation();

  const router = useRouter();

  let sliderSettings = {};

  sliderSettings = {
    infinite: true,
    arrows: true,
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
      <div className="text_box_wrap full-block-wrap block_bg_white  m_pt_35 pb_20 m_pb_0">
        <div className="img_text_box_inner">
          <div className="justify_content_start  container w_100pc">
     

            <div className="text_box_content_inner m_pr_0 pt_35 pb_40 max_w_100pc m_pt_0 m_pb_30 m_mb_25 m_mt_25">
              <h2 className="color_gray_550 heading_h2 lh_40 mb_10 m_mb_0 m_text_left position_relative">
                <span className="heading_with_arrow position_relative"> {t("common:homePage.Tattoo Journal")}</span>
              </h2>
              <p className="custom_fs_18 color_gray_550 m_mt_15 mb_0 m_text_left fw_300">
              {t("common:homePage.journalContent")}
              </p>
            </div>
            <div
              className={`${"mb_80 m_mb_30 m_mt_25"} ${
                styles.listing_pageContainer
              }`}
            >
              <Slider
                {...sliderSettings}
            
              >
                {data.map((el, index) => (
                  <div
                    className={`${"listing_gridItem"} ${
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
                        <div className="mb_5"></div>
                        <p className={styles.listing_grid_content_disc}>
                          {el.desc}
                        </p>
                        <div className="w_100pc d_flex justify_content_end mt_20">
                          <Link
                            href={el.url}
                            className="btn_primary btn_img btn_custom_48"
                          >
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
