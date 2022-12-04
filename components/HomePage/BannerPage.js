import Image from "next/image";
import React from "react";

const BannerPage = () => {
  return (
    <div className="flex   pt-48">
      <div className="w-1/2   space-y-10 pl-36">
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
      <div></div>
      <div>
        <div class="wrap w-5/6 mx-auto">
          <div class="grid grid-cols-10 ">
            <div className="row-span-full col-start-1 col-span-6 self-center">
              <Image
                src="/heroimageBars.png"
                height="100"
                width="1000"
                alt="Banner"
              />
            </div>
            <div className="row-span-full col-span-8 col-end-11 self-center p-4 text-white  rounded-lg">
              <Image
                src="/banner1.png"
                height="1000"
                width="10000"
                alt="Banner"
              />
            </div>
          </div>
        </div>

        {/* <Image
          src="/heroimageBars.png"
          alt=" "
          height="1000"
          width="200"
          z-index="10"
          position="absolute"
          margin-left="100px"
          margin-top="100px"
          // className="object-cover h-48 w-96"
          // layout="fill"
          // objectFit="cover"
          // style={{ zIndex: "3" }}
        /> */}
        <div>
          {/* <Image
            src="/banner1.png"
            alt=" "
            height="1000"
            width="2000"
            z-index="2"
            position="absolute"
            margin-left="100px"
            margin-top="100px"
            // className=" h-max w-full "
            // layout=""
            // objectFit="cover"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
