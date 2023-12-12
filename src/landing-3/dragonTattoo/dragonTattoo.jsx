import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { blurDataURL ,APP_LINK_GOOGLE ,APP_LINK_APPLE} from "@/constants/constants";
import styles from './dragontattoo.module.css'

export default function DragonTattoo({title1 , content1 ,title2  , content2 ,title3 ,content3  ,image ,bgColor  ,imageWidth ,imageHeight}) {
  return (
    <section className="img_text_banner_box" style={{"backgroundColor":bgColor}}>

        

        <div className="col_full">
            <div className="img_text_box_wrapper">
                <div className={"text_box_wrap right pt_75   m_pt_50 pb_45 m_pb_50"}>                    
                    <div className="img_text_box_inner container">
                        <div className="text_box_content justify_content_start align_item_normal p_0 pr_40 m_pr_0 min_h_reset">
                            <div className="text_box_content_inner max_w_100pc">
                                <div className="d_flex flex_direction_column  m_mt_15 m_mb_45">
                                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">{title1}</h4>
                                    <p className="custom_fs_16 custom_fs_m_16 color_gray_550 mb_0 mt_5 lh_33">{content1}</p>
                                </div>
                               
                            </div>
                        </div>
                        <div className="text_box_content justify_content_start align_item_normal p_0 min_h_reset">
                            <div className="text_box_content_inner max_w_100pc">
                                <div className="d_flex flex_direction_column  m_mt_15 m_mb_45">
                                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">{title2}</h4>
                                    <p className="custom_fs_16 custom_fs_m_16 color_gray_550 mb_0 mt_5 lh_33">{content2}</p>
                                </div>                                
                            </div>
                        </div>

                    </div>

                    <div className="img_text_box_inner container mt_25">
                        <div className="text_box_content justify_content_start align_item_normal p_0 pr_40 m_pr_0 min_h_reset">
                            <div className="text_box_content_inner max_w_100pc d_flex">                               
                                <div className="d_flex flex_direction_column m_mb_45 justify_content_center">
                                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">{title3}</h4>
                                    <p className="custom_fs_16 custom_fs_m_16 color_gray_550 mb_0 mt_5 lh_33 ">{content3}</p>
                                </div>
                            </div>
                        </div>
                        <div className="text_box_content justify_content_center  align_item_normal p_0 min_h_reset">
                            <div className="text_box_content_inner max_w_100pc">                               
                                <div className="d_flex flex_direction_column m_mb_45">
                                <Image
                                    priority
                                    alt="drachen tattoo idee"
                                    src={image}
                                    width={imageWidth}
                                    height={imageHeight}
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
