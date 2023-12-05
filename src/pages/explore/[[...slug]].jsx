import React, { useEffect, useState } from "react";
import Head from "next/head";
import { fetchCategoryData, fetchMultiData, getStyles } from "@/action/action";
import { Parameters } from "@/components/parameters/params";
import { renderCategoryComponent } from "@/components/customTabs/tab";

import style from "@/pages/explore/search.module.css";
import { useRouter } from "next/router";
import SearchField from "@/components/tattooSearch/tattooSearch";
import { addAdsToResults } from "@/helpers/helper";
import { getUrl } from "@/utils/getUrl";
import { useGlobalState } from "@/context/Context";
import useTranslation from "next-translate/useTranslation";
import SelectDropdown from "@/components/selectDrpodown/selectDropdown";
import { getPlaceDetails } from "@/utils/placesApi";

const MobileDetect = require("mobile-detect");
const Search = ({
  data,
  currentTab,
  pageNo,
  totalItems,
  searchKey,
  selectedStyle,
  lat,
  lon,
  loading,
  locale,
  seed,
  slugIds,
}) => {
  const {
    state,
    fetchServerlData,
    changeTab,
    loadMore,
    styleCollection,
    getAddress,
    setSearchState,
  } = useGlobalState();

  const { t } = useTranslation();

  const categoryTab = [
    {
      id: "all",
      label: t("common:tabs.all"),
      image: "/all.svg",
      activeImage: "/all-active.svg",
    },
    {
      id: "tattoo",
      label: t("common:tabs.tattoo"),
      image: "/flame-new.svg",
      activeImage: "/Flame-active.svg",
    },
    {
      id: "flash",
      label: t("common:tabs.flash"),
      image: "/bolt-new.svg",
      activeImage: "/bolt-active.svg",
    },
    {
      id: "artist",
      label: t("common:tabs.artist"),
      image: "/colour-palette-new.svg",
      activeImage: "/colour-palette-active.svg",
    },
  ];

  useEffect(() => {
    try {
      styleCollection();

      fetchServerlData({
        data,
        currentTab,
        pageNo,
        totalItems,
        searchKey,
        selectedStyle,
        lat,
        lon,
        locale,
        seed,
        slugIds,
      });
    } catch (error) {}
  }, [data]);

  useEffect(() => {
    if (lat === "") {
      getAddress("Location");
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

  const updateTab = async (tab) => {
    await getUrl(tab, searchKey, selectedStyle, state.location, router);
  };

console.log("latitude",lat)
console.log("longitude",lon)





  return (
    <>
      <Head>
        <title>
          Explore Tattoo images, designs, and find tattoo artists with ease
        </title>
        <meta
          name="description"
          content="Book tattoo artists, explore tattoo designs, images, and pay in installments. Your one-stop platform for all things tattoo, at your convenience."
        />
        <meta
          name="keywords"
          content="Tattoo, Tattoo artist, Tattoo artists,  Tattoo booking,  Tattoo images,  Tattoo styles,  Tattoo Business, Tattoo Designs, Tattooing, Tattoo Flash, Tattoo Shop, Tattoo Installments, Tattooers, Tattoo app, Tattoo lovers, "
        />
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
                      isDetail={false}
                    />
                  </div>
                </div>
              </div>

              <SelectDropdown
                searchKey={searchKey}
                currentTab={currentTab}
                selectedStyle={selectedStyle}
                lat={lat}
                lon={lon} 
                router={router}
                isDetail={false}
              />
            </div>

            <div className={style.tab_container}>
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
                        onClick={() => updateTab(tab.id)}
                      >
                        <img
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
                  <p>
                    See out of {collectionLength.length}/{state.totalItems}
                  </p>
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
  const { query, req, locale } = context;

  const { slug } = query;

  const userAgent = req.headers["user-agent"];
  const md = new MobileDetect(userAgent);
  const isMobile = md.mobile();
  const min = 3;
  const max = 3409357923759259;
  const seed = Math.floor(Math.random() * (max - min + 1)) + min;

  const categoryMapping = {
    tattoos: "tattoo",
    "flash-tattoos": "flash",
    "tattoo-artists": "artist",
    all: "all",
  };

  const category = categoryMapping[slug[0]] || null;

  let style = "";
  let styleId = "";

  const placeDetails = await getPlaceDetails(query.location ?? "");

  if (query.style !== undefined) {
    const slugsToCheck = query.style.split(",");
    const stylesArray = await getStyles();

    const matchingStyles = slugsToCheck.map((style) => {
      const matchingStyle = stylesArray.data.find(
        (styleObj) => styleObj.slug === style
      );
      return matchingStyle ? matchingStyle.id : null;
    });
    styleId = matchingStyles.filter((id) => id !== null);
  }

  try {
    if (category === "all") {
      const results = await fetchMultiData({
        ...Parameters,
        category,
        search_key: query.keyword ?? "",
        style: styleId,
        latitude: placeDetails.latitude,
        longitude: placeDetails.longitude,
        seed,
      });

      let addData = await addAdsToResults(results.data, isMobile);

      return {
        props: {
          data: addData,
          currentTab: category,
          pageNo: 0,
          totalItems: results.totalCount,
          searchKey: query.keyword ?? "",
          selectedStyle: style,
          lat: placeDetails.latitude,
          lon: placeDetails.longitude,
          locale: context.locale,
          seed,
          slugIds: styleId,
        },
      };
    } else {
      const data = await fetchCategoryData({
        ...Parameters,
        category,
        style: styleId,
        search_key: query.keyword ?? "",
        latitude: placeDetails.latitude,
        longitude: placeDetails.longitude,
        seed,
      });

      // alert(placeDetails.latitude ?? "")

      let addData = await addAdsToResults(data.rows.hits, isMobile);

      return {
        props: {
          data: addData,
          currentTab: category,
          pageNo: 0,
          totalItems: data.rows.total.value,
          searchKey: query.keyword ?? "",
          selectedStyle: query.style ?? "",
          lat: placeDetails.latitude,
          lon: placeDetails.longitude,
          locale: locale,
          seed,
          slugIds: styleId,
        },
      };
    }
  } catch (error) {
    return {
      props: {
        data: null,
      },
    };
  }
}
