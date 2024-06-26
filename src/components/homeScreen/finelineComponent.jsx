import React from 'react'
import Image from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from 'next/router'
import {
  APP_LINK_APPLE,
  APP_LINK_GOOGLE,
  BLUR_URL,
} from "@/constants/constants";
export default function FinelineComponent () {
const { t } = useTranslation();
const router = useRouter()
  return (
    <>
    <div className="img_text_box_wrapper block_bg_white pb_0">
        <div className="text_box_wrap left container custom_left_img_new">
          <div className="img_text_box_inner flex_direction_column">
            <div className="row m_switcher_row">
              <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 m_order_2">
                <div className="img_box_wrap block_bg_gradient_1 mt_60 mb_30 m_mb_25 m_mt_0">
                  <div class="box_text_img_over color_yellow">
                    <h2 class="txt_mob_fs50 color_yellow">
                    <span className="small">{t("common:MyStyleis")}</span>{" "}
                    <span className="textBlock">
                    {t("common:homePage.TypeFinline")}
                    </span>
                  </h2>
                  </div> 
                  <Image
                    priority={true}
                    src="/pexels-ozan-çulha-15020597 45-01.png"
                    alt={`${t("common:MyStyleis")} ${t("common:homePage.TypeFinline")}`}
                    width={474}
                    height={565}
                    placeholder="blur"
                    blurDataURL={BLUR_URL}
                    layout="responsive"
                    className="object_position_left"
                  />  
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 offset-lg-1 offset-md-0 m_order_1">
                <div className="text_box_content justify_content_start m_min_h_reset pb_30 m_pt_30 m_pb_35">
                  <div className="text_box_content_inner m_pr_0 pr_0">
                    <h2>
                      <span>{t("common:homePage.TattooStyles")}</span>
                    </h2>                    
                    <p className="mt_20 m_mt_15 m_mb_20">{t("common:homePage.StylesContent")}</p>
                    <Link
                      href={`/${router.locale}/tattoo-styleguide`}
                      class="btn_secondary btn_cutom_new btn_img"
                    >
                     {t("common:homePage.Check the Styleguide")}
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
            </div>
          </div>
        </div>
      </div>



    </>
  )
}


