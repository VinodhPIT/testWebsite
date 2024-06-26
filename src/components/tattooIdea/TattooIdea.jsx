import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { useRequestPath } from '@/hooks/useRequestPath';
import useWindowResize from "@/hooks/useWindowSize";

import useTranslation from "next-translate/useTranslation";
import usePath from'@/store/setPath/setPath'

import { blurDataURL } from "@/constants/constants";

export default function TattooIdea() {
  const { t } = useTranslation();
  const router = useRouter();
  const { isMobileView  ,isSmallDevice} = useWindowResize();
  const requestPath = useRequestPath(isSmallDevice);
  const {setPathname} = usePath()


  return (
    <section className="container_full">
      <div className="row g-0">        
        <div className="col-md-12">
          <div className="w_100pc text_center m_text_left pt_60 pb_60 m_pt_40 m_pb_40">
            <h2 className="custom_fs_60 fw_800 mb_25 mob_hidden">
              {" "} 
              {t("common:homePage.Share your tattoo idea")}
            </h2>
            <h2 className="color_gray_550 text_left custom_fs_m_32 fw_900 m_mb_15 desk_hidden">              
              <span className="position_relative">
                <span className="position_relative d_block custom_fs_16 lh_19 fw_300 text_fs_m_14 text_transform_upper">SHARE YOUR</span>
                Tattoo Idea</span>           
            </h2>                 
            <ul class="custom_list_view">
              <li className="">
                <Image
                  priority
                  src="/compare_offer_icon.svg"
                  alt="Compare different offers"
                  width={32}
                  height={32}
                  className="mr_8"
                />
                Compare different offers
              </li>
              <li className="">
                <Image
                  priority
                  src="/user_artist_icon.svg"
                  alt="Send one request to multiple artists"
                  width={32}
                  height={32}
                  className="mr_8"
                />
                Send one request to multiple artists
              </li>
              <li className="">
                <Image
                  priority
                  src="/calender_icon.svg"
                  alt="Book your tattoo easily and quickly"
                  width={32}
                  height={32}
                  className="mr_8"
                />
                Book your tattoo easily and quickly
              </li>  
            </ul>
            <Link
              href={`/${router.locale}/createRequest`}  onClick={()=>setPathname(router.pathname)}
              className="button_primary w_min_230 m_w_100pc"
            >
              {t("common:homePage.CreateATattooRequest")}
            </Link>
          </div>
        </div>
      </div>

      <div className="row g-0">
        <div className="col-md-6 col-sm-12 col-xs-12 block_bg_green_dark_400">              
          <div className="position_relative w_100pc h_100pc min_h_67_vh m_min_h_inherit text_center align_content_flex_end m_pt_40">
            <Image
              priority
              src="/share_tattoo_idea_img_mobile.png"
              alt={t("common:homePage.TattooFinancing")}               
              blurDataURL={blurDataURL}
              width={432}
              height={590}
              placeholder="blur"
              className="max_w_100pc position_absolute left_0 right_0 w_auto top_inherit bottom_0 m_auto m_pos_relative mob_hidden"
            />
            <Image
              priority
              src="/share_tattoo_idea_img_mobile.png"
              alt={t("common:homePage.TattooFinancing")}               
              blurDataURL={blurDataURL}
              width={212}
              height={321}
              placeholder="blur"
              className="max_w_100pc w_auto m_auto m_pos_relative desk_hidden"
            /> 
          </div>
        </div>
        <div className="col-md-6 col-sm-12 col-xs-12 block_bg_pink ">
          <div className="position_relative w_100pc h_100pc min_h_67_vh m_min_h_inherit">
            <div className="w_100pc h_100pc">
              <Image
                priority={true}
                src="/share_tattoo_idea.png"
                alt={t("common:homePage.TattooFinancing")}                  
                width={700}
                height={636}
                placeholder="blur"
                blurDataURL={blurDataURL}
                className="max_w_100pc w_100pc h_100pc object_fit_cover"
              />
            </div>
          </div>
        </div>
      </div>      
    </section>
  );
}
