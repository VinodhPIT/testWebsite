import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  Title,
  BarElement,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Loader from "@/components/loader";
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  Title,
  Title,
  Tooltip,
  BarElement,
  Legend
);

export default function PaymentComparison({
  title,
  label_1,
  label_2,
  revenueData,
  isTest,
}) {
  const label = Object.keys(revenueData);

  const keys = {
    klarna: "klarna",
    stripe: "stripe",
    completed: "completed",
    cancelled: "cancelled",
  };

  const dataSet1 = Object.values(revenueData).map((el) => {
    if (keys.klarna && el[keys.klarna]) {
      return parseFloat(el[keys.klarna]);
    } else if (keys.completed && el[keys.completed]) {
      return parseFloat(el[keys.completed]);
    }
    return null; 
  });

  const dataSet2 = Object.values(revenueData).map((el) => {
    if (keys.stripe && el[keys.stripe]) {
      return parseFloat(el[keys.stripe]);
    } else if (keys.cancelled && el[keys.cancelled]) {
      return parseFloat(el[keys.cancelled]);
    }
    return null; 
  });



  const labels = label;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
    maintainAspectRatio: false,
  };

  const data = {
    labels,
    datasets: [
      {
        label: label_1,
        data: dataSet1,
        backgroundColor: isTest ? "#187e7e" : "#f5b6c7",
      },
      {
        label: label_2,
        data: dataSet2,
        backgroundColor: isTest ? "#81c784" : "#883434",
      },
    ],
  };

  return (
    <div className="db_card block_bg_white">
      <div className="db_card_body">
        <div className="d_flex justify_space_between align_item_center pb_12 m_flex_wrap_xs">
          <div>
            <h3>{title}</h3>
          </div>
          <div className="db_piechart_legend m_pt_10_xs">
            <div className="db_piechart_legend_col">
              <span
                className={`db_piechart_legend_marker  ${
                  isTest ? " block_bg_green_dark_400 " : "block_bg_pink"
                }`}
              ></span>
              <span className="db_piechart_legend_text">{label_1}</span>
            </div>
            <div className="db_piechart_legend_col">
              <span
                className={`db_piechart_legend_marker    ${
                  isTest ? " block_bg_green_light_200" : "block_bg_brown"
                } `}
              ></span>
              <span className="db_piechart_legend_text">{label_2}</span>
            </div>
          </div>
        </div>
        <div className=" justify_content_center align_item_center pb_12">
          <div className="db_chart_bar">
            {Object.keys(revenueData).length === 0 && <Loader />}
            <Bar data={data} options={options} width={100} height={390} />
          </div>
        </div>
      </div>
    </div>
  );
}
