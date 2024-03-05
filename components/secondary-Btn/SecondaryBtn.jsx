import Link from "next/link";
import React from "react";

const SecondaryBtn = ({ direction, title }) => {
  return (
    <Link
      href={direction}
      className="inline-block primary_btn_bg px-3 py-1 rounded-full"
    >
      {title}
    </Link>
  );
};

export default SecondaryBtn;
