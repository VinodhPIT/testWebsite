import React from "react";
import Image from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import {
  blurDataURL,
} from "@/constants/constants";
import useWindowResize from "@/hooks/useWindowSize";


export default function TattooIdea() {
  const { t } = useTranslation();
  const router = useRouter();
  const { isMobileView } = useWindowResize();
  return (
    <div className="img_text_box_wrapper block_bg_cool_aero_blue m_pb_0">
      <div className="text_box_wrap left container custom_left_img_new">
        <div className="img_text_box_inner flex_direction_column">
          <div className="row m_switcher_row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="text_box_content justify_content_start m_min_h_reset m_pt_40 m_pb_0 hidden m_d_block">
                <div className="text_box_content_inner m_pr_0 pr_0">
                  <h2>{t("common:homePage.Share your tattoo idea")}</h2>
                </div>
              </div>
              <div className="img_box_wrap m_mb_25 m_mt_10">
                <Image
                  priority={true}
                  src="/tattooIdeaBG.jpeg"
                  alt={t("common:homePage.TattooFinancing")}
                  width={572}
                  height={389}
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  layout="responsive"
                  className="object_position_left"
                />
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 offset-lg-1 offset-md-1">
              <div className="text_box_content justify_content_start m_min_h_reset m_pt_0 m_pb_35">
                <div className="text_box_content_inner m_pr_0 pr_0">
                  <h2 className="mob_hidden">
                    {t("common:homePage.Share your tattoo idea")}
                  </h2>
                  <p className="mt_20 mb_30 m_mt_15 m_mb_20">Easily submit your tattoo idea once and connect with multiple suited artists. Lean back and receive varied proposals for free, finding your ideal artist match effortlessly.
                  </p>
                  <Link
                    href={ isMobileView ? `/${router.locale}/request-Form` :  `/${router.locale}/createRequest`}
                    className="btn_secondary btn_cutom_new b_radius_16"
                  >
                    Create a tattoo request
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
