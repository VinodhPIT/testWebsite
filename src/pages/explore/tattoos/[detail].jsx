import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../tattoodetail.module.css";
import { fetchTattooDetail } from "@/action/action";
import {
  APP_LINK_APPLE,
  APP_LINK_GOOGLE,
  blurDataURL,
} from "@/constants/constants";
import { fetchArtistDetail } from "@/action/action";
import Link from "next/link";
import { useGlobalState } from "@/context/Context";
import SearchField from "@/components/tattooSearch/tattooSearch";
import { useRouter } from "next/router";
import style from "@/pages/explore/search.module.css";
import {TattooSearchModal} from "@/utils/modalUtils";
import { useModal } from "@/utils/modalUtils";
import useTranslation from "next-translate/useTranslation";
import SelectDropdown from "@/components/selectDrpodown/selectDropdown";
import myPromise from "@/components/myPromise";
import Loader from "@/components/loader";

export default function Detail({ data, status, locale }) {

 

  
  
  const { isPopupOpen, openPopup, closePopup } = useModal();
  const router = useRouter();
  const { getLocale, styleCollection  ,setSelectedIds ,clearStyleId} = useGlobalState();

  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);
  const [tattoo, setTattoo] = useState([]);
  const [getStyle, setStyle] = useState([]);
  const [location, setLocation] = useState([]);
  const [currentBigImage, setCurrentBigImage] = useState(data.tattoo.image);



  useEffect(() => {
    styleCollection();
    // setSelectedIds([])
    // clearStyleId()
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
          const res = await fetchArtistDetail(data.artist.slug);

          setTattoo(res.data.tattoo);
          setStyle(res.data.style);
          setLocation(res.data.studio);
        } catch (error) {}
        setLoading(false);
      };
      fetchData();
    }
  }, []);

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
                 <Loader/>
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
                    blurDataURL={blurDataURL}
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
                      blurDataURL={blurDataURL}
                    />
                  </div>
                  <div className={styles.search_profile}>
                    <div className={styles.search_profile_content}>
                      <div className={styles.search_profile_name}>
                        {data.artist.artist_name}
                      </div>
                      <div className={styles.search_profile_details}>
                        Switzerland, Germany
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
                        <img src="/bookmark-icon.svg" alt="bookmark icon" />
                      </a>
                      <a
                        onClick={openPopup}
                        target="_blank"
                        className={styles.profile_share}
                      >
                        <img src="/share-icon.svg" alt="share icon" />
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
                            {" "}
                            <Link
                              href={`/${locale}/explore/tattoos?style=${
                                e.slug
                              }`}
                            >
                              {" "}
                              {e.name}{" "}
                            </Link>{" "}
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
                            <img
                              src="/location-small.svg"
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
                      <img src="/app-store-new.svg" alt="app store" />
                    </Link>
                  </li>
                  <li>
                    <Link target="_blank" href={APP_LINK_GOOGLE}>
                      <img src="/g-play-new.svg" alt="g play" />
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
                      blurDataURL={blurDataURL}
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
