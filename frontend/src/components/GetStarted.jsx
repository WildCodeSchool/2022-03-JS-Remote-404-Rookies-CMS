function GetStarted(jason) {
  return (
    <section className="flex flex-col justify-items-center  place-items-center bg10E pt-20">
      <h2 className="text-5xl font-bold pb-5">{jason[0].company} </h2>
      <h3 className="pb-10 text-2xl font-normal"> {jason[0].email}</h3>
      <div className="pb-20 w-1/2 flex justify-center gap-20">
        <button
          className="p-2 bg-button-green-E10 w-1/3 rounded-full font-semibold"
          type="button"
        >
          Submit my project
        </button>
        <button
          className="p-2 bg-button-white-E10 w-1/3 rounded-full font-semibold"
          type="button"
        >
          Book a meeting
        </button>
      </div>
    </section>
  );
}
export default GetStarted;
