import axios from "axios";
import React, { useEffect, useState } from "react";

const StatsCard = ({ data }) => {
  return (
    <>
      <div className="mb-4 col-sm-6 col-lg-3 mb-4">
        <div className="card h-100">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <h4 className={`fw-normal ${data.platform}`}>
                  {data.platform}
                </h4>
              </div>
              <div className="flex-shrink-0 ms-3 platform-icon">
                <i
                  className={`fa-brands fa-${data.platform} ${data.platform}`}
                ></i>
              </div>
            </div>
          </div>
          <div className={`card-footer py-3 ${data.platform}-background`}>
            <div className={"row align-items-center " + data.platform}>
              <div className="col-10">
                <p className="mb-0">{data.engagement}% increase</p>
              </div>
              <div className="col-2 text-end">
                <i className="fas fa-caret-up"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsCard;
