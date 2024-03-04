"use client";

import React from "react";
// import productsData from "@/DummyData/products/products.json";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import SectionHeader from "../section-header/SectionHeader";
// import { useQuery } from "react-query";

const ProductsSection = () => {
  const { data: allProducts } = useQuery({
    queryKey: ["allProducts"],
    queryFn: async () => {
      const res = await axios.get(
        "https://raw.githubusercontent.com/khalek-repliq/Secure_Home_Next_Project/main/DummyData/products/products.json"
      );
      return res.data;
    },
  });
  console.log(allProducts);
  return (
    <div>
      {/* Page Header  */}
      <SectionHeader>Products for Buy</SectionHeader>
    </div>
  );
};

export default ProductsSection;
