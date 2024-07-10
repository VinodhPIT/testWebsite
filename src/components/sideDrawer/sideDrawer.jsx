import React from "react";
import Link from "next/link";
import Image from "next/image";

import useTranslation from "next-translate/useTranslation";
import OutsideClickHandler from "react-outside-click-handler";

import { useNavigation } from "@/hooks/useRouter";
import useAppStoreLink from "@/hooks/useAppStoreLink";

import { useQrModal } from "@/context/ModalContext";

import { APP_LINK_APPLE, BLUR_URL } from "@/constants/constants";

export default function SideDrawer({ onCloseToggle, isFixed }) {
  const { t } = useTranslation();
  const { router } = useNavigation();
  const { openModal } = useQrModal();
  const { appStoreLink, imageSrc } = useAppStoreLink();

  const links = [
    {
      id: 1,
      title: t("common:sideDrawerMenus.home"),
      url: `/`,
    },
    {
      id: 2,
      title: t("common:menus.explore"),
      url: "",
      subLinks: [
        {
          id: 1,
          title: t("common:menus.tattooArtists"),
          url: "/explore/tattoo-artists",
        },
        {
          id: 2,
          title: t("common:menus.tattoos"),
          url: "/explore/tattoos",
        },

        {
          id: 3,
          title: t("common:menus.flashTattos"),
          url: "/explore/flash-tattoos",
        },
      ],
    },
    {
      id: 3,
      title: t("common:menus.request"),
      url: "/createRequest",
    },
    {
      id: 4,
      title: t("common:menus.financing"),
      url: "/klarna",
    },
    {
      id: 5,
      title: t("common:menus.tattooJournal"),
      url: `/${router.locale}/journal`,
    },
    {
      id: 6,
      title: t("common:menus.forTattooers"),
      url: `/${router.locale}/for-tattoo-artists`,
    },
    {
      id: 7,
      title: t("common:menus.contactUs"),
      url: `/${router.locale}/contact`,
    },
  ];

  // Defined the array of locales that should show the tattooJournal link
  const allowedLocalesForTattooJournal = ["gb-en", "de-de"];

  // Filter the links based on the router locale
  const filteredLinks = links.filter((link) => {
    if (
      link.id === 5 &&
      !allowedLocalesForTattooJournal.includes(router.locale)
    ) {
      return false;
    }
    return true;
  });

  const stripLocale = (url) => {
    const localePattern = new RegExp(`^/${router.locale}`);
    return url.replace(localePattern, "");
  };

  const isActive = (linkUrl) => {
    const currentPath = stripLocale(router.asPath);
    const linkPath = stripLocale(linkUrl);
    return currentPath === linkPath;
  };

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
          <ul>
            {filteredLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.url}
                  onClick={() => onCloseToggle()}
                  className={isActive(link.url) ? "fw_700" : "fw_400"}
                >
                  {link.title}
                </Link>

                {link.subLinks && (
                  <ul className="sub_menu">
                    {link.subLinks.map((subLink) => (
                      <li key={subLink.id} className="nav_sub_item">
                        <Link
                          href={`/${router.locale}${subLink.url}`}
                          className={"textBlack"}
                        >
                          {t(subLink.title)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div class="drawerBottom">
          <button
            onClick={openModal}
            target="_blank"
            className="button_primary button_primar mob_hidden"
          >
            {t("common:download_app")}
          </button>

          <Link href={appStoreLink} target="_blank">
            <Image
              priority
              src={imageSrc}
              alt={appStoreLink === APP_LINK_APPLE ? "App store" : "GooglePlay"}
              width={134}
              height={41}
              placeholder="blur"
              blurDataURL={BLUR_URL}
              className="custom_download_icons desk_hidden"
            />
          </Link>
        </div>
      </div>
    </OutsideClickHandler>
  );
}
