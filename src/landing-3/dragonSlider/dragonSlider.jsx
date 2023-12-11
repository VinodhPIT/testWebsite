import React, { useState } from "react";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import styles from "./dragonslider.module.css";
import useWindowResize from "@/hooks/useWindowSize";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
export default function DragonSlider ({title ,description ,bgColor ,image}) {
    const { isMobileView } = useWindowResize();
    let sliderSettings = {};

    sliderSettings = {
    infinite: true,
    speed: 300,
    slidesToShow: isMobileView ? 1 : 1,
    slidesToScroll: isMobileView ? 1 : 1,
    dots: true,
    };

    // const [images, setImage] = useState([
    // { image: "/coverUpTattoo2.png" },
  
    // ]);
  return (
    <section className="img_text_banner_box">
        <div className="text_box_wrap full-block-wrap right pt_0 " style={{"backgroundColor":bgColor}}>
            <div className=" img_text_box_inner justify_content_start container w_100pc">                

                <div className="img_box_wrap min_h_reset">
                {/* coverUpTattoo2 */}


                    <div className={`${'mt_0 mb_80 m_mb_30 trending_artist_slider slider_arrow_none'} ${styles.listing_pageContainer}`}>
                        <div className={styles.listing_grid_wrapper}>
                           
                               
                                    <div className={styles.listing_gridItem} >
                                        <div className={styles.listing_grid_img_col}>
                                            <Image
                                                src={image}
                                                alt="overUpTattoo2"
                                                width={398}
                                                height={454}
                                                loading="lazy"
                                                placeholder="blur"
                                                blurDataURL={blurDataURL}
                                                layout="responsive"
                                            />
                                        </div>                                    
                                    </div>
                           
                       
                        </div>
                    </div>




                </div>

                <div className="text_box_content justify_content_center p_0 m_pt_50 m_pb_50 min_h_reset flex_direction_column">
                    <div className="text_box_content_inner max_w_100pc p_0 text_left">
                        <h2 className="color_gray_550 mb_25 heading_h2">{title}</h2>
                        <p className="custom_fs_16 custom_fs_m_16 color_gray_550 mb_0 mt_0">{description}
                        </p>                            
                    </div>                        
                </div>
            </div>  
        </div>
    </section>
  )
}
