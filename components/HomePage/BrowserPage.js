import React from "react";

const BrowserPage = () => {
  return (
    <div
      className="h-full w-full bg-cover py-40 "
      style={{
        backgroundImage: `url(/codebg.png)`,
        // width: "100",
        // height: "100",
      }}
    >
      <div className="max-w-6xl m-auto  ">
        {" "}
        <div className="text-center text-5xl font-bold space-y-5 bg-gradient-to-r from-blue-500 to-blue-400 text-transparent bg-clip-text ">
          <h2>Your browser is the new</h2>
          <h2> operating system</h2>
        </div>
        <div className="rounded-xl mt-20 p-3 bg-gradient-to-tr from-[#162845] to-[#373a87]">
          {/* <video
          src="/Banner2.mp4"
          height={100}
          width={100}
          className="h-40 w-40"
        /> */}
          <video
            autoPlay
            loop
            muted
            src="/Banner2.mp4"
            type="video/mp4"
            className="rounded-xl  "
            height={1000}
            width={1200}
          />

          {/* <video autoPlay muted style={{ width: '1200px', height: '500px' }}>
        <source className="rounded-l-xl" src="/Banner2.mp4" />
      </video> */}
        </div>
      </div>
    </div>
  );
};

export default BrowserPage;
