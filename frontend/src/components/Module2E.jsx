/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageTraitement1 from "../data/imageTraitement";
import ImageTraitement2 from "../data/ImageTraitement2";
import ImageTraitement3 from "../data/ImageTraitement3";
import "../App.css";

function LogoCarousel() {
  return (
    <div className="carousel">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        interval={3000}
        showStatus={false}
        showIndicators={false}
        transitionTime={1000}
      >
        <div className="carousel-item-container">
          <ImageTraitement1 />
        </div>
        <div className="carousel-item-container">
          <ImageTraitement2 />
        </div>
        <div className="carousel-item-container">
          <ImageTraitement3 />
        </div>
      </Carousel>
    </div>
  );
}

export default LogoCarousel;
