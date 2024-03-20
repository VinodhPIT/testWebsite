import React, { useEffect } from "react";
import Image from "next/image";
import {
  fetchCategoryData,
  fetchMultiData,
} from "@/apiConfig/webService";
import { Parameters } from "@/utils/params";
import { renderCategoryComponent } from "@/components/exploreScreens/tab";
import style from "@/pages/explore/search.module.css";
import { useRouter } from "next/router";
import SearchField from "@/components/exploreScreens/searchField";
import { addAdsToResults } from "@/helpers/helper";
import { getUrl } from "@/utils/getUrl";
import { useGlobalState } from "@/context/Context";
import useTranslation from "next-translate/useTranslation";
import SelectDropdown from "@/components/exploreScreens/searchPanel";
import { getPlaceDetails } from "@/utils/placesApi";
import { getRandomSeed, getMatchingStyles } from "@/helpers/helper";
import { categoryMapping } from "@/constants/categoryMappings";

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
  }, [
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
  ]);

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

  return (
    <>
      {/* <Head>
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
      </Head> */}
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
  const category = categoryMapping[slug[0]] || null;

  if (!category) {
    return { notFound: true };
  }

  const placeDetails = await getPlaceDetails(query.location ?? "");

  const styleId =
    query.style !== undefined
      ? (await getMatchingStyles(query.style.split(","))).filter(
          (id) => id !== null
        )
      : [];

  try {
    const fetchFunction =
      category === "all" ? fetchMultiData : fetchCategoryData;
    const fetchParams = {
      ...Parameters,
      category,
      style: styleId,
      search_key: query.keyword ?? "",
      latitude: placeDetails?.latitude??'0.00',
      longitude: placeDetails?.longitude??"0.00",
      seed: getRandomSeed(),
    };

    const results = await fetchFunction(fetchParams);
    const totalItems =
      category === "all" ? results.totalCount : results.rows.total.value;
    const data = category === "all" ? results.data : results.rows.hits;

    const addData = await addAdsToResults(data, isMobile);

    return {
      props: {
        data: addData,
        currentTab: category,
        pageNo: 0,
        totalItems,
        searchKey: query.keyword ?? "",
        selectedStyle: query.style ?? "",
        lat: placeDetails?.latitude??"0.00",
        lon: placeDetails?.longitude??"0.00",
        locale,
        seed: fetchParams.seed,
        slugIds: styleId,
      },
    };
  } catch (error) {
    return { props: { data: null } };
  }
}
