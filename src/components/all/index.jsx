import React from "react";
import Image from "next/image";
import PageLoad from "@/components/pageLoad";
import { useGlobalState } from "@/context/Context";
import styles from "@/components/styles/listing.module.css";
import NoData from "@/components/noDatafound/noData";
import { blurDataURL } from "@/constants/constants";
import Link from "next/link";
import ArtistAdd from "../adds/artistAdd";
import KlarnaAdd from "../adds/klarnaAdd";
import Offer from "../adds/offer";
import { useNavigation } from "@/hooks/useRouter";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";


export default function All({ data }) {
  const { state } = useGlobalState();
  const { t } = useTranslation();
  const { router } = useNavigation();

  return (
    <>
      <Head>
      <title>
        {t("common:exploreAllScreenSEO.title")}
        </title>
      </Head>

      <div className={styles.pageContainer}>
        {data.length === 0 ? (
          <div className={styles.blockCenter}>
            <NoData category={"all"} />
          </div>
        ) : (
          <div className={styles.grid_wrapper_tattoo}>
            {data.map((item, idx) => {
              const key = item._index === "ad" ? `ad-${idx}` : item._id;

              return item._index === "ad" ? (
                item.add === 1 ? (
                  <ArtistAdd />
                ) : item.add === 2 ? (
                  <KlarnaAdd />
                ) : (
                  <Offer />
                )
              ) : (
                <Link
                  className={styles.listing_gridItem}
                  key={key}
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
                    blurDataURL={blurDataURL}
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
