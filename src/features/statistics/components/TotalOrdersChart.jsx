import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { chartjs as ChartJS } from "chart.js/auto";

const TotalOrdersChart = () => {
  return (
    <Doughnut
      data={{
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        datasets: [
          {
            label: "Orders",
            data: [
              12556, 52323, 5123, 45215, 5123, 12421, 3425, 1505, 25023, 13005,
              15205, 16002,
            ],
            backgroundColor: [
              "red",
              "yellow",
              "blue",
              "green",
              "brown",
              "black",
              "purple",
            ],
            borderColor: "rgb(75, 192, 192)",
          },
        ],
      }}
      options={{
        scales: {
          y: {
            display: false,
          },
          x: {
            display: true,
          },
        },
      }}
    />
  );
};

export default TotalOrdersChart;
