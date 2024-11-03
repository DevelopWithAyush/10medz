import React from "react";
import DesktopCashback from "../../ui/user/DesktopCashback";
import DesktopDeals from "../../ui/user/DesktopDeals";
import UploadPrescription from "../../ui/user/UploadPrescription";

const HeroSection = () => {
  return (
    <section className="container mx-auto max-w-[88rem] px-[48px] mt-[110px]  flex flex-row items-start justify-start ">
      <UploadPrescription className={"px-[0px]   mt-0 w-[360px]"} />
      <div className="flex w-[calc(100%-360px)]  flex-col items-start justify-start gap-6 pl-12">
        <DesktopDeals />
        <DesktopCashback />
        <DesktopDeals />
        <DesktopCashback />
        <DesktopDeals />
        <DesktopCashback />
        <DesktopDeals />
      </div>
    </section>
  );
};

export default HeroSection;
