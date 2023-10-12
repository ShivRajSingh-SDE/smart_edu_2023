import React, { useState } from "react";
import img from "../img/c1.png";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/", {
        email,
        password,
      });

      if (response.data === "exist") {
        // Redirect to /header with email state
        window.location.href = `/?id=${email}`;
      } else if (response.data === "not exist") {
        alert("User is not signed up");
        window.location.href = `/signup?id=${email}`;
      }
    } catch (error) {
      alert("Wrong Details");
      console.error(error);
    }
  }

  return (
    <div className="login-container">
      <img className="login-logo" src={img} alt="" />
      <p className="login-title">Log In</p>
      <div className="login-divider"></div>
      <form onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="LoggingEmailAddress">Email Address</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
            id="LoggingEmailAddress"
            className="login-input"
            type="email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="loggingPassword">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            id="loggingPassword"
            className="login-input"
            type="password"
          />
        </div>

        <div className="submit-button">
          <button type="submit" className="login-button">
            Submit
          </button>
        </div>
      </form>
      <div className="login-links">
        <Link to="/Signup" className="login-link">
          or sign up
        </Link>
      </div>
    </div>
  );
};

export default Login;
