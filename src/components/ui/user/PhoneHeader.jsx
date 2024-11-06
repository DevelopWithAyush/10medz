import React, { useContext, useEffect, useState } from "react";
import logo from "../../../assets/image/logo.png";
import {
  Cart,
  CircularTick,
  DownArrow,
  ManonBike,
  Xmark,
} from "../../../assets/image";
import { Link } from "react-router-dom";
import { HandleContext } from "../../../hooks/HandleState";
import OTPInput from "./OTPInput";

const PhoneHeader = () => {
  const { userExist, phoneLoginModal, setPhoneLoginModal } =
    useContext(HandleContext);
  return (
    <>
      <header
        className="fixed top-0 left-0 w-full xl:hidden flex flex-row bg-[#FFFBF4] items-center justify-between px-5 py-2  bg-[] "
        style={{ boxShadow: "0px 4px 8px 2px rgba(255, 246, 229, 0.70)" }}
      >
        <div className="flex flex-row items-center gap-[6px]">
          <img className="w-[30px]" src={logo} alt="logo" />
          <div className="flex flex-col items-start ">
            <p className="text-black text-[14px] font-pmedium_500">
              Delivery in 10mins
            </p>
            <p className="text-black text-[12px] font-pregular_400 flex flex-row items-center">
              Bhopal,250010{" "}
              <span>
                <DownArrow />
              </span>{" "}
            </p>
          </div>
        </div>
        {userExist ? (
          <Link to={"/cart"}>
            <Cart />
          </Link>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              setPhoneLoginModal(true);
            }}
            className="py-2 px-4 bg-white border border-primary border-solid text-[16px] font-psemibold_600 text-primary rounded-[10px]"
          >
            Login
          </button>
        )}
      </header>
      {phoneLoginModal && (
        <LoginModal setPhoneLoginModal={setPhoneLoginModal} />
      )}
    </>
  );
};

const LoginModal = ({ setPhoneLoginModal }) => {
  const [error, setError] = useState({
    status: false,
    message: "",
  });

  const [otp, setOtp] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
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
    <div className="fixed z-[1000]  top-0 left-0 w-[100vw] h-[100vh] bg-[#FFFBF4]  flex flex-col items-start px-5 py-5 justify-between">
      <button
        onClick={(e) => {
          e.preventDefault();
          setPhoneLoginModal(false);
        }}
        className="w-full flex flex-row items-center justify-end "
      >
        <Xmark />
      </button>
      <div className=" flex flex-row items-center justify-center w-full">
        <ManonBike />
      </div>
      <div className="flex w-full flex-col items-start justify-start gap-6">
        <p className="text-[#101010] text-[20px] font-psemibold_600">
          Sign in / Sign up
        </p>
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
              } w-full text-[14px] font-pregular_400 tracking-[5.6px] px-4 py-2 rounded-[10px] border-[1px] border-solid border-[#ddd] placeholder:text-[#8A99A5] placeholder:text-[14px] placeholder:font-pregular_400 placeholder:tracking-[5.6px]`}
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
          <div className="flex flex-col items-center w-full justify-start gap-2">
            <p className="text-[12px] text-[#101010]  font-psemibold_600">
              Enter 4 digit pin
            </p>
            <OTPInput />
          </div>
        )}
        <div className="mt-10 flex flex-col items-center justify-center w-full">
          <p className=" text-[#8C8C8C] text-[10px] font-pregular_400">
            By signing in, you agree to our{" "}
          </p>
          <p className=" text-[#8C8C8C] text-[10px] font-pregular_400">
            {" "}
            <span className="font-pmedium_500 underline">
              Terms and conditions
            </span>{" "}
            and{" "}
            <span className="font-pmedium_500 underline">Privacy policy</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhoneHeader;
