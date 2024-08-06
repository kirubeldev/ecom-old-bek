// "use client"
import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import hero from "../../public/hero.jpg";
// import { increment, decrement } from '../redux/slices/counter';
// import { useSelector , useDispatch } from 'react-redux';
import Image from "next/image";

const Hero = () => {
 
  
//  const data = useSelector((state)=>state.counter.value)
// const dispatch = useDispatch();

//  const increments = ()=>{
//   dispatch(increment())
//  }  

//  const decrements = ()=>{
//   dispatch(decrement())
//  }  


  return (
    <div className=''>

{/* 
      <div className='mb-[200px] w-screen flex justify-center flex-col mx-auto '>

      <h1>Counter</h1>
      <p>Count: {data}</p>
      <button onClick={increments} className='border p-2 w-fit' >Increment</button>
      <button onClick={decrements} className='border p-2 w-fit'>Decrement</button>
   
   

      </div>
      
       */}
      
      
      
      <div className="flex max-w-[1170px]  items-center mb-[110px]    justify-between  mx-auto">
        <nav className='w-[217px] h-[344px] '>
          <ul className="flex flex-col space-y-3 2xl:space-y-5">
            <div className="flex items-center">
              <li  className='cursor-pointer'>Women’s Fashion</li>
              <MdKeyboardArrowRight className="font-bold text-[24px]" />
            </div>
            <div className="flex items-center">
              <li  className='cursor-pointer'>Men’s Fashion</li>
              <MdKeyboardArrowRight className="font-bold text-[24px]" />
            </div>
            <li className='cursor-pointer'>Electronics</li>
            <li className='cursor-pointer'>Home & Lifestyle</li>
            <li className='cursor-pointer'>Medicine</li>
            <li className='cursor-pointer'>Sports & Outdoor</li>
            <li className='cursor-pointer'>Baby’s & Toys</li>
            <li className='cursor-pointer'>Groceries & Pets</li>
            <li className='cursor-pointer'>Health & Beauty</li>
          </ul>
        </nav>
        <Image src={hero} alt="Hero Image" className="w-[892px] h-[344px]" />
      </div>
    </div>
  )
}

export default Hero;
