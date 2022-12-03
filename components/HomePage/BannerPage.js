import Image from "next/image";
import React from "react";

const BannerPage = () => {
  return (
    <div className="flex   pt-48">
      <div className="w-1/2   space-y-10 pl-10">
        <div className="text-6xl font-bold space-y-5 bg-gradient-to-r from-yellow-500 to-pink-500 text-transparent bg-clip-text  ">
          <h2>Supercharge</h2>
          <h2>
            your apps <span>⚡️</span>{" "}
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
      <div className="w-1/2  ">
        <div
          style={{
            zIndex: -1,
            position: "fixed",
            width: "100vh",
            height: "100vh",
          }}
        ></div>
        <Image
          src="/banner1.png"
          alt=" "
          height="100"
          width="200"
          x
          className=" h-full w-full"
          // layout="fill"
          // objectFit="cover"
        />
      </div>
    </div>
  );
};

export default BannerPage;
