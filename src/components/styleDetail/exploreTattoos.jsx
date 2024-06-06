import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import useWindowResize from "@/hooks/useWindowSize";

import { useGlobalState } from "@/context/Context";
import useTranslation from "next-translate/useTranslation";

import { UseSliderSettings } from "@/utils/sliderUtils";

//import sliderSettings from "@/constants/homeSliderSettings";
import { blurDataURL } from "@/constants/constants";
import { getUrl } from "@/utils/getUrl";

import styles from "./styles/style.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";

export default function ExploreTattoos({ data, styleName, slug }) {
  const { isVisible  ,isSmallDevice} = useWindowResize();
  const { t } = useTranslation();
  const router = useRouter();
  const { selectedIds, setSelectedIds } = useGlobalState();

  const { sliderRef, sliderSettings, totalDots, activeDot, activeIndex } =
  UseSliderSettings(isSmallDevice, data);


  const updateTab = async () => {
    await getUrl("tattoo", "", slug, "", router);
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
            <div className="text_box_content_inner m_pr_0 pt_40 pb_0 mb_15 max_w_100pc m_pt_0 m_pb_0 m_mb_10 m_mt_15">
              <h2 className="color_gray_550 heading_h2 lh_40 mb_0 pr_65 m_pr_55 m_xs_pr_0 m_text_left custom_fs_m_24 m_lh_29 fw_700 position_relative">
                <span>
                  {t("common:styleDetail.exploreTattoos", {
                    tattooStyle: styleName.toLowerCase(),
                  })}
                </span>
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
            </div>
            <div
              className={`${"mt_0 mb_80 m_mb_40 trending_artist_slider mob_dotted slider_nav_arrows mob_slider_left_none"} ${
                styles.listing_pageContainer
              }`}
            >
              {data.length !== 0 ? (
                <div className={styles.listing_grid_wrapper}>
                  <Slider
                    ref={sliderRef}
                    {...sliderSettings}
                    className="custom_slick_slider custom_slick_container m_xs_ml_n_15 m_xs_mr_n_15"
                  >
                    {data &&
                      data.map((el, index) => (
                        <div className={`${"listing_gridItem"} `} key={index}>
                          <Link
                            href={`/${router.locale}/explore/tattoos/${el._source.tattoo_uid}`}
                          >
                            <div
                              className={`${"listing_grid_img_col sqr_resp_224 m_w_cal_100_10"}`}
                            >
                              <Image
                                src={el._source.image}
                                alt="img"
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
                    <ul className="magic-dots">
                    {Array.from({ length: totalDots }).map((_, index) => (
                      <li
                        key={index}
                        className={index === activeDot(activeIndex) ? "active" : "inActive"}
                      >
                        <button></button>
                      </li>
                    ))}
                  </ul>
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
