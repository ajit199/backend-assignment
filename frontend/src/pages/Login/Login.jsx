import React, { useState } from "react";
import "./Login.css";
import { postData } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(`auth/login`, formData)
      .then((data) => {
        Cookies.set("accessToken", data.accessToken);
        alert("Login successful.");
        navigate("/categories");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <>
      <div className="login-form-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Login</h2>
          <h3>Welcome back to ECOMMERCE</h3>
          <p>The next gen business marketplace</p>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div id="show-hide-password">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type={"button"}
                className="toggle-btn"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <button type="submit" className="login-btn">
            LOGIN
          </button>
          <div className="register-page-link">
            <span>
              Have an account?{" "}
              <a href="https://www.google.com">&nbsp; SIGN UP</a>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
