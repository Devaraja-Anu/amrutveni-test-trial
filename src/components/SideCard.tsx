import React from 'react'

const SideCard = () => {
  return (
    <div className=" md:w-56 h-fit rounded-md card-bdr mb-14 md:mr-10">
      <div className="pl-6 py-20 ">
        <p className="pb-4 ">Categories</p>

        <label className="pt-2 " htmlFor="price-range">
          Price range
        </label>
        <input
          className="w-10/12 my-5 transparent mr-10 h-1.5 cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200"
          id="price-range"
          type="range"
          min="0"
          max="50"
          defaultValue="25"
        ></input>

        <p className="pb-2">Availability</p>
        <input className="mx-1" type="checkbox" id="availability" />
        <label className="text-gray-500 font-semibold" htmlFor="availability">
          Include Out of Stock
        </label>
      </div>
    </div>
  );
}

export default SideCard