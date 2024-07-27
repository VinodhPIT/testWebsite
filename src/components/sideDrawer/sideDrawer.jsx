import React from "react";
import Link from "next/link";
import Image from "next/image";

import useTranslation from "next-translate/useTranslation";
import OutsideClickHandler from "react-outside-click-handler";

import { useNavigation } from "@/hooks/useRouter";
import useAppStoreLink from "@/hooks/useAppStoreLink";

import { useQrModal } from "@/context/ModalContext";
import SideDrawerLinks from "@/components/navigationLinks/SideDrawerLinks";

import { APP_LINK_APPLE, BLUR_URL, drawerLinks } from "@/constants/index";

export default function SideDrawer({ onCloseToggle, isFixed }) {
  const { t } = useTranslation();
  const { router } = useNavigation();
  const { openModal } = useQrModal();
  const { appStoreLink, imageSrc } = useAppStoreLink();

  // Defined the array of locales that should show the tattooJournal link
  const allowedLocalesForTattooJournal = ["gb-en", "de-de"];

  // Filter the links based on the router locale
  const filteredLinks = drawerLinks.filter((link) => {
    if (
      link.id === 5 &&
      !allowedLocalesForTattooJournal.includes(router.locale)
    ) {
      return false;
    }
    return true;
  });

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
          <SideDrawerLinks
            filteredLinks={filteredLinks}
            onCloseToggle={onCloseToggle}
            t={t}
          />
        </div>
        <div className="drawerBottom">
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
