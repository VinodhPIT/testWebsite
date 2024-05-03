import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { Parameters } from "@/components/parameters/params";
import { fetchCategoryData } from "@/apiConfig/webService";

import useTranslation from "next-translate/useTranslation";

import Blackworktattooslider from "@/components/styleSlider/blackworktattooSlider";
import Sharetattooideas from "@/components/styleSlider/shareTattooideas";
import Exploreblackworktattoos from "@/components/styleSlider/exploreblackworkTattoos";
import ExploreStyle from "@/components/styleSlider/exploreStyles";
import Dreamtattooai from "@/components/styleSlider/dreamtattooAi";
import DownloadApps from "@/components/styleSlider/downloadApp";
import useStyleListing from "@/store/styleListing/styleListing";
import useDisplayAll from "@/store/exploreAll/exploreAll";

import { blurDataURL } from "@/constants/constants";

import { getSingleStyleDetail } from "@/apiConfig/webService";


import countriesData from "@/data/countries.json";



export default function Styledeatil({ data }) {
  const { styleList } = useStyleListing();
  const { allListing } = useDisplayAll();

  const [artistData, setArtistData] = useState([]);
  const [tattooData, setTattooData] = useState([]);

  const firstThree = countriesData.slice(0, 3);

  const second = data.web_content.slice(0, 3); // Extracting the first three objects

  const router = useRouter();

  const { t } = useTranslation();

  

  
  const renderContent = (body) => {
    if (body.includes("((imagery))")) {
      const splitContent = body.split("((imagery))");
      return (
        <>
          <p className="color_gray_550 custom_fs_18 custom_fs_m_14 fw_300 mb_40">
            {splitContent[0]}
          </p>
          <div className="range_patterns">
            <ul>
              {data.web_content.map(
                (item, index) =>
                  item.content &&
                  item.content.data &&
                  item.content.data.imagery.map((imageryItem, index) => (
                    <li key={index}>{imageryItem}</li>
                  ))
              )}
            </ul>
          </div>
          <p className="color_gray_550 custom_fs_18 custom_fs_m_14 fw_300 mb_40">
            {splitContent[1]}
          </p>
        </>
      );
    } else {
      return (
        <p className="color_gray_550 custom_fs_18 custom_fs_m_14 fw_300 mb_40">
          {body}
        </p>
      );
    }
  };

  useEffect(() => {
    const fetchTattooData = async () => {
      try {
        const res = await fetchCategoryData({
          category: "tattoo",
          style: data.style_id,
        });
        setTattooData(res.rows.hits);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTattooData(); // Call the async function immediately

    const fetchArtistData = async () => {
      try {
        const res = await fetchCategoryData({
          category: "artist",
          style: data.style_id,
        });
        setArtistData(res.rows.hits);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchArtistData(); // Call the async function immediately
  }, []); // Empty dependency array means this effect runs only once, on mount

  return (
    <>
      <Head>
        <title>{t("common:styleGuideScreenSEO.title")}</title>
        <meta
          name="description"
          content={t("common:styleGuideScreenSEO.description")}
        />
        <meta
          name="keywords"
          content={t("common:styleGuideScreenSEO.keyword")}
        />
      </Head>

      <div className="main_wrap_styleguide pb_0">
        <section className="img_text_banner_box">
          <div className="col_full">
            <div className="img_text_box_wrapper exciting_offer_wrap">
              <div class="text_box_wrap right">
                <div class="img_text_box_inner custom_two_col_banner m_switcher">
                  <div class="text_box_content justify_content_center m_min_h_reset m_pt_25 m_pb_40">
                    <div class="text_box_content_inner m_pr_0 w_100pc max_w_100pc">
                      <div className="tiny_payment_block pr_10_pc m_pr_0">
                        <h1 className="color_gray_550 heading_h1 custom_fs_60 custom_fs_50 txt_mob_fs38 mt_0">
                          {data.style_name}
                        </h1>
                        <p className="m_mt_10 m_mb_30 txt_mob_fs14 m_lh_21">
                          {data.short_desc}
                        </p>
                        <Link
                          href=""
                          className="btn_secondary btn_cutom_new btn_cutom_mob b_radius_16"
                        >
                          {t("common:styleGuidePage.bannerTattooRequestBtn")}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div class="img_box_wrap custom_download_shadow no_shadow_before">
                    <Image
                      priority
                      src={data.image}
                      alt={t("common:styleGuidePage.bannerTitle")}
                      fill
                      objectFit="cover"
                      objectPosition="center"
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                      className="mob_hidden"
                      //layout="responsive"
                    />
                    <Image
                      priority
                      src="/pexels-jayson-hinrichsen-8975668-8-m.png"
                      alt={t("common:styleGuidePage.bannerTitle")}
                      fill
                      objectFit="cover"
                      objectPosition="center"
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                      className="desk_hidden"
                      //layout="responsive"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Blackworktattooslider
          title={t("common:styleGuidePage.ArtistSliderTitle")}
          content={t("common:styleGuidePage.ArtistSliderContent")}
          button={t("common:ExploreMoreArtist")}
          trendingArtist={artistData}
        />
        <Sharetattooideas />

        <section className="text_box_wrap d_flex">
          <div className="justify_content_start container w_100pc">
            <div className="custom_content_block mt_80 m_mt_40">
              {firstThree &&
                firstThree.map((item, index) => (
                  <div key={index}>
                    {item.content && (
                      <>
                        <h3 className="color_black_h heading_h3 custom_fs_34 custom_fs_m_24 mb_12">
                          {item.content.header}
                        </h3>

                        <p className="color_gray_550 custom_fs_18 custom_fs_m_14 fw_300 mb_40">
                          {item.content.body}
                        </p>

                        <div className="range_patterns">
            <ul>
              {/* {item.data.imagery.map(
                (item, index) =>
                  item.content &&
                  item.content.data &&
                  item.content.data.imagery.map((imageryItem, index) => (
                    <li key={index}>{imageryItem}</li>
                  ))
              )} */}
    {item.data &&item.data.map((el ,index)=>{

return  <li key={index}>{el}</li>



    })}



            </ul>
          </div>
          
                      </>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </section>

        <Exploreblackworktattoos
          title={t("common:menus.tattooSearch")}
          content={t("common:homePage.worldOfInk")}
          datas={tattooData}
        />

        <Dreamtattooai />

        <ExploreStyle
          title={t("common:homePage.exploreStyle")}
          content={t("common:homePage.worldOfInk")}
          data={styleList}
        />
        <DownloadApps
          title={t("common:downloadApp")}
          subTitle={t("common:downloadApp-Sub1")}
          bgColor="block_bg_pink"
        />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const data = await getSingleStyleDetail(context.query.detail);

    if (!data.data) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        data: data.data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
