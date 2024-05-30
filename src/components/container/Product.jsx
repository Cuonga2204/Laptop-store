import React from "react";
import ProductImage from "./ProductImage";
import ProductConfig from "./ProductConfig";
import ProductInfo from "./ProductInfo";
import AddProduct from "./AddProduct";

export default function Product({ product }) {
  return (
    <>
      <div className="grid__row-column-9-3">
        <ProductImage
          imageUrl={product.imageUrl}
          backgroundUrl={product.backgroundUrl}
        />
        <ProductInfo
          name={product.name}
          currentPrice={product.currentPrice}
          oldPrice={product.oldPrice}
        />
        <ProductConfig config={product.config} />
        <AddProduct />
      </div>
    </>
  );
}
