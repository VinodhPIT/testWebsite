import React from "react";
import Link from "next/link";
import styles from "./sideDrawer.module.css";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { useNavigation } from "@/hooks/useRouter";
import OutsideClickHandler from 'react-outside-click-handler';
export default function SideDrawer({ onCloseToggle }) {
  const { t } = useTranslation();

  const { router } = useNavigation();

  const links = [
    {
      id: 1,
      title: t("common:menus.home"),
      url: `/`,
    },

    {
      id: 2,
      title: t("common:menus.search"),
      url: `/${router.locale}/explore/tattoos`,
    },

 
    {
      id: 4,
      title: t("common:menus.dictionary"),
      url: `/${router.locale}//tattoo-dictionary`,
    },

    {
      id: 5,
      title: t("common:menus.klarna"),
      url: `/${router.locale}/klarna`,
    },

    {
      id: 6,
      title: t("common:menus.forTattooArtists"),
      url: `/${router.locale}/for-tattoo-artists`,
    },


    {
      id: 6,
      title: t("common:menus.joinArtist"),
      url: `/${router.locale}/join-as-artist`,
    },



    {
      id: 7,
      title: t("common:menus.contactUs"),
      url: `/${router.locale}/contact`,
    },
  ];

  let linkComponent;

  switch (router.locale) {
    case "gb-en":
    case "de-de":
      linkComponent = (
        <Link href={"/journal"}>{t("common:menus.journal")}</Link>
      );
      break;
    default:
      linkComponent = null;
      break;
  }

  return (
 <OutsideClickHandler onOutsideClick={()=>onCloseToggle()}>


    <div className={styles.sideDrawer}>
      <div className={styles.closeWrapper}>
        <Image
          onClick={() => onCloseToggle()}
          src="/close.png"
          width={50}
          height={50}
          alt="close"
          priority
        />
      </div>

      <ul className={styles.menuList}>
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.url} onClick={() => onCloseToggle()}>
              {link.title}
            </Link>
          </li>
        ))}

        <li>
          <Link href={"/journal"} onClick={() => onCloseToggle()}>
            {linkComponent}
          </Link>
        </li>
      </ul>
    </div>
    </OutsideClickHandler>
  );
}
