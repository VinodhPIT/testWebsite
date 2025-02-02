import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import useWindowResize from "@/hooks/useWindowSize";

import { useGlobalState } from "@/context/Context";

import { UseSliderSettings } from "@/utils/sliderUtils";
import { BLUR_URL ,FIVE_ITEM_SCROLL ,SLIDE_MOBILE_TO_SCROLL } from "@/constants/index";
import { getUrl } from "@/utils/getUrl";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles/slider.module.css";

export default function ArtistSlider({ title, content, data, slug }) {
  const { isVisible, isSmallDevice } = useWindowResize();

  const {
    sliderRef,
    sliderSettings,
    totalDots,
    activeIndex,
    transformValue,
  } = UseSliderSettings(isSmallDevice, data ,FIVE_ITEM_SCROLL ,SLIDE_MOBILE_TO_SCROLL);




  const router = useRouter();
  const { selectedIds, setSelectedIds } = useGlobalState();

  const updateTab = async () => {
    await getUrl("artist", "", slug, "", router);
    // Check for duplicates and remove them
    const updatedIds = [...new Set([...selectedIds, slug])];
    setSelectedIds(updatedIds);
  };

  useEffect(() => {
    setSelectedIds([]);
  }, []);

  return (
    <section className="img_text_banner_box">
      <div className="text_box_wrap full-block-wrap">
        <div className="img_text_box_inner">
          <div className="justify_content_start container w_100pc">
            <div className="text_box_content_inner m_pr_0 pt_80 pb_0 mb_15 max_w_100pc m_pt_0 m_pb_0 m_mb_10 m_mt_15">
              <h2 className="color_gray_550 heading_h2 lh_40 mb_0 pr_65 m_pr_55 m_xs_pr_0 m_text_left custom_fs_m_24 m_lh_29 fw_700 position_relative">
                <span>{title}</span>
                <span className="link_with_arrow">
                  <Image
                    src="/arrow_right_mob.svg"
                    width={32}
                    height={32}
                    alt="arrow"
                    onClick={() => updateTab()}
                  />
                </span>
              </h2>
              {/* <p className="custom_fs_18 custom_fs_m_14 color_gray_550 m_mt_0 mb_0 m_text_left fw_300">
                {content}
              </p> */}
            </div>
            <div
              className={`${"mt_0 mb_60 m_mb_25 trending_artist_slider mob_dotted slider_nav_arrows mob_slider_left_none"} ${
                styles.listing_pageContainer
              }`}
            >
              {data.length !== 0 ? (
                <div>
                  <Slider
                    {...sliderSettings}
                    ref={sliderRef}
                    className="custom_content_slick_slider m_xs_mr_n_15"
                  >
                    {data &&
                      data.map((el, index) => (
                        <div
                          className={`${"listing_gridItem pl_0 pr_10"} ${
                            styles.listing_gridItem
                          }`}
                          key={index}
                        >
                          <Link
                            href={{
                              pathname: `/${router.locale}/artists/${el._source.slug}`,
                            }}
                          >
                            <div
                              className={`${"listing_grid_four_col max_h_230"} ${
                                styles.listing_grid_img_col
                              }`}
                            >
                              <Image
                                src={el._source.image_url}
                                alt={el._source.name}
                                width={752}
                                height={776}
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL={BLUR_URL}
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
                                  src={el._source.profile_image}
                                  alt={el._source.name}
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
                                  {el._source.artist_name ??
                                    `${el._source.first_name} ${el._source.last_name}`}
                                </h6>
                                <span
                                  className={
                                    styles.listing_grid_profile_address
                                  }
                                >
                                  {el._source.studios[0].city},{" "}
                                  {el._source.studios[0].country}
                                </span>
                              </div>
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
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
