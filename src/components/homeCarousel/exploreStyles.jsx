import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import useWindowResize from "@/hooks/useWindowSize";
import { useNavigation } from "@/hooks/useRouter";

import { blurDataURL } from "@/constants/constants";
import sliderSettings from "@/constants/homeSliderSettings";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./style.module.css";

export default function ExploreStyles({ title, content, data }) {
  const { isMobileView } = useWindowResize();
  const settings = sliderSettings(isMobileView);
  const { router } = useNavigation();

  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <section className="img_text_banner_box">
      <div className="text_box_wrap full-block-wrap">
        <div className="img_text_box_inner">
          <div className="justify_content_start container w_100pc">
            <div className="text_box_content_inner m_pr_0 pt_80 pb_40 max_w_100pc m_pt_0 m_pb_0 m_mb_15 m_mt_0">
              <h2 className="color_gray_550 heading_h2 lh_40 mb_10 m_mb_0 m_text_left custom_fs_m_24 position_relative">
                <span className="heading_with_arrow position_relative">
                  {title}
                </span>
              </h2>
              <p className="custom_fs_18 custom_fs_m_14 color_gray_550 m_mt_0 mb_0 m_text_left fw_300">
                {content}
              </p>
            </div>
            <div
              className={`${"mt_0 mb_40 m_mb_40 trending_artist_slider slider_nav_arrows"} ${
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
                             href={`/${router.locale}/explore-style/${el.style_id}`}

                        
                          >
                            <Image
                              src={el.image ? el.image : '/placeHolder.png'} 
                              alt={el.style_name}
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
                              <span>{el.style_name}</span>
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
