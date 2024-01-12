import React,{useEffect} from "react";
import Head from "next/head";
import Link from "next/link";
import {ZodiacCarousel ,MythologyCarousel ,AztecCarousel} from "@/components/carousel/Carousel";
import ImageSwiper from "@/components/slider/ImageSwiper";
import ImageSlider from "@/components/slider/ImageSlider";

import {
  APP_LINK_APPLE,
  APP_LINK_GOOGLE,
  blurDataURL,
} from "@/constants/constants";
import useWindowResize from "@/hooks/useWindowSize";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import {TattooSearchModal} from "@/utils/modalUtils";
import { useModal } from "@/utils/modalUtils";
import { useGlobalState } from "@/context/Context";
import { getLocaleProps } from '@/utils/getlocale';
import {useNavigation} from '@/hooks/useRouter'



export default function Dictionary({locale}) {


  const {getLocale } = useGlobalState();
  const {router} =useNavigation()
  const { isPopupOpen, openPopup, closePopup } = useModal();
  const { isMobileView } = useWindowResize();
  const { t } = useTranslation();


  useEffect(() => {
    try {
      getLocale({
        locale,
      });
    } catch (error) {}
  }, [locale]);




  

  const items = [
    {
      heading: t("common:dictionaryPage.ZodiacCarousel.title1"),
      image: "/Astrology-taurus-bold.svg",
      text: t("common:dictionaryPage.ZodiacCarousel.content1"),
      button1:t("common:dictionaryPage.reliability"),
      button2: t("common:dictionaryPage.sensuality"),
     
    },
    
    { heading:t("common:dictionaryPage.ZodiacCarousel.title2"),
      image: "/Astrology-cancer-bold.svg",
      text: t("common:dictionaryPage.ZodiacCarousel.content2"),
      button1:t("common:dictionaryPage.nurturing"),
      button2: t("common:dictionaryPage.protection"),
     
    },
    {
      heading: t("common:dictionaryPage.ZodiacCarousel.title3"),
      image: "/Astrology-scorpio-bold.svg",
      text: t("common:dictionaryPage.ZodiacCarousel.content3"),
      button1: t("common:dictionaryPage.intensity"),
      button2: t("common:dictionaryPage.passion"),
     
    },
    {
      heading: t("common:dictionaryPage.ZodiacCarousel.title4"),
      image: "/Astrology-aquarius-bold.svg",
      text: t("common:dictionaryPage.ZodiacCarousel.content4"),
      button1: t("common:dictionaryPage.independence"),
      button2: t("common:dictionaryPage.open-mindedness"),
     
    },
    {
      heading: t("common:dictionaryPage.ZodiacCarousel.title1"),
      text: t("common:dictionaryPage.carousel.content1"),
      button1:t("common:dictionaryPage.trust"),
      button2: t("common:dictionaryPage.remembrance"),
    
    },
  ];




  const items1 = [
    {
      heading: t("common:dictionaryPage.MythologyCarousel.title1"),
      image: "/GreekMyth-dionysus-bold.svg",
      text: t("common:dictionaryPage.MythologyCarousel.content1"),
      button1:t("common:dictionaryPage.pleasure"),
      button2: t("common:dictionaryPage.festivity"),
     
    },
    
    { heading:t("common:dictionaryPage.MythologyCarousel.title2"),
      image: "/GreekMyth-poseidon-bold.svg",
      text: t("common:dictionaryPage.MythologyCarousel.content2"),
      button1:t("common:dictionaryPage.power"),
      button2: t("common:dictionaryPage.inspiration"),
     
    },
    {
      heading: t("common:dictionaryPage.MythologyCarousel.title3"),
      image: "/GreekMyth-tethis-bold.svg",
      text: t("common:dictionaryPage.MythologyCarousel.content3"),
      button1: t("common:dictionaryPage.family"),
      button2: t("common:dictionaryPage.connection"),
     
    },
    {
      heading: t("common:dictionaryPage.MythologyCarousel.title4"),
      image: "/GreekMyth-zeus-bold.svg",
      text: t("common:dictionaryPage.MythologyCarousel.content4"),
      button1: t("common:dictionaryPage.fate"),
      button2: t("common:dictionaryPage.protection"),
     
    },
    {
      heading: t("common:dictionaryPage.MythologyCarousel.title1"),
      text: t("common:dictionaryPage.MythologyCarousel.content1"),
      button1:t("common:dictionaryPage.trust"),
      button2: t("common:dictionaryPage.remembrance"),
    
    },
  ];


  const items2 = [
    {
      heading: t("common:dictionaryPage.AztecCarousel.title1"),
      image: "/Aztec-itzcuintli-bold.svg",
      text: t("common:dictionaryPage.AztecCarousel.content1"),
      button1:t("common:dictionaryPage.remembrance"),
      button2: t("common:dictionaryPage.trust"),
     
    },
    
    { heading:t("common:dictionaryPage.AztecCarousel.title2"),
      image: "/Aztec-ocelotl-bold.svg",
      text: t("common:dictionaryPage.AztecCarousel.content2"),
      button1:t("common:dictionaryPage.power"),
      button2: t("common:dictionaryPage.valor"),
     
    },
    {
      heading: t("common:dictionaryPage.AztecCarousel.title3"),
      image: "/Aztec-ollin-bold.svg",
      text: t("common:dictionaryPage.AztecCarousel.content3"),
      button1: t("common:dictionaryPage.transmutation"),
      button2: t("common:dictionaryPage.change"),
     
    },
    {
      heading: t("common:dictionaryPage.AztecCarousel.title4"),
      image: "/Aztec-ozomahtli-bold.svg",
      text: t("common:dictionaryPage.AztecCarousel.content4"),
      button1: t("common:dictionaryPage.fun"),
      button2: t("common:dictionaryPage.creativity"),
     
    },
    {
      heading: t("common:dictionaryPage.AztecCarousel.title1"),
      text: t("common:dictionaryPage.AztecCarousel.content1"),
      button1:t("common:dictionaryPage.trust"),
      button2: t("common:dictionaryPage.remembrance"),
    
    },
  ];








  // const data = await getData()

  return (
    <>
   <Head>
        <title>
          5000+ Tattoo Motives, Your Ultimate Tattoo Dictionary
        </title>
        <meta
          name="description"
          content="Explore our extensive tattoo dictionary with 5000+ unique motives, each with meanings and emotions. Find your perfect tattoo inspiration here"
        />
        <meta
          name="keywords"
          content="Tattoo, Tattoo Emotions, Tattoo styles, Tattoo Designs, Tattooing, Tattoo Dictonary, Tattoo Meanings Tattoo Finder, Tattoo"
        />
      </Head>
    <main>


    <div className="page_wrapper">
      <section className="img_text_banner_box">
        <div className="col_full">
          <div className="img_text_box_wrapper">
            <div className="text_box_wrap right block_bg_black full_banner_custom_slider">
              <div className="container">
                <div className="img_text_box_inner">
                  <div className="text_box_content justify_content_start pl_0 pr_2_pc m_text_center m_pb_0">
                    <div className="text_box_content_inner m_pr_0">
                    <h2> <span>{t("common:dictionaryPage.bannerContent1")}</span>
                    <span className="textBlock">{t("common:dictionaryPage.bannerContent1-Sub")}</span> </h2>
                    <p>{t("common:dictionaryPage.bannerContent2")}</p>
                      <Link   href="/explore/[[...slug]]"
                                   as={`${router.locale}/explore/tattoo-artists`}
                                   
                                   
                                   className="btn_default btn_cutom_new btn_img">
                      {t("common:dictionaryPage.findArtist")}
                        <img
                          src="/alt-arrow-right-black.svg"
                          alt=""
                          className="ml-8 mt-2"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="img_box_wrap custom_slick_slider_one">
                    <ImageSwiper/>
                  </div>
                </div>
              </div>
            </div>

            <div className="text_box_wrap full-block-wrap block_bg_yellow_500">
              <div className="img_text_box_inner">
                <div className="justify_content_start container w_100pc">
                  <div className="text_box_find_tattoo">
                    <div className="keywords_wrap">
                      <ul className="keywords_list">
                         <li>{t("common:dictionaryPage.enlighenment")}</li>
                            <li>{t("common:dictionaryPage.love")}</li>
                            <li>{t("common:dictionaryPage.transformation")}</li>
                            <li onClick={openPopup} style={{"cursor":"pointer"}}>
                              {t("common:dictionaryPage.explore-more-emotions")}
                            </li>

                      </ul>
                    </div>
                    <div className="find_tattoo_wrap">
                      <div className="find_tattoo_left">
                      <h3 className="m_mxw_290"> <span className="m_dis_inline">{t("common:dictionaryPage.title1")} </span>
                          <span className="textBlock m_dis_inline">{t("common:dictionaryPage.title1-Sub")}</span></h3>
                      </div>
                      <div className="find_tattoo_right">
                        <ul className="download_app">
                          <li>
                            <Link
                              target="_blank"
                              href={APP_LINK_APPLE}
                            >
                              <img src="/app-store-new.svg" alt="apple store" />
                            </Link>
                          </li>
                          <li>
                            <Link
                              target="_blank"
                              href={APP_LINK_GOOGLE}
                            >
                              <img src="/g-play-new.svg" alt="google play" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text_box_wrap left">
              <div className="img_text_box_inner">
                <div className="img_box_wrap block_bg_gradient_1">
                  <div className="box_text_img_over custom_spc_left_d_590 color_white">
                    <h2 className="custom_spc_left_d_430 ">
                      <span className="m_dis_inline">{t("common:dictionaryPage.title2")} </span> 
                      <span className="textBlock m_dis_inline">{t("common:dictionaryPage.title2-Sub")}</span>
                    </h2>
                    <p className="custom_fs_22 custom_fs_m_16 md_max_75 max_m_w_100pc list_inline_item">
                    {t("common:dictionaryPage.content2")}
                    </p>
                  </div>
                  <Image
                    priority
                    src="/pitched_please_an_image_of_the_univers_with_a_lot_of_start_high_e2e486f6-9c85-484e-af56-c0f713ea8f2a 3.png" 
                    alt="Zodiac Signs"
                    width={500}
                    height={800}
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    layout="responsive"
                  />                  
                </div>
                <div className="text_box_content justify_content_start block_bg_gray_150">
                  <div className="text_box_content_inner custom_carousel_wrap">
                    {/* 
                       <ZodiacCarousel items={items} />            */}
                    <ZodiacCarousel
                      items={items}
                      itemStyle="d_flex justify_content_end"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="text_box_wrap left app_download_box_wrap mb_0 block_bg_yellow_500 dictionary_app">
              <div className="img_text_box_inner">
                {!isMobileView ? (
                  <div className="img_box_wrap">
                    <ul className="app_download_img_list mt_mb_80 after_none justify_content_right text_center mr_0 ml_15">
                      <li>
                        <img
                          src="/Tattoodictonary1.png"
                          alt="Picture of the author"
                        />
                      </li>
                      <li>
                        <img
                          src="/Tattoodictionary2.png"
                          alt="Picture of the author"
                        />
                      </li>
                    </ul>
                  </div>
                ) : (
                  ""
                )}

                <div class="text_box_content justify_content_start">
                  <div class="text_box_content_inner w_100pc pr_0 dictionary_explore">
                    <ul class="download_app ml_0 w_100pc max_w_100pc m_pb_50 text_left">
                      <li class="download_app_title">
                      <h6><span>{t("common:dictionaryPage.expoloreMore")}</span> 
                      <span className="textBlock">{t("common:dictionaryPage.expoloreMore-Sub")}</span> </h6>
                        <p>{t("common:dictionaryPage.content3")}</p>
                      </li>
                      <li>
                        <Link href={APP_LINK_APPLE} target="_blank">
                          <img src="/app-store-new.svg" alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link href={APP_LINK_GOOGLE} target="_blank">
                          <img src="/g-play-new.svg" alt="" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="img_box_wrap">
                {isMobileView ? (
                  <ImageSlider
                  imagePaths={[
                    "/Tattoodictonary1.png",
                    "/Tattoodictionary2.png",
                   
                  ]}
                    imgAlt="Picture of the author"
                    imgblurDataURL={blurDataURL}
                    imgWidth={215}
                    imgHeight={443}
                  ></ImageSlider>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div class="text_box_wrap right">
              <div class="img_text_box_inner m_switcher">
                <div class="text_box_content justify_content_start block_bg_gray_150">
                  <div class="text_box_content_inner custom_carousel_wrap"> 


                     <MythologyCarousel   items={items1}
                      itemStyle="d_flex justify_content_start m_justify_content_right"/>

              


                  </div>
                </div>
                <div class="img_box_wrap block_bg_gradient_2 justify_content_right">
                  <div class="box_text_img_over color_white text_right justify_content_right m_justify_content_left m_text_left">
                    <h2 class="txt_mob_fs50 custom_spc_right_d_430 list_inline_item">
                  <span>{t("common:dictionaryPage.title4")}</span>  
                  <span className="textBlock">{t("common:dictionaryPage.title4-Sub")}</span>  
                    </h2>
                    <p class="custom_fs_22 custom_fs_m_16 md_max_75 max_m_w_100pc list_inline_item">
                    {t("common:dictionaryPage.content4")}
                    </p>
                  </div>                 
                  <Image
                    priority
                    src="/pitched_please_an_oil_painting_of_the_greek_mythology_with_all__5b7a67be-64c0-43cd-89c0-0dd508851be4 3.png" 
                    alt="Greek Mythology"
                    width={500}
                    height={800}
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    layout="responsive"
                  />                

                 
                </div>
              </div>
            </div>

            <div class="text_box_wrap full-block-wrap block_bg_yellow_500">
              <div class="img_text_box_inner">
                <div class="justify_content_start container w_100pc keyword_container">
                  <div class="text_box_find_tattoo">
                    <div class="keywords_wrap">
                      <ul class="keywords_list">
                      <li>{t("common:dictionaryPage.animals")}</li>
                            <li>{t("common:dictionaryPage.flowers")}</li>
                            <li>{t("common:dictionaryPage.norseMythology")}</li>
                           

                      </ul>
                    </div>
                    <div class="find_tattoo_wrap">
                      <div class="find_tattoo_left">
                        <h3 className="m_mxw_290">
                          <span className="m_dis_inline">{t("common:dictionaryPage.title1")} </span>
                          <span className="textBlock m_dis_inline">{t("common:dictionaryPage.basedonTheme")}</span>
                          </h3>
                      </div>
                      <div class="find_tattoo_right">
                        <ul class="download_app">
                          <li>
                            <Link
                              target="_blank"
                              href={APP_LINK_APPLE}
                            >
                              <img src="/app-store-new.svg" alt="apple store" />
                            </Link>
                          </li>
                          <li>
                            <Link
                              target="_blank"
                              href={APP_LINK_GOOGLE}
                            >
                              <img src="/g-play-new.svg" alt="google play" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="text_box_wrap left">
              <div class="img_text_box_inner">
                <div class="img_box_wrap block_bg_gradient_2">
                  <div class="box_text_img_over color_white">
                    <h2 class="txt_mob_fs50 custom_spc_left_d_430 list_inline_item">
                    <span>{t("common:dictionaryPage.title3")}</span>
                    <span className="textBlock"> {t("common:dictionaryPage.title3-Sub")}</span>
                    </h2>
                    <p class="custom_fs_22 custom_fs_m_16 md_max_75 max_m_w_100pc list_inline_item">
                    {t("common:dictionaryPage.content3")}
                    </p>
                  </div>


                  <Image
                    priority
                    src="/aztec-symbols.png" 
                    alt="Picture of the author"
                    width={500}
                    height={800}
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    layout="responsive"
                  
                  />


                  {/* <img src="/aztec-symbols.png" alt="" /> */}




                </div>
                <div class="text_box_content justify_content_start block_bg_gray_150">
                  <div class="text_box_content_inner custom_carousel_wrap">
                    <AztecCarousel
                      items={items2}
                      itemStyle="d_flex justify_content_end"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <TattooSearchModal
          className="custom-modal"
          isOpen={isPopupOpen}
          closeModal={closePopup}
        />
    </main>
    </>
  );
}


export async function getServerSideProps(context) {
  const { props } = await getLocaleProps(context);
  return {
    props:{
      locale:props.locale
    }
  };
}
