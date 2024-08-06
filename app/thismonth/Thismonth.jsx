"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { CiHeart } from 'react-icons/ci';
import { FaRegEye } from 'react-icons/fa';
import { MdOutlineStar } from 'react-icons/md';
import { AddTowishlist } from "../redux/slices/wishlist";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../redux/slices/cartSlice";
import hero from "../../public/jbl.jpg";
import axios from 'axios';
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Thismonth = () => {
  const [products, setProducts] = useState([]);
  const [unlike ,setliked]= useState(false)

  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        // Optionally handle error state or log an error message
      });
  }, []);
  const dispatch = useDispatch();
  
  const handelAddToCart = (id)=>{

   dispatch(AddToCart(id))
   toast.success( id.name + "is now successfully added to cart");



  }


  

  
  const handelAddTowishlist = (id)=>{
  
      setliked(!unlike)
    
   dispatch(AddTowishlist(id))
   toast.success( id.name + "is now successfully added to wishlist");




  }

  const carouselRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <div className=" w-[1170px] justify-center mx-auto  mb-20 mt-10 flex flex-col  overflow-hidden relative">
          <ToastContainer />
      <div className="border-b border-gray-200 mt-12 bg-black border-[1px]"></div>
      <div className="flex items-center space-x-3 mt-12">
        <p className="h-8 w-3 rounded-sm bg-[#DB4444]"></p>
        <p className="text-[#DB4444] font-bold">This Month</p>
      </div>
      <div className="flex justify-between  items-center space-x-[60px]">
        <p className=" font-semibold mt-6  text-5xl">Flash Sales</p>
        <div className="flex mx-auto justify-center items-center  text-white mt-12 bg-[#DB4444] rounded-sm px-9 py-3">
          <p className="text-center rounded-md">View All</p>
        </div>
      </div>
      <div
        className="flex mx-auto mt-6  w-full items-center space-x-4 overflow-x-auto scrollbar-hide"
        ref={carouselRef}
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {products.slice(0, 4).map((product, index) => (
          <div
            className="flex-shrink-0  group w-[24%] px-2"
            key={index}
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className="relative">
              <Image
                src={product.image}
                alt={product.name}
                width={270}
                height={250}
                layout="responsive"
                className="w-full"
              />
                <span  onClick={()=>handelAddTowishlist(product)} className="absolute top-5 font-bold right-5 cursor-pointer">
            <CiHeart />
            
          </span> 
          <Link href={`/${product.id}`} className='cursor-pointer'>
          <span className="absolute top-14 right-5">
            <FaRegEye />
          </span>
          </Link>
            </div>
            <div className="group relative">
          <div className="absolute inset-0 bg-black text-white duration-700 opacity-0 group-hover:opacity-100 flex items-center justify-center h-12">
            <button  onClick={()=>handelAddToCart(product)} className="text-center w-full h-full">Add To Cart</button>
          </div>
          <div className="bg-black text-white opacity-0 group-hover:opacity-100 flex items-center justify-center h-12">
            {/* <p className="text-center">{product.name}</p> */}
          </div>
        </div>

            <p className="text-start mt-2">{product.name}</p>
            <p className="text-start text-sm text-[#DB4444] mt-2">${product.price}</p>
            <div className="flex">
              <MdOutlineStar className="text-yellow-400" />
              <MdOutlineStar className="text-yellow-400" />
              <MdOutlineStar className="text-yellow-400" />
              <MdOutlineStar className="text-yellow-400" />
              <MdOutlineStar className="text-gray-400" />
            </div>
          </div>
        ))}
      </div>
      <div className='flex w-full mx-auto  justify-center mt-[100px]'>
        <Image src={hero} alt="Hero Image" className="w-[892px] h-[344px] 2xl:w-[1300px] 2xl:h-[455px]" />

      </div>
    </div>
  );
};

export default Thismonth;
