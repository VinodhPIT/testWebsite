
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import useTranslation from "next-translate/useTranslation";

export default function KlarnaBanner() {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <section className="container_full">
      <div className="row g-0">        
        <div className="col-md-12">

        <div className=" w_100pc text_center position_relative d_flex justify_content_center align_item_center block_bg_pink_50 m_mt_40">  
            <div className="pt_80 pb_80 m_pt_40 m_pb_40 pl_20 pr_20">
              <div className="">
                <div className="klarna_banner_button">
                  <Image
                    src="/logo_klarna.svg"
                    alt="Klarna marketing badge"
                    width={116}
                    height={29}
                    loading="eager"
                  />
                </div>
                <h2 className="color_gray_550 custom_fs_60 custom_fs_m_38 m_lh_38 fw_800 mt_10 mb_40 m_mb_20">
                  <span>{t("common:tattooPayLater")}</span>
                </h2>                
                <Link
                  href={`/${router.locale}/klarna`}
                  className="button_primary_outline w_min_245"
                >
                  {t("common:learnMore")}
                </Link>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
}
