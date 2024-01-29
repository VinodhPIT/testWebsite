import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  INSTAGRAM_PROFILE_LINK,
  FACEBOOK_PROFILE_LINK,
  LINKEDIN_PROFILE_LINK,
  APP_LINK_APPLE,
  APP_LINK_GOOGLE,
} from "@/constants/constants";
import { useRouter } from "next/router";
import { useModal } from "@/utils/modalUtils";
import useTranslation from "next-translate/useTranslation";
import CountryPickerModel from "@/components/modalPopup/countrySelectorPopup";
import pagesWithoutFooter from "@/utils/footerConfig";
import pagesWithoutSwitcher from "@/utils/buttonConfig";

export default function Footer() {
  const { t } = useTranslation();
  const { isPopupOpen, openPopup, closePopup } = useModal();
  const router = useRouter();

  const bookLinks = [
    {
      id: 1,
      title: t("common:menus.tattooSearch"),
      url: `/${router.locale}/explore/tattoos`,
    },

    {
      id: 2,
      title: t("common:menus.artistSearch"),
      url: `/${router.locale}/explore/tattoo-artists`,
    },
    {
      id: 3,
      title: t("common:menus.flashSearch"),
      url: `/${router.locale}/explore/flash-tattoos`,
    },
  ];

  const productLinks = [
    {
      id: 1,
      title: t("common:menus.styleGuide"),
      url: `/${router.locale}/tattoo-styleguide`,
    },

    {
      id: 2,
      title: t("common:menus.dictionary"),
      url: `/${router.locale}/tattoo-dictionary`,
    },
    {
      id: 3,
      title: t("common:menus.klarna"),
      url: `/${router.locale}/klarna`,
    },
  ];

  const businesstLinks = [
    {
      id: 2,
      title: t("common:menus.forTattooArtists"),
      url: `/${router.locale}/for-tattoo-artists`,
    },
  ];

  const links = [
    {
      id: 1,
      title: t("common:menus.contactUs"),
      url: `/${router.locale}/contact`,
    },
    {
      id: 2,
      title: t("common:menus.faq"),
      url: `/${router.locale}/faq`,
    },
  ];

  const { getCountryIcon, getLanguage } = require("@/utils/localeFunctions");

  const renderSwitcher = (pathname, locale, openPopup) => {
    if (pagesWithoutSwitcher.includes(pathname)) {
      return null;
    }
    return (
      <button className="footer_switcher" onClick={openPopup}>
        <Image
          src={getCountryIcon(locale)}
          alt="countries"
          width={32}
          height={32}
          priority
        />
        <span className={"textBlack"}>{getLanguage(locale)}</span>
        <Image
          src="/arrow-right-lang.svg"
          alt="countries"
          width={17}
          height={17}
          priority
          className="footer_switcher_right"
        />
      </button>
    );
  };

  const renderFooter = (pathname) => {
    if (pagesWithoutFooter.includes(pathname)) {
      return null; // Don't render footer for specified pages
    }

    return (
      <>
        <footer>
          <div className="footer">
            <div class="container_full">
              <section class="footer_block">
                <div class="footer_left">
                  <div class="footer_logo">
                    <Link href={`/${router.locale}`}>
                      <Image
                        src={"/Inckd-logo-footer-black.svg"}
                        alt="logo"
                        width={127}
                        height={37}
                        priority
                      />
                    </Link>
                  </div>

                  {renderSwitcher(router.pathname, router.locale, openPopup)}

                  <ul class="footer_list">
                    <li class="footer_title">
                      <h6>{t("common:download-app-on")}</h6>
                    </li>
                    <li>
                      <Link href={APP_LINK_APPLE} target="_blank">
                        <Image
                          src={"/app-store-new.svg"}
                          alt="AppStore"
                          width={134}
                          height={41}
                          priority
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href={APP_LINK_GOOGLE} target="_blank">
                        <Image
                          src={"/g-play-new.svg"}
                          alt="GooglePlay"
                          width={134}
                          height={41}
                          priority
                        />
                      </Link>
                    </li>
                  </ul>
                </div>

                <div class="footer_right">
                  <ul class="footer_list">
                    <li>
                      <h4>{t("common:book")}</h4>
                    </li>
                    {bookLinks.map((link) => (
                      <li key={link.id}>
                        <Link href={link.url}>{link.title}</Link>
                      </li>
                    ))}
                  </ul>
                  <ul class="footer_list">
                    <li>
                      <h4>{t("common:product")}</h4>
                    </li>
                    {productLinks.map((link) => (
                      <li key={link.id}>
                        <Link href={link.url}>{link.title}</Link>
                      </li>
                    ))}
                  </ul>
                  <ul class="footer_list">
                    <li>
                      <h4>{t("common:business")}</h4>
                    </li>
                    {businesstLinks.map((link) => (
                      <li key={link.id}>
                        {" "}
                        <Link href={link.url}>{link.title}</Link>{" "}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section class="footer_secondary">
                <div class="foot_links">
                  <ul class="links">
                    {links.map((e) => {
                      return (
                        <li key={e.id}>
                          {" "}
                          <Link href={e.url} key={e.id}>
                            {e.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div class="social_icons">
                  <ul>
                    <li class="footer_title">{t("common:followus")}</li>
                    <li>
                      <Link href={INSTAGRAM_PROFILE_LINK} target="_blank">
                        <Image
                          src={"/insta-icon.svg"}
                          alt="Instagram"
                          width={24}
                          height={25}
                          priority
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href={FACEBOOK_PROFILE_LINK} target="_blank">
                        <Image
                          src={"/fb-icon.svg"}
                          alt="Facebook"
                          width={24}
                          height={25}
                          priority
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href={LINKEDIN_PROFILE_LINK} target="_blank">
                        <Image
                          src={"/linkedin-icon.svg"}
                          alt="LinkedIn"
                          width={24}
                          height={25}
                          priority
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </footer>
        <CountryPickerModel
          className="custom-modal"
          isOpen={isPopupOpen}
          closeModal={closePopup}
        />
      </>
    );
  };

  return <>{renderFooter(router.pathname)}</>;
}
