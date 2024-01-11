import Link from "next/link";
import Image from "next/image";
import DownloadApps from "../DownloadApps-klarna/DownloadApps";
import style from "./style.module.css";
import useTranslation from "next-translate/useTranslation";
import {
  APP_LINK_APPLE,
  APP_LINK_GOOGLE,
  blurDataURL,
} from "@/constants/constants";
function Klarnadownload() {
  const { t } = useTranslation();

  const listingItems =[
    {
      title: t("common:KlarnaMarketing.title1"),
      content:
      t("common:KlarnaMarketing.content1"),
    },
    {
      title:  t("common:KlarnaMarketing.title2"),
      content:
      t("common:KlarnaMarketing.content2"),
    },

    {
      title: t("common:KlarnaMarketing.title3"),
      content:
      t("common:KlarnaMarketing.content3"),
    },
    {
      title: t("common:KlarnaMarketing.title4"),
      content:
      t("common:KlarnaMarketing.content4"),
    },
  ];

  return (
    <div>
      <section className="img_text_banner_box">
        <div className="col_full">
          <div className="img_text_box_wrapper exciting_offer_wrap">
            <div class="text_box_wrap right">
              <div class="img_text_box_inner m_switcher">
                <div class="text_box_content justify_content_center">
                  <div class="text_box_content_inner m_pr_0 w_100pc max_w_100pc">
                    <div className="tiny_payment_block">
                      <span className={`${"d_inline_block"} ${style.btn_klarna}`}>
                        <img src="/klarna.svg" alt="klarna"/>            
                      </span>
                      <h1 className="color_gray_550 heading_h1 custom_fs_63 custom_fs_50 txt_mob_fs45 mt_25">                        
                        <span>Big Ink. 
                          <span class="textBlock">Tiny Payments.</span>
                        </span>
                      </h1>
                      <div class="text_box_content_inner w_100pc pr_0 dictionary_explore">
                        <ul class="download_app ml_0 w_100pc max_w_100pc mt_25 text_left d_inline_block">                         
                          <li class="download_app_title">
                            <h5>
                              <span>{"Download the inckd.app"} 
                                <span class="textBlock">{"now - It's free! "} </span>
                              </span>
                            </h5>
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
                  </div>
                </div>
                <div class="img_box_wrap custom_download_shadow">
                  <Image
                    priority
                    src="/rock-staar-ccHVqD5P-8g-unsplash 1-n.png"
                    alt="Big Ink. Tiny Payments."
                    width={679}
                    height={630}
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    layout="responsive"
                    className="mob_hidden"
                  />
                  <Image
                    priority
                    src="/rock-staar-ccHVqD5P-8g-unsplash 1-n-m.png"
                    alt="Big Ink. Tiny Payments."
                    width={375}
                    height={220}
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    layout="responsive"
                    className="desk_hidden"
                  /> 
                </div>
              </div>
            </div>
          </div>


          <div className="img_text_box_wrapper">
            <div className={"text_box_wrap right pb_75 pt_75 m_pt_30 m_pb_40"}>
              <div className="container">                
                <h3 className="color_gray_550 text_left heading_h2 pb_50 pt_0 m_pb_30 m_text_Black">You choose how you want to pay!</h3>
                <div className={style.listGrid}>
                  {listingItems.map((el, index) => {
                    return (
                      <div
                        className={`item ${
                          index < listingItems.length - 2
                            ? style.with_margin
                            : style.grid_mobileView
                        }`}
                        key={index}
                      >
                        <h4 className="color_gray_550 custom_fs_26 fw_700 custom_fs_m_24 mb_15">
                          {el.title}
                        </h4>
                        <p className="custom_fs_16 custom_fs_m_16 color_gray_550 mb_0">
                          {el.content}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <DownloadApps title="Download the" subTitle="App & Explore more!" bgColor="block_bg_pink"  /> */}
    </div>
  )
}
export default Klarnadownload