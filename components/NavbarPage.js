import Image from "next/image";
import React from "react";

const NavbarPage = () => {
  return (
    <div className="bg-[#192645]  flex w-full h-16  text-white text-xs">
      <div className=" w-1/2  h-full flex ml-16 space-x-8 items-center text-xs">
        <Image
          src="/logo.svg"
          alt=" "
          height="100"
          width="200"
          className=" h-9 w-32"
        />
        <a>Bussiness Solution </a>
        <a>About us</a>
        <a>Plans</a>
        <a>Blog</a>
      </div>
      <div className="w-1/2 flex items-center justify-end mr-20 space-x-8 font-medium">
        <div te>
          <a>SIGN IN</a>
        </div>
        <div className="border bg-white text-black flex items-center rounded-lg shadow-sm shadow-white ">
          <button className=" px-12 space-x-1 py-3 ">SIGN UP FOR FREE</button>
        </div>
      </div>
    </div>
  );
};

export default NavbarPage;
