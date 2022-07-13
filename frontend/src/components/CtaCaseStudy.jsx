import React, { useContext, useState, useEffect } from "react";
// eslint-disable-next-line import/extensions
import axios from "axios";
import ExportContext from "../contexts/Context";

export default function CtaCaseStudy() {
  const { language } = useContext(ExportContext.Context);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/ctacasestudy/${language.id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [language]);

  return (
    <section className="bg-slate-100 rounded-xl mt-8">
      <div className="flex flex-col lg:flex-row justify-center my-4 mx-10 rounded-lg">
        <h2 className="font-semibold text-xl py-6 pl-4 w-full lg:w-1/3">
          {data && data.text}
        </h2>
        <div className=" flex flex-col items-center justify-center px-10">
          <button
            type="button"
            className="bg-green-400 px-6 py-2 text-sm text-white font-bold rounded  "
          >
            Check it Out
          </button>
        </div>
      </div>
    </section>
  );
}
