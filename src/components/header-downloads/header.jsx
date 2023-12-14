import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SideDrawer from "@/components/sideDrawer/sideDrawer";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import useWindowResize from "@/hooks/useWindowSize";
import CountryPickerModel from "@/components/modalPopup/countrySelectorPopup";
import { useModal } from "@/utils/modalUtils";


export default function Headerdownloads({ logo, theme, isPosition ,imgWidth ,imgHeight }) {
  const router = useRouter();

  const { getCountryIcon, getLanguage } = require('@/utils/localeFunctions');


  const { isPopupOpen, openPopup, closePopup } = useModal();
  const { isMobileView } = useWindowResize();
  const { t } = useTranslation();
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

  const links = [
    {
      id: 1,
      title: t("common:menus.tattooSearch"),
      url: `/${router.locale}/explore/tattoos`,
    },
    {
      id: 2,
      title: t("common:menus.styleGuide"),
      url: `/${router.locale}/tattoo-styleguide`,
    },
    {
      id: 3,
      title: t("common:menus.dictionary"),
      url: `/${router.locale}/tattoo-dictionary`,
    },

    {
      id: 4,
      title: t("common:menus.klarna"),
      url: `/${router.locale}/klarna`,
    },
  ];

  let linkComponent;

  switch (router.locale) {
    case "uk-en":
    case "de-de":
      linkComponent = (
        <Link
          href={`/${router.locale}/journal`}
          className={
            theme === "black"
              ? "textWhite"
              : theme === "normal"
              ? "textWhite"
              : "textBlack"
          }
        >
          {t("common:menus.journal")}
        </Link>
      );
      break;
    default:
      linkComponent = null;
      break;
  }


  


  





  return (
    <>
      {router.pathname === "/" && (
        <div className="header_cookies">
          <div className="header_cookie_img">
            <img src="/logo-cookies.svg" alt="" />
          </div>
          <div className="header_cookie_txt">
            <p>
              <span>{t("common:tattooNow")}</span>
              <span className="header_cookie_desktop">
                {t("common:payLater")}
                <Link href={`/${router.locale}/klarna`}>{t("common:learnmore")}</Link>
              </span>

              {isMobileView && (
                <span className="header_cookie_mob">
                  <Link href={`/${router.locale}/klarna`}>{t("common:learnmore")}</Link>
                </span>
              )}
            </p>
          </div>
        </div>
      )}

      <header className={isPosition === true ? "header_wrapper" : null}>
        <div>
          <div className="container">
            <nav className="header_navigation align_item_center">
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

              <div className="nav_block flex_auto pl_50 m_pl_0">
                <ul className="nav main_nav navbar_collapse collapse">
                  {links.map((link) => (
                    <li key={link.id} className="nav_item">
                      <Link
                        href={link.url}
                        className={
                          theme === "black"
                            ? "textWhite"
                            : theme === "normal"
                            ? "textWhite"
                            : "textBlack"
                        }
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                  <li>{linkComponent}</li>
                </ul>
              </div>

              <div className="header_right">
                <button
                  type="button"
                  onClick={() =>
                    router.push(`/${router.locale}/for-tattoo-artists`)
                  }
                  className={`btn btn_tattoo_art ${
                    theme === "black" && router.pathname === "/journal" ? "bgBlack" : theme === "black" ? "bgWhite" : "bgBlack"
                }`}
                >
                  {t("common:menus.forTattooArtists")}
                </button>
{router.pathname !==`/journal` &&
                 
                  <button   
                    className={`language_switcher ${
                      theme === "black" ? "switcherThemeBlack" :  theme === "normal" ? "switcherThemeBlack" :    "switcherThemeWhite"
                  }`}                   
                    onClick={openPopup}
                  >
                    <Image 
                      src={getCountryIcon(router.locale)}
                      alt="countries"
                      width={32}
                      height={32}
                      priority
                    />
                     <span   className={` ${
                      theme === "black"
                        ? "switchTextBlack"
                        : theme === "normal"
                        ? "switchTextBlack"
                        : "switchTextWhite"
                    }`}> {getLanguage(router.locale)}</span>
                  </button>    }            

                <Image
                  className="nav_btn_toggle"
                  onClick={() => onToggle(true)}
                  src={
                    theme === "white"
                      ? "/blackHamburger.svg"
                      : "/Hamburger Menu.png"
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
