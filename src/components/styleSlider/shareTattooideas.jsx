import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";
import useTranslation from "next-translate/useTranslation";

export default function Sharetattooideas() {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <div className="block_bg_cool_aero_blue container w_100pc text_center">
      <div className="text_box_content_inner max_w_100pc pt_40 pb_40 d_flex flex_direction_column align_item_center">
        <h2 className="color_gray_550 custom_fs_35 fw_600 mb_0">
          <span>Share your tattoo idea</span> 
        </h2>
        <h5 className="color_gray_550 custom_fs_25 fw_300 mb_15 m_mb_0">
          <span>with Blackwork tattoo artists</span>
        </h5>
        <p className="color_gray_550 custom_fs_18 custom_fs_m_14 fw_300 mb_30 d_max_710">
        Easily submit your tattoo idea once and connect with multiple suited artists. Lean back and receive varied proposals for free, finding your ideal artist match effortlessly.
        </p>
        <Link
          href=""
          className="btn_secondary btn_cutom_new btn_cutom_mob b_radius_16"
        >
           Create Tattoo Request
        </Link>
      </div>
    </div>
  );
}
