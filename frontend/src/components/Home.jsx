import axios from "axios";
import { useContext, useState, useEffect } from "react";
import CTA from "./CTA";
import ExportContext from "../contexts/Context";

function Home() {
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
      className="bg-white bg-cover max-w-md py-16 lg:max-w-full lg:flex flex-row lg:justify-center"
      style={{ backgroundImage: `url(./src/assets/bgm1.png)` }}
    >
      <div className="w-1/2 m-6">
        <h1 className="text-3xl font-bold mt-6 mb-6">{data.title}</h1>
        <h2>{data.text}</h2>
        <CTA label={data?.CTA_label} />
      </div>
      <div className="w-1/2 flex flex-row-reverse ">
        <img
          className="w-96 h-auto mt-6 "
          src={data.image_link}
          alt={data.image_alt}
        />
      </div>
    </div>
  );
}

export default Home;
