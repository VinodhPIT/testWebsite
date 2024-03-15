import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import styles from "./listing.module.css";
import path from "path";
import fs from "fs";
import { useRouter } from "next/router";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

export default function ListingPage({ data, locale }) {


// Constants and state variables
const [error, setError] = useState(false);
const [listing, setListing] = useState([]);
const router = useRouter();
const { t } = useTranslation();
// Effect to set listing and handle error
useEffect(() => {
  if (!data[locale] || !Array.isArray(data[locale]) || data[locale].length === 0) {
    setError(true);
  } else {
    setListing(data[locale]);
    setError(false);
  }
}, [data, locale, router, error]);




  return (
    <>
      <Head>
        <title>{t("common:journalListing.title")}</title>
        <meta
          name="description"
          content={t("common:journalListing.tips&Techniques")}
        />

      </Head>

      <div>
        <div className={styles.banner_block}>
          <div className={styles.banner_wrap}>
            <div className={styles.banner_item}>
              <div className={styles.banner}>
                <div className={styles.banner_inner}>
                  <Image
                    src="/JournalBanner.png"
                    alt="inckd. Tattoo Journal"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    fill
                    objectFit="cover"
                    objectPosition="bottom"
                  />
                </div>
              </div>
              <div className={`${""} ${styles.banner_content}`}>
                <div className={styles.banner_caption}>
                  <h1>
                    <span>{t("common:journalListing.title")}</span>
                  </h1>
                  <p className="max_w_100pc mb_0 mt_20">
                  {t("common:journalListing.tips&Techniques")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="img_text_banner_box">
          <div className="text_box_wrap full-block-wrap">
            <div className="img_text_box_inner">
              <div className="justify_content_start container w_100pc">
                <div
                  className={`${"mt_65 mb_80 m_mb_30 m_mt_25"} ${
                    styles.listing_pageContainer
                  }`}
                >
                  <div className={styles.listing_grid_wrapper}>
                    {error === true
                      ? null
                      : listing.map((el) => {
                          return (
                            <div
                              className={styles.listing_gridItem}
                              key={el.id}
                            >
                              <Link href={`/${router.locale}${el.url}`}>
                                <div className={styles.listing_grid_img_col}>
                                  <Image
                                    src={el.imageUrl}
                                    alt={el.alt}
                                    width={752}
                                    height={480}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL={blurDataURL}
                                    layout="responsive"
                                  />

                                  <div className={styles.listing_grid_brand}>
                                    <p style={{ margin: "0", color: "#000" }}>
                                      {el.tagTitle}
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className={styles.listing_grid_content_wrap}
                                >
                                  <h5>{el.title}</h5>

                                  <p>{el.desc} </p>
                                  <div className="w_100pc d_flex justify_content_end">
                                    <div
                                      className="btn_primary btn_img btn_custom_48"
                                    >
                                      {t("common:Read more")}
                                      <Image
                                        src="/arow-white-right.svg"
                                        width={24}
                                        height={24}
                                        alt="arrow"
                                        className="ml-8 mt-2"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          );
                        })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const filePath = path.join(process.cwd(), "src", "data", "journal.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  return {
    props: {
      data,
      locale: context.locale,
    },
  };
}
