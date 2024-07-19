import Link from "next/link";
import Image from 'next/image'
import Head from "next/head";

import useAppStoreLink from "@/hooks/useAppStoreLink";
import { useQrModal } from '@/context/ModalContext';

import useTranslation from "next-translate/useTranslation";
import ImageSlider from "@/components/slider/ImageSlider";

import { APP_LINK_APPLE, APP_LINK_GOOGLE, BLUR_URL } from "@/constants/index";

function Appdownload() {
  const { t } = useTranslation();
  const { appStoreLink, imageSrc } = useAppStoreLink();
  const { openModal } = useQrModal();
  return (
    <>
         <Head>
         <title>{t("common:campiagnPages.generalDownload.title")}</title>
        <meta
          name="description"
          content={t("common:campiagnPages.generalDownload.description")}
        />
        <meta name="keywords" content={t("common:campiagnPages.generalDownload.keyword")} />
      </Head>

      <section className="full_block_banner tab_orie_portrait">
        <div class="row g-0 h_100pc">
          <div class="col-md-5 offset-md-right-1">
            <div className="banner_block">
              <div className="banner_col m_min_h_inherit pt_80 pb_80 pl_60 m_pl_0 m_pt_55 m_pb_40"> 
                <div className="w_100pc h_100pc d_flex flex_direction_column justify_content_center m_pr_15 m_pl_15 m_pt_40">
                  <h1 className="color_gray_550 custom_fs_60 letter_spacing_024 custom_fs_m_40 letter_spacing_m_016 fw_800 mb_40 m_mb_20 d_max_400 m_max_w_340">
                    <span>{t("common:GeneralAppDownload.Explore the Features")}</span>
                  </h1>
                  <p className="custom_fs_20 lh_30 fw_600 text_fs_m_14 mb_10">
                    {t("common:download-app-on")}
                  </p>
                  <button
                    onClick={openModal}
                    className="button_primary align_self mob_hidden"
                  >
                    {t("common:download_app")}
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
          <div class="col-md-6">
            <div className="banner_block">
              <div className="banner_col min_h_100_pc m_h_inherit min_h_reset">
                <div className="position_relative w_100pc h_100pc m_min_h_inherit text_center align_content pt_80 m_pt_40 block_bg_yellow">
                  <ul className="mobile_app_list pr_60 pl_40 m_pl_15 m_pr_15">                    
                    <li className="align_item_end justify_content_end m_justify_content_center">
                      <Image
                        priority
                        src="/download_img_01.png"
                        alt={t("common:inckdMobile")}
                        width={287}
                        height={569}
                        blurDataURL={BLUR_URL}
                        placeholder="blur"
                        className="object_position_bottom m_object_position_center w_50pc h_auto pr_25 m_pr_10 pb_90 m_pb_40"
                      />                     
                      <Image
                        priority
                        src="/download_img_02.png"
                        alt={t("common:inckdMobile")}
                        width={278}
                        height={550}
                        blurDataURL={BLUR_URL}
                        placeholder="blur"
                        className="object_position_bottom w_50pc h_auto pl_25 m_pl_10"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Appdownload

