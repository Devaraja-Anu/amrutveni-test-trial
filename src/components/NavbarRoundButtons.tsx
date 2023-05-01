import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

type roundButtons={
  image:string,
  path:string
}


const NavbarRoundButtons = ({image,path}:roundButtons) => {
  console.log(image)
  return (
    <div>
      <div>
        <button className="w-10 h-10 mx-3  rounded-full border-2 hover:border-gray-500 hover:scale-110 transition-all">
          <Link href={`/${path}`}>
            <Image
              className="object-cover px-2"
              src={`/${image}.png`}
              alt="icon"
              width={80}
              height={80}
            />
          </Link>
        </button>
      </div>
    </div>
  );
}

export default NavbarRoundButtons