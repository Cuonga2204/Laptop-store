import React from "react";

export default function Homepage() {
  return (
    <>
      <div className="container">
        <div className="grid">
          <ContainerEvent />
          <ImageSlider />
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

                <ProductList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
