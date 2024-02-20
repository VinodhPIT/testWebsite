import React, { useState, useEffect } from "react";
import Select from "react-select";
import useSArtistConversionStore from "@/store/artistAnalytics/artistConversion";
import {
  currentYear,
  options,
  months,
} from "@/helpers/helper";
import ConversionDataComponent from "@/analyticsComponents/customerConversion/keys";
import useTranslation from "next-translate/useTranslation";
import { percentageCalculate } from "../customerConversion/customerConversion";

const ArtistConversion = ({ title, token, types }) => {
  const { registered, fetchData } = useSArtistConversionStore();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const selectedOption = { value: selectedYear, label: selectedYear };
  const { t } = useTranslation();
  const { artistConversionTitle, keyMappings } = ConversionDataComponent();

  const handleChange = (selectedOption) => {
    setSelectedYear(selectedOption.value);
  };
  useEffect(() => {
    fetchData(selectedYear, token);
  }, [selectedYear]);

  const renderTableRow = (title, key) => (
    <tr key={title}>
      <th className="main_col_title">{artistConversionTitle[title]}</th>
      {registered.map((el) => (
        <td key={el.month}>{el[keyMappings[key]] || el[key] || 0}</td>
      ))}
    </tr>
  );

  const monthHeaders = months.map((month, index) => (
    <th key={index}>{month}</th>
  ));

  const ArtistConversionDisplayBlock = ({ partTitle, wholeTitle }) => (
    <>
      {[partTitle, wholeTitle].map((title) =>
        renderTableRow(title, title.toLowerCase())
      )}
      <tr>
        <th className="main_col_title">Percentage</th>
        {registered.map((el, index) => {
          const percentage = percentageCalculate(el[wholeTitle], el[partTitle]);

          return (
            <td
              key={index}
              className={
                percentage === "0.00" || percentage === "Infinity"
                  ? "color_red_100"
                  : "color_green_900"
              }
            >
              {percentage === "0.00" || percentage === "Infinity"
                ? "0%"
                : `${percentage}%`}
            </td>
          );
        })}
      </tr>
    </>
  );

  return (
    <div className="db_card block_bg_white">
      <div className="db_card_body pl_0 pr_0">
        <div className="d_flex justify_space_between align_item_center mb_18 pl_20 pr_20 position_relative">
          <div>
            <h3>{title}</h3>
          </div>
          <div className="db_btn_chart position_relative w_min_100 ml_5">
            <Select
              id="yearSelect"
              isSearchable={false}
              onChange={handleChange}
              options={options}
              placeholder="This year"
              value={selectedOption}
            />
          </div>
        </div>
        {registered.length === 0 ? (
          <div className="not_Found">
            <h4>No Data Found</h4>
          </div>
        ) : (
          <div className="d_flex justify_content_start align_item_center pb_12">
            <div className="db_table_block">
              <div className="table-responsive">
                <table className="table table-striped table-nowrap table-centered mb-0">
                  <thead>
                    <tr>
                      <th className="main_head_title">{t("common:Month")}</th>
                      {monthHeaders}
                    </tr>
                  </thead>

                  <tbody>
                    <ArtistConversionDisplayBlock
                      partTitle="lead"
                      wholeTitle="public_artist"
                    />
                    <ArtistConversionDisplayBlock
                      partTitle="public_artist"
                      wholeTitle="offer_send_count"
                    />
                    <ArtistConversionDisplayBlock
                      partTitle="offer_send_count"
                      wholeTitle="offer_scheduled_count"
                    />
                    <ArtistConversionDisplayBlock
                      partTitle="offer_scheduled_count"
                      wholeTitle="offer_completed_count"
                    />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtistConversion;
