import React from "react";
import ProductPromo from "./ProductPromo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHardDrive } from "@fortawesome/free-solid-svg-icons";
export default function ProductConfig({ config }) {
  return (
    <div className="product-config">
      <div className="product-config-param">
        {config.map((item, index) => (
          <span key={index}>
            {/* <i className="product-config-param__icon fa-solid fa-hard-drive"></i> */}
            <FontAwesomeIcon
              icon={faHardDrive}
              className="product-config-param__icon"
            />
            {item}
          </span>
        ))}
      </div>
      <ProductPromo />
    </div>
  );
}
