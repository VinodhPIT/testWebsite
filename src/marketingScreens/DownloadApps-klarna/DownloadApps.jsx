import React from 'react'
import Link from "next/link";
import Image from "next/image";
import ImageSlider from "@/components/slider/ImageSlider";
import useWindowResize from "@/hooks/useWindowSize";
import { blurDataURL ,APP_LINK_GOOGLE ,APP_LINK_APPLE} from "@/constants/constants";


export default function DownloadApps ({title ,subTitle ,bgColor}) {
  const { isMobileView } = useWindowResize();
  return (
    <div class={`text_box_wrap right app_download_box_wrap mb_0 block_bg_pink landing_app_download_wrap ${bgColor}`}>
        <div class="img_text_box_inner container"> 
          <div class="text_box_content justify_content_start pl_40 w_50pc m_w_100pc m_pl_0 m_pr_0 m_pt_25">
              <div class="text_box_content_inner m_pr_0">
                <ul class="download_app max_w_100pc m_text_left">
                  <li class="download_app_title m_mb_30">
                    <h6 className="m_mxw_290 m_text_left">
                      <span className="m_dis_inline">{title}
                      </span>
                      <span className="textBlock m_dis_inline">{subTitle}
                      </span>
                    </h6>
                  </li>
                  <li className="mr_xs_0 mb_xs_5">
                    <Link href={APP_LINK_APPLE} target="_blank">
                      <img src="/app-store-new.svg" alt="" />
                    </Link>
                  </li>
                  <li className="mr_xs_0">
                    <Link href={APP_LINK_GOOGLE} target="_blank">
                      <img src="/g-play-new.svg" alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          {!isMobileView ? (
            <div class="img_box_wrap w_50pc m_w_100pc">
              <ul class="app_download_img_list justify_content_start slider_resize d_slid_resize mr_0 pl_0 landing_app_download">
                <li>
                  <Image
                    src="/landing-download-app-new.png"
                    width={408}
                    height={522}
                    alt="Download the App & Explore more!"
                    priority
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    className="m_max_218"
                  />
                </li>
                <li>
                  <Image
                    src="/landing-download-app-new.png"
                    width={408}
                    height={522}
                    alt="Download the App & Explore more!"
                    priority
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    className="m_max_218"
                  />
                </li>
                <li>
                  <Image
                    src="/landing-download-app-new.png"
                    width={408}
                    height={522}
                    alt="Download the App & Explore more!"
                    priority
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    className="m_max_218"
                  />
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}          
        </div>
        <div className="img_box_wrap pb_0">
          {isMobileView ? (
            <ImageSlider
              imagePaths={["/landing-download-app-new.png", "/landing-download-app-new.png", "/landing-download-app-new.png"]}
              imgAlt="Download the App & Explore more!"
              imgblurDataURL={blurDataURL}
              imgWidth={408}
              imgHeight={522}
            ></ImageSlider>
          ) : (
            ""
          )}
        </div>
    </div>



  )
}


