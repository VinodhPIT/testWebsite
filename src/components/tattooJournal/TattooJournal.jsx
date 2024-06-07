import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";


import useWindowResize from "@/hooks/useWindowSize";


import { blurDataURL } from "@/constants/constants";
import { JournalSliderSettings } from "@/utils/sliderUtils";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./style.module.css";


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
    <>
      <div className="text_box_wrap full-block-wrap block_bg_white m_pt_0 pb_0">
        <div className="img_text_box_inner">
          <div className="justify_content_start container w_100pc">
            <div className="text_box_content_inner m_pr_0 pt_0 pb_0 mb_15 max_w_100pc m_pt_0 m_pb_0 m_mb_10 m_mt_15">
              <h2 className="color_gray_550 heading_h2 lh_40 mb_0 pr_65 m_pr_55 m_xs_pr_0 m_text_left custom_fs_m_24 fw_700 position_relative">
                <span className="position_relative">
                  {t("common:homePage.Tattoo Journal")}</span>
                  <Link href={`/${router.locale}/journal`}  className="link_with_arrow">             
                    <Image
                      src="/arrow_right_mob.svg"
                      width={32}
                      height={32}
                      alt="arrow"
                    />
                  </Link>
              </h2>
              {/* <p className="custom_fs_18 custom_fs_m_14 color_gray_550 m_mt_0 mb_0 m_text_left fw_300 mob_hidden">
              {t("common:homePage.journalContent")}
              </p> */}
            </div>
            <div
              className={`${"mt_0 mb_80 m_mb_25 slider_nav_arrows mob_dotted"} ${
                styles.listing_pageContainer
              }`}
            >
              <Slider ref={sliderRef} {...sliderSettings}>
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
                        <h6 className={`${"fw_700"} ${styles.listing_grid_profile_title}`}>
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
                           {t("common:Read more")}
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
    </>
  );
}
