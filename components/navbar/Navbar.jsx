"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import MegaMenu from "./MegaMenu";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

// Navbar Items style here
const navStyle = {
  active:
    "bg-[#27bfb3] text-white  px-2 lg:px-4 py-1 lg:py-2 rounded-md text-sm flex items-center",
  default:
    "px-2 lg:px-4 py-1 lg:py-2 rounded-md hover:text-white hover:bg-[#27bfb3] duration-300 transition-all text-sm flex items-center",
};

// All navbar Items list here
const navItem = [
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
    name: "Services",
    path: "/services",
  },
  {
    id: 5,
    name: "About Us",
    path: "/aboutUs",
  },
  {
    id: 6,
    name: "Login",
    path: "/login",
  },
];

const Navbar = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);

  const handleNavbarStyle = (itemPath) =>
    itemPath === pathName ? true : false;

  return (
    <div className="shadow-lg py-3 px-3 md:px-5 lg:px-10  bg-gray-300 fixed top-0 z-50 w-full">
      <div className="flex justify-between ">
        {/* logo area */}
        <div>
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
          </div>
        </div>

        {/* Items area */}
        <div className="md:mt-2 lg:mt-0 md:leading-[2.5]">
          {/* Mobile hamburger menu icon */}
          <div className="md:hidden">
            {/* menu icon */}
            <div>
              {open ? (
                <svg
                  onClick={() => setOpen(!open)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mt-2 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  onClick={() => setOpen(!open)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mt-2 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </div>
            {/* mobile menu item list */}
            <ul
              className={`md:hidden items-center font-medium  w-full absolute  top-[64px] text-center space-y-5 transition-all duration-300 py-3 z-50 p-3 md:p-0 bg-white h-[calc(100vh-64px)] ${
                open ? "left-0" : "-left-full"
              }`}
            >
              {navItem.map((item) => (
                <li key={item.id}>
                  <Link
                    className={
                      handleNavbarStyle(item.path)
                        ? navStyle.active
                        : navStyle.default
                    }
                    href={item.path}
                    onClick={() => setOpen(!open)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <ul
            className={`hidden md:flex items-center space-x-3 lg:space-x-4 font-medium`}
          >
            {navItem.map((item, index) => (
              <li
                onMouseEnter={() => index === 1 && setIsCategoryMenuOpen(true)}
                onMouseLeave={() => index === 1 && setIsCategoryMenuOpen(false)}
                key={item.id}
              >
                <Link
                  className={
                    handleNavbarStyle(item.path)
                      ? navStyle.active
                      : navStyle.default
                  }
                  href={item.path}
                >
                  <span>{item.name}</span>
                  {item.id === 2 && (
                    <span>
                      <ChevronDownIcon className="h-5 w-5" />
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <MegaMenu
            isOpen={isCategoryMenuOpen}
            onMouseEnter={() => setIsCategoryMenuOpen(true)}
            onMouseLeave={() => setIsCategoryMenuOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
