import React, { useState, useEffect, useMemo } from "react";
import { Chart as ChartJS, Tooltip, Legend } from "chart.js";
import { filterChartDataByYear } from "@/helpers/helper";
import { Bar } from "react-chartjs-2";
import { processData } from "@/utils/monthlyDataGenerator";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import Select from "react-select";
import { currentYear, options, months } from "@/helpers/helper";
import Loader from "@/components/loading/loader";

ChartJS.register(Tooltip, Legend);

const BarChart = ({ title, chartData, type, creationDate }) => {
  const [chartArray, setChartArray] = useState([]);
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const selectedOption = { value: selectedYear, label: selectedYear };

  useEffect(() => {
    const filteredArray = filterChartDataByYear(
      chartData,
      currentYear,
      creationDate
    );
    setChartArray(processData(filteredArray, type));
  }, [chartData, creationDate, type]);

  const labels = useMemo(() => months, []);

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

  const data = {
    labels,
    datasets: [
      {
        label: title,
        data: chartArray.map((item) =>
          type === "type2" ? item.scheduled : item.app + item.referredCustomers
        ),
        backgroundColor: "#81C784",
      },
    ],
  };

  const handleChange = (selectedOption) => {
    const yearToFilter = selectedOption.value;
    const filteredArray = filterChartDataByYear(
      chartData,
      yearToFilter,
      creationDate
    );
    setChartArray(processData(filteredArray, type));
    setSelectedYear(yearToFilter);
  };

  return (
    <div className="db_card block_bg_white">
      <div className="db_card_body">
        <div className="d_flex justify_space_between align_item_center pb_12 position_relative">
          <div>
            <h3>{title}</h3>
          </div>
          <div className="db_btn_chart position_relative w_min_100 ml_5">
            <Select
              id="yearSelect"
              options={options}
              value={selectedOption}
              onChange={handleChange}
              placeholder="This year"
              isSearchable={false}
              isDisabled={chartData.length == 0 ? true : false}
            />
          </div>
        </div>

        <div className=" justify_content_center align_item_center pb_12">
          <div className="db_chart_bar">
            {chartData.length === 0 && <Loader />}

            <Bar data={data} options={barOptions} width={100} height={311} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
