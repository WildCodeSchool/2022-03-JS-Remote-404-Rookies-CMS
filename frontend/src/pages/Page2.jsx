import React from "react";

import jason from "../data/generated";
import Home from "../components/Home";
import LogoCarousel from "../components/CarouselLogo";
import Presentation from "../components/Presentation";
import Process from "../components/Process";
import Profits from "../components/Profits";
import CarrousselReview from "../components/CarrousselReview";
import QA from "../components/QA";

export default function Page2() {
  return (
    <div>
      <Home />
      <LogoCarousel />
      <Presentation />
      <Process {...jason} />
      <Profits />
      <CarrousselReview />
      <QA />
    </div>
  );
}
