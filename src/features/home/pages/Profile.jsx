import React, { useEffect, useState } from "react";
import Sidebar from "../../navigation/Sidebar";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    mobileNumber: 0,
    addressLineOne: "",
    addressLineTwo: "",
    postCode: "",
    state: "",
    area: "",
    education: "",
    country: "",
    region: "",
  });
  const [prevUser, setPrevUser] = useState({
    fullName: "",
    email: "",
    mobileNumber: null,
    addressLineOne: "",
    addressLineTwo: "",
    postCode: "",
    state: "",
    area: "",
    education: "",
    country: "",
    region: "",
    password: "",
  });
  const id = sessionStorage.getItem("id");

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = axios.put(`http://localhost:5001/users/${id}`, user);
      console.log(res);
    } catch (error) {}
  };

  const getUser = async () => {
    let res = await axios.get(`http://localhost:5001/users/${id}`);
    setPrevUser(res.data);
  };

  useEffect(() => {
    if (id) {
      getUser();
    }
  }, [id]);
  return (
    <div className="d-flex justify-content-between">
      <Sidebar />
      <div className="p-3 d-flex flex-column col-10">
        <div className="container rounded bg-white mt-5 mb-5">
          <div className="row">
            <div className="col-md-3 border-right">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img
                  className="rounded-circle mt-5"
                  width="150px"
                  src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                />
                <span className="font-weight-bold">{prevUser.fullName}</span>
                <span className="text-black-50">{prevUser.email}</span>
                <span> </span>
              </div>
            </div>
            <div className="col-md-5 border-right">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Profile Settings</h4>
                </div>

                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="full name"
                      name="fullName"
                      value={user.fullName}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Mobile Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter phone number"
                      name="mobileNumber"
                      value={user.mobileNumber}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Address Line 1</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter address line 1"
                      name="addressLineOne"
                      value={user.addressLineOne}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Address Line 2</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter address line 2"
                      name="addressLineTwo"
                      value={user.addressLineTwo}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Postcode</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter address line 2"
                      name="postCode"
                      value={user.postCode}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">State</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter address line 2"
                      name="state"
                      value={user.state}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Area</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter address line 2"
                      name="area"
                      value={user.area}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Email ID</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter email id"
                      name="email"
                      value={user.email}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="labels">Education</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="education"
                      name="education"
                      value={user.education}
                      onChange={onInputChange}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <label className="labels">Country</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="country"
                      name="country"
                      value={user.country}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">State/Region</label>
                    <input
                      type="text"
                      className="form-control"
                      name="region"
                      value={user.region}
                      onChange={onInputChange}
                      placeholder="state"
                    />
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <button
                    className="btn btn-primary profile-button"
                    type="button"
                    disabled={!user.email || !user.fullName}
                    onClick={handleSubmit}
                  >
                    Save Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
