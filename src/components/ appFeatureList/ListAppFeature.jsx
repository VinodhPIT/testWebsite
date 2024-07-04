import React from 'react'
import Link from "next/link";
import Image from "next/image";

import useTranslation from "next-translate/useTranslation";

import useAppStoreLink from "@/hooks/useAppStoreLink";

import { useQrModal } from '@/context/ModalContext';

import {APP_LINK_APPLE, BLUR_URL, } from "@/constants/constants";

export default function DownloadApps() {
  const { t } = useTranslation();
  const { appStoreLink, imageSrc } = useAppStoreLink();
  const { openModal } = useQrModal();

  return (
    <section className="container_full pb_40">
      <div className="row g-0">
        <div className="col-md-6 col-sm-12 col-xs-12 offset-md-right-1 m_order_2">
          <div className="position_relative w_100pc h_100pc m_min_h_inherit text_center align_content m_pt_10 block_bg_gray_250">
            <ul className="mobile_app_list">
              <li className="align_item_center justify_content_end">
                <Image
                  priority
                  src="/mob_app_01.png"
                  alt={t("common:homePage.TattooFinancing")}
                  width={277}
                  height={549}
                  blurDataURL={BLUR_URL}
                  placeholder="blur"
                  className="object_position_center mob_hidden"
                />
                <Image
                  priority
                  src="/mob_app_01.png"
                  alt={t("common:homePage.TattooFinancing")}
                  width={122}
                  height={242}
                  blurDataURL={BLUR_URL}
                  placeholder="blur"
                  className="object_position_center desk_hidden"
                />
              </li>
              <li className="align_item_end justify_content_start">
                <Image
                  priority
                  src="/mob_app_02.png"
                  alt={t("common:homePage.TattooFinancing")}
                  width={278}
                  height={448}
                  blurDataURL={BLUR_URL}
                  placeholder="blur"
                  className="object_position_bottom mob_hidden"
                />
                <Image
                  priority
                  src="/mob_app_02.png"
                  alt={t("common:homePage.TattooFinancing")}
                  width={122}
                  height={197}
                  blurDataURL={BLUR_URL}
                  placeholder="blur"
                  className="object_position_bottom desk_hidden"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-5 col-sm-12 col-xs-12 m_order_1">
          <div className="position_relative w_100pc h_100pc m_min_h_inherit">
            <div className="w_100pc h_100pc d_flex flex_direction_column justify_content_center m_pt_40 m_pb_30">
              <h2 className="color_gray_550 custom_fs_38 custom_fs_m_32 fw_900 mb_20 m_mb_15">
                <span className="position_relative">
                  <span className="position_relative d_block custom_fs_16 custom_fs_16 lh_19 fw_300 text_transform_upper">EXPLORE</span>
                  inckd Mobile App</span>
              </h2>
              <div className="d_flex flex_direction_column mb_25 mt_0 m_mb_15">
                <div className="d_flex align_item_center">
                  <Image
                    src="/icon_verified.svg"
                    width={33}
                    height={33}
                    alt={t("common:homePage.Verified tattoo artists")}
                    priority
                    className="m_w_24 m_h_24 mr_15"
                  />
                  <div className="d_flex flex_direction_column">
                    <h4 className="color_gray_550 custom_fs_22 lh_27 custom_fs_m_16 m_lh_20 fw_600 d_flex align_item_center mb_0">
                    {t("common:homePage.Verified tattoo artists")}</h4>
                  </div>
                </div>
              </div>
              <div className="d_flex flex_direction_column mb_25 m_mb_15">
                <div className="d_flex align_item_center">
                  <Image
                    src="/icon_user_friendly.svg"
                    width={33}
                    height={33}
                    alt={t("common:homePage.User-Friendly Interface")}
                    priority
                    className="m_w_24 m_h_24 mr_15"
                  />
                  <div className="d_flex flex_direction_column">
                    <h4 className="color_gray_550 custom_fs_22 lh_27 custom_fs_m_16 m_lh_20 fw_600 d_flex align_item_center mb_0">
                    {t("common:homePage.User-Friendly Interface")}</h4>
                  </div>
                </div>
              </div>
              <div className="d_flex flex_direction_column mb_0">
                <div className="d_flex align_item_center">
                  <Image
                    src="/icon_secure.svg"
                    width={33}
                    height={33}
                    alt={t("common:homePage.secureTransactions")}
                    priority
                    className="m_w_24 m_h_24 mr_15"
                  />
                  <div className="d_flex flex_direction_column">
                    <h4 className="color_gray_550 custom_fs_22 lh_27 custom_fs_m_16 m_lh_20 fw_600 d_flex align_item_center mb_0">
                    {t("common:homePage.secureTransactions")}</h4>
                  </div>
                </div>
              </div>

              <button onClick={openModal} className="button_primary align_self mt_30 mob_hidden">
              {t("common:download_app")}
              </button>
              <Link href={appStoreLink} target="_blank" className="m_mt_25 desk_hidden">
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
                  className="custom_download_icons"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


