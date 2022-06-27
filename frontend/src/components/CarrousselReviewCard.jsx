import { useContext } from "react";
import ExportContext from "../contexts/Context";

function CarrousselReviewCard(elem) {
  const { media } = useContext(ExportContext.Context);
  if (!media) {
    return (
      <div className="flex justify-between mb-10" data-carousel-item>
        <img
          id="carousel-img-E7"
          className="  lg:pl-10 mb-10"
          src={elem?.image_link}
          alt={elem?.image_alt}
        />
        <div className="flex flex-col w-1/2 justify-start mb-10">
          <h2 className="font-semibold text-sm md:text-lg lg:text-xl -pb-4 lg:mb-10 mb-2">
            {elem?.fullname}
            <br />
            <span className="font-light md:text-lg lg:text-xl text-xs">
              {elem?.post}
            </span>
          </h2>
          <p className="lg:pl-5 lg:mb-2 lg:pr-10 md:text-lg lg:text-xl text-xs">
            {elem?.testimonial}
          </p>
          <div className="flex flex-col items-center justify-center lg:w-1/2 lg:pb-12 mt-4">
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
        <h2 className="font-semibold text-sm md:text-lg  -pb-4  mb-2">
          {elem?.fullname}
          <br />
          <span className="font-light md:text-lg text-xs">{elem?.post}</span>
        </h2>
        <p className="lg:pl-5 lg:mb-2 lg:pr-10 md:text-lg  text-xs">
          {elem?.testimonial}
        </p>
        <div className="flex flex-col items-center justify-end w-full mt-6 object-contain">
          <img
            id="carousel-logo-E7"
            className=" items-center justify-end mb-8"
            src={elem?.linkLogo}
            alt={elem?.altLogo}
          />
        </div>
      </div>
    </div>
  );
}

export default CarrousselReviewCard;
