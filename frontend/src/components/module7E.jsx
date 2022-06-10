import { Carousel } from "react-responsive-carousel";
import jason from "../data/generated";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Module7ECard from "./Module7ECard";

function Module7E() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <section className="w-full">
        <h2 className="text-center text-green font-bold text-2xl pb-4">
          Testimonials
        </h2>
        <h3 className="text-center font-bold text-4xl pb-20 ">
          What our customers say about us
        </h3>
        <div className="mb-2">
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
            className="w-full h-full mb-20"
          >
            {jason.map((elem) => (
              <Module7ECard {...elem} />
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
}
export default Module7E;
