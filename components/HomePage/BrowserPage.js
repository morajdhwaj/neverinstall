import React from "react";

const BrowserPage = () => {
  return (
    <>
      <div className="mt-80  h-full w-full">
        <div className="text-center text-5xl font-bold space-y-5 bg-gradient-to-r from-blue-500 to-cyan-700 text-transparent bg-clip-text">
          <h2>Your browser is the new</h2>
          <h2> operating system</h2>
        </div>
        <div className="h-full w-full my-20 px-3 py-3 bg-gray-400 rounded-xl">
          <div className="">
            <video
              src="/Banner2.mp4"
              autoPlay
              // style={{ width: "auto", height: "auto" }}
              className="rounded-xl"
            ></video>
          </div>
        </div>
      </div>

      <div className=" flex justify-between my-20 s ">
        <div className=" w-2/3 pt-14 pb-3 rounded-t-3xl px-4 bg-[#191368] ">
          <div className="pb-10 font-semibold ">
            <p className="text-cyan-500 text-6xl ">Code fast,</p>
            <br />
            <p className="text-gray-300 text-5xl ">on-the-go.</p>
          </div>
          <div className="">
            <video src="/Banner2.mp4" className="rounded-xl"></video>
          </div>
        </div>
        <div className="px-10  w-1/3  items-end">
          <div className="text-4xl text-blue-800">
            <p>
              Truly coding,
              <br /> nothing else.
            </p>
          </div>
          <div className="text-2xl text-gray-300 mt-5">
            <p>
              Tired of seeing your computer screen freeze while coding?
              Neverinstall lets you run leading developer apps such as Android
              Studio and VS Code in the cloud.
            </p>
          </div>
          <div className="text-blue-600 mt-2">
            <p>Try fast dev tools now</p>
          </div>
        </div>
      </div>

      <div className="flex mt-44 ">
        <div className="w-1/3 mr-16 ">
          <div className="text-5xl text-cyan-500 font-semibold ">
            <p>
              Boost your
              <br /> browsers.
            </p>
          </div>
          <div className="text-3xl text-gray-300 py-6 ">
            <p>
              Neverinstall elevates your browsing experience, letting you cruise
              through websites such as YouTube, Facebook, and Amazon with speeds
              of up to 1 Gbps.
            </p>
          </div>
          <div className="text-cyan-500 text-xl ">
            <p>Try fast browsing now</p>
          </div>
        </div>
        <div className="w-2/3 pt-14 bg-[#191368] px-5 pb-5 rounded-xl">
          <div className="font-semibold">
            <p className="text-6xl  text-cyan-700">Browse at</p>
            <br />
            <p className="text-6xl pb-10 text-gray-300">upto 2Gbps.</p>
          </div>
          <video src="/Banner2.mp4" className="rounded-xl"></video>
        </div>
      </div>

      <div className="mt-40 ">
        <div className="mb-16 font-semibold text-5xl   text-cyan-600 text-center">
          <h1>Collaboration, like they are right here. </h1>
        </div>
        <div className="py-5 px-5 rounded-3xl bg-emerald-600">
          <video src="/Banner2.mp4" className="rounded-3xl"></video>
        </div>
        <div className="text-center  mt-14">
          <div className="text-7xl text-cyan-600  w-100 font-semibold">
            <p>
              Together equals real-
              <br />
              time.
            </p>
          </div>
          <div className=" text-gray-300 text-2xl my-10">
            <p>
              Code together, create something, co-browse, or co-watch your
              <br />
              favorite movies. Share your workspace and use applications with
              <br />
              your team from anywhere, anytime.
            </p>
          </div>
          <div className="text-cyan-600 text-2xl ">
            <p>Try for free</p>
          </div>
        </div>
      </div>

      <div className=" flex justify-between my-20 s ">
        <div className=" w-2/3 pt-14 pb-3 rounded-t-3xl px-4 bg-[#463d30] ">
          <div className="pb-10 font-semibold ">
            <p className="text-yellow-500 text-6xl ">Productivity made</p>
            <br />
            <p className="text-yellow-100 text-5xl ">more productive.</p>
          </div>
          <div className="">
            <video src="/Banner2.mp4" className="rounded-xl"></video>
          </div>
        </div>
        <div className="px-10  w-1/3  items-end">
          <div className="text-4xl text-yellow-500 font-semibold ">
            <p>
              Your tools.
              <br /> Buffed up and
              <br /> swole.
            </p>
          </div>
          <div className="text-2xl text-gray-300 mt-5">
            <p>
              With Neverinstall, you can run Slack, Telegram, and Discord
              seamlessly, without halting a vital conversation, community
              outreach, or business meeting. Ever.
            </p>
          </div>
          <div className="text-yellow-500 mt-2">
            <p>Boost your productivity now</p>
          </div>
        </div>
      </div>

      <div className="flex mt-44 ">
        <div className="w-1/3 mr-16 ">
          <div className="text-5xl text-cyan-500 font-semibold ">
            <p>
              Creativity
              <br /> on the go.
            </p>
          </div>
          <div className="text-3xl text-gray-300 py-6 ">
            <p>
              Trying to find a way to run design apps that your computer can’t
              handle? Neverinstall lets you work with leading design tools,
              delivering a native experience and fast rendering speeds.
            </p>
          </div>
          <div className="text-cyan-500 text-xl ">
            <p>Try fast rendering now</p>
          </div>
        </div>
        <div className="w-2/3 pt-14 bg-[#171733] px-5 pb-5 rounded-xl">
          <div className="font-semibold">
            <p className="text-6xl  text-cyan-700">Designing is now</p>
            <br />
            <p className="text-6xl pb-10 text-gray-300">easier than ever.</p>
          </div>
          <video src="/Banner2.mp4" className="rounded-xl"></video>
        </div>
      </div>
    </>
  );
};

export default BrowserPage;
