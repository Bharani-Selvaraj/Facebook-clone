import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="Login">
      <div className="facebook">
        <div className="facebooktext">facebook</div>
        <div className="title">
          Facebook helps you connect and share
          <br></br> with the people in your life.
        </div>
      </div>
      <div className="LoginContainer">
        <div className="Logindetails">
          <input
            type="email"
            placeholder="Email address or phone number"
            className="placeholder"
          />
          <br></br>
          <input
            type="Password"
            placeholder="Password"
            className="placeholder"
          />
          <br></br>
          <button className="btn">
            <Link to="/HeaderArea">Log in</Link>
          </button>

          <div className="forget">
            <a href="forget">Forgotten password?</a>
          </div>
          <br></br>
        </div>
        <br></br>
        <button className="btns">Create new account</button>
      </div>
      <p></p>
      <br></br>
      <div className="page">
        <a href="createpage">
          <b>Create a Page</b>
        </a>{" "}
        for a celebrity, brand or business.
      </div>
    </div>
  );
}
export default LoginPage;
