"use client";
import PageHeader from "@/components/page-header/PageHeader";
import ProductCard from "@/components/product-card/ProductCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function ProductsPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      axios
        .get(
          "https://raw.githubusercontent.com/khalek-repliq/Secure_Home_Next_Project/main/DummyData/products/products.json"
        )
        .then((res) => res.data),
  });

  return (
    <div>
      {/* Page header here */}

      {/* Main product area */}
      <div>
        <ProductCard allProducts={data} productsLoading={isLoading} />
      </div>
    </div>
  );
}
