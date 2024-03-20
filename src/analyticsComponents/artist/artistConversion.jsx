import React, { useState, useEffect } from "react";
import Select from "react-select";
import Multiselect from "multiselect-react-dropdown";
import useTranslation from "next-translate/useTranslation";
import { currentYear, options, months } from "@/helpers/helper";
import ConversionDataComponent from "../common/keys";
import { percentageCalculate } from "../customer/customerConversion";
import Loader from "@/components/loading/loader";
import { artistConvesionWithCountryFilter } from "@/apiConfig/artistAnalyticsService";
import useSArtistConversionStore from "@/store/artistAnalytics/conversionArtist";

const ArtistConversion = ({ data, title, token, types }) => {
  const {
    fetchData,
    loading: loadingFetchData,
    registered: registeredData,
  } = useSArtistConversionStore();
  const { t } = useTranslation();
  const { artistConversionTitle, keyMappings } = ConversionDataComponent();

  const [loading, setLoading] = useState(false);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [registered, setRegistered] = useState(registeredData);
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const allCountries = data.map((dataItem) => dataItem.country);
  const countryList = [...new Set(allCountries.filter((item) => !!item))];
  const isLoading = loadingFetchData || loading;
  const selectedOption = { value: selectedYear, label: selectedYear };

  const handleChange = (selectedOption) => {
    setSelectedYear(selectedOption.value);
  };

  const handleCountryChange = async (selectedOption) => {
    const countries =
      selectedOption.length > 0
        ? selectedOption.map((op) => op.value).join()
        : [];

    setSelectedCountries(countries);
    if (selectedOption.length > 0) {
      setLoading(true);
      const res = await artistConvesionWithCountryFilter(
        selectedOption.map((op) => op.value).join(),
        token
      );
      const resWithFilter = res.filter((entry) => entry.year === selectedYear);
      setRegistered(resWithFilter);
      setLoading(false);
    } else fetchData(selectedYear, token);
  };

  useEffect(() => {
    setRegistered(registeredData);
  }, [registeredData]);

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
      <tr className="conversion-highlighter">
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
        <div className="d_flex justify_space_between align_item_center mb_18 pl_15 pr_15 position_relative flex_wrap">
          <div>
            <h3>{title}</h3>
          </div>
          <div className="d_flex m_flex_direction_row m_mt_15 ">
            <div className="db_btn_chart position_relative w_min_170 ml_5 mr_15 d_max_320 m_ml_0 m_mr_0">
              <Multiselect
                displayValue="label"
                onRemove={handleCountryChange}
                onSelect={handleCountryChange}
                options={countryList.map((country) => {
                  return { value: country, label: country };
                })}
                hidePlaceholder={selectedCountries.length > 0}
                placeholder={t("common:AnalyticsArtist.All")}
              />
            </div>
            <div className="db_btn_chart position_relative w_min_100 ml_5">
              <Select
                id="yearSelect"
                isSearchable={false}
                onChange={handleChange}
                options={options}
                placeholder={t("common:AnalyticsArtist.This year")}
                value={selectedOption}
              />
            </div>
          </div>
        </div>
        {isLoading ? (
          <div className="pt_pb_80 h_400">
            <Loader />
          </div>
        ) : registered.length === 0 ? (
          <div className="not_Found">
            <h4>No Data Found</h4>
          </div>
        ) : (
          <div className="d_flex justify_content_start align_item_center pb_12">
            <div className="db_table_block db_table_country">
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
