import React from 'react'
import Image from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from 'next/router'
import {
    blurDataURL,
  } from "@/constants/constants";
export default function TattooArtistComponent () {
const { t } = useTranslation();
const router = useRouter()
  return (
    <div className="img_text_box_wrapper">
      <div class="text_box_wrap right block_bg_white container custom_right_img_new">
        <div class="img_text_box_inner m_switcher flex_direction_column">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 offset-lg-right-1 offset-md-right-0">
              <div class="text_box_content justify_content_start pl_0 pt_30 pb_100 m_pr_0 m_min_h_reset m_pt_10 m_pb_35">
                <div class="text_box_content_inner m_pr_0 pr_0">
                  <h2>
                    <span>{t("common:homePage.TattooArtist")}</span>
                  </h2>
                  <p className="mt_20 m_mt_15 m_mb_20">{t("common:homePage.ArtistContent")}</p>
                  <Link
                    href={`/${router.locale}/for-tattoo-artists`}
                    class="btn_secondary btn_cutom_new btn_img"
                  >
                  {t("common:learnmore")}
                    <Image
                      src="/alt-arrow-right-white.svg"
                      alt="arrow"
                      class="ml-8 mt-2"
                      width={16}
                      height={16}
                      priority
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12">
              <div class="img_box_wrap block_bg_gradient_1 justify_content_right mt_30 m_mt_0 m_mb_35">
                <div class="box_text_img_over color_aero_blue_lite">                 
                  <h2 class="txt_mob_fs50 text_right">
                    <span className="small">{t("common:homePage.Areyou")}</span>{" "}
                    <span className="textBlock">
                    {t("common:homePage.AreyouTattoo artist")}
                    </span>
                  </h2>
                </div>
                <Image
                  priority={true}
                  src="/Tattoo-Artist-Business-img.png"
                  alt={t("common:homePage.TattooArtist")}
                  width={474}
                  height={565}
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  layout="responsive"
                  className="object_position_left"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


