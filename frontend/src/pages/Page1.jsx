import React from "react";

import Home from "../components/Home";
import LogoCarousel from "../components/CarouselLogo";
import Presentation from "../components/Presentation";
import PresentationAdvantages from "../components/PresentationAdvantages";
import Process from "../components/Process";
import Profits from "../components/Profits";
import CarrousselReview from "../components/CarrousselReview";
import KPI from "../components/KPI";
import QA from "../components/QA";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";
import jason from "../data/generated";

export default function Page1() {
  return (
    <div>
      <Home />
      <LogoCarousel />
      <Presentation />
      <PresentationAdvantages {...jason} />
      <Process {...jason} />
      <Profits />
      <CarrousselReview />
      <KPI />
      <QA />
      <GetStarted {...jason} />
      <Footer />
    </div>
  );
}
