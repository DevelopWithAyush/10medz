import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ATMCard,
  BackBtn,
  CircularTick,
  CrossWithCircleIcon,
  DownArrow,
  Ibtn,
  PlusIcon,
  TelephoneIcon,
} from "../../assets/image";
import locationIcon from "../../assets/image/locationIcon.png";
import Deals from "../../components/ui/user/Deals";
const Cart = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // This navigates to the previous page in history
  };
  return (
    <main className="pb-[150px]">
      <header
        className="fixed bg-[#FFFBF4] top-0 z-[100] w-full flex flex-row justify-start items-center px-5 py-[15px]  "
        style={{ boxShadow: "0px 4px 8px 2px rgba(255, 246, 229, 0.60)" }}
      >
        <button
          onClick={handleBack}
          className="flex items-center justify-start duration-100 ease-in-out  flex-row gap-6"
        >
          <div className="flex flex-col items-center justify-start duration-100 ease-in-out hover:translate-x-[-5px]">
            <BackBtn />
          </div>
          <p className="text-[#101010] text-[16px] font-psemibold_600">
            Your cart
          </p>
        </button>
      </header>
      <section className="w-full flex flex-col items-start justify-start mt-[70px]">
        <div className="px-5 w-full">
          <div className="w-full bg-[#E1F8E6] rounded-[10px] flex flex-row items-center justify-start gap-2 py-2 px-[12px]">
            <CircularTick />{" "}
            <p>Your prescription has been uploaded successfully .</p>
          </div>
        </div>
        <AddingMedicinesTOyourCart />
        {/* <Coupon /> */}
        <Bill />
        <VerifingDetails />
        <div className="w-full">
          <Deals />
        </div>
      </section>
          <div className="fixed z-[1000] bottom-0 w-full bg-white px-5 py-2 flex flex-row items-center justify-between">
              <div className="flex flex-col items-start justify-start gap-1">
                  <p className="text-[12px] font-pregular_400 text-[#101010]">To be paid</p>
                  <div className="flex flex-row items-center justify-center gap-1" > <span className="text-[14px] font-psemibold_600 leading-[151%] text-[#101010]">₹287</span> <Ibtn/> </div>
              </div>

              <button disabled className="text-white bg-primary px-6 py-2 rounded-[10px] font-psemibold_600 text-[16px] flex flex-col items-center justify-center disabled:bg-[#98B1E8]">Adding items...</button>

      </div>
    </main>
  );
};

const Coupon = () => {
  return (
    <div className="w-full px-5 mt-6">
      <div className="border border-solid border-[#98B1E8] rounded-[10px] w-full flex flex-row items-center justify-between py-5 px-4 ">
        <p className="text-[14px] font-pmedium_500 text-[#101010]">
          Apply Coupon
        </p>
        <button className="text-primary font-psemibold_600 text-[12px]">
          Select
        </button>
      </div>
    </div>
  );
};

const Bill = () => {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-4 px-5 pt-[20px] mt-6 border-b border-t border-solid border-[#DFE7F2] bg-white">
      <p className="text-[14px] text-[#101010] font-pmedium_500">
        Bill summary
      </p>
      <div className="w-full flex flex-col items-start justify-start gap-2 ">
        <div className="w-full items-center flex flex-row justify-between">
          <p className="text-[#555] font-pregular_400 text-[12px] leading-[151%]">
            Item total (MRP)
          </p>
          <div className="border border-dotted  border-[#DFE7F2] w-[calc(100%-200px)]" />
          <p className="text-[#101010] font-pregular_400 text-[12px] leading-[142%]">
            ₹287
          </p>
        </div>
        <div className="w-full items-center flex flex-row justify-between">
          <p className="text-[#555] font-pregular_400 text-[12px] leading-[151%]">
            Total Discount
          </p>
          <div className="border border-dotted  border-[#DFE7F2] w-[calc(100%-200px)]" />
          <p className="text-[#009E23] font-pregular_400 text-[12px] leading-[142%]">
            -₹37
          </p>
        </div>
        <div className="w-full items-center flex flex-row justify-between">
          <p className="text-[#555] font-pregular_400 text-[12px] leading-[151%]">
            Delivery charge
          </p>
          <div className="border border-dotted  border-[#DFE7F2] w-[calc(100%-200px)]" />
          <p className="text-[#009E23] font-pregular_400 text-[12px] leading-[142%]">
            Free
          </p>
        </div>
      </div>
      <div className="border-t flex items-center gap-2 justify-end py-2 border-solid  border-[#DFE7F2] w-full  ">
        <p className="text-[#555] text-[14px] font-pmedium_500">
          Total amount:
        </p>
        <p className="text-[#101010] text-[14px] font-pmedium_500">₹250</p>
      </div>
    </div>
  );
};

