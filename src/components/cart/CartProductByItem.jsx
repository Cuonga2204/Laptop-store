import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
export default function CartProductByItem({ product }) {
  return (
    <>
      <li class="cart-product-by-item">
        <div class="cart-header__name">
          <img src={product.imageUrl} alt="" />
          {product.name}
        </div>
        <div class="cart-header__price">{product.currentPrice}</div>
        <div class="cart-header__quantity">
          <div class="product-view-quantity-input">
            <button class="product-view-quantity-btn">
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <input type="text" value="1" class="product-view-quantity__input" />
            <button class="product-view-quantity-btn">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
        <div class="cart-header__cart-header__price-total">4.000.000</div>
        <div class="cart-header__operation">
          <FontAwesomeIcon
            icon={faTrash}
            className="cart-header__operation-icon"
          />
        </div>
      </li>
    </>
  );
}
