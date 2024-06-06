import React from "react";

export default function ProductOrderItem({ product }) {
  return (
    <>
      <li class="cart-product-by-item">
        <div class="cart-header__name">
          <img src={product.imageUrl} alt="" />
          {product.name}
        </div>
        <div class="cart-header__price order-list-product">
          {product.currentPrice}
        </div>
        <div className="product-order-quantity">
          <span>x1</span>
        </div>
        <div class="cart-header__cart-header__price-total">4.000.000</div>
      </li>
    </>
  );
}
