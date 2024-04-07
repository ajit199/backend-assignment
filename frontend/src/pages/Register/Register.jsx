import React, { useState } from "react";
import "./Register.css";
import { postData } from "../../utils/api";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    postData(`auth/register`, formData)
      .then((data) => {
        navigate(`/verify-otp?email=${formData.email}`);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <>
      <div className="register-form-container">
        <form onSubmit={handleSubmit} className="register-form">
          <h2>Create your account</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
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
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="create-account-btn">
            Create Account
          </button>
          <div className="login-page-link">
            <span>
              Have an account? <a href="https://www.google.com">&nbsp; LOGIN</a>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
