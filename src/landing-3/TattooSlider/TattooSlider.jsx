import React, { useState } from "react";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import styles from "./processdragontattoo.module.css";
import useWindowResize from "@/hooks/useWindowSize";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
export default function ProcessdragonTattoo () {

   
  
    


    const [images, setImage] = useState([
    { image: "/dragon-pro-1.png" },
    { image: "/dragon-pro-2.png" },
    { image: "/dragon-pro-3.png" },
    ]);


  return (
    <section className="img_text_banner_box">
        <div className="text_box_wrap full-block-wrap">
            <div className="img_text_box_inner">
                <div className="justify_content_start container w_100pc block_bg_gray_100">
                    <div className="text_box_content_inner max_w_100pc pt_80 pb_25 m_pt_50">
                        <div className="d_flex align_item_start text_center m_flex_direction_column">
                            <div className="d_flex align_item_left flex_direction_column max_100">
                                <h3 className="color_gray_550 mb_15 custom_fs_m_45 custom_fs_m_40">
                                    <span class="m_dis_inline">Der Prozess der Drachen Tätowierung</span>
                                    <span class="textBlock m_dis_inline">inckd tattoo artists</span>
                                </h3>
                                <p class="custom_fs_16 color_gray_550 mb_0">Dive into our extensive network of tattoo artists, each skilled in the art of partner tattoos. Browse portfolios, find styles that resonate with you, and discover the perfect match.</p>
                            </div>                          
                            
                        </div>
                    </div>                               
                    <div className={`${'mt_0 mb_80 m_mb_30 m_mt_25 trending_artist_slider'} ${styles.listing_pageContainer}`}>
                        <div className={styles.listing_grid_wrapper}>                        
                                {images.map((imgPath, index) => (
                                    <div className={styles.listing_gridItem} key={index}>
                                        <div className={styles.listing_grid_img_col}>
                                            <Image
                                            src={imgPath.image}
                                            alt="Trending couple tattoos"
                                            width={752}
                                            height={776}
                                            loading="lazy"
                                            placeholder="blur"
                                            blurDataURL={blurDataURL}
                                            layout="responsive"
                                            />
                                        </div>
                
                                        <div className={styles.listing_grid_content_wrap}>
                                            <div className={styles.listing_grid_img_profile}>
                                                <Image
                                                    src="/Jamie-Sebastian.png"
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
                                                    Jamie Sebastian
                                                </h6>
                                                <span className={styles.listing_grid_profile_address}>
                                                    Zurich, Switzerland
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                        <div className="d_flex align_item_center flex_direction_column mt_65 m_mt_25">
                            <Link href="/explore/tattoos"  className="btn_primary btn_img btn_xxl m_btn_custom_48">
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
        </div>
    </section>
  )
}
