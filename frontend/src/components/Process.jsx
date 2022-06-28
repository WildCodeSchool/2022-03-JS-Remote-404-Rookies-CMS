import axios from "axios";
import { useContext, useState, useEffect } from "react";
import fleche from "../assets/module5Earrow.png";
import flecheReverse from "../assets/module5Earrowreverse.png";
import ExportContext from "../contexts/Context";

function Process() {
  // eslint-disable-next-line no-undef
  const { language } = useContext(ExportContext.Context);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/Processs/${language}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [language]);

  return (
    <section className="flex flex-col py-16">
      <div className="justify-center mx-4 lg:flex">
        <div className="mb-4 lg:w-1/3 lg:flex flex-col justify-center lg:mx-6">
          <h2 className="font-bold module5E-green text-xl lg:text-xl">
            {data?.title}
          </h2>
          <h3 className="font-extrabold text-4xl lg:text-4xl my-6">
            {data?.sub_title}
          </h3>
          <p className="text-gray-600 text-lg lg:w-4/5">{data?.text}</p>
        </div>
        <div className="flex justify-center lg:w-1/3 lg:flex flex-col">
          <img
            className="hidden lg:block"
            src={data?.image_link}
            alt={data?.image_alt}
          />
        </div>
      </div>
<<<<<<< consumebackend
      <div className="flex flex-wrap mx-8 lg:grid lg:grid5A mt-4 lg:mt-16 justify-evenly  justify-items-center place-content-center content-center">
        <div className="div1 w-full lg:w-2/5 mb-4">
          <h3 className="font-bold text-center lg:text-left  text-xl mb-4">
            <span className="font-bold text-2xl  module5E-green pr-2">01</span>
            {data.elements && data.elements[0].title}
          </h3>
          <h4 className="text-gray-600 text-center lg:text-left  text-md lg:text-lg">
=======
      <div className="flex flex-wrap mx-8 lg:grid lg:grid5A mt-4 lg:mt-16 justify-evenly">
        <div className="div1 w-full lg:w-min mb-4">
          <h3 className="font-bold text-left  text-xl mb-4">
            <span className="font-bold text-2xl  module5E-green pr-2">01</span>
            {data.elements && data.elements[0].title}
          </h3>
          <h4 className="text-gray-600 text-md text-left  lg:text-lg>">
>>>>>>> dev
            {data.elements && data.elements[0].text}
          </h4>
        </div>
        <img
          src={fleche}
          alt="fleche de l'etape 1 a 2"
          className="arrow1 hidden lg:block"
        />
<<<<<<< consumebackend
        <div className="div2 w-full lg:w-2/5 mb-4">
          <h3 className="font-bold text-center lg:text-left  text-xl mb-4">
            <span className="font-bold text-2xl  module5E-green pr-2">02</span>
            {data.elements && data.elements[1].title}
          </h3>
          <h4 className="text-gray-600 text-center lg:text-left  text-md lg:text-lg">
=======
        <div className="div2 w-full lg:w-min mb-4">
          <h3 className="font-bold text-left  text-xl mb-4">
            <span className="font-bold text-2xl  module5E-green pr-2">02</span>
            {data.elements && data.elements[1].title}
          </h3>
          <h4 className="text-gray-600 text-left  text-md lg:text-lg">
>>>>>>> dev
            {data.elements && data.elements[1].text}
          </h4>
        </div>
        <img
          src={flecheReverse}
          alt="fleche de l'etape 2 a 3"
          className="arrow2 hidden lg:block"
        />
<<<<<<< consumebackend
        <div className="div3 mb-4 w-full lg:w-2/5">
          <h3 className="font-bold text-center lg:text-left text-xl mb-4">
            <span className="font-bold text-2xl module5E-green pr-2">03</span>
            {data.elements && data.elements[2].title}
          </h3>
          <h4 className="text-gray-600 text-center lg:text-left  text-md lg:text-lg">
=======
        <div className="div3 mb-4 w-full lg:w-min">
          <h3 className="font-bold text-left text-xl mb-4">
            <span className="font-bold text-2xl module5E-green pr-2">03</span>
            {data.elements && data.elements[2].title}
          </h3>
          <h4 className="text-gray-600 text-left  text-md lg:text-lg">
>>>>>>> dev
            {data.elements && data.elements[2].text}
          </h4>
        </div>
        <img
          src={fleche}
          alt="fleche de l'etape 3 a 4"
          className="arrow3 hidden lg:block"
        />
<<<<<<< consumebackend
        <div className="div4 w-full lg:w-2/5 ">
          <h3 className="font-bold  text-center lg:text-left text-xl mb-4">
            <span className="font-bold text-2xl   module5E-green pr-2">04</span>
            {data.elements && data.elements[3].title}
          </h3>
          <h4 className="text-gray-600 text-center lg:text-left  text-md lg:text-lg">
=======
        <div className="div4 w-full lg:w-min ">
          <h3 className="font-bold  text-left text-xl mb-4">
            <span className="font-bold text-2xl   module5E-green pr-2">04</span>
            {data.elements && data.elements[3].title}
          </h3>
          <h4 className="text-gray-600 text-left  text-md lg:text-lg">
>>>>>>> dev
            {data.elements && data.elements[3].text}
          </h4>
        </div>
      </div>
      ;
    </section>
  );
}

export default Process;
