import React from 'react'
import Link from "next/link";
import Image from "next/image";

import useWindowResize from "@/hooks/useWindowSize";

import ImageSlider from "@/components/slider/ImageSlider";

import { BLUR_URL ,APP_LINK_GOOGLE ,APP_LINK_APPLE} from "@/constants/constants";




export default function DownloadApps ({title ,subTitle ,bgColor}) {
  const { isMobileView } = useWindowResize();
  return (
    <div class={"text_box_wrap right app_download_box_wrap mb_0 block_bg_pink landing_app_download_wrap mt_20 ${bgColor}"}>
      <div class="img_text_box_inner container pt_60 m_md_pt_40 m_pt_20 flex_direction_column app_download_custom_new">
        <div className="row">
          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12 col-xs-12 offset-lg-right-1">
            <div class="text_box_content justify_content_start p_0">
              <div class="text_box_content_inner w_100pc m_pr_0 pb_40">
                <ul class="download_app ml_0 w_100pc max_w_100pc">
                  <li class="download_app_title">
                    <h6>   
                      <span className="m_dis_inline">{title}
                      </span>
                      <span className="textBlock m_dis_inline">{subTitle}
                      </span>
                    </h6>
                  </li>
                  <li>
                    <Link href={APP_LINK_APPLE} target="_blank">
                      <Image src="/app-store-new.svg" alt="Appstore" width={134} height={41} priority />
                    </Link>
                  </li>
                  <li>
                    <Link href={APP_LINK_GOOGLE} target="_blank">
                      <Image src="/g-play-new.svg" alt="Playstore"  width={134} height={41}  priority />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {!isMobileView ? (
            <div className="col-xl-7 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div class="img_box_wrap">
                <ul class="after_none app_download_img_list justify_content_start slider_resize d_slid_resize m_0 p_0 landing_app_download d_inline_flex gap_10pc gap_xl_45">
                  <li className="pl_0">
                    <Image
                      src="/exploreKlarna1.png"
                      width={193}
                      height={369}
                      alt="Download the App & Explore more!"
                      priority
                      placeholder="blur"
                      blurDataURL={BLUR_URL}
                      className="m_max_218"
                    />
                  </li>
                  <li className="pl_0">
                    <Image
                      src="/exploreKlarna2.png"
                      width={193}
                      height={369}
                      alt="Download the App & Explore more!"
                      priority
                      placeholder="blur"
                      blurDataURL={BLUR_URL}
                      className="m_max_218"
                    />
                  </li>
                  {/* <li className="pl_0">
                    <Image
                      src="/image_2895.png"
                      width={193}
                      height={322}
                      alt="Download the App & Explore more!"
                      priority
                      placeholder="blur"
                      blurDataURL={BLUR_URL}
                      className="m_max_218"
                    />
                  </li> */}
                </ul>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {isMobileView ? (
        <ImageSlider
          imagePaths={["/exploreKlarna1.png", "/exploreKlarna2.png"]}
          imgAlt="Download the App & Explore more!"
          imgblurDataURL={BLUR_URL}
          imgWidth={193}
          imgHeight={369}
        ></ImageSlider>
        ) : (
          ""
      )}
    </div>
  )
}


