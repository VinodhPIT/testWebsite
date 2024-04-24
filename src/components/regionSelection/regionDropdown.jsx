import React, { useState } from "react";
import { useGlobalState } from "@/context/Context";
import styles from "./region.module.css";
import { getUrl } from "@/utils/getUrl";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import Modal from 'react-modal';

export default function RegionDropdown({ onFilterData, countryData }) {
  const { selectedIds, setSelectedIds } =  useGlobalState();

  const [selectedRegionCode, setSelectedRegionCode] = useState([]);
  const [countries] = useState([
    {
      countryId: 1,
      title: 'All',
      countryGoogleId: 'al'
    },
    {
      countryId: 2,
      title: 'Our region',
      countryGoogleId: 'or'
    },
    ...countryData
  ]);

  const { t } = useTranslation();

  const clearAll = async () => {
    setSelectedIds([]);
    setSelectedRegionCode([]);
  };

  const handleCheckboxChange = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((ids) => ids !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const onSearchStyle = async () => {
    const selectedIdObj = selectedIds.reduce((obj, item) => {
      obj[item] = true;
      return obj;
    }, {});
    const formattedSelectedIds = `${Object.keys(selectedIdObj)
      .map(id => `${id}`)
      .join(', ')}`;

    onFilterData(formattedSelectedIds);
  };

  return (
    <div className={styles.custom_dropdown}>
      <div className={styles.custom_title}>Regions</div>
      <div className={styles.custom_dropdown_content}>
        {countries.map((el) => {
          return (
            <div key={el.countryId} className={styles.custom_dropdown_col}>
              <label className={styles.custom_dropdown_label}>
                <p>{el.title}</p>
                <div className={styles.custom_checkbox}>
                  <input
                    type="checkbox"
                    id={`checkbox_${el.countryId}`}
                    onChange={() => handleCheckboxChange(el.countryId)}
                    checked={selectedIds.includes(el.countryId)}
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
          disabled={selectedIds.length == 0}
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