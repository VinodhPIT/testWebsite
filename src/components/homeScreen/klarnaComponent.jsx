import React from 'react'
import Image from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from 'next/router'
import {
  BLUR_URL,
} from "@/constants/constants";
export default function KlarnaComponent() {
const { t } = useTranslation();
const router = useRouter()
  return (
    <div className="img_text_box_wrapper block_bg_pink pb_40 m_pb_0">
        <div className="text_box_wrap left container custom_left_img_new">
          <div className="img_text_box_inner flex_direction_column">
            <div className="row m_switcher_row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="img_box_wrap block_bg_gradient_1 mb_30 m_mb_25 m_mt_25">
                    <div className="klarna_bg">
                        <Image src="/klarna-white.svg" alt="klarna" width={92} height={21} loading="eager" />
                    </div>
                    <div className="box_text_img_over color_pink">
                        <h2 className="txt_mob_fs50">
                            <span>{t("common:homePage.Pay all at once")}</span>{" "}
                            <span className="textBlock">
                            {t("common:homePage.Never again")}
                            </span>
                        </h2>
                    </div>              
                    <Image
                        priority={true}
                        src="/rock-staar-ccHVqD5P-8g-unsplash 1-n.png"
                        alt={t("common:homePage.TattooFinancing")}
                        width={572}
                        height={389}
                        placeholder="blur"
                        blurDataURL={BLUR_URL}
                        layout="responsive"
                        className="object_position_left"
                    />  
                </div>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 offset-lg-1 offset-md-1">
                <div className="text_box_content justify_content_start m_min_h_reset m_pt_0 m_pb_35">
                  <div className="text_box_content_inner m_pr_0 pr_0">
                    <h2>{t("common:homePage.TattooFinancing")}
                    </h2>              
                    <p className="m_mt_15 m_mb_20">{t("common:homePage.Finance your ink")}</p>
                    <Link
                      href={`/${router.locale}/klarna`}
                      className="btn_secondary btn_cutom_new btn_img"
                    >
                      {t("common:learnmore")}
                      <Image
                        src="/alt-arrow-right-white.svg"
                        alt="arrow"
                        className="ml-8 mt-2"
                        width={20}
                        height={20}
                        loading="eager"
                      />
                    </Link>                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
