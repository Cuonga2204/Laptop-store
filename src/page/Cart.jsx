import React from "react";
import CartHeader from "../components/cart/CartHeader";
import CartProductByList from "../components/cart/CartProductByList";
import DEFAULT__PRODUCTS from "../mockData/DefaultProduct";
import { Link } from "react-router-dom";
export default function Cart() {
  const products = [
    DEFAULT__PRODUCTS[0],
    DEFAULT__PRODUCTS[1],
    DEFAULT__PRODUCTS[2],
  ];
  return (
    <>
      <div className="container">
        <div className="grid">
          <h3 class="cart-title"> Danh Mục Sản Phẩm</h3>
          <CartHeader />
          <div className="cart-product-by">
            <CartProductByList products={products} />
            <div class="cart-product-pay">
              <div class="cart-product-total">Tồng Tiền : </div>
              <div class="cart-product-total-price">13.000.000</div>
              <Link to={"/order"}>
                <button class="btn btn-cart-pay"> Thanh toán</button>
              </Link>
            </div>
          </div>
        </div>
        <div class="background-bottom"></div>
      </div>
    </>
  );
}
