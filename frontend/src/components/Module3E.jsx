import React from "react";
import image from "../assets/image3E.png";
import checkbox from "../assets/Checkbox.png";

function Module3E() {
  return (
    <section className="bg-slate-100 text-gray-800">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center space-x-4">
        <div className="lg:max-w-lg mr-4 lg:w-full md:w-1/2 w-5/6 ">
          <img className="object-cover object-center" src={image} alt="hero" />
        </div>
        <div className="lg:flex md:w-1/2 lg:pr-32 md:pr-16 flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h3 className="text-green-500 font-bold">
            What is a Rookies Project?
          </h3>
          <h2 className="text-3xl mb-4 font-bold text-gray-900">
            A win-win collaboration
          </h2>
          <p className=" mb-8 leading-relaxed">
            Submit an assignment specific to your company, taken on by higher
            education students. The projects are carried out remotely or in
            person as part of the students’ curriculum with the support of a
            qualified supervisor.
          </p>
          <div className=" mb-2 flex">
            <img className=" mr-2" src={checkbox} alt="hero" />
            <p className="text-sm space-x-4">
              Students acquire resume worthy experience and connect with
              employers
            </p>
          </div>

          <div className="mb-8 flex">
            <img className="mr-2" src={checkbox} alt="hero" />
            <p className="text-sm space-x-4">
              Companies get answers to their challenges and discover talents
            </p>
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
