import React from "react";
import { useFilter } from "../../context/FilterContext";
// import { sortByPrice } from "./ProductList";

export default function HomeFilter() {
  const { handleSort } = useFilter();
  return (
    <>
      <div className="home-filter">
        <span className="home-filter__lable">Ưu tiên xem : </span>
        <button className="btn home-filter__lable-btn">Trả góp 0% </button>
        <button className="btn btn-primary home-filter__lable-btn">
          Phổ biến
        </button>
        <button className="btn home-filter__lable-btn">Mới nhất </button>
        <button className="btn home-filter__lable-btn">Bán chạy</button>
        <div className="slect-input">
          <span className="slect-input__label">Giá</span>
          <i className="slect-input__label-icon fa-solid fa-angle-down"></i>
          <ul className="slect-input-list">
            <li className="slect-input-item">
              <div
                href="/"
                className="slect-input-link"
                onClick={() => handleSort("ASC")}
              >
                Giá: thấp đến cao
              </div>
            </li>
            <li className="slect-input-item">
              <div
                href="/"
                className="slect-input-link"
                onClick={() => handleSort("DESC")}
              >
                Giá: cao đến thấp
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
