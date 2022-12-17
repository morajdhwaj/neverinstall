import Image from "next/image";
import React from "react";

const ChangewayPage = () => {
  return (
    <div className="mt-52 max-w-6xl m-auto flex">
      <div className="w-1/2 flex flex-col justify-end px-10 space-y-10  pt-10 pl-20 pb-5">
        <div className="text-5xl font-bold space-y-3 bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text">
          <h2>Change the</h2>
          <h2>way you run</h2>
          <h2 className="">apps</h2>
        </div>
        <div className="text-xl font-medium text-slate-200 ">
          <p>
            Neverinstall elevates your browsing experience, letting you cruise
            through websites such as YouTube, Facebook, and Amazon with speeds
            of up to 1 Gbps.
          </p>
        </div>
        <div className="text-xl font-medium bg-gradient-to-r from-emerald-300 to-pink-200 bg-clip-text text-transparent">
          <div className="">
            <button className="text-black font-normal text-sm bg-gradient-to-r rounded-2xl from-yellow-400 to-amber-500 py-3 px-16">
              Try this apps for free
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2 ">
        <Image
          src="/appsDark.png"
          alt=" "
          height="800"
          width="800"
          className="p-5 pt-10"
        />
      </div>
    </div>
  );
};

export default ChangewayPage;
