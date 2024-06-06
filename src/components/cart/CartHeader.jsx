import React from "react";

export default function CartHeader() {
  return (
    <>
      <div class="cart-header ">
        <div class="cart-header__name">Sản Phẩm</div>
        <div class="cart-header__price">Đơn Giá</div>
        <div class="cart-header__quantity">Số Lượng</div>
        <div class="cart-header__cart-header__price-total">Số Tiền</div>
        <div class="cart-header__operation">Thao Tác</div>
      </div>
    </>
  );
}
