import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post("http://localhost:5001/login", user);
      console.log(res);
      sessionStorage.setItem("id", res.data._id);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />
      <div className="container">
        <div className="login-page">
          <div className="container py-5 h-100">
            <div className="row d-flex align-items-center justify-content-center h-100">
              <div className="col-md-8 col-lg-7 col-xl-6">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                  className="img-fluid"
                  alt="Phone image"
                />
              </div>
              <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <form>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form1Example13"
                      className="form-control form-control-lg"
                      name="email"
                      onChange={onInputChange}
                    />
                    <label className="form-label" htmlFor="form1Example13">
                      Email address
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form1Example23"
                      className="form-control form-control-lg"
                      name="password"
                      onChange={onInputChange}
                    />
                    <label className="form-label" htmlFor="form1Example23">
                      Password
                    </label>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    {/* <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="form1Example3"
                        checked
                      />
                      <label className="form-check-label" for="form1Example3">
                        {" "}
                        Remember me{" "}
                      </label>
                    </div> */}
                    <Link to="/register">Don't have an account!</Link>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block"
                    disabled={!user.email || !user.password}
                    onClick={handleSubmit}
                  >
                    Sign in
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
