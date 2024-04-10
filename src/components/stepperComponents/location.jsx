import React, { useState } from "react";
import { getUrl } from "@/utils/getUrl";
import PlacesAutocomplete, {
} from "react-places-autocomplete";
import { useRequestForm } from "@/store/requestManagement/requestForm";
import useWindowResize from "@/hooks/useWindowSize";
import styles from "./styles/dropdown.module.css";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import useCurrentLocation from "@/hooks/useCurrentLocation";

export default function LocationSearch({ onToggleLoc }) {
  const [address, setAddress] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const { currentLocation, error } = useCurrentLocation();
  const { t } = useTranslation();
  const { isMobileView } = useWindowResize();

  const { filterLocation, filterCurrentLocation, location, clearLocation } =
    useRequestForm(); // Zustand store and setter

  const handleSelect = async (value) => {
    setAddress(value);
  };

  const clear = async () => {
    clearLocation();
    onToggleLoc();
  };

  const onError = (status, clearSuggestions) => {
    clearSuggestions();
  };

  const searchLocation = async () => {
    filterLocation(address);
    onToggleLoc();
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    filterCurrentLocation(currentLocation, isChecked);
  };

  return (
    <div
      className={
        isMobileView ? styles.mobile_toggleBox : styles.desktop_toggleBox
      }
    >
      <div className={styles.custom_toggleBox}>
        <div className={styles.custom_toggle_title}>
          <h4>{t("common:Search by Location")}</h4>

          {isMobileView && (
            <div onClick={onToggleLoc} className={styles.custom_toggle_close}>
              <Image
                src="/icon-close-drop.svg"
                width={24}
                height={24}
                alt="close"
              />
            </div>
          )}
        </div>

        <div className={styles.custom_toggle_content}>
          <div className="request_current_location">
            <label>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              Use current location
            </label>
            
            {error && <p className="errorMessage">{error}</p>}
          
         

            {/* {isChecked && currentLocation && (
            <p>
              Latitude: {currentLocation.latitude}, Longitude:{' '}
              {currentLocation.longitude}
            </p>

            
          )} */}

 

          </div>

          <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
            onError={onError}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div className={styles.custom_toggle_col}>
                <input
                  {...getInputProps({
                    placeholder: t("common:Search Location"),
                  })}
                  className={styles.location_search_input}
                  disabled={isChecked}
                />
                <div className={styles.autocomplete_dropdown_container}>
                  {loading && <div>{t("common:Loading")}</div>}
                  {suggestions.map((suggestion, index) => {
                    const className = suggestion.active
                      ? "suggestion-item--active"
                      : "suggestion-item";
                    const style = suggestion.active
                      ? {
                          backgroundColor: "#eee",
                          padding: "13px",
                          cursor: "pointer",
                        }
                      : {
                          backgroundColor: "#fff",
                          padding: "13px",
                          cursor: "pointer",
                        };
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                        })}
                        key={suggestion.index}
                      >
                        <div>
                          <span>{suggestion.description}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </div>

        <div className={styles.custom_dropdown_btn}>
          <button
            onClick={() => clear()}
            disabled={location === "" ? true : false}
            className="btn_outline_secondary w_100pc btn_cutom_new"
          >
            {t("common:Clear All")}
          </button>

          <button
            onClick={() => searchLocation()}
            disabled={address === ""}
            className="btn_secondary w_100pc btn_cutom_new"
          >
            {t("common:Show Results")}
          </button>
        </div>
      </div>
    </div>
  );
}
