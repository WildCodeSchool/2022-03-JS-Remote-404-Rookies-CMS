function Module7ECard(elem) {
  return (
    <div className="flex justify-between mb-10" data-carousel-item>
      <img
        id="carousel-img-E7"
        className="  lg:pl-10 mb-10"
        src={elem.picture}
        alt={elem.name}
      />
      <div className="flex flex-col w-1/2 justify-start mb-10">
        <h2 className="font-semibold text-sm md:text-lg lg:text-xl -pb-4 lg:mb-10 mb-2">
          {elem.name}
          <br />
          <span className="font-light md:text-lg lg:text-xl text-xs">
            {elem.email}
          </span>
        </h2>
        <p className="lg:pl-5 lg:mb-2 lg:pr-10 md:text-lg lg:text-xl text-xs">
          {elem.about}
        </p>
        <div className="flex flex-col items-center justify-center lg:w-1/2 lg:pb-12 mt-4">
          <img
            id="carousel-logo-E7"
            className="w-2/3 items-center justify-center object-fit-contain"
            src={elem.balance}
            alt={elem.name}
          />
        </div>
      </div>
    </div>
  );
}
export default Module7ECard;
