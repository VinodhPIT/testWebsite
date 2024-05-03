import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import setLanguage from "next-translate/setLanguage";
import useTranslation from "next-translate/useTranslation";
import Modal from "react-modal";
import useStyleListing from "@/store/styleListing/styleListing";
import useDisplayAll from "@/store/exploreAll/exploreAll";

import countriesData from "@/data/countries.json";
import styles from "./style.module.css";


const customStyles = {
  overlay: {
    backgroundColor: "rgba(6, 6, 6, 0.78)",
    zIndex: 1000,
  },
  content: {
    border: "none",
    background: "transparent",
    maxWidth: "1386px",
    margin: "0 auto",
    padding: "0px",
    top: "0",
    bottom: "0px",
    right: "0px",
    left: "0px",
    overflow: "inherit",
    maxHeight: "inherit",
    borderRadius: "8px",
  },
};
const CountrySelectorModel = ({ isOpen, closeModal }) => {

  const router = useRouter()
  const [country, setCountry] = useState([])
  const { t } = useTranslation();
  const { fetchAll } = useDisplayAll();
  const { fetchStyle } = useStyleListing();


  useEffect(() => {
    setCountry(countriesData);
  }, []);

  const chooseLanguage = async (id, domain, li) => {
    await setLanguage(`${domain}-${li}`);
    closeModal();
    const newUrl = `/${domain}-${li}${router.asPath}`;
    router.replace(newUrl);

    fetchStyle(li);
    fetchAll(domain);
  };





  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
    >
      <div className="popup_wrap">
        <div className={`${"popup_container"} ${styles.popup_container}`}>
          <button
            className={`${"close_button"} ${styles.close_button}`}
            onClick={closeModal}
          >
            <Image width={25} height={25} src="/popup-close.svg" alt="close" />
          </button>

          <div className={styles.language_popup}>
            <h3>{t("common:Choose your region and language")}</h3>
            <p>{t("common:LanguagePopup-subText")}</p>
            <div className={`${'language_popup_block'} ${styles.language_popup_block}`}>
              <ul>
                {country.map((e) => {
                  return (
                    <li key={e.id}>
                      <button
                        className={
                          router.locale === e.set
                            ? styles.activeCountry
                            : styles.inActivecountry
                        }
                        onClick={() => chooseLanguage(e.id, e.domain, e.lng)}
                      >
                        <Image
                          alt={`${e.country}${"-"}${e.language}`}
                          src={e.image}
                          width={32}
                          height={32}
                        />
                        <span>
                          <h4>{e.country}</h4>
                          <p>{e.language}</p>
                        </span>
                        <Image
                          width={24}
                          height={25}
                          src="/icon_language_link.svg"
                          alt=""
                          className="icon_language_link"
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CountrySelectorModel;
