import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";


export default function KlarnaBanner() {
  const router = useRouter();

  return (
    <div className="block_bg_black_200  container w_100pc klarna_banner_section text_center">
      <div className="text_box_content_inner max_w_100pc pt_80 pb_80 m_pt_40 m_pb_25">
        <div className="klarna_banner_button">
          <Image
            src="/Klarna marketing badge.svg"
            alt="Klarna marketing badge"
            width={75}
            height={30}
            loading="eager"
          />
        </div>
        <h2 className="color_white heading_h2 custom_d_fs_50 fw_700 mb_10 m_mb_0">
          <span>Tattoo now, Pay later</span>
        </h2>
        <p className="color_white custom_fs_18 mb_30 m_mb_25 custom_fs_m_14">
          Our app offers credit checks, finance options, and flexible payment
          plans, ensuring everyone can afford their dream tattoo.
        </p>
        <Link
          href={`/${router.locale}/klarna`}
          className="btn_outline_secondary btn_cutom_new b_radius_16"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
}
