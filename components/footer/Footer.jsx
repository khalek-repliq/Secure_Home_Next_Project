import Link from "next/link";
import React from "react";

const services = [
  {
    id: 1,
    name: "Reparation",
  },
  {
    id: 2,
    name: "Installation",
  },
  {
    id: 3,
    name: "Consultation",
  },
  {
    id: 4,
    name: "AMC",
  },
];

const categories = [
  {
    id: 1,
    name: "Dimmer",
  },
  {
    id: 2,
    name: "Water Heater",
  },
  {
    id: 3,
    name: "CCTV Cameras",
  },
  {
    id: 4,
    name: "Thermostats",
  },
  {
    id: 5,
    name: "Smoke Detecting Alarms",
  },
  {
    id: 6,
    name: "Blind & Drape Openers",
  },
];

const pages = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Categories",
    path: "/categories",
  },
  {
    id: 3,
    name: "Products",
    path: "/products",
  },
  {
    id: 4,
    name: "About Us",
    path: "/aboutUs",
  },
  {
    id: 5,
    name: "Contact Us",
    path: "/contactUs",
  },
];

const Footer = () => {
  return (
    <div className="bg-slate-200 px-3 md:px-5 lg:px-10">
      {/* main content */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 w-full h-full ">
        <div className="col-span-1 flex flex-col justify-between py-6 ">
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
          {/* News latter area */}
          <div className="flex items-center gap-3">
            <input
              className="text-sm p-2 md:p-3 rounded-md shadow-md"
              type="text"
              placeholder="Enter your email"
            />
            <input
              className="inline-block primary_btn_bg px-3 md:px-5 py-2 md:py-3 rounded-lg text-sm cursor-pointer shadow-md"
              type="submit"
              value="Subscribe"
            />
          </div>
        </div>

        <div className="col-span-2 py-6 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-0">
            <div>
              <h6 className="text-xl font-bold mb-2 md:mb-4">Services</h6>
              <ul className="flex flex-col space-y-1 md:space-y-3">
                {services?.map((service) => (
                  <li
                    className="cursor-pointer text-gray-600 hover:text-black duration-200 transition-all text-sm mg:text-base"
                    key={service.id}
                  >
                    {service.name}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h6 className="text-xl font-bold mb-2 md:mb-4">Categories</h6>
              <ul className="flex flex-col space-y-1 md:space-y-3">
                {categories?.map((category) => (
                  <li
                    className="cursor-pointer text-gray-600 hover:text-black duration-200 transition-all text-sm mg:text-base"
                    key={category.id}
                  >
                    {category.name}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h6 className="text-xl font-bold mb-2 md:mb-4">Pages</h6>
              <ul className="flex flex-col space-y-1 md:space-y-3">
                {pages?.map((page) => (
                  <li
                    className="cursor-pointer text-gray-600 hover:text-black duration-200 transition-all text-sm mg:text-base"
                    key={page.id}
                  >
                    <Link href={page?.path}>{page.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid w-full border-t-[1px] h-20 border-white">
        <p className="place-self-center">@All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
