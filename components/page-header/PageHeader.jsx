import React from "react";

const PageHeader = ({ title, subTitle }) => {
  return (
    <div className=" md:flex flex-col items-center text-center py-5 ">
      <div className="relative inline-block">
        <h5 className="text-2xl md:text-3xl font-medium md:font-semibold  before:block before:w-full before:bg-gray-600 before:h-[1px] before:bottom-0 before:absolute">
          {title}
        </h5>
      </div>
      <p className="text-sm md:text-base text-center text-gray-600 ">
        {subTitle}
      </p>
    </div>
  );
};

export default PageHeader;
