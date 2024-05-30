import React from "react";
import Product from "./Product";
export default function ProductList() {
  const products = [
    {
      name: "HP 245 G10 R5-7520U",
      currentPrice: "10.790.000đ",
      oldPrice: "13.000.000đ",
      imageUrl: "/img/productItem1.webp",
      backgroundUrl: "/img/backGround.webp",

      config: [
        "14 inch",
        "Intel UHD graphic",
        "Ổ cứng 8GB",
        "Dung lượng 256GB",
        "Cân nặng 1.36kg",
      ],
    },
    {
      name: "DELL 200 G10 Gaming",
      currentPrice: "10.790.000đ",
      oldPrice: "13.000.000đ",
      imageUrl: "/img/productItem2.webp",
      backgroundUrl: "/img/backGround.webp",
      config: [
        "16 inch",
        "Intel SSH graphic",
        "Ổ cứng 16GB",
        "Dung lượng 128GB",
        "Cân nặng 1.5kg",
      ],
    },
    {
      name: "ASUS 200 G10 Gaming",
      currentPrice: "10.790.000đ",
      oldPrice: "13.000.000đ",
      imageUrl: "/img/productItem3.webp",
      backgroundUrl: "/img/backGround.webp",
      config: [
        "16 inch",
        "Intel SSH graphic",
        "Ổ cứng 16GB",
        "Dung lượng 128GB",
        "Cân nặng 1.5kg",
      ],
    },
    {
      name: "MACBOOK 200 G10 Gaming",
      currentPrice: "10.790.000đ",
      oldPrice: "13.000.000đ",
      imageUrl: "/img/productItem4.webp",
      backgroundUrl: "/img/backGround.webp",
      config: [
        "16 inch",
        "Intel SSH graphic",
        "Ổ cứng 16GB",
        "Dung lượng 128GB",
        "Cân nặng 1.5kg",
      ],
    },
    {
      name: "LG 200 G10 Gaming",
      currentPrice: "10.790.000đ",
      oldPrice: "13.000.000đ",
      imageUrl: "/img/productItem1.webp",
      backgroundUrl: "/img/backGround.webp",
      config: [
        "16 inch",
        "Intel SSH graphic",
        "Ổ cứng 16GB",
        "Dung lượng 128GB",
        "Cân nặng 1.5kg",
      ],
    },
    {
      name: "RAZER 200 G10 Gaming",
      currentPrice: "10.790.000đ",
      oldPrice: "13.000.000đ",
      imageUrl: "/img/productItem6.webp",
      backgroundUrl: "/img/backGround.webp",
      config: [
        "16 inch",
        "Intel SSH graphic",
        "Ổ cứng 16GB",
        "Dung lượng 128GB",
        "Cân nặng 1.5kg",
      ],
    },
  ];
  return (
    <>
      <div className="home-product">
        <div className="grid__row">
          {products.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
