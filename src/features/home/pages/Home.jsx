import React, { useEffect, useState } from "react";
import GraphChart from "../components/GraphChart";
import Sidebar from "../../navigation/Sidebar";
import OrdersChart from "../components/OrdersChart";
import StatsCard from "../components/StatsCard";
import axios from "axios";
import Statistics from "../../statistics/pages/Statistics";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [social, setSocial] = useState([]);
  const id = sessionStorage.getItem("id");
  const navigate = useNavigate();

  const getSocials = async () => {
    try {
      let res = await axios.get("http://localhost:5001/social");
      console.log(res.data);
      setSocial(res.data);
      console.log(social);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSocials();
  }, []);

  if (!id) {
    navigate("/login");
  }
  return (
    <>
      <div className="d-flex justify-content-between">
        <Sidebar />
        <div className="p-3 d-flex flex-column col-10">
          <h3 className="dashboard-text">Dashoard</h3>
          <div className="d-flex justify-content-around flex-wrap align-items-center">
            <GraphChart />
            <OrdersChart />
          </div>
          <div className="mt-3">
            <Statistics />
          </div>
          <div className="row mt-5 col-12">
            <h4 className="social-media">Social Media Interactions</h4>
            {social.map((data) => (
              <StatsCard data={data} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
