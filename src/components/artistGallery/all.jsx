import React from "react";

import Link from "next/link";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

import { BLUR_URL } from "@/constants/constants";
import { useNavigation } from "@/hooks/useRouter";

import styles from "@/pages/explore/tattoodetail.module.css";

const All = ({ data }) => {
  const { router } = useNavigation();
  const { t } = useTranslation();

  return (
    <div className={styles.galleryWrapper}>
      <div className={styles.grid_wrapper_tattoo}>
        {data.map((item) => (
          <Link
            href={
              item.tattoo_type === "normal"
                ? `/${router.locale}/${t("common:routes.explore-tattoos")}/${item.tattoo_uid}`
                : `/${router.locale}/${t("common:routes.explore-flash")}/${item.tattoo_uid}`
            }
            className={styles.listing_gridItem}
            key={item.tattoo_uid}
          >
            <Image
              alt={item.tattoo_type}
              src={item.image_medium}
              layout="fill"
              loading="lazy"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={BLUR_URL}
              quality={62}
            />
            {item.tattoo_type !== "normal" &&
              (item.min_price !== null && item.max_price !== null ? (
                <div className={styles.priceBox}>
                  <p style={{ margin: "0" }}>
                    {item.currency.code} {item.min_price} - {item.max_price}
                  </p>
                </div>
              ) : item.min_price !== null ? (
                <div className={styles.priceBox}>
                  <p style={{ margin: "0" }}>
                    {item.currency.code} {item.min_price}
                  </p>
                </div>
              ) : null)}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default All;
