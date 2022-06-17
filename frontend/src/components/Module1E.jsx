import axios from "axios";
import { useContext, useState, useEffect } from "react";
import GetStarted from "./GetStarted";
import ExportContext from "../contexts/Context";

function Module1e() {
  const { language } = useContext(ExportContext.Context);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/homes/${language}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [language]);

  return (
    <div
      className="bg-white bg-cover flex flex-col justify-center  py-16 lg:max-w-full lg:flex-row"
      style={{ backgroundImage: `url(./src/assets/bgm1.png)` }}
    >
      <div className="flex flex-col justify-center text-center items-center lg:w-1/2 lg:m-6 lg:items-start lg:text-left">
        <h1 className="justify-center text-3xl font-bold mt-6 mb-6 ">
          {data.title}
        </h1>
        <h2>{data.text}</h2>
        <GetStarted label={data?.CTA_label} />
      </div>
      <div className="lg:w-1/2 flex justify-center lg:flex-row-reverse ">
        <img
          className="w-96 h-auto mt-6 flex justify-center"
          src={data.image_link}
          alt={data.image_alt}
        />
      </div>
    </div>
  );
}

export default Module1e;
