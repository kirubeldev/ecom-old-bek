import React from 'react'
import ps from "../../public/ps5.jpg"
import cap from "../../public/capgirl.jpg"
import speaker from "../../public/speaker.jpg"
import shito from "../../public/shito.jpg"
import Image from 'next/image';
const Featured = () => {
  return (
    <div className="w-[1170px] mt-12 flex flex-col  h-full mx-auto">

     <div className="flex items-center space-x-3 mt-12">
        <p className="h-8 w-3 rounded-sm bg-[#DB4444]"></p>
        <p className="text-[#DB4444] font-bold">Featured</p>
      </div>
      <div className="flex justify-between items-center space-x-[60px]">
        <p className=" font-semibold mt-6 text-[37px]">New Arrival</p>
       
      </div> 


      <div className='flex space-x-5 mt-12 h-full'>
        <div className=' w-[570px] h-[600px]'>
<Image src={ps} className='w-full h-full' alt="" />
        
        </div>
        <div className=' flex-col w-[570px] h-[600px]  '>
            <div className='w-full gap-4  '>
<div className=' '>
<Image src={cap} className='w-[570px]    h-[286px]' alt="" />
</div>
<div className='flex w-[570px] space-x-5 justify-center mx-auto  mt-7'>

<div className=''>
<Image src={speaker} className='w-[270px]    h-[284px]' alt="" />

</div>
<div className=''>
<Image src={shito} className='w-[270px]    h-[284px]' alt="" />

</div>
</div>

            </div>
        </div>

      </div>
    </div>
  )
}

export default Featured
