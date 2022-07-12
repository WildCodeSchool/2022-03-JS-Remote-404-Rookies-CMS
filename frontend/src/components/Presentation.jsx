import axios from "axios";
import { useContext, useState, useEffect } from "react";
import checkbox from "../assets/Checkbox.png";
import CTA from "./CTA";
import ExportContext from "../contexts/Context";

function Presentation() {
  const { language, media } = useContext(ExportContext.Context);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/presentations/${language.id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [language]);

  return (
    <section className="bg-slate-100 text-gray-800">
      <div className="container mx-auto flex flex-col px-5 py-12 space-x-4 lg:flex-row">
        <div className="mr-4 w-5/6 md:max-w-lg md:w-full ">
          <img
            className="object-cover object-center hidden lg:block"
            src={data.image_link}
            alt={data.image_alt}
          />
        </div>
        <div className="flex flex-col justify-start lg:mb-16  lg:pr-32 ">
          <h3 className="flex flex-start text-left subtitle text-xl font-bold">
            {data.title}
          </h3>
          <h2 className="text-4xl my-4 font-bold text-gray-900">
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
          <div>
            <div className=" mb-2 flex">
              <img
                className=" mr-2 ar-1 w-8 h-8 "
                src={checkbox}
                alt="checkbox"
              />
              <p className="text-sm mb-4 space-x-4">{data.text2}</p>
            </div>
            <div className="mb-2 flex">
              <img
                className="mr-2 ar-1 w-8 h-8"
                src={checkbox}
                alt="checkbox"
              />
              <p className="text-sm mb-4 space-x-4">{data.text3}</p>
            </div>
          </div>
          <div className="flex flex-col items-center max-w-full lg:w-full">
            <CTA label={`${data?.CTA_label} ${media ? "💬" : ""}`} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Presentation;
