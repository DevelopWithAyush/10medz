import React from "react";
import Header from "../../components/ui/pharmacist/Header";
import SideMenu from "../../components/ui/pharmacist/SideMenu";
import OrderUi from "../../components/ui/pharmacist/OrderUi";
import PastOrderUI from "../../components/ui/pharmacist/PastOrderUI";

const PharmacistDashboard = () => {
  return (
    <main className="w-full min-h-screen flex flex-col bg-[#FFFBF4]">
      <Header />

      <section className="flex flex-row w-full h-screen">
        <SideMenu />
        <div className="ml-[250px] mt-[53px] w-full   flex flex-col gap-5 overflow-y-auto px-2 py-2 ">
          <OrderUi />
          <PastOrderUI />
        </div>
      </section>
    </main>
  );
};

export default PharmacistDashboard;
