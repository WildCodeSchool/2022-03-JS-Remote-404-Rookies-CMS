import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import ExportContext from "../contexts/Context";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarrousselReviewCard from "./CarrousselReviewCard";

function CarrousselReview() {
  const { language, position } = useContext(ExportContext.Context);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/carrousselreview/${language.id}/${
          position && position
        }`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [language]);
  return (
    <div className="flex flex-col px-4 items-center justify-center w-full">
      <section className="w-full">
        <h2 className="lg:text-center subtitle pt-12 font-bold text-left text-xl">
          {data[0] && data[0].title}
        </h2>
        <h3 className="lg:text-center font-bold text-4xl text-left my-4 lg:pb-20 ">
          {data[0] && data[0].sub_title}
        </h3>
        <div className="mb-2">
          <Carousel
            autoPlay
            infiniteLoop
            interval={10000}
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            centerSlidePercentage={100}
            centerMode
            className="w-full h-full mb-10"
          >
            {data &&
              data.map((elem) => {
                return <CarrousselReviewCard {...elem} />;
              })}
          </Carousel>
        </div>
      </section>
    </div>
  );
}
export default CarrousselReview;
