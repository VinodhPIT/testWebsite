import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";
import useTranslation from "next-translate/useTranslation";


export default function Dreamtattooai() {
  const router = useRouter();
  const { t } = useTranslation();
  return ( 
    <div className="block_bg_yellow container w_100pc text_center">
      <div className="text_box_content_inner max_w_100pc pt_40 pb_40 d_flex flex_direction_column align_item_center">
        <h2 className="color_gray_550 custom_fs_35 fw_600 mb_15">
        Create your dream tattoo using inckd AI
        </h2>        
        <p className="color_gray_550 custom_fs_18 custom_fs_m_14 fw_300 mb_30 d_max_920">
        With inckd AI, we empower you to create tattoos that have yet to be unleashed from the depths of your emotions. With Inked AI, your creativity knows no limits.     
        </p>
        <Link
          href=""
          className="btn_secondary btn_cutom_new btn_cutom_mob b_radius_16"
          >
          Create now!
        </Link>
      </div>
    </div>
  );
}
