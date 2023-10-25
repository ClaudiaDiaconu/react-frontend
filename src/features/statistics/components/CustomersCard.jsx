import React from "react";
import CustomersChart from "./CustomersChart";

const CustomersCard = () => {
  return (
    <div className="col-5">
      <div className="card h-100">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div>
              <h5 className="mb-1">
                Top Coupons
                <span className="badge badge-phoenix badge-phoenix-warning rounded-pill fs--1 ms-2">
                  <span className="badge-label">-6.8%</span>
                </span>
              </h5>
              <h6 className="text-700 time-period">Last 7 days</h6>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <CustomersChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersCard;
