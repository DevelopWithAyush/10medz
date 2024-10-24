import React from "react";

const Bill = () => {
  return (
    <div className="w-full border-solid border-t-[1px] mt-6 border-[#DFE7F2] border-b-[1px] px-5 py-4 flex flex-col gap-4">
      <p className="text-[14px] text-[#101010] font-pmedium_500">
        Bill summary
      </p>
      <div className="w-full flex flex-col items-start justify-start gap-2">
        <BillItem
          name={"Item total (MRP)"}
          price={"₹287"}
          textcolor={"#101010"}
        />
        <BillItem
          name={"Total discount"}
          price={"-₹37"}
          textcolor={"#009E23"}
        />
        <BillItem
          name={"Delivery charge"}
          price={"₹37"}
          textcolor={"#009E23"}
        />
          </div>
          <div className="w-full h-[1px] bg-[#8A99A5]" />
          <p className="text-[14px] font-pmedium_500 text-[#555] self-end">Total amount: <span className="text-[#101010]">₹287</span> </p>
    </div>
  );
};

const BillItem = ({ name, price, textcolor }) => {
  return (
    <div className="w-full flex flex-row items-center justify-between">
      <p className="text-[12px] font-pregular_400 text-[#555]">{name}</p>
      <p
        className="text-[12px]  font-pregular_400 "
        style={{ color: textcolor }}
      >
        {price}
      </p>
    </div>
  );
};

export default Bill;
