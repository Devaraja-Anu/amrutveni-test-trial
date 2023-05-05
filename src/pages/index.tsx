import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import SideCard from "@/components/SideCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import {useEffect,useState} from 'react'


export default function Home() {


 const [toggleStock,setToggleStock] = useState(false)

  const getData = async() => {
    const returnData = axios.get(
      `https://stingray-app-bby87.ondigitalocean.app/api/v1/variants/`
    );
    return returnData;
  }
  
  const {data} = useQuery({
    queryKey:['test'],
    queryFn:getData
  })


  return (
    <div>
      <Navbar />

      <ToastContainer />

      <div className="flex flex-col md:flex-row justify-around mt-16 mx-5 sm:mx-20 md:mx-10 xl:mx-20">
        <SideCard />

        <div className="card-bdr ">
          <p className="pl-10 pt-5">Results ( {data?.data.data.length} items)</p>

          <div className="card-bdr border-t-0 px-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-10 place-items-center">
            {data?.data.data
            .filter((item:Datum)=> item.is_active  )
            .map((item: Datum) => {
              return (
                <div key={item.uuid}>
                  <ProductCard item={item}/>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
