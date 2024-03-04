import React from "react";

const ProductCard = ({ allProducts }) => {
  console.log(allProducts);
  return (
    <div>
      {allProducts?.map((product) => (
        <h3 key={product.id} className="text-3xl">
          {product?.name}
        </h3>
      ))}
    </div>
  );
};

export default ProductCard;
