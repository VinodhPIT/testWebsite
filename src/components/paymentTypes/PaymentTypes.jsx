import React from 'react'
import Image from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import useWindowResize from "@/hooks/useWindowSize";
import ImageSlider from "@/components/slider/singleImageSlider";

import {
    APP_LINK_APPLE,
    APP_LINK_GOOGLE,
    blurDataURL,
} from "@/constants/constants";


import styles from './style.module.css'


export default function PaymentTypes({  title1, title2, title3, content1, content2, content3, leftSectionImage }) {
    const { t } = useTranslation();
    const { isMobileView } = useWindowResize();

    return (
        <section className="img_text_banner_box">
            <div className="img_text_box_wrapper">                    
                <div className="text_box_wrap right block_bg_purple_250 custom_right_img_new app_download_box_wrap landing_app_download_wrap mb_0 m_pb_25">
                    <div className="img_text_box_inner container flex_direction_column pt_0">
                        <div className="row">
					        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="text_box_content justify_content_start align_item_start p_0 m_min_h_reset">
                                    <div className="text_box_content_inner max_w_100pc pt_80 pb_80 m_pt_40 m_pb_35 pr_50 m_pr_0">
                                        <div className="d_flex flex_direction_column mb_30 mt_0 m_mb_15">                                            
                                            <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24 d_flex align_item_center">
                                                <Image
                                                    src="/icon_verified.svg"
                                                    width={32}
                                                    height={32}
                                                    alt="Verified tattoo artists"
                                                    priority
                                                    placeholder="blur"
                                                    blurDataURL={blurDataURL}
                                                    className="mr_10 m_w_24 m_h_24"
                                                />
                                                {title1}</h4>
                                            <p className="color_gray_550 custom_fs_m_14 mb_0 mt_0 pl_42 m_pl_34">{content1}</p>
                                        </div>                                        
                                        <div className="d_flex flex_direction_column mb_30 m_mb_15">                                            
                                            <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24 d_flex align_item_center">
                                                <Image
                                                    src="/icon_user_friendly.svg"
                                                    width={32}
                                                    height={32}
                                                    alt="User-Friendly Interface"
                                                    priority
                                                    placeholder="blur"
                                                    blurDataURL={blurDataURL}
                                                    className="mr_10 m_w_24 m_h_24"
                                                />
                                                {title2}</h4>
                                            <p className="color_gray_550 custom_fs_m_14 mb_0 mt_0 pl_42 m_pl_34">{content2}</p>
                                        </div>                                      
                                        <div className="d_flex flex_direction_column mb_0">                                            
                                            <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24 d_flex align_item_center">
                                                <Image
                                                    src="/icon_secure.svg"
                                                    width={32}
                                                    height={32}
                                                    alt="Secure Transactions"
                                                    priority
                                                    placeholder="blur"
                                                    blurDataURL={blurDataURL}
                                                    className="mr_10 m_w_24 m_h_24"
                                                />
                                                {title3}</h4>
                                            <p className="color_gray_550 custom_fs_m_14 mb_0 mt_0 pl_42 m_pl_34">{content3}</p>
                                        </div>                                           
                                    </div>
                                </div>
                            </div>
                            {!isMobileView && (
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="img_box_wrap m_pb_25">
                                        <ul className="app_download_img_list justify_content_start slider_resize d_slid_resize m_0 p_0 d_inline_flex gap_20">
                                            <li className="pl_0 no_filter">
                                                <Image
                                                    priority
                                                    alt={t("common:homePage.Verified tattoo artists")}
                                                    src="/explore_web_01.png"
                                                    width={189}
                                                    height={379}
                                                    blurDataURL={blurDataURL}
                                                    placeholder="blur"
                                                    className={styles.imageResponsive}
                                                />
                                            </li>
                                            <li className="pl_0 no_filter">
                                                <Image
                                                    priority
                                                    alt={t("common:homePage.Verified tattoo artists")}
                                                    src="/explore_web_02.png"
                                                    width={189}
                                                    height={379}
                                                    blurDataURL={blurDataURL}
                                                    placeholder="blur"
                                                    className={styles.imageResponsive}
                                                />
                                            </li>
                                            <li className="pl_0 no_filter">
                                                <Image
                                                    priority
                                                    alt={t("common:homePage.Verified tattoo artists")}
                                                    src="/explore_web_03.png"
                                                    width={189}
                                                    height={379}
                                                    blurDataURL={blurDataURL}
                                                    placeholder="blur"
                                                    className={styles.imageResponsive}
                                                />
                                            </li>
                                        </ul>
                                        {/* <ul className="download_app ml_0 w_100pc max_w_100pc home_new_verified_tattoo mt_25 m_mt_0 m_pt_25 d_flex justify_content_center hidden">
                                            <li>
                                                <Link href={APP_LINK_APPLE} target="_blank">
                                                    <Image
                                                        priority
                                                        src="/app-store-new.svg"
                                                        alt="App store"
                                                        width={192}
                                                        height={59}
                                                        placeholder="blur"
                                                        blurDataURL={blurDataURL}
                                                        className="custom_download_icons_mob w_100pc object_fit_contain"
                                                    />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={APP_LINK_GOOGLE} target="_blank">
                                                    <Image
                                                        priority
                                                        src="/g-play-new.svg"
                                                        alt="Play store"
                                                        width={192}
                                                        height={59}
                                                        placeholder="blur"
                                                        blurDataURL={blurDataURL}
                                                        className="custom_download_icons_mob w_100pc object_fit_contain"
                                                    />
                                                </Link>
                                            </li>
                                        </ul> */}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {isMobileView && (
                        <ImageSlider
                        imagePaths={["/explore_mob_01.png", "/explore_mob_02.png", "/explore_mob_03.png"]}
                        imgAlt={t("common:downloadApp")}
                        imgblurDataURL={blurDataURL}
                        imgWidth={239}
                        imgHeight={479}
                        ></ImageSlider>
                    )}

                </div>
            </div>
        </section>
    )
}

