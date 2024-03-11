import React from "react";
import { Bar } from "react-chartjs-2";
import { getContactTimeDifference } from "@/helpers/helper";
import Loader from "@/components/loader";

const CustomerContactTime = ({ title, chartData }) => {
  const dateDiffData = getContactTimeDifference(chartData);
  const labels = Object.keys(dateDiffData);
  const averageTimeData = labels.map(
    (label) => dateDiffData[label].averageTime
  );

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
        data: averageTimeData,
        backgroundColor: "#81C784",
      },
    ],
  };

  return (
    <div className="db_card block_bg_white">
      <div className="db_card_body">
        <div className="d_flex justify_space_between align_item_center pb_12 position_relative">
          <div>
            <h3>{title}</h3>
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

export default CustomerContactTime;
