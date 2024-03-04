import Link from "next/link";
import React from "react";

const PrimaryBtn = ({ children, direction }) => {
  return (
    <Link
      className="px-6 py-3 inline-block rounded-full primary_btn_bg"
      href={direction}
    >
      {children}
    </Link>
  );
};

export default PrimaryBtn;
