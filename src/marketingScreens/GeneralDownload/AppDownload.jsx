import Link from "next/link";
import Image from 'next/image'

import useWindowResize from "@/hooks/useWindowSize";

import useTranslation from "next-translate/useTranslation";
import ImageSlider from "@/components/slider/ImageSlider";

import {
  APP_LINK_APPLE,
  APP_LINK_GOOGLE,
  BLUR_URL,
} from "@/constants/constants";

function Appdownload() {
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
                      <span>{t("common:GeneralAppDownload.Explore the Features")}</span>
                      </h2>
                    </li>
                    <li class="download_app_title mb_10">
                      {t("common:download-app-on")}
                    </li>
                    <li>
                      <Link href={APP_LINK_APPLE} target="_blank">                              
                        <Image
                          priority
                          src="/app-store-new.svg"
                          alt="App store"
                          width={134}
                          height={41}
                          placeholder="blur"
                          blurDataURL={BLUR_URL}
                          className="custom_download_icons"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href={APP_LINK_GOOGLE} target="_blank">
                        <Image
                          priority
                          src="/g-play-new.svg"
                          alt="Play store"
                          width={134}
                          height={41}
                          placeholder="blur"
                          blurDataURL={BLUR_URL}
                          className="custom_download_icons"
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {!isMobileView ? (
                <div className="img_box_wrap block_bg_orange">
                  <ul className="app_download_img_list mt_mb_80 after_none justify_content_left text_center align_self_center mr_0 ml_15_pc">
                    <li>
                      <Image
                        src="/app_download.png"
                        width={384}
                        height={390}
                        priority
                        placeholder="blur"
                        blurDataURL={BLUR_URL}
                        alt="Explore the Features in the Mobile App"
                      />
                    </li>
                    <li>
                    <Image
                        src="/app_download.png"
                        width={384}
                        height={390}
                        priority
                        placeholder="blur"
                        blurDataURL={BLUR_URL}
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
                  imgblurDataURL={BLUR_URL}
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
export default Appdownload

