import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import ExportContext from "../contexts/Context";

function Footer() {
  const { language } = useContext(ExportContext.Context);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/footer/${language}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [language]);

  return (
    <footer className="lg:mx-20">
      <div
        className="
          flex flex-col mt-4
          px-4
          mx-auto
          md:items-center
          lg:items-start
          md:flex-row md:flex-nowrap
        "
      >
        <div className="flex flex-row lg:flex-col text-center mb-4 lg:w-1/3 ">
          <div className="w-1/2">
            <div
              className="
            flex justify-start lg:justify-center text-4xl font-bold md:justify-start
            "
            >
              <img src={data.image_logo_link} alt={data.image_logo_alt} />
            </div>
            <a
              className="flex justity-center  ml-4 lg:ml-6 mt-2 text-sm text-justify text-gray-500"
              href="tel:+33785680988"
            >
              {data.phone_number}
            </a>
            <p className="flex justify-start  ml-4 lg:ml-6 mt-2 text-sm text-justify text-gray-500">
              {data.mail}
            </p>
          </div>
          <div className="flex justify-center w-1/2 pt-10 lg:pt-4 lg:justify-start lg:ml-2">
            <div className="ml-3">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-1/3 text-white bg-gray-500 rounded-sm object-contain"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx="4" cy="4" r="2" stroke="none" />
              </svg>
            </div>
            <div className="mb-4 -mt-1 -ml-6">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-2/5 text-gray-500 object-contain"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-row lg:flex justify-between w-full text-center">
          <div className="w-1/3 lg:w-1/2">
            <h2 className="font-bold text-lg mb-4 lg:flex text-green-400">
              {data.sub_title1}
            </h2>
            <ul className="text-sm lg:text-md lg:flex ">
              <div className="flex justify-start flex-col lg:mr-20 ">
                <li>
                  <div className="mb-4 text-gray-600 hover:text-gray-800">
                    <a href={data.links && data.links[0].path}>
                      {data.links && data.links[0].label}
                    </a>
                  </div>
                </li>
                <li>
                  <div className="mb-4 flex justify-center lg:justify-start text-gray-600 hover:text-gray-800 ">
                    <a href={data.links && data.links[1].path}>
                      {data.links && data.links[1].label}
                    </a>
                  </div>
                </li>
              </div>
              <div className="flex justify-start flex-col lg:ml-20">
                <li>
                  <div className="mb-4 text-gray-600 hover:text-gray-800 ">
                    <a href={data.links && data.links[2].path}>
                      {data.links && data.links[2].label}
                    </a>
                  </div>
                </li>
              </div>
              <li>
                <div className="flex justify-center lg:justify-start text-gray-600 hover:text-gray-800 hidden">
                  <a href={data.links && data.links[3].path}>
                    {data.links && data.links[3].label}
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-2/3 px-4 lg:w-1/2 ">
            <h2 className="flex justify-start mb-2 font-bold text-lg  text-green-400">
              {data.sub_title2}
            </h2>
            <div className="flex mt-4 lg:w-2/3 lg:h-10 ">
              <input
                type="text"
                className="
                w-3/4 h-auto
                p-2
                text-sm
                text-grey-dark
                border-l-2 border-t-2 border-b-2 rounded-l-lg
              "
                placeholder={data.newsletter}
              />
              <button
                type="button"
                className="text-green-400 lg:text-white bg-white font-medium lg:bg-green-400 border-t-2 border-b-2 border-r lg:border-green-400 rounded-r-lg lg:w-1/6"
              >
                <svg
                  className="w-5 h-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="flex mx-2 mt-4 ">
              <img
                className="mr-4 lg:w-15 lg:h-15 "
                src={data.image_link}
                alt={data.image_alt}
              />
              <img
                className="mr-4 lg:w-15 lg:h-15"
                src={data.image_link2}
                alt={data.image_alt2}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between mt-6 border-gray-200 border-t-2">
        <div className="flex justify-center">
          <p className="mx-10 mb-4 underline text-base  text-gray-400">
            {data.terms}
          </p>
          <p className="mx-10 mb-4 underline text-base  text-gray-400">
            {data.policy}
          </p>
        </div>
        <p className="flex justify-center lg:justify-end text-base text-gray-400">
          {data.copyright}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
