

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import DownloadApps from "../DownloadApps-klarna/DownloadApps";
import style from "./style.module.css";
import {
  APP_LINK_APPLE,
  APP_LINK_GOOGLE,
  blurDataURL,
} from "@/constants/constants";
import useTranslation from "next-translate/useTranslation";
import AppDownload from "@/marketingScreens/GeneralDownload/AppDownload";

function OfferPage({data}) {
  const { t } = useTranslation();
  const moment = require('moment');
  return (
    <div>
{data == "" ? (
                        <AppDownload/>
                      ) : 
      <section className="img_text_banner_box">
        <div className="col_full">
          <div className="img_text_box_wrapper exciting_offer_wrap">
            <div class="text_box_wrap right">
              <div class="img_text_box_inner m_switcher">
                <div class="text_box_content justify_content_center m_pt_15 m_pb_15">
                  <div class="text_box_content_inner m_pr_0 w_100pc max_w_100pc">                    
                    <div className="exciting_offer_block">                 
                      <div className="exciting_offer_wrap">
                        <span className={`${"d_inline_block"} ${style.refer_earn_block}`}>
                          <p>{t("common:Downloadinckd")}</p>
                        </span>                      
                        <div className="exciting_offer_price">
                          <h2 className="title_exciting_price">{t("common:currency")} {data.amount}</h2>
                        </div>
                        <div className="exciting_offer_coupon">
                          <span>{t("common:Usecode")}</span>
                          <div className="exciting_offer_coupon_code">
                            {data.referral_code}
                          </div>
                          {/* <span className="exciting_offer_coupon_msg">{t("common:Voucherends")}: {moment(data.expiry).format('DD-MM-YYYY')}</span> */}
                        </div>
                        {/* <div class="exciting_offer_social">
                          <ul>
                            <li class="exciting_offer_social_title">{t("common:Joinus")}</li>
                            <li>
                              <a target="_blank" href="https://www.instagram.com/inckd_com/">
                                <img src="/insta-coupon.svg" alt="Instagram" />
                                <span>Instagram</span>
                              </a>
                            </li>
                            <li>
                              <a target="_blank" href="https://www.facebook.com/inckdcom/">
                                <img src="/facebook-coupon.svg" alt="Facebook" />
                                <span>Facebook</span>
                              </a>
                            </li>
                          </ul>
                        </div> */}
                        <div class="text_box_content_inner w_100pc exciting_offer_download">
                          <h5>
                            <span>{t("common:OfferDownload.Enterthiscode")}
                            <span class="textBlock">{t("common:OfferDownload.YourVoucher")}</span>
                            </span>
                          </h5>
                          <ul class="download_app w_100pc mt_0">
                          <li>
                            <Link href={APP_LINK_APPLE} target="_blank">                              
                              <Image
                                priority
                                src="/app-store-new.svg"
                                alt="App store"
                                width={134}
                                height={41}
                                placeholder="blur"
                                blurDataURL={blurDataURL}
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
                                blurDataURL={blurDataURL}
                                className="custom_download_icons"
                              />
                            </Link>
                          </li>
                          </ul>
                        </div>
                      </div> 
                    </div>                         
                  </div>
                </div>
                <div class="img_box_wrap custom_download_shadow desk_no_shadow">
                  <Image
                    priority
                    src="/pexels-ozan-çulha-15020584.png"
                    alt="Download the inckd app to get a voucher of"
                    width={612}
                    height={752}
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    layout="responsive"
                    className="mob_hidden"
                  />
                  <Image
                    priority
                    src="/pexels-ozan-çulha-15020584-m.png"
                    alt="Download the inckd app to get a voucher of"
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
          <DownloadApps title={t("common:downloadApp")} subTitle={t("common:downloadApp-Sub1")}  bgColor='block_bg_white'/>

        </div>

      </section>
       } 
    </div>
  )
}
export default OfferPage

