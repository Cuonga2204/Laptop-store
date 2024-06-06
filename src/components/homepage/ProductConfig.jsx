import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHardDrive } from "@fortawesome/free-solid-svg-icons";
export default function ProductConfig({ config, className }) {
  return (
    <div className="product-config">
      <div className={className}>
        {config.map((item, index) => (
          <span key={index}>
            {/* <i className="product-config-param__icon fa-solid fa-hard-drive"></i> */}
            <FontAwesomeIcon
              className="product-config-param__icon"
              icon={faHardDrive}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
