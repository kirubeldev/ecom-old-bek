"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../css.css";
import axios from "axios";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../redux/slices/cartSlice";

import { MdDeleteForever } from "react-icons/md";
import { AddTowishlist } from "../redux/slices/wishlist";

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Optionally handle error state or display an error message to the user
      });
  }, []);

  const [unlike, setliked] = useState(false);

  const carouselRef = useRef(null);

  const scroll = (scrollOffset) => {
    carouselRef.current.scrollLeft += scrollOffset;
  };

  const dispatch = useDispatch();

  const handelAddToCart = (id ) => {
    dispatch(AddToCart(id));
    toast.success( id.name + "is now successfully added to cart");
  };

  const handelAddTowishlist = (id) => {
    setliked(!unlike);

    dispatch(AddTowishlist(id));
    toast.success( id.name + "is now successfully added to wishlist");

  };

  return (
    <div className=" w-[1170px]  mb-20 mt-10 flex flex-col justify-center mx-auto  overflow-hidden relative">
      <ToastContainer />

      <div className="flex justify-end mb-4 mr-12">
        <button
          className="text-black  rounded-full p-2 cursor-pointer mr-2"
          onClick={() => scroll(-200)}
        >
          <FaArrowLeft />
        </button>
        <button
          className="text-black  rounded-full p-2 cursor-pointer"
          onClick={() => scroll(200)}
        >
          <FaArrowRight />
        </button>
      </div>
      {products && products.length > 0 && (
        <div
          className="flex items-center space-x-4 overflow-x-auto scrollbar-hide"
          ref={carouselRef}
          style={{ scrollSnapType: "x mandatory" }}
        >
          {products.map(
            (
              product,
              index //this product is in the handelAddTowishlist(product)
            ) => (
              <div
                className="flex-shrink-0 group w-[22%] px-2"
                key={index}
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={270}
                    height={250}
                    layout="responsive"
                    className="w-[30px]"
                  />
                  <span
                    onClick={() => {
                      handelAddTowishlist(product);
                    }}
                    className="absolute top-5  font-bold right-5 cursor-pointer"
                  >
                    <CiHeart />
                  </span>
                  <Link href={`/${product.id}`} className="cursor-pointer">
                    <span className="absolute top-14 right-5">
                      <FaRegEye />
                    </span>
                  </Link>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-black text-white duration-700 opacity-0 group-hover:opacity-100 flex items-center justify-center h-12">
                    <button
                      onClick={() => handelAddToCart(product )}
                      className="text-center w-full h-full"
                    >
                      Add To Cart
                    </button>
                  </div>
                  <div className="bg-black text-white opacity-0 group-hover:opacity-100 flex items-center justify-center h-12">
                    {/* <p className="text-center">{product.name}</p> */}
                  </div>
                </div>

                <p className="text-start mt-2">{product.name}</p>
                <p className="text-start text-sm text-[#DB4444] mt-2">
                  ${product.price}
                </p>
                <div className="flex">
                  <MdOutlineStar className="text-yellow-400" />
                  <MdOutlineStar className="text-yellow-400" />
                  <MdOutlineStar className="text-yellow-400" />
                  <MdOutlineStar className="text-yellow-400" />
                  <MdOutlineStar className="text-gray-400" />
                </div>
              </div>
            )
          )}
        </div>
      )}

      <div className=" flex mx-auto  justify-center items-center text-white mt-12 bg-[#DB4444] rounded-sm  w-[230px] py-2 px-4 ">
        <p className="text-center ">View All Product</p>{" "}
      </div>

      <div className="border-b mt-[80px] border-[1px] border-gray-400"></div>
    </div>
  );
};

export default ProductCarousel;
