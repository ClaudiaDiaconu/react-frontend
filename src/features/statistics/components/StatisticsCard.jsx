import React from "react";
import TotalOrdersChart from "./TotalOrdersChart";

const StatisticsCard = () => {
  return (
    <div className="col-5">
      <div className="card h-100">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div>
              <h5 className="mb-1">
                Total orders
                <span className="badge badge-phoenix badge-phoenix-warning rounded-pill fs--1 ms-2">
                  <span className="badge-label">-6.8%</span>
                </span>
              </h5>
              <h6 className="text-700 time-period">Last 7 days</h6>
            </div>
            <h4>16,247</h4>
          </div>
          <div className="d-flex justify-content-center px-4 py-6">
            <TotalOrdersChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsCard;
