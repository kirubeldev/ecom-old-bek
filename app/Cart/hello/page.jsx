
"use client"
import React from 'react';
import { BsCart4 } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { MdDeleteForever } from 'react-icons/md';
import { CgDanger } from 'react-icons/cg';
import { IoBagHandleSharp } from 'react-icons/io5';
import Link from 'next/link';
import { DecreseQuantity, increseQuantity, removeFromCart } from '@/app/redux/slices/cartSlice';

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const total = useSelector((state) => state.cart.totalprice);
  const dispatch = useDispatch();

  const handleRemoveCart = (product) => {
    dispatch(removeFromCart(product));
  };
const hadelIncresquantity = (product) =>{
  dispatch(increseQuantity(product))
}
const hadeldecresquantity = (product) =>{
  dispatch(DecreseQuantity(product))
}

hadeldecresquantity
  return (
    <div className='bg-gray-100 min-h-screen'>
    <div className='w-full max-w-[1170px] mt-10 mx-auto'>
      {cart.length === 0 ? (
        // Rendered when cart is empty
        <div className='flex flex-col items-center justify-center mt-10 space-y-8'>
          <div className='relative'>
            <BsCart4 className='w-[250px] h-[250px]' />
            <div className='absolute -top-5 -right-5'>
              <CgDanger className='w-[100px] h-[100px] text-red-700' />
            </div>
          </div>
          <p className='text-5xl font-bold text-center text-gray-800'>
            Your cart is <span className='text-red-600'> empty! </span>{' '}
          </p>
          <p className='text-lg italic text-gray-600 text-center'>
            You must add items to your cart before proceeding to checkout.
          </p>
          <Link href='/'>
            <div className='px-8 py-4 bg-lime-500 text-white flex items-center justify-center space-x-2 rounded-lg cursor-pointer hover:bg-lime-600'>
              <IoBagHandleSharp className='text-3xl animate-bounce' />
              <span>Return To Shop</span>
            </div>
          </Link>
        </div>
      ) : (
        // Rendered when cart has items
        <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
          <table className='min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>ItemImage</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>ProductName</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Price</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Quantity</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Actions</th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              {cart.map((item, index) => (
                <tr key={index} className='hover:bg-gray-100'>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='flex items-center'>
                      <img className='h-16 w-16 rounded-md object-cover' src={item.image} alt={item.name} />
                    </div>
                  </td>
                  <td className='px-2 py-4 whitespace-nowrap'>
                    <div className='ml-4'>
                      <div className='text-sm font-medium text-gray-900'>{item.name}</div>
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-gray-900'>${item.price * item.quantity}</div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
  <div className='flex items-center'>
    <button
      className='px-2 py-1 bg-gray-200 text-gray-700 rounded-md'
      onClick={() => hadeldecresquantity(item)}
      disabled={item.quantity <= 1} // Disable button if quantity is 1 or less
    >
      -
    </button>
    <div className='mx-2 text-sm text-gray-900'>{item.quantity}</div>
    <button
      className='px-2 py-1 bg-gray-200 text-gray-700 rounded-md'
      onClick={() => hadelIncresquantity(item)}
    >
      +
    </button>
  </div>
</td>

                  <td className='px-6 py-4 whitespace-nowrap text-start text-xl font-medium'>
                    <button className='text-red-600 hover:text-red-900' onClick={() => handleRemoveCart(item)}>
                      <MdDeleteForever className='text-xl inline-block align-middle' />
                      <span className='ml-1'>Remove</span>
                    </button>
                  </td>
                </tr>
                
              ))}
            </tbody>
          </table>
        </div>
      )}



    </div>
    {/* <div className='w-[1170px] flex  mx-auto'>
    <div className='flex flex-col w-full text-right justify-end border '>
            
              <p>Total Price = $ {total}</p>
              <p>Tax = $ 100</p>
              <p> Grand Total Price = $ 100</p>


                </div>
    </div>
             */}
                  
  </div>
  
  );
};

export default Cart;
