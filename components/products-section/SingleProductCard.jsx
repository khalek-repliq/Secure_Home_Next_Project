import Image from "next/image";
import React from "react";
import SecondaryBtn from "../secondary-Btn/SecondaryBtn";

const SingleProductCard = ({ product }) => {
  return (
    <div className="border rounded-2xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] bg-white mb-5">
      <div className="flex flex-col justify-between h-full">
        {/* Card Image */}
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden lg:aspect-none group-hover:opacity-75 lg:h-80">
          <Image
            src={product?.image}
            alt="Product Image"
            className="h-full w-full object-contain object-center lg:h-full lg:w-full rounded-2xl"
            width={640}
            height={480}
          />
        </div>
        {/* Card content */}
        <div className="p-5 flex flex-col gap-4">
          <div className="flex  justify-between">
            <h5 className="text-xl font-medium  pr-1">{product?.title}</h5>
            {/* Select Fav Icon */}
            <div className="mt-1">
              <svg
                onClick={() => handleSelectCart(product.id)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </div>
          </div>

          {/* Price and Details button */}
          <div className="flex items-center justify-between">
            <button>
              Price: <span className="font-medium">${product?.price}</span>
            </button>
            <SecondaryBtn
              direction={`/products/${product.id}`}
              title={"Details"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
