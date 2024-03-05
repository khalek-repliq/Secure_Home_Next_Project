import React from "react";

const PageHeader = ({ children }) => {
  return (
    <div className="relative">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#27bfb3"
          fill-opacity=".3"
          d="M0,256L80,218.7C160,181,320,107,480,90.7C640,75,800,117,960,112C1120,107,1280,53,1360,26.7L1440,0L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
      <div
        style={{ transform: "translate(-50%, -50%)" }}
        className="absolute top-1/2 left-1/2 flex flex-col items-center"
      >
        <h5 className="text-2xl md:text-3xl font-semibold  ">{children}</h5>
        <p className="text-sm md:text-base text-center text-gray-600 ">
          Choose your desire product for secure your home.
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
