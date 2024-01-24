import React, { useState, useEffect } from "react";
import Select from "react-select";
import { analyticsConvertion } from "@/action/action";

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

const CustomerConversion = () => {
  const [registered, setRegistered] = useState([]);
  const [contacted, setContacted] = useState([]);
  const [offerpending, setPending] = useState([]);

  const startYear = 2023;
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
    const fetchData = async () => {
      try {
        let res = await analyticsConvertion();
        const filteredData = res.filter((entry) => entry.year === selectedYear);
        setRegistered(filteredData);
        setContacted(filteredData);
        setPending(filteredData);
      } catch (error) {}
    };
    fetchData();
  }, [selectedYear]);

  const renderTableRow = (title, key) => (
    <tr key={title}>
      <th className="main_col_title">{title}</th>
      {registered.map((el) => (
        <td key={el.id}>
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
                    {registered.map((el, index) => (
                      <td
                        key={index}
                        className={calculatePercentage(
                          el.registered,
                          contacted[index].contacted,
                          offerpending[index].offer_pending
                        ) === "0.00" ? "color_red_100" : "color_green_900"}
                      >
                        {calculatePercentage(
                          el.registered,
                          contacted[index].contacted,
                          offerpending[index].offer_pending
                        )}
                        %
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerConversion;
