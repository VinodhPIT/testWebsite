import React, { useState, useEffect } from "react";
import Select from "react-select";
import useCustomerConversionStore from "@/store/CustomerConversion";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const CustomerConversion = ({token}) => {
  const { registered, contacted, offerpending, fetchData } =  useCustomerConversionStore();
  

  const startYear = 2020;
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, index) => startYear + index
  );

  const options = years.map((year) => ({ value: year, label: year }));
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const selectedOption = { value: selectedYear, label: selectedYear };

  const handleChange = (selectedOption) => {
    setSelectedYear(selectedOption.value);
  };

  useEffect(() => {
    fetchData(selectedYear ,token);
  }, [selectedYear]);

  const renderTableRow = (title, key) => (
    <tr key={title}>
      <th className="main_col_title">{title}</th>
      {registered.map((el) => (
        <td key={el.month}>
          {el[key === "offer pending" ? "offer_pending" : key]}
        </td>
      ))}
    </tr>
  );

  const calculatePercentage = (registered, contacted, offerPending) => {
    const sum = registered + contacted + offerPending;
    return (sum / 3).toFixed(2);
  };

  const monthHeaders = months.map((month, index) => (
    <th key={index}>{month}</th>
  ));

  return (
    <div className="db_card block_bg_white">
      <div className="db_card_body pl_0 pr_0">
        <div className="d_flex justify_space_between align_item_center mb_18 pl_20 pr_20 position_relative">
          <div>
            <h3>Customer Conversion</h3>
          </div>
          <div className="db_btn_chart right_20">
            <Select
              id="yearSelect"
              options={options}
              value={selectedOption}
              onChange={handleChange}
              placeholder="This year"
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
                      <th className="main_head_title">Month</th>
                      {monthHeaders}
                    </tr>
                  </thead>

                  <tbody>
                    {["Registered", "Contacted", "Offer pending"].map((title) =>
                      renderTableRow(title, title.toLowerCase())
                    )}
                    <tr>
                      <th className="main_col_title">Percentage</th>
                      {registered.map((el, index) => {
                        const percentage = calculatePercentage(
                          el.registered,
                          contacted[index].contacted,
                          offerpending[index].offer_pending
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
