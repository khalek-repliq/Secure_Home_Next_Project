import React from "react";
import bannerImage from "@/assets/secure_home/main_banner.webp";
import BannerBackground from "../banner-backround/BannerBackground";
import PrimaryBtn from "../primary-Btn/PrimaryBtn";

const HomeBanner = () => {
  return (
    <div className="relative w-full h-[calc(100vh-200px)] md:h-full ">
      {/* Background Image Component here */}
      <BannerBackground bannerImage={bannerImage} />
      <div className="absolute px-3 md:px-5 lg:px-10 flex items-center w-full top-0 text-white bg-black h-full bg-opacity-20">
        <div className="flex flex-col space-y-3 md:space-y-5 w-full md:w-1/2">
          {/* Main title */}
          <h1 className="font-bold text-white text-2xl md:text-3xl lg:text-6xl text-left lg:text-left">
            Leading Home Automation System Provider
          </h1>
          {/* More content */}
          <div className="md:my-5 text-left lg:text-left">
            <PrimaryBtn direction={"/"}>Browse Products</PrimaryBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
