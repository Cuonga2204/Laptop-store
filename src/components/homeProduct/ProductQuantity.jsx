import React from "react";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ProductQuantity() {
  return (
    <>
      <div className="product-view-quantity-input">
        <button className="product-view-quantity-btn">
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <input type="text" value="1" className="product-view-quantity__input" />
        <button className="product-view-quantity-btn">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </>
  );
}
