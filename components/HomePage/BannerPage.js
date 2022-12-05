import Image from "next/image";
import React from "react";

const BannerPage = () => {
  return (
    <div
      className="flex bg-cover"
      style={{
        backgroundImage: `url(/heroimageBars.png)`,
      }}
    >
      <div className="w-1/2 pt-32  space-y-10 ">
        <div className="text-6xl font-bold space-y-5 bg-gradient-to-r from-yellow-500 to-pink-500 text-transparent bg-clip-text  ">
          <h2>Supercharge</h2>
          <h2>
            your apps <span>⚡️</span>
          </h2>
        </div>

        <div className="max-w-md text-slate-300 ">
          <p className=" text-3xl">
            Neverinstall supercharges your favorite apps with lightning-fast
            internet speeds and powerful computing.
          </p>
        </div>
        <div className="">
          <button className="bg-gradient-to-r rounded-2xl from-yellow-400 to-amber-500 py-3 px-16">
            Get started for free
          </button>
        </div>
      </div>
      <div className="w-1/2 pt-48 ">
        <Image
          src="/banner1.png"
          alt="loading........................... "
          height="550"
          width="2000"
        />
      </div>
    </div>
  );
};

export default BannerPage;
