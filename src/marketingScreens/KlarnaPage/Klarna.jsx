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
function KlarnaPage() {
  const { t } = useTranslation();

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
    <div>
      <section className="img_text_banner_box">
        <div className="col_full">
          <div className="img_text_box_wrapper exciting_offer_wrap">
            <div class="text_box_wrap right">
              <div class="img_text_box_inner custom_two_col_banner m_switcher">
                <div class="text_box_content justify_content_center m_min_h_reset">
                  <div class="text_box_content_inner m_pr_0 w_100pc max_w_100pc">
                    <div className="tiny_payment_block pr_10_pc m_pr_0">
                      <span
                        className={`${"d_inline_block"} ${style.btn_klarna}`}
                      >
                        <Image
                          src="/klarna.svg"
                          alt="klarna"
                          width={92}
                          height={21}
                          loading="eager"
                          placeholder="blur"
                          blurDataURL={blurDataURL}
                        />
                      </span>

                      <h1 className="color_gray_550 heading_h1 custom_fs_63 custom_fs_50 txt_mob_fs45 mt_25">
                        <span>
                          {" "}
                          {t("common:klarnaMarketingScreen.bannerTitle1")}
                          <span class="textBlock">
                            {t("common:klarnaMarketingScreen.bannerTitle1-Sub")}
                          </span>
                        </span>
                      </h1>

                      <div class="text_box_content_inner w_100pc pr_0 dictionary_explore">
                        <ul class="download_app ml_0 w_100pc max_w_100pc mt_50 m_mt_35 text_left d_inline_block">
                          <li class="download_app_title mb_10">
                            {t("common:Download the inckd")}
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
                <div class="img_box_wrap custom_download_shadow no_shadow_before">
                  <Image
                    priority
                    src="/klarnaBanner.png"
                    alt={`${t("common:klarnaPage.bannerTitle1")} ${t("common:klarnaPage.bannerTitle1-Sub")}`}
                    fill
                    objectFit="cover"
                    objectPosition="center"
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    className="mob_hidden"
                  />
                  <Image
                    priority
                    src="/klarnaBanner_mob.png"
                    alt="Big Ink.Tiny Payments."
                    fill
                    objectFit="cover"
                    objectPosition="center"
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    className="desk_hidden"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="img_text_box_wrapper">
            <div className={"text_box_wrap right pb_75 pt_75 m_pt_30 m_pb_40"}>
              <div className="container">                
                <h3 className="color_gray_550 text_left heading_h2 pb_50 pt_0 m_pb_30 m_text_Black">{t("common:klarnaPage.MainTitle2")}</h3>
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
                        <p className="custom_fs_18 color_gray_550 mb_0">
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
export default KlarnaPage