import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { useRequestPath } from '@/hooks/useRequestPath';
import useWindowResize from "@/hooks/useWindowSize";

import useTranslation from "next-translate/useTranslation";
import usePath from'@/store/setPath/setPath'

import { blurDataURL } from "@/constants/constants";

export default function TattooIdea() {
  const { t } = useTranslation();
  const router = useRouter();
  const { isMobileView  ,isSmallDevice} = useWindowResize();
  const requestPath = useRequestPath(isSmallDevice);
  const {setPathname} = usePath()


  return (
    <div className="img_text_box_wrapper block_bg_white m_pb_0">
      <div className="text_box_wrap left container custom_left_img_new">
        <div className="img_text_box_inner flex_direction_column">
          <div className="row m_switcher_row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">              
              <div className="img_box_wrap mt_80 mb_0">
                <Image
                  priority={true}
                  src="/share-tattoo-idea-new.png"
                  alt={t("common:homePage.TattooFinancing")}
                  width={616}
                  height={645}
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  layout="responsive"
                  className="mob_hidden"
                />
                <Image
                  priority={true}
                  src="/share-tattoo-idea-new-mob.png"
                  alt={t("common:homePage.TattooFinancing")}
                  width={343}
                  height={359}
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  layout="responsive"
                  className="desk_hidden  m_h_100_pc"
                />
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 ml_6pc m_ml_0">
              <div className="text_box_content justify_content_start m_min_h_reset pt_80 pb_0">
                <div className="text_box_content_inner m_pr_0 pr_0">
                  <h2>
                    {" "}
                    {t("common:homePage.Share your tattoo idea")}
                  </h2>
                  <p className="mt_25 mb_25 m_mt_0 m_mb_20 custom_fs_m_14">
                    {t("common:homePage.TattooIdeaDesc")}
                  </p>
                  <ul class="custom-listing txt_gray_500 mb_25">
                    <li>
                      <Image
                        priority
                        src="/icon_circle_tick.svg"
                        alt="Compare different offers"
                        width={24}
                        height={24}
                      />
                      Compare different offers
                    </li>
                    <li>
                      <Image
                        priority
                        src="/icon_circle_tick.svg"
                        alt="Compare different offers"
                        width={24}
                        height={24}
                      />
                      Send one request to multiple artists
                    </li>
                    <li>
                      <Image
                        priority
                        src="/icon_circle_tick.svg"
                        alt="Compare different offers"
                        width={24}
                        height={24}
                      />
                      Book your tattoo easily and quickly
                    </li>
                    
                     
                  </ul>

                  




                  <Link
                    href={`/${router.locale}/createRequest`}  onClick={()=>setPathname(router.pathname)}
                    className="btn_secondary btn_cutom_new btn_cutom_mob b_radius_16 custom_fs_m_16 m_lh_20 m_w_100pc"
                  >
                    {t("common:homePage.CreateATattooRequest")}
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
