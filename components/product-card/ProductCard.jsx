import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ allProducts, productsLoading }) => {
  console.log(allProducts);
  return (
    <div>
      <div>
        {productsLoading ? (
          <p>Loading ...</p>
        ) : (
          allProducts.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))
        )}
      </div>

      {/* Dummy content card */}
      <div className="grid grid-cols-3 gap-5 mt-10 border">
        {/* card */}
        <div className="bg-blue-200 my-10 p-5 rounded-2xl">
          <div>
            {/* Card Image */}
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <Image
                src="https://i.ibb.co/rvNsPtb/product-7.jpg"
                alt="Product Image"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full border-2"
                width={640}
                height={480}
              />
            </div>
            {/* Card content */}
            <div>
              <div>
                <h5 className="text-xl font-medium">
                  Luminous Temperature and Humidity meter
                </h5>
                {/* Select Fav Icon */}
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
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
              <div>
                <button className="">Price</button>
                <Link href="/">Details</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
