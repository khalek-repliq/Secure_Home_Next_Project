import { useState } from "react";
import SecondaryBtn from "../secondary-Btn/SecondaryBtn";
import Image from "next/image";

const ProductCard = ({ allProducts, productsLoading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(allProducts.length / productsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handleSelectCart = (id) => {
    toast.success("Product Added to your cart");
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 ">
        {productsLoading ? (
          <p>Loading ...</p>
        ) : (
          currentProducts?.map((product) => (
            <div
              key={product?.id}
              className="border rounded-2xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] bg-white mb-5"
            >
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
                    <h5 className="text-xl font-medium  pr-1">
                      {product?.title}
                    </h5>
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
                      Price:{" "}
                      <span className="font-medium">${product?.price}</span>
                    </button>
                    <SecondaryBtn
                      direction={`/products/${product.id}`}
                      title={"Details"}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center space-x-2 mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded-md bg-blue-500 text-white"
        >
          &lt; Prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-3 py-1 rounded-md ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded-md bg-blue-500 text-white"
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
