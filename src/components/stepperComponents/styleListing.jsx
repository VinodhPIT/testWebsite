import React, { useEffect } from "react";
import Image from "next/image";

import useTranslation from "next-translate/useTranslation";
import { useRequestForm } from "@/store/requestManagement/requestForm";
import { useGlobalState } from "@/context/Context";

import styles from "./styles/dropdown.module.css";


export default function StyleDropdown({ onToggle }) {
  
  const {styleId, fetchArtistByStyle, clearStyle } = useRequestForm();
  const { state, selectedIds, setSelectedIds, styleCollection } = useGlobalState();
  const { t } = useTranslation();
  

  const handleCheckboxChange = (elId) => {
    if (selectedIds.includes(elId)) {
      setSelectedIds(selectedIds.filter((id) => id !== elId));
    } else {
      setSelectedIds([...selectedIds, elId]);
    }
  };
  
  const clearAll = async () => {
    if (Array.isArray(styleId) && styleId.length > 0) {
      clearStyle();
    }
    setSelectedIds([]);
  };

  const onSearchStyle = async () => {
    fetchArtistByStyle(selectedIds);
    onToggle();
  };
  
  useEffect(() => {
    styleCollection();
  }, []);
  

  return (
    <div className={styles.custom_dropdown}>
      <h4>{t("common:Style")}</h4>
      <div className={styles.custom_dropdown_close} onClick={() => onToggle()}>
        <Image
          src="/icon-close-drop.svg"
          width={24}
          height={24}
          alt="close"
          priority
        />
      </div>
      <div className={styles.custom_dropdown_content}>
        {state.styleCollection &&
          state.styleCollection.map((el) => {
            return (
              <div key={el.slug} className={styles.custom_dropdown_col}>
                <label className={styles.custom_dropdown_label}>
                  <p>{el.name}</p>
                  <div className={styles.custom_checkbox}>
                    <input
                      type="checkbox"
                      id={`checkbox_${el.slug}`}
                      onChange={() => handleCheckboxChange(el.slug)}
                      checked={selectedIds.includes(el.slug)}
                    />
                  </div>
                </label>
              </div>
            );
          })}
      </div>
      <div className={styles.custom_dropdown_btn}>
        <button
          disabled={selectedIds.length === 0}
          onClick={() => clearAll()}
          className="button_primary_outline w_min_125 w_100pc"
        >
          {t("common:Clear All")}
        </button>
        <button
          disabled={selectedIds.length === 0}
          onClick={() => onSearchStyle()}
          className="button_primary w_min_125 w_100pc"
        >
          {t("common:Show Results")}
        </button>
      </div>
    </div>
  );
}
