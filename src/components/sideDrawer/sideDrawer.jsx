import React from "react";
import Link from "next/link";
import styles from "./sideDrawer.module.css";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { useNavigation } from "@/hooks/useRouter";
import OutsideClickHandler from "react-outside-click-handler";
export default function SideDrawer({ onCloseToggle }) {

  const { t } = useTranslation();
  const { router } = useNavigation();
  const links = [
    {
      id: 1,
      title: t("common:sideDrawerMenus.home"),
      url: `/`,
    },

    {
      id: 2,
      title: t("common:sideDrawerMenus.tattooRequest"),
      url: `/${router.locale}/createRequest`,
    },

    {
      id: 3,
      title: t("common:sideDrawerMenus.tattooFinancing"),
      url: `/${router.locale}/klarna`,
    },

    {
      id: 4,
      title: t("common:sideDrawerMenus.exploreTattoos"),
      url: `/${router.locale}/explore/tattoos`,
    },
    {
      id: 5,
      title: t("common:sideDrawerMenus.exploreTattooArtists"),
      url: `/${router.locale}/explore/tattoo-artists`,
    },

    {
      id: 6,
      title: t("common:sideDrawerMenus.tattooJournal"),
      url: `/${router.locale}/journal`,
    },

    {
      id: 7,
      title: t("common:sideDrawerMenus.forTattooers"),
      url: `/${router.locale}/for-tattoo-artists`,
    },

    {
      id: 8,
      title: t("common:menus.contactUs"),
      url: `/${router.locale}/contact`,
    },
  ];

  // Defined the array of locales that should show the tattooJournal link
  const allowedLocalesForTattooJournal = ["gb-en", "de-de"];

  // Filter the links based on the router locale
  const filteredLinks = links.filter((link) => {
    if (
      link.id === 6 &&
      !allowedLocalesForTattooJournal.includes(router.locale)
    ) {
      return false;
    }
    return true;
  });
 
  return (
    <OutsideClickHandler onOutsideClick={() => onCloseToggle()}>
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
          {filteredLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.url} onClick={() => onCloseToggle()}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </OutsideClickHandler>
  );
}
