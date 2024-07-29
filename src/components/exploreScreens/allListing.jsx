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
      <div className={styles.pageContainer}>
        {data.length === 0 ? (
          <div className={styles.blockCenter}>
            <NoData category={t("common:routes.explore-all")} />
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
                      ? `/${router.locale}/${t("common:routes.explore-tattoos")}/${item._source.tattoo_uid}`
                      : item._source.tattoo_type === "flash"
                      ? `/${router.locale}/${t("common:routes.explore-flash")}/${item._source.tattoo_uid}`
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
