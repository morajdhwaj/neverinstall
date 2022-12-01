import React from "react";

const BrowserPage = () => {
  return (
    <div className="mt-80">
      <div className="text-center text-5xl font-bold space-y-5 bg-gradient-to-r from-blue-500 to-blue-400 text-transparent bg-clip-text">
        <h2>Your browser is the new</h2>
        <h2> oprating system</h2>
      </div>
      <div className="rounded-xl mt-20 p-3 bg-gray-600">
        {/* <video
          src="/Banner2.mp4"
          height={100}
          width={100}
          className="h-40 w-40"
        /> */}
        <video autoPlay loop muted src="/Banner2.mp4" type="video/mp4" className="rounded-xl " />
        
      {/* <video autoPlay style={{ width: '500px', height: '500px' }}>
        <source src="/Banner2.mp4" />
      </video> */}
      </div>
    </div>
  );
};

export default BrowserPage;
