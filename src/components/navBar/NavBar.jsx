import React from "react";
import Cart from "./Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircleUser,
  faFileInvoiceDollar,
  faFileLines,
  faGamepad,
  faLaptop,
  faLaptopCode,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import HeaderUserMenu from "./HeaderUserMenu";

const HeaderLogo = () => {
  return (
    <div className="header-logo">
      <img src="/img/Logo3.png" className="header__logo-img" alt="" />
    </div>
  );
};

// Component con HeaderSearchHistory
const HeaderSearchHistory = () => {
  return (
    <div className="header-search-history">
      <h3 className="header-search-history__heading">Lịch sử tìm kiếm</h3>
      <ul className="header-search-history-list">
        <li className="header-search-history-item">
          <a href="/" className="">
            Laptop gamming
          </a>
        </li>
        <li className="header-search-history-item">
          <a href="/" className="">
            Laptop Văn phòng
          </a>
        </li>
        <li className="header-search-history-item">
          <a href="/" className="">
            Laptop HP
          </a>
        </li>
      </ul>
    </div>
  );
};

// Component con HeaderMenuItem
const HeaderMenuItem = ({ iconName, iconClass, title }) => {
  return (
    <li className="header-menu-list__item">
      <div>
        <FontAwesomeIcon icon={iconName} className={iconClass} />
        <span>{title}</span>
      </div>
    </li>
  );
};

const HeaderSearchListItem = ({ iconName, iconClass, title, itemClass }) => {
  return (
    <li className={itemClass}>
      <a href="/">
        <div className="base-icon">
          <FontAwesomeIcon icon={iconName} className={iconClass} />
        </div>
        <span className="header-search-list-item-name">{title}</span>
        <Cart />
      </a>
      <HeaderUserMenu />
    </li>
  );
};
const NavBar = () => {
  return (
    <div>
      <header className="header">
        <div className="header-search">
          <div className="grid">
            <div className="header-wrap">
              <HeaderLogo />
              <div className="header-filter-search">
                <input
                  className="header-filter-search__input"
                  type="text"
                  placeholder="Nhập tên máy tính, phụ kiện máy tính, ... cần tìm"
                />
                <HeaderSearchHistory />
                <button className="header-filter-search__button">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="header-filter-search-btn-icon fa-solid fa-magnifying-glass"
                  />
                </button>
              </div>
              <ul className="header-search-list">
                <HeaderSearchListItem
                  itemClass="header-search-list__item"
                  iconName={faFileLines}
                  iconClass="fa-solid fa-file-lines"
                  title="Thông tin hay"
                />
                <HeaderSearchListItem
                  itemClass="header-search-list__item"
                  iconName={faFileInvoiceDollar}
                  iconClass="fa-solid fa-file-invoice-dollar"
                  title="Thanh toán & Tiện ích"
                />
                <HeaderSearchListItem
                  itemClass="header-search-list__item header__navbar-user"
                  iconName={faCircleUser}
                  iconClass="fa-solid fa-circle-user"
                  title="Tài khoản của tôi"
                />

                <HeaderSearchListItem
                  itemClass="header-search-list__item header__navbar-cart"
                  iconName={faCartShopping}
                  iconClass="fa-solid fa-cart-shopping"
                  title="Giỏ hàng"
                />
              </ul>
            </div>
          </div>
        </div>
        <div className="header-menu">
          <div className="grid">
            <ul className="header-menu-list">
              <HeaderMenuItem
                iconName={faLaptop}
                iconClass="fa-solid fa-mobile-screen-button"
                title="TẤT CẢ"
              />
              <HeaderMenuItem
                iconName={faLaptop}
                iconClass="fa-solid fa-mobile-screen-button"
                title="HP"
              />
              <HeaderMenuItem
                iconName={faCoffee}
                iconClass="fa-solid fa-laptop"
                title="DELL"
              />
              <HeaderMenuItem
                iconName={faGamepad}
                iconClass="fa-solid fa-tablet-screen-button"
                title="ASUS"
              />
              <HeaderMenuItem
                iconName={faLaptopCode}
                iconClass="fa-brands fa-apple"
                title="LG"
              />
              <HeaderMenuItem
                iconName={faLaptop}
                iconClass="fa-solid fa-computer"
                title="ACER"
              />
              <HeaderMenuItem
                iconName={faLaptopCode}
                iconClass="fa-solid fa-headphones"
                title="MACBOOK"
              />
              <HeaderMenuItem
                iconName={faLaptop}
                iconClass="fa-solid fa-sim-card"
                title="RAZER"
              />
              <HeaderMenuItem
                iconName={faLaptop}
                iconClass="fa-brands fa-salesforce"
                title="LENOVO"
              />
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
