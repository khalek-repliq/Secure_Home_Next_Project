import Link from "next/link";
import React from "react";

const categories = [
  {
    id: 1,
    name: "Dimmer",
    path: "camera",
  },
  {
    id: 2,
    name: "Water Heater",
    path: "camera",
  },
  {
    id: 3,
    name: "CCTV Cameras",
    path: "camera",
  },
  {
    id: 4,
    name: "Thermostats",
    path: "camera",
  },
  {
    id: 5,
    name: "Smoke Detecting Alarms",
    path: "camera",
  },
  {
    id: 6,
    name: "Blind & Drape Openers",
    path: "camera",
  },
];

const page = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center py-5 md:py-7">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full ">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={"/"}
            className="bg-white  h-20 p-5 rounded-md shadow-md hover:text-gray-900 hover:bg-gray-100 text-gray-600 cursor-pointer"
          >
            <div>
              <h5 className="text-xl font-medium">{category.name}</h5>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
