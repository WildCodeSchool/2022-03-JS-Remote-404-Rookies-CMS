import axios from "axios";
import { useContext, useState, useEffect } from "react";
import ExportContext from "../contexts/Context";

function KPI() {
  const { language } = useContext(ExportContext.Context);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/kpis/${language}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [language]);

  return (
    <section className="bg4E flex flex-col justify-evenly py-16">
      <div>
        <h2 className="lg:text-xl pl-4 text-3xl text-green green-400 text-left lg:text-center font-bold py-4 ">
          {data.title}
        </h2>
        <h3 className="lg:text-4xl py-4 text-4xl font-bold text-3 pl-4 text-left lg:text-center mb-6">
          {data.sub_title}
        </h3>
      </div>
      <div className="flex flex-wrap justify-evenly  lg:grid  lg:grid-cols-4 lg:gap-6 lg:divide-x-2 lg:divide-green-300">
        {data.elements &&
          data.elements.map((element) => {
            return (
              <div className="flex w-2/5 justify-start lg:w-full flex-col lg:basis-1/4 mb-4">
                <p className="flex justify-center text-2xl lg:text-4xl tc4E font-bold order-2 mb-4">
                  {element.number}
                </p>
                <p className="flex justify-center font-bold  lg:font-medium lg:text-xl mb-4 tc4e2">
                  {element.label}
                </p>
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default KPI;
