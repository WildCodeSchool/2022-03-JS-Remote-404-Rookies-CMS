import "../css/module9E.css";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import ExportContext from "../contexts/Context";
import CTA from "./CTA";

function QA() {
  const { language } = useContext(ExportContext.Context);

  const [data, setData] = useState([]);

  const [dataCta, setDataCta] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/getstarteds/${language.id}`)
      .then((response) => {
        setDataCta(response.data[0]);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [language]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/QAS/${language.id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [language]);

  return (
    <section className="bg-slate-100 flex flex-col items-center justify-evenly py-16 ">
      <div className="w-1/1 lg:w-1/2 flex flex-col text-center justify-between">
        <h2 className="tc4E text-xl font-bold py-4 ">{data.title}</h2>
        <h3 className="text-4xl py-4 font-bold text-gray-800">
          {data.sub_title}
        </h3>
      </div>
      {data.elements &&
        data.elements.map((element) => {
          return (
            <div className="w-1/1 mx-2 lg:w-1/2 flex flex-col content-center justify-between">
              <details className="bc9E border-b-2 border-gray-200 text-gray-800 p-3 my-4">
                <summary className="ds4E font-semibold">
                  {element.question}
                </summary>
                {element.answer}
              </details>
            </div>
          );
        })}
      <div className="flex flex-col justify-items-center  place-items-center pt-20">
        <div className="pb-20 flex justify-center gap-20">
          <CTA label={dataCta?.cta1_label} />
          <CTA label={dataCta?.cta2_label} />
        </div>
      </div>
    </section>
  );
}
export default QA;
