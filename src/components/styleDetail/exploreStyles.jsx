import React from "react";
import Image from "next/image";
import Link from "next/link";

import useWindowResize from "@/hooks/useWindowSize";
import { useNavigation } from "@/hooks/useRouter";

import useTranslation from "next-translate/useTranslation";
import { UseSliderSettings } from "@/utils/sliderUtils";
import { BLUR_URL ,FIVE_ITEM_SCROLL ,SLIDE_MOBILE_TO_SCROLL } from "@/constants/index";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles/style.module.css";


export default function ExploreStyles({ data }) {
  const { isVisible ,isSmallDevice } = useWindowResize();
  const {
    sliderRef,
    sliderSettings,
    totalDots,
    activeIndex,
    transformValue,
  } = UseSliderSettings(isSmallDevice, data ,FIVE_ITEM_SCROLL ,SLIDE_MOBILE_TO_SCROLL);
  const { router } = useNavigation();
  const { t } = useTranslation();

  return (
    <section className="img_text_banner_box">
      <div className="text_box_wrap full-block-wrap">
        <div className="img_text_box_inner">
          <div className="justify_content_start container w_100pc">
            <div className="text_box_content_inner m_pr_0 pt_65 pb_0 mb_15 max_w_100pc m_pt_0 m_pb_0 m_mb_10 m_mt_15">
              <h2 className="color_gray_550 heading_h2 lh_40 mb_0 pr_0 m_text_left custom_fs_m_24 m_lh_29 fw_700 position_relative">
                <span >
                {t("common:styleDetail.exploreMoreStyles")}
                </span>
              </h2>
              {/* <p className="custom_fs_18 custom_fs_m_14 color_gray_550 m_mt_0 mb_0 m_text_left fw_300">
                {content}
              </p> */}
            </div>
            <div
              className={`${"mt_0 mb_80 m_mb_40 trending_artist_slider mob_dotted slider_nav_arrows mob_slider_left_none"} ${
                styles.listing_pageContainer
              }`}
            >
              {data.length !== 0 ? (
              <div className={styles.listing_grid_wrapper}>
                <Slider
                  {...sliderSettings}
                  ref={sliderRef}
                  className="custom_slick_slider custom_slick_container m_xs_mr_n_15"
                >
                  {data &&
                    data.map((el, index) => (
                      <div className={`${"listing_gridItem"} `} key={index}>
                          <Link
                             href={{
                              pathname: `/${router.locale}/explore-style`,
                              query: {style_uid:el.style_uid,style_id:el.style_id},
                            }}
                             >
                        <div
                          className={`${"listing_grid_img_col position_relative m_w_cal_100_10 sqr_resp_280"}`}
                        >  
                          <Image
                                 src={el.image ? el.image : '/placeHolder.png'} 
                            alt={el.name}
                            width={224}
                            height={256}
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={BLUR_URL}
                            className="h_inherit"
                            layout="responsive"
                            style={{ borderRadius: "10px" }}
                          />
                          <div class="title_bg_trans">
                          <span>{el.name}</span>
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
