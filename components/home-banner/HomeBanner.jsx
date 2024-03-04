import React from "react";
import bannerImage from "@/assets/secure_home/main_banner.webp";
import BannerBackground from "../banner-backround/BannerBackground";
import PrimaryBtn from "../primary-Btn/PrimaryBtn";

const HomeBanner = () => {
  return (
    <div className="relative">
      {/* Background Image Component here */}
      <BannerBackground bannerImage={bannerImage} />
      <div className="absolute  px-3 md:px-5 lg:px-10 flex items-center top-0 text-white sm:w-1/2 h-full">
        <div className="">
          {/* Main title */}
          <h1 className="font-bold text-xl md:text-2xl lg:text-6xl text-center lg:text-left">
            Leading Home Automation System Provider
          </h1>
          {/* More content */}
          <div className="md:my-5 text-center lg:text-left">
            <PrimaryBtn direction={"/"}>Browse Products</PrimaryBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
