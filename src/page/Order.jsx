import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import CartProductByList from "../components/cart/CartProductByList";
import { Link } from "react-router-dom";
import DEFAULT__PRODUCTS from "../mockData/DefaultProduct";
import ProductOrderList from "../components/order/ProductOrderList";
import CartHeader from "../components/cart/CartHeader";
import ProductOrderHeader from "../components/order/ProductOrderHeader";
import { useState } from "react";
import ModalSuccess from "../components/order/ModalSuccess";
export default function Order() {
  const [isModalSuccess, setIsModalSuccess] = useState(false);

  const products = [
    DEFAULT__PRODUCTS[0],
    DEFAULT__PRODUCTS[1],
    DEFAULT__PRODUCTS[2],
  ];
  return (
    <>
      <div className="container">
        <div className="grid">
          <div className="background-empty"></div>
          <h3 className=" Order-title">Thanh Toán</h3>
          <div className="inforOrder-cart inforOrder cart-product-by">
            <ProductOrderHeader />
            <ProductOrderList products={products} />
            <div class="cart-product-pay">
              <div class="cart-product-total">Tồng Tiền : </div>
              <div class="cart-product-total-price">13.000.000</div>
            </div>
          </div>
          <div className="inforOrder inforOrder-infor">
            <div className="inforOrder__header">
              <FontAwesomeIcon
                icon={faBox}
                className="inforOrder__header-icon"
              />
              <span className="inforOrder__header-title">
                Thông tin người nhận hàng
              </span>
            </div>
            <div className="customerInfor">
              <div className="customerInfor-name-phone">
                <input
                  className="input-infor input-infor_1-2"
                  type="text"
                  placeholder="Nhập họ và tên"
                />
                <input
                  className="input-infor input-infor_1-2"
                  type="text"
                  placeholder="Nhập số điện thoại"
                />
              </div>
              <input
                className="input-infor input-infor_1-0"
                type="text"
                placeholder="Nhập email không bắt buộc"
              />
            </div>
            <div className="customerAddress">
              <div className="customerAddress__header">
                <h2>Địa chỉ nhận hàng</h2>

                <input
                  className="input-infor input-infor_1-0"
                  type="text"
                  placeholder="Nhập địa chỉ của bạn"
                />
              </div>
            </div>
            <button
              className="btn btn-pay"
              onClick={() => setIsModalSuccess(!isModalSuccess)}
            >
              Thanh toán
            </button>
          </div>
        </div>
      </div>
      {isModalSuccess && <ModalSuccess />}

      {/* Thông báo đặt hàng thành công */}
    </>
  );
}
