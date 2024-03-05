"use client";
import { useParams } from "next/navigation";

export default function ProductDetails() {
  const { id } = useParams();
  console.log(id);
  return <h1 className="text-3xl">Product Details Page.</h1>;
}
