import React from "react";
import Link from "next/link";
import Image from "next/image";

import useTranslation from "next-translate/useTranslation";
import OutsideClickHandler from "react-outside-click-handler";

import { useNavigation } from "@/hooks/useRouter";
import useOpenApp from "@/hooks/useOpenApp";

export default function SideDrawer({ onCloseToggle, isFixed }) {
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

  const { openApp } = useOpenApp();


  return (
    <OutsideClickHandler onOutsideClick={() => onCloseToggle()}>
      <div className={`${"sideDrawer"} ${isFixed ? "drawer-sticky" : ""}`}>
        <div className="d-flex justify_space_between align_item_center  drawer-header">
          <Image
            src={"/Inckd_logo_black.svg"}
            alt="Logo"
            priority
            width={99}
            height={28}
          />
          <Image
            onClick={() => onCloseToggle()}
            src="/close.png"
            width={32}
            height={32}
            alt="close-sideDrawer"
            priority
            className={"closeWrapper"}
          />
        </div>

        <div className="menuList">
          <ul >
            {filteredLinks.map((link) => (
              <li key={link.id}>
                <Link href={link.url} onClick={() => onCloseToggle()}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          </div>
          <div class="drawerBottom">
            <button
              onClick={openApp}
              target="_blank"
              className="button_primary "
            >
              Get the app
            </button>
          </div>
        


      </div>
    </OutsideClickHandler>
  );
}
