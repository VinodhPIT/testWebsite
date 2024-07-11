
import React from "react";
import Link from "next/link";
import Image from "next/image";

import useTranslation from "next-translate/useTranslation";
import DownloadApps from "../DownloadApps-klarna/DownloadApps";
import AppDownload from "@/marketingScreens/GeneralDownload/AppDownload";

import useAppStoreLink from "@/hooks/useAppStoreLink";
import { useQrModal } from '@/context/ModalContext';

import { APP_LINK_APPLE, APP_LINK_GOOGLE, BLUR_URL } from "@/constants/index";

import style from "./style.module.css";


function OfferPage({data}) {
  
  const currency =  data.currency && data.currency !== null ? data.currency : "EUR";
  const { t } = useTranslation();

  const { appStoreLink, imageSrc } = useAppStoreLink();
  const { openModal } = useQrModal();

  return (
    <>
    {data == "" ? (
                        <AppDownload/>
                      ) : 

      <section className="full_block_banner">
        <div class="row g-0">
          <div class="col-md-12">
            <div className="banner_block">
              <div className="banner_col m_min_h_inherit">
                <div className="banner_img_wrap position_relative">
                  <Image
                    src="/download_voucher.png"
                    alt="Download the inckd app to get a voucher of"
                    fill
                    placeholder="blur"
                    blurDataURL={BLUR_URL}
                    className="object_fit_cover object_center_top position_relative mob_hidden"
                  />
                  <Image
                    src="/download_voucher-m.png"
                    alt="Download the inckd app to get a voucher of"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={BLUR_URL}
                    fill
                    className="position_relative object_fit_cover object_center_t desk_hidden"
                  />
                </div>
                <div className="banner_caption position_absolute h_100pc pt_120 pb_60 m_w_100pc m_pb_60 m_align_item_center">
                  <div className="d_inline_block m_w_100pc">  
                    <div className="banner_content">
                      <div className="exciting_offer_block">
                        <div className="exciting_offer_wrap">
                          <h3>{t("common:Downloadinckd")}</h3>                                           
                          <div className="exciting_offer_price">
                            <h2 className="title_exciting_price"> {currency} {data.amount}</h2>
                          </div>
                          <div className="exciting_offer_coupon">
                            <span>{t("common:Usecode")}</span>
                            <div className="exciting_offer_coupon_code">
                              {data.referral_code}
                            </div>
                          </div>
                          <h6>
                            <span>{t("common:OfferDownload.Enterthiscode")}
                            <span class="textBlock">{t("common:OfferDownload.YourVoucher")}</span>
                            </span>
                          </h6>
                          <button
                              onClick={openModal}
                              className="button_primary mob_hidden"
                            >
                              Get our mobile app
                            </button>
                            <Link href={appStoreLink} target="_blank">
                              <Image
                                priority
                                src={imageSrc}
                                alt={
                                  appStoreLink === APP_LINK_APPLE
                                    ? "App store"
                                    : "GooglePlay"
                                }
                                width={134}
                                height={41}
                                placeholder="blur"
                                blurDataURL={BLUR_URL}
                                className="custom_download_icons desk_hidden"
                              />
                            </Link>                          
                        </div> 
                      </div>                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    }

   

    </>
  )
}
export default OfferPage

