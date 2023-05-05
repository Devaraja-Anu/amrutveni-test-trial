import React from 'react'
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { addOrder } from '@/features/storeSlice';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { useRouter } from 'next/router';
import path from 'path';
import axios from 'axios';

const ProductCard = ({item}:{item:Datum}) => {

  const dispatch = useAppDispatch();

  const handleAddtoCart = (product:Datum) => {
    dispatch(addOrder(product))
    toast.info('Item added to Cart')
  };



  

  return (
    <div className="card-bdr w-52 h-[420px] p-5">
      <div className="h-1/2 overflow-clip flex-centered mb-4">
        <Link href={`/products/${item.uuid}`} >
          <Image
            loader={() => item.image}
            className="object-cover w-40 hover:cursor-pointer"
            src={`${item.image}`}
            alt="product"
            width={50}
            height={50}
          />
        </Link>
      </div>

      <div className="px-2">
        <p className="pb-4">{item.name}</p>
        <p className="pb-4">Price: &#x20b9; {item.max_retail_price}</p>

        <button onClick={() => handleAddtoCart(item)} className="btn-blk mb-8">
          <Image src={"/cart.png"} alt="cart" width={20} height={20} /> Add to
          Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard