//
import React from "react";
import { Chart as ChartJS, Tooltip, Title, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(Tooltip, Legend, Title, Title, Tooltip, Legend);

export default function PieChart({
  title,
  getKeys,
  getValues,
  getColor,
  label,
}) {
  const data = {
    labels: getKeys,
    datasets: [
      {
        label: " ",
        data: getValues,
        backgroundColor: getColor,
      },
    ],
  };

  const genderOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend
        position: "bottom", // You can adjust the position if needed
      },
    },
    maintainAspectRatio: true,
  };

  return (
    <div className="db_card block_bg_white">
      <div className="db_card_body">
        <div className="d_flex justify_content_start align_item_center pb_12">
          <div>
            <h3>{title}</h3>
          </div>
        </div>

        <div className="d_flex justify_content_center align_item_center pb_12">
          <div className="db_chart_bar">
            <div className="chart_Box">
              <Doughnut options={genderOptions} data={data} />
            </div>
          </div>
        </div>
        <div className="d_flex justify_content_center align_item_center pt_12">
          <div className="db_piechart_legend">
            {label.map((e) => {
              return (
                <div className="db_piechart_legend_col" key={e.id}>
                  <span
                    className={`db_piechart_legend_marker ${e.bgColor}`}
                  ></span>
                  <span className="db_piechart_legend_text">{e.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
