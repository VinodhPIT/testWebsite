import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGlobalState } from "@/context/Context";
import Head from "next/head";
import KlarnaBanner from "@/components/klarnaBanner/KlarnaBanner";
import TattooSlider from "@/components/TattooSlider/TattooSlider";
import TattooJournal from "@/components/tattooJournal/TattooJournal";
import PaymentTypes from "@/components/paymentTypes/PaymentTypes";
import CarouselSection from "@/components/CarouselSection/CarosuelSection";
import CarouselSectionnew from "@/components/CarouselSection/CarosuelSectionnew";
import jsonData from "@/data/journal.json";
import { useRouter } from "next/router";
import {
  APP_LINK_APPLE,
  APP_LINK_GOOGLE,
  blurDataURL,
} from "@/constants/constants";
import useTranslation from "next-translate/useTranslation";
import TattooIdea from "@/components/tattooIdea/TattooIdea";
import tattoo from "@/data/datas.json";

export default function Home({ data, locale }) {
  const router = useRouter();
  const { t } = useTranslation();
  const tattoos = [
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/21561_20230312230323292-medium.jpg",
      url: `${process.env.LIVE_URL}/${router.locale}/explore/tattoos/ba76717a-788c-42ec-a50c-c946a7deb7b7`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/26057_20230814190028838-medium.jpg",
      url: `${process.env.LIVE_URL}/${router.locale}/explore/tattoos/ffbb5f5b-c124-4599-9a2a-8b8fb70d0305`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/2836_20220916175556641-medium.jpg",
      url: `${process.env.LIVE_URL}/${router.locale}/explore/tattoos/fe25e0ec-bf1d-451d-93d4-70ac74a6286d`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/13796_20230105095643483-medium.jpg",
      url: `${process.env.LIVE_URL}/${router.locale}/explore/tattoos/1374fce3-e79a-4381-a9f7-281c84793b5c`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/18174_20230208215617181-medium.jpg",
      url: `${process.env.LIVE_URL}/${router.locale}/explore/tattoos/c2377f90-d4c4-4056-896e-53a2da502273`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/22296_20230323003140535-medium.jpg",
      url: `${process.env.LIVE_URL}/${router.locale}/explore/tattoos/32a4ef5e-159d-4e3a-8498-5f2244b0fb8d`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/4677_20221006183710030-medium.jpg",
      url: `${process.env.LIVE_URL}/${router.locale}/explore/tattoos/570d3a82-3d83-41b1-8b3c-ed72fe064c42`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/4674_20221006183315588-medium.jpg",
      url: `${process.env.LIVE_URL}/${router.locale}/explore/tattoos/ebdd32be-7b9f-429b-8adb-4dc92161143a`,
    },
  ];

  const trendingArtist = [
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/8863_20231115232146356_4B0029D0-4FCF-4CC4-99BF-91A77CD4CE6C.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/29508_20231115232450433-medium.jpg",
      name: "Mia Bella",

      city: "Rotherham",
      country: "United Kingdom",
      url: `${process.env.LIVE_URL}/${router.locale}/artists/miabella_ohshrf35`,
    },
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/8888_20231116231802146_3a300540-f428-49e8-8bff-7a6e76f51781.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/29519_20231116232704731-medium.jpg",
      name: "Julia Blackfox",

      city: "Frankfurt an der Oder",
      country: "Germany",
      url: `${process.env.LIVE_URL}/${router.locale}/artists/juliablackfox_4rh203ng`,
    },
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/920_5CC75242-4928-4A0B-A72D-90E651FCA364.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/9439_20221118114953632-medium.jpg",
      name: "Alessandro Lanzafame",

      city: "London",
      country: "United Kingdom",

      url: `${process.env.LIVE_URL}/${router.locale}/artists/alessandro-lanzafame_nts3jh4k`,
    },
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/566_175C2680-D5A1-46C6-A5BF-13055B046823.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/2164_20220831155842506-medium.jpg",
      name: "Barbara Nobody",

      city: "London,",
      country: "United Kingdom",
      url: `${process.env.LIVE_URL}/${router.locale}/artists/barbaranobody_e8w4uiq5`,
    },

    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/4449_20230307153700577_7FCCE75E-1210-4929-B396-295ECE8D7D0E.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/21192_20230307143220227-medium.jpg",
      name: "Mileink",

      city: "London",
      country: "United Kingdom",
      url: `${process.env.LIVE_URL}/${router.locale}/artists/Mileink_8t07n1nk`,
    },
    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/3741_20230209033123652_D9044E0B-6D66-4491-A800-E100E428B30B.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/18214_20230209043507234-medium.jpg",
      name: "13FoxxTattoos",

      city: "London",
      country: "United Kingdom",
      url: `${process.env.LIVE_URL}/${router.locale}/artists/13foxxtattoos_6426m6eg`,
    },

    {
      artistImage:
        "https://storage.googleapis.com/hllincd-bucket/profile/image/3587_20230206105448273_7BBC9E76-F92B-4BBC-B743-0DD7BC4C1F31.jpg",
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/17589_20230204173826801-medium.jpg",
      name: "Çinar Efe Tattoo",
      city: "London",
      country: "United Kingdom",
      url: `${process.env.LIVE_URL}/${router.locale}/artists/cinar-efe_acwe82ae`,
    },
  ];

  const {
    styleCollection,
    getLocale,
    getAddress,
    setSelectedIds,
    clearStyleId,
    setSearchState,
  } = useGlobalState();

  function SwitchJournal(locale) {
    switch (locale) {
      case "uk-en":
        return <TattooJournal data={jsonData[router.locale]} />;
      case "de-de":
        return <TattooJournal data={jsonData[router.locale]} />;
      default:
        return null;
    }
  }

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

  const wolfTattoo = [
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/15791_20230123114449181-medium.jpg",
      url: `${process.env.LIVE_URL}/${router.locale}/explore/tattoos/d5341b19-53fa-452a-a48d-5939e8447567`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/8921_20221113205418987-medium.jpg",
      url: `${process.env.LIVE_URL}/${router.locale}/explore/tattoos/b688a83f-7af7-42ab-8c6d-edd2fcdf6412`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/11485_20221211114627901-medium.jpg",
      url: `${process.env.LIVE_URL}/${router.locale}/explore/tattoos/36ee28fd-6985-468a-afcb-b78b8f807959`,
    },
    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/13918_20230106083756566-medium.jpg",
      url: `${process.env.LIVE_URL}/${router.locale}/explore/tattoos/edbf815f-b1ce-456a-afc1-3f9a0b0b6cff`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/691_20220412032624728-medium.jpg",
      url: `${process.env.LIVE_URL}/${router.locale}/explore/tattoos/f63585f8-c917-4a17-b2f0-c8e7e50cd573`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/9049_20221115155833283-medium.jpg",
      url: `${process.env.LIVE_URL}/${router.locale}/explore/tattoos/f5eeea9a-60f8-4aad-918a-49edba55e566`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/14421_20230110024759369-medium.jpg",
      url: `${process.env.LIVE_URL}/${router.locale}/explore/tattoos/17f6cf8d-d8c9-4048-b5e7-1bc13289bac6`,
    },

    {
      image:
        "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/3595_20220925051912507-medium.jpg",
      url: `${process.env.LIVE_URL}/${router.locale}/explore/tattoos/b602e50a-03a6-40d0-a231-b324e35f2517`,
    },
  ];

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
          <div className="img_text_box_wrapper exciting_offer_wrap mb_8 m_mb_0">
            <div className="text_box_wrap right">
              <div className="img_text_box_inner custom_two_col_banner m_switcher">
                <div className="text_box_content justify_content_center m_min_h_reset m_pt_15 m_pb_25">
                  <div className="text_box_content_inner m_pr_0 w_100pc max_w_100pc">
                    <div className="tiny_payment_block pr_10_pc m_pr_0">
                      <h1 className="color_gray_550 heading_h1 custom_fs_60 custom_fs_50 txt_mob_fs38 mt_0">
                        <span>{t("common:homePage.bannerTitle")}</span>
                      </h1>
                      <p className="m_mt_10 m_mb_10 custom_fs_m_14">
                        {t("common:homePage.bannerContent")}
                      </p>
                      <div className="text_box_content_inner w_100pc pr_0 dictionary_explore">
                        <ul className="download_app ml_0 w_100pc max_w_100pc mt_25 m_mt_10 text_left d_inline_block download_mob_center">
                          <li className="download_app_title mb_10 m_mb_5 m_lh_19">
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
                                blurDataURL={blurDataURL}
                                className="custom_download_icons desk_hidden"
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
                                blurDataURL={blurDataURL}
                                className="custom_download_icons desk_hidden"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link href="#" target="_blank">
                              <Image
                                priority
                                src="/qr-code-inckd.png"
                                alt="qr code"
                                width={121}
                                height={121}
                                placeholder="blur"
                                blurDataURL={blurDataURL}
                                className="custom_download_icons app_qr_home mob_hidden"
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
                      blurDataURL={blurDataURL}
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
                      blurDataURL={blurDataURL}
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
      <TattooIdea></TattooIdea>
      <TattooSlider
        title={t("common:homePage.ArtistSliderTitle")}
        content={t("common:homePage.ArtistSliderContent")}
        button={t("common:ExploreMoreArtist")}
        trendingArtist={tattoo.artists}
      />
      <KlarnaBanner />
      <CarouselSection
        title="Explore tattoos"
        content="Explore the World of Ink: Discover Tattoos in Every Style, From Timeless to Trendsetting"
        datas={tattoo.tattoo_images}
      />

      <CarouselSectionnew
        title="Explore tattoo styles"
        content="Explore the World of Ink: Discover Tattoos in Every Style, From Timeless to Trendsetting"
        buttonName="Explore more tattoos"
        datas={wolfTattoo}
        keyword={"Wolf"}
        altTag="Wolf Tattoo"
      />

      {SwitchJournal(router.locale)}

      <PaymentTypes
        title1={t("common:homePage.Verified tattoo artists")}
        content1={t("common:homePage.We curate a selection")}
        title2={t("common:homePage.User-Friendly Interface")}
        content2={t("common:homePage.Navigate inckd effortlessly")}
        title3={t("common:homePage.Secure Transactions")}
        content3={t("common:homePage.Rest easy knowing")}
        leftSectionImage="/verified_tattoo_artists_01.png"
      />
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
