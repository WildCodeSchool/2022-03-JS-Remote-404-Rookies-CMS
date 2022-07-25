import axios from "axios";
import { useContext, useState, useEffect } from "react";
import ExportContext from "../contexts/Context";

function Module6e() {
  const { language, position } = useContext(ExportContext.Context);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/profits/${language.id}/${
          position && position
        }`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [language]);

  return (
    <div className="bg4E pt-12 pb-12 flex flex-col">
      <div className="font-bold text-center mb-8 lg:mb-20">
        <h3 className="subtitle text-xl pb-1">{data.title}</h3>
        <h2 className="my-4 text-4xl">{data.sub_title}</h2>
      </div>
      <div className="flex flex-col flex-wrap mx-4 justify-items-center place-items-center leading-loose lg:flex-row ">
        {data.elements &&
          data.elements.map((elem) => {
            return (
              <div className="basis-1/2 w-4/5 flex flex-col justify-center justify-items-center place-items-center lg:flex-row flex-none mb-4 lg:mb-0">
                <div className="circle bg-button-green-E10 mr-2 aspect-square mb-2">
                  <img
                    className="logo"
                    src={elem.image_link}
                    alt={elem.image_alt}
                  />
                </div>
                <div className="mb-4">
                  <h3 className="text-center lg:text-left text-xl font-bold pb-1">
                    {elem.title}
                  </h3>
                  <p className="text-center lg:text-left text-lg max-w-lg">
                    {elem.text}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Module6e;
