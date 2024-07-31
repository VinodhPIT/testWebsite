import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";


import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";
import Modal from "react-modal";

import useStyleListing from "@/store/styleListing/styleListing";
import useDisplayAll from "@/store/exploreAll/exploreAll";

import countriesData from "@/data/countries.json";
import figtree from "@/helpers/fontHelper";

import UsePathTranslation from '@/hooks/useee';



const customStyles = {
  overlay: {
    backgroundColor: "rgba(6, 6, 6, 0.78)",
    zIndex: 1000,
  },
  content: {
    border: "none",
    background: "transparent",
    maxWidth: "1288px",
    margin: "auto auto",
    padding: "15px 15px",
    top: "0",
    bottom: "0px",
    right: "0px",
    left: "0px",
    overflow: "inherit",
    maxHeight: "inherit",
    borderRadius: "0",
  },
};
const CountrySelectorModel = ({ isOpen, closeModal }) => {

  const router = useRouter();
  const [country, setCountry] = useState([]);
  const { t } = useTranslation();
  const { fetchAll } = useDisplayAll();
  const { fetchStyle } = useStyleListing();
 
  useEffect(() => {
    setCountry(countriesData);
  }, []);

  const chooseLanguage = async ( countryCode, lng ) => { 
    
    closeModal()
    const newLocale = `${countryCode}-${lng}`;
    await setLanguage(newLocale);
  
    const currentPath = router.asPath;
    const translatedPath = UsePathTranslation(currentPath, newLocale);
    
    // Construct the new URL with the new locale and the translated path
    const newUrl = `/${newLocale}${translatedPath}`; 
    router.replace(newUrl);

   fetchAll(countryCode);
  };


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
    >
      
        <div className={`popup_wrap ${figtree.className}`}>
          <div className="popup_container"> 
            <div className="language_popup">
              <button
                className="close_button"
                onClick={closeModal}
              >
                <Image
                  width={25}
                  height={25}
                  src="/popup-close.svg"
                  alt="close"
                />
              </button>
              <h3>{t("common:Choose your region and language")}</h3>
              <p>{t("common:LanguagePopup-subText")}</p>
              <div
                className="language_popup_block">
                <ul>
                  {country.map((el) => {
                    return (
                      <li key={el.id}>
                        <button
                          className={
                            router.locale === el.set
                              ? "activeCountry"
                              : "inActivecountry"
                              
                          }
                          disabled={router.locale === el.set}
                          onClick={() => chooseLanguage(el.countryCode, el.lng  ,el.country)}
                        >
                          <Image
                            alt={`${el.country}${"-"}${el.language}`}
                            src={el.image}
                            width={32}
                            height={32}
                          />
                          <span>
                            <h4>{el.country}</h4>
                            <p>{el.language}</p>
                          </span>
                          {/* <Image
                            width={24}
                            height={25}
                            src="/icon_language_link.svg"
                            alt=""
                            className="icon_language_link"
                          /> */}
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
