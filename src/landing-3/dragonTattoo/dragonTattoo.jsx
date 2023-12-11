import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { blurDataURL ,APP_LINK_GOOGLE ,APP_LINK_APPLE} from "@/constants/constants";
import styles from './dragontattoo.module.css'

export default function DragonTattoo({mainTitle ,title1 ,title2 ,title3 ,title4  ,content1 ,content2 ,content3 ,content4}) {
  return (
    <section className="img_text_banner_box">

        <div className="text_box_wrap right pt_55 pb_0 block_bg_gray_100">
            <div className="img_text_box_inner justify_content_start  w_100pc block_bg_white bg_shape">
                <div className="text_box_content justify_content_center min_h_reset flex_direction_column block_bg_yellow pr_40 m_pr_15 m_pt_55">
                    <div className="text_box_content_inner max_w_100pc pb_40 m_pb_0">
                        <h2 className="color_gray_550 mb_25 heading_h2">{mainTitle}</h2>
                        <p className="custom_fs_16 custom_fs_m_16 color_gray_550 mt_0 mb_20 lh_33">{content1}</p>
                        <Link href="#" className="btn_primary btn_img btn_xxl m_btn_custom_48">
                            Explore artists
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
                <div className="img_box_wrap min_h_reset">
                    <Image
                        priority
                        alt="Explore inckd for Your Perfect Partner Tattoo Experience"
                        src="/dragontattoo.png"
                        width={705}
                        height={781}
                        blurDataURL={blurDataURL}
                        placeholder="blur"
                    />
                </div> 


            </div>  
        </div>

        <div className="col_full">
            <div className="img_text_box_wrapper">
                <div className={"text_box_wrap right pt_110 m_pt_50 pb_35 m_pb_50"}>                    
                    <div className="img_text_box_inner container">
                        <div className="text_box_content justify_content_start align_item_normal p_0 pr_40 m_pr_0 min_h_reset">
                            <div className="text_box_content_inner max_w_100pc">
                                <div className="d_flex flex_direction_column mb_65 m_mt_15 m_mb_45">
                                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">{title1}</h4>
                                    <p className="custom_fs_16 custom_fs_m_16 color_gray_550 mb_0 mt_5 lh_33">{content2}</p>
                                </div>
                               
                            </div>
                        </div>
                        <div className="text_box_content justify_content_start align_item_normal p_0 min_h_reset">
                            <div className="text_box_content_inner max_w_100pc">
                                <div className="d_flex flex_direction_column mb_65 m_mt_15 m_mb_45">
                                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">{title3}</h4>
                                    <p className="custom_fs_16 custom_fs_m_16 color_gray_550 mb_0 mt_5 lh_33">{content4}</p>
                                </div>                                
                            </div>
                        </div>

                    </div>

                    <div className="img_text_box_inner container">
                        <div className="text_box_content justify_content_start align_item_normal p_0 pr_40 m_pr_0 min_h_reset">
                            <div className="text_box_content_inner max_w_100pc d_flex">                               
                                <div className="d_flex flex_direction_column m_mb_45 justify_content_center">
                                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">{title2}</h4>
                                    <p className="custom_fs_16 custom_fs_m_16 color_gray_550 mb_0 mt_5 lh_33 ">{content3}</p>
                                </div>
                            </div>
                        </div>
                        <div className="text_box_content justify_content_start align_item_normal p_0 min_h_reset">
                            <div className="text_box_content_inner max_w_100pc">                               
                                <div className="d_flex flex_direction_column m_mb_45">
                                <Image
                                    priority
                                    alt="drachen tattoo idee"
                                    src="/drachen-tattoo-idee-3.png"
                                    width={808}
                                    height={808}
                                    blurDataURL={blurDataURL}
                                    placeholder="blur"
                                    className="img_fluid"
                                />
                                </div>
                            </div>
                        </div>

                    </div>

                    

                    
                </div> 
            </div>
        </div>
    </section>
  )
}
