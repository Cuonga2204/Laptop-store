import React from "react";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
export default function AddProduct({ product }) {
  const { addToCart } = useContext(CartContext);
  return (
    <>
      <div className="add-product">
        <button className="btn add-product-buy">Mua ngay</button>
        <button
          className="btn add-product-cart"
          onClick={() => addToCart(product)}
        >
          Thêm vào giỏ hàng
        </button>
      </div>
    </>
  );
}
