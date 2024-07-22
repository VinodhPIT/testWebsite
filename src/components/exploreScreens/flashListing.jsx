import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

import { useNavigation } from "@/hooks/useRouter";

import NoData from "@/components/noDatafound/noData";

import { BLUR_URL } from "@/constants/constants";

import styles from "@/components/styles/listing.module.css";


export default function Flash({ data }) {
  const { t } = useTranslation();
  const { router } = useNavigation();

  return (
    <>
      <Head>
       <title>{t("common:exploreFlashScreen_Meta.title")}</title>
        <meta
          name="description"
          content={t("common:exploreFlashScreen_Meta.description")}
        />
        <meta name="keywords" content={t("common:exploreFlashScreen_Meta.keyword")} />
        <meta
          property="og:title"
          content={t("common:exploreFlashScreen_Meta.title")}
        />
        <meta
          property="og:description"
          content= {t("common:exploreFlashScreen_Meta.description")}
        />
        <meta property="og:image" content={`${process.env.LIVE_URL}/metaFlash.png`} />
        <meta
          property="og:url"
          content={`${process.env.LIVE_URL}/${router.locale}/explore/flash-tattoos`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={t("common:exploreFlashScreen_Meta.title")}
        />
        <meta
          name="twitter:description"
          content={t("common:exploreFlashScreen_Meta.description")}
        />
        <meta name="twitter:image"  content={`${process.env.LIVE_URL}/metaFlash.png`} />
        <meta name="twitter:site" content="@YourTwitterHandle" />
      </Head>

      <div className={styles.pageContainer}>
        {data.length === 0 ? (
          <div className={styles.blockCenter}>
            <NoData category={"flash-tattoos"} />
          </div>
        ) : (
          <div className={styles.grid_wrapper_tattoo}>
            {data.map((item, idx) => {
              return   <Link
                  href={`/${router.locale}/explore/flash-tattoos/${item._source.tattoo_uid}`}
                  className={styles.listing_gridItem}
                  key={idx}
                >
                  <Image
                    src={item._source.image}
                    layout="fill"
                    objectFit="cover"
                    alt={item._source.style._source.name}
                    placeholder="blur"
                    blurDataURL={BLUR_URL}
                    loading="lazy"
                    quality={62}
                  />

                  {item._source.min_price !== undefined &&
                  item._source.max_price !== undefined ? (
                    <div className={styles.priceBox}>
                      <p style={{ margin: "0" }}>
                        {item._source.currency.code} {item._source.min_price} -{" "}
                        {item._source.max_price}
                      </p>
                    </div>
                  ) : item._source.min_price !== undefined ? (
                    <div className={styles.priceBox}>
                      <p style={{ margin: "0" }}>
                        {item._source.currency.code} {item._source.min_price}
                      </p>
                    </div>
                  ) : null}
                </Link>
            })}
          </div>
        )}
      </div>
    </>
  );
}
