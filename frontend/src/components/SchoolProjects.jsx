import React from "react";
// eslint-disable-next-line import/extensions
import jason from "../data/generated.jsx";

function Module2S() {
  return (
    <section className="bg-slate-100 text-gray-800">
      <div className="flex justify-center">
        <div
          className=" w-4/5 bg-green-400 bg-cover flex my-4 mx-10 rounded-lg"
          style={{ backgroundImage: `url(./src/assets/bg.png)` }}
        >
          <div>
            <h1 className="text-white font-bold pt-6 pl-4">
              {jason[0].greeting}
            </h1>
            <h2 className="text-slate-100 w-4/5 font-semibold  py-6 pl-4">
              {jason[0].text}
            </h2>
          </div>
          <div className="flex items-center w-1/3 px-10  ">
            <button
              type="button"
              className="bg-slate-100 px-6 py-2 text-sm text-green-400 font-bold rounded-full"
            >
              Organiser un rdv
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Module2S;
