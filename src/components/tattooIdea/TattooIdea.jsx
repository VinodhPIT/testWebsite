import React from "react";
import Image from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

import usePath from'@/store/setPath/setPath'

import { blurDataURL } from "@/constants/constants";

export default function TattooIdea() {
  const { t } = useTranslation();
  const router = useRouter();
   const {setPathname} = usePath()


  return (
    <div className="img_text_box_wrapper block_bg_cool_aero_blue m_pb_0">
      <div className="text_box_wrap left container custom_left_img_new">
        <div className="img_text_box_inner flex_direction_column">
          <div className="row m_switcher_row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="text_box_content justify_content_start m_min_h_reset m_pt_40 m_pb_0 hidden m_d_block">
                <div className="text_box_content_inner m_pr_0 pr_0">
                  <h2 className="custom_fs_m_28 desk_hidden">
                    {t("common:homePage.Share your tattoo idea")}
                  </h2>
                </div>
              </div>
              <div className="img_box_wrap m_mb_25 m_mt_10 m_min_h_225">
                <Image
                  priority={true}
                  src="/tattooIdeaBG.png"
                  alt={t("common:homePage.TattooFinancing")}
                  width={594}
                  height={390}
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  layout="responsive"
                  className="mob_hidden"
                />
                <Image
                  priority={true}
                  src="/tattooIdeaBG-mob.png"
                  alt={t("common:homePage.TattooFinancing")}
                  width={343}
                  height={225}
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  layout="responsive"
                  className="desk_hidden"
                />
                <div class="chat_block bubble_top_mid floating_animation">
                  <Image
                    priority={true}
                    src="/pro-pic-d-1.png"
                    alt="profile image"
                    width={50}
                    height={50}
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                  />
                  <div class="chat_bubble_msg bubble_top_mid">
                    <div class="chat_bubble_msg_desc">
                      <p>450 for butterfly tattoo</p>
                    </div>
                    <div class="chat_bubble_msg_date">
                      <p>07:20 pm</p>
                    </div>
                  </div>
                </div>

                <div class="chat_block bubble_bottom_left floating_animation">
                  <Image
                    priority={true}
                    src="/pro-pic-d-1.png"
                    alt="profile image"
                    width={50}
                    height={50}
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                  />                  
                  <div class="chat_bubble_msg bubble_top_mid">
                    <div class="chat_bubble_msg_desc">
                      <p>I would love to do your project</p>
                    </div>
                    <div class="chat_bubble_msg_date">
                      <p>07:20 pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 offset-lg-1 offset-md-1">
              <div className="text_box_content justify_content_start m_min_h_reset m_pt_0 m_pb_25">
                <div className="text_box_content_inner m_pr_0 pr_0">
                  <h2 className="mob_hidden">
                    {" "}
                    {t("common:homePage.Share your tattoo idea")}
                  </h2>
                  <p className="mt_20 mb_30 m_mt_0 m_mb_15 custom_fs_m_14">
                    {t("common:homePage.TattooIdeaDesc")}
                  </p>
                  <Link
                    href={`/${router.locale}/createRequest`}  onClick={()=>setPathname(router.pathname)}
                    className="btn_secondary btn_cutom_new btn_cutom_mob b_radius_16 mob_hidden custom_fs_m_16 m_lh_20"
                  >
                    {t("common:homePage.CreateATattooRequest")}
                  </Link>

                  <Link
                    className="btn_secondary btn_cutom_new btn_cutom_mob custom_fs_m_16 m_lh_20 b_radius_16 desk_hidden"
                    href={`/${router.locale}/request-Form`}  onClick={()=>setPathname(router.pathname)}
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
