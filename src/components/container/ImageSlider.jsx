import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const images = [
  "/img/slideShow1.png",
  "/img/slideShow4.png", // Link mới
  "/img/slideShow3.png", // Link mới
];

export default function ImageSlider() {
  return (
    <Slide duration={1000} transitionDuration={1000}>
      <div className="each-slide-effect">
        <img src={images[0]} alt="" />
      </div>
      <div className="each-slide-effect">
        <img src={images[1]} alt="" />
      </div>
      <div className="each-slide-effect">
        <img src={images[2]} alt="" />
      </div>
    </Slide>
  );
}
