import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "font-awesome/css/font-awesome.min.css";
import "../styles/login.css";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();

  const handleEmailInputChange = (event) => {
    setLoginData({ ...loginData, email: event.target.value });
  };

  const handlePasswordInputChange = (event) => {
    setLoginData({ ...loginData, password: event.target.value });
  };

  const handleSubmit = (event) => {
    const Email = JSON.parse(localStorage.getItem(loginData.email));
    if (loginData.email === "") {
      toast.dark("Email should not be empty");
    } else if (loginData.password === "") {
      toast.dark("Password should not be empty");
    } else if (Email === null) {
      toast.dark("Your Email is wrong");
    } else {
      const Password = Email.password;
      if (Password === loginData.password) {
        toast.dark("Login Successfully");
        setTimeout(() => {
          history.push("/");
        }, 4000);
      } else {
        toast.dark("Your Password is wrong");
      }
    }
  };

  return (
    <div className="bg">
      <div className="container">
        <div className="form-box">
          <div className="header-form">
            <h4 className=" text-center">
              <i
                className="fa fa-user-circle"
                style={{ fontSize: "110px" }}
              ></i>
            </h4>
            <div className="image"></div>
          </div>
          <div className="body-form">
            <form>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-envelope-square"></i>
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={loginData.email}
                  onChange={handleEmailInputChange}
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fa fa-lock"></i>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={handlePasswordInputChange}
                />
              </div>
              <button
                type="button"
                className="btn btn-secondary btn-block Button"
                onClick={handleSubmit}
              >
                LOGIN
              </button>
              <div className="message">
                <Link to="/">
                  <button className="signupbtn btn-secondary Button">
                    HOME
                  </button>
                </Link>
                <div>
                  <Link to="/signup">
                    <button className="signupbtn btn-secondary Button">
                      SIGNUP
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        pauseOnHover={false}
      />
    </div>
  );
}

export default Login;
