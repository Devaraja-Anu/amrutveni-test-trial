import React from 'react'
import Image from 'next/image'

type ProductCard = {
    image:string,
    title:string,
    cost:string
}

const ProductCard = (props:ProductCard) => {
  return (
    <div className="card-bdr w-52 p-5 h-96">
      <div className="h-1/2 overflow-clip flex-centered mb-4">
        <Image
          className="object-cover w-40"
          src={`/${props.image}.jpg`}
          alt="product"
          width={50}
          height={50}
        />
      </div>

      <div className='px-2'>
        <p className="pb-4">{props.title}</p>
        <p className="pb-4">&#x20b9; {props.cost}</p>

        <button className="btn-blk">
          <Image src={"/cart.png"} alt="cart" width={20} height={20} /> Add to
          Cart{" "}
        </button>
      </div>
    </div>
  );
}

export default ProductCard