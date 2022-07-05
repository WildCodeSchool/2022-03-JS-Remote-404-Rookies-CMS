import axios from "axios";
import { useContext, useState, useEffect } from "react";
import CTA from "./CTA";
import ExportContext from "../contexts/Context";
import "../css/summary.css";

function PresentationAdvantages() {
  const { language, media } = useContext(ExportContext.Context);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/presentationadvantages/${
          language.id
        }`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [language]);

  return (
    <section className="bg4E py-16 lg:max-w-full md:max-w-full lg:flex flex-row lg:justify-center">
      <div className="lg:w-1/3 flex flex-col justify-center">
        <h2 className="lg:text-lg text-2xl text-bold text-green-400 mx-4">
          {data.sub_title}
        </h2>
        <h3 className="text-2xl text-gree font-bold m-4">{data.title}</h3>
        <p className="text-lg text-gray-600 m-4 ">{data.text}</p>
        <div className="flex justify-center lg:justify-start">
          {!media ? <CTA label={data.CTA_label} /> : ""}
        </div>
      </div>
      <div className="mx-4 lg:w-1/3 ">
        <details className="bc4E border-2 text-gray-600 p-3 my-4">
          <summary className="ds4E text-black font-lightbold">
            {data.summary}
          </summary>
          {data.details}
        </details>
        <details className="bc4E border-2 text-gray-600 p-3 my-4">
          <summary className="ds4E text-black font-lightbold">
            {data.summary2}
          </summary>
          {data.details2}
        </details>
        <details className="bc4E border-2 text-gray-600 p-3 my-4">
          <summary className="ds4E text-black font-lightbold">
            {data.summary3}
          </summary>
          {data.details3}
        </details>
      </div>
      {media ? (
        <div className="flex justify-center">
          <CTA label={data.CTA_label} className="" />
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
export default PresentationAdvantages;
