import React from 'react'
import Prescription from '../../../assets/image/RxImage.png'
import { Link } from 'react-router-dom'
const UploadPrescription = ({className}) => {
  return (
    <div className={`flex  flex-col items-start justify-start px-5  mt-6 ${className}`} >
      <div className='flex flex-col items-start justify-start p-4 border-[1px] border-solid bg-white border-[#DFE7F2] w-full rounded-[10px] gap-[26.25px] sm:gap-[44px] '
        style={{ boxShadow: "0px 4px 5px 0px rgba(255, 233, 192, 0.40)"}}
      >
              <p className='text-[20px] font-pmedium_500 text-[#101010]'>Got a prescription?</p>
              <div className='w-full flex flex-row items-center justify-center '>
                  <img src={Prescription} alt="" />
              </div>
              <div className='flex flex-col w-full items-center justify-center gap-[20px] sm:gap-[48px] '>
                  <p className='text-center text-[12px] text-black font-pregular_400'>Upload your prescription and get the medicines in 10 minutes.</p>
          <Link to={"/prescription"} className='w-full bg-primary flex flex-col items-center justify-center text-white rounded-[10px] text-[16px] font-psemibold_600 py-2'  >Upload Prescription</Link>
              </div>
              
        </div>
      
    </div>
  )
}

export default UploadPrescription
 