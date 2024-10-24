import React from "react";
import RxImage from '../../../assets/image/RxImage.png'

const PrescriptionLeft = () => {
  return (
    <div className=" col-span-3 bg-white flex flex-col items-center justify-between h-full border-[1px] border-solid border-[#E0E0E0] rounded-t-[2px] overflow-hidden">
      <div className=" w-full flex flex-row items-center justify-between pl-[16px] pr-[6.2px] py-[7px] bg-primary">
        <p className="text-[14px] font-pmedium_500 text-white">PRESCRIPTION</p>
        <Download />
      </div>
      <div className="w-full flex  flex-col items-center justify-center h-full ">
        <img className="w-full" src={RxImage} alt="" />
      </div>
      <div className=" flex flex-row items-center justify-between  py-2 pl-6 pr-4 border-t-[1px] border-solid border-t-[#E0E0E0] w-full">
        <div className="flex flex-row items-center justify-between gap-4">
          <PlusMagnification />
          <MinusMagnification />
        </div>
        <div className="flex flex-row items-center justify-between gap-4">
          <button className="rounded-[4px] text-[12px] border-[1px] bg-transparent border-red-500 font-psemibold_600 py-2 px-4 text-red-500">
            {" "}
            Reject RX
          </button>
          <button className="rounded-[4px]  text-[12px] border-[1px] bg-primary py-2 px-4 font-psemibold_600 text-white">
            {" "}
            Verify Rx
          </button>
        </div>
      </div>
    </div>
  );
};




const PlusMagnification = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
        >
            <path
                d="M21 21L15.8033 15.8033M15.8033 15.8033C17.1605 14.4461 18 12.5711 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C12.5711 18 14.4461 17.1605 15.8033 15.8033ZM10.5 7.5V13.5M13.5 10.5H7.5"
                stroke="#0F172A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};
const MinusMagnification = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
        >
            <path
                d="M21 21L15.8033 15.8033M15.8033 15.8033C17.1605 14.4461 18 12.5711 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C12.5711 18 14.4461 17.1605 15.8033 15.8033ZM13.5 10.5H7.5"
                stroke="#0F172A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};

const Download = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.6893L15.9697 11.4697C16.2626 11.1768 16.7374 11.1768 17.0303 11.4697C17.3232 11.7626 17.3232 12.2374 17.0303 12.5303L12.5303 17.0303C12.2374 17.3232 11.7626 17.3232 11.4697 17.0303L6.96967 12.5303C6.67678 12.2374 6.67678 11.7626 6.96967 11.4697C7.26256 11.1768 7.73744 11.1768 8.03033 11.4697L11.25 14.6893V3C11.25 2.58579 11.5858 2.25 12 2.25ZM3 15.75C3.41421 15.75 3.75 16.0858 3.75 16.5V18.75C3.75 19.5784 4.42157 20.25 5.25 20.25H18.75C19.5784 20.25 20.25 19.5784 20.25 18.75V16.5C20.25 16.0858 20.5858 15.75 21 15.75C21.4142 15.75 21.75 16.0858 21.75 16.5V18.75C21.75 20.4069 20.4069 21.75 18.75 21.75H5.25C3.59315 21.75 2.25 20.4069 2.25 18.75V16.5C2.25 16.0858 2.58579 15.75 3 15.75Z"
                fill="white"
            />
        </svg>
    );
};

export default PrescriptionLeft;
