import React from "react";
import Product from "./Product";
import { useFilter } from "../../context/FilterContext";
export default function ProductList({ products, filter }) {
  const { sortBy } = useFilter();
  let filteredProducts =
    filter === "TẤT CẢ"
      ? products
      : products.filter((product) => product.name.includes(filter));

  // console.log(sortBy);

  if (sortBy === "ASC") {
    filteredProducts = filteredProducts.sort(
      (a, b) => a.currentPrice - b.currentPrice
    );
  } else if (sortBy === "DESC") {
    filteredProducts = filteredProducts.sort(
      (a, b) => b.currentPrice - a.currentPrice
    );
  }

  return (
    <>
      <div className="home-product">
        <div className="grid__row">
          {filteredProducts.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
