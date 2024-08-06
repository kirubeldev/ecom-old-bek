import React from 'react'
import { TbHeadset } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
const Delivery = () => {
  return (
    <div className='flex w-[1170px]   mx-auto mt-[130px] items-center'>
      <div className=' flex mx-auto space-x-10 justify-center'>


  <div className='w-[290px]   flex flex-col '>
    <div className='bg-gray-400 w-[75px] h-[76px] mx-auto rounded-full relative' >
    <TbTruckDelivery className='w-[60px] h-[60px] p-4 bg-black absolute top-[10%] left-[10%] ml- text-white rounded-full ' />

    </div>
    <div>
      <p className='text-[19px] flex flex-nowrap mt-[24px] mb-2 justify-center mx-auto font-bold'>FREE AND FAST DELIVERY</p>
    </div>
    <p className=' flex justify-center'>Free delivery for all orders over $140</p>
  </div>

  
  <div className='w-[290px]   h-[161px]  flex flex-col '>
    <div className='bg-gray-400 w-[76px]  mx-auto h-[75px] rounded-full relative' >
    <TbHeadset  className='w-[60px] h-[60px] p-4 bg-black absolute top-[9%] left-[11%] ml- text-white rounded-full ' />

    </div>
    <div>
      <p className='text-[19px] flex flex-nowrap justify-center mt-[24px] mb-2 font-bold'>24/7 CUSTOMER SERVICE</p>
    </div>
    <p className='flex justify-center'>Friendly 24/7 customer support</p>
  </div>


  <div className='w-[290px]   h-[161px]  flex flex-col '>
    <div className='bg-gray-400 w-[75px] h-[76px] flex justify-center mx-auto rounded-full relative' >
    <IoShieldCheckmarkOutline  className='w-[60px] h-[60px] p-4 bg-black absolute top-[9%] left-[11%] ml- text-white rounded-full ' />

    </div>
    <div>
      <p className='text-[19px] flex flex-nowrap  justify-center mt-[24px] mb-2 font-bold'>MONEY BACK GUARANTEE</p>
    </div>
    <p className='flex justify-center'>We reurn money within 30 days</p>
  </div>


  
    </div>      </div>
  )
}

export default Delivery

