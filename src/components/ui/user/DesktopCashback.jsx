import React from 'react'
import posterImage from '../../../assets/image/Top view medical stuff.png'

const DesktopCashback = () => {
  return (
      <div className="flex flex-col items-start justify-start gap-[17px] w-full">
          <p className="text-[#555] text-[16px] font-psemibold_600">
              {" "}
              Get Instant cashback{" "}
          </p>
          <div className="w-full grid grid-cols-12 gap-4 ">
              <CashBack posterImage={posterImage} />
              <CashBack posterImage={posterImage} />
          </div>
      </div>
  )
}


const CashBack = ({ posterImage }) => {
    return (
        <div className='col-span-6'>
            <div className='relative h-[118px] md:h-[166px] w-full flex bg-[#F9A290] rounded-[10px] overflow-hidden justify-between items-center p-2'>
                <img className='h-full absolute right-0 top-0' src={posterImage} alt="posterimage" />
                <div className='flex flex-col justify-start items-start gap-5'>
                    <p className='text-[8px] font-pregular_400 text-[#FFF]'>Terms & Conditions*</p>
                    <div className='flex flex-col justify-start items-start gap-3'>
                        <p className='text-[18px] font-pregular_400 leading-[100%] text-[#FFF] max-w-[179px]'>Get ₹150 instant cashback </p>
                        <p className='text-[14px] font-pregular_400 text-[#FFF]'>First time order</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default DesktopCashback
