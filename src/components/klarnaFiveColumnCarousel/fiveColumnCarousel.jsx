import React,{useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import useWindowResize from "@/hooks/useWindowSize";

import useDisplayAll from "@/store/exploreAll/exploreAll";

import { blurDataURL } from "@/constants/constants";
import { UseSliderSettings } from "@/utils/sliderUtils";

import styles from "./style.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FiveColumnCarousel({
  title,
  content_sub,
}) {
  const { isVisible } = useWindowResize();
  const { fetchAll, allListing } = useDisplayAll();
  const router =useRouter()
  const { sliderRef, sliderSettings, totalDots, activeDot, activeIndex } =  UseSliderSettings(isVisible, allListing.artists && allListing.artists);


  useEffect(() => {
    fetchAll(router.locale.split("-")[0]);
  }, [router.locale]);

  return (
    <section className="img_text_banner_box">
      <div className="text_box_wrap full-block-wrap">
        <div className="img_text_box_inner">
          <div className="justify_content_start container w_100pc">
            <div className="text_box_content_inner m_pr_0 pt_0 pb_0 mb_15 max_w_100pc m_pt_0 m_pb_0 m_mb_10 m_mt_15">
              <h2 className="color_gray_550 heading_h2 lh_40 mb_0 pr_65 m_pr_55 m_xs_pr_0 m_text_left custom_fs_m_24 fw_700 position_relative">
                <span className="position_relative">
                  {title}
                </span>
                <Link href={`/${router.locale}/explore/tattoo-artists`} className="link_with_arrow">                  
                  <Image
                    src="/arrow_right_mob.svg"
                    width={32}
                    height={32}
                    alt="arrow"
                  />
                </Link>
              </h2>
              {/* <p className="custom_fs_18 custom_fs_m_14 color_gray_550 m_mt_0 mb_0 m_text_left fw_300 mob_hidden">
                {content_sub}
              </p> */}
            </div>

            <div
              className={`${"mt_0 mb_60 m_mb_25 trending_artist_slider artistSlider mob_dotted slider_nav_arrows mob_slider_left_none"} ${
                styles.listing_pageContainer
              }`}
            >
              {allListing.artists && (
              <div className={styles.listing_grid_wrapper}>
                <Slider
                  ref={sliderRef}
                  {...sliderSettings}
                  className="custom_content_slick_slider m_xs_ml_n_15 m_xs_mr_n_15"
                >
                {allListing.artists && allListing.artists.map((el, index) => (
                    <div
                      className={`${"listing_gridItem pl_0 pr_10"} ${
                        styles.listing_gridItem
                      }`}
                      key={index}
                    >
                       <Link href={`${router.locale}/artists/${el.slug}`}>
                   
                        <div
                          className={`${"listing_grid_five_col"} ${
                            styles.listing_grid_img_col
                          }`}
                        >
                          <Image
                            src={el.latest_tattoo === '' || el.latest_tattoo === null || el.latest_tattoo === undefined ? '/placeHolder.png' : el.latest_tattoo}
                            alt={el.last_name}
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
                              src={el.profile_image_url}
                              alt={el.first_name}
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
                              {el.first_name}
                            </h6>

                            <span
                              className={styles.listing_grid_profile_address}
                            >
                              {el.studio_city}, {el.studio_country}
                            </span>
                          </div>
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
