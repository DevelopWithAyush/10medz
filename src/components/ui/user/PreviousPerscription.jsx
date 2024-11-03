import React, { useState } from "react";
import { Xmark } from "../../../assets/image";
import Rximage from "../../../assets/image/RxImage.png";

const PreviousPerscription = () => {
  const [modal, setModal] = useState(false);
  const closeModal = () => {
    setModal(false); // Close the modal
  };

  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => setIsChecked(!isChecked);
  return (
    <div className="z-[1001] fixed bottom-0 left-0 w-full h-[95vh]">
      <div className="fixed bottom-0 w-full px-5 py-[10px] bg-white z-[1002]">
        <button
          disabled={true}
          className="w-full flex flex-col items-center justify-center text-white py-2 text-[16px] font-psemibold_600 rounded-[10px] bg-primary disabled:bg-[#98B1E8]"
          style={{ boxShadow: "0px 4px 4px 0px rgba(68, 113, 212, 0.16)" }}
        >
          Select a prescription{" "}
        </button>
      </div>
      <div className="flex h-[calc(100%-60px)] flex-col  items-start justify-start gap-2">
        <div className="flex px-4 items-center justify-end w-full">
          <button
            className="flex flex-row items-center justify-end bg-white p-[5px] rounded-full"
            onClick={closeModal}
          >
            <Xmark />
          </button>
        </div>
        <div className="w-full flex flex-col gap-4 items-start justify-normal bg-white h-[calc(100%-44px)] overflow-y-auto rounded-t-[20px] px-5 py-[26px]">
          <p className="text-[20px] font-pmedium_500 text-[#101010] ">
            select Prescription
          </p>
          <p className="text-[#555] font-pmedium_500 text-[12px] ">Recent</p>
          <div className="w-full flex flex-col items-start justify-start gap-5">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};
const Card = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => setIsChecked(!isChecked);
  return (
    <div className="flex w-full relative flex-row  border-solid border-[1px] border-[#BCC3CD] rounded-[10px]">
      <div className="absolute bottom-[8px] right-[8px] px-2 border-[1px] border-solid border-[#65BE78] bg-[#E1F8E6] rounded-[5px]">
        {" "}
        <p className="text-[#009E23]  text-[10px] font-pmedium_500 ">
          Verified
        </p>
      </div>
      <div className="w-[118px] px-5 py-2 border-r-[1px] border-[#BCC3CD] flex flex-col items-center justify-center ">
        <img src={Rximage} alt="" />
      </div>
      <div className="pt-2 pb-5 px-2 w-full flex flex-col items-start justify-start gap-4">
        <div className="flex flex-row w-full items-center justify-between">
          <div className="flex flex-col items-start justify-start gap-1">
            <p className="flex flex-row items-center justify-start gap-1 text-[10px] text-[#8A99A5] ">
              <span>Last used on :</span>{" "}
              <span className="text-[#101010]">12/03/23</span>{" "}
            </p>
            <p className="flex flex-row items-center justify-start gap-1 text-[10px] text-[#8A99A5] ">
              <span>Uploaded on :</span>{" "}
              <span className="text-[#101010]">12/03/23</span>{" "}
            </p>
          </div>
          <label className="relative inline-block w-7 h-7 cursor-pointer">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={toggleCheckbox}
              className="opacity-0 absolute"
            />
            <span
              className={`block w-full h-full rounded-md transition-colors duration-300 ${
                isChecked ? "bg-blue-500" : "bg-gray-300"
              }`}
            >
              {isChecked && (
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-4 border-r-2 border-b-2 border-white rotate-45"></span>
              )}
            </span>
          </label>
        </div>
        <div className="flex flex-col items-start justify-start gap-1">
          <p className="text-[12px] font-pmedium_500 text-[#101010] ">
            4 products in prescription
          </p>
          <p className="text-[12px] font-psemibold_600 text-primary">
            View products
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreviousPerscription;
