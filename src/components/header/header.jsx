import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import useWindowResize from "@/hooks/useWindowSize";

import useTranslation from "next-translate/useTranslation";
import SideDrawer from "@/components/sideDrawer/sideDrawer";
import CountryPickerModel from "@/components/modalPopup/countrySelectorPopup";

import links from "@/constants/linkData";
import generateLinkComponent from "@/utils/linkGenerator";
import { useModal } from "@/utils/modalUtils";

export default function Header({
  logo,
  theme,
  imgWidth,
  imgHeight,
}) {
  const router = useRouter();
  const { getCountryIcon, getLanguage } = require("@/utils/localeFunctions");
  const { isPopupOpen, openPopup, closePopup } = useModal();
  const { isMobileView } = useWindowResize();

  const { t } = useTranslation();
  const [toggle, setToggle] = useState(false);
  const linkComponent = generateLinkComponent(router, theme, t);

  useEffect(() => {
    if (toggle) {
      document.body.classList.add("nav_open");
    } else {
      document.body.classList.remove("nav_open");
    }
    return () => {
      document.body.classList.remove("nav_open");
    };
  }, [toggle]);

  const onToggle = () => {
    setToggle(true);
  };

  const onCloseToggle = () => {
    setToggle(false);
  };

  const handleClick = () => {
    router.push(`/${router.locale}/for-tattoo-artists`);
  };

  return (
    <>
      {router.pathname === "/" && (
        <div className="header_cookies">
          <div className="header_cookie_img">
            <Image
              src="/logo-cookies.svg"
              alt="klarna"
              width={68}
              height={16}
              loading="eager"
            ></Image>
          </div>
          <div className="header_cookie_txt">
            <p>
              <span>{t("common:tattooNow")}</span>
              <span className="header_cookie_desktop">
                {t("common:payLater")}
                <Link href={`/${router.locale}/klarna`}>
                  {t("common:learnmore")}
                </Link>
              </span>

              {isMobileView && (
                <span className="header_cookie_mob">
                  <Link href={`/${router.locale}/klarna`}>
                    {t("common:learnmore")}
                  </Link>
                </span>
              )}
            </p>
          </div>
        </div>
      )}

      <header className={"header_wrapper"}>
        <div>
          <div className={"container_full"}>
            <nav className="header_navigation">
              <div className="header_logo_nav">
                <div className="header_logo">
                  <Link href={`/${router.locale}`} className="navbar_brand">
                    <Image
                      src={logo}
                      alt="Logo"
                      width={imgWidth}
                      height={imgHeight}
                      priority
                    />
                  </Link>
                </div>
                <div className="nav_block">
                  <ul className="nav main_nav navbar_collapse collapse">
                    {links.map((link) => (
                      <li key={link.id} className="nav_item">
                        <Link
                          href={`/${router.locale}${link.url}`}
                          className={"textWhite"}
                        >
                          {t(link.title)}
                        </Link>
                      </li>
                    ))}
                    <li>{linkComponent}</li>
                  </ul>
                </div>
              </div>

              <div className="header_right">
                <button
                  type="button"
                  onClick={() => handleClick()}
                  className={`btn btn_tattoo_art mob_hidden`}
                >
                  {t("common:menus.forTattooArtists")}
                </button>

                <button
                  type="button"
                  onClick={() => handleClick()}
                  className={`btn btn_tattoo_art desk_hidden`}
                >
                  {t("common:menus.forArtists")}
                </button>

                {router.pathname === "/journal" ||
                router.pathname === "/explore/[[...slug]]" ||
                router.pathname === "/404" ? null : (
                  <button className={"language_switcher"} onClick={openPopup}>
                    <Image
                      src={getCountryIcon(router.locale)}
                      alt="countries"
                      width={32}
                      height={32}
                      priority
                    />
                    <span className={"textWhite"}>
                      {isMobileView ? "" : getLanguage(router.locale)}
                    </span>
                  </button>
                )}

                <Image
                  className="nav_btn_toggle"
                  onClick={() => onToggle(true)}
                  src={"/hamburger-menu.svg"}
                  alt="hamburger"
                  width={32}
                  height={32}
                  priority
                />
              </div>
            </nav>
          </div>
        </div>
      </header>
      {toggle === true ? <SideDrawer onCloseToggle={onCloseToggle} /> : null}

      <CountryPickerModel
        className="custom-modal"
        isOpen={isPopupOpen}
        closeModal={closePopup}
      />
    </>
  );
}
