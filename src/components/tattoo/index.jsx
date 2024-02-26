import React from "react";
import Image from "next/image";
import { useGlobalState } from "@/context/Context";
import styles from "@/components/styles/listing.module.css";
import Link from "next/link";
import NoData from "@/components/noDatafound/noData";
import { blurDataURL } from "@/constants/constants";
import ArtistAdd from "../adds/artistAdd";
import KlarnaAdd from "../adds/klarnaAdd";
import Offer from "../adds/offer";
import { useNavigation } from "@/hooks/useRouter";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
export default function Tattoo({ data }) {
  const { router } = useNavigation();
  const { t } = useTranslation();

  return (
    <>
      <Head>
      <title>
        {t("common:exploreTattoosScreenSEO.title")}
        </title>
      </Head>

      <div className={styles.pageContainer}>
        {data.length === 0 ? (
          <div className={styles.blockCenter}>
            {" "}
            <NoData category={"tattoos"} />{" "}
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
                  href={`/${router.locale}/explore/tattoos/${item._source.tattoo_uid}`}
                  className={styles.listing_gridItem}
                  key={key}
                >
                  <Image
                    src={item._source.image}
                    layout="fill"
                    objectFit="cover"
                    alt={item._source.style._source.name}
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    loading="lazy"
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
