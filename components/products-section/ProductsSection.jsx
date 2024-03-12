"use client";
import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import SectionHeader from "../section-header/SectionHeader";
import SingleProductCard from "./SingleProductCard";

const ProductsSection = () => {
  const { data: allProducts, isLoading: isProductsLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get(
        "https://raw.githubusercontent.com/khalek-repliq/Secure_Home_Next_Project/main/DummyData/products/products.json"
      );
      return res.data;
    },
  });
  return (
    <div>
      {/* Page Header  */}
      <SectionHeader>Products for Buy</SectionHeader>
      {/* Main product  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 ">
        {isProductsLoading ? (
          <p>Loading...</p>
        ) : (
          allProducts
            .slice(0, 6)
            ?.map((product) => (
              <SingleProductCard key={product.id} product={product} />
            ))
        )}
      </div>
    </div>
  );
};

export default ProductsSection;
