import React, { useContext, useEffect, useState } from "react";
import { CircularTick, ManonBike, Xmark } from "../../../assets/image";
import { HandleContext } from "../../../hooks/HandleState";
import OtpInput from "otp-input-react";
import OTPInput from "../../ui/user/OTPInput";

const Login = () => {
  const { setOpenLoginModal, setWapper } = useContext(HandleContext);
  const [error, setError] = useState({
    status: false,
    message: "",
  });
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState(false);
  useEffect(() => {
    if (phoneNumber.length !== 10) {
      setError({
        status: true,
        message: "Phone number must be 10 digits",
      });
    } else if (phoneNumber.length === 10) {
      setError({
        status: false,
        message: "",
      });
    }
  }, [phoneNumber]);

  const handleSubmit = (e) => {
      e.preventDefault();
      setOtp(true);

  };

  return (
    <div className="sm:flex duration-300 ease-in-out fixed z-[10000] hidden flex-col items-start justify-start top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white pl-10 pb-10 pt-6 pr-6 rounded-[20px]">
      <button
        onClick={(e) => {
          e.preventDefault();
          setOpenLoginModal(false);
          setWapper(false);
        }}
        className="self-end"
      >
        <Xmark />
      </button>
      <div className="flex flex-row items-center justify-start gap-[70px]">
        <div className="flex flex-col items-start justify-start gap-10">
          <div className="flex flex-col items-start justify-start gap-2">
            <p className="text-[20px] text-[#101010] font-psemibold_600">
              Sign in / Sign up
            </p>
            <p className="text-[#555] text-[14px] font-pregular_400">
              Enter your mobile no. to get an OTP
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start justify-start w-full gap-10"
          >
            <div className="w-full flex flex-col items-start justify-start gap-2">
              <label
                htmlFor="phonenumber"
                className="font-psemibold_600 text-[12px] text-[#555]"
              >
                Mobile no.
              </label>
              <input
                type="text"
                name="number"
                id="phonenumber"
                placeholder="Enter mobile no."
                value={phoneNumber}
                onChange={(e) => (otp ? "" : setPhoneNumber(e.target.value))}
                className={`focus:outline-primary ${
                  otp ? "cursor-not-allowed" : ""
                } w-[320px] text-[14px] font-pregular_400 tracking-[5.6px] px-4 py-2 rounded-[10px] border-[1px] border-solid border-[#ddd] placeholder:text-[#8A99A5] placeholder:text-[14px] placeholder:font-pregular_400 placeholder:tracking-[5.6px]`}
              />
              {error.status && (
                <p className="text-red-500 text-sm">{error.message}</p>
              )}
              {otp && (
                <div className="w-full flex flex-col items-center justify-start gap-2">
                  <div className="py-2 px-3 flex flex-row items-center justify-start gap-2 bg-[#E1F8E6] w-full rounded-[10px]">
                    <CircularTick />
                    <p className="text-[10px] text-[#05661A] font-pregular_400">
                      The code has been sent to your mobile no.
                    </p>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-2">
                    <p className="text-[12px] text-[#101010] font-pregular_400">
                      Resend code in 30 sec...
                    </p>
                    <button className="text-[12px] text-[#8A99A5] font-psemibold_600">
                      Resend code
                    </button>
                  </div>
                </div>
              )}
            </div>
            {!otp && (
              <button
                disabled={phoneNumber.length !== 10}
                type="submit"
                className="capitalize w-full text-white bg-primary py-2 rounded-[10px] text-[16px] font-psemibold_600 disabled:bg-[#98B1E8] disabled:border-[#98B1E8] disabled:text-[#fff] disabled:cursor-not-allowed"
              >
                Get OTP
              </button>
            )}
          </form>

          {otp && (
            <div className="flex flex-col items-start justify-start gap-2">
              <p className="text-[12px] text-[#101010] font-psemibold_600">
                Enter 4 digit pin
              </p>
              <OTPInput />
            </div>
          )}
        </div>
        <ManonBike />
      </div>
    </div>
  );
};

export default Login;
