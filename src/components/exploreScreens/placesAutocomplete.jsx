import React, { useState } from "react";
import { getUrl } from "@/utils/getUrl";
import PlacesAutocomplete from "react-places-autocomplete";
import useWindowResize from "@/hooks/useWindowSize";
import styles from "./styles/dropdown.module.css";
import Image from "next/image";
import { useGlobalState } from "@/context/Context";
import useTranslation from "next-translate/useTranslation";



export default function LocationSearch({
  currentTab,
  searchKey,
  selectedStyle,
  router,
  onToggle,
}) {
  const { getAddress, state } = useGlobalState();
  const { isMobileView } = useWindowResize();
  const [address, setAddress] = useState("");
  const { t } = useTranslation();


 
  const clear = async () => {
    setAddress("");
    getAddress("Location");
    await getUrl(currentTab, searchKey, selectedStyle, "", router);
  };

  const handleSelect = async (value) => {
    setAddress(value);
  };

  const onError = (status, clearSuggestions) => {
    clearSuggestions();
  };

  const searchLocation = async () => {
    await getUrl(currentTab, searchKey, selectedStyle, address, router);
    getAddress(address);
    onToggle();
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
            <div
              onClick={() => onToggle()}
              className={styles.custom_toggle_close}
            >
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
                    placeholder: t("common:Search Location")
                  })}
                  className={styles.location_search_input}
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
            disabled={state.location === "" ? true : false}
            className="btn_outline_secondary w_100pc"
          >
            {t("common:Clear All")}
          </button>

          <button
            onClick={() => searchLocation()}
            disabled={address === ""}
            className="btn_secondary w_100pc"
          >
            {t("common:Show Results")}
          </button>
        </div>
      </div>
    </div>
  );
}
