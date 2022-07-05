import axios from "axios";
import { useContext, useState, useEffect } from "react";
import ExportContext from "../contexts/Context";

function StudyCaseHome() {
  const { language } = useContext(ExportContext.Context);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/studygethomes/${language.id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [language]);
  return (
    <div className=" flex ">
      <div className="flex px-16 w-1/2 flex flex-col justify-evenly mt-20">
        <h1 className="font-bold text-4xl">
          {data?.title}
          <br />{" "}
          <span className="underline decoration-8 decoration-green-400">
            {data?.title_green_part}
          </span>
        </h1>
        <p className="py-8 text-3xl">{data?.text}</p>
        <button
          type="button"
          className="bg-green-400 rounded-xl p-2 self-center text-white object-left flex-start flex flex-row-reverse flex-initial"
        >
          {data && data.cta_label} 💬
        </button>
      </div>
      <div
        className="w-1/2 mt-20"
        style={{
          backgroundImage: `url(${data?.image_link})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "90% 100%",
        }}
      >
        <div className="flex justify-center mr-24">
          <div className="flex flex-col bg-white w-3/6 my-12 p-8 rounded-2xl ">
            <h3 className="flex flex-start justify-start object-top text-2xl font-bold">
              {data && data.label_topics}
            </h3>
            <span />
            <img
              src={data && data.topicImgLink}
              alt={data && data.topicImgAlt}
              className="hat rounded-full w-1/4 h-1/4 flex-end"
            />
            {data.elements &&
              data.elements.map((item) => (
                <div className="flex p-2 justify-around w-2/3">
                  <img
                    src={item?.image_link}
                    alt={item?.image_alt}
                    className="w-4/12 aspect-square object-contain "
                  />
                  <div className="w-6/12">
                    <h2 className="font-bold">{item?.title}</h2>
                    <h3>{item?.sub_title}</h3>
                  </div>
                </div>
              ))}
            <p>{data && data.topic}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default StudyCaseHome;
