import React from "react";

const Productivity = () => {
  return (
    <div
      className="py-52 h-full w-full bg-cover "
      style={{
        backgroundImage: `url(/productbg.png)`,
        // width: "100",
        // height: "100",
      }}
    >
      <div className="flex max-w-6xl m-auto">
        <div className="w-3/5   rounded-3xl bg-gradient-to-br from-[#513b3d] to-[#895245]">
          <div className="text-4xl font-bold pl-10 space-y-5 py-10">
            <h2 className="bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text">
              Productivity made
            </h2>
            <h2 className="bg-gradient-to-r from-orange-300  text-transparent bg-clip-text">
              more productive.
            </h2>
          </div>
          <div className="  p-3 rounded-3xl">
            <video
              autoPlay
              toop
              muted
              src="/ProductivityVideo.mp4 "
              className="rounded-3xl"
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col justify-end px-10 space-y-5 pl-20 pb-5">
          <div className="text-4xl font-bold ">
            <h2 className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text">
              Your tools. Buffed up and swole.
            </h2>
          </div>
          <div className="text-xl font-medium text-slate-400 ">
            <p>
              With Neverinstall, you can run Slack, Telegram, and Discord
              seamlessly, without halting a vital conversation, community
              outreach, or business meeting. Ever.
            </p>
          </div>
          <div className="text-xl font-medium bg-gradient-to-r from-orange-300 to-red-200 bg-clip-text text-transparent">
            <a>Boost your productivity now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productivity;
