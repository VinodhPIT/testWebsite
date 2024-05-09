import React from "react";
import { useRouter } from "next/router";

import useTranslation from "next-translate/useTranslation";


export default function CreateAI() {


  return ( 
    <div className="block_bg_yellow container w_100pc text_center">
      <div className="text_box_content_inner max_w_100pc pt_40 pb_40 d_flex flex_direction_column align_item_center">
        <h2 className="color_gray_550 custom_fs_35 custom_fs_m_24 fw_600 mb_15">
       {"Create your dream tattoo using inckd AI"}
        </h2>        
        <p className="color_gray_550 custom_fs_18 custom_fs_m_14 fw_300 mb_30 d_max_920 m_max_w_312">
       {"With inckd AI, we empower you to create tattoos that have yet to be unleashed from the depths of your emotions. With Inked AI, your creativity knows no limits."}
        </p>
        <button
         
          className="btn_secondary btn_cutom_new btn_cutom_mob custom_fs_m_16 m_lh_20 b_radius_16 fw_m_400"
          >
         {"Create now!"}
        </button>
      </div>
    </div>
  );
}
