import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { useNavigation } from "@/hooks/useRouter";
import useWindowResize from "@/hooks/useWindowSize";
import { useRequestPath } from '@/hooks/useRequestPath';

import useTranslation from "next-translate/useTranslation";
import useStyleListing from "@/store/styleListing/styleListing";
import { useGlobalState } from "@/context/Context";
import usePath from'@/store/setPath/setPath'
import ArtistSlider from "@/components/styleDetail/artistSlider";
import Tattooidea from "@/components/styleDetail/tattooIdea";
import ExploreTattoos from "@/components/styleDetail/exploreTattoos";
import ExploreStyle from "@/components/styleDetail/exploreStyles";
import CreateAI from "@/components/styleDetail/createAi";
import DownloadApps from "@/components/styleDetail/downloadApp";

import { blurDataURL } from "@/constants/constants";
import {
  getSingleStyleDetail,
  fetchCategoryData,
} from "@/apiConfig/webService";

export default function Styledeatil({ data ,style_id}) {
  const [artistData, setArtistData] = useState([]);
  const [tattooData, setTattooData] = useState([]);
  const { router } = useNavigation();
  const { t } = useTranslation();
  const { isSmallDevice } = useWindowResize();
  const requestPath = useRequestPath(isSmallDevice);
  const { styleList } = useStyleListing();
  const {setPathname} = usePath()
  const { selectedIds, setSelectedIds } = useGlobalState();


  const withImagery = [];
  const withoutImagery = [];

  if (data && data.web_content && data.web_content.length > 0) {
      data.web_content.forEach(item => {
          if (item.content.data && item.content.data.imagery) {
              withImagery.push(item);
          } else {
              withoutImagery.push(item);
          }
      });
  }


 useEffect(()=>{
 setSelectedIds([])
 },[])


  useEffect(() => {
    const fetchTattooData = async () => {
      try {
        const res = await fetchCategoryData({
          category: "tattoo",
          style: style_id,
        });
        setTattooData(res.rows.hits);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
     
    };


    fetchTattooData();

    const fetchArtistData = async () => {
      try {
        const res = await fetchCategoryData({
          category: "artist",
          style:style_id,
        });
        setArtistData(res.rows.hits);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchArtistData();
  }, [style_id]);


  const ContentBlock = ({ item }) => (
    <div>
      {item.content && (
        <>
          <h3 className="color_black_h heading_h3 custom_fs_34 custom_fs_m_24 mb_12 m_mb_15">
            {item.content.header}
          </h3>
          <p className="color_gray_550 custom_fs_18 custom_fs_m_14 fw_300 mb_25">
            {item.content.body}
          </p>
          {item.content.data && item.content.data.imagery && (
            <div className="range_patterns">
              <ul>
                {item.content.data.imagery.map((imageryItem, index) => (
                  <li key={index}>{imageryItem}</li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );


  const handleLinkClick = () => {
    // Construct the new pathname with the query parameters
    const newQuery =`?style_uid=${router.query.style_uid}&style_id=${router.query.style_id}`;
    const newPathname = `${router.pathname}${newQuery}`;
    // Update the state
    setPathname(newPathname);

    const updatedIds = [...new Set([...selectedIds,data.slug])]

    setSelectedIds(updatedIds);



  };

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
                          href={requestPath}
                          onClick={handleLinkClick}
                          className="btn_secondary btn_cutom_new btn_cutom_mob b_radius_16 custom_fs_m_16 m_lh_20 fw_m_400"
                        >
                          {t("common:styleDetail.bannerTattooRequestBtn")}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div class="img_box_wrap custom_download_shadow no_shadow_before">
                    <Image
                      priority
                      src={data.image ? data.image : "/placeHolder.png"}
                      alt={t("common:styleDetail.bannerTitle")}
                      fill
                      objectFit="cover"
                      objectPosition="center"
                      placeholder="blur"
                      blurDataURL={blurDataURL}

                      //layout="responsive"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ArtistSlider
          title={t("common:styleDetail.artistSliderTitle", {
            tattooStyle: data.style_name.toLowerCase(),
          })}
          content={t("common:styleDetail.artistSliderContent", {
            tattooStyle: data.style_name.charAt(0).toLowerCase() + data.style_name.slice(1),
        })}
        data={artistData}
        slug={data.slug}
        
        
        />
        <Tattooidea name={data.style_name} handleLinkClick={handleLinkClick} />

        {withoutImagery && withoutImagery.length > 0 && (
          <section className="text_box_wrap d_flex">
            <div className="justify_content_start container w_100pc">
              <div className="custom_content_block mt_15 pb_20 m_pb_0 m_mt_0">
                {withoutImagery.map((item, index) => (
                  <ContentBlock key={index} item={item} />
                ))}
              </div>
            </div>
          </section>
        )}

        <ExploreTattoos data={tattooData} styleName={data.style_name}
        slug={data.slug} />

        {withImagery && withImagery.length > 0 && (
          <section className="text_box_wrap d_flex">
            <div className="justify_content_start container w_100pc">
              <div className="custom_content_block mt_0 m_mt_0 mb_80 m_mb_40">
                {withImagery.map((item, index) => (
                  <ContentBlock key={index} item={item} />
                ))}
              </div>
            </div>
          </section>
        )}

        <CreateAI />

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
    const { query ,locale } = context;
    const lng= locale.split('-')[1]
    const {style_uid, style_id} = query; // Access the style_id & style_uid from the query object
    const data = await getSingleStyleDetail(style_uid ,lng) ;
    if (!data.data) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        data: data.data,
        style_id
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
