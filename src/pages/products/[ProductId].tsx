import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query" 
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Navbar from "@/components/Navbar"
import Image from "next/image"

const ProductPage = () => {


    const router = useRouter()
    
   const getData = async () => {
     const pageData = await axios.get(
       `http://stingray-app-bby87.ondigitalocean.app/api/v1/variant/${router.query.ProductId}/`
     );
     return pageData;
   };

    const {data} = useQuery({
        queryKey:['individalProduct'],
        queryFn:getData
    })
   
    console.log(data?.data.data[0]);
   
    const details:Datum = data?.data.data[0];


    return (
      <div>
        <Navbar />
        <div className="flex flex-col md:flex-row mx-10 border-2 items-center justify-center mt-20">
          <div className="flex justify-center">
            <Image
              className=" w-44 object-cover"
              loader={() => details.image}
              src={details.image}
              width={80}
              height={80}
              alt="large product sample"
            />
          </div>

          <div className="px-5 flex flex-col items-center justify-center ">
            <p className="font-semibold text-xl pt-4">{details.name}</p>
            <p className="font-semibold text-xl pt-4 py-4">
              Cost: &#x20b9; {details.max_retail_price}
            </p>
            <p className="py-4 text-xl font-semibold">
              {" "}
              {details.in_stock ? `In Stock` : `Out of Stock`}
            </p>
          </div>
        </div>
      </div>
    );
}

export default ProductPage