import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  APP_LINK_APPLE,
  APP_LINK_GOOGLE,
  BLUR_URL,
} from "@/constants/constants";
import ImageSlider from "@/components/slider/ImageSlider";
import useWindowResize from "@/hooks/useWindowSize";
import useTranslation from "next-translate/useTranslation";
import { getLocaleProps } from "@/utils/getlocale";
import { useGlobalState } from "@/context/Context";
import { useRouter } from 'next/router'

export default function ExploreApps() {
    const { isMobileView } = useWindowResize();
    const { getLocale } = useGlobalState();
    const router = useRouter()  
    const { t } = useTranslation();
  return (
    <div class="text_box_wrap right app_download_box_wrap mb_0 block_bg_white">
      <div class="img_text_box_inner container pt_80 m_md_pt_40 m_pt_20 pb_80 m_md_pb_40 m_pb_20 flex_direction_column app_download_custom_new">
        <div className="row">
          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12 col-xs-12 offset-md-right-1">
            <div class="text_box_content justify_content_start pl_0 m_pt_0 m_pb_20 m_pr_0">
              <div class="text_box_content_inner w_100pc m_pr_0">
                <ul class="download_app ml_0 w_100pc max_w_100pc">
                  <li class="download_app_title">
                    <h6>
                      <span>{t("common:downloadApp")}</span>
                      <span className="textBlock">
                      {t("common:downloadApp-Sub1")} 
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
            <div className="col-xl-7 col-lg-6 col-md-5 col-sm-12 col-xs-12">
              <div class="img_box_wrap">
                <ul class="app_download_img_list after_none justify_content_start m_0">
                  <li>
                    <Image
                      src="/Home1.png"
                      width={218}
                      height={445}
                      alt={`${t("common:downloadApp")}${t("common:downloadApp-Sub1")}`}
                      className="b_radius_0"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={BLUR_URL}                      
                    />                    
                  </li>
                  <li>
                    <Image                   
                      src="/Home2.png"
                      width={218}
                      height={445}
                      alt={`${t("common:downloadApp")}${t("common:downloadApp-Sub1")}`}
                      className="b_radius_0"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={BLUR_URL}                      
                    />
                  </li>
                  <li>
                  <Image
                      src="/Home3.png"
                      width={218}
                      height={445}
                      alt={`${t("common:downloadApp")}${t("common:downloadApp-Sub1")}`}
                      className="b_radius_0"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={BLUR_URL}                                            
                    />
                  </li>
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
          imagePaths={[
            "/Home1.png",
            "/Home2.png",
            "/Home3.png",
          ]}
          imgAlt={`${t("common:downloadApp")}${t("common:downloadApp-Sub1")}`}
          imgblurDataURL={BLUR_URL}
          imgWidth={218}
          imgHeight={445}
        ></ImageSlider>
      ) : (
        ""
      )}
    </div>
  )
}
