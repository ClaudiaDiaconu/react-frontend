import React, { useState } from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, SetTerms] = useState(false);
  const storageToken = sessionStorage.getItem("auth-token");
  const navigate = useNavigate();

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const isDisabled = () => {
    return (
      !user.fullName ||
      !user.email ||
      !user.password ||
      !confirmPassword ||
      !terms
    );
  };

  const changeTerms = () => {
    SetTerms((state) => !state);
    console.log(terms);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.password !== confirmPassword) {
      return toast.error("Passwords do not match!");
    }
    try {
      let res = await axios.post("http://localhost:5001/register", user);
      sessionStorage.setItem("auth-token", res.data);
      navigate("/login", { replace: true });
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
      <section className="vh-100 bg-image">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Create an account
                    </h2>

                    <form>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          name="fullName"
                          value={user.fullName}
                          onChange={onInputChange}
                        />
                        <label className="form-label" htmlFor="form3Example1cg">
                          Your Name
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                          name="email"
                          value={user.email}
                          onChange={onInputChange}
                        />
                        <label className="form-label" htmlFor="form3Example3cg">
                          Your Email
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                          name="password"
                          value={user.password}
                          onChange={onInputChange}
                        />
                        <label className="form-label" htmlFor="form3Example4cg">
                          Password
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cdg"
                          className="form-control form-control-lg"
                          name="confirm-password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <label
                          className="form-label"
                          htmlFor="form3Example4cdg"
                        >
                          Repeat your password
                        </label>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3cg"
                          onChange={changeTerms}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3g"
                        >
                          I agree all statements in{" "}
                          <a href="#!" className="text-body">
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-primary btn-block btn-lg "
                          onClick={handleSubmit}
                          disabled={isDisabled()}
                        >
                          Register
                        </button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">
                        Have already an account?{" "}
                        <Link to="/login" className="fw-bold text-body">
                          <u>Login here</u>
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
