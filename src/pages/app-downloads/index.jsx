import Link from "next/link";
import Image from "next/image";
import DownloadApps from "@/components/DownloadApps-offer/DownloadApps";
import style from "./style.module.css";
import useTranslation from "next-translate/useTranslation";
import ImageSwiper from "@/components/slider/ImageSwiper";
import ImageSlider from "@/components/slider/ImageSlider";
import useWindowResize from "@/hooks/useWindowSize";
import {
  APP_LINK_APPLE,
  APP_LINK_GOOGLE,
  blurDataURL,
} from "@/constants/constants";
function Appdownloads() {
  const { isMobileView } = useWindowResize();
  const { t } = useTranslation();

  return (
    <div>
      <section className="img_text_banner_box">
        <div className="col_full">       
          <div className="text_box_wrap left app_download_box_wrap app_download_page mb_0 dictionary_app">
            <div className="img_text_box_inner">
              <div class="text_box_content justify_content_start">
                <div class="text_box_content_inner w_100pc pr_0 dictionary_explore">
                  <ul class="download_app ml_0 w_100pc max_w_100pc m_pb_50 text_left">
                    <li class="download_app_title">
                      <h2>
                        <span>Explore the Features in the Mobile App</span>
                      </h2>
                    </li>
                    <li class="download_app_title">
                      <h5>Download our app from</h5>
                    </li>
                    <li>
                      <Link href={APP_LINK_APPLE} target="_blank">
                        <img src="/app-store-new.svg" alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link href={APP_LINK_GOOGLE} target="_blank">
                        <img src="/g-play-new.svg" alt="" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {!isMobileView ? (
                <div className="img_box_wrap block_bg_orange">
                  <ul className="app_download_img_list mt_mb_80 after_none justify_content_left text_center align_self_center mr_0 ml_15_pc">
                    <li>
                      <img
                        src="/app_download.png"
                        alt="Explore the Features in the Mobile App"
                      />
                    </li>
                    <li>
                      <img
                        src="/app_download.png"
                        alt="Explore the Features in the Mobile App"
                      />
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              
            </div>
            <div className="img_box_wrap">
              {isMobileView ? (
                <ImageSlider
                imagePaths={[
                  "/app_download.png",
                  "/app_download.png",
                  
                ]}
                  imgAlt="Explore the Features in the Mobile App"
                  imgblurDataURL={blurDataURL}
                  imgWidth={277}
                  imgHeight={560}
                ></ImageSlider>
              ) : (
                ""
              )}
            </div>
          </div>







        </div>
      </section>
      
    </div>
  )
}
export default Appdownloads

