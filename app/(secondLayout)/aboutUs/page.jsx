import PageHeader from "@/components/page-header/PageHeader";
import { MapPinIcon } from "@heroicons/react/20/solid";
import React from "react";

const aboutUs = () => {
  return (
    <div>
      <PageHeader
        title={"About Us"}
        subTitle={"Know more about our company and service."}
      />
      <div className="my-5 space-y-3">
        <h4 className="text-3xl">
          Company Name: <span className="text-[#27bfb3]">Secure Home</span>
        </h4>
      </div>

      <div className="my-5 space-y-3">
        <h4 className="text-xl md:text-2xl lg:text-3xl">Our Vision:</h4>
        <div>
          <p className="text-gray-600">
            At <span className="text-[#27bfb3] font-bold">Secure Home</span>,
            our vision is simple: to make every home safer and more secure with
            technology. We are dedicated to integrating cutting-edge solutions
            that empower homeowners with peace of mind. By staying at the
            forefront of innovation, we aim to redefine home security standards
            and create safer, smarter living environments for all.
          </p>
        </div>
      </div>

      <div className="my-5 space-y-3">
        <h4 className="text-xl md:text-2xl lg:text-3xl">Founded:</h4>
        <div>
          <p className="text-gray-600">2024 the company was established.</p>
        </div>
      </div>

      <div className="my-5 space-y-3">
        <h4 className="text-xl md:text-2xl lg:text-3xl">Location:</h4>
        <div>
          <p className="text-gray-600 flex items-center">
            <span>
              <MapPinIcon className="w-7 h-7" />
            </span>
            <span>Dhanmondi, Dhaka, Bangladesh.</span>
          </p>
        </div>
      </div>

      <div className="my-5 space-y-3">
        <h4 className="text-xl md:text-2xl lg:text-3xl">About Our Company:</h4>
        <div>
          <p className="text-gray-600 ">
            <span>
              At <span className="text-[#27bfb3] font-bold">Secure Home</span>,
              we are passionate about home security. Established- 2024, we are
              dedicated to providing top-quality products and services to ensure
              the safety and peace of mind of our customers. Based in Dhaka,
              Bangladesh, our team combines expertise with innovation to offer
              cutting-edge solutions tailored to meet your needs. Trust us to
              safeguard your home with the latest technology and unparalleled
              customer service.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default aboutUs;
