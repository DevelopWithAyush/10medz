import React from 'react'
import { Searchbtn } from '../../../assets/image'

const Search = ({ className }) => {
  return (
    <div className={`${className} flex flex-row items-center justify-start px-5`}>
      <div className='flex flex-row items-center justify-start border-[1px] border-solid bg-white border-[#BCC3CD] rounded-[10px]  w-full gap-2 px-2 py-[6.5px] '>
        <Searchbtn />
        <input type="text" name="" id="" placeholder='Search for medicines or health products' className='w-full bg-transparent text-[12px] font-pregular_400 outline-none ' />
      </div>
</div>
  )
}

export default Search
