import React from 'react'
import Image from 'next/image';
import { ProductCard } from '@/types/productTypes';
import { useAppDispatch } from '@/app/hooks';
import { addOrder, clearCart, clearOrder, removeOrder } from '@/features/storeSlice';




const CartCard = ({item}:{item:ProductCard}) => {

  const dispatch = useAppDispatch();

  const handleAddtoCart = (product:ProductCard)=>{
    dispatch(addOrder(product))
  }

  const handleReduceOrder = (product:ProductCard)=>{
    dispatch(removeOrder(product))
  }

  const handleClearOrder = (product: ProductCard) => {
    dispatch(clearOrder(product));
  };



  return (
    <div className="mt-10">
      {/* Product Card */}
      <div className="card-bdr flex flex-col md:flex-row justify-around items-center mx-10">
        {/* image */}
        <div className="">
          <Image
            className="object-cover w-40"
            src={`/${item.image}.jpg`}
            alt="product "
            width={80}
            height={80}
          />
        </div>

        {/* text */}

        <div className="pt-5 flex flex-col items-center">
          <p className="text-2xl font-semibold py-3 ">{item.image}</p>
          <p className="cart-txt">Delivery in (9) days</p>
          <button onClick={() => handleClearOrder(item)} className="qty-btn w-28 mt-2 ">Remove Item </button>
        </div>

        <div className="py-4 flex flex-col items-center">
          <p className="py-2 cart-txt text-xl">No of Items </p>

          {/* buttons */}

          <div className="flex flex-row">
            <button onClick={()=>handleReduceOrder(item)} className="qty-btn ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <div className="qty-btn hover:scale-100 flex justify-center">
              <p>{item.cartQty}</p>
            </div>

            <button
              onClick={()=>handleAddtoCart(item)}
              className="qty-btn "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="py-4 mb-8 flex flex-col items-center justify-center mt-5">
          <p className="cart-txt text-xl">Cost per Item</p>
          <p className="cart-txt text-xl">&#x20b9; {item.cost}</p>
          <div className="py-4">
            <p className="font-semibold text-xl">Total Cost</p>
            <p className="font-semibold text-xl">
              &#x20b9; {item.cost * item.cartQty}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard