"use client";

import React from "react";
// import productsData from "@/DummyData/products/products.json";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
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
      <h1 className="text-4xl">Lorem ipsum dolor sit amet.</h1>
    </div>
  );
};

export default ProductsSection;
