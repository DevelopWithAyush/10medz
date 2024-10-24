import React from "react";
import { VerifiedTag } from "../../../assets/image";

const Verified = ({ value }) => {
  return (
    <div className="flex flex-row items-center justify-start px-5 gap-2">
      <VerifiedTag />
      <p className="font-pregular_400 text-[10px] text-[#101010]">{value}</p>
    </div>
  );
};
export default Verified;
