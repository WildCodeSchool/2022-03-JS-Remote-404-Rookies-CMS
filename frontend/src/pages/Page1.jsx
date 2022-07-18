import React from "react";

import Home from "../components/Home";
import LogoCarousel from "../components/CarouselLogo";
import Presentation from "../components/Presentation";
import PresentationAdvantages from "../components/PresentationAdvantages";
import Process from "../components/Process";
import Profits from "../components/Profits";
import KPI from "../components/KPI";
import CarrousselReview from "../components/CarrousselReview";
import QA from "../components/QA";
import NewsletterComponent from "../components/newsletter_component";

export default function Page1() {
  return (
    <div>
      <Home status={0} />
      <LogoCarousel />
      <Presentation />
      <PresentationAdvantages />
      <Process />
      <Profits />
      <CarrousselReview />
      <KPI />
      <QA />
      <NewsletterComponent />
    </div>
  );
}
