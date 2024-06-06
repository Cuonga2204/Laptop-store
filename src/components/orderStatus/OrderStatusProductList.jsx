import React from "react";

import OrderStatusProductItem from "./OrderStatusProductItem";
export default function OrderStatusProductList({ products }) {
  return (
    <>
      <ul className="product-order-list">
        {products.map((product, index) => (
          <OrderStatusProductItem product={product} index={index} />
        ))}
      </ul>
    </>
  );
}
