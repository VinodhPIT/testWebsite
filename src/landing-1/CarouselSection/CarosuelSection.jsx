import React from "react";
import Image from "next/image";
import Link from "next/link";

import useWindowResize from "@/hooks/useWindowSize";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BLUR_URL } from "@/constants/constants";

import styles from "./style.module.css";


export default function CarouselSection({
  title,
  content,
  datas,
  buttonName,
  isButtonVisible,
  keyword,
  bottomButton,
  altTag,
}) {
  const { isMobileView } = useWindowResize();
  let sliderSettings = {};

  sliderSettings = {
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: isMobileView ? 1 : 5,
    slidesToScroll: isMobileView ? 1 : 4,
    responsive: [
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 1054,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },

      {
        breakpoint: 900,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },

      {
        breakpoint: 460,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="img_text_banner_box">
      <div className="text_box_wrap full-block-wrap">
        <div className="img_text_box_inner flex_direction_column">
          <div className="d_flex align_item_start text_left justify_space_between m_flex_direction_column container mb_10">
            <div className="d_flex align_item_left justify_space_between flex_direction_column md_max_60 m_max_100">
              <h2 className="color_gray_550 text_left heading_h2 mb_10 m_mb_20 mr_0 m_mb_25">
                <span className="m_dis_inline">{title} </span>
                {/* <span class="textBlock m_dis_inline">inckd tattoo artists</span> */}
              </h2>
            </div>

            {isButtonVisible === false ? null : (
              <Link
                href={`/explore/tattoos?keyword=${keyword}`}
                className="btn_primary btn_cutom_new btn_img m_mb_25 mob_hidden"
              >
                {buttonName}
                <Image
                  src="/arow-white-right.svg"
                  width={24}
                  height={24}
                  alt="arrow"
                  className="ml-8 mt-2"
                />
              </Link>
            )}
          </div>
          <div className="d_flex align_item_left flex_direction_column mb_20  m_max_100 container">
            <p
              className="custom_fs_20 custom_fs_m_16 color_gray_550 lh_33 mb_0 m_pb_15 w_990 text_left max_w_100pc"
             
            >
              {content}
            </p>
          </div>

          <div className="justify_content_start container w_100pc">
            <div
              className={`${"mt_0 mb_40 m_mb_40 trending_artist_slider"} ${
                styles.listing_pageContainer
              }`}
            >
              <div className={styles.listing_grid_wrapper}>
                <Slider
                  {...sliderSettings}
                  className="custom_slick_slider custom_slick_container"
                >
                  {datas.map((imgPath, index) => (
                    <div className={`${"listing_gridItem"} `} key={index}>
                      <Link href={imgPath.url}>
                        <div className={`${"listing_grid_img_col"}`}>
                          <Image
                            src={imgPath.image}
                            alt={altTag}
                            width={378}
                            height={378}
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={BLUR_URL}
                            className="tets"
                            layout="responsive"
                            style={{ borderRadius: "10px" }}
                          />
                        </div>
                      </Link>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>

          <div className="d_flex align_item_start text_left justify_space_between m_flex_direction_column container mb_10 desk_hidden">
            {isButtonVisible === false ? null : (
              <Link
                href={`/explore/tattoos?keyword=${keyword}`}
                className="btn_primary btn_cutom_new btn_img m_mb_25 m_mt_15"
              >
                {buttonName}
                <Image
                  src="/arow-white-right.svg"
                  width={24}
                  height={24}
                  alt="arrow"
                  className="ml-8 mt-2"
                />
              </Link>
            )}
          </div>

          {/* {keyword === "dragon" ?  

<div style={{"margin":"0 auto" ,"margin-bottom": "47px" ,padding:"0px 15px"}}>

  <Link
    href={"#"}
    className="btn_primary btn_img btn_xxl m_btn_custom_48  m_mt_15"
  >
    {bottomButton}
    <Image
      src="/arow-white-right.svg"
      width={24}
      height={24}
      alt="logo"
      loading="lazy"
      placeholder="blur"
      blurDataURL={BLUR_URL}
      className="ml-8 mt-2"
    />
  </Link>

</div> : null} */}
        </div>
      </div>
    </section>
  );
}
