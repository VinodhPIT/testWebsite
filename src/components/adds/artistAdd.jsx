import React from 'react'
import styles from "@/components/styles/listing.module.css";
import Link from 'next/link'
import useTranslation from "next-translate/useTranslation";
import {useNavigation} from '@/hooks/useRouter'
import Image from 'next/image'


export default function ArtistAdd() {
  const { t } = useTranslation();
  const {router}=useNavigation()

  return (
    <div className={styles.custom_adv_block_1}>
    <div className={styles.custom_adv_wrap}>
      <div className={styles.custom_adv_content}>
        <h6>
         
          {t("common:findArtist")}
         
        </h6>
        <span className={styles.adv_btn_wrap}>
          <Link   href="/explore/[[...slug]]"
                                as={`/${router.locale}/explore/tattoo-artists`}  className={styles.btn_secondary}>
          {t("common:viewArtist")}
          </Link>
        </span>
        </div>
        <div className={styles.addImagewrap}>

    
        <Image layout='fill'
          src="/pexels-cottonbro-studio-5320059-3.png"
          alt="View Artists"
        objectFit="contain"
        objectPosition='bottom'
        />
       </div>
    </div>
  </div>
  )
}
