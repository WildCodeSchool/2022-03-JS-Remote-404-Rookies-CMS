import { Carousel } from "react-responsive-carousel";
import jason from "../data/generated";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Module7ECard from "./Module7ECard";

function Module7E() {
  return (
    <section className="">
      <h2 className="text-center text-green font-bold text-2xl pb-4">
        Testimonials
      </h2>
      <h3 className="text-center font-bold text-4xl pb-20 ">
        what our customers say about us
      </h3>
      <div>
        <Carousel
          autoPlay
          infiniteLoop
          interval={10000}
          showArrows={false}
          showStatus={false}
          dynamicHeight
          showThumbs={false}
          centerSlidePercentage={100}
          centerMode
          className="w-full"
        >
          {jason.map((elem) => (
            <Module7ECard {...elem} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
export default Module7E;
