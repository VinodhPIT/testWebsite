import React, { useState, useEffect } from "react";
import Select from "react-select";
import useTranslation from "next-translate/useTranslation";
import useCustomerConversionStore from "@/store/customerAnalytics/CustomerConversion";
import {
  currentYear,
  options,
  months,
  calculatePercentage,
} from "@/helpers/helper";
import ConversionDataComponent from "@/analyticsComponents/customerConversion/keys";

const CustomerConversion = ({ token }) => {
  const { registered, fetchData } = useCustomerConversionStore();
  const { t } = useTranslation();
  const { customerConversion, keyMappings } = ConversionDataComponent();

  const [selectedYear, setSelectedYear] = useState(currentYear);
  const selectedOption = { value: selectedYear, label: selectedYear };

  const handleChange = (selectedOption) => {
    setSelectedYear(selectedOption.value);
  };

  useEffect(() => {
    fetchData(selectedYear, token);
  }, [selectedYear]);

  const renderTableRow = (title, key) => (
    <tr key={title}>
      <th className="main_col_title">{title}</th>
      {registered.map((el) => (
        <td key={el.month}>{el[keyMappings[key]] || el[key] || 0}</td>
      ))}
    </tr>
  );

  const monthHeaders = months.map((month, index) => (
    <th key={index}>{month}</th>
  ));

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
                    {customerConversion.map((el) =>
                      renderTableRow(el.title, el.value.toLowerCase())
                    )}
                    <tr>
                      <th className="main_col_title">{t("common:Percentage")}</th>
                      {registered.map((el, index) => {
                        const percentage = calculatePercentage(
                          el.registered,
                          el.contacted,
                          el.offer_pending
                        );

                        return (
                          <td
                            key={index}
                            className={
                              percentage === "0.00"
                                ? "color_red_100"
                                : "color_green_900"
                            }
                          >
                            {percentage === "0.00" ? "0%" : `${percentage}%`}
                          </td>
                        );
                      })}
                    </tr>
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
