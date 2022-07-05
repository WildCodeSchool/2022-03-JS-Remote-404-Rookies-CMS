import axios from "axios";
import { useContext, useState, useEffect } from "react";
import ExportContext from "../contexts/Context";

function StudyCaseHome() {
  const { language } = useContext(ExportContext.Context);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/homes/${language.id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [language]);
  const backGround = "https://i.ibb.co/qWx2PcX/Topic-Back-Ground.png";
  return (
    <div className=" flex ">
      <div className="px-16 w-1/2 flex flex-col justify-evenly mt-20">
        <h1>
          {data.title}
          <span className="underline decoration-8 decoration-green-400">
            {data.title_green_part}
          </span>
        </h1>
        <p className="py-8">{data.text}</p>
        <button
          type="button"
          className="bg-green-400 rounded-xl p-2 self-center"
        >
          {data.cta_label}
        </button>
      </div>
      <div
        className="w-1/2 mt-20"
        style={{
          backgroundImage: `url(${backGround})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "90% 140%",
        }}
      >
        <div className="flex justify-center mr-24">
          <div className="flex flex-col bg-white w-2/5 my-12 p-8 rounded-2xl ">
            <h3>{data.label_topics}</h3>
            {data.elements &&
              data.elements.map((elem) => {
                return (
                  <div className="flex justify-between">
                    <img
                      src={elem.image_link}
                      alt={elem.image_alt}
                      className="w-4/12 aspect-square object-contain"
                    />
                    <div className="">
                      <h2>{elem.title}</h2>
                      <h3>{elem.sub_title}</h3>
                    </div>
                  </div>
                );
              })}
            <p>{data.topic}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default StudyCaseHome;
