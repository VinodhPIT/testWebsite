import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import styles from "./style.module.css";


export default function PartnerTattoos({
  mainTitle,
  content2,
  data,
  bgColor,
  btnLink,
}) {
  const [images, setImage] = useState([
    { image: "/benet-1.png" },
    { image: "/benet-2.png" },
    { image: "/benet-3.png" },
  ]);

  let sliderSettings = {};

  // sliderSettings = {
  //     infinite: true,
  //     arrows: false,
  //     speed: 300,
  //     slidesToShow: isMobileView ? 1.2 : 3,
  //     slidesToScroll: isMobileView ? 1. : 3,
  //     dots: true,

  //     responsive: [

  //         {
  //           breakpoint: 1365,
  //           settings: {
  //             slidesToShow: 3,
  //             slidesToScroll: 3,
  //             infinite: false,
  //             dots: true,
  //           },
  //         },
  //         {
  //           breakpoint: 1199,
  //           settings: {
  //             slidesToShow: 3,
  //             slidesToScroll: 3,
  //             infinite: false,
  //             dots: true,
  //           },
  //         },

  //         {
  //           breakpoint: 1025,
  //           settings: {
  //             slidesToShow: 3,
  //             slidesToScroll: 3,
  //             infinite: false,
  //             dots: true,
  //           },
  //         },

  //         {
  //           breakpoint: 900,
  //           settings: {
  //             infinite: true,
  //             slidesToShow: 2,
  //             slidesToScroll: 3,
  //             dots: true,
  //           },
  //         },
  //         {
  //           breakpoint: 600,
  //           settings: {
  //             infinite: true,
  //             slidesToShow: 1,
  //             slidesToScroll: 1,
  //             dots: true,
  //           },
  //         },

  //         {
  //           breakpoint: 400,
  //           settings: {
  //             infinite: true,
  //             slidesToShow: 1,
  //             slidesToScroll: 1,
  //             dots: true,
  //           },
  //         },
  //       ],

  //     };

  return (
    <section className="img_text_banner_box">
      <div
        className="text_box_wrap full-block-wrap"
        style={{ backgroundColor: bgColor }}
      >
        <div className="img_text_box_inner">
          <div className="justify_content_start container w_100pc pt_25">
            <div className="text_box_content_inner m_pr_0 pt_pb_40">
              <h3 className="color_gray_550 mb_15 custom_fs_m_45 custom_fs_m_40">
                {mainTitle}
              </h3>
              <p className="custom_fs_20 custom_fs_m_16 color_gray_550 lh_33 mb_0">
                {content2}
              </p>
            </div>
            <div
              className={`${"mt_25 m_mb_30 trending_artist_slider"} ${
                styles.listing_pageContainer
              }`}
            >
              <div className={styles.listing_grid_wrapper}>
                {data.map((el, index) => (
                  <div className={styles.listing_gridItem} key={index}>
                    <Link key={index} href={el.url}>
                      <div className={styles.listing_grid_img_col}>
                        <Image
                          src={el.image}
                          alt="Trending couple tattoos"
                          width={746}
                          height={749}
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={blurDataURL}
                          layout="responsive"
                        />
                      </div>
                      <div className={styles.listing_grid_brand}>
                        {/* <Image
                                            src={el.imge}
                                            alt="inckd"
                                            width={65}
                                            height={19}
                                            loading="lazy"
                                            placeholder="blur"
                                            blurDataURL={blurDataURL}
                                            layout="responsive"
                                        /> */}
                      </div>
                      <div className={styles.listing_grid_content_wrap}>
                        <div className={styles.listing_grid_img_profile}>
                          <Image
                            src={el.artistImage}
                            alt="Trending couple tattoos"
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
                            {el.city}
                          </h6>
                          <span className={styles.listing_grid_profile_address}>
                            {el.country}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="d_flex align_item_center flex_direction_column mt_25">
                <Link
                  href={btnLink}
                  className="btn_primary btn_img btn_xxl m_btn_custom_48"
                >
                  Explore more dragon tattoos
                  <Image
                    src="/arow-white-right.svg"
                    width={24}
                    height={24}
                    alt="logo"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    className="ml-8 mt-2"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
