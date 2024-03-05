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
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Product Image Area */}
            <div>
              <div className="border w-96 h-96">
                <Image
                  src={product?.image}
                  alt="Product Image"
                  width={350}
                  height={300}
                />
              </div>
            </div>
            {/* Product Specification Content */}
            <div>
              <div>
                <h4 className="text-4xl">{product?.title}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
