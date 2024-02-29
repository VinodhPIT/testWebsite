import React, { useState } from "react";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import styles from "./style.module.css";
import useWindowResize from "@/hooks/useWindowSize";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
export default function FiveColumnCarousel ({title,title_sub , content ,button   ,trendingArtist ,btnLink}) {
    const { isMobileView } = useWindowResize();
    let sliderSettings = {};

    sliderSettings = {
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: isMobileView ? 1 : 5,
        slidesToScroll: isMobileView ? 1. : 5,
        dots: true,
     
        responsive: [
            // {
            //     breakpoint: 1290,
            //     settings: {
            //         slidesToShow: 4,
            //         slidesToScroll: 4,
            //         infinite: false,
            //         dots: true,
            //     },
            // },

            {
              breakpoint: 1365,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                infinite: false,
                dots: true,
              },
            },
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,
                dots: true,
              },
            },

            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: false,
                dots: true,
              },
            },
      
            {
              breakpoint: 900,
              settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
              },
            },
      
            {
              breakpoint: 400,
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
            <div className="img_text_box_inner">
                <div className="justify_content_start container w_100pc">
                    <div className="text_box_content_inner max_w_100pc pt_80 pb_25 m_pt_pb_30">
                      <div className="d_flex text_left justify_space_between mb_0 m_align_item_center">
                            <div className="d_flex align_item_left justify_space_between flex_direction_column m_max_100 pr_20 m_pr_0">
                                <h2 className="color_gray_550 text_left heading_h2 mb_0 mr_0">
                                    <span class="dis_inline m_d_block">{title}{title_sub}</span>
                                </h2>                             
                            </div>
                            
                            <Link href={btnLink}
                                 className="btn_primary btn_cutom_new btn_img m_mb_25 w_min_170 mt_15 mob_hidden">
                              {button}
                                <Image
                                src="/arow-white-right.svg"
                                width={24}
                                height={24}
                                alt="arrow"
                                className="ml-8 mt-2"
                                />
                            </Link>
                            <Link
                              href={btnLink}
                              className="desk_hidden ml_10"
                            >                
                              <Image
                                  src="/arrowBlack.svg"
                                width={32}
                                height={32}
                                alt="arrowBlack"
                              
                              />
                            </Link>
                        </div>

                    </div>                               
                    <div className={`${'mt_0 mb_80 m_mb_80 trending_artist_slider artistSlider'} ${styles.listing_pageContainer}`}>
                        <div className={styles.listing_grid_wrapper}>
                            <Slider {...sliderSettings} className="custom_content_slick_slider">
                                {trendingArtist.map((el, index) => (
                                    <div className={`${'listing_gridItem'} ${styles.listing_gridItem}`} key={index}>

                                      <Link href={el.url}  >
                               
                                    <div className={`${'listing_grid_five_col'} ${styles.listing_grid_img_col}`}>
                                        <Image
                                        src={el.image}
                                        alt={el.name}
                                        width={752}
                                        height={776}
                                        loading="lazy"
                                        placeholder="blur"
                                        blurDataURL={blurDataURL}
                                        layout="responsive"
                                        style={{"borderTopRightRadius":"9px","borderTopLeftRadius":"9px"}}
                                        className="imggg"
                                        />
                                    </div>
                
                                    <div className={`${'listing_grid_content_wrap'} ${styles.listing_grid_content_wrap}`}>
                                        <div className={styles.listing_grid_img_profile}>
                                        <Image
                                            src={el.artistImage}
                                            alt={el.name}
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
                                           {el.name}
                                        </h6>
                                        
                                        <span className={styles.listing_grid_profile_address}>
                                            {el.city}, {el.country}
                                        </span>
                                        </div>
                                    </div>
                                    </Link>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>                
            </div>  
        </div>
    </section>
  )
}
