import React from "react";
import Image from "next/image";
import Link from "next/link";

import useWindowResize from "@/hooks/useWindowSize";
import { useNavigation } from "@/hooks/useRouter";

import { blurDataURL } from "@/constants/constants";
import sliderSettings from "@/constants/homeSliderSettings";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles/style.module.css";


export default function ExploreStyles({ data }) {
  const { isMobileView } = useWindowResize();
  const settings = sliderSettings(isMobileView);
  const { router } = useNavigation();

  return (
    <section className="img_text_banner_box">
      <div className="text_box_wrap full-block-wrap">
        <div className="img_text_box_inner">
          <div className="justify_content_start container w_100pc">
            <div className="text_box_content_inner m_pr_0 pt_65 pb_40 max_w_100pc m_pt_0 m_pb_0 m_mb_15 m_mt_40">
              <h2 className="color_gray_550 heading_h2 lh_41 mb_0 m_text_left custom_fs_m_24 m_lh_29 position_relative">
                <span >
                {"Explore more tattoo styles"}
                </span>
              </h2>
              {/* <p className="custom_fs_18 custom_fs_m_14 color_gray_550 m_mt_0 mb_0 m_text_left fw_300">
                {content}
              </p> */}
            </div>
            <div
              className={`${"mt_0 mb_80 m_mb_0 trending_artist_slider slider_nav_arrows"} ${
                styles.listing_pageContainer
              }`}
            >
              <div className={styles.listing_grid_wrapper}>
                <Slider
                  {...settings}
                  className="custom_slick_slider custom_slick_container m_mr_n_15"
                >
                  {data &&
                    data.map((el, index) => (
                      <div className={`${"listing_gridItem"} `} key={index}>
                        <div
                          className={`${"listing_grid_img_col position_relative m_w_cal_100_10 sqr_resp_280"}`}
                        >
                            <Link
                             href={{
                              pathname: `/${router.locale}/explore-style`,
                              query: {style_uid:el.style_uid,style_id:el.style_id},
                            }}
                             >
                            
                          <Image
                                 src={el.image ? el.image : '/placeHolder.png'} 
                            alt={el.name}
                            width={224}
                            height={256}
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={blurDataURL}
                            className="h_inherit"
                            layout="responsive"
                            style={{ borderRadius: "10px" }}
                          />
                          <div class="title_bg_trans">
                          <span>{el.name}</span>
                          </div>
                          </Link>
                        </div>
                      </div>
                    ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}