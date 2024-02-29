import React from 'react'
import styles from "@/components/styles/listing.module.css";
import Link from 'next/link'
import useTranslation from "next-translate/useTranslation";
import {APP_LINK_APPLE,APP_LINK_GOOGLE} from '@/constants/constants'
import {useNavigation} from '@/hooks/useRouter'
import Image from 'next/image'



export default function KlarnaAdd() {
  const { t } = useTranslation();
  const {router}=useNavigation()
  return (
    <div className={styles.custom_adv_block_2}>
    <div className={styles.custom_adv_wrap}>
      <div className={styles.custom_adv_content}>

        <Link href={`/${router.locale}/klarna`}>
    
        <Image width={81} height={34}
          src="/klarna-b-19.svg"
          alt="Tattoo now Pay later"
          className={styles.adv_klarna}
        />    </Link>

        <h6>
   {t("common:tattooPayLater")}
          
        </h6>
        <span className={styles.adv_btn_wrap}>

           <Link href={APP_LINK_APPLE} target="_blank" >
          <Image
          width={116}
          height={35}
            src="/appStore.svg"
            alt="Tattoo now Pay later"
            className={styles.adv_img_app}
          />
          </Link>
          <Link href={APP_LINK_GOOGLE} target="_blank">
          <Image
          width={116}
          height={35}
            src="/playStore.svg"
            alt="Tattoo now Pay later"
            className={styles.adv_img_app}
          />
          </Link>
        </span>
        <Image
          src="/shutterstock_2068639577.png"
          alt="Tattoo now Pay later"
        layout="fill"
        objectFit='contain'
        objectPosition="right bottom"
        />
      </div>
    </div>
  </div>
  )
}
