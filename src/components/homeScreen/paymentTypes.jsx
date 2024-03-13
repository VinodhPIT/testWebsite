import React from 'react'
import Image from "next/image";
import Link from "next/link";
import styles from './styles/style1.module.css'
import {
    APP_LINK_APPLE,
    APP_LINK_GOOGLE,
    blurDataURL,
} from "@/constants/constants";

import useTranslation from "next-translate/useTranslation";

export default function PaymentTypes({  title1, title2, title3, content1, content2, content3, leftSectionImage }) {
    const { t } = useTranslation();


    return (
        <section className="img_text_banner_box">
            <div className="img_text_box_wrapper">                    
                <div className="text_box_wrap right block_bg_light_green_100 custom_right_img_new">
                    <div className="img_text_box_inner container flex_direction_column">
                        <div className="row">
					        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 offset-md-right-2">
                                <div className="text_box_content justify_content_start align_item_center p_0 m_min_h_reset">
                                    <div className="text_box_content_inner max_w_100pc pt_80 pb_80 m_pt_40 m_pb_40">
                                        <div className="d_flex flex_direction_column mb_45 mt_0 m_mb_30">
                                            <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">{title1}</h4>
                                            <p className="custom_fs_20 custom_fs_m_16 color_gray_550 mb_0 mt-15 lh_33">{content1}</p>
                                        </div>
                                        
                                            <div className="d_flex flex_direction_column mb_45 m_mb_30">
                                                <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">{title2}</h4>
                                                <p className="custom_fs_20 custom_fs_m_16 color_gray_550 mb_0 mt-15 lh_33 ">{content2}</p>
                                            </div>
                                            

                                      
                                            <div className="d_flex flex_direction_column mb_0">
                                                <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">{title3}</h4>
                                                <p className="custom_fs_20 custom_fs_m_16 color_gray_550 mb_0 mt-15 lh_33 ">{content3}</p>
                                            </div>
                                           
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                <div class="img_box_wrap justify_content_center flex_flow_wrap m_pb_40">
                                    <ul class="justify_content_center pl_0 mb_0">
                                        <li >
                                            <Image
                                                priority
                                                alt={t("common:homePage.Verified tattoo artists")}
                                                src={leftSectionImage}
                                                width={278}
                                                height={556}
                                                blurDataURL={blurDataURL}
                                                placeholder="blur"
                                                className={styles.imageResponsive}
                                            />
                                        </li>
                                    </ul>
                                    <ul class="download_app ml_0 w_100pc max_w_100pc home_new_verified_tattoo mt_65 m_mt_0 m_pt_30 d_flex justify_content_center">
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
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

