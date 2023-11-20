import React  from "react";
import Link from "next/link";
import  styles from './sideDrawer.module.css'
import Image from 'next/image'
import useTranslation from "next-translate/useTranslation";


export default function SideDrawer({onCloseToggle}) {

  const { t } = useTranslation();


  const links = [
    {
      id: 1,
      title:t("common:menus.home"),
      url: `/`,
    },

    {
      id: 2,
      title:t("common:menus.search"),
      url:"/explore/tattoos"
    },


    {
      id: 3,
      title:t("common:menus.styleGuide"),
      url: "/tattoo-styleguide",
    },
    {
      id: 4,
      title: t("common:menus.dictionary"),
      url: "/tattoo-dictionary",
    },

    {
      id: 5,
      title: t("common:menus.klarna"),
      url: "/klarna",
    },

    {
      id: 6,
      title:t("common:menus.forTattooArtists"),
      url: "/for-tattoo-artists",
    },

    {
      id: 7,
      title:t("common:menus.contactUs"),
      url: "/contact",
    },
  ];







  return (
    <div className={styles.sideDrawer}>
<div className={styles.closeWrapper}>

      <Image
      onClick={()=>onCloseToggle()}
      src="/close.png"
      width={50}
      height={50}
      alt="close"
      priority
    />

</div>
       
      <ul className={styles.menuList}>
        {links.map((link) => (
          <li key={link.id} >
            <Link href={link.url}onClick={()=>onCloseToggle()}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
