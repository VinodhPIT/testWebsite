import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

import { useNavigation } from "@/hooks/useRouter";
import { BLUR_URL } from "@/constants/constants";

import NoData from "@/components/noDatafound/noData";

import styles from "@/components/styles/listing.module.css";

export default function All({ data }) {
  const { t } = useTranslation();
  const { router } = useNavigation();

  return (
    <>
      <Head>
      <title>{t("common:exploreAll_Meta.title")}</title>
        <meta
          name="description"
          content={t("common:exploreAll_Meta.description")}
        />
        <meta name="keywords" content={t("common:exploreAll_Meta.keyword")} />
        <meta
          property="og:title"
          content={t("common:exploreAll_Meta.title")}
        />
        <meta
          property="og:description"
          content= {t("common:exploreAll_Meta.description")}
        />
        <meta property="og:image" content={`${process.env.LIVE_URL}/metaAll.png`} />
        <meta
          property="og:url"
          content={`${process.env.LIVE_URL}/${router.locale}/explore/all`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={t("common:exploreAll_Meta.title")}
        />
        <meta
          name="twitter:description"
          content={t("common:exploreAll_Meta.description")}
        />
        <meta name="twitter:image"  content={`${process.env.LIVE_URL}/metaAll.png`} />
        <meta name="twitter:site" content="@YourTwitterHandle" />
      </Head>

      <div className={styles.pageContainer}>
        {data.length === 0 ? (
          <div className={styles.blockCenter}>
            <NoData category={"all"} />
          </div>
        ) : (
          <div className={styles.grid_wrapper_tattoo}>
            {data.map((item, idx) => {
              return (
                <Link
                  className={styles.listing_gridItem}
                  key={idx}
                  href={
                    item._source.tattoo_type === "normal"
                      ? `/${router.locale}/explore/tattoos/${item._source.tattoo_uid}`
                      : item._source.tattoo_type === "flash"
                      ? `/${router.locale}/explore/flash-tattoos/${item._source.tattoo_uid}`
                      : `/${router.locale}/artists/${item._source.slug}`
                  }
                >
                  <Image
                    src={
                      item._index === "tattoo"
                        ? item._source.image
                        : item._source.image_url
                    }
                    layout="fill"
                    loading="lazy"
                    alt={
                      item._index === "tattoo"
                        ? item._source.style._source.name
                        : item._source.slug
                    }
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL={BLUR_URL}
                    quality={62}
                  />
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
