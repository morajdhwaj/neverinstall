import Image from "next/image";
import React from "react";

const ChangewayPage = () => {
  return (
    <div>
      {" "}
      <div className="flex mt-32  ">
        <div className="w-1/2   space-y-10 pl-10">
          <div className="text-6xl font-bold space-y-5 bg-gradient-to-r from-yellow-500 to-pink-500 text-transparent bg-clip-text  ">
            <h2>Change the</h2>
            <h2>way you run</h2>
            <h2>apps.</h2>
          </div>

          <div className="max-w-md text-slate-400 ">
            <p className=" text-3xl">
              Experience apps like never before with lightning-fast speeds and
              superior lag-free performance right from a browser on any device!
            </p>
          </div>
          <div className="">
            <button className="bg-gradient-to-r rounded-2xl from-yellow-400 to-amber-500 py-3 px-16">
              try this apps for free
            </button>
          </div>
        </div>
        <div className="w-1/2  ">
          <Image
            src="/appsDark.png"
            alt=" "
            height="100"
            width="200"
            className=" h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ChangewayPage;
