import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import SideCard from "@/components/SideCard";
import { ToastContainer } from "react-toastify";


export default function Home() {

  const productData = [
    {
      id:1,
      image: "bluePhone",
      title: "Iphone 13 128 blue",
      cost: 40000,
    
    },
    {
      id:2,
      image: "camera",
      title: "DSLR 420 MS",
      cost: 50000,
    
    },
    {
      id:3,
      image: "greyPhone",
      title: "Iphone 13 256 grey",
      cost: 60000,
    
    },
    {
      id:4,
      image: "hair oil",
      title: "Amrut Veni Hair Elixr",
      cost: 3000,
    
    },
    {
      id:5,
      image: "redPhone",
      title: "Samsung S7 Pro",
      cost: 45000,
    
    },
    {
      id:6,
      image: "leatherWatch",
      title: "Casio Ares 20SMX",
      cost: 25000,
    
    },
    {
      id:7,
      image: "nikon",
      title: "Nikon KSiR 3000",
      cost: 60000,
    
    }
  ];


  return (
    <div>
      <Navbar />

      <ToastContainer/>

      <div className="flex flex-col md:flex-row justify-around mt-16 mx-5 sm:mx-20 md:mx-10 xl:mx-20">
        <SideCard />

        <div className="card-bdr ">
          <p className="pl-10 pt-5">Results ( {productData.length} items)</p>
          
          <div className="card-bdr border-t-0 px-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-10 place-items-center">
            {productData.map((item) => {
              return (
                <div key={item.id}>
                  <ProductCard item={item} />
                </div>
              );
            })}
          </div>

          
        </div>
      </div>
    </div>
  );
}
