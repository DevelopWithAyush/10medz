import React from "react";
import logo from "../../../assets/image/logo.png";
import { Cart, DownArrow } from "../../../assets/image";
import { Link } from "react-router-dom";

const PhoneHeader = () => {
  return (
    <header
      className="fixed top-0 left-0 w-full sm:hidden flex flex-row bg-[#FFFBF4] items-center justify-between px-5 py-2  bg-[] "
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
      <Link to={"/status"}>
        <Cart />
      </Link>
    </header>
  );
};

export default PhoneHeader;
