import React from 'react'
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import styles from './whydragontattoo.module.css'

export default function WhydragonTattoo({title1, content1 ,title2, content2 , title3, content3 ,title4, content4 ,bgColor}) {
  return (
    <section className="img_text_banner_box">
        <div className="col_full">
            <div className="img_text_box_wrapper">
                <div className={"text_box_wrap right block_bg_gray_100 bg_drachen_tattoo"}>                    
                    <div className="img_text_box_inner container">
                        <div className="text_box_content justify_content_start align_item_center p_0 min_h_reset ml_0 mr_0">
                            <div className="text_box_content_inner max_w_100pc">
                                <div className="d_flex flex_direction_column mb_30">
                                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24 mb_20">{title1}</h4>
                                    <p className="custom_fs_16 color_gray_550 mb_0 mt_0">{content1}</p>
                                </div>
                                <div className="d_flex flex_direction_column mb_30">
                                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24 mb_20">{title2}</h4>
                                    <p className="custom_fs_16 color_gray_550 mb_0 mt_0">{content2}</p>
                                </div>
                                <div className="d_flex flex_direction_column mb_30">
                                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24 mb_20">{title3}</h4>
                                    <p className="custom_fs_16 color_gray_550 mb_0 mt_0">{content3}</p>
                                </div>
                                <div className="d_flex flex_direction_column mb_0">
                                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24 mb_20">{title4}</h4>
                                    <p className="custom_fs_16 color_gray_550 mb_0 mt_0">{content4}</p>
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
