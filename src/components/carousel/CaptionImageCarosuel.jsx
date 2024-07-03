import React from "react";
import Image from "next/image";
import Link from "next/link";

import useTranslation from "next-translate/useTranslation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import useWindowResize from "@/hooks/useWindowSize";
import { useNavigation } from "@/hooks/useRouter";

import { BLUR_URL,SLIDES_TO_SHOW_ALTERNATE ,SLIDE_MOBILE_TO_SCROLL} from "@/constants/index";
import { UseSliderSettings } from "@/utils/sliderUtils";


export default function CaptionImageCarosuel({title, subTitle, description, data}) {
  const { t } = useTranslation();
  const { isVisible, isSmallDevice } = useWindowResize();
  const { router } = useNavigation();

  const { sliderRef, sliderSettings, totalDots, activeIndex, transformValue } =
  UseSliderSettings(isSmallDevice, data , SLIDES_TO_SHOW_ALTERNATE ,SLIDE_MOBILE_TO_SCROLL);

  return (
    <section className="container_full">
      <div className="row">
        <div className="col-md-12">
          <div className="d_inline_block w_100pc pt_0">
            <div className="d_inline_block w_100pc">
              <h2 className="color_gray_550 custom_fs_38 custom_fs_m_32 fw_900 pr_90 m_xs_pr_0 position_relative d_flex justify_space_between align_item_end mb_0">
                <span className="position_relative">
                  <span className="position_relative d_block custom_fs_16 custom_fs_16 lh_19 fw_300 text_transform_upper">
                    {title}
                  </span>
                  {subTitle}
                </span>
                {/* <Link href="" className="more_link">
                 {t("common:seeAll")} 
                </Link> */}
              </h2>
            </div>

            <div
              className={
                "mt_20 mb_40 m_mt_5 m_mb_0 main_slider mob_slider_left_none slider_nav_arrows slider_rectangle_shape"
              }
            >
            {data.length !== 0 ? (
                <div>
                  <Slider
                    ref={sliderRef}
                    {...sliderSettings}
                    className="m_xs_mr_n_15 custom_slider"
                  >
                    {
                      data.map((el, index) => (
                        <div className={`${"listing_gridItem"} `} key={index}>
                          <Link
                            href={{
                              pathname: `/${router.locale}/explore-style`,
                              query: {
                                style_uid: el.style_uid,
                                style_id: el.style_id,
                              },
                            }}
                          >
                            <div className={`${"listing_grid_img_col"}`}>
                              <Image
                                src={el.image ? el.image : "/placeHolder.png"}
                                alt={el.name}
                                width={454}
                                height={519}
                                loading="lazy"
                                placeholder="blur"
                               blurDataURL={BLUR_URL}
                                layout="responsive"
                              />
                            </div>
                            <div className="list_title">
                              <span>{el.name}</span>
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
              ):null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
