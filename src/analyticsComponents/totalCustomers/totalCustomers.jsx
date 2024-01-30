import React, { useState, useEffect } from "react";
import { Chart as ChartJS, Tooltip, Title, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { processData } from "@/utils/monthlyDataGenerator";
import DatePicker, {
  utils,
} from "@hassanmojab/react-modern-calendar-datepicker";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";

import { analyticsCustomeFilter } from "@/action/analyticsAdmin";
import { formatDate } from "@/helpers/helper";
ChartJS.register(Tooltip, Legend, Title, Title, Tooltip, Legend);

export default function TotalCustomers({ chartData ,token }) {
  const [charyArray, setChartArray] = useState([]);

  useEffect(() => {
    const apiData = processData(chartData);
    setChartArray(apiData);
  }, []);

  const labels = [
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

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false, // Hide legend
      },
    },
    maintainAspectRatio: false,
  };

  // const apiData = processData(charyArray);

  const data = {
    labels,
    datasets: [
      {
        label: " Total Customers ",
        data: charyArray.map((item) => item.app + item.referredCustomers),
        backgroundColor: "#81C784",
      },
    ],
  };

  const defaultRange = {
    from: null,
    to: null,
  };

  const [selectedDayRange, setSelectedDayRange] = useState(defaultRange);

  const handleDateChange = async (selectedRange) => {
    setSelectedDayRange(selectedRange);

    if (selectedRange.to !== null) {
      const formattedDate = formatDate(selectedRange.from);
      const formattedDate1 = formatDate(selectedRange.to);

      const customerJoiningData = await analyticsCustomeFilter(
        formattedDate,
        formattedDate1 ,token
      );

      const apiData = processData(customerJoiningData);
      setChartArray(apiData);
    }
  };

  return (
    <div className="db_card block_bg_white">
      <div className="db_card_body">
        <div className="d_flex justify_space_between align_item_center pb_12 position_relative">
          <div>
            <h3>Total customers</h3>
          </div>
          <div className="db_btn_chart">
            <DatePicker
              value={selectedDayRange}
              shouldHighlightWeekends
              inputPlaceholder="By Month"
              // renderInput={renderCustomInput}
              onChange={handleDateChange}
            />
          </div>
        </div>

        <div className=" justify_content_center align_item_center pb_12">
          <div className="db_chart_bar">
            <Bar data={data} options={options} width={100} height={311} />
          </div>
        </div>
      </div>
    </div>
  );
}
