import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { blurDataURL ,APP_LINK_GOOGLE ,APP_LINK_APPLE} from "@/constants/constants";




export default function WhypartnerTattoos({mainTitle ,title1 , content1 ,title2 ,content2 ,title3 ,content3  ,embrace ,story ,downloadApp}) {
  return (
    <section className="img_text_banner_box">

        <div className="text_box_wrap full-block-wrap block_bg_yellow">
            <div className="img_text_box_inner">
                <div className="justify_content_start container w_100pc">
                    <div className="text_box_content_inner pt_pb_80 max_w_100pc m_pt_pb_50">
                        <h2 className="color_gray_550 mb_0 heading_h2 m_text_left">{mainTitle}</h2>                        
                    </div>                  
                </div>
            </div>  
        </div>

        <div className="col_full">
            <div className="img_text_box_wrapper">
                <div className={"text_box_wrap right block_bg_yellow pb_20 m_pb_0"}>                    
                    <div className="img_text_box_inner container">
                        <div className="text_box_content justify_content_start align_item_normal p_0 pr_40 text_left m_pr_0">
                            <div className="text_box_content_inner max_w_100pc">
                                <div className="d_flex flex_direction_column mb_65 mt_10pc m_mt_0 m_mb_35">
                                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">{title1}</h4>
                                    <p className="custom_fs_20 custom_fs_m_16 color_gray_550 mb_0 mt-15 lh_33">{content1}</p>
                                </div>
                                <div className="d_flex flex_direction_column mb_65 m_mb_35">
                                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">{title2}</h4>
                                    <p className="custom_fs_20 custom_fs_m_16 color_gray_550 mb_0 mt-15 lh_33 ">{content2}</p>
                                </div>
                                {title3 &&
                                <div className="d_flex flex_direction_column mb_65 m_mb_35">
                                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">{title3}</h4>
                                    <p className="custom_fs_20 custom_fs_m_16 color_gray_550 mb_0 mt-15 lh_33 ">{content3}</p>
                                </div>}
                            </div>
                        </div>                        

                        <div class="img_box_wrap justify_content_right d_flex flex_direction_column min_h_reset ready_embrace_download">
                            <ul class="app_download_img_list justify_content_center mr_0 mt_0 h_inherit">
                                <li className="no_filter">
                                    <Image
                                        priority
                                        alt="Why inckd for partner tattoos?"
                                        src="/whypartner-1.png"
                                        width={323}
                                        height={675}                                
                                        blurDataURL={blurDataURL}
                                        className="max_w_100pc max_h_100pc h_inherit"
                                        placeholder="blur"
                                    />
                                </li>

                                
                            </ul>
                            <ul class="download_app mt_0 max_w_100pc d_flex flex_flow_wrap justify_content_center ready_embrace_block">
                                <li class="download_app_title">
                                    <h5 className="color_gray_550 custom_fs_32 fw_400 mt_15 custom_fs_m_27">
                                        <span class="m_dis_inline">{embrace}</span>
                                        <span class="textBlock m_dis_inline">{story}</span>
                                    </h5>
                                    <p className="custom_fs_20 custom_fs_m_16 color_gray_550 mt_15 mb_15 lh_33">{downloadApp}</p>
                                </li>
                                <li>
                                    <Link href={APP_LINK_APPLE} target="_blank">
                                        <Image
                                            priority
                                            alt="app store"
                                            src="/app-store-new.svg"
                                            width={134}
                                            height={41}
                                            blurDataURL={blurDataURL}
                                            placeholder="blur"
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={APP_LINK_GOOGLE} target="_blank">
                                        <Image
                                            priority
                                            alt="google play"
                                            src="/g-play-new.svg"
                                            width={134}
                                            height={41}
                                            blurDataURL={blurDataURL}
                                            placeholder="blur"
                                        />
                                    </Link>
                                </li>
                                </ul>
                        </div>
                    </div>                   
                </div> 
            </div>
        </div>
    </section>
  )
}
