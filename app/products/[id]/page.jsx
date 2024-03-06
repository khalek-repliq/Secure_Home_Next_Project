"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function ProductDetails() {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      axios
        .get(
          "https://raw.githubusercontent.com/khalek-repliq/Secure_Home_Next_Project/main/DummyData/products/products.json"
        )
        .then((res) => res.data),
  });
  const product = data?.find((product) => product.id == id);
  return (
    <>
      <div>
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white p-10 rounded-2xl m-10">
            {/* Product Image Area */}
            <div className="flex  justify-end">
              <div className="w-3/4 h-auto">
                <Image
                  src={product?.image}
                  className="w-full h-full"
                  alt="Product Image"
                  width={350}
                  height={300}
                />
              </div>
            </div>
            {/* Product Specification Content */}
            <div className="mt-6 ">
              <div className="flex flex-col space-y-5 items-start">
                <h4 className="text-4xl">{product?.title}</h4>
                <p className="lg:text-xl">{product?.description}</p>
                <button className="border bg-blue-50 py-2 px-6">
                  Price: ${product.price}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
