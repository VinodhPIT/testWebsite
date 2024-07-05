import React  from "react";
import Link from "next/link";
import Image from "next/image";

import { useNavigation } from "@/hooks/useRouter";

import useTranslation from "next-translate/useTranslation";
import usePath from  '@/store/setPath/setPath'

import { BLUR_URL} from "@/constants/index";
 
export default function Main() {
  const { t } = useTranslation();
  const { router } = useNavigation();
  const {pathname} =usePath()
  
  return (
    <>
      <section className="full_block_banner">
        <div class="row g-0">
          <div class="col-md-6">
            <div className="banner_block block_bg_green_dark_400">
              <div class="request_back_arrow">                  
                <Image
                  priority
                  alt="backArrow"
                  src="/icon_close.svg"
                  width="24"
                  height="24"
                  blurDataURL={BLUR_URL}
                  className="m_object_position_center"
                  onClick={() =>router.push(`${router.locale}${pathname}`)}
                />                 
              </div>
              <div className="banner_col h_100_vh min_h_100_pc m_h_inherit m_min_150">
                <div className="w_100pc request_mid_img_block d_flex flex_direction_column align_item_center m_flex_direction_row m_align_item_flex_end"> 
                  <Image
                    src={"/Inckd-logo-white.svg"}
                    alt="logo"
                    width={199}
                    height={57}
                    priority
                    className="logo mb_80 m_mb_30"
                  />
                  <Image
                    priority
                    src="/create-request-img.png"
                    alt={t("common:forArtistPage.title1")}
                    width={399}
                    height={581}
                    blurDataURL={BLUR_URL}
                    className="max_w_100pc mob_hidden"
                    placeholder="blur"
                  /> 
                </div>               
              </div>
            </div>
          </div>
          <div class="col-md-5 offset-md-left-1">
            <div className="banner_block">
              <div className="banner_col min_h_100_pc m_min_h_inherit pt_40 pb_40 m_pt_30 m_pb_30"> 
                <div className="w_100pc h_100pc d_flex flex_direction_column justify_content_center pr_40 m_pr_15 m_pl_15">
                  <div className="request_landing_caption m_align_item_flex_start m_mt_0">
                    <h1 className="mb_10 m_mb_20">
                      <span>Get personalized tattoo quotes.</span>
                    </h1>                   
                    <p className="">Follow these steps to connect with top artists.</p>
                    <div class="request_stepper m_pb_75">
                      <div class="request_stepper_item">
                        <div class="request_stepper_counter"></div>
                        <div class="request_stepper_name">
                          {t("common:stepper.tattooSize")}
                        </div>
                      </div>
                      <div class="request_stepper_item">
                        <div class="request_stepper_counter"></div>
                        <div class="request_stepper_name">
                          {t("common:stepper.bodyPart")}
                        </div>
                      </div>
                      <div class="request_stepper_item">
                        <div class="request_stepper_counter"></div>
                        <div class="request_stepper_name">
                          {t("common:stepper.description")}
                        </div>
                      </div>
                      <div class="request_stepper_item">
                        <div class="request_stepper_counter"></div>
                        <div class="request_stepper_name">
                          {t("common:stepper.reference")}
                        </div>
                      </div>
                      <div class="request_stepper_item">
                        <div class="request_stepper_counter"></div>
                        <div class="request_stepper_name">
                          {t("common:stepper.artists")}
                        </div>
                      </div>
                      <div class="request_stepper_item">
                        <div class="request_stepper_counter"></div>
                        <div class="request_stepper_name">
                          {t("common:stepper.contact")}
                        </div>
                      </div>
                    </div>
                    <div className="d_inline_block w_100pc btn_rqst_desc_mob">
                      <Link
                        className="button_primary align_self mt_40 m_mt_0 w_100pc max_w_330 m_max_100"
                        href={`/${router.locale}/request-Form`}
                      >
                        {t("common:stepper.startDescribe")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


