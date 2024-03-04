import React from "react";

const SectionHeader = ({ children }) => {
  return (
    <div className="flex items-center justify-center md:py-10">
      <div className=" relative pb-5">
        <h2 className="text-3xl font-medium uppercase before:block before:w-full before:bg-gray-600 before:h-[1px] before:bottom-0 before:absolute">
          {children}
        </h2>
      </div>
    </div>
  );
};

export default SectionHeader;
