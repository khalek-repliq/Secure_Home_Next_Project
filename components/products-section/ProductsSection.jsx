"use client";
import React from "react";
// import productsData from "@/DummyData/products/products.json";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import SectionHeader from "../section-header/SectionHeader";
import ProductCard from "../product-card/ProductCard";
// import { useQuery } from "react-query";

const ProductsSection = () => {
  const { data: allProducts, isLoading: productsLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get(
        "https://raw.githubusercontent.com/khalek-repliq/Secure_Home_Next_Project/main/DummyData/products/products.json"
      );
      return res.data;
    },
  });
  // console.log(allProducts);
  return (
    <div>
      {/* Page Header  */}
      <SectionHeader>Products for Buy</SectionHeader>
      {/* Main product  */}
      <div>
        {/* product card here */}
        <ProductCard
          allProducts={allProducts}
          productsLoading={productsLoading}
        />
      </div>
    </div>
  );
};

export default ProductsSection;
