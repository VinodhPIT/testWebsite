import React from 'react'
import Link from "next/link";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import useWindowResize from "@/hooks/useWindowSize";
import ImageSlider from "@/components/slider/singleImageSlider";

import { blurDataURL ,APP_LINK_GOOGLE ,APP_LINK_APPLE} from "@/constants/constants";


export default function DownloadApps ({title ,subTitle}) {
  const { isMobileView } = useWindowResize();
  const { t } = useTranslation();

  return (
    <div class={"text_box_wrap right app_download_box_wrap mb_0 block_bg_gray_50 mob_single_slider ${bgColor}"}>
      <div class="img_text_box_inner container pt_80 m_pt_30 pb_80 m_pb_40 flex_direction_column app_download_custom_new">
        <div className="row">
          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12 col-xs-12 offset-lg-right-1">
            <div class="text_box_content p_0">
              <div class="text_box_content_inner w_100pc m_pr_0">
                <ul class="download_app ml_0 w_100pc max_w_100pc m_text_left m_mt_0">
                  <li class="download_app_title m_mb_15">
                    <h6 className="fw_600 custom_fs_34 custom_fs_m_24">
                      <span className="m_dis_inline">{title}
                      </span>
                      <span className="textBlock">{subTitle}
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
          {!isMobileView && (
            <div className="col-xl-7 col-lg-6 col-md-6 col-sm-12 col-xs-12 align_content">
              <div class="img_box_wrap m_pb_25">
                <ul class="app_download_img_list justify_content_end slider_resize d_slid_resize m_0 p_0 d_inline_flex gap_20">
                  <li className="pl_0 no_filter">
                    <Image
                      priority
                      alt={t("common:homePage.Verified tattoo artists")}
                      src="/explore_web_n_01.png"
                      width={189}
                      height={375}
                      blurDataURL={blurDataURL}
                      placeholder="blur"
                      className="obj_cntr_max_h_inh"
                    />
                  </li>
                  <li className="pl_0 no_filter">
                    <Image
                      priority
                      alt={t("common:homePage.Verified tattoo artists")}
                      src="/explore_web_n_02.png"
                      width={189}
                      height={375}
                      blurDataURL={blurDataURL}
                      placeholder="blur"
                      className="obj_cntr_max_h_inh"
                    />
                  </li>
                  <li className="pl_0 no_filter">
                    <Image
                      priority
                      alt={t("common:homePage.Verified tattoo artists")}
                      src="/explore_web_n_03.png"
                      width={189}
                      height={375}
                      blurDataURL={blurDataURL}
                      placeholder="blur"
                      className="obj_cntr_max_h_inh"
                  />
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      {isMobileView && (
        <ImageSlider
          imagePaths={["/explore_web_n_01.png", "/explore_web_n_02.png", "/explore_web_n_03.png"]}
          imgAlt={t("common:downloadApp")}
          imgblurDataURL={blurDataURL}
          imgWidth={242}
          imgHeight={479}
        ></ImageSlider>
        )}
    </div>
  )
}
