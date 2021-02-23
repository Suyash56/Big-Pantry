import React from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "../styles/login.css";

function Login() {
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
                    <i class="fa fa-envelope-square"></i>
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <button type="button" className="btn btn-secondary btn-block">
                LOGIN
              </button>
              <div className="message">
                <Link to="/">
                  <button className="signupbtn btn-secondary">Home</button>
                </Link>
                <div>
                  <Link to="/signup">
                    <button className="signupbtn btn-secondary">SignUp</button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
