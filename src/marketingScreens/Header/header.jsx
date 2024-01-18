import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SideDrawer from "@/components/sideDrawer/sideDrawer";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import CountryPickerModel from "@/components/modalPopup/countrySelectorPopup";
import { useModal } from "@/utils/modalUtils";
import links from "@/constants/linkData";
import generateLinkComponent from "@/utils/linkGenerator";
import getButtonClass from "@/utils/getButtonClass"; 
import useWindowResize from "@/hooks/useWindowSize";


export default function Header({
  logo,
  theme,
  isPosition,
  imgWidth,
  imgHeight,
}) {
  const router = useRouter();
  const { isMobileView } = useWindowResize();

  const { getCountryIcon, getLanguage } = require("@/utils/localeFunctions");
  const { isPopupOpen, openPopup, closePopup } = useModal();
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

  let bgColor;
let switchTheme
  switch (router.query.type) {
    case "klarna":
      bgColor = "transparent";
      switchTheme=  'switcherThemeWhite' 
      break;
    case "campaign":
      bgColor = "transparent";
      switchTheme= 'switcherThemeWhite' 
      break;
    case "general":
      bgColor =isMobileView ?  "transparent" :  "rgba(16, 16, 16, 0.20)";
      switchTheme=   isMobileView ? ' switcherThemeBlack '   :    'switcherThemeWhite' 
      break;
    default:
      bgColor =isMobileView ?  "transparent" :  "rgba(16, 16, 16, 0.20)";
      switchTheme=   isMobileView ? ' switcherThemeBlack '   :    'switcherThemeWhite' 
      break;
  }

  return (
    <>
      <header className={isPosition === true ? "header_wrapper" : null}>
        <div>
          <div className="container_full">
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
                          className={"color_gray_550"}
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
                  onClick={() =>
                    router.push(`/${router.locale}/for-tattoo-artists`)
                  }
                  className={`btn btn_tattoo_art ${getButtonClass(theme,router)}`}
                >
                  {t("common:menus.forTattooArtists")}
                </button>
                 {router.pathname !== `/journal` &&  (
                  <button
                    className={`language_switcher ${switchTheme}`}
                    onClick={openPopup}
                    style={{ backgroundColor: bgColor }}
                  >
                    <Image
                      src={getCountryIcon(router.locale)}
                      alt="countries"
                      width={32}
                      height={32}
                      priority
                    />
                    <span
                      className={` ${
                        router.query.type === "campaign" ||  router.query.type === "klarna"
                          ? "textWhite"
                          : "textBlack"
                      }`}
                    >
                      {" "}
                      {getLanguage(router.locale)}
                    </span>
                  </button>
                )}
                <Image
                  className="nav_btn_toggle"
                  onClick={() => onToggle(true)}
                  src={
                    router.query.type === "campaign" || router.query.type === "klarna"
                      ? "/hamburger-menu.svg"
                      : "/blackHamburger.svg"
                  }
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
