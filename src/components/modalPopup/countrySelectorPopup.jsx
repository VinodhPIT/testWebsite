import React, { useState ,useEffect } from "react";
import Modal from "react-modal";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import countriesData from "@/data/countries.json"
import styles from './style.module.css'
import { useRouter } from 'next/router'
import setLanguage from "next-translate/setLanguage";

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
  const[countryId,setCountryId]= useState(1)


  useEffect(() => {
    setCountry(countriesData);
  }, []);


  const chooseLanguage = async (id, domain, li) => {
    await setLanguage(`${domain}-${li}`);
    setCountryId(id);

    localStorage.setItem('selectedCountryId', id);

    closeModal();
    const newUrl =`/${domain}-${li}${router.asPath}`;
    router.replace(newUrl);
  }
  
  


useEffect(() => {
  const storedCountryId = localStorage.getItem('selectedCountryId');
  if (storedCountryId) {
    setCountryId(parseInt(storedCountryId, 10));
  }
}, []);






  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
    >
      <div className="popup_wrap">
        <div className={`${'popup_container'} ${styles.popup_container}`}>
          <button className={`${'close_button'} ${styles.close_button}`} onClick={closeModal}>
            <img src="/popup-close.svg" alt="close"/>
          </button>

          <div className={styles.language_popup}>
            <h3>Choose your region and language</h3>
            <p>Get in touch with us lorem ipsum is a dummy content for typesetting industry.</p>
            <div className={`${'language_popup_block'} ${styles.language_popup_block}`}>
              <ul>
                {country.map((e) => {
                  return (                
                      <li key={e.id}>                  
                        <button  className={countryId===e.id ? styles.activeCountry :styles.inActivecountry } onClick={()=>chooseLanguage(e.id  ,e.domain ,e.lng)}   >
                          <Image
                            alt={`${e.country}${"-"}${e.language}`}
                            src={e.image}
                            width={32}
                            height={32}
                            placeholder="blur"
                            loading="lazy"
                            blurDataURL={blurDataURL}                          
                          />
                          <span>
                            <h4>{e.country}</h4>
                            <p>{e.language}</p>
                          </span>   
                          <img src="/icon_language_link.svg" alt="" className="icon_language_link"/>                     
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
