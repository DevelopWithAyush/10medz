import React from "react";
import PhoneTabs from "../../components/ui/user/PhoneTabs";
import account from "../../assets/image/Group 15083.png";
import {
  Bag,
  DeliveryLogo,
  Edit,
  LogoutLogo,
  NotificationLogo,
  PaymentLogo,
  PrescriptionLogo,
  RightArrow,
} from "../../assets/image";
import ProfileCard from "../../components/ui/user/ProfileCard";
import { Link } from "react-router-dom";
import AccountSection from "../../components/ui/user/AccountSection";

const AccountProfile = () => {
  return (
    <main className="flex flex-col items-start justify-start ">
      <div className="relative flex items-center justify-center px-10 ">
        <img src={account} className=" " alt="" />
        <p className="absolute top-1/2 -translate-y-1/2 left-[20px] w-[138px] text-[#101010] text-[16px] font-plight_300">
          Medicine delivery in{" "}
          <span className="text-primary text-[16px] font-pbold_700">
            10 minutes
          </span>{" "}
        </p>
      </div>
      <ProfileCard />
    <AccountSection/>
      <PhoneTabs />
    </main>
  );
};


export default AccountProfile;
