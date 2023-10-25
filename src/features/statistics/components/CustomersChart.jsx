import React from "react";
import { chartjs as ChartJS } from "chart.js/auto";
import { Pie } from "react-chartjs-2";

const CustomersChart = () => {
  return (
    <Pie
      data={{
        labels: [
          "Percentage discount",
          "Fixed Card Discount",
          "Fixed product discount",
        ],
        datasets: [
          {
            label: "Coupons",
            data: [20, 30, 15],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            position: "top",
            align: "left",
          },
        },
      }}
      width={30}
      height={30}
    />
  );
};

export default CustomersChart;
