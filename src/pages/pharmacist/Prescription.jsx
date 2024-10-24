import React from "react";
import Header from "../../components/ui/pharmacist/Header";
import { Link } from "react-router-dom";
import OrderUi from "../../components/ui/pharmacist/OrderUi";
import PrescriptionLeft from "../../components/shared/pharmacist/PrescriptionLeft";
import MedicinAdding from "../../components/shared/pharmacist/MedicinAdding";

const Prescription = () => {
  return (
    <main className="w-full min-h-screen flex flex-col bg-[#FFFBF4]">
      <Header />
      <SecondHeader />
      <OrderData />

      <section className=" w-full h-[calc(100vh-150px)]  px-2 py-2 mt-[150px] ">
        <div className="grid h-full gap-2 grid-cols-12">
          {/* left first   */}
          <PrescriptionLeft/>
          {/* middle one  */}
          <MedicinAdding/>
          {/* last one  */}
          <div className="relative z-[10] col-span-2 bg-white h-full flex flex-col justify-start items-center border-[1px] border-solid border-[#E0E0E0] rounded-t-[2px] overflow-hidden  ">
            <div className="  top-0  w-full flex flex-row items-center justify-start pl-[16px] pr-[6.2px] py-[8px] bg-primary">
              <p className="text-[14px] font-pmedium_500 text-white">Description</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const Phone = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
      >
        <path
          d="M1.875 5.75C1.875 12.6536 7.47144 18.25 14.375 18.25H16.25C17.2855 18.25 18.125 17.4105 18.125 16.375V15.232C18.125 14.8018 17.8322 14.4268 17.4149 14.3225L13.7289 13.401C13.363 13.3095 12.9778 13.4462 12.7515 13.748L11.943 14.826C11.7083 15.1389 11.3025 15.2772 10.9353 15.1427C8.17949 14.1332 5.9918 11.9455 4.9823 9.18972C4.84778 8.82249 4.98613 8.41665 5.299 8.182L6.37702 7.37349C6.67878 7.14717 6.81551 6.76204 6.72403 6.39611L5.80253 2.71012C5.69819 2.29278 5.32321 2 4.89302 2H3.75C2.71447 2 1.875 2.83947 1.875 3.875V5.75Z"
          stroke="#009E23"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

const Back = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-2 py-[10px] pr-10 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
      >
        <path
          d="M10.5 19.625L3 12.125M3 12.125L10.5 4.625M3 12.125H21"
          stroke="#0F172A"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <p className="text-[14px] font-pmedium_500 text-black">Back</p>
    </div>
  );
};

const SecondHeader = () => {
  return (
    <div
      className=" z-[20] fixed top-[51.5px] w-full bg-white  flex flex-row items-center justify-start  px-2 gap-[4px] border-b-[1px] border-solid border-[#BCC3CD]"
      style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.10)" }}
    >
      <Back />
      <div className=" flex flex-row items-center justify-start gap-1">
        <Link
          to={"/"}
          className="rounded-[2px] border border-solid border-[#BCC3CD] border-l-[16px] border-l-[#009E23] "
        >
          {" "}
          <p className="text-[14px] font-pregular_400  py-[11px] pl-[8px] pr-[36px]">
            OID-123423343838
          </p>
        </Link>
        <Link
          to={"/"}
          className="rounded-[2px] border border-solid border-[#BCC3CD] border-l-[16px] border-l-[#FF9F0F] "
        >
          {" "}
          <p className="text-[14px] font-pregular_400  py-[11px] pl-[8px] pr-[36px]">
            OID-123423343838
          </p>
        </Link>
        <Link
          to={"/"}
          className="rounded-[2px] border border-solid border-[#BCC3CD] border-l-[16px] border-l-[#FF9F0F] "
        >
          {" "}
          <p className="text-[14px] font-pregular_400  py-[11px] pl-[8px] pr-[36px]">
            OID-123423343838
          </p>
        </Link>
        <Link
          to={"/"}
          className="rounded-[2px] border border-solid border-[#BCC3CD] border-l-[16px] border-l-[#FF9F0F] "
        >
          {" "}
          <p className="text-[14px] font-pregular_400  py-[11px] pl-[8px] pr-[36px]">
            OID-123423343838
          </p>
        </Link>
        <Link
          to={"/"}
          className="rounded-[2px] border border-solid border-[#BCC3CD] border-l-[16px] border-l-[#FF9F0F] "
        >
          {" "}
          <p className="text-[14px] font-pregular_400  py-[11px] pl-[8px] pr-[36px]">
            OID-123423343838
          </p>
        </Link>
      </div>
    </div>
  );
};

const OrderData = () => {
  return (
    <div
      className="fixed z-40 left-0 top-[97.9px] w-full flex flex-row items-center border-b-[1px] border-solid border-b-[#BCC3CD]   justify-between px-4 py-[9px] bg-white  "
      style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.10)" }}
    >
      <div className="flex flex-row items-center justify-center gap-6">
        <div className="flex flex-row items-center justify-start gap-1">
          <p className="text-[#555] font-pmedium_500 text-[12px]">
            Order number :
          </p>
          <p className="text-[14px] font-pregular_400 text-[#101010]">
            OID-123423343838
          </p>
        </div>
        <div className="flex flex-row items-center justify-start gap-1">
          <p className="text-[#555] font-pmedium_500 text-[12px]">
            Customer name :
          </p>
          <p className="text-[14px] font-pregular_400 text-[#101010]">
            Debasish Panda{" "}
          </p>
        </div>
        <div className="flex flex-row items-center justify-start gap-1">
          <p className="text-[#555] font-pmedium_500 text-[12px]">
            Phone number :
          </p>
          <p className="text-[14px] font-pregular_400 text-[#101010]">
            +91-8267998453{" "}
          </p>
        </div>
      </div>
      <button className="flex flex-row items-center justify-center border-[1px] border-solid border-[#009E23] py-[5px] px-[8px] gap-2 rounded-[4px] mr-[75px]  ">
        <Phone />
        <p className="text-[12px] text-[#009E23] font-psemibold_600 ">
          Call customer
        </p>
      </button>
    </div>
  );
};

export default Prescription;
