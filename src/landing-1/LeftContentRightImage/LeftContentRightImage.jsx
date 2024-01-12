import React from "react";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LeftContentRightImage({
  title,
  subTitle,
  content1,
  content2,
  img,
  alt,
  carousel,
  imgWidth,
  imgHeight,
}) {
  let sliderSettings = {};

  sliderSettings = {
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  };

  return (
    <section className="img_text_banner_box">
      <div className="col_full">
        <div className="img_text_box_wrapper">
          <div
            className={
              "text_box_wrap right block_bg_gray_150 pt_55 pb_55 m_pt_15 m_pb_0"
            }
          >
            <div className="img_text_box_inner container m_switcher">
              <div className="text_box_content justify_content_start pr_40 pl_0 pt_0 pb_0 m_min_h_reset m_pb_35 m_pr_0 m_text_center">
                <div className="text_box_content_inner max_w_100pc">
                  <h2 className="color_gray_550 ,mb">{title}</h2>

                  {subTitle !== "" ? (
                    <h5 className="custom_fs_26 fw_600 custom_fs_m_20 mt_25 mb_25">
                      {subTitle}
                    </h5>
                  ) : (
                    <div className="mt_25"></div>
                  )}

                  <p className="custom_fs_20 lh_33 custom_fs_m_16 color_gray_550 mb_25 mt_10 m_mt_15">
                    {content1}
                  </p>
                  <p className="custom_fs_20 lh_33 custom_fs_m_16 color_gray_550 mb_0 mt_10 m_mt_15">
                    {content2}
                  </p>
                </div>
              </div>
              <div className="singleCarosuelSection trending_artist_slider">
                {carousel && carousel.length > 0 ? (
                  <Slider {...sliderSettings}>
                    {carousel.map((imgPath, index) => (
                      <div key={index}>
                        <div>
                          <Image
                            src={imgPath.image}
                            alt="Trending couple tattoos"
                            width={570}
                            height={570}
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={blurDataURL}
                            className="tets"
                           layout="responsive"
                            style={{ borderRadius: "10px" }}
                          />
                        </div>
                      </div>
                    ))}
                  </Slider>
                ) : (
                  <div>
                    <Image
                      src={img}
                      alt="Trending couple tattoos"
                      width={imgWidth}
                      height={imgHeight}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                      style={{ borderRadius: "10px", objectFit: "cover" }}
                      className="imgResponsive"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
