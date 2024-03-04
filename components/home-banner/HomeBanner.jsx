import React from "react";
import bannerImage from "@/assets/secure_home/main_banner.webp";
import BannerBackground from "../banner-backround/BannerBackground";
import PrimaryBtn from "../primary-Btn/PrimaryBtn";

const HomeBanner = () => {
  return (
    <div className="relative">
      {/* Background Image Component here */}
      <BannerBackground bannerImage={bannerImage}></BannerBackground>
      <div className="absolute md:px-10 flex items-center top-0 text-white md:w-1/2 h-full">
        <div>
          {/* Main title */}
          <h1 className="font-bold text-xl md:text-2xl lg:text-6xl leading-loose">
            Leading Home Automation System Provider
          </h1>
          {/* More content */}
          <div className="md:my-5">
            <PrimaryBtn direction={"/"}>Browse Products</PrimaryBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
