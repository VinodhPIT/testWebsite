import React from 'react'
import Image from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from 'next/router'
import {
    APP_LINK_APPLE,
    APP_LINK_GOOGLE,
    blurDataURL,
  } from "@/constants/constants";

export default function TattooDictonary() {
    const { t } = useTranslation();
    const router = useRouter()
  return (
    <div className="img_text_box_wrapper">
      <div class="text_box_wrap right block_bg_white container custom_right_img_new">
        <div class="img_text_box_inner m_switcher flex_direction_column">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 offset-lg-right-1 offset-md-right-0 m_order_2">
              <div class="text_box_content justify_content_start m_min_h_reset pl_0 m_pt_0 m_pb_35">
                <div class="text_box_content_inner pr_0">
                  <h2>
                    {" "}
                    <span>{t("common:homePage.Tattoo")}</span>{" "}
                    <span className="textBlock">
                    {t("common:homePage.Dictionary")}
                    </span>
                    </h2>
                    <p className="m_mt_15 m_mb_20">{t("common:homePage.TattooDictionaryContent")}</p>
                  <Link
                    href={`/${router.locale}/explore/tattoo-artists`}
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
            <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 m_order_1">
              <div class="img_box_wrap block_bg_gradient_1 mb_80 m_mb_25 m_mt_25">                
                <Image
                  priority={true}
                  src="/tattoo-Dictionary-New_01.png"
                  alt={`${t("common:homePage.Tattoo")} ${t("common:homePage.Dictionary")}`}
                  width={572} 
                  height={389}
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
