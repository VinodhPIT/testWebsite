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
  const { t } = useTranslation();

  const [countries] = useState([
    {
      countryId: 2,
      title: t("common:AnalyticsArtist.All"),
      countryGoogleId: 'ALL'
    },
    {
      countryId: 1,
      title: t("common:AnalyticsDashboard.Our Region"),
      countryGoogleId: 'OR'
    },
    ...countryData
  ]);

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
console.log('<><> selected id',selectedIds)
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
      <div className={styles.custom_title}>{t("common:AnalyticsDashboard.Regions")}</div>
      <div className={styles.custom_dropdown_content}>
        {countries.map((el) => {
          return (
            <div key={el.countryGoogleId} className={styles.custom_dropdown_col}>
              <label className={styles.custom_dropdown_label}>
                <p>{el.title}</p>
                <div className={styles.custom_checkbox}>
                  <input
                    type="checkbox"
                    id={`checkbox_${el.countryGoogleId}`}
                    onChange={() => handleCheckboxChange(el.countryGoogleId.toUpperCase())}
                    checked={selectedIds.includes(el.countryGoogleId.toUpperCase())}
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
          {t("common:AnalyticsDashboard.Apply")}
        </button>
      </div>
    </div>
  );
}
