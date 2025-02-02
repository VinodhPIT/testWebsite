import React from "react";
import Image from "next/image";

import useTranslation from "next-translate/useTranslation";

import { useGlobalState } from "@/context/Context";
import styles from "./styles/dropdown.module.css";
import { getUrl } from "@/utils/getUrl";

export default function StyleDropdown({searchKey,  currentTab,  router,  onToggle,}) {
  
  const { state, selectedIds, setSelectedIds, onSearch, clearStyleId } = useGlobalState();
    
  const { t } = useTranslation();

  const handleCheckboxChange = (elId) => {
    if (selectedIds.includes(elId)) {
      setSelectedIds(selectedIds.filter((id) => id !== elId));
    } else {
      setSelectedIds([...selectedIds, elId]);
    }
  };

  const clearAll = async () => {
    if (currentTab) {
    setSelectedIds([]);
    clearStyleId();
    await getUrl(currentTab, searchKey, "", state.location, router);
    onToggle();
    }
  };

  const onSearchStyle = async () => {
    if (currentTab) {
      await onSearch(
        currentTab,
        state.searchKey,
        selectedIds,
        state.location,
        router
      );
      onToggle();
    } else {
    //  console.error(`No translation found for the current tab: ${state.currentTab}`);
    }
  };
  

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
          disabled={state.selectedStyle === "" ? true : false}
          onClick={() => clearAll()}
          className="btn_outline_secondary w_100pc custom_fs_16 text_fs_m_14 m_pl_10 m_pr_10"
        >
          {t("common:Clear All")}
        </button>
        <button
          disabled={selectedIds.length === 0}
          onClick={() => onSearchStyle()}
          className="btn_secondary w_100pc bdr_rad_4 text_fs_m_14 m_pl_10 m_pr_10"
        >
          {t("common:Show Results")}
        </button>
      </div>
    </div>
  );
}
