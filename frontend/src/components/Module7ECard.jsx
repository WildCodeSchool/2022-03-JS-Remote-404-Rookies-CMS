function Module7ECard(elem) {
  return (
    <div className="flex justify-between mb-10" data-carousel-item>
      <img
        id="carousel-img-E7"
        className=" max-w-1/2 max-h-1/2 pl-10 mb-10"
        src={elem.picture}
        alt={elem.name}
      />
      <div className="flex flex-col w-1/2 justify-start mb-10">
        <h2 className="font-semibold text-xl -pb-4 mb-10 ">
          {elem.name}
          <br />
          <span className="font-light">{elem.email}</span>
        </h2>
        <p className="pl-5 mb-2 pr-10">{elem.about}</p>
        <div className="flex flex-col items-center justify-center w-1/2 pb-12 mt-4">
          <img
            id="carousel-logo-E7"
            className="w-1/4 items-center justify-center object-fit-contain"
            src={elem.balance}
            alt={elem.name}
          />
        </div>
      </div>
    </div>
  );
}
export default Module7ECard;
