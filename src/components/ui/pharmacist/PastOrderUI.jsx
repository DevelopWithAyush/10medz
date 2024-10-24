import React from "react";
import OrderTable from "./Table";

const PastOrderUI = () => {
  return (
    <section className="bg-white border-[1px] border-solid border-[#BCC3CD] rounded-[6px] py-4 px-4 ">
      <div className="flex flex-row items-center justify-between ">
        <p className="text-black font-psemibold_600 text-[16px]">Past Orders</p>
      </div>
      <OrderTable />
    </section>
  );
};

export default PastOrderUI;
