import React from "react";

const CreativePage = () => {
  return (
    <div className="mt-52 flex">
      <div className="w-2/5 flex flex-col justify-end px-10 space-y-5 pl-20 pb-5">
        <div className="text-4xl font-bold ">
          <h2 className="bg-gradient-to-r from-emerald-400 to-pink-200 text-transparent bg-clip-text">
            Ctreativity on the go.
          </h2>
        </div>
        <div className="text-xl font-medium text-slate-200 ">
          <p>
          Trying to find a way to run design apps that your computer can’t handle? Neverinstall lets you work with leading design tools, delivering a native experience and fast rendering speeds.
          </p>
        </div>
        <div className="text-xl font-medium bg-gradient-to-r from-emerald-300 to-pink-200 bg-clip-text text-transparent">
          <a>Try fast rendering now</a>
        </div>
      </div>
      <div className="w-3/5   rounded-3xl bg-emerald-50 shadow-2xl shadow-emerald-400">
        <div className="text-4xl font-bold pl-10 space-y-5 py-10">
          <h2 className="bg-gradient-to-r from-emerald-500 to-pink-400 text-transparent bg-clip-text">
          Designing is now
          </h2>
          <h2 className="bg-gradient-to-r from-blue-300  text-transparent bg-clip-text">
          easier than ever.
          </h2>
        </div>
        <div className="  p-3 rounded-3xl">
          <video
            autoPlay
            loop
            muted
            src="/creative.mp4 "
            className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default CreativePage;
