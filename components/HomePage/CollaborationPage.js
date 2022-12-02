import React from "react";

const CollaborationPage = () => {
  return (
    <div className="mt-80 overflow-hidden" >
      <div className="text-center text-4xl font-bold space-y-5 bg-gradient-to-r from-green-300 to-blue-400 text-transparent bg-clip-text">
        <h2>Collaboration, like they are right here.</h2>
      </div>
      <div className="rounded-xl mt-20 p-3 bg-gray-600  shadow-emerald-400">
        <video
          autoPlay
          loop
          muted
          src="/collaborationVideo.mp4"
          type="video/mp4"
          className="rounded-xl "
        />
      </div>
      <div className="text-center text-4xl font-bold space-y-5 mt-20 bg-gradient-to-r from-green-300 to-blue-400 text-transparent bg-clip-text">
        <h2>Collaboration, like they are right here.</h2>
      </div>
    </div>
  );
};

export default CollaborationPage;
