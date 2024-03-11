import Image from "next/image";
import React from "react";
import SecondaryBtn from "../secondary-Btn/SecondaryBtn";

const ServiceCard = ({ service }) => {
  return (
    <div className="border rounded-xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] bg-white p-3 cursor-pointer">
      <div className="flex flex-col justify-between h-full">
        {/* Card Image */}
        <div className="w-full overflow-hidden mb-3">
          <Image
            src={service?.image}
            alt="service Image"
            className="h-full w-full object-contain object-center lg:h-full lg:w-full rounded-xl"
            width={640}
            height={480}
          />
        </div>
        {/* Card content */}
        <div className="flex flex-col gap-4 pt-3">
          <div className="flex flex-col  items-start">
            <h5 className="text-xl font-medium  pr-1">{service?.title}</h5>
            <p className="text-gray-600 text-sm">{service?.description}</p>
          </div>

          {/* Details button */}
          <div className="flex items-center justify-end">
            <SecondaryBtn
              direction={`/services/${service?.id}`}
              title={"Details"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
