import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import loadTranslation from "next-translate/loadNamespaces";
import useTranslation from "next-translate/useTranslation";

import useScrollToTop from "@/hooks/useScrollToTop";
import usePath from '@/hooks/usePath'


import { useGlobalState } from "@/context/Context";
import { TattooSearchModal, useModal } from "@/utils/modalUtils";
import myPromise from "@/utils/myPromise";
import { APP_LINK_APPLE, APP_LINK_GOOGLE, BLUR_URL } from "@/constants/constants";

import API_URL from "@/apiConfig/api.config";
import { axiosInstance } from "@/apiConfig/axios.instance";

import SearchField from "@/components/exploreScreens/searchField";
import FilterPanel from "@/components/exploreScreens/filterPanel";
import Loader from "@/components/loading/loader";

import styles from "../tattoodetail.module.css";
import style from "@/pages/explore/search.module.css";

export default function Detail({ data, locale ,translations }) {
  
  const { isPopupOpen, openPopup, closePopup } = useModal();
  const router = useRouter();
  const { state,  getLocale,  styleCollection,  setSelectedIds,  onSearch,} = useGlobalState();
  
  const { getTranslatedUrl } = usePath();
  const translatedUrl = getTranslatedUrl(state.currentTab);

  const { t } = useTranslation('common'); // Specify namespace if using i18n

  const [loading, setLoading] = useState(false);
  const [tattoo, setTattoo] = useState([]);
  const [getStyle, setStyle] = useState([]);
  const [location, setLocation] = useState([]);
  const [currentBigImage, setCurrentBigImage] = useState(data.tattoo.image);

  useScrollToTop();

  useEffect(() => {
    styleCollection();
    try {
      getLocale({
        locale,
      });
    } catch (error) {}
  }, [locale]);

  const goBack = () => {
    router.back();
  };

  useEffect(() => {
    if (!data) {
      return null;
    } else {
      const fetchData = async () => {
        setLoading(true);
        try {

          const res = await axiosInstance.get(API_URL.SEARCH.GET_ARTIST_DETAIL(data.artist.slug))
           setTattoo(res.data.data.tattoo);
           setStyle(res.data.data.style);
           setLocation(res.data.data.studio);


        } catch (error) {}
        setLoading(false);
      };
      fetchData();
    }
  }, [data]);

  if (!data) {
    return null;
  }

  const handleThumbnailClick = async (newItemImage) => {
    setCurrentBigImage("");
    setLoading(true);
    let image = await myPromise(newItemImage);
    setCurrentBigImage(image);
    setLoading(false);
  };

  const chooseStyle = async (slug) => {
    let updatedIds;
    await setSelectedIds((prevIds) => {
      updatedIds = prevIds.includes(slug)
        ? prevIds.filter((id) => id === slug)
        : [...prevIds, slug];

      return updatedIds;
    });
    await onSearch(
      t("common:routes.explore-tattoos"),
      state.searchKey,
      updatedIds,
      state.location,
      router
    );
  };

  return (
    <>
      <Head>
       <title>{t("common:tattooDetailScreen.title")}</title>
       <link rel="canonical" href={`${process.env.LIVE_URL}/${router.locale}/${t("common:routes.explore-tattoos")}/${router.query.detail}`}/>
        <meta
          name="description"
          content={t("common:tattooDetailScreen.description")}
        />
        <meta name="keywords" content={t("common:tattooDetailScreen.keyword")} />
        <meta
          property="og:title"
          content={t("common:tattooDetailScreen.title")}
        />
        <meta
          property="og:description"
          content= {t("common:tattooDetailScreen.description")}
        />
        <meta property="og:image" content={currentBigImage} />
        <meta
          property="og:url"
          content={`${process.env.LIVE_URL}/${router.locale}/${t("common:routes.explore-tattoos")}/${router.query.detail}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={t("common:tattooDetailScreen.title")}
        />
        <meta
          name="twitter:description"
          content={t("common:tattooDetailScreen.description")}
        />
        <meta name="twitter:image"  content={currentBigImage} />
        <meta name="twitter:site" content="@YourTwitterHandle" />
      </Head>

      <main>
        <div className="page_wrapper">
          <div className="container">
            <div className={style.filter_container}>
              <div className={style.tattoo_search_wrap}>
                <div className={style.search_form}>
                  <div className="search_form_wrap">
                    <SearchField
                      currentTab={"tattoo"}
                      router={router}
                      isDetail={true}
                      pathTranslations={translatedUrl}
                    />
                  </div>
                </div>
              </div>

              <FilterPanel
                searchKey={""}
                currentTab={"tattoo"}
                selectedStyle={""}
                lat={""}
                lon={""}
                router={router}
                isDetail={true}
                pathTranslations={translatedUrl}
              />
            </div>

            <div className={styles.product_detail_wrap}>
              <div className={styles.back_arrow}>
                <Image
                  src={"/back-arrow.svg"}
                  alt="backArrow"
                  width={44}
                  height={44}
                  priority
                  style={{ cursor: "pointer" }}
                  onClick={goBack}
                />
              </div>
              <div className={styles.product_media}>
                {loading ? (
                  <Loader />
                ) : (
                  <Image
                    alt={data.style.name}
                    loading="lazy"
                    src={currentBigImage}
                    height={500}
                    width={500}
                    style={{
                      height: "auto",
                      width: "100%",
                    }}
                    placeholder="blur"
                    blurDataURL={BLUR_URL}
                    quality={75}
                  />
                )}
              </div>

              <div className={styles.product_info_col}>
                <div className={styles.search_profile_block}>
                  <div className={styles.search_profile_pic}>
                    <Image
                      alt={data.artist.artist_name}
                      priority
                      src={data.artist.profile_image}
                      width={100}
                      height={100}
                      placeholder="blur"
                      blurDataURL={BLUR_URL}
                    />
                  </div>
                  <div className={styles.search_profile}>
                    <div className={styles.search_profile_content}>
                      <div className={styles.search_profile_name}>
                        {data.artist.artist_name}
                      </div>
                    </div>
                    <div className={styles.search_profile_link}>
                      <Link
                        href={`/${router.locale}/${t("common:artistDetail.tattoo-artists")}/${data.artist.slug}`}
                        className={styles.profile_getin}
                      >
                        {t("common:viewProfile")}
                      </Link>
                      <a
                        onClick={openPopup}
                        target="_blank"
                        className={styles.profile_bookmark}
                      >
                        <Image
                          src="/bookmark-icon.svg"
                          alt="bookmark icon"
                          width={24}
                          height={24}
                          priority
                        />
                      </a>
                      <a
                        onClick={openPopup}
                        target="_blank"
                        className={styles.profile_share}
                      >
                        <Image
                          src="/share-icon.svg"
                          alt="share icon"
                          width={24}
                          height={24}
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <div className={styles.product_style}>
                  <span className={styles.product_style_label}>
                    {t("common:image-tattoo-style")}
                  </span>

                  {getStyle.length > 0 && (
                    <ul className={styles.product_style_list}>
                      {getStyle.map((e) => {
                        return (
                          <li key={e.id}>
                            <button onClick={() => chooseStyle(e.slug)}>
                              {e.name}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>

                <div className={styles.product_detail_location}>
                  <span className={styles.product_location_label}>
                    {t("common:locations")}
                  </span>
                  <div className={styles.product_location_list}>
                    {location.length > 0 &&
                      location.map((el) => {
                        return (
                          <span
                            className={styles.product_loc_title}
                            key={el.studio_uid}
                          >
                            <Image
                              src="/location-small.svg"
                              width={16}
                              height={17}
                              alt="Berlin, Germany"
                            />
                            {el.city}, {el.country}
                          </span>
                        );
                      })}
                  </div>
                </div>

                <ul className={styles.download_app}>
                  <li className={styles.download_app_title}>
                    <h6>{t("common:download-our-app")}</h6>
                  </li>
                  <li>
                    <Link target="_blank" href={APP_LINK_APPLE}>
                      <Image
                        width={134}
                        height={41}
                        priority
                        src="/app-store-new.svg"
                        alt="app store"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link target="_blank" href={APP_LINK_GOOGLE}>
                      <Image
                        width={134}
                        height={41}
                        src="/g-play-new.svg"
                        alt="g play"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.titleWrapper}>
              <h1>{t("common:you-might-like")}</h1>
            </div>

            {loading === true ? null : tattoo && tattoo.length > 0 ? (
              <div className={styles.grid_wrapper_tattoo}>
                {tattoo.map((item) => (
                  <Link
                    href={`/${router.locale}/${t("common:routes.explore-tattoos")}/${item.tattoo_uid}`}
                    className={styles.listing_gridItem}
                    key={item.tattoo_uid}
                    prefetch
                    onClick={() => handleThumbnailClick(item.tattoo_image)}
                  >
                    <Image
                      alt={item.style_name}
                      loading="lazy"
                      src={item.image_medium}
                      fill
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL={BLUR_URL}
                      quality={62}
                    />
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
          <TattooSearchModal
            className="custom-modal"
            isOpen={isPopupOpen}
            closeModal={closePopup}
          />
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  
  try {
    const {locale } = context;
    const res = await axiosInstance.get(API_URL.SEARCH.GET_TATTOO_DETAIL(context.query.detail))
    const translations = await loadTranslation("common", locale);

    if (!res.data) {


      return {
        notFound: true,
      };
    }
    return {
      props: {
        data: res.data.data,
        status: true,
        locale: context.locale,
        translations
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}