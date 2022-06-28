export default function newsletterComponent() {
  return (
    <div className="flex flex-col justify-evenly content-center py-16 place-content-center justify-items-center text-center bg10E">
      <h2 className="text-4xl font-bold">Suscribe to our Newsletter</h2>
      <p className="my-8 self-center lg:w-1/3 mx-8 text-lg">
        We have hiking-related blog so we can share our thought and rutinity in
        our blog that updated weekly. We will not spam you, we promise.
      </p>
      <div className=" p-2 lg:w-1/4 border-2 border-green-400 rounded-full self-center bg-white mx-8">
        <input
          type="text"
          className="
                w-2/3
                lg:text-xl
                text-lg
                pl-4
                text-grey-dark
                font-medium
              "
          placeholder="Enter your email"
        />
        <button
          type="button"
          className="w-1/3 font-medium text-white border-t-2 border-b-2 border-r py-4 bg-green-400 rounded-full "
        >
          {" "}
          suscribe
        </button>
      </div>
    </div>
  );
}
