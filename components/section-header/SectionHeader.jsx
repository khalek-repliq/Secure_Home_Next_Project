import React from "react";

const SectionHeader = ({ children }) => {
  return (
    <div className="flex items-center justify-center py-4 md:py-10">
      <div className=" relative pb-5">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase before:block before:w-full before:bg-gray-600 before:h-[1px] before:bottom-0 before:absolute">
          {children}
        </h2>
      </div>
    </div>
  );
};

export default SectionHeader;
