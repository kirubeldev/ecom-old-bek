import React from "react";
import { IoMdSend } from "react-icons/io";
import { BsQrCode } from "react-icons/bs";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { RiFacebookLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa6";
const Footer = () => {
  return (
    
    <div className="w-screen flex flex-col  justify-center items-center bg-black text-white h-[440px] mt-[130px]">
      <div className="flex w-[1170px] gap-[87px] justify-center py-[70px]">
        <div className="flex flex-col space-y-5">
          <p className="text-white text-[20px]">Exclusive</p>
          <p className="text-white"> Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className="flex justify-between items-center border-2 rounded-sm px-4 border-gray-300 ">
            <input
              type="text"
              className="  w-[217px] h-[48px] bg-transparent "
              placeholder="Enter Your Email"
            />

            <IoMdSend className="h-[24px] w-[24px]" />
          </div>
        </div>

        <div className="flex flex-col w-[200px] space-y-3">
          <p className="text-white text-[20px]">Support</p>

          <p className="">
            111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
          </p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className="flex flex-col min-w-[140px]  space-y-3">
          <p className="text-white text-[20px]">Account</p>

          <p className="">My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>

        <div className="flex flex-col  space-y-3 min-w-[150px]">
          <p className="text-white text-[20px]">Quick Link</p>

          <p className="">Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>

        <div className="flex flex-col  space-y-5">
          <p className="text-white text-[20px]">Download App</p>

          <p className="text-[10px]">Save $3 with App New User Only</p>

          <div
            className="flex justify-center items-center gap-3
                                "
          >
            <BsQrCode className="text-8xl" />
            <div className="space-y-2">
              <div className="border w-[130px] h-[40px] flex space-x-2 items-center px-2 border-gray-300">
                <IoLogoGooglePlaystore className="text-[20px] " />

                <div className="flex flex-col ">
                  <p className="text-[8px] flex  pl-1">Get It on</p>
                  <p className="text-[12px]  ">Google Play</p>
                </div>
              </div>
              <div className="border w-[130px] h-[40px] flex space-x-2 items-center px-2 border-gray-300">
                <FaApple className="text-[20px] " />

                <div className="flex flex-col ">
                  <p className="text-[8px] flex  pl-1">Download on The</p>
                  <p className="text-[12px]  ">Apple Store</p>
                </div>
              </div>
            </div>{" "}
          </div>

          <div className="flex space-x-7">
            <nav className="list-none flex w-[168px] h-[24px] justify-between text-[24px]">
              <li>
                {" "}
                <RiFacebookLine />
              </li>
              <li>
                {" "}
                <CiTwitter />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaLinkedin />
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="w-screen flex justify-center  h-[200px] border-t-[1px] items-center border-gray-700 mx-auto">
  <div className="flex  items-center text-gray-60">

  
   
   </div>
   <FaCopyright className="bg-transparent text-white " /> 
   <p className="ml-2">
   Copyright Rimel 2022. All right reserved
   </p>
      </div>
    </div>
  );
};

export default Footer;
