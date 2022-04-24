import React from "react";
import Button from "../../../Components/Button/Button";
import "./Login.scss";
const Login = () => {
  return (
    <div className="login___container">
      <div className="top">
        <h1 className="title">Login</h1>
        <p className="para">Welcome back 👋 Login to collaborate</p>
      </div>

      <div className="form__container">
        <label htmlFor="email">Email*</label>
        <input type="email" />

        <label htmlFor="password">Password*</label>
        <input type="password" />
        <a href="#">Forgot Password?</a>

        <Button buttonValue={'Login'} />
        <p className="account__return__detail">
          Not regestered yet?
          <span>
            <a href="#">Create an account</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
