import Link from "next/link";
import React from "react";

const SecondaryBtn = ({ direction, title }) => {
  return (
    <Link
      href={direction}
      className="inline-block primary_btn_bg px-5 py-2 rounded-lg text-sm"
    >
      {title}
    </Link>
  );
};

export default SecondaryBtn;
