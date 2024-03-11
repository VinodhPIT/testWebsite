import React, { useState, useEffect } from "react";
import Select from "react-select";
import useTranslation from "next-translate/useTranslation";
import useCustomerConversionStore from "@/store/customerAnalytics/conversionCustomer";
import { currentYear, options, months } from "@/helpers/helper";
import ConversionDataComponent from "@/analyticsComponents/common/keys";

export const percentageCalculate = (part, whole) => {
  const calculatedPercentage = (part / whole) * 100;
  return isNaN(calculatedPercentage) ? "0.00" : calculatedPercentage.toFixed(2);
};

const CustomerConversion = ({ token }) => {
  const { registered, fetchData } = useCustomerConversionStore();
  const { t } = useTranslation();
  const { customerConversionTitle, keyMappings } = ConversionDataComponent();

  const [selectedYear, setSelectedYear] = useState(currentYear);
  const selectedOption = { value: selectedYear, label: selectedYear };

  const handleChange = (selectedOption) => {
    setSelectedYear(selectedOption.value);
  };

  useEffect(() => {
    fetchData(selectedYear, token);
  }, [selectedYear, fetchData, token]);

  const renderTableRow = (title, key) => (
    <tr key={title}>
      <th className="main_col_title">{customerConversionTitle[title]}</th>
      {registered.map((el) => (
        <td key={el.month}>{el[keyMappings[key]] || el[key] || 0}</td>
      ))}
    </tr>
  );

  const monthHeaders = months.map((month, index) => (
    <th key={index}>{month}</th>
  ));

  const CustomerConversionDisplayBlock = ({ partTitle, wholeTitle }) => (
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
        <div className="d_flex justify_space_between align_item_center mb_18 pl_20 pr_20 position_relative">
          <div>
            <h3>{t("common:AnalyticsCustomer.Customer Conversion")}</h3>
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
            <h4>{t("common:nodata")}</h4>
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
                    <CustomerConversionDisplayBlock
                      partTitle="registered"
                      wholeTitle="contacted"
                    />
                    <CustomerConversionDisplayBlock
                      partTitle="contacted"
                      wholeTitle="offers_received"
                    />
                    <CustomerConversionDisplayBlock
                      partTitle="offers_received"
                      wholeTitle="offer_accepted"
                    />
                    <CustomerConversionDisplayBlock
                      partTitle="offer_accepted"
                      wholeTitle="offers_completed"
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

export default CustomerConversion;
