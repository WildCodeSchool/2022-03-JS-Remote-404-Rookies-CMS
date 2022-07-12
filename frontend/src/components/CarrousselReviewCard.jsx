import { useContext } from "react";
import { useLocation } from "react-router-dom";
import ExportContext from "../contexts/Context";

function CarrousselReviewCard(elem) {
  const { media } = useContext(ExportContext.Context);
  const location = useLocation();

  if (!media) {
    return (
      <div className="flex mb-10" data-carousel-item>
        <img
          id="carousel-img-E7"
          className="  lg:pl-10 mb-10"
          src={elem?.image_link}
          alt={elem?.image_alt}
        />
        <div className="lg:pt-20 flex-col w-1/3">
          <h2 className="font-semibold text-sm md:text-lg lg: text-left lg:text-xl -pb-4 lg:mb-10 mb-2">
            {location.pathname.includes("carrouselReview") ? (
              <p>Id : {elem?.id}</p>
            ) : null}
            {elem?.fullname}
            <br />
            <span className="font-light md:text-lg lg:text-xl text-xs">
              {elem?.post}
            </span>
          </h2>
          <p className="italic lg:w-2/3 lg:mb-2 lg:pr-10 lg:text-left md:text-lg lg:text-xl text-xs">
            {elem?.testimonial}
          </p>
          <div className="flex flex-col items-center justify-center lg:w-2/3 lg:pb-12 mt-4">
            <img
              id="carousel-logo-E7"
              className="w-2/3 items-center justify-center object-fit-contain"
              src={elem?.linkLogo}
              alt={elem?.altLogo}
            />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center justify-items-center place-items-center ">
        <img
          id="carousel-img-E7"
          className="w-1/3 flex justify-center"
          src={elem?.image_link}
          alt={elem?.image_alt}
        />
        <h2 className="font-semibold text-2xl -pb-4 mb-2">
          {elem?.fullname}
          <br />
          <span className="font-light text-lg">{elem?.post}</span>
        </h2>
        <p className="italic w-4/5 lg:pl-5 text-left lg:text-center text-lg lg:mb-2 lg:pr-10 text-gray-600">
          {elem?.testimonial}
        </p>
        <div className="flex flex-col w-4/5 mt-6">
          <img
            id="carousel-logo-E7"
            className="items-center"
            src={elem?.linkLogo}
            alt={elem?.altLogo}
          />
        </div>
      </div>
    </div>
  );
}

export default CarrousselReviewCard;
