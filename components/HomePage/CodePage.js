import React from "react";

const CodePage = () => {
  return (
    <div
      className="py-52 h-full w-full bg-cover "
      style={{
        backgroundImage: `url(/codebg.png)`,
        // width: "100",
        // height: "100",
      }}
    >
      <div className="flex max-w-6xl m-auto">
        <div className="w-3/5   rounded-3xl bg-gradient-to-br from-[#292a69] to-[#392f7d]">
          <div className="text-4xl font-bold pl-10 space-y-5 py-10">
            <h2 className="bg-gradient-to-r from-blue-300 to-pink-400 text-transparent bg-clip-text">
              Code fast,
            </h2>
            <h2 className="bg-gradient-to-r from-blue-300  text-transparent bg-clip-text">
              on-the-go.
            </h2>
          </div>
          <div className="  p-3 rounded-3xl">
            <video
              autoPlay
              toop
              muted
              src="/code.mp4 "
              className="rounded-3xl"
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col justify-end px-10 space-y-5 pl-20 pb-5">
          <div className="text-4xl font-bold ">
            <h2 className="bg-gradient-to-r from-slate-400 to-pink-200 text-transparent bg-clip-text">
              Truely coding, nothing else
            </h2>
          </div>
          <div className="text-xl font-medium text-slate-400 ">
            <p>
              Tired of seeing your computer screen freeze while coding?
              Neverinstall lets you run leading developer apps such as Android
              Studio and VS Code in the cloud.
            </p>
          </div>
          <div className="text-xl font-medium bg-gradient-to-r from-slate-400 to-pink-200 bg-clip-text text-transparent">
            <a>Try fast dev tools now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodePage;
