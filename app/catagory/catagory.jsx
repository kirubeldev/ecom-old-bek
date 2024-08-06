import React from 'react';
import Countdown from '../countdown/countdown';
import { IoPhonePortraitOutline } from "react-icons/io5";
import { GrPersonalComputer } from "react-icons/gr";
import { BsWatch } from "react-icons/bs";
import { MdOutlineCameraAlt } from "react-icons/md";
import { LuGamepad } from "react-icons/lu";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Catagorries = () => {
  return (
    <div className='w-[1170px]  flex flex-col   mx-auto'>
      <div className='flex items-center space-x-3'>
        <p className='h-8 w-3 rounded-sm bg-[#DB4444]'></p>
        <p className='text-[#DB4444] font-bold'>Catagorries's</p>
      </div>
      <div className='flex items-center space-x-[60px] justify-between'>
        <p className=' font-semibold mt-6 text-[36px]'>Browse By Category</p>
        <div className="flex justify-end mb-4 mr-12">
        <button
          className="text-black  rounded-full p-2 cursor-pointer mr-2"
          // onClick={() => scroll(-200)}
        >
          <FaArrowLeft />
        </button>
        <button
          className="text-black  rounded-full p-2 cursor-pointer"
          // onClick={() => scroll(200)}
        >
          <FaArrowRight />
        </button>
      </div>
      </div>

      <div className='w-full flex justify-between items-center mt-12  text-[66px]'>
  <div className='border-1 border-black p-10 border '>
    <IoPhonePortraitOutline />
  </div>
  <div className='border-1 border-black p-10 font-light border'>
    <GrPersonalComputer />
  </div>
  <div className='border-1 border-black p-10 border'>
    <BsWatch />
  </div>
  <div className='border-1 border-black p-10  border'>
    <MdOutlineCameraAlt />
  </div>
  <div className='border-1 border-black p-10 border'>
    <LuGamepad />
  </div>
</div>

   

    </div>
  );
};

export default Catagorries;
