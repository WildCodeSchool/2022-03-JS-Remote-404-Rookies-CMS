/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageTraitement1 from "../../data/imageTraitement";
import ImageTraitement2 from "../../data/ImageTraitement2";
import "../../App.css";

function LogoCarouseAdmin() {
  return (
    <div className="carousel">
      <Carousel transitionTime={5000} autoPlay infiniteLoop interval={6000}>
        <div className="carousel-item-container">
          <ImageTraitement1 />
        </div>
        <div className="carousel-item-container">
          <ImageTraitement2 />
        </div>
      </Carousel>
    </div>
  );
}

export default LogoCarouseAdmin;
