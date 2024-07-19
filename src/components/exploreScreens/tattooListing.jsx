import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

import { useNavigation } from "@/hooks/useRouter";
import { BLUR_URL } from "@/constants/constants";

import NoData from "@/components/noDatafound/noData";
import styles from "@/components/styles/listing.module.css";


export default function Tattoo({ data }) {
  const { router } = useNavigation();
  const { t } = useTranslation();

  return (
    <>
      <Head>
      <title>{t("common:exploreTattoosScreen_Meta.title")}</title>
        <meta
          name="description"
          content={t("common:exploreTattoosScreen_Meta.description")}
        />
        <meta name="keywords" content={t("common:exploreTattoosScreen_Meta.keyword")} />
      </Head>

      <div className={styles.pageContainer}>
        {data.length === 0 ? (
          <div className={styles.blockCenter}>
            {" "}
            <NoData category={"tattoos"} />{" "}
          </div>
        ) : (
          <div className={styles.grid_wrapper_tattoo}>
            {data &&  data.map((item, idx) => {
              return (
                <Link
                  href={`/${router.locale}/explore/tattoos/${item._source.tattoo_uid}`}
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
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
