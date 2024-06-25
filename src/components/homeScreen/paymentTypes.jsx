import React from 'react'
import Image from "next/image";

import useWindowResize from "@/hooks/useWindowSize";
import {
    BLUR_URL,
  } from "@/constants/constants";

import useTranslation from "next-translate/useTranslation";
import ImageSlider from "@/components/slider/singleImageSlider";


export default function PaymentTypes({  title1, title2, title3, content1, content2, content3, leftSectionImage }) {
    const { t } = useTranslation();
    const { isMobileView } = useWindowResize();

    return (
        <section className="container_full">
            <div className="row g-0">
                <div className="col-md-6 col-sm-12 col-xs-12 block_bg_gray_250 offset-md-right-1">              
                    <div className="position_relative w_100pc h_100pc m_min_h_inherit text_center align_content m_pt_10">
                        <ul className="mobile_app_list">
                            <li className="align_item_center justify_content_end">
                                <Image
                                    priority
                                    src="/mob_app_01.png"
                                    alt={t("common:homePage.TattooFinancing")} 
                                    width={277}
                                    height={549}
                                    blurDataURL={blurDataURL}
                                    placeholder="blur"
                                    className="object_position_center mob_hidden"
                                />
                                <Image
                                    priority
                                    src="/mob_app_01.png"
                                    alt={t("common:homePage.TattooFinancing")} 
                                    width={122}
                                    height={242}
                                    blurDataURL={blurDataURL}
                                    placeholder="blur"
                                    className="object_position_center desk_hidden"
                                />
                            </li>
                            <li className="align_item_end justify_content_start">
                                <Image
                                    priority
                                    src="/mob_app_02.png"
                                    alt={t("common:homePage.TattooFinancing")} 
                                    width={278}
                                    height={448}
                                    blurDataURL={blurDataURL}
                                    placeholder="blur"
                                    className="object_position_bottom mob_hidden"
                                />
                                <Image
                                    priority
                                    src="/mob_app_02.png"
                                    alt={t("common:homePage.TattooFinancing")} 
                                    width={122}
                                    height={197}
                                    blurDataURL={blurDataURL}
                                    placeholder="blur"
                                    className="object_position_bottom desk_hidden"
                                />
                            </li>
                        </ul>  
                    </div>
                </div>
                <div className="col-md-5 col-sm-12 col-xs-12">
                    <div className="position_relative w_100pc h_100pc m_min_h_inherit">
                        <div className="w_100pc h_100pc d_flex flex_direction_column justify_content_center">
                            <h2 className="color_gray_550 custom_fs_38 fw_900 mb_20">              
                                <span className="position_relative">
                                    <span className="position_relative d_block custom_fs_16 lh_19 fw_300 text_transform_upper">EXPLORE</span>
                                    inckd Mobile App</span>                           
                            </h2>
                            <div className="d_flex flex_direction_column mb_25 mt_0 m_mb_15">
                                <div className="d_flex align_item_center">
                                    <Image
                                        src="/icon_verified.svg"
                                        width={33}
                                        height={33}
                                        alt="Verified tattoo artists"
                                        priority
                                        placeholder="blur"
                                        blurDataURL={blurDataURL}
                                        className="m_w_24 m_h_24 mr_15"
                                    />
                                    <div className="d_flex flex_direction_column">
                                        <h4 className="color_gray_550 custom_fs_22 lh_27 fw_600 custom_fs_m_24 d_flex align_item_center mb_0">
                                            {title1}</h4>
                                    </div>
                                </div>
                            </div>                                        
                            <div className="d_flex flex_direction_column mb_25 m_mb_15">
                                <div className="d_flex align_item_center">
                                    <Image
                                        src="/icon_user_friendly.svg"
                                        width={33}
                                        height={33}
                                        alt="User-Friendly Interface"
                                        priority
                                        placeholder="blur"
                                        blurDataURL={blurDataURL}
                                        className="m_w_24 m_h_24 mr_15"
                                    />
                                    <div className="d_flex flex_direction_column">
                                        <h4 className="color_gray_550 custom_fs_22 lh_27 fw_600 custom_fs_m_24 d_flex align_item_center mb_0">  
                                            {title2}</h4>
                                    </div>
                                </div>
                            </div>                                      
                            <div className="d_flex flex_direction_column mb_0">
                                <div className="d_flex align_item_center">
                                    <Image
                                        src="/icon_secure.svg"
                                        width={33}
                                        height={33}
                                        alt="Secure Transactions"
                                        priority
                                        placeholder="blur"
                                        blurDataURL={blurDataURL}
                                        className="m_w_24 m_h_24 mr_15"
                                    />
                                    <div className="d_flex flex_direction_column">
                                        <h4 className="color_gray_550 custom_fs_22 lh_27 fw_600 custom_fs_m_24 d_flex align_item_center mb_0">                                             
                                            {title3}</h4>
                                    </div>
                                </div>
                            </div>
                            <Link
                                href=""
                                className="button_primary align_self mt_30"
                                >
                                Get the app
                            </Link>
                        
                        </div>
                    </div>
                </div>
            </div> 
        </section>

    )
}

