import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";
import useTranslation from "next-translate/useTranslation";
import {
  blurDataURL,
} from "@/constants/constants";

export default function KlarnaBanner() {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <section className="img_text_banner_box">
        <div className="col_full">
          <div className=" w_100pc klarna_banner_section text_center position_relative min_h_295 d_flex justify_content_center align_item_center">
            <div className="banner_custom_img_wrap">
              <div className="banner_custom_img">
                <Image
                  src="/klarna_pay_later.png"
                  alt="Banner"
                  fill
                  objectFit="cover"
                  objectPosition="center top"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  className="mob_hidden"
                />

                <Image
                  src="/klarna_pay_later_mob.png"
                  alt="Banner"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  fill
                  objectPosition="center top"
                  className="desk_hidden"
                />  
                
              </div>
            </div>

            <div className="pt_80 pb_80 m_pt_40 m_pb_40">
              <div className="container">
                <div className="klarna_banner_button">
                  <Image
                    src="/Klarna marketing badge.svg"
                    alt="Klarna marketing badge"
                    width={75}
                    height={30}
                    loading="eager"
                  />
                </div>
                <h2 className="color_white heading_h2 custom_d_fs_50 custom_md_fs_50 fw_700 mt_15 m_mt_25 mb_8">
                  <span>On a budget?</span>
                </h2>
                <p className="color_white custom_fs_26 mb_30 m_mb_25 custom_fs_m_18 max_w_100pc ">
                Get inked now, pay later – Your dream tattoo, hassle-free!
                </p>
                <Link
                  href={`/${router.locale}/klarna`}
                  className="btn_outline_secondary btn_cutom_new b_radius_16"
                >
                  {t("common:learnMore")}
                </Link>
              </div>
            </div>



          </div>

      </div>
    </section>        
  );
}
