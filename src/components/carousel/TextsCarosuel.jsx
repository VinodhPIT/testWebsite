import React from "react";
import Image from "next/image";
import Link from "next/link";

import useWindowResize from "@/hooks/useWindowSize";
import { useNavigation } from "@/hooks/useRouter";

import useTranslation from "next-translate/useTranslation";

import { UseSliderSettings } from "@/utils/sliderUtils";
import { BLUR_URL ,SLIDE_MOBILE_TO_SCROLL ,SLIDES_TO_SHOW_DEFAULT } from "@/constants/index";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./styles/slider.module.css";

export default function TextsCarosuel({title ,subTitle ,description,data}){

  const { isVisible, isSmallDevice } = useWindowResize();
  const { router } = useNavigation();
  const { t } = useTranslation();
  const {
    sliderRef,
    sliderSettings,
    totalDots,
    activeIndex,
    transformValue,
  } = UseSliderSettings(isSmallDevice, data && data ,SLIDES_TO_SHOW_DEFAULT ,SLIDE_MOBILE_TO_SCROLL);

  return (
    <section className="container_full">
      <div className="row">        
        <div className="col-md-12">
          <div className="d_inline_block w_100pc pt_40">
            <div className="d_inline_block w_100pc">
              <h2 className="color_gray_550 custom_fs_38 custom_fs_m_32 m_lh_38 fw_900 pr_90 m_xs_pr_0 position_relative d_flex justify_space_between align_item_end mb_0 m_mb_5">              
                <span className="position_relative">
                  <span className="position_relative d_block custom_fs_16 lh_19 fw_300 text_fs_m_14 m_lh_19 text_transform_upper">{title}</span>
                  {subTitle}</span>
                <Link
                  href={`/${router.locale}/${t("common:routes.tattoo-artists")}`}
                  className="more_link"
                >
                {t("common:seeAll")}
                </Link>
              </h2>              
            </div>
            <div
              className={`${"mt_20 mb_40 m_mt_5 m_mb_0 main_slider mob_slider_left_none slider_nav_arrows"} ${
                  styles.listing_pageContainer
                }`}
                >
                {data && (
                  <div>
                    <Slider
                      ref={sliderRef}
                      {...sliderSettings}
                      className="m_xs_mr_n_15 custom_slider"
                    >
                      
                        {data.map((el, index) => (
                          <div
                            className={`${"listing_gridItem"} ${
                              styles.listing_gridItem
                            }`}
                            key={index}
                          >
                            <Link href={`${router.locale}/${t("common:artistDetail.tattoo-artists")}/${el.slug}`}>
                              <div
                                className={`${"listing_grid_img_col"} ${
                                  styles.listing_grid_img_col
                                }`}
                              >
                                <Image
                                  src={el.latest_tattoo || "/placeHolder.png"}
                                  alt={el.first_name}
                                  width={334}
                                  height={344}
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
                                <div className={styles.listing_grid_img_profile}>
                                  <Image
                                    src={el.profile_image_url}
                                    alt={el.first_name}
                                    width={97}
                                    height={97}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL={BLUR_URL}
                                    layout="responsive"
                                  />
                                </div>
                                <div
                                  className={styles.listing_grid_profile_details}
                                >
                                  <h6
                                    className={styles.listing_grid_profile_title}
                                  >
                                    {el.artist_name || `${el.first_name} ${el.last_name}`}
                                  </h6>
                                  <span
                                    className={
                                      styles.listing_grid_profile_address
                                    }
                                  >
                                    {el.studio_city}, {el.studio_country}
                                  </span>
                                </div>
                              </div>{" "}
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