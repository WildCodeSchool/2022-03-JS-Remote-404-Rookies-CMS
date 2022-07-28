import axios from "axios";
import { useContext, useState, useEffect } from "react";
import ExportContext from "../contexts/Context";

function KPI() {
  const { language } = useContext(ExportContext.Context);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/kpis/${language.id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [language]);

  return (
    <section className="bg4E flex flex-col justify-evenly py-12">
      <div>
        <h2 className="lg:text-xl pl-4 text-xl subtitle text-left lg:text-center font-bold">
          {data.title}
        </h2>
        <h3 className="lg:text-4xl my-4 text-4xl font-bold pl-4 text-left lg:text-center mb-6">
          {data.sub_title}
        </h3>
      </div>
      <div className="flex mt-10 flex-wrap justify-evenly  lg:grid  lg:grid-cols-4 lg:gap-6 lg:divide-x-2 lg:divide-green-300">
        {data.elements &&
          data.elements.map((element) => {
            return (
              <div className="flex w-2/5 justify-start lg:w-full flex-col lg:basis-1/4 mb-4">
                <p className="flex justify-center text-4xl tc4e2 font-bold order-2 mb-4">
                  {element.number}
                </p>
                <p className="flex justify-center font-bold  lg:font-medium text-xl mb-4 tc4E3">
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
