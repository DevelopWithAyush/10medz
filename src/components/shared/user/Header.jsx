import React, { useContext } from "react";
import logo from "../../../assets/image/logo.png";
import { Account, Cart, DownArrow, Searchbtn } from "../../../assets/image";
import Search from "../../ui/user/Search";
import { Link } from "react-router-dom";
import LocationIcon from "../../../assets/image/locationIcon.png";
import { HandleContext } from "../../../hooks/HandleState";

const Header = () => {
  const user = true;
  const { userExist, setOpenLoginModal, setWapper } = useContext(HandleContext);
  return (
    <header
      style={{
        boxShadow: "0px 4px 8px 2px rgba(255, 246, 229, 0.60)",
      }}
      className="hidden fixed top-0 left-0 w-full z-[100] md:flex  bg-[#FFFBF4] "
    >
      <div className=" w-full flex flex-row items-end justify-between   px-[48px] pb-[21px] pt-[7px]">
        <div className=" flex flex-row  items-end gap-[5vw]">
          <img src={logo} alt="logo" />
          <div className="flex flex-row items-center gap-[6px]">
            <img src={LocationIcon} alt="locationIcon" />
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
        </div>
        <div className="flex flex-row items-center gap-[100px]">
          <Search className="mt-[0px] w-[660px]" />
          <div className="flex flex-row items-center gap-[48px]">
            {userExist ? (
              <>
                <div className="flex flex-col items-center justify-center">
                  <Cart />
                  <p className="text-[#0F172A] text-[12px] font-pregular_400">
                    Cart
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <Account />
                  <p className="text-[#0F172A] text-[12px] font-pregular_400">
                    Account
                  </p>
                </div>
              </>
            ) : (
              <>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenLoginModal(true);
                    setWapper(true);
                  }}
                  className="text-[16px] px-4 py-2 border-[1px] border-solid border-primary rounded-[10px] flex flex-col items-center justify-center text-primary font-psemibold_600"
                >
                  Login
                </button>
                <Link className="">About Us</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
