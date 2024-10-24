import React from "react";
import { Link } from "react-router-dom";
import {
  Bag,
  DeliveryLogo,
  LogoutLogo,
  NotificationLogo,
  PaymentLogo,
  PrescriptionLogo,
  RightArrow,
} from "../../../assets/image";

const AccountSection = () => {
  return (
    <div className="w-full px-5 mb-[80px]">
      <div className="w-full flex flex-col items-start border-[1px] border-solid  border-[#DFE7F2] rounded-[10px] mt-6 bg-[#FFF] ">
        <Card title={"Orders"} Icon={Bag} />
        <Card title={"Prescriptions"} Icon={PrescriptionLogo} />
        <Card title={"Delivery addresses"} Icon={DeliveryLogo} />
        <Card title={"Payment modes"} Icon={PaymentLogo} />
        <Card title={"Notifications"} Icon={NotificationLogo} />
        <Card title={"Logout"} Icon={LogoutLogo} />
      </div>
    </div>
  );
};

const Card = ({ title, Icon }) => {
  return (
    <Link to={"/"} className="flex items-center justify-between w-full  px-5 ">
      <div className="flex items-center justify-between w-full border-b-[1px] border-solid border-[#DFE7F2] py-[22px]  ">
        <div className="flex items-center gap-6">
          <Icon />
          <p className="text-[#101010] text-[14px] font-pregular_400">
            {title}
          </p>
        </div>
        <RightArrow />
      </div>
    </Link>
  );
};

export default AccountSection;
