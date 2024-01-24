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
import { processData } from "@/utils/monthlyDataGenerator";
export default function CustomerChart({ chartData }) {
  const apiData = processData(chartData);
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
        text: "Total  customers",
      },
      legend: {
        display: false, // Hide legend
      },
    },
    maintainAspectRatio: false
  };

  const data = {
    labels,
    datasets: [
      {
        label: " Normal customers ",
        data: apiData.map((item) => item.app),
        backgroundColor: "#187E7E",
      },
      {
        label: " Referred customers ",
        data: apiData.map((item) => item.referredCustomers),
        backgroundColor: "#81C784",
      },
    ],
  };

  return (
    <div className="db_card block_bg_white">
      <div className="db_card_body">
        <div className="d_flex justify_space_between align_item_center pb_12 m_flex_wrap_xs">
          <div>
            <h3>Normal vs referred customers</h3>
          </div>
          <div className="db_piechart_legend m_pt_10_xs">
            <div className="db_piechart_legend_col">
              <span className="db_piechart_legend_marker block_bg_green_dark_400"></span>
              <span className="db_piechart_legend_text">Normal customers</span>
            </div>
            <div className="db_piechart_legend_col">
              <span className="db_piechart_legend_marker block_bg_green_light_200"></span>
              <span className="db_piechart_legend_text">
                Referred customers
              </span>
            </div>
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
