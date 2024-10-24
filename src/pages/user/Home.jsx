import React from "react";
import PhoneHeader from "../../components/ui/user/PhoneHeader";
import Search from "../../components/ui/user/Search";
import UploadPrescription from "../../components/ui/user/UploadPrescription";
import Deals from "../../components/ui/user/Deals";
import CashBack from "../../components/ui/user/CashBack";
import PhoneTabs from "../../components/ui/user/PhoneTabs";
import Header from "../../components/shared/user/Header";
import HeroSection from "../../components/shared/user/HeroSection";

const Home = () => {
  return (
    <>
      <PhoneSection />
      <DesktopSection />
    </>
  );
};

const PhoneSection = () => {
  return (
    <main className="flex flex-col sm:hidden">
      <PhoneHeader />
      <Search className={"mt-[70px] md:hidden"} />
      <UploadPrescription />
      <Deals />
      <CashBack />
      <PhoneTabs />
    </main>
  );
};


const DesktopSection = () => {
  return (
    <main className="hidden sm:flex flex-col ">
      <Header />
      <HeroSection />
    </main>
  );
}
export default Home;
