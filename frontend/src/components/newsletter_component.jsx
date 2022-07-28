import { useState, useContext, useEffect } from "react";
import axios from "axios";
import ExportContext from "../contexts/Context";

export default function newsletterComponent() {
  const { language } = useContext(ExportContext.Context);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/newsletter/${language.id}`)
      .then((response) => {
        setData(response.data[0]);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [language]);

  return (
    <div className="flex flex-col justify-evenly content-center py-12 place-content-center justify-items-center text-center bg10E">
      <h2 className="text-4xl font-bold px-4 text-left lg:text-center">
        {data?.title}
      </h2>
      <p className="my-8 self-center text-gray-600 lg:w-1/3 mx-4 lg:mx-8 lg:text-center text-left text-lg">
        {" "}
        {data?.text}{" "}
      </p>
      <div className=" p-2 lg:w-1/4 border-2 border-green-400 rounded-full self-center bg-white mx-8">
        <input
          type="text"
          className="
                w-2/3
                lg:text-xl
                text-lg
                pl-4
                text-grey-dark
                font-medium
              "
          placeholder="Enter your email"
        />
        <button
          type="button"
          className="w-1/3 font-medium text-white border-t-2 border-b-2 border-r py-4 bg-green-400 rounded-full "
        >
          {data?.cta_label}
        </button>
      </div>
    </div>
  );
}