const VerifingDetails = () => {
  return (
    <div className="w-full mt-6 border-t border-solid border-[#DFE7F2] bg-white ">
      <div className="w-full px-5 py-4 border-b border-solid border-[#DFE7F2]">
        <p className="text-[#101010] text-[16px] font-pmedium_500">
          Meanwhile, you can verify details
        </p>
      </div>
      <div className="flex flex-row items-center justify-between px-5 py-[10px] border-b border-solid border-[#DFE7F2]">
        <div className="flex flex-row items-center justify-start gap-4">
          <img src={locationIcon} alt="locationIcon" />
          <div className="flex flex-col items-start justify-start gap-0">
            <p className="text-[#101010] text-[14px] font-pmedium_500">
              Delivery in 10mins
            </p>
            <p className="text-[12px] font-pregular_400 text-[#101010]">
              BH-78,nurpur,Bhopal, 250010
            </p>
          </div>
        </div>
        <button className="text-primary text-[12px] font-psemibold_600">
          Edit
        </button>
      </div>
      {/* <div className="flex flex-row items-center justify-between px-5 py-[20px] border-b border-solid border-[#DFE7F2]">
        <div className="flex flex-row items-center justify-start gap-4">
          <ATMCard />
          <div className="flex flex-col items-start justify-start gap-0">
            <p className="text-[#101010] text-[14px] font-pmedium_500">
              Add a Payment method
            </p>
          </div>
        </div>
        <button className="text-primary text-[12px] font-psemibold_600">
          <DownArrow />
        </button>
      </div> */}
    </div>
  );
};

const AddingMedicinesTOyourCart = () => {
  return (
    <div className=" w-full bg-[#FFF] pt-4  mt-2 border-t border-[#DFE7F2]  border-solid">
      <div className="w-full px-5">
        <p className="text-[14px] font-pmedium_500 text-[#101010]">
          Adding medicines to your cart
        </p>
      </div>
      <div className="flex flex-row items-center justify-start  gap-4 mt-2 px-5">
        <div className="flex flex-row items-center justify-center animate-spin">
          <Spinner />
        </div>
        <p className="text-[12px] text-[#101010] font-pregular_400">
          Verifying prescription...
        </p>
      </div>
      <div className="grid grid-cols-12 gap-5 w-full my-4 px-5">
        <button className="col-span-6 flex flex-row gap-2 items-center justify-center p-2 border border-solid border-[#8A99A5] rounded-[10px]">
          {" "}
          <TelephoneIcon />{" "}
          <p className="capitalize text-[#555] text-[12px] font-psemibold_600">
            call pharmacists
          </p>
        </button>
        <button className="col-span-6 flex flex-row gap-2 items-center justify-center p-2 border border-solid border-[#4471D4] rounded-[10px]">
          <PlusIcon />
          <p className="capitalize text-[#4471D4] text-[12px] font-psemibold_600">
            Add prescription
          </p>
        </button>
      </div>
      <div className="border-t border-b  border-solid border-[#DFE7F2] px-5 py-2">
        <p className="text-[12px] text-[#101010] font-pmedium_500">
          {" "}
          <span className="text-[#555] font-pmedium_500 text-[12px] ">
            Total:
          </span>{" "}
          0 items added{" "}
        </p>
      </div>
      <div>
        <Card />
        <Card />
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className="w-full flex flex-col px-5 py-4 border-b border-solid border-[#DFE7F2]">
      <div className="w-full flex flex-row items-center justify-between">
        <p className="text-[14px] text-[#101010] font-pmedium_500">
          Losarton 10mg : pack of 10 tablets
        </p>
        <CrossWithCircleIcon />
      </div>
      <div>
        <div>{/* <img src={} alt="" /> */}</div>
        <div>
          <p></p>
        </div>
      </div>
    </div>
  );
};

const Spinner = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="19"
      viewBox="0 0 16 19"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.1627 18.6506C12.6622 18.3523 14.0607 17.6916 15.2387 16.7322C15.6465 16.4001 15.6437 15.7929 15.2719 15.4211C14.9 15.0492 14.3002 15.0549 13.8842 15.3766C12.6277 16.3482 11.0516 16.9263 9.34036 16.9263C5.23455 16.9263 1.90613 13.5979 1.90613 9.4921C1.90613 5.38629 5.23455 2.05787 9.34036 2.05787C11.0497 2.05787 12.6244 2.63479 13.8802 3.60454C14.2972 3.92656 14.8979 3.93214 15.2705 3.5596C15.6431 3.18699 15.6459 2.57851 15.2372 2.24584C14.0594 1.28708 12.6616 0.626791 11.1627 0.328648C9.35081 -0.0317554 7.47276 0.153215 5.76602 0.860172C4.05927 1.56713 2.60049 2.76432 1.57415 4.30035C0.547808 5.83638 0 7.64226 0 9.48962C0 11.337 0.547807 13.1429 1.57415 14.6789C2.60049 16.2149 4.05927 17.4121 5.76601 18.1191C7.47276 18.826 9.35081 19.011 11.1627 18.6506Z"
        fill="url(#paint0_angular_268_1268)"
      />
      <defs>
        <radialGradient
          id="paint0_angular_268_1268"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(7.63323 10.4427) rotate(-38.9316) scale(9.40379 16.9473)"
        >
          <stop stop-color="#7EA6FF" />
          <stop offset="1" stop-color="#276AFF" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default Cart;
