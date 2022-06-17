import React from "react";
// eslint-disable-next-line import/extensions
import Jason from "../data/generated.jsx";

function Module8E() {
  return (
    <section className="bg4E flex flex-col justify-evenly py-16">
      <div>
        <h2 className="tc4E lg:text-xl text-center font-bold py-4 ">
          {Jason[2].headline}
        </h2>
        <h3 className="lg:text-4xl py-4 font-bold text-center mb-6">
          {Jason[2].secondline}
        </h3>
      </div>
      <div className="flex flex-wrap justify-evenly  lg:grid  lg:grid-cols-4 lg:gap-6 lg:divide-x-2 lg:divide-green-300">
        <div className="flex w-2/5 lg:w-full flex-col lg:basis-1/4">
          <p className="flex justify-center lg:text-4xl tc4E font-bold">
            {Jason[0].data1}
          </p>
          <p className="flex justify-center mb-4">{Jason[0].type1}</p>
        </div>
        <div className="flex w-2/5 lg:w-full flex-col lg:basis-1/4">
          <p className="flex justify-center lg:text-4xl tc4E font-bold">
            {Jason[0].data2}
          </p>
          <p className="flex justify-center">{Jason[0].type2}</p>
        </div>
        <div className="flex w-2/5 lg:w-full flex-col lg:basis-1/4">
          <p className="flex justify-center lg:text-4xl tc4E font-bold">
            {Jason[0].data3}
          </p>
          <p className="flex justify-center">{Jason[0].type3}</p>
        </div>
        <div className="flex w-2/5 lg:w-full flex-col lg:basis-1/4">
          <p className="flex justify-center lg:text-4xl tc4E font-bold">
            {Jason[0].data4}
          </p>
          <p className="flex justify-center">{Jason[0].type4}</p>
        </div>
      </div>
    </section>
  );
}
export default Module8E;
