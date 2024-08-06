
"use client"
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../redux/slices/cartSlice";
import { AddTowishlist } from "../redux/slices/wishlist";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Explor = () => {
  const [products, setProducts] = useState([]);
  const [unlike, setLiked] = useState(false);
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handelAddToCart = (product) => {
    dispatch(AddToCart(product));
    toast.success( product.name + "added to cart");

  };

  const handelAddToWishlist = (id) => {
    setLiked(!unlike);
    dispatch(AddTowishlist(id));
    toast.success( id.name + "added to wishlist");

  };

  const [pageIndex, setPageIndex] = useState(0);
  const itemsPerPage = 8;
  const numPages = Math.ceil(products.length / itemsPerPage);
  const carouselRef = useRef(null);

  const scroll = (scrollOffset) => {
    carouselRef.current.scrollLeft += scrollOffset;
  };

  const goToPage = (pageIndex) => {
    setPageIndex(pageIndex);
    carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
  };

  const visibleProducts = products.slice(
    pageIndex * itemsPerPage,
    (pageIndex + 1) * itemsPerPage
  );

  return (
    <div className="w-[1170px] mb-20 mt-10 mx-auto flex flex-col overflow-hidden relative">
           <ToastContainer />

      <div className="flex items-center space-x-3 mt-12">
        <p className="h-8 w-3 rounded-sm bg-[#DB4444]"></p>
        <p className="text-[#DB4444] font-bold">Our Product</p>
      </div>
      <div className="flex justify-between items-center space-x-[60px]">
        <p className="font-semibold mt-6 text-[35px]">Explore Our Product</p>
      </div>
      <div className="flex justify-end mb-4 mr-12">
        <button
          className={`text-black rounded-full p-2 cursor-pointer mr-2 ${
            pageIndex === 0 && "opacity-50 pointer-events-none"
          }`}
          onClick={() => pageIndex > 0 && goToPage(pageIndex - 1)}
        >
          <FaArrowLeft />
        </button>
        <button
          className={`text-black rounded-full p-2 cursor-pointer ${
            pageIndex === numPages - 1 && "opacity-50 pointer-events-none"
          }`}
          onClick={() => pageIndex < numPages - 1 && goToPage(pageIndex + 1)}
        >
          <FaArrowRight />
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4" ref={carouselRef}>
        {visibleProducts.map((product, index) => (
          <div className="group" key={index}>
            <div className="relative">
              <Image
                src={product.image}
                alt={product.name}
                width={270}
                height={250}
                layout="responsive"
                className="w-full"
              />
              <span
                onClick={() => handelAddToWishlist(product)}
                className="absolute top-5 font-bold right-5 cursor-pointer"
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
                  onClick={() => handelAddToCart(product)}
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
            <div className="flex items-center space-x-3">
              <p className="text-start text-sm text-[#DB4444] mt-2">
                ${product.price}
              </p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <MdOutlineStar
                    key={i}
                    className={`text-${i < 4 ? "yellow" : "gray"}-400`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex mx-auto justify-center">
        <div className="flex justify-center items-center text-white mt-12 bg-[#DB4444] rounded-sm w-[230px] py-2 px-4">
          <p className="text-center">View All Products</p>
        </div>
        <div className="border-b mt-[80px] border-[1px] border-gray-400"></div>
      </div>
    </div>
  );
};

export default Explor;
