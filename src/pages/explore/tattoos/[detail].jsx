import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../tattoodetail.module.css";
import { fetchTattooDetail, fetchArtistDetail } from "../../api/web.service";
import {
  APP_LINK_APPLE,
  APP_LINK_GOOGLE,
  BLUR_URL,
} from "@/constants/constants";

import Link from "next/link";
import style from "@/pages/explore/search.module.css";
import { useGlobalState } from "@/context/Context";
import SearchField from "@/components/exploreScreens/searchField";
import { useRouter } from "next/router";
import { TattooSearchModal } from "@/utils/modalUtils";
import { useModal } from "@/utils/modalUtils";
import useTranslation from "next-translate/useTranslation";
import SelectDropdown from "@/components/exploreScreens/searchPanel";
import myPromise from "@/utils/myPromise";
import Loader from "@/components/loading/loader";

export default function Detail({ data}) {
  const router = useRouter();
  const {
    closePopup,
    isPopupOpen,
    openPopup,
  } = useModal();
  
  const {
    onSearch,
    setSelectedIds,
    state,
    styleCollection,
  } = useGlobalState();
  
  const { t } = useTranslation();
  
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState([]);
  const [getStyle, setStyle] = useState([]);
  const [tattoo, setTattoo] = useState([]);
  const [currentBigImage, setCurrentBigImage] = useState(data.tattoo.image);

  


  useEffect(() => {
    styleCollection();
  }, []);

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
          const res = await fetchArtistDetail(data.artist.slug);

          setTattoo(res.data.tattoo);
          setStyle(res.data.style);
          setLocation(res.data.studio);
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
      "tattoo",
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
        <meta
          name="description"
          content={t("common:tattooDetailScreen.description")}
        />
        <meta
          name="keywords"
          content={t("common:tattooDetailScreen.keyword")}
        />
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
                    />
                  </div>
                </div>
              </div>

              <SelectDropdown
                searchKey={""}
                currentTab={"tattoo"}
                selectedStyle={""}
                lat={""}
                lon={""}
                router={router}
                isDetail={true}
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
                      alt={data.artist.artist_name??''}
                      priority
                      src={data.artist.profile_image ?? "/circle-user.png"}
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
                        href={`/${router.locale}/artists/${data.artist.slug}`}
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

                {getStyle.length > 0 && (
                  <div className={styles.product_style}>
                    <span className={styles.product_style_label}>
                      {t("common:image-tattoo-style")}
                    </span>
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
                  </div>
                )}

                <div className={styles.product_detail_location}>
                  <div className={styles.product_location_list}>
                    {location.length > 0 && (
                      <>
                        <span className={styles.product_location_label}>
                          {t("common:locations")}
                        </span>
                        {location.map((el) => (
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
                        ))}
                      </>
                    )}
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

            {!loading && tattoo && tattoo.length > 0 && (
              <>
                <div className={styles.titleWrapper}>
                  <h1>{t("common:you-might-like")}</h1>
                </div>

                <div className={styles.grid_wrapper_tattoo}>
                  {tattoo.map((item) => (
                    <Link
                      href={`/${router.locale}/explore/tattoos/${item.tattoo_uid}`}
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
              </>
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
    const data = await fetchTattooDetail(context.query.detail);

    if (!data.data) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        data: data.data,
        status: true,
        locale: context.locale,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
