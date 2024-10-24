import React from "react";
import { Account, Categories, Home } from "../../../assets/image";
import { Link, useLocation } from "react-router-dom";

const PhoneTabs = () => {
  const location = useLocation();
  return (
    <header className="fixed bottom-0 z-[100] w-full bg-white p-2 flex flex-row items-center justify-between px-5">
      <Link to={"/"} className="flex flex-col justify-center items-center">
        <Home />
        <p
          className={` text-[10px]  font-psemibold_600 ${
            location.pathname === "/" ? "text-[#4471D5]" : "text-[#101010]"
          }`}
        >
          Home
        </p>
      </Link>
      <div className="flex flex-col justify-center items-center">
        <Categories />
        <p
          className={` text-[10px] font-psemibold_600 ${
            location.pathname === "/categories"
              ? "text-[#4471D5]"
              : "text-[#101010]"
          }`}
        >
          Categories
        </p>
      </div>
      <Link
        to={"/account"}
        className="flex flex-col justify-center items-center"
      >
        <Account />
        <p
          className={` text-[10px]  font-psemibold_600  ${
            location.pathname === "/account"
              ? "text-[#4471D5]"
              : "text-[#101010]"
          }`}
        >
          Account
        </p>
      </Link>
    </header>
  );
};

export default PhoneTabs;
