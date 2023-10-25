import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import months from "../../../utils";

const OrdersChart = () => {
  return (
    <div style={{ padding: "20px" }} className="monthly-sales col-5">
      <div className="d-flex align-items-center monthly-sales-top-section">
        <h6>Orders</h6>
      </div>
      <Bar
        data={{
          labels: months,
          datasets: [
            {
              label: "Orders",
              data: [
                12556, 52323, 5123, 45215, 5123, 12421, 3425, 1505, 25023,
                13005, 15205, 16002,
              ],
              backgroundColor: "#494CA2",
              borderColor: "rgb(75, 192, 192)",
              barThickness: 7,
              hoverBorderColor: "yellow",
              hoverBorderWidth: "1px",
              hoverBackgroundColor: "rgb(75, 192, 192)",
              borderRadius: 10,
            },
          ],
        }}
      />
    </div>
  );
};

export default OrdersChart;
