import Link from "next/link";
import Image from "next/image";

import useAppStoreLink from "@/hooks/useAppStoreLink";
import { useQrModal } from '@/context/ModalContext';

import useTranslation from "next-translate/useTranslation";

import { APP_LINK_APPLE, APP_LINK_GOOGLE, BLUR_URL } from "@/constants/index";

import style from "./style.module.css";

function KlarnaPage() {
  const { t } = useTranslation();
  const { appStoreLink, imageSrc } = useAppStoreLink();
  const { openModal } = useQrModal();

  const listingItems =[
    {
      title: t("common:klarnaPage.heading1"),
      content:
      t("common:klarnaPage.Text1"),
    },
    {
      title:  t("common:klarnaPage.heading2"),
      content:
      t("common:klarnaPage.Text2"),
    },

    {
      title: t("common:klarnaPage.heading3"),
      content:
      t("common:klarnaPage.Text3"),
    },
    {
      title: t("common:klarnaPage.heading4"),
      content:
      t("common:klarnaPage.Text4"),
    },
  ];
  
  return (
    <>
      <section className="full_block_banner">
        <div class="row g-0">
          <div class="col-md-12">
            <div className="banner_block banner_mob_fit">
              <div className="banner_col m_min_h_inherit">
                <div className="banner_img_wrap position_relative">
                  <Image
                    src="/klarnaBanner.png"
                    alt={`${t("common:klarnaPage.bannerTitle1")} ${t("common:klarnaPage.bannerTitle1-Sub")}`}
                    fill
                    placeholder="blur"
                    blurDataURL={BLUR_URL}
                    className="object_fit_cover object_center_top position_relative mob_hidden"
                  />
                  <Image
                    src="/klarnaBanner_mob.png"
                    alt="Big Ink.Tiny Payments."
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={BLUR_URL}
                    fill
                    className="object_fit_cover object_center_t desk_hidden"
                  />
                </div>
                <div className="banner_caption position_absolute h_100pc">
                  <div className="d_inline_block">
                    <div className="klarna_badge mb_8 m_mb_15">
                      <Image
                        src="/klarna_badge_new.svg"
                        alt="klarna"
                        width={95}
                        height={40}
                        loading="eager"
                      />
                    </div>

                    <div className="banner_content">
                      <h1
                        className="color_white custom_fs_60 fw_800 custom_fs_m_60 letter_spacing_024 mt_0 m_max_100"
                      >
                        <span>
                          {" "}
                          {t("common:klarnaMarketingScreen.bannerTitle1")}
                            <span class="textBlock">
                              {t("common:klarnaMarketingScreen.bannerTitle1-Sub")}
                            </span>
                        </span>
                      </h1>

                      <p
                        className="color_white mt_10 mb_40 m_mb_30 m_max_100"
                      >
                        {t("common:klarnaPage.downloadKlarna")}
                      </p>

                      <button
                        onClick={openModal}
                        className="button_primary button_primary_white mob_hidden"
                      >
                         {t("common:getApp")}      
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
      </section>

      <section className="container_full pt_40 pb_40 m_pb_20"> 
        <div className="row">
          <div className="col-md-12 klarna_download_payment_col">
            <div className="position_relative w_100pc h_100pc">
              <div className="d_flex flex_direction_column justify_space_between h_100pc">
                  <div className="d_inline_block w_100pc">
                    <div className="d_inline_block w_100pc text_center m_text_left mb_40 m_mb_15">
                      <h2 className="color_gray_550 custom_fs_60 custom_fs_m_32 fw_900 position_relative mb_0">
                          <span className="position_relative mob_hidden">
                           {t("common:klarnaPage.MainTitle2")}</span>  

                           <span className="position_relative desk_hidden">
                          <span className="position_relative d_block fw_300 text_fs_m_14 text_transform_upper">YOU CHOOSE</span>
                           {t("common:klarnaPage.howTopay")}</span>  
                           
                      </h2>
                    </div>
                    <div className="klarna_pay_opt_grid">
                      <div className="klarna_pay_opt_items pl_0">
                        <span className="klarna_pay_opt_badge">
                          <Image
                            src="/klarna-donload-badge-new.svg"
                            alt="klarna"
                            width={50}
                            height={21}                          
                          />
                          <span className="klarna_pay_opt_label">
                            {t("common:klarnaPage.tag1")}
                          </span>
                        </span>
                        <h4 className="color_gray_550 custom_fs_24 custom_fs_m_22 fw_800 mt_15 mb_0 m_mt_15">
                          {t("common:klarnaPage.optionTitle-1")}
                        </h4>
                        <p className="custom_fs_18 color_gray_550 fw_400 custom_fs_m_14 mb_0 mt_8">
                          {t("common:klarnaPage.optionContent-1")}
                        </p>
                      </div>

                      <div className="klarna_pay_opt_items pl_0">
                        <span className="klarna_pay_opt_badge">
                          <Image
                            src="/klarna-donload-badge-new.svg"
                            alt="klarna"
                            width={50}
                            height={21}                      
                          />
                          <span className="klarna_pay_opt_label">
                            {t("common:klarnaPage.tag2")}
                          </span>
                        </span>
                        <h4 className="color_gray_550 custom_fs_24 custom_fs_m_22 fw_800 mt_15 mb_0 m_mt_15">
                          {t("common:klarnaPage.optionTitle-2")}
                        </h4>
                        <p className="custom_fs_18 color_gray_550 fw_400 custom_fs_m_14 mb_0 mt_8">
                          {t("common:klarnaPage.optionContent-2")}
                        </p>
                      </div>

                      <div className="klarna_pay_opt_items pl_0">
                        <span className="klarna_pay_opt_badge">
                          <Image
                            src="/klarna-donload-badge-new.svg"
                            alt="klarna"
                            width={50}
                            height={21}                      
                          />
                          <span className="klarna_pay_opt_label">
                            {t("common:klarnaPage.tag3")}
                          </span>
                        </span>
                        <h4 className="color_gray_550 custom_fs_24 custom_fs_m_22 fw_800 mt_15 mb_0 m_mt_15">
                          {t("common:klarnaPage.optionTitle-3")}
                        </h4>
                        <p className="custom_fs_18 color_gray_550 fw_400 custom_fs_m_14 mb_0 mt_8">
                          {t("common:klarnaPage.optionContent-3")}
                        </p>
                      </div>

                      <div className="klarna_pay_opt_items pl_0">
                        <span className="klarna_pay_opt_badge">
                          <Image
                            src="/klarna-donload-badge-new.svg"
                            alt="klarna"
                            width={50}
                            height={21}                      
                          />
                          <span className="klarna_pay_opt_label">
                            {t("common:klarnaPage.tag4")}
                          </span>
                        </span>
                        <h4 className="color_gray_550 custom_fs_24 custom_fs_m_22 fw_800 mt_15 mb_0 m_mt_15">
                          {t("common:klarnaPage.optionTitle-4")}
                        </h4>
                        <p className="custom_fs_18 color_gray_550 fw_400 custom_fs_m_14 mb_0 mt_8">
                          {t("common:klarnaPage.optionContent-4")}
                        </p>
                      </div>
                    </div>
                  </div>
                 
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default KlarnaPage