"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { CiHeart } from 'react-icons/ci';
import { FaRegEye } from 'react-icons/fa';
import { MdOutlineStar } from 'react-icons/md';
import axios from 'axios';
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../redux/slices/cartSlice";

import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import { AddTowishlist } from "../redux/slices/wishlist";
const Related = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  
  const handelAddToCart = (id)=>{

   dispatch(AddToCart(id))
   toast.success( id.name + "is now successfully added to cart");




  }


  

  

  const handelAddTowishlist = (id)=>{
  
  
  
 dispatch(AddTowishlist(id))
 toast.success( id.name + "is now successfully added to wishlist");




}
  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        // Optionally handle error state or display an error message to the user
      });
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const carouselRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <div className="w-[1170px] justify-center mx-auto mb-20 mt-10 flex flex-col overflow-hidden relative">
      <ToastContainer transition={Flip}
      autoClose={3000} />
     
      <div className="flex items-center space-x-3 mt-12">
        <p className="h-8 w-3 rounded-sm bg-[#DB4444]"></p>
        <p className="text-[#DB4444] font-bold">Related Items</p>
      </div>
      <div
        className="flex items-center space-x-4 overflow-x-auto"
        ref={carouselRef}
        style={{ scrollSnapType: "x mandatory", overflowX: "hidden" }}
      >
        {products.slice(0,4).map((product, index) => (
          <div className="flex-shrink-0 group w-[23%] mt-[80px] mx-auto px-2" key={index} style={{ scrollSnapAlign: "start" }}>
            <div className="relative">
              <Image
                src={product.image}
                alt={product.name}
                width={270}
                height={250}
                layout="responsive"
                className="w-full"
              />
              <span  onClick={()=>handelAddTowishlist(product)} className="absolute top-5  font-bold right-5 cursor-pointer">
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
    </div>
  );
};

export default Related;
