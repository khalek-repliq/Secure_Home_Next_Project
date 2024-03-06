import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-200 relative">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#27bfb3"
          fill-opacity="0.5"
          d="M0,256L80,240C160,224,320,192,480,154.7C640,117,800,75,960,58.7C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      {/* main content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 absolute top-0 left-0 px-3 md:px-5 lg:px-10 gap w-full h-full">
        <div className="col-span-1 flex flex-col justify-evenly py-5">
          <div>
            <Link className="flex items-center space-x-2" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
                />
              </svg>
              <div className="flex flex-col font-bold leading-none">
                <span className="text-xl">Secure Home</span>
              </div>
            </Link>
            <p className="text-sm my-2 text-gray-600">
              Secure your home with the latest and newest technology products.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <input
              className="text-sm px-3 py-3 rounded-md shadow-md"
              type="text"
              placeholder="Enter your email"
            />
            <input
              className="inline-block primary_btn_bg px-5 py-3 rounded-lg text-sm cursor-pointer shadow-md"
              type="submit"
              value="Subscribe"
            />
          </div>
        </div>

        <div className="col-span-2 border">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
