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

export default function CustomerPayment({
  totalRevenue,

  title,
}) {
  const Paymentmethod = {
    labels: ["Klarna Payment", "Normal Payment"],
    datasets: [
      {
        label: " Amount ",
        data: [totalRevenue.klarna, totalRevenue.stripe],
        backgroundColor: ["#F5B6C7", "#883434"],
      },
    ],
  };

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
                <span className="db_piechart_payment_marker block_bg_pink"></span>
                <span className="db_piechart_payment_text">Klarna</span>
              </div>
              <h2>{totalRevenue.klarna} CHF</h2>
            </div>

            <div className="db_piechart_payment_col">
              <div className="d_flex align_item_start gap_8">
                <span className="db_piechart_payment_marker block_bg_brown"></span>
                <span className="db_piechart_payment_text">Normal Payment</span>
              </div>
              <h2>{totalRevenue.stripe} CHF</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
