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
      className="bg-white bg-cover max-w-md py-16 lg:max-w-full lg:flex flex-row lg:justify-center"
      style={{ backgroundImage: `url(./src/assets/bgm1.png)` }}
    >
      <div className="w-1/2 m-6">
        <h1 className="text-3xl font-bold mt-6 mb-6">
          <span>Get more done, connecting with </span>
          <span className="underline decoration-4 decoration-green-300">
            great talent
          </span>
        </h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt sint,
          repellendus, fugiat harum doloribus id inventore{" "}
        </h2>
        <GetStarted />
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

export default Module1e;
