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
import Loader from "@/components/loading/loader";
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

export default function TotalAmountEarned({ title, revenueData }) {
  const label = Object.keys(revenueData);
  const dataSet1 = Object.values(revenueData).map((e) => e.total);
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
        label: title,
        data: dataSet1,
        backgroundColor: "#187e7e",
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
