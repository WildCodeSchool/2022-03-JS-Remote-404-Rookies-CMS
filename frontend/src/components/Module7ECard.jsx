function Module7ECard(elem) {
  return (
    <div className="flex justify-between" data-carousel-item>
      <img
        className=" max-w-1/2 max-h-1/2 pl-10"
        src={elem.picture}
        alt={elem.name}
      />
      <div className="flex flex-col w-1/2 justify-between">
        <h2 className="font-semibold text-xl -pb-4 mb-10">
          {elem.name}
          <br />
          <span className="font-light">{elem.email}</span>
        </h2>
        <p className="pl-5 mb-10 pr-10">{elem.about}</p>
        <img className="w-20 self-center" src={elem.picture} alt={elem.name} />
      </div>
    </div>
  );
}
export default Module7ECard;
