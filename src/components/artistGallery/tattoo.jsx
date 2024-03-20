import React from "react";
import styles from "@/pages/explore/tattoodetail.module.css";
import Link from "next/link";
import Image from "next/image";
import { BLUR_URL } from "@/constants/constants";

import style from "@/components/styles/listing.module.css";
import NoData from "./noData";
import { useNavigation } from "@/hooks/useRouter";

const Tattoo = ({ data }) => {
  const { router } = useNavigation();

  return (
    <div className={styles.galleryWrapper}>
      {data.length == 0 ? (
        <div className={style.blockCenter}>
          {" "}
          <NoData />{" "}
        </div>
      ) : (
        <div className={styles.grid_wrapper_tattoo}>
          {data.map((item) => (
            <Link
              href={`/${router.locale}/explore/tattoos/${item.tattoo_uid}`}
              className={styles.listing_gridItem}
              key={item.tattoo_uid}
            >
              <Image
                alt={item.tattoo_type}
                loading="lazy"
                src={item.image_medium}
                layout="fill"
                objectFit="cover"
                quality={62}
                placeholder="blur"
                blurDataURL={BLUR_URL}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tattoo;
