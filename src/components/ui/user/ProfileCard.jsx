import React from 'react'
import { Edit } from '../../../assets/image'

const ProfileCard = () => {
  return (
      <div className='w-full px-5'>
          <div className="flex flex-col items-start py-4 pl-4 pr-3 bg-[#4471D4] rounded-[10px] gap-6 justify-start w-full mt-[24px] ">
              <div className="flex w-full flex-row items-center justify-between ">
                  <p className="text-[#FFF] text-[16px] font-psemibold_600">
                      Debasish Panda
                  </p>
                  <p className="text-[#FFF] text-[12px] font-psemibold_600 flex flex-row items-center gap-1">
                      Edit <Edit />{" "}
                  </p>
              </div>
              <div className="flex flex-col items-start justify-start gap-1">
                  <p className="text-[#FFF] text-[12px] font-pregular_400">
                      debasish.panda@gmail.com
                  </p>
                  <p className="text-[#FFF] text-[12px] font-pregular_400">
                      +91-9410678972
                  </p>
              </div>
          </div>
      </div>
  )
}

export default ProfileCard
