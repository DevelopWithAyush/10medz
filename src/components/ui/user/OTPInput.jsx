import React, { useState } from "react";

const OTPInput = () => {
  const otpLength = 4;
  const [otp, setOtp] = useState(new Array(otpLength).fill(""));

  const handleChange = (element, index) => {
    const value = element.value.replace(/\D/g, ""); // Only allow numbers
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to next input if value is entered
      if (value && index < otpLength - 1) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleBackspace = (event, index) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      // Move focus to previous input on Backspace if current is empty
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  return (
    <div className="flex space-x-5">
      {otp.map((digit, index) => (
        <input
          key={index}
          id={`otp-input-${index}`}
          type="text"
          value={digit}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleBackspace(e, index)}
          className="w-[65px] h-[65px]  text-[28px] font-plight_300 text-[#101010] bg-[#FFF8EE]  border border-[#BCC3CD] border-solid rounded-[10px]  text-center text-xl focus:outline-none focus:border-blue-500"
          maxLength="1"
        />
      ))}
    </div>
  );
};

export default OTPInput;
