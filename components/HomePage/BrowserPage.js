import React from "react";

const BrowserPage = () => {
  return (
    <div className="mt-80">
      <div className="text-center text-5xl font-bold space-y-5 bg-gradient-to-r from-blue-500 to-blue-400 text-transparent bg-clip-text">
        <h2>Your browser is the new</h2>
        <h2> oprating system</h2>
      </div>
      <div className="h-full w-full pl-20 rounded-xl">
        <div className="rounded-xl">
          <video
            src="/Banner2.mp4"
            autoPlay
            style={{ width: "1000px", height: "800px" }}
            className="rounded-xl"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default BrowserPage;
