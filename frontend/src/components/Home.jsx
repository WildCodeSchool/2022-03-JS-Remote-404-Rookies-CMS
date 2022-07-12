import axios from "axios";
import { useContext, useState, useEffect } from "react";
import CTA from "./CTA";
import ExportContext from "../contexts/Context";

function Home(props) {
  const { language, media } = useContext(ExportContext.Context);

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

  const backGround = data[0]?.image_link_background;
  const school = "trytorotate";

  return (
    <div className="pt-20">
      <div
        className="bg-white bg-cover flex flex-col justify-center lg:pl-56 py-16 lg:max-w-full px-10 lg:flex-row"
        id={props.status === 1 ? school : ""}
        style={{
          backgroundImage: `url(${backGround})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <div
          className="flex flex-col justify-center items-center lg:w-1/2 lg:m-6 lg:items-start text-left"
          id={props.status === 1 ? school : ""}
        >
          <h1 className="justify-center text-4xl lg:text-3xl font-bold mt-6 mb-6 last-child">
            {props.status === 0 ? data[0]?.title : data[1]?.title}
            <br />
            <span className="underline decoration-8 decoration-green-400">
              {props.status === 0
                ? data[0]?.title_green_part
                : data[1]?.title_green_part}
            </span>
          </h1>
          <h2 className=" lg:center text-left text-xl">
            {props.status === 0 ? data[0]?.text : data[1]?.text}
          </h2>
          <CTA
            label={
              props.status === 0
                ? `${data[0]?.CTA_label} ${media ? "💬" : ""}`
                : `${data[1]?.CTA_label} ${media ? "💬" : ""}`
            }
          />
        </div>
        <div className="lg:w-1/2 flex justify-center lg:flex-row-reverse ">
          <img
            className="w-96 h-auto mt-6 lg:flex lg:justify-center hidden"
            src={props.status === 0 ? data[0]?.image_link : data[1]?.image_link}
            alt={props.status === 0 ? data[0]?.image_alt : data[1]?.image_alt}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
