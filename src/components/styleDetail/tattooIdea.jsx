import React from "react";
import Link from "next/link";

import useWindowResize from "@/hooks/useWindowSize";
import { useRequestPath } from '@/hooks/useRequestPath';

import useTranslation from "next-translate/useTranslation";

export default function Tattooidea({ name ,handleLinkClick }) {
  const { t } = useTranslation();
  const { isSmallDevice } = useWindowResize();
  const requestPath = useRequestPath(isSmallDevice);

  return (
    <div className="block_bg_cool_aero_blue container w_100pc text_center">
      <div className="text_box_content_inner max_w_100pc pt_40 pb_40 mb_65 m_mb_40 d_flex flex_direction_column align_item_center">
        <h2 className="color_gray_550 custom_fs_35 custom_fs_m_24 fw_600 mb_0 m_mb_5">
          <span>{t("common:styleDetail.shareTattooIdea")}</span>
        </h2>
        <h5 className="color_gray_550 custom_fs_25 custom_fs_m_18 fw_300 mb_15 m_mb_25">
          <span>
            {t("common:styleDetail.withTattooArtists", { tattooStyle: name })}
          </span>
        </h5>
        <p className="color_gray_550 custom_fs_18 custom_fs_m_14 fw_300 mb_30 d_max_710 m_max_w_360">
          {t("common:styleDetail.connectMultipleArtists")}
        </p>

        <Link
          href={requestPath}
          onClick={handleLinkClick}
          className="btn_secondary btn_cutom_new btn_cutom_mob custom_fs_m_16 m_lh_20 b_radius_16 fw_m_400"
        >
          {t("common:styleDetail.bannerTattooRequestBtn")}
        </Link>

    
      </div>
    </div>
  );
}
