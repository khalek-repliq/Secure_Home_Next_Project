"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SecondaryBtn from "../secondary-Btn/SecondaryBtn";

const ProductCard = ({ allProducts, productsLoading }) => {
  const [select, setSelect] = useState(false);
  console.log(allProducts);
  return (
    <div>
      <div className="grid grid-cols-3 gap-5 mx-5 my-10">
        {productsLoading ? (
          <p>Loading ...</p>
        ) : (
          allProducts?.map((product) => (
            <div
              key={product?.id}
              className=" rounded-2xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] bg-white"
            >
              <div>
                {/* Card Image */}
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden lg:aspect-none group-hover:opacity-75 lg:h-90">
                  <Image
                    src={product?.image}
                    alt="Product Image"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded-2xl"
                    width={640}
                    height={480}
                  />
                </div>
                {/* Card content */}
                <div className="p-5">
                  <div className="flex  justify-between">
                    <h5 className="text-xl font-medium  pr-1">
                      {product?.title}
                    </h5>
                    {/* Select Fav Icon */}
                    <div className="mt-1">
                      {select ? (
                        <svg
                          onClick={() => setSelect(!select)}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6 cursor-pointer"
                        >
                          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                        </svg>
                      ) : (
                        <svg
                          onClick={() => setSelect(!select)}
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
                      )}
                    </div>
                  </div>

                  {/* Price and Details button */}
                  <div className="flex items-center justify-between my-2">
                    <button>
                      Price:{" "}
                      <span className="font-medium">${product?.price}</span>
                    </button>
                    <SecondaryBtn direction={"/"} title={"Details"} />
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductCard;
