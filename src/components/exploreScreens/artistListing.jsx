import React from "react";
import Image from "next/image";
import { useGlobalState } from "@/context/Context";
import styles from "@/components/styles/listing.module.css";
import NoData from "@/components/noDatafound/noData";
import Link from "next/link";
import { BLUR_URL } from "@/constants/constants";
import { useNavigation } from "@/hooks/useRouter";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import {getCountry} from '@/helpers/helper'

export default function Artist({ data }) {

  const { state } = useGlobalState();
  const { router } = useNavigation();
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.pageContainer}>
        {data.length === 0 ? (
          <div className={styles.blockCenter}>
            {" "}
            <NoData category={"tattoo-artists"} path={t("common:routes.tattoo-artists")}/>
          </div>
        ) : (
          <div className={styles.grid_wrapper}>
            {data.map((item, idx) => {
              const key = item._index === "ad" ? `ad-${idx}` : item._id;
              return item._index === "ad" ? null : (
                <Link
                  href={`/${router.locale}/artists/${item._source.slug}`}
                  className={styles.listing_gridItem}
                  key={key}
                >
                  <div className={styles.grid_item_block}>
                    <div className={styles.grid_img_wrap}>
                      <div className={styles.grid_img_bg}>
                        <div className={styles.grid_img_col}>
                          <Image
                            src={item._source.tattoos[0].image}
                            layout="fill"
                            alt={item._source.slug}
                            objectFit="cover"
                            placeholder="blur"
                            blurDataURL={BLUR_URL}
                            loading="lazy"
                            quality={62}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.grid_content_wrap}>
                      <div className={styles.grid_img_profile}>
                        <Image
                          src={item._source.image_url}
                          width={30}
                          height={30}
                          alt={item._source.first_name}
                          loading="lazy"
                          quality={62}
                        />
                      </div>
                      <div className={styles.grid_profile_details}>
                        <h6 className={styles.grid_profile_title}>
                          {item._source.artist_name ??
                            `${item._source.first_name} ${item._source.last_name}`}
                        </h6>
                        <span className={styles.grid_profile_address}>
                          {getCountry(item._source.studios ,state.location)}
                        </span>
                        {/* <div className={styles.grid_profile_link}>
                            <Link href={`/artist/${item._source.slug}`} >
                                <span>Check profile</span>
                              </Link>
                            </div> */}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
