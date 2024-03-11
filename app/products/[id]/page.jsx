"use client";
import ProductCard from "@/components/product-card/ProductCard";
import SecondaryBtn from "@/components/secondary-Btn/SecondaryBtn";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";
import { toast } from "react-hot-toast";

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
  const relatedProducts = data?.filter(
    (item) => item.category === product.category
  );

  const handleAddToCart = () => {
    toast.success("Product Added");
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-10 rounded-2xl bg-white p-10">
        {/* Product Image Area */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full  h-auto">
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
          <div className="flex flex-col space-y-8 items-start">
            <h4 className="text-2xl md:text-4xl">{product?.title}</h4>
            <p className="lg:text-xl">{product?.description}</p>
            <table className="w-full md:w-2/3 flex flex-col gap-5">
              <tr className="flex w-full">
                <td className="w-1/2 font-bold text-gray-600">Price:</td>
                <td className="text-[#27bfb3] font-medium w-1/2">
                  ${product?.price}
                </td>
              </tr>
              <tr className="flex ">
                <td className="w-1/2 font-bold text-gray-600">Category: </td>
                <td className="font-medium">{product?.category}</td>
              </tr>
              <tr className="flex ">
                <td className="w-1/2  font-bold text-gray-600">Company: </td>
                <td className="font-medium">{product?.company}</td>
              </tr>
            </table>
            <div>
              <button
                onClick={handleAddToCart}
                className="inline-block primary_btn_bg px-5 py-2 rounded-lg text-sm"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-3">
        <h4 className="text-3xl">Related products</h4>
      </div>
      <div>
        <ProductCard
          allProducts={relatedProducts}
          productsLoading={isLoading}
        />
      </div>
    </div>
  );
}
