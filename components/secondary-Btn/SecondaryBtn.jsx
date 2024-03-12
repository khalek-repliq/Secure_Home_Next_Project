import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

const SecondaryBtn = ({ direction, title }) => {
  return (
    <Link
      href={direction || "#"}
      className="inline-block primary_btn_bg px-5 py-2 rounded-md text-sm hover:bg-[#2a8a82] duration-150 transition-all"
    >
      {title}
    </Link>
  );
};

export default SecondaryBtn;
