import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const [user, setUser] = useState({});
  const id = sessionStorage.getItem("id");

  const getUser = async () => {
    let res = await axios.get(`http://localhost:5001/users/${id}`);
    setUser(res.data);
  };

  useEffect(() => {
    if (id) getUser();
  }, [id]);

  return (
    <nav id="sidebar" className="">
      <div className="p-4 d-flex flex-column justify-content-between">
        <div>
          <h1>
            <NavLink to="/home" className="logo">
              Flash
            </NavLink>
          </h1>
          <ul className="list-unstyled components mb-5">
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to="/home"
              >
                <span className="fa fa-home mr-3"></span> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to="/orders"
              >
                <span className="fa fa-briefcase mr-3"></span> Orders
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to="/profile"
              >
                <span className="fa fa-user mr-3"></span> Profile
              </NavLink>
            </li>
            <li>
              <a href="#">
                <span className="fa fa-paper-plane mr-3"></span> Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              width="75px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            />
            <span className="font-weight-bold">{user.fullName}</span>
            <span className="font-weight-bold">{user.email}</span>
            <span> </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
