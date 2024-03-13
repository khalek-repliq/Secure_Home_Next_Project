import React from "react";

const CardSkeleton = () => {
  return (
    <div className="animate-pulse p-4">
      <div className="bg-gray-200 h-48 w-full"></div>
      <div className="mt-4 space-y-2">
        <div className="h-4 bg-gray-200 w-3/4"></div>
        <div className="h-4 bg-gray-200 w-1/2"></div>
        <div className="h-4 bg-gray-200 w-2/3"></div>
        <div className="h-4 bg-gray-200 w-3/4"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
