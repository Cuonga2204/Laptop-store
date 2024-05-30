import React from "react";
import ProductBadge from "./ProductBadge";
export default function ProductImage({ imageUrl, backgroundUrl }) {
  return (
    <>
      <div
        className="product-img"
        style={{
          backgroundImage: `url(${backgroundUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <a href="/">
          <img src={imageUrl} alt="Product" />
        </a>
        <ProductBadge />
      </div>
    </>
  );
}
