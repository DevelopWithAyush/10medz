import React from 'react';
import { BackBtn, DownArrow } from '../../assets/image';
import logo from "../../assets/image/logo.png";
import PrescriptionExplain from '../../components/ui/user/PrescriptionExplain';
import Verified from '../../components/ui/user/Verified';
import ChooseMethod from '../../components/ui/user/ChooseMethod';
import { useNavigate } from 'react-router-dom';

const UploadPrescription = () => {

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // This navigates to the previous page in history
  };
  return (
    <main>    
      <header className='fixed bg-[#FFFBF4] top-0 z-[100] w-full flex flex-row justify-between items-center px-5 py-2 ' >
        <button onClick={handleBack} className='flex items-center justify-start hover:translate-x-[-5px] duration-100 ease-in-out  flex-row gap-1'>
          <BackBtn/>
          <p className='text-[#101010] text-[14px] font-pmedium_500'>Back</p>
        </button>
        <div className="flex flex-row items-center gap-[6px]">
          <img className="w-[30px]" src={logo} alt="logo" />
          <div className="flex flex-col items-start ">
            <p className="text-black text-[14px] font-pmedium_500">
              Delivery in 10mins
            </p>
            <p className="text-black text-[12px] font-pregular_400 flex flex-row items-center">
              Bhopal,250010{" "}
              <span>
                <DownArrow />
              </span>{" "}
            </p>
          </div>
        </div>
      </header>
      <PrescriptionExplain />
      <Verified value={"Your prescription is safe with us and visible only to our pharmacists. "}/>
      <ChooseMethod/>
      
    </main>
  )
}

export default UploadPrescription
