"use client";
import ProductCard from "@/components/product-card/ProductCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import Select from "react-select";

const categories = [
  {
    id: 1,
    name: "Dimmer",
    label: "Dimmer",
  },
  {
    id: 2,
    name: "Water heater",
    label: "Water heater",
  },
  {
    id: 3,
    name: "CCTV Cameras",
    label: "CCTV Cameras",
  },
  {
    id: 4,
    name: "Thermostats",
    label: "Thermostats",
  },
  {
    id: 5,
    name: "Smoke Detecting Alarms",
    label: "Smoke Detecting Alarms",
  },
  {
    id: 6,
    name: "Blind & Drape Openers",
    label: "Blind & Drape Openers",
  },
];


const customStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: state.isFocused ? "#f3f3f3" : "#fff",
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: state.isFocused ? "#f3f3f3" : "#fff",
    color: state.isFocused ? "blue" : "black", // Change color based on focus state
  }),
};

export default function ProductsPage() {
  const [selectCategory, setSelectCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const defaultCategory = categories.find(
    (category) => category.value === defaultValue
  );
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      axios
        .get(
          "https://raw.githubusercontent.com/khalek-repliq/Secure_Home_Next_Project/main/DummyData/products/products.json"
        )
        .then((res) => res.data),
  });

  useEffect(() => {
    if (!selectCategory) {
      setProducts(data);
    } else {
      const selectedProducts = data.filter(
        (product) => product.category === selectCategory.name
      );
      setProducts(selectedProducts);
    }
  }, [data, selectCategory]);

  const handleCategoryChange = (selectCategoryOpt) => {
    setSelectCategory(() => selectCategoryOpt);
  };

  return (
    <div>
      {/* Main product area */}
      <div>
        {/* Sort by category */}
        <div className="flex items-center justify-end drop-shadow-md ">
          <Select
            styles={customStyles}
            options={categories}
            value={selectCategory}
            onChange={handleCategoryChange}
            defaultValue={defaultCategory}
            isMulti={false}
          ></Select>
        </div>
        <ProductCard allProducts={products} productsLoading={isLoading} />
      </div>
    </div>
  );
}
