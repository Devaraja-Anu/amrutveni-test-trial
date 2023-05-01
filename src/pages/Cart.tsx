import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image';
import { useAppDispatch,useAppSelector } from '@/app/hooks';
import { useDispatch } from 'react-redux';
import { addOrder,clearCart,clearOrder,removeOrder } from '@/features/storeSlice'; 
import { RootState } from '@/app/store';
import Link from 'next/link';
import CartCard from '@/components/CartCard';






const Cart = () => {

  const cart = useAppSelector((state) => state.store);
  const dispatch = useAppDispatch();

const totalCost = cart.cartItems.reduce((total,item) => total + item.cartQty*item.cost,0 )
const totalItems = cart.cartItems.reduce((total,item)=> total+item.cartQty,0)


  return (
    <div>
      <Navbar />

      {cart.cartItems.length == 0 ? (
        <div className="h-96 border-2 shadow-lg">
          <div className="h-full flex flex-col justify-center items-center text-3xl">
            <p className="py-8">NO ITEMS IN CART</p>
            <Link href={"/"}>
              <button className="py-3 btn-blk rounded-xl text-xl">
                SHOP NOW &#8594;
              </button>
            </Link>
          </div>
        </div>
      ) : (
        cart.cartItems.map((item) => {
          return (
            <div key={item.id}>
              <CartCard item={item} />
            </div>
          );
        })
      )}

      {/* checkout Bar */}
      <div className="flex flex-col md:flex-row justify-around items-center  pt-10 bg-white ">
        <div className="font-semibold text-xl flex flex-col md:flex-row py-6 md:px-16 ">
          <p className="py-2 px-8">
            Total No of Items: {totalItems}
          </p>
          <p className="py-2 px-8">Total Cost : &#x20b9; {totalCost} </p>
        </div>

        <div className="flex flex-col md:flex-row">
          <button
            onClick={() => dispatch(clearCart())}
            className="btn-blk w-48 bg-white m-3 rounded-xl font-semibold text-xl flex justify-center "
          >
            Clear Cart
          </button>
          <button className="btn-blk w-48 bg-white m-3 rounded-xl font-semibold text-xl flex justify-center ">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart