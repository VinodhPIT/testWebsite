import React, { useState } from "react";
import Image from "next/image";

import useWindowResize from "@/hooks/useWindowSize";

import useTranslation from "next-translate/useTranslation";
import { useRequestForm } from "@/store/requestManagement/requestForm";
import PlacesAutocomplete from "react-places-autocomplete";

import styles from "./styles/dropdown.module.css";

export default function LocationSearch({ onToggleLoc }) {
  const [address, setAddress] = useState("");

  const { t } = useTranslation();
  const { isMobileView } = useWindowResize();

  const {
    filterLocation,
    filterCurrentLocation,
    location,
    clearLocation,
    setIsChecked,
    isChecked,
    locationDenied,
  } = useRequestForm(); // Zustand store and setter


  console.log(address ,"cd",location ,"pkx[dkcp[d")

  const handleSelect = async (value) => {
    setAddress(value);
  };

  const sharedFunction = () => {
    clearLocation();
    onToggleLoc();
  };

  const clearCurrentLocation = () => {
    sharedFunction();
    setIsChecked();
  };
  const clear = async () => {
    if (address !== "") {
      setAddress("");
    } else {
      sharedFunction();
    }
  };

  const onError = (status, clearSuggestions) => {
    clearSuggestions();
  };

  const searchLocation = async () => {
    filterLocation(address);
    onToggleLoc();
  };

  const handleCheckboxChange = () => {
    setIsChecked();
    filterCurrentLocation(isChecked);
    onToggleLoc();
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
              {t("common:currentLocation")}
            </label>
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
          {isChecked === true ? (
            <button
              onClick={() => clearCurrentLocation()}
              disabled={!isChecked}
              className="button_primary_outline w_min_125 w_100pc"
            >
              {t("common:Clear All")}
            </button>
          ) : (
            <button
            onClick={clear}
            disabled={address === "" && location === ""}
            className="button_primary_outline w_min_125 w_100pc"
          >
           {t("common:Clear All")}
          </button>
          )}

          <button
            onClick={() => searchLocation()}
            disabled={!address}
            className="button_primary w_min_125 w_100pc"
          >
            {t("common:Show Results")}
          </button>
        </div>
      </div>
    </div>
  );
}
