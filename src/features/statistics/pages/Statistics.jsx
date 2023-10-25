import React from "react";
import StatisticsCard from "../components/StatisticsCard";
import CustomersCard from "../components/CustomersCard";

const Statistics = () => {
  return (
    <>
      <div className="d-flex flex-wrap gap-1 justify-content-around">
        <StatisticsCard />
        <CustomersCard />
      </div>
    </>
  );
};

export default Statistics;
