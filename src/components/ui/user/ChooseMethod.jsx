import React from "react";
import { CameraImage, GalleryImage, RxPage } from "../../../assets/image";
import { Link } from "react-router-dom";

const ChooseMethod = () => {
  return (
    <div
      className=" w-full rounded-[10px] mt-[17px] flex flex-col items-start justify-start gap-4 bg-[#FFF] border-[1px] border-solid boder-[#DFE7F2] px-5 py-6 "
      style={{ boxShadow: "0px 4px 5px 0px rgba(255, 233, 192, 0.40)" }}
    >
      <p className="text-[#101010] text-[16px] font-pmedium_500">
        Choose a method
      </p>
      <div className="flex w-full flex-col items-start justify-start gap-5">
        <Card
          url={"/prescription/camera"}
          Image={CameraImage}
          name={"Camera"}
          description={"Take a picture of your prescription."}
        />
        <Card 
          Image={GalleryImage}
          name={"Gallery"}
          description={"Pick a prescription from your phone storage."}
        />
        <Card
          Image={RxPage}
          name={"Your prescriptions"}
          description={"Your prescriptions from the previous uploads."}
        />
      </div>
    </div>
  );
};

const Card = ({url, Image, name, description }) => {
  return (
    <Link to={url} className="w-full flex flex-row gap-4 items-center justify-start py-[10px] px-5 border-[1px] border-solid border-[#BCC3CD] rounded-[10px]">
      <Image />
      <div className="flex flex-col items-start justify-start">
        <p className="text-primary text-[16px] font-psemibold_600">{name}</p>
        <p className="text-[10px] font-pregular_400 text-[#101010]">
          {" "}
          {description}
        </p>
      </div>
    </Link>
  );
};

export default ChooseMethod;
