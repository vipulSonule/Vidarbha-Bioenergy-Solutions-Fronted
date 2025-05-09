import React, { useState } from "react";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add OTP verification logic here (call backend API)
    alert(`Verifying OTP: ${otp}`);
  };

  return (
    <div className="verify-otp-container">
      <h2>Verify OTP</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          required
        />
        <button type="submit">Verify</button>
      </form>
    </div>
  );
};

export default VerifyOTP;
