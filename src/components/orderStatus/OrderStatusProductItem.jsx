import React from "react";

export default function OrderStatusProductItem({ product }) {
  return (
    <>
      <li className="product-order-item">
        <div className="product-order-infor">
          <img src={product.imageUrl} alt="" />
          <span class="product-order-infor__name">{product.name}</span>
          <div className="product-order-quantity">
            <span>x1</span>
          </div>
          <div class="product-order-price">
            <div class="product-order-price__current">
              {product.currentPrice}
            </div>
            <span class="product-order-price__old">{product.oldPrice} </span>
          </div>
        </div>
        <div class="product-order-price-total">
          <span>Thành tiền :</span>
          <div class="product-order-price-total__current">10.790.000đ</div>
        </div>
        <div class="product-order-btn">
          <button class="btn btn-cancel"> Huỷ</button>
          <button class="btn btn-contact"> Xem chi tiết đơn hàng</button>
        </div>
      </li>
    </>
  );
}
