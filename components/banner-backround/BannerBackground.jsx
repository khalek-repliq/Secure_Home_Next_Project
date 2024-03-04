import Image from "next/image";
import React from "react";

const BannerBackground = ({ bannerImage, children }) => {
  return (
    <div>
      <Image
        src={bannerImage}
        alt="Main banner image"
        quality={100}
        style={{
          objectFit: "cover",
        }}
      ></Image>
      {children}
    </div>
  );
};

export default BannerBackground;
