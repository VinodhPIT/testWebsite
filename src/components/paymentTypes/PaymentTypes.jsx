import React from 'react'
import Image from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";


import {
    APP_LINK_APPLE,
    APP_LINK_GOOGLE,
    blurDataURL,
} from "@/constants/constants";


import styles from './style.module.css'


export default function PaymentTypes({  title1, title2, title3, content1, content2, content3, leftSectionImage }) {
    const { t } = useTranslation();


    return (
        <section className="img_text_banner_box">
            <div className="img_text_box_wrapper">                    
                <div className="text_box_wrap right block_bg_purple_250 custom_right_img_new">
                    <div className="img_text_box_inner container flex_direction_column">
                        <div className="row">
					        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 offset-md-right-2">
                                <div className="text_box_content justify_content_start align_item_center p_0 m_min_h_reset">
                                    <div className="text_box_content_inner max_w_100pc pt_80 pb_80 m_pt_40 m_pb_25">
                                        <div className="d_flex flex_direction_column mb_30 mt_0 m_mb_15">
                                            <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">{title1}</h4>
                                            <p className="color_gray_550 custom_fs_m_14 mb_0 mt_0">{content1}</p>
                                        </div>                                        
                                        <div className="d_flex flex_direction_column mb_30 m_mb_15">
                                            <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">{title2}</h4>
                                            <p className="color_gray_550 custom_fs_m_14 mb_0 mt_0">{content2}</p>
                                        </div>                                      
                                        <div className="d_flex flex_direction_column mb_0">
                                            <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">{title3}</h4>
                                            <p className="color_gray_550 custom_fs_m_14 mb_0 mt_0">{content3}</p>
                                        </div>                                           
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                <div className="img_box_wrap justify_content_center flex_flow_wrap m_pb_25">
                                    <ul className="justify_content_center pl_0 mb_0">
                                        <li >
                                            <Image
                                                priority
                                                alt={t("common:homePage.Verified tattoo artists")}
                                                src={leftSectionImage}
                                                width={239}
                                                height={479}
                                                blurDataURL={blurDataURL}
                                                placeholder="blur"
                                                className={styles.imageResponsive}
                                            />
                                        </li>
                                    </ul>
                                    <ul className="download_app ml_0 w_100pc max_w_100pc home_new_verified_tattoo mt_25 m_mt_0 m_pt_25 d_flex justify_content_center">
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

