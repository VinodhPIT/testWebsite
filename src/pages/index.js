import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGlobalState } from "@/context/Context";
import Head from "next/head";
import KlarnaComponent from "@/components/homeScreen/klarnaComponent";
import FinelineComponent from "@/components/homeScreen/finelineComponent";
import TattooSlider from "@/components/homeScreen/artistSlider";
import TattooDictonary from "@/components/homeScreen/tattooDictonary";
import HomeFullWidthcarosuel from "@/components/homeScreen/homeFullwidthCarousel";
import TattooJournal from "@/components/homeScreen/tattooJournal";
import PaymentTypes from "@/components/homeScreen/paymentTypes";
import ExploreApps from "@/components/homeScreen/exploreApps";
import TattooArtistComponent from "@/components/homeScreen/tattooArtistComponent";
import jsonData from "@/data/journal.json";
import { useRouter } from "next/router";
import {
  APP_LINK_APPLE,
  APP_LINK_GOOGLE,
  BLUR_URL,
} from "@/constants/constants";
import useTranslation from "next-translate/useTranslation";

export default function Home({ data, locale }) {
  
  const { t } = useTranslation();

  const trendingArtist = [
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/8863_20231115232146356_4B0029D0-4FCF-4CC4-99BF-91A77CD4CE6C.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/29508_20231115232450433-medium.jpg",
      name: "Mia Bella",

      city: "Rotherham",
      country: "United Kingdom",
      url: `${process.env.LIVE_URL}/artists/miabella_ohshrf35`,
    },
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/8888_20231116231802146_3a300540-f428-49e8-8bff-7a6e76f51781.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/29519_20231116232704731-medium.jpg",
      name: "Julia Blackfox",

      city: "Frankfurt an der Oder",
      country: "Germany",
      url: `${process.env.LIVE_URL}/artists/juliablackfox_4rh203ng`,
    },
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/920_5CC75242-4928-4A0B-A72D-90E651FCA364.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/9439_20221118114953632-medium.jpg",
      name: "Alessandro Lanzafame",

      city: "London",
      country: "United Kingdom",

      url: `${process.env.LIVE_URL}/artists/alessandro-lanzafame_nts3jh4k`,
    },
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/566_175C2680-D5A1-46C6-A5BF-13055B046823.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/2164_20220831155842506-medium.jpg",
      name: "Barbara Nobody",

      city: "London,",
      country: "United Kingdom",
      url: `${process.env.LIVE_URL}/artists/barbaranobody_e8w4uiq5`,
    },

    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/4449_20230307153700577_7FCCE75E-1210-4929-B396-295ECE8D7D0E.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/21192_20230307143220227-medium.jpg",
      name: "Mileink",

      city: "London",
      country: "United Kingdom",
      url: `${process.env.LIVE_URL}/artists/Mileink_8t07n1nk`,
    },
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/3741_20230209033123652_D9044E0B-6D66-4491-A800-E100E428B30B.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/18214_20230209043507234-medium.jpg",
      name: "13FoxxTattoos",

      city: "London",
      country: "United Kingdom",
      url: `${process.env.LIVE_URL}/artists/13foxxtattoos_6426m6eg`,
    },

    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/3587_20230206105448273_7BBC9E76-F92B-4BBC-B743-0DD7BC4C1F31.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/17589_20230204173826801-medium.jpg",
      name: "Çinar Efe Tattoo",
      city: "London",
      country: "United Kingdom",
      url: `${process.env.LIVE_URL}/artists/cinar-efe_acwe82ae`,
    },
  ];

  const tattoos = [
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/21561_20230312230323292-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/ba76717a-788c-42ec-a50c-c946a7deb7b7`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/26057_20230814190028838-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/ffbb5f5b-c124-4599-9a2a-8b8fb70d0305`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/2836_20220916175556641-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/fe25e0ec-bf1d-451d-93d4-70ac74a6286d`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/13796_20230105095643483-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/1374fce3-e79a-4381-a9f7-281c84793b5c`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/18174_20230208215617181-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/c2377f90-d4c4-4056-896e-53a2da502273`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/22296_20230323003140535-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/32a4ef5e-159d-4e3a-8498-5f2244b0fb8d`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/4677_20221006183710030-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/570d3a82-3d83-41b1-8b3c-ed72fe064c42`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/4674_20221006183315588-medium.jpg",
      url: `${process.env.LIVE_URL}/tattoo/ebdd32be-7b9f-429b-8adb-4dc92161143a`,
    },
  ];

  function SwitchJournal(locale) {
    switch (locale) {
      case "uk-en":
        return <TattooJournal data={jsonData[router.locale]} />;
      case "de-en":
        return <TattooJournal data={jsonData[router.locale]} />;
      default:
        return null;
    }
  }

  const {
    styleCollection,
    getLocale,
    getAddress,
    setSelectedIds,
    clearStyleId,
    setSearchState,
  } = useGlobalState();

  const router = useRouter();

  useEffect(() => {
    clearStyleId("");
    setSelectedIds([]);
    getAddress("Location");
    setSearchState((prevSearchState) => ({
      ...prevSearchState,
      query: "",
    }));

    styleCollection();
  }, []);

  return (
    <>
      <Head>
        <title>{t("common:homeScreenSEO.title")}</title>
        <meta
          name="description"
          content={t("common:homeScreenSEO.description")}
        />
        <meta name="keywords" content={t("common:homeScreenSEO.keyword")} />
      </Head>

      <section className="img_text_banner_box">
        <div className="col_full">
          <div className="img_text_box_wrapper exciting_offer_wrap">
            <div className="text_box_wrap right">
              <div className="img_text_box_inner custom_two_col_banner m_switcher">
                <div className="text_box_content justify_content_center m_min_h_reset">
                  <div className="text_box_content_inner m_pr_0 w_100pc max_w_100pc">
                    <div className="tiny_payment_block pr_10_pc m_pr_0">
                      <h1 className="color_gray_550 heading_h1 custom_fs_63 custom_fs_50 txt_mob_fs45 mt_0">
                        <span>{t("common:homePage.bannerTitle")}</span>
                      </h1>
                      <p className="custom_fs_m_18 m_mt_20 m_mb_20">
                        {t("common:homePage.bannerContent")}
                      </p>
                      <div className="text_box_content_inner w_100pc pr_0 dictionary_explore">
                        <ul className="download_app ml_0 w_100pc max_w_100pc mt_25 m_mt_20 text_left d_inline_block download_mob_center">
                          <li className="download_app_title mb_10">
                            {t("common:homePage.Download the inckd")}
                          </li>
                          <li>
                            <Link href={APP_LINK_APPLE} target="_blank">
                              <Image
                                priority
                                src="/app-store-new.svg"
                                alt="App store"
                                width={134}
                                height={41}
                                placeholder="blur"
                                blurDataURL={BLUR_URL}
                                className="custom_download_icons"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href={APP_LINK_GOOGLE} target="_blank">
                              <Image
                                priority
                                src="/g-play-new.svg"
                                alt="Play store"
                                width={134}
                                height={41}
                                placeholder="blur"
                                blurDataURL={BLUR_URL}
                                className="custom_download_icons"
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="img_box_wrap custom_download_shadow no_shadow_before">
                  <span>
                    <Image
                      priority
                      src="/pexels-jasmin-chew-14664626-2-1.png"
                      alt={t("common:homePage.bannerTitle")}
                      fill
                      objectFit="cover"
                      objectPosition="center"
                      placeholder="blur"
                      blurDataURL={BLUR_URL}
                      className="mob_hidden"
                      //layout="responsive"
                    />
                    <Image
                      priority
                      src="/image_2024_01_10T08_41_09_088Z.png"
                      alt={t("common:homePage.bannerTitle")}
                      fill
                      objectFit="cover"
                      objectPosition="center"
                      placeholder="blur"
                      blurDataURL={BLUR_URL}
                      className="desk_hidden"
                      //layout="responsive"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TattooSlider
        title={t("common:homePage.ArtistSliderTitle")}
        content={t("common:homePage.ArtistSliderContent")}
        button={t("common:ExploreMoreArtist")}
        trendingArtist={trendingArtist}
        btnLink={`/${router.locale}/explore/tattoo-artists?location=LondonUK`}
      />

      <KlarnaComponent />
      <TattooDictonary />
      {/* <TattooJournal data={listing} error={error} /> */}
      {SwitchJournal(router.locale)}

      <FinelineComponent />

      <TattooArtistComponent />

      <PaymentTypes
        title1={t("common:homePage.Verified tattoo artists")}
        content1={t("common:homePage.We curate a selection")}
        title2={t("common:homePage.User-Friendly Interface")}
        content2={t("common:homePage.Navigate inckd effortlessly")}
        title3={t("common:homePage.Secure Transactions")}
        content3={t("common:homePage.Rest easy knowing")}
        leftSectionImage="/verified_tattoo_artists.png"
      />
      <HomeFullWidthcarosuel
        title={t("common:homePage.FullWidthCarouselTitle")}
        content={t("common:homePage.FullWidthCarouselContent")}
        datas={tattoos}
        buttonName={t("common:ExploreMoreTattoos")}
        keyword={`/${router.locale}/explore/tattoos`}
        sectionBg="block_bg_gray_150"
        altTag={"Tattoos"}
      />
      <ExploreApps />
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      locale: context.locale,
    },
  };
}
