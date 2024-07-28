import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";

import useTranslation from "next-translate/useTranslation";
import loadTranslation from "next-translate/loadNamespaces";

import useSticky from "@/hooks/useSticky";
import useCanonicalUrl from '@/hooks/useCanonicalUrl'; 
import usePath from '@/hooks/usePath'

import { useGlobalState } from "@/context/Context";
import { Parameters } from "@/constants/index";

import { getPlaceDetails } from "@/lib/googlePlaces";
import { categoryMapping } from "@/constants/index";

import { getRandomSeed, getMatchingStyles } from "@/helpers/helper";
import { searchParam, fetchMulticategory } from "@/helpers/helper";

import API_URL from "@/apiConfig/api.config";
import { axiosInstance } from "@/apiConfig/axios.instance";
import { getMetaTags } from "@/utils/metaUtils";
import { getUrl } from "@/utils/getUrl";

import { renderCategoryComponent } from "@/components/exploreScreens/tab";
import SearchField from "@/components/exploreScreens/searchField";
import FilterPanel from "@/components/exploreScreens/filterPanel";

import style from "@/pages/explore/search.module.css";

const Search = ({ data, currentTab, pageNo, totalItems, searchKey,  selectedStyle, lat, lon, locale, seed,slugIds,translations, metaTags}) => {

  const { state, fetchServerlData,loadMore,styleCollection,getAddress,setSearchState} = useGlobalState();

  const { t } = useTranslation("common", { i18n: translations });
  
  const { isSticky, elementRef, topRef } = useSticky();

  const canonicalUrl = useCanonicalUrl();

  const { getTranslatedUrl } = usePath();

  const translatedUrl = getTranslatedUrl(currentTab);


  const categoryTab = [
    {
      id: "all",
      label:t("common:tabs.all"),
      image: "/all.svg",
      activeImage: "/all-active.svg",
      url:t("common:routes.explore-all"),
    },
    {
      id: "tattoo",
      label: t("common:tabs.tattoo"),
      image: "/flame-new.svg",
      activeImage: "/Flame-active.svg",
      url:t("common:routes.explore-tattoos"),
    },
    {
      id: "flash",
      label: t("common:tabs.flash"),
      image: "/bolt-new.svg",
      activeImage: "/bolt-active.svg",
      url:t("common:routes.explore-flash"),
    },
    {
      id: "artist",
      label: t("common:tabs.artist"),
      image: "/colour-palette-new.svg",
      activeImage: "/colour-palette-active.svg",
      url:t("common:routes.tattoo-artists"),
      isArtist:true
    },
  ];

  useEffect(() => {
    try {
      styleCollection();
      fetchServerlData({data,currentTab, pageNo,totalItems, searchKey, selectedStyle,  lat,lon, locale, seed, slugIds});
    } catch (error) {}
  }, [ data, currentTab,  pageNo, totalItems,searchKey, selectedStyle, lat,lon,locale,seed,slugIds]);


  useEffect(() => {
    if (lat === "") {
      getAddress("");
    }
  }, [lat]);

  useEffect(() => {
    if (searchKey === "") {
      setSearchState((prevSearchState) => ({
        ...prevSearchState,
        query: "",
      }));
    }
  }, [searchKey]);

  const collectionLength = state.categoryCollection.filter(
    (e) => e._index !== "ad"
  );

  const router = useRouter();

  const updateTab = async (url ,isArtist) => {
    await getUrl(url ,searchKey, selectedStyle, state.location, router);
  };


  return (
    <>
      <Head>
        <title>{t(metaTags.title)}</title>
        <link rel="canonical" href={canonicalUrl}/>
        <meta name="description" content={t(metaTags.description)} />
        <meta name="keywords" content={t(metaTags.keyword)} />
        <meta property="og:title" content={t(metaTags.title)} />
        <meta property="og:description" content={t(metaTags.description)} />
        <meta property="og:image" content={metaTags.og_image} />
        <meta
          property="og:url"
          content={canonicalUrl}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t(metaTags.title)} />
        <meta name="twitter:description" content={t(metaTags.description)} />
        <meta name="twitter:image" content={metaTags.og_image} />
        <meta name="twitter:site" content="@YourTwitterHandle" />
      </Head>

      <main>
        <div className={style.page_search_wrapper}>
          <div className="container">
            <div className={style.filter_container}>
              <div className={style.tattoo_search_wrap}>
                <div className={style.search_form}>
                  <div className="search_form_wrap">
                    <SearchField
                      searchKey={searchKey}
                      currentTab={currentTab}
                      selectedStyle={selectedStyle}
                      lat={lat}
                      lon={lon}
                      router={router}
                      pathTranslations={translatedUrl}
                    />
                  </div>
                </div>
              </div>

              <FilterPanel
                searchKey={searchKey}
                currentTab={currentTab}
                selectedStyle={selectedStyle}
                lat={lat}
                lon={lon}
                router={router}
                isDetail={false}
                pathTranslations={translatedUrl}
              />
            </div>
            <div ref={topRef}></div>
            <div className={isSticky ? style.placeholder : ""}></div>
            <div
              className={`${style.tab_container} ${
                isSticky ? style.sticky : ""
              }`}
              ref={elementRef}
            >
              <div className={style.tabSection}>
                <ul>
                  {categoryTab.map((tab) => (
                    <li
                      key={tab.id}
                      className={
                        currentTab === tab.id
                          ? style.activeTab
                          : style.inActivetab
                      }
                    >
                      <button
                        className={style.tabBox}
                        onClick={() => updateTab(tab.url ,tab.isArtist)}
                      >
                        <Image
                          width={25}
                          height={25}
                          src={
                            currentTab === tab.id ? tab.activeImage : tab.image
                          }
                          alt={tab.id}
                        />

                        {tab.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {renderCategoryComponent(
              state.currentTab,
              state.categoryCollection
            )}

            {!state.loading &&
              collectionLength.length !== 0 &&
              collectionLength.length !== state.totalItems && (
                <div className={style.grid_more_view}>
                  {state.currentTab !== "artist" && (
                    <p>
                      {t("common:See out of")} {collectionLength.length}/
                      {state.totalItems}
                    </p>
                  )}

                  <div className={style.btn_wrapper}>
                    <button
                      onClick={() => {
                        loadMore();
                      }}
                      className="btn_secondary btn_view_more"
                    >
                      {t("common:loadMore")}
                    </button>
                  </div>
                </div>
              )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const { query, locale } = context;
  const { slug } = query;

  const category = categoryMapping[slug[0]] || null;

  // Load Meta Tags from the server

  const translations = await loadTranslation("common", locale);
  const metaTags = getMetaTags(category);

  try {
    const placeDetails = await getPlaceDetails(query.location ?? "");

    const styleId =
      query.style !== undefined
        ? (await getMatchingStyles(query.style.split(","))).filter(
            (id) => id !== null
          )
        : [];

    const fetchParams = {
      ...Parameters,
      category,
      style: styleId,
      search_key: query.keyword ?? "",
      latitude: placeDetails?.latitude ?? "0.00",
      longitude: placeDetails?.longitude ?? "0.00",
      seed: getRandomSeed(),
    };

    let response = [];
    let totalItems = 0;

    if (category === "all") {
      try {
        const [tattooFetch, flashFetch] = await Promise.all([
          axiosInstance.post(
            API_URL.SEARCH.SEARCH_BY_CATRGORY("tattoo"),
            fetchMulticategory({
              ...fetchParams,
              category: "tattoo",
            })
          ),
          axiosInstance.post(
            API_URL.SEARCH.SEARCH_BY_CATRGORY("flash"),
            fetchMulticategory({
              ...fetchParams,
              category: "flash",
            })
          ),
        ]);

        const tattooRes = tattooFetch.data;
        const flashRes = flashFetch.data;

        const shuffledResults = [...tattooRes.rows.hits, ...flashRes.rows.hits];
        response = shuffledResults;
        totalItems = tattooRes.rows.total.value + flashRes.rows.total.value;
      } catch (error) {}
    } else {
      try {
        const res = await axiosInstance.post(
          API_URL.SEARCH.SEARCH_BY_CATRGORY(category),
          searchParam(fetchParams)
        );
        response = res.data.rows.hits;
        totalItems = res.data.rows.total.value;
      } catch (error) {}
    }

    return {
      props: {
        data: response,
        currentTab: category,
        pageNo: 0,
        totalItems,
        searchKey: query.keyword ?? "",
        selectedStyle: query.style ?? "",
        lat: placeDetails?.latitude ?? "0.00",
        lon: placeDetails?.longitude ?? "0.00",
        locale,
        seed: fetchParams.seed,
        slugIds: styleId,
        translations,
        metaTags,
      },
    };
  } catch (error) {
    return {
      props: {
        data: [],
        currentTab: null,
        pageNo: 0,
        totalItems: 0,
        searchKey: query.keyword ?? "",
        selectedStyle: query.style ?? "",
        lat: "0.00",
        lon: "0.00",
        locale,
        seed: getRandomSeed(),
        slugIds: [],
      },
    };
  }
}
