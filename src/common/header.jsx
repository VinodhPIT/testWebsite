import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import useWindowResize from "@/hooks/useWindowSize";

import useTranslation from "next-translate/useTranslation";
import { RxHamburgerMenu } from "react-icons/rx";

import SideDrawer from "@/components/sideDrawer/sideDrawer";
import CountryPickerModel from "@/components/modalPopup/countrySelectorPopup";
import NavigationLinks from "@/components/navigationLinks/NavigationLinks";

import { Links } from "@/constants/index";
import { useModal } from "@/utils/modalUtils";

export default function Header({
  logo,
  theme,
  imgWidth,
  imgHeight,
  isPosition,
}) {
  const router = useRouter();
  const { getCountryIcon } = require("@/utils/localeFunctions");
  const { isPopupOpen, openPopup, closePopup } = useModal();
  const { isMobileView } = useWindowResize();

  const { t } = useTranslation();
  const [isFixed, setIsFixed] = useState(false);
  const [toggle, setToggle] = useState(false);

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
    router.push(`/${router.locale}/${t("common:routes.for-tattoo-artists")}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {(router.pathname === "/" || router.pathname === "/explore-style") && (
        <>
          <div className="header_cookies mob_hidden">
            <div className="header_cookie_img">
              <Image
                src="/klarna_logo_small_white.svg"
                alt="klarna"
                width={51}
                height={12}
                loading="eager"
              ></Image>
            </div>
            <div className="header_cookie_txt">
              <p>
                <span>{t("common:getTattooNow")}</span>
                <span className="header_cookie_desktop">
                  {t("common:payLater")}
                  <Link href={`/${router.locale}/${t("common:routes.klarna")}`}>
                    {t("common:learnmore")}
                  </Link>
                </span>

                {isMobileView && (
                  <span className="header_cookie_mob">
                    <Link href={`/${router.locale}/${t("common:routes.klarna")}`}>
                    {t("common:learnmore")}
                    </Link>
                  </span>
                )}
              </p>
            </div>
          </div>
          <div className="header_cookies desk_hidden">
            <div className="header_cookie_img">
              <Image
                src="/klarna_logo_small_white.svg"
                alt="klarna"
                width={51}
                height={12}
                loading="eager"
              ></Image>
            </div>
            <span className="custom_fs_14">{t("common:getTattooNow")}</span>
            <Link
              href={`/${router.locale}/${t("common:routes.klarna")}`}
              className="head_paylater_link"
            >
              {t("common:learnmore")}
            </Link>
          </div>
        </>
      )}

      <header
        className={`header_wrapper ${isFixed ? "fixed" : ""} ${
          isPosition ? "border-bottom-white" : "border-bottom-grey"
        }`}
        style={{ position: isPosition ? "fixed" : "relative" }}
      >
        <div>
          <div className={"container_full pl_60 pr_60 m_pl_15 m_pr_15"}>
            <nav className="header_navigation">
              <div className="header_logo_nav">
                <div className="header_logo">
                  <Link href={`/${router.locale}`} className="navbar_brand">
                    <Image
                      src={isFixed ? "/Inckd_logo_black.svg" : logo}
                      alt="Logo"
                      width={imgWidth}
                      height={imgHeight}
                      priority
                    />
                  </Link>
                </div>
                <div className="nav_block">
                  <NavigationLinks
                    links={Links}
                    isFixed={isFixed}
                    theme={theme}
                    t={t}
                    onCloseToggle={onCloseToggle}
                  />
                </div>
              </div>

              <div className="header_right">
                <button
                  type="button"
                  onClick={() => handleClick()}

                  className={ !isPosition ? "tattoo_art"  : `btn_tattoo_art`}
                >
                  {t("common:menus.forTattooers")}
                </button>

                {router.pathname === "/journal" ||router.pathname === "/404" ||
                router.pathname === "/explore/[[...slug]]" ? null : (
                  <button
                    className={`${
                      isFixed
                        ? "border-black"
                        : theme === "dark"
                        ? "border-white"
                        : "border-black"
                    } language_switcher`}
                    onClick={openPopup}
                  >
                    <Image
                      src={getCountryIcon(router.locale)}
                      alt="countries"
                      width={32}
                      height={32}
                      priority
                    />
                  </button>
                )}
                <RxHamburgerMenu
                  onClick={onToggle}
                  size={33}
                  cursor={"pointer"}
                  className={`${
                    theme === "dark" ? "wh_burgerIcon" : "bl_burgerIcon"
                  }`}
                />
              </div>
            </nav>
          </div>
        </div>
      </header>
      {toggle && <SideDrawer onCloseToggle={onCloseToggle} isFixed={isFixed} />}

      <CountryPickerModel
        className="custom-modal"
        isOpen={isPopupOpen}
        closeModal={closePopup}
      />
    </>
  );
}
