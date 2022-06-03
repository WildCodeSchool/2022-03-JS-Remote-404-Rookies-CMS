import React from "react";
import image from "../assets/image3E.png";
import checkbox from "../assets/Checkbox.png";
import Jason from "../data/jason.json";

function Module3E() {
  return (
    <section className="bg-slate-100 text-gray-800">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center space-x-4">
        <div className="lg:max-w-lg mr-4 lg:w-full md:w-1/2 w-5/6 ">
          <img className="object-cover object-center" src={image} alt="hero" />
        </div>
        <div className="lg:flex md:w-1/2 lg:pr-32 md:pr-16 flex-col md:items-start md:text-left mb-16 md:mb-0 items-center      text-center">
          <h3 className="text-green-500 font-bold">{Jason[0].secondline}</h3>
          <h2 className="text-3xl mb-4 font-bold text-gray-900">
            {Jason[0].headline}
          </h2>
          <p className=" mb-8 leading-relaxed">{Jason[0].text}</p>
          <div className=" mb-2 flex">
            <img className=" mr-2" src={checkbox} alt="hero" />
            <p className="text-sm space-x-4">{Jason[0].tickphrase1}</p>
          </div>

          <div className="mb-8 flex">
            <img className="mr-2" src={checkbox} alt="hero" />
            <p className="text-sm space-x-4">{Jason[0].tickphrase2}</p>
          </div>

          <button
            type="button"
            className="bg-green-500 text-white text-xs font-bold py-2 px-4 rounded-full"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Module3E;
