import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, Legend } from "chart.js/auto";
import axios from "axios";

const GraphChart = () => {
  const [months, setMonths] = useState([
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
  ]);
  const [timeline, setTimeline] = useState(false);
  const first6Months = [];
  const updateChart = async () => {
    let res = await axios.post("http://localhost:5001/order-post", {
      price: 1250,
      customerName: "Diaconu Claudia",
      products: "blouse",
      brand: "prada",
    });

    setTimeline((prev) => !prev);
    if (timeline) {
      setMonths(["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]);
    } else {
      setMonths(["Jan", "Feb", "Mar", "Apr", "May", "Jun"]);
    }
    setMonths((prev) => {
      console.log(timeline);
      if (timeline) {
        return ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      } else {
        return [...prev];
      }
    });
  };
  return (
    <div style={{ padding: "20px" }} className="monthly-sales col-5">
      <div className="d-flex align-items-center monthly-sales-top-section">
        <h6>Monthly Sales</h6>
        <button
          onClick={updateChart}
          className="btn btn-sm btn-neutral ms-auto"
        >
          {timeline ? "First Part" : "Second Part"}
        </button>
      </div>
      <Line
        data={{
          labels: months,
          datasets: [
            {
              label: "Sales",
              data: [1, 5, 3, 4, 5, 12],
              pointBackgroundColor: "rgb(75, 192, 192)",
              borderColor: "rgb(75, 192, 192)",
            },
          ],
        }}
      />
    </div>
  );
};

export default GraphChart;
