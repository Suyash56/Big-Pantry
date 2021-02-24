import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import "animate.css/animate.min.css";
import validator from "validator";
import "react-toastify/dist/ReactToastify.css";
import "../styles/signup.css";

function SignUp() {
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
    email: "",
    phone: "",
  });

  const bounce = cssTransition({
    enter: "animate__animated animate__bounceIn",
    exit: "animate__animated animate__bounceOut",
  });

  const history = useHistory();

  const [valid, setValid] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const handleUserNameInputChange = (event) => {
    setUserData({ ...userData, userName: event.target.value });
  };

  const handleEmailInputChange = (event) => {
    setUserData({ ...userData, email: event.target.value });
  };

  const handlePhoneNumberInputChange = (event) => {
    setUserData({ ...userData, phone: event.target.value });
  };

  const handlePasswordInputChange = (event) => {
    setUserData({ ...userData, password: event.target.value });
  };

  const regx = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;

  const handleSubmit = (event) => {
    console.log("hii");

    if (userData.userName === "") {
      toast.dark("Username should not be empty");
    } else if (userData.email === "") {
      toast.dark("Email should not be empty");
    } else if (!validator.isEmail(userData.email)) {
      toast.dark("Enter valid Email!");
    } else if (userData.password === "") {
      toast.dark("Password should not be empty");
    } else if (userData.password === userData.userName) {
      toast.dark("Password and UserName should not be same");
    } else if (userData.password.length < 5) {
      toast.dark("Length of Password should be greater than 5");
    } else if (userData.phone === "") {
      toast.dark("Phone number should not be empty");
    } else if (!validator.isMobilePhone(userData.phone, "en-IN")) {
      toast.dark("Enter valid Phone number!");
    } else {
      toast.dark("Successfully submitted");
      setValid(true);
      setSubmitted(true);
      localStorage.setItem(userData.email, JSON.stringify(userData));
      setUserData({});
      setTimeout(() => {
        history.push("/login");
      }, 2000);
    }
  };

  return (
    <>
      <div className="bg">
        <div className="container">
          <div className="form-box">
            <div className="Header-form">
              <h4 className="text-center">
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
                      <i className="fa fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    onChange={handleUserNameInputChange}
                    value={userData.name}
                    required
                  />
                </div>
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
                    value={userData.email}
                    onChange={handleEmailInputChange}
                    required
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
                    value={userData.password}
                    onChange={handlePasswordInputChange}
                    required
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-phone"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mobile No"
                    value={userData.phonenumber}
                    onChange={handlePhoneNumberInputChange}
                    required
                  />
                </div>

                <div className="message">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleSubmit}
                  >
                    SIGNUP
                  </button>
                  <div>
                    <Link to="/login">
                      <button className="btn btn-secondary">LOGIN</button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        pauseOnHover={false}
        transition={bounce}
      />
    </>
  );
}

export default SignUp;
