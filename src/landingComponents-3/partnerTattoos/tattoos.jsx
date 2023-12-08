import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import styles from './partnertattoos.module.css'

export default function PartnerTattoos({
    mainTitle, content2 ,image ,bgColor}) {        
        const [images, setImage] = useState([
        { image: "/benet-1.png" },
        { image: "/benet-2.png" },
        { image: "/benet-3.png" }
        ]);



  return (
    <section className="img_text_banner_box">
        <div className="text_box_wrap full-block-wrap"  style={{"backgroundColor":bgColor}}>
            <div className="img_text_box_inner">
                <div className="justify_content_start container w_100pc">
                    <div className="text_box_content_inner m_pr_0 pt_pb_40">
                        <h3 className="color_gray_550 mb_15 custom_fs_m_45 custom_fs_m_40">{mainTitle}</h3>
                        <p className="custom_fs_20 custom_fs_m_16 color_gray_550 lh_33 mb_0">{content2}</p>
                    </div>
                    <div className={`${'mt_25 m_mb_30 trending_artist_slider'} ${styles.listing_pageContainer}`}>
                        <div className={styles.listing_grid_wrapper}>
                            
                            {images.map((imgPath, index) => (
                                <div className={styles.listing_gridItem} key={index}>
                                    <div className={styles.listing_grid_img_col}>
                                        <Image
                                        src={imgPath.image}
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
                                        <Image
                                            src="/inckd-brand.svg"
                                            alt="inckd"
                                            width={65}
                                            height={19}
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
                                                Benet art
                                            </h6>
                                            <span className={styles.listing_grid_profile_address}>
                                                Zurich, Switzerland
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>                        
                        <div className="d_flex align_item_center flex_direction_column mt_25">
                            <Link href="/explore/tattoos"  className="btn_primary btn_img btn_xxl m_btn_custom_48">
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
  )
}
