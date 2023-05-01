import Link from 'next/link';
import React from 'react'
import { useState } from 'react'


type NavDropdown = {
  buttonText: string;
  dropItems: string[];
};


const NavDropdown = (props:NavDropdown) => {

  return (
    <div className="group">
      <button className="target:border-2 nav-btn">
        {props.buttonText}
      </button>
      <div
        className={`hidden pt-1 transition-all  ease-in-out absolute z-10  group-hover:block hover:block `}
      >
        <ul className="w-fit h-fit py-5 xl:px-8 bg-white border-2 rounded-lg hidden xl:block ">
          {props.dropItems.map((item) => {
            return (
              <li
                key={item}
                className="py-2 px-3 nav-btn"
              >
                <Link href="/">{item}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default NavDropdown