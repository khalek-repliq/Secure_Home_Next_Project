import React from "react";

const categories = [
  {
    id: 1,
    name: "Dimmer",
  },
  {
    id: 2,
    name: "Water Heater",
  },
  {
    id: 3,
    name: "CCTV Cameras",
  },
  {
    id: 4,
    name: "Thermostats",
  },
  {
    id: 5,
    name: "Smoke Detecting Alarms",
  },
  {
    id: 6,
    name: "Blind & Drape Openers",
  },
];
const MegaMenu = ({ isOpen, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      style={{ transform: "translate(-50%)" }}
      className={`${
        isOpen ? "hidden md:block" : "hidden"
      } absolute top-[48px] left-1/2 w-2/3  z-10 duration-300 transition-all ease-in-out shadow-lg`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative h-[11px]"></div>

      <div className="grid gird-col-2 lg:grid-cols-3 gap-5 bg-white p-5 rounded-lg">
        {categories.map((category) => (
          <div key={category.id}>
            <h4 className="text-xl font-semibold cursor-pointer hover:bg-gray-100 duration-150 transition-all py-1 px-2 rounded-lg">
              {category.name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
