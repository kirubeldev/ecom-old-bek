'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import shito from "../../public/joy.webp";
import joy from "../../public/joy2.jpg";
import joy2 from "../../public/joy3.jpg";
import joyy from "../../public/joyy.jpg";
import joy4 from "../../public/joy4.jpg";
import Image from "next/image";
import { MdOutlineStar } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { GiCycle } from "react-icons/gi";
import Related from "../[relateditems]/related";
import { useDispatch } from 'react-redux';
import { AddTowishlist } from '../redux/slices/wishlist';

const Page = ({ params }) => {
  const [product, setProduct] = useState([]); // Initialize as null
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`http://localhost:5000/products/${params.detail}`)
      .then(res => {
        setProduct(res.data);
        console.log(res.data);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
      });
  }, [params]);

  const handelAddTowishlist = (id) => {


    dispatch(AddTowishlist(id));
    toast.success( id.name + "is now successfully added to wishlist");

  };

  const { name, price, description, image, brand } = product;

  return (
    <div className="max-w-[1170px] mx-auto">
       <ToastContainer />

      <div className="flex space-x-5 w-full justify-start mt-[80px]">
        <p className="font-light">Accounts</p> <p>/</p>
        <p className="font-light">{brand}</p> <p>/</p>
        <p className="font-bold">{name}</p>
      </div>

      <div className="flex space-x-[30px] mt-[60px]">
        <div className="space-y-3 max-h-[600px] flex flex-col">
          {/* Placeholder images */}
          <Image src="/joy2.jpg" alt="Product Image" width={170} height={138} />
          <Image src="/joy3.jpg" alt="Product Image" width={170} height={138} />
          <Image src="/joyy.jpg" alt="Product Image" width={170} height={138} />
          <Image src="/joy4.jpg" alt="Product Image" width={170} height={138} />
        </div>

        <div className="w-500 h-600 flex justify-center items-center">
          {/* Product image */}
          <Image src={image} alt="Product Image" width={500} height={600} />
        </div>

        <div className="flex flex-col space-y-18 w-400">
          <p className="font-bold">{name}</p>
          <div className="flex mt-3 items-center space-x-2">
            {/* Star ratings */}
            {[...Array(4)].map((_, index) => (
              <MdOutlineStar key={index} className="text-yellow-400" />
            ))}
            {[...Array(1)].map((_, index) => (
              <MdOutlineStar key={index} className="text-gray-400" />
            ))}
            <p className="text-[12px]">(150 Reviews) | <span className="text-green-500">In Stock</span></p>
          </div>
          <p className="text-[24px]">${price}</p>
          <p className="text-[14px]">{description}</p>
          <br />
          <div className="border-b border-gray-400 "></div>

          <div className="flex items-center">
            <p className="mr-4">Colors:</p>
            {/* Example color circles */}
            <div className="w-4 h-4 rounded-full bg-[#A0BCE0] mr-2"></div>
            <div className="w-4 h-4 rounded-full bg-[#E07575]"></div>
          </div>

          <div className="flex space-x-9 items-center mt-4">
            <p>Size:</p>
            <div className="flex space-x-6">
              {["XS", "S", "M", "L", "XL"].map((size, index) => (
                <button
                  key={index}
                  className={`border rounded-md px-3 text-[13px] py-2 ${size === "M" ? "bg-[#DB4444] text-white" : ""}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center mt-4">
            {/* Quantity buttons */}
            <button className="border w-[40px] flex justify-center items-center text-4xl font-light h-[44px]">-</button>
            <button className="w-[80px] border h-[44px]">2</button>
            <button className="border flex justify-center items-center w-[40px] h-[44px] bg-[#DB4444] text-white text-3xl">+</button>
            <button className="bg-[#DB4444] w-[165px] text-white h-[44px]">Buy Now</button>
            <button className="h-[40px] w-[40px] border ml-4 flex items-center justify-center  text-xl"   onClick={() => {
                      handelAddTowishlist(product);
                    }}><CiHeart /></button>
          </div>

          <div className="flex flex-col mt-[30px]">
            {/* Delivery information */}
            <div className="flex space-x-4 items-center border-t-[0.1px] border px-5 border-1 border-gray-800">
              <TbTruckDelivery className="w-[40px] h-[40px]" />
              <div className="flex flex-col space-y-3 py-3">
                <p className="text-2xl font-bold">Free Delivery</p>
                <p className="underline text-sm">Enter your Postal code for delivery Available</p>
              </div>
            </div>
            <div className="flex space-x-4 items-center border px-5 border-1 border-gray-800">
              <GiCycle className="w-[40px] h-[40px] font-light text-gray-800" />
              <div className="flex flex-col space-y-3 py-3">
                <p className="text-2xl font-bold">Return Delivery</p>
                <p className="text-sm">Free 30 Days Delivery Returns. <span className="underline">Details</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Related />
    </div>
  );
};

export default Page;
