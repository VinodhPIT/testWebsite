import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import useTranslation from "next-translate/useTranslation";

import useWindowResize from "@/hooks/useWindowSize";

import { BLUR_URL } from "@/constants/constants";
import { JournalSliderSettings } from "@/utils/sliderUtils";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles/journal.module.css";

export default function ListingPage({ data}) {
  const { t } = useTranslation();
  const { isVisible  ,isSmallDevice} = useWindowResize();
  const {
    sliderRef,
    sliderSettings,
    totalDots,
    activeIndex,
    transformValue,
  } = JournalSliderSettings(isSmallDevice, data);

  const router = useRouter();
  
  return (

      <section className="container_full">
        <div className="row">        
          <div className="col-md-12">
            <div className="d_inline_block w_100pc pt_40">
              <div className="d_inline_block w_100pc">
                <h2 className="color_gray_550 custom_fs_38 custom_fs_m_32 fw_900 pr_90 m_xs_pr_0 position_relative d_flex justify_space_between align_item_end mb_0">              
                  <span className="position_relative">
                    <span className="position_relative d_block custom_fs_16 custom_fs_16 lh_19 fw_300 text_transform_upper">EXPLORE</span>
                    Tattoo Journal</span>
                  <Link
                    href={`/${router.locale}/journal`}
                    className="more_link"
                  >
                  SEE ALL
                  </Link>  
                </h2>              
              </div>
              <div
              className={`${"mt_20 mb_40 m_mt_5 m_mb_40 main_slider mob_slider_left_none slider_nav_arrows"} ${
                styles.listing_pageContainer
              }`}
            >
              <Slider ref={sliderRef} {...sliderSettings} className="custom_slider custom_m_single_slider">
                {data.map((el, index) => (
                  <div
                    className={`${"listing_gridItem m_sm_pr_18"} ${
                      styles.listing_gridItem
                    }`}
                    key={index}
                  >
                    <div className="d_flex flex_direction_column">
                      <div
                        className={`${"listing_grid_img_col max_h_320 m_max_h_inherit"} ${
                          styles.listing_grid_img_col
                        }`}
                        >
                        <Image
                          src={el.imageUrl}
                          alt={el.alt}
                          width={455}
                          height={320}
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={BLUR_URL}
                          layout="responsive"
                        />
                      </div>

                      <div
                        className={`${"listing_grid_content_wrap"} ${
                          styles.listing_grid_content_wrap
                        }`}
                      >
                        <div className={styles.listing_grid_profile_details}>
                          <h6 className={`${"fw_600"} ${styles.listing_grid_profile_title}`}>
                            {el.title}
                          </h6>
                          <p className={styles.listing_grid_content_date}>
                            POSTED ON 14/05/2024
                          </p>
                          <p className={styles.listing_grid_content_disc}>
                            {el.desc}
                          </p>
                          <div className={styles.listing_grid_content_more}>
                            <Link
                              href={el.url}
                              className={styles.link_with_arrow}
                            >
                            {t("common:Read more")}                             
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
              {isVisible && (
                    <div className="magic-dots">
                    <ul style={{ transform: transformValue }}>
                      {Array.from({ length: totalDots }).map((_, index) => (
                        <li
                          key={index}
                          className={
                            index === activeIndex ? "active" : "inActive"
                          }
                        >
                          <button></button>
                        </li>
                      ))}
                    </ul>
                  </div>
              )}
            </div>
            </div>          
          </div>
        </div>
      </section>
  );
}
