import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import useWindowResize from "@/hooks/useWindowSize";

import useTranslation from "next-translate/useTranslation";
import SideDrawer from "@/components/sideDrawer/sideDrawer";
import CountryPickerModel from "@/components/modalPopup/countrySelectorPopup";

import {Links} from "@/constants/index";
import generateLinkComponent from "@/routes/generateLinkComponent";
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

  const [isFixed, setIsFixed] = useState(false);
 
 
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
 
    window.addEventListener('scroll', handleScroll);
 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {(router.pathname === "/" || router.pathname === "/explore-style") && (
        <>
        <div className="header_cookies mob_hidden">
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
              <span>{t("common:getTattooNow")}</span>
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
         <div className="header_cookies desk_hidden">
         <div className="header_cookie_img">
           <Image
             src="/logo-cookies.svg"
             alt="klarna"
             width={68}
             height={16}
             loading="eager"
           ></Image>
         </div>
        <span className="custom_fs_14">{t("common:getTattooNow")}</span>                     
        <Link href={`/${router.locale}/klarna`} className="custom_fs_16 fw_600 color_black_h head_paylater_link">
          {t("common:learnmore")}
        </Link>  
       </div>
       </>
      )}

      <header className={`${"header_wrapper"} ${isFixed ? 'fixed' : ''}`}>
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
                    {Links.map((link) => (
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
                  className={`btn btn_tattoo_art `}
                >
                  {t("common:menus.forArtists")}
                </button>



                {router.pathname === "/journal" ||
                router.pathname === "/explore/[[...slug]]" ||
                router.pathname === "/404" ? null : (
                  <button className={"language_switcher mob_hidden"} onClick={openPopup}>
                    <Image
                      src={getCountryIcon(router.locale)}
                      alt="countries"
                      width={32}
                      height={32}
                      priority
                    />
                    <span className={"textWhite"}>
                      { getLanguage(router.locale)}
                    </span>
                  </button>
                )}


{router.pathname === "/journal" ||
                router.pathname === "/explore/[[...slug]]" ||
                router.pathname === "/404" ? null : (
                  <button className={"language_switcher desk_hidden"} onClick={openPopup} >
                    <Image
                      src={getCountryIcon(router.locale)}
                      alt="countries"
                      width={32}
                      height={32}
                      priority
                    />
                   
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
