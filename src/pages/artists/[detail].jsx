import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import useTranslation from "next-translate/useTranslation";

import useScrollToTop from "@/hooks/useScrollToTop";
import usePath from '@/hooks/usePath'

import { TattooSearchModal } from "@/utils/modalUtils";
import { useModal } from "@/utils/modalUtils";
import { blurDataURL } from "@/constants/constants";

import { useGlobalState } from "@/context/Context";
import SearchField from "@/components/exploreScreens/searchField";
import FilterPanel from "@/components/exploreScreens/filterPanel";
import { renderArtistGallery } from "@/components/exploreScreens/tab";

import { axiosInstance } from "@/apiConfig/axios.instance";
import API_URL from "@/apiConfig/api.config";

import styles from "./style.module.css";
import style from "@/pages/explore/search.module.css";


export default function Detail({ data }) {
  const { isPopupOpen, openPopup, closePopup } = useModal();
  const { t } = useTranslation();
  const { state,  styleCollection } = useGlobalState();

  const { getTranslatedUrl } = usePath();
  const translatedUrl = getTranslatedUrl(state.currentTab);

  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  const [currenState, setCurrentTab] = useState("all");
  const [getAll, setAll] = useState([]);
  const [tattooList, setTattooList] = useState([]);
  const [flashList, setFlashList] = useState([]);
  const [artistProfile, setProfile] = useState();
  const [loading, setLoading] = useState(false);

  const commonTabData = [
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
      id: "Information",
      label: t("common:tabs.info"),
      image: "/Info-circle.svg",
      activeImage: "/Info-circle-active.svg",
    },
  ];

  useScrollToTop();

  useEffect(() => {
    styleCollection();
  }, [styleCollection]);

  const changeTab = (tab) => {
    setCurrentTab(tab);
  };

  useEffect(() => {
    if (!data) {
      return null;
    } else {
      setLoading(true);
      const fetchData = async () => {
        setProfile(data);
        try {
          const res = await axiosInstance.get(
            API_URL.SEARCH.GET_ARTIST_GALLERY(data.profile_uid)
          );
          setLoading(false);
          setAll(res.data.data);
          setTattooList(res.data.data.filter((e) => e.tattoo_type === "normal"));
          setFlashList(res.data.data.filter((e) => e.tattoo_type === "flash"));
        } catch (error) {}
      };
      fetchData();
    }
  }, [data]);

  return (
    <>
      <Head>
         <title>{t("common:artistDetailScreen.title")}</title>
        <meta
          name="description"
          content={t("common:artistDetailScreen.description")}
        />
        <meta name="keywords" content={t("common:artistDetailScreen.keyword")} />
        <meta
          property="og:title"
          content={t("common:artistDetailScreen.title")}
        />
        <meta
          property="og:description"
          content= {t("common:artistDetailScreen.description")}
        />
        <meta property="og:image" content={data.image} />
        <meta
          property="og:url"
          content={`${process.env.LIVE_URL}/${router.locale}/artists/${router.query.detail}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={t("common:artistDetailScreen.title")}
        />
        <meta
          name="twitter:description"
          content={t("common:artistDetailScreen.description")}
        />
        <meta name="twitter:image"  content={data.image} />
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
                      currentTab={"artist"}
                      router={router}
                      isDetail={true}
                      pathTranslations={translatedUrl}
                    />
                  </div>
                </div>
              </div>

              <FilterPanel
                searchKey={""}
                currentTab={"artist"}
                selectedStyle={""}
                lat={""}
                lon={""}
                router={router}
                isDetail={true}
                pathTranslations={translatedUrl}
              />
            </div>

            <div className={styles.search_profile_block}>
              <div className={styles.back_arrow}>
                <Image
                  src={"/back-arrow.svg"}
                  alt="backArrow"
                  width={44}
                  height={44}
                  priority
                  onClick={goBack}
                />
              </div>
              <div className={styles.search_profile_pic}>
                <Image
                  alt={data.first_name + " " + data.last_name}
                  priority
                  src={data.image}
                  width={100}
                  height={100}
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                />
              </div>

              <div className={styles.search_profile}>
                <div className={styles.search_profile_content}>
                  <div className={styles.search_profile_name}>
                    {data.artist_name ?? `${data.first_name} ${data.last_name}`}
                  </div>
                  <div className={styles.search_profile_details}>
                    {data.studio[0].city}, {data.studio[0].country}
                  </div>
                </div>
                <div className={styles.search_profile_link}>
                  <a
                    onClick={openPopup}
                    target="_blank"
                    className={styles.profile_getin}
                  >
                    {t("common:getIntouch")}
                  </a>
                  <a
                    onClick={openPopup}
                    target="_blank"
                    className={styles.profile_bookmark}
                  >
                    <Image
                      width={24}
                      height={24}
                      priority
                      src="/bookmark-icon.svg"
                      alt="bookmark icon"
                    />
                  </a>
                  <a
                    onClick={openPopup}
                    target="_blank"
                    className={styles.profile_share}
                  >
                    <Image
                      width={24}
                      height={24}
                      src="/share-icon.svg"
                      alt="share icon"
                      priority
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className={style.tab_container}>
              <div className={style.tabSection}>
                <ul>
                  {commonTabData.map((tab) => (
                    <li
                      key={tab.id}
                      className={
                        currenState === tab.id
                          ? style.activeTab
                          : style.inActivetab
                      }
                      onClick={() => changeTab(tab.id)}
                    >
                      <div className={style.tabBox}>
                        <Image
                          width={25}
                          height={25}
                          priority
                          src={
                            currenState === tab.id ? tab.activeImage : tab.image
                          }
                          alt={tab.id}
                        />

                        <p style={{ margin: "0" }}>{tab.label}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {renderArtistGallery(
              currenState,
              getAll,
              tattooList,
              flashList,
              artistProfile,
              loading
            )}
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
    const res = await axiosInstance.get(API_URL.SEARCH.GET_ARTIST_DETAIL(context.query.detail));
    if (!res.data) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        data: res.data.data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
