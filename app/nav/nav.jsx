"use client";
import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";
import { CiSearch, CiHeart, CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineUserCircle, HiOutlineShoppingBag } from "react-icons/hi";
import { MdCancel, MdStar } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import Link from 'next/link';
import { MdOutlineCancel } from "react-icons/md";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { useSelector } from 'react-redux';

const Nav = () => {
  const [show, setShow] = useState(false);

  const showToggle = () => {
    setShow(!show);
  };

  const close = () => {
    setShow(false);
  };

  const CartLength = useSelector((state)=>state.cart.cart)
  const wishlists = useSelector((state)=>state.wishlist.wishlist)

  return (
    <div>
      {/* Header */}
      <div className="bg-black h-12 flex w-full justify-around items-center ">
        <p className="invisible">hidden</p>
        <p className="text-white capitalize">
          Summer Sale for all swim suits and free express delivery - OFF 50%! <span className="font-bold underline">shop now</span>
        </p>
        <div className="flex items-center space-x-2">
          <p className="text-white">English</p>
          <FaAngleDown className="text-white text-2xl" />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex w-[1170px] mx-auto justify-between  sticky items-center pt-10 pb-3 mb-6 border-b border-gray-300">
        <p className="font-bold text-[27px]">Exclusive</p>
        <nav>
          <ul className="flex space-x-8 text-[16px]">
            <li className="border-b border-gray-400">
              <Link href="/">Home</Link>
            </li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign Up</li>
          </ul>
        </nav>

        <div className="flex items-center">
          <div className="flex items-center mr-12">
            <input type="text" className="outline-none" placeholder="What are you looking for?" />
            <CiSearch className="font-bold text-[28px] text-black" />
          </div>

          <div className="flex items-center space-x-8">
          

            <Link href="/wishlist/wishcart">
            <div className="relative">
              <CiHeart className="text-[28px]" />
              <p className="absolute top-[-30%] right-[-10px] text-[13px] w-5 h-5 text-white rounded-full flex items-center justify-center bg-[#DB4444]">{wishlists.length }</p>
            </div></Link>
            <Link href="/Cart/hello">
            <div className="relative">
              <IoCartOutline className="text-[28px]" />
              <p className="absolute top-[-30%] right-[-10px] text-[13px] w-5 h-5 text-white rounded-full flex items-center justify-center bg-[#DB4444]">{CartLength.length}</p>
            </div></Link>
            <div className="relative">
              <CiUser onClick={showToggle} className="text-[33px] bg-red-500 rounded-full text-white py-1 -mt-2 cursor-pointer" />
              {show && (
  <div className="flex flex-col absolute top-[40px] right-0 bg-black/30 backdrop-blur-md border-gray-300 rounded-md shadow-lg">
    <nav>
      <ul className="p-2 w-[225px] text-white h-[227px] space-y-1 ">
        <li className="flex items-center space-x-2 hover:bg-white/5 hover:backdrop-blur-xl  cursor-pointer p-2 " onClick={close}>
          <CiUser className="text-[24px]" />
          <div>Manage My Account</div>
        </li>
        <Link href="/Cart/hello">
        <li className="flex items-center space-x-2 hover:bg-white/5 hover:backdrop-blur-xl cursor-pointer p-2" onClick={close}>
          <HiMiniShoppingBag className="text-[24px]" />
          <div>My Orders</div>
        </li></Link>
        <li className="flex items-center space-x-2 hover:bg-white/5 hover:backdrop-blur-xl cursor-pointer p-2" onClick={close}>
          <MdOutlineCancel className="text-[24px]" />
          <div>My Cancellation</div>
        </li>
        <li className="flex items-center space-x-2 hover:bg-white/5 hover:backdrop-blur-xl cursor-pointer p-2" onClick={close}>
          <FaRegStar className="text-[24px]" />
          <div>My Reviews</div>
        </li>
        <li className="flex items-center space-x-2 hover:bg-white/5 hover:backdrop-blur-xl cursor-pointer p-2" onClick={close}>
          <CiLogout className="text-[24px]" />
          <div>Logout</div>
        </li>
      </ul>
    </nav>
  </div>
)}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
