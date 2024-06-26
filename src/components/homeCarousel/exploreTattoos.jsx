import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import useWindowResize from "@/hooks/useWindowSize";
import { useNavigation } from "@/hooks/useRouter";
import { blurDataURL } from "@/constants/constants";

import styles from "./style.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { UseSliderSetting } from "@/utils/sliderUtils";

export default function ExploreTattoos({ title, content, data }) {
  const { isVisible, isSmallDevice } = useWindowResize();
  const { router } = useNavigation();
  
  const {
    sliderRef,
    sliderSettings,
    totalDots,
    activeIndex,
    transformValue,
  } = UseSliderSetting(isSmallDevice, data);

  return (
    <section className="container_full">
      <div className="row">        
        <div className="col-md-12">
          <div className="d_inline_block w_100pc pt_40">
            <div className="d_inline_block w_100pc">    
              <h2 className="color_gray_550 custom_fs_38 custom_fs_m_32 fw_900 pr_90 m_xs_pr_0 position_relative d_flex justify_space_between align_item_end mb_0">              
                <span className="position_relative">
                  <span className="position_relative d_block custom_fs_16 lh_19 fw_300 text_fs_m_14 text_transform_upper">EXPLORE</span>
                  Tattoos</span>
                <Link
                  href={`/${router.locale}/explore/tattoos`}
                  className="more_link"
                >
                 SEE ALL
                </Link>
              </h2>
            </div>

            <div
              className={`${"mt_20 mb_40 m_mt_5 m_mb_0 main_slider mob_slider_left_none slider_nav_arrows"} ${
                styles.listing_pageContainer
              }`}
            >
              {data && (
                <div className={styles.listing_grid_wrapper}>
                  <Slider
                    ref={sliderRef}
                    {...sliderSettings}
                    className="m_xs_ml_n_15 m_xs_mr_n_15 custom_slider custom_square_slider"
                  >
                    {data &&
                      data.map((el, index) => (
                        <div className={`${"listing_gridItem m_sm_pr_25"} `} key={index}>
                          <Link
                            href={`/${router.locale}/explore/tattoos/${el.tattoo_uid}`}
                          >
                            <div
                              className={`${"listing_grid_img_col"}`}
                            >
                              <Image
                                src={el.image_url}
                                alt={el.style.style_name}
                                width={332}
                                height={332}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL={blurDataURL}
                                layout="responsive"
                              />
                            </div>
                          </Link>
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
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

