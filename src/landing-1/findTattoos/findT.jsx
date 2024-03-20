import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { BLUR_URL } from "@/constants/constants";
import styles from "./findtattoos.module.css"





export default function FindT({title ,button ,img1 ,img2}) {
  return (
    <div className="text_box_wrap right app_download_box_wrap mb_0 block_bg_aero_blue">
        <div className="img_text_box_inner container">
          <div className="text_box_content justify_content_start pl_0">
            <div className="text_box_content_inner w_100pc m_pr_0 m_text_center">
              <div className={styles.common_full_block}>
                <h2>{title}</h2>
                <Link  href={'/explore/tattoos'}   className="btn_primary btn_img btn_xxl m_btn_custom_48">
                  {button}
                  <Image
                    src="/arow-white-right.svg"
                    width={24}
                    height={24}
                    alt="arrow"
                    className="ml-8 mt-2"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="img_box_wrap">
            <ul className="app_download_img_list mt_mb_6pc after_none align_item_center mr_0 justify_content_right m_justify_content_center m_text_center">
              <li className="no_filter m_w_auto">
                <Image
                  src={img1}                
                  alt="img"
                  width={550}
                  height={550}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={BLUR_URL}
                  layout="responsive"
                />                 
              </li>
              <li className="no_filter m_w_auto">
                <Image
                  src={img2}               
                  alt="img"
                  width={550}
                  height={550}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={BLUR_URL}
                  layout="responsive"
                />                 
              </li>  
            </ul>
          </div>
        </div>
      </div>
  )
}


