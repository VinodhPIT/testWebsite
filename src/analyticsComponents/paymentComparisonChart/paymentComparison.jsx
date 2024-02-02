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

export default function PaymentComparison({
  title,
  label_1,
  label_2,
  revenueData,
}) {
  const label = Object.keys(revenueData);
  const klarnaData = Object.values(revenueData).map((currencyData) =>
    parseFloat(currencyData.klarna)
  );
  const stripeData = Object.values(revenueData).map((currencyData) =>
    parseFloat(currencyData.stripe)
  );

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
        data: klarnaData,
        backgroundColor: "#f5b6c7",
      },
      {
        label: label_2,
        data: stripeData,
        backgroundColor: "#883434",
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
              <span className="db_piechart_legend_marker block_bg_pink"></span>
              <span className="db_piechart_legend_text">{label_1}</span>
            </div>
            <div className="db_piechart_legend_col">
              <span className="db_piechart_legend_marker block_bg_brown"></span>
              <span className="db_piechart_legend_text">{label_2}</span>
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
