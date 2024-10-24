import React from "react";
import logo from "../../../assets/image/logo.png";
import { Account, Cart, Searchbtn } from "../../../assets/image";
import Search from "../../ui/user/Search";
const Header = () => {
  return (
    <header className="hidden  md:flex container max-w-[88rem] mx-auto flex-row items-end justify-between px-[48px] py-[27px]">
      <img src={logo} alt="logo" />
      <div className="flex flex-row items-center gap-[100px]">
        <Search className={`mt-[0px] w-[660px]`}/>
        <div className="flex flex-row items-start  gap-[48px]">
          <div className="flex flex-col items-center justify-center">
            <Cart />
            <p className="text-[#0F172A] text-[12px] font-pregular_400">Cart</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Account />
            <p className="text-[#0F172A] text-[12px] font-pregular_400">
              Account
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
