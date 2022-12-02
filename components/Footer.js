import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#1a1a28] flex w-full h-16  text-white text-xs">
      <div className="flex w-1/2 justify-between pl-5 items-center">
        <li>Privacy</li>
        <li>Terms of use</li>
        <li>Docs</li>
        <li>FAQs</li>
      </div>
      <div className="flex justify-around items-center  w-1/2">
        <Image
          src="/twitt.png"
          alt=""
          width="30"
          height="30"
          className=" bg-white bg-clip-content  "
        />
        <Image
          src="/discord.png"
          alt=""
          width="30"
          height="30"
          className=" bg-white"
        />
        <Image
          src="/reddit.png"
          alt=""
          width="30"
          height="30"
          className=" bg-white"
        />
        <Image
          src="/linked.png"
          alt=""
          width="30"
          height="30"
          className=" bg-white"
        />
        <Image
          src="/insta.png"
          alt=""
          width="30"
          height="30"
          className=" bg-white"
        />
        <Image
          src="/fB.png"
          alt=""
          width="30"
          height="30"
          className=" bg-white"
        />
        <h1 className="pr-10">Neverinstall Inc. 2022</h1>
      </div>
    </div>
  );
};

export default Footer;
