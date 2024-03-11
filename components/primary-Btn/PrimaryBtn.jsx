import Link from "next/link";
import React from "react";

const PrimaryBtn = ({ children, direction }) => {
  return (
    <Link
      className="px-4 py-2 md:px-3 md:py-2 text-xs md:text-sm lg:px-6 lg:py-3 inline-block rounded-full primary_btn_bg"
      href={direction}
    >
      {children}
    </Link>
  );
};

export default PrimaryBtn;
