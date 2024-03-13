import React from "react";
import SecondaryBtn from "../secondary-Btn/SecondaryBtn";

const SectionHeader = ({ direction, btnText, title }) => {
  return (
    <div className="flex items-center justify-between pt-4 md:pt-6">
      <div>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
          {title}
        </h2>
      </div>
      <div>
        <SecondaryBtn direction={direction} title={btnText} />
      </div>
    </div>
  );
};

export default SectionHeader;
