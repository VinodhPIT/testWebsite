import React from "react";
import { useGlobalState } from "@/context/Context";
import styles from "./dropdown.module.css";
import { getUrl } from "@/utils/getUrl";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

export default function StyleDropdown({
  searchKey,
  currentTab,
  router,
  onToggle,
}) {
  const { state, selectedIds, setSelectedIds, onSearch, clearStyleId } =
    useGlobalState();

    const { t } = useTranslation();


  const handleCheckboxChange = (elId) => {
    if (selectedIds.includes(elId)) {
      setSelectedIds(selectedIds.filter((id) => id !== elId));
    } else {
      setSelectedIds([...selectedIds, elId]);
    }
  };

  const clearAll = async () => {
    setSelectedIds([]);
    clearStyleId();
    await getUrl(currentTab, searchKey, "", state.location, router);
    onToggle();
  };

  const onSearchStyle = async () => {
    await onSearch(
      state.currentTab,
      state.searchKey,
      selectedIds,
      state.location,
      router
    );
    onToggle();
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
        {state.styleCollection.map((el) => {
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
        .
      </div>
      <div className={styles.custom_dropdown_btn}>
        <button
          disabled={state.selectedStyle === "" ? true : false}
          onClick={() => clearAll()}
          className="btn_outline_secondary w_100pc"
        >
         {t("common:Clear All")}
        </button>
        <button
          disabled={selectedIds.length === 0}
          onClick={() => onSearchStyle()}
          className="btn_secondary w_100pc"
        >
          {t("common:Show Results")}
        </button>
      </div>
    </div>
  );
}
