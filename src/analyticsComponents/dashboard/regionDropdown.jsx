import React, { useState } from "react";
import Image from 'next/image'

import { useToggle } from "@/hooks/useToggle";

import useTranslation from "next-translate/useTranslation";
import { useGlobalState } from "@/context/Context";

import styles from "./css/region.module.css";

export default function RegionDropdown({ onFilterData, countryData ,onClearRegion  ,onToggle}) {
  const { selectedIds, setSelectedIds } = useGlobalState();
  const { t } = useTranslation();
  const [countries] = useState([
    {
      countryId: 2,
      title: t("common:AnalyticsArtist.All"),
      countryGoogleId: "ALL",
    },
    {
      countryId: 1,
      title: t("common:AnalyticsDashboard.Our Region"),
      countryGoogleId: "OR",
    },
    ...countryData,
  ]);

  const clearAll = async () => {
    setSelectedIds([]);
    onClearRegion()
    
  };

  const handleCheckboxChange = (id) => {
    if (id === "ALL") {
      // If 'ALL' is selected
      if (!selectedIds.includes("ALL")) {
        // If 'ALL' is not already selected, select only 'ALL'
        setSelectedIds(["ALL"]);
      } else {
        // If 'ALL' is already selected, deselect it
        setSelectedIds([]);
      }
    } else {
      // If any other country is selected
      if (selectedIds.includes("ALL")) {
        // If 'ALL' is already selected, unselect it
        setSelectedIds(selectedIds.filter((ids) => ids !== "ALL"));
      }
      // Toggle the checkbox for the selected country
      setSelectedIds((prevSelectedIds) => {
        if (prevSelectedIds.includes(id)) {
          return prevSelectedIds.filter((selectedId) => selectedId !== id);
        } else {
          return [...prevSelectedIds, id];
        }
      });
    }
  };

  const onSearchStyle = async () => {
    const selectedIdObj = selectedIds.reduce((obj, item) => {
      obj[item] = true;
      return obj;
    }, {});
    const formattedSelectedIds = `${Object.keys(selectedIdObj)
      .map((id) => `${id}`)
      .join(", ")}`;

    onFilterData(formattedSelectedIds);
  };

  return (
    <div className={styles.custom_dropdown}>
      <div>
        <h4 className={styles.custom_title}>
          {t("common:AnalyticsDashboard.Regions")}
        </h4>
      </div>
      <button className={styles.custom_dropdown_close}  onClick={onToggle}>
        <Image
          src="/icon-close-drop.svg"
          width={24}
          height={24}
          alt="close"
          priority
        />
      </button>

      <div className={styles.custom_dropdown_content}>
        {countries.map((el, index) => {
          return (
            <div key={index} className={styles.custom_dropdown_col}>
              <label className={styles.custom_dropdown_label}>
                <p>{el.title}</p>
                <div className={styles.custom_checkbox}>
                  <input
                    type="checkbox"
                    id={`checkbox_${el.countryGoogleId}`}
                    onChange={() =>
                      handleCheckboxChange(el.countryGoogleId.toUpperCase())
                    }
                    checked={selectedIds.includes(
                      el.countryGoogleId.toUpperCase()
                    )}
                  />
                </div>
              </label>
            </div>
          );
        })}
      </div>
      <div className={styles.custom_dropdown_btn}>
        <button
          disabled={selectedIds.length == 0}
          onClick={() => clearAll()}
          className="btn_outline_secondary w_100pc h_48"
        >
          {t("common:Clear All")}
        </button>
        <button
          disabled={selectedIds.length === 0}
          onClick={() => onSearchStyle()}
          className="btn_secondary w_100pc bdr_rad_4 h_48"
        >
          {t("common:AnalyticsDashboard.Apply")}
        </button>
      </div>
    </div>
  );
}
