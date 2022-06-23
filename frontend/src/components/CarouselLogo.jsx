/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageTraitement1 from "../data/imageTraitement";
import ImageTraitement2 from "../data/ImageTraitement2";
import "../App.css";

function LogoCarousel() {
  const [time, setTime] = React.useState(1000);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(10000);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="carousel">
      <Carousel
        transitionTime={10000}
        autoPlay
        infiniteLoop
        showThumbs={false}
        interval={time}
        showStatus={false}
        showIndicators={false}
        showArrows={false}
      >
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

export default LogoCarousel;
