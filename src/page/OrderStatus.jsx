import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faPen } from "@fortawesome/free-solid-svg-icons";
import OrderStatusProductList from "../components/orderStatus/OrderStatusProductList";
import DEFAULT__PRODUCTS from "../mockData/DefaultProduct";
import ProductOrderHeader from "../components/order/ProductOrderHeader";
import ProductOrderList from "../components/order/ProductOrderList";
import AddressCustomer from "../components/orderStatus/AddressCustomer";
import { useState } from "react";
export default function OrderStatus() {
  const products = [
    DEFAULT__PRODUCTS[0],
    DEFAULT__PRODUCTS[1],
    DEFAULT__PRODUCTS[2],
  ];
  const [orderDetail, setOrderDetail] = useState(false);

  // handleOrderDetailOn = () => {
  //   setOrderDetail(true);
  // };

  return (
    <>
      <div class="container">
        <div class="grid">
          <div class="grid__row">
            <div class="grid__row-column-2-4">
              <div class="account">
                <div class="base-icon">
                  <FontAwesomeIcon
                    icon={faCircleUser}
                    className="base-icon-account"
                  />
                </div>
                <div class="account-edit">
                  <span class="account-name">Cuonga2242002</span>
                  <div class="account-edit-infor">
                    <FontAwesomeIcon icon={faPen} />
                    {/* <i class="fa-solid fa-pen"></i> */}
                    <span>Chỉnh sửa hồ sơ</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid__row-column-9-6">
              <div class="product-header-status">
                <a href="" class="">
                  <span>Tất cả</span>
                </a>
                <a href="" class="">
                  <span>Chờ thanh toán</span>
                </a>
                <a href="" class="">
                  <span>Vận chuyển</span>
                </a>
                <a href="" class="">
                  <span>Chờ giao hàng</span>
                </a>
                <a href="" class="">
                  <span>Hoàn thành</span>
                </a>
              </div>
              <OrderStatusProductList products={products} />
            </div>
          </div>
        </div>
      </div>
      <div className="modal">
        <div className="modal__overlay"></div>
        <div className="modal-body-product-order">
          <AddressCustomer />
          <ProductOrderHeader />
          <ProductOrderList
            products={products}
            setOrderDetail={setOrderDetail}
          />
          <div class="cart-product-pay">
            <div class="cart-product-total">Tồng Tiền : </div>
            <div class="cart-product-total-price">13.000.000</div>
          </div>
        </div>
      </div>
      <div className="inforOrder-cart inforOrder cart-product-by"></div>
    </>
  );
}
