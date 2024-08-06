import React from 'react';
import Countdown from '../countdown/countdown';

const Today = () => {
  return (
    <div className='w-[1170px]   flex flex-col  mx-auto'>
      <div className='flex items-center space-x-3'>
        <p className='h-8 w-3 rounded-sm bg-[#DB4444]'></p>
        <p className='text-[#DB4444] font-bold'>Today's</p>
      </div>
      <div className='flex items-center space-x-[60px]'>
        <p className=' font-semibold mt-6 text-[38px]'>Flash Sales</p>
      <Countdown/>
      </div>
    </div>
  );
};

export default Today;
