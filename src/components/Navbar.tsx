import Link from "next/link";
import Image from "next/image";
import NavbarRoundButtons from "./NavbarRoundButtons";
import NavDropdown from "./NavDropdown";
import { useState } from "react";





const dropdownData = [
  { buttonText: "Home", dropDownItems: ["item 1", "item 2"] },
  {
    buttonText: "About Us",
    dropDownItems: ["location", "offices", "services"],
  },
  {
    buttonText: "Products",
    dropDownItems: ["New products", "popular", "offers"],
  },
  {
    buttonText: "Press Release",
    dropDownItems: ["Upcoming releases", "Reviews", "Changes"],
  },
  {
    buttonText: "Contact Us",
    dropDownItems: ["Headquarters", "Office", "Customer Care"],
  },
];

const Navbar = () => {

    const [minimized, setMinimized] = useState(true);



  return (
    <div className="w-full h-fit xl:h-20 shadow-md flex flex-col xl:flex-row justify-center ">
      <ul className="flex-centered justify-around  py-3">
        <li>
          <Image
            className="py-3"
            src={"/png files/company-logo.png"}
            width={100}
            height={100}
            alt="logo"
          />
        </li>

        <li>
          <NavbarRoundButtons image={"user"} />
        </li>
        <li>
          <NavbarRoundButtons image={"cart"} />
        </li>

        <div
          className="border-2 rounded-full p-2 mx-2 lg:hidden cursor-pointer hover:rounded-xl hover:border-gray-500"
          onClick={() => setMinimized(!minimized)}
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        <li>
          <button className="btn-blk mx-3 hidden lg:block">Shop Now</button>
        </li>

      </ul>
      <div
        className={` flex-col  lg:flex lg:flex-row justify-center items-center list-none py-5 ${
          minimized ? `hidden` : "flex"
        } `}
      >
        {dropdownData.map((item) => {
          return (
            <li key={item.buttonText}>
              <NavDropdown
                buttonText={item.buttonText}
                dropItems={item.dropDownItems}
              />
            </li>
          );
        })}
      </div>
      <div className="flex-centered lg:ml-10 mb-10 xl:mb-0">
        <div className="mx-2 flex-centered h-12 gap-2 border-2 rounded-xl focus-within:border-blue-400 mr-4 ">
          <input
            type="text"
            className="border-none  ml-2 my-1 focus:ring-0 w-full"
          />
          <button className="w-8 mx-2">
            <Image
              className="object-cover h-6 w-6 mr-3"
              src={"/search.png"}
              width={40}
              height={20}
              alt="search"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
