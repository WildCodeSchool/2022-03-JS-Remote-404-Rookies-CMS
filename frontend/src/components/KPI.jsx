import React from "react";
// eslint-disable-next-line import/extensions
import Jason from "../data/generated.jsx";

function KPI() {
  return (
    <section className="bg4E flex flex-col justify-evenly py-16">
      <div>
        <h2 className="tc4E text-xl text-center font-bold py-4 ">
          {Jason[2].headline}
        </h2>
        <h3 className="text-4xl py-4 font-bold text-center mb-6">
          {Jason[2].secondline}
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 divide-x-2 divide-green-300">
        <div className="flex flex-col basis-1/4">
          <p className="flex justify-center text-4xl tc4E font-bold">
            {Jason[0].data1}
          </p>
          <p className="flex justify-center">{Jason[0].type1}</p>
        </div>
        <div className="flex flex-col basis-1/4">
          <p className="flex justify-center text-4xl tc4E font-bold">
            {Jason[0].data2}
          </p>
          <p className="flex justify-center">{Jason[0].type2}</p>
        </div>
        <div className="flex flex-col basis-1/4">
          <p className="flex justify-center text-4xl tc4E font-bold">
            {Jason[0].data3}
          </p>
          <p className="flex justify-center">{Jason[0].type3}</p>
        </div>
        <div className="flex flex-col basis-1/4">
          <p className="flex justify-center text-4xl tc4E font-bold">
            {Jason[0].data4}
          </p>
          <p className="flex justify-center">{Jason[0].type4}</p>
        </div>
      </div>
    </section>
  );
}
export default KPI;
