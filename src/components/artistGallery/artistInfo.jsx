import React from 'react'
import styles from "@/pages/artists/style.module.css";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import{useNavigation} from '@/hooks/useRouter'
import { useGlobalState } from "@/context/Context";
import Image from 'next/image'


const ArtistInfo = ({data}) => {
  

  
  const {
    state,
    setSelectedIds,
    onSearch,
  } = useGlobalState();

  const { t } = useTranslation();

  const {router}=useNavigation()



  const chooseStyle = async (slug) => {
    let updatedIds;
    await setSelectedIds((prevIds) => {
      updatedIds = prevIds.includes(slug)
        ? prevIds.filter((id) => id === slug)
        : [...prevIds, slug];

      return updatedIds;
    });
    await onSearch(
      "artist",
      state.searchKey,
      updatedIds,
      state.location,
      router
    );
  };



  return (
    <div className={styles.galleryWrapper} >
      <div className={styles.product_info_col}>
            <div className={styles.product_style}>
             {data.style.length > 0 &&  <span className={styles.product_style_label}>{t("common:styles")}</span>}
                <ul className={styles.product_style_list}>
                {data.style.length > 0 &&
                  data.style.map((e) => {
                    return (
                      <li key={e.id}>
                        <button   onClick={()=>chooseStyle(e.slug)} >
                          {e.name}
                          <Image
                          width={16}
                          height={17}
                            src="/arrow-right-gray.svg"
                            alt="arrow"
                          />
                        </button>
                      </li>
                    );
                  })}
              </ul>
            </div>

            <div className={styles.product_info_wrap}>
              <div className={styles.product_detail_location}>
              {data.studio.length > 0 && <span className={styles.product_location_label}>{t("common:locations")}</span>}

                {data.studio.length > 0 &&
                  data.studio.map((e) => {
                    return (
                      <div className={styles.product_location_list} key={e.id} >
                        <span className={styles.product_loc_title}>
                          <Image
                          width={16}
                          height={17}
                            src="/location-small.svg"
                            alt="Location"
                          />
                          {e.city}, {e.country}
                        </span>
                      </div>
                    );
                  })}
              </div>
              <div className={styles.product_style}>
              {data.language.length > 0 &&  <span className={styles.product_style_label}>{t("common:language")}</span>}
                <ul className={styles.product_style_list}>
                {data.language.length > 0 &&
                  data.language.map((e) => {
                    return <li key={e.id}>{e.name}</li>;
                  })}

                </ul>
              </div>
            </div>

            
          
          </div>
    </div>
  )
}

export default ArtistInfo
