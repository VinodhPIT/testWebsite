import React from "react";
import { useGlobalState } from "@/context/Context";
import styles from "./region.module.css";
import { getUrl } from "@/utils/getUrl";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import Modal from 'react-modal';

export default function RegionDropdown({ onFilterData }) {

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
    onFilterData();
    onToggle();
  };

  const regionCollection = [
    {
      id: 1,
      name: 'All'
    },
    {
      id: 2,
      name: 'Our region'
    },
    {
      id: 3,
      name: 'Germany'
    },
    {
      id: 4,
      name: 'Switzerland'
    },
    {
      id: 5,
      name: 'United Kingdom'
    }
  ]

  return (
    <div className={styles.custom_dropdown}>
      <div className={styles.custom_title}>Regions</div>
      <div className={styles.custom_dropdown_content}>
        {regionCollection.map((el) => {
          return (
            <div key={el.id} className={styles.custom_dropdown_col}>
              <label className={styles.custom_dropdown_label}>
                <p>{el.name}</p>
                <div className={styles.custom_checkbox}>
                  <input
                    type="checkbox"
                    id={`checkbox_${el.id}`}
                    onChange={() => handleCheckboxChange(el.id)}
                    checked={selectedIds.includes(el.id)}
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
          Apply
        </button>
      </div>
    </div>
  );
}