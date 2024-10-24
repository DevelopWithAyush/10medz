import React from "react";
import OrderTable from "./Table";

const OrderUi = ({ title }) => {
  return (
    <section className="bg-white border-[1px] border-solid border-[#BCC3CD] rounded-[6px] py-4 px-4 ">
      <div className="flex flex-row items-center justify-between ">
        <p className="text-black font-psemibold_600 text-[16px]">Orders</p>
        <div className=" flex flex-row items-center justify-center gap-[37px]">
          <p className="text-[16px] font-pregular_400">
            {" "}
            <span className="text-[16px] font-psemibold_600 text-secondary">
              03{" "}
            </span>{" "}
            pending orders{" "}
          </p>
          <p className="text-[16px] font-pregular_400">
            {" "}
            <span className="text-[16px] font-psemibold_600 text-primary">
              03{" "}
            </span>{" "}
            packing orders{" "}
          </p>
        </div>
      </div>
      <OrderTable />
    </section>
  );
};

export default OrderUi;
