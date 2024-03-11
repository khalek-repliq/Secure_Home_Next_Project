import Image from "next/image";
import React from "react";

const BannerBackground = ({ bannerImage, children }) => {
  return (
    <>
      <Image
        className="h-full"
        src={bannerImage}
        alt="Main banner image"
        quality={100}
        style={{
          objectFit: "cover",
          objectPosition: "center",
          width: "100%",
        }}
        priority
      ></Image>
      {children}
    </>
  );
};

export default BannerBackground;
