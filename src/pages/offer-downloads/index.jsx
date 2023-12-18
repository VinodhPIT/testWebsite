import Link from "next/link";
import Image from "next/image";
import DownloadApps from "@/components/DownloadApps-offer/DownloadApps";
import style from "./style.module.css";
import {
  APP_LINK_APPLE,
  APP_LINK_GOOGLE,
  blurDataURL,
} from "@/constants/constants";
function Offerdownloads() {
  return (
    <div>
      <section className="img_text_banner_box">
        <div className="col_full">
          <div className="img_text_box_wrapper exciting_offer_wrap">
            <div class="text_box_wrap right">
              <div class="img_text_box_inner m_switcher">
                <div class="text_box_content justify_content_center">
                  <div class="text_box_content_inner m_pr_0 w_100pc max_w_100pc">
                    <div className="exciting_offer_block">
                      <span className={`${"d_inline_block"} ${style.refer_earn_block}`}>
                        <p>Refer and Earn</p>
                      </span>
                      <h3 className="color_gray_550">Get exciting offers</h3>
                      <div className="exciting_offer_price">
                        <h2 className="title_exciting_price">CHF 300</h2>
                      </div>
                      <p className="pt_0 pb_0 mb_0 mt_15">off on your next tattoo</p>
                    </div>                            
                  </div>
                </div>
                <div class="img_box_wrap">
                  <Image
                  priority
                  src="/rock-staar-ccHVqD5P-8g-unsplash 1.png"
                  alt="Picture of the author"
                  width={673}
                  height={610}
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  layout="responsive"
                  />                      
                </div>
              </div>
            </div>
          </div>
          <DownloadApps title="Download the" subTitle="App & Explore more!" />
        </div>
      </section>
      
    </div>
  )
}
export default Offerdownloads