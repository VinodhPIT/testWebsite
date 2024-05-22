import React, { useState, useEffect, useRef} from "react";
import Image from "next/image";
import Link from "next/link";

import useWindowResize from "@/hooks/useWindowSize";
import { useNavigation } from "@/hooks/useRouter";
import { blurDataURL } from "@/constants/constants";

//import sliderSettings from "@/constants/homeSliderSettings";

import styles from "./style.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSliderSettings } from "@/utils/sliderUtils";

export default function ExploreTattoos({ title, content, data }) {
  const { isVisible } = useWindowResize();
  const { router } = useNavigation();
  const { sliderRef, sliderSettings, totalDots, activeDot, activeIndex } =
    useSliderSettings(isVisible, data);

  return (
    <section className="img_text_banner_box">
      <div className="text_box_wrap full-block-wrap">
        <div className="img_text_box_inner">
          <div className="justify_content_start container w_100pc">
            <div className="text_box_content_inner m_pr_0 pt_80 pb_40 max_w_100pc m_pt_0 m_pb_0 m_mb_15 m_mt_15">
              <h2 className="color_gray_550 heading_h2 lh_40 mb_10 m_mb_0 m_text_left custom_fs_m_24 fw_700 position_relative">
                <span className="position_relative">
                  {title}
                </span>

                <Link href={`/${router.locale}/explore/tattoos`}  className="link_with_arrow">             
                  <Image
                    src="/arrow_right_n.svg"
                    width={25}
                    height={28}
                    alt="arrow"
                    className="mob_hidden"
                  />
                  <Image
                    src="/arrow_right_mob.svg"
                    width={16}
                    height={16}
                    alt="arrow"
                    className="desk_hidden"
                  />
                </Link>
              </h2>
              <p className="custom_fs_18 custom_fs_m_14 color_gray_550 m_mt_0 mb_0 m_text_left fw_300 mob_hidden">
                {content}
              </p>
            </div>
            <div
              className={`${"mt_0 mb_30 m_mb_40 trending_artist_slider mob_dotted slider_nav_arrows"} ${
                styles.listing_pageContainer
              }`}
            >
              {data && (
                <div className={styles.listing_grid_wrapper}>
                  <Slider
                    ref={sliderRef}
                    {...sliderSettings}
                    className="custom_slick_slider custom_slick_container m_ml_n_15 m_mr_n_15"
                  >
                    {data &&
                      data.map((el, index) => (
                        <div className={`${"listing_gridItem"} `} key={index}>
                          <Link
                            href={`/${router.locale}/explore/tattoos/${el.tattoo_uid}`}
                          >
                            <div
                              className={`${"listing_grid_img_col sqr_resp_224 m_w_cal_100_10"}`}
                            >
                              <Image
                                src={el.image_url}
                                alt={el.style.style_name}
                                width={224}
                                height={224}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL={blurDataURL}
                                className="h_inherit"
                                layout="responsive"
                                style={{ borderRadius: "10px" }}
                              />
                            </div>
                          </Link>
                        </div>
                      ))}
                  </Slider>
                  {isVisible && (
                    <ul className="custom-dots">
                      {Array.from({ length: totalDots }).map((_, index) => (
                        <li
                          key={index}
                          className={
                            index === activeDot(activeIndex) ? "active" : ""
                          }
                        >
                          <button></button>
                        </li>
                      ))}
                    </ul>
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
