import React, { useState } from "react";
import "./VerifyOtp.css";

const VerifyOtp = () => {
  const [code, setCode] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(code);
  };

  return (
    <>
      <div className="code-form-container">
        <form onSubmit={handleSubmit} className="code-form">
          <h2>Verify your email</h2>
          <p>
            Enter the 8 digit code you have received on ajitca.1999@gmail.com
          </p>
          <div className="form-group">
            <label htmlFor="code">Code</label>
            <input
              type="text"
              id="code"
              name="code"
              placeholder="Enter Code"
              value={code}
              onChange={(event) => setCode(event.target.value)}
              required
            />
          </div>
          <button type="submit" className="verify-btn">
            VERIFY
          </button>
        </form>
      </div>
    </>
  );
};

export default VerifyOtp;
