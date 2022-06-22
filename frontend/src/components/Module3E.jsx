import axios from "axios";
import { useContext, useState, useEffect } from "react";
import checkbox from "../assets/Checkbox.png";
import GetStarted from "./GetStarted";
import ExportContext from "../contexts/Context";

function Module3E() {
  const { language, media } = useContext(ExportContext.Context);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/presentations/${language}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [language]);

  return (
    <section className="bg-slate-100 text-gray-800">
      <div className="container mx-auto flex px-5 py-12 lg:flex-row flex-col items-center space-x-4">
        <div className="lg:max-w-lg mr-4 lg:w-full md:w-1/2 w-5/6 ">
          <img
            className="object-cover object-center hidden lg:block"
            src={data.image_link}
            alt={data.image_alt}
          />
        </div>
        <div className="flex flex-col justify-start lg:mb-16 lg:items-center lg:pr-32 ">
          <h3 className="flex flex-start text-left text-green-500 font-bold">
            {data.title}
          </h3>
          <h2 className="text-3xl mb-4 font-bold text-gray-900">
            {data.sub_title}
          </h2>
          <p className=" mb-8 ">{data.text1}</p>
          <div>
            <img
              className="object-cover object-center lg:hidden lg:max-w-full"
              src={data.image_link}
              alt={data.image_alt}
            />
          </div>
          <div className=" mb-2 flex">
            <img className=" mr-2 ar-1 w-8 h-8 " src={checkbox} alt="hero" />
            <p className="text-sm mb-4 space-x-4">{data.text2}</p>
          </div>
          <div className="mb-8 flex">
            <img className="mr-2 ar-1 w-8 h-8" src={checkbox} alt="hero" />
            <p className="text-sm mb-4 space-x-4">{data.text3}</p>
          </div>
          <div className="flex flex-col items-center max-w-full">
            <GetStarted label={`${data?.CTA_label} ${media ? "💬" : ""}`} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Module3E;
