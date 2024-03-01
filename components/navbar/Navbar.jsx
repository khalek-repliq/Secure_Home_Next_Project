"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const navStyle = {
  active: "bg-[#27bfb3] text-white  px-3 py-1 rounded-sm",
  default: "px-3 py-1 rounded-sm",
};

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
    name: "About Us",
    path: "/aboutUs",
  },
  {
    id: 5,
    name: "Contact Us",
    path: "/contactUs",
  },
];

const Navbar = () => {
  const pathName = usePathname();

  const handleNavbarStyle = (itemPath) =>
    itemPath === pathName ? true : false;

  return (
    <div className=" mb-6 shadow-lg py-5">
      <div className="flex justify-between ">
        {/* logo area */}
        <div>
          <div>
            <Link className="flex items-center" href="/">
              {" "}
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
                <span>Secure</span>
                <span>Home</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Items area */}
        <div className=" leading-[2.5]">
          <ul className=" flex items-center space-x-8 font-medium">
            {navItem.map((item) => (
              <li key={item.id}>
                <Link
                  className={
                    handleNavbarStyle(item.path)
                      ? navStyle.active
                      : navStyle.default
                  }
                  href={item.path}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
