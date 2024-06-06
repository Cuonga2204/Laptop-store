import React from "react";

import ContainerEvent from "./ContainerEvent";

import ImageSlider from "./ImageSlider";
import CategoryFilter from "./CategoryFilter";
import OrderLapList from "./OrderLapList";
import HomeFilter from "./HomeFilter";
import ProductList from "./ProductList";
import { FilterProvider } from "../../context/FilterContext";
export default function Container({ products, filter }) {
  const images = [
    "/img/slideShow1.png",
    "/img/slideShow4.png", // Link mới
    "/img/slideShow3.png", // Link mới
  ];

  return (
    <>
      <FilterProvider>
        <div className="container">
          <div className="grid">
            <ContainerEvent />
            <ImageSlider images={images} />
            <div className="grid__row">
              <div className="grid__row-column-3">
                <CategoryFilter />
              </div>
              <div className="grid__row-column-9">
                <div className="order-lap">
                  <div className="order-lap-header">
                    <OrderLapList />
                  </div>
                </div>
                <div className="home-page">
                  <HomeFilter />
                  <ProductList products={products} filter={filter} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </FilterProvider>
    </>
  );
}