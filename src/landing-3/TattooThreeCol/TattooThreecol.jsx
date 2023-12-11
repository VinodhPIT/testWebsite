import React, { useState } from "react";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import styles from "./style.module.css";
import useWindowResize from "@/hooks/useWindowSize";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
export default function ThreeColumCarousel ({data}) {
    const { isMobileView } = useWindowResize();
    let sliderSettings = {};

    sliderSettings = {
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: isMobileView ? 1.2 : 3,
        slidesToScroll: isMobileView ? 1. : 3,
        dots: true,
        
     
        responsive: [
      

            {
              breakpoint: 1365,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
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
                slidesToShow: 2,
                slidesToScroll: 3,
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
                                                  
                    <div className={`${'mt_0 mb_80 m_mb_30 trending_artist_slider artistSlider'} ${styles.listing_pageContainer}`}>
                        <div className={styles.listing_grid_wrapper}>
                            <Slider {...sliderSettings} className="custom_content_slick_slider">
                                {data.map((el, index) => (
                                    <div className={`${'listing_gridItem'} ${styles.listing_gridItem}`} key={index}>

                                      <Link href={el.url}>
                               
                                    <div className={`${'listing_grid_img_col'} ${styles.listing_grid_img_col}`}>
                                        <Image
                                        src={el.image}
                                        alt="Trending couple tattoos"
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
                                        <div className="mb_5"></div>
                                        <span className={styles.listing_grid_profile_address}>
                                            {el.city}
                                        </span>
                                        <div className="mt_5"></div>
                                        <span className={styles.listing_grid_profile_address} >
                                            {el.country}
                                        </span>
                                        </div>
                                    </div>
                                    </Link>
                                    </div>
                                ))}
                            </Slider>
                        </div>

                      
                    </div> 

                    <div  style={{"width":"100%" ,"float":"left"}}>
                            <Link href=  "/de-de/explore/tattoo-artists?location=BerlinGermany"  className="btn_primary btn_img btn_xxl m_btn_custom_48" 
                            
                            
                            style={{    "margin": "0 auto",
                                "display": "block",
                                "width": "230px" ,"marginTop":"30px"}}>
                                Explore more
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
    </section>
  )
}
