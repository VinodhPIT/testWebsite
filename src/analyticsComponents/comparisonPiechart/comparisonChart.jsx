import React from "react";
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
import { Doughnut } from "react-chartjs-2";

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

export default function ComparisonChart({ totalData, title, labe_1, labe_2 }) {
  const apiData = processData(totalData);

  const appCounts = apiData.map((item) => item.app);

  const totalAppCount = appCounts.reduce((total, count) => total + count, 0);

  const referredCount= apiData.map((item) => item.referredCustomers);

  const totalreferredCount = referredCount.reduce((total, count) => total + count, 0);

  const Paymentmethod = {
    labels: [labe_1, labe_2],
    datasets: [
      {
        label: " ",
        data: [totalAppCount, totalreferredCount],
        backgroundColor: ["#187E7E", "#81C784"],
      },
    ],
  };

  // backgroundColor: ["#F5B6C7", "#883434"],

  const payoptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend
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
              <Doughnut options={payoptions} data={Paymentmethod} />
            </div>
          </div>
        </div>
        <div className="d_flex justify_content_center align_item_center pt_12">
          <div className="db_piechart_payment">
            <div className="db_piechart_payment_col">
              <div className="d_flex align_item_start gap_8">
                <span className="db_piechart_payment_marker block_bg_green_dark_400"></span>
                <span className="db_piechart_payment_text">{labe_1}</span>
              </div>
            </div>

            <div className="db_piechart_payment_col">
              <div className="d_flex align_item_start gap_8">
                <span className="db_piechart_payment_marker block_bg_green_light_200"></span>
                <span className="db_piechart_payment_text">{labe_2}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
