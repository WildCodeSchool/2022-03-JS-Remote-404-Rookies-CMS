function Module10E(jason) {
  return (
    <section className="flex flex-col justify-items-center  place-items-center bg10E pt-10 lg:pt-20">
      <h2 className="text-5xl font-bold pb-5">{jason[0].company} </h2>
      <h3 className="pb-10 text-2xl font-normal"> {jason[0].email}</h3>
      <div className="pb-10 w-1/2 flex flex-col justify-center gap-10 lg:flex-row lg:pb-20 lg:gap-20 ">
        <button
          className="p-2 bg-button-green-E10  rounded-full font-semibold lg:w-1/3"
          type="button"
        >
          Submit my project
        </button>
        <button
          className="p-2 bg-button-white-E10  rounded-full font-semibold lg:w-1/3"
          type="button"
        >
          Book a meeting
        </button>
      </div>
    </section>
  );
}
export default Module10E;
