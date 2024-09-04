"use client";
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { removeFromwishlist } from '@/app/redux/slices/wishlist';
import { AddToCart } from '@/app/redux/slices/cartSlice';

import Link from 'next/link';
import { IoBagHandleSharp } from 'react-icons/io5';
import { BsEmojiTear } from "react-icons/bs";
import Image from 'next/image';

const Cart = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  const handelremove = (item) => {
    dispatch(removeFromwishlist(item));
  };

  const handelAddToCart = (item) => {
    dispatch(AddToCart(item));
    handelremove(item)
  };

  return (
    <div className='flex gap-4'>
      <div className="w-[1170px] mb-20 mt-10 flex flex-col justify-center mx-auto overflow-hidden space-y-4 relative">
        <div>
          {wishlist.length === 0 ? (
            <div className='w-1170px flex flex-col justify-center mx-auto items-center'>
              <div className='relative mt-10'>
                <BsEmojiTear className='w-[250px] h-[250px] ' />
              </div>
              <p className='ml-2 text-5xl font-bold mt-12 '>
                Your wishlist is <span className='text-red-600'> empty! </span>{' '}
              </p>
              <p className='ml-2 mt-5 italic '>
                You must add to wishlist products to see them here. {' '}
              </p>
              <Link href='/'>
                <div className='px-8 py-4 bg-lime-500 text-white flex items-center space-x-5 rounded-lg mt-5'>
                  <IoBagHandleSharp className='text-xl animate-bounce' /> Return To Shop
                </div>
              </Link>
            </div>
          ) : (
            <div>
              {wishlist.map((item, index) => (
                <div key={index} className={`flex justify-between items-center mb-6 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'} py-4 px-6 rounded-md`}>

                    <Image src={item.image} className="w-[100px] h-[100px]" alt={item.name} width={100} height={100} />
         
          
                    <p className="truncate w-[200px]">{item.name}</p>
                   
                    <p>Price: ${item.price}</p>

                  <div className="flex items-center">
                    <button
                      onClick={() => handelremove(item)}
                      className="w-fit flex space-x-1 items-center px-4 py-2 text-white bg-red-700 rounded-md cursor-pointer"
                    >
                      <MdDeleteForever />
                      <span className="ml-1">Remove</span>
                    </button>
                    <button
                      onClick={() => handelAddToCart(item)}
                      className="ml-4 py-2 px-4 bg-green-400 rounded-md text-white"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
