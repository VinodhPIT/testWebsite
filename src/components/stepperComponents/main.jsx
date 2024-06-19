import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { useNavigation } from "@/hooks/useRouter";

import useTranslation from "next-translate/useTranslation";
import usePath from  '@/store/setPath/setPath'

import { blurDataURL } from "@/constants/constants";



export default function Main() {
  const { t } = useTranslation();
  const { router } = useNavigation();

  const {pathname} =usePath()
  

  return (
    <>
      <div className="full_col_block min_h_100_vh m_min_h_70_vh">
        <div className="full_col_banner">
          <div className="banner_fixed_block">
            <Image
              priority
              alt="pexels cottonbro studio"
              src="/pexels-cottonbro-studio-4123767-1.png"
              fill
              objectFit="cover"
              objectPosition="top"
              blurDataURL={blurDataURL}
              className="m_object_position_center mob_hidden"
            />
            <Image
              priority
              alt="pexels cottonbro studio"
              src="/pexels-cottonbro-studio-4123767-1_mob.png"
              fill
              objectFit="cover"
              objectPosition="top"
              blurDataURL={blurDataURL}
              className="m_object_position_center desk_hidden"
            />
          </div>
        </div>

        <section className="request_landing_block m_align_self">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div class="request_back_arrow">                  
                    <Image
                      priority
                      alt="backArrow"
                      src="/icon_close.svg"
                      width="24"
                      height="24"
                      blurDataURL={blurDataURL}
                      className="m_object_position_center"
                      onClick={() =>router.push(`${router.locale}${pathname}`)}
                    />                 
                </div>
                <div class="request_stepper mob_hidden">
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


                <div className="request_landing_caption m_align_item_flex_start m_mt_0">
                  <h1 className="mob_hidden">
                    <span>{t("common:stepper.mainTitle")}</span>
                  </h1>
                  <p className="mob_hidden">{t("common:stepper.subText")}</p>

                  <h1 className="desk_hidden">
                    <span>Get personalized quotes for your tattoo</span>
                  </h1>
                  <p className="desk_hidden">Follow these steps to connect with top artists.</p>

                  <div class="request_stepper desk_hidden">
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
                  <div className="btn_rqst_desc_mob">
                    <Link
                      className="btn_outline_base mt_40 m_mt_0 m_mb_0 m_w_100pc"
                      href={`/${router.locale}/request-Form`}
                    >
                      {t("common:stepper.startDescribe")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
