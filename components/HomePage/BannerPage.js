import Image from "next/image";
import React from "react";

const BannerPage = () => {
  return (
    <div
      className="  py-48 h-full bg-cover bg-no-repeat  "
      style={{
        backgroundImage: `url(/bannerbg.png)`,
        backgroundPosition: `center`,
        backgroundSize: `70%`,
        backgroundRepeat: ` no-repeat`,
        // width: 1000,
        // height: "100",
      }}
    >
      <div className="flex ">
        <div className="w-2/3   space-y-10 ">
          <div className="text-6xl font-bold space-y-5 bg-gradient-to-r from-yellow-500 to-pink-500 text-transparent bg-clip-text pb-4  ">
            <h2>Supercharge</h2>
            <h2>
              your apps<span>⚡️</span>
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
              Get started for free.
            </button>
          </div>
        </div>
        <div className="  ">
          <Image
            src="/banner1.png"
            alt=" "
            // height="1000"
            // width="1000"
            className=" h-9  "
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
