/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import ExportContext from "../contexts/Context";
import Quote from "./Quote";

function Formulaire() {
  const [data, setData] = useState([]);
  const { handleForm, language, receptionEmail } = useContext(
    ExportContext.Context
  );

  const [mailData, setMailData] = useState([
    {
      fullname: "",
      category: "Company",
      email: "",
      reception: receptionEmail && receptionEmail,
      message: "",
    },
  ]);

  const editData = (area, value) => {
    const newData = [...mailData];
    newData[0][area] = value;
    setMailData(newData);
  };

  const SubmitMail = () => {
    axios
      .post(`http://localhost:5000/sendEmail`, mailData)
      .then((res) => {
        console.warn(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/contactForm/${language.id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [language]);

  return (
    <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex bg-gray-900/75">
      <div className="absolute h-4/5 w-3/4 flex flex-col justify-between bg-slate-50 rounded-[16px]">
        <div className="flex flex-col h-full w-full">
          <div className="absolute top-2 right-1 flex justify-self-start self-end">
            <button
              onClick={() => handleForm()}
              type="button"
              className="bg-button-green-E10 text-02e494 text-2xl font-bold py-0 px-1 drop-shadow-md hover:bg-green-300"
            >
              &times;
            </button>
          </div>
          <div className="flex flex-row md:flex-row items-center h-full">
            <div className="flex flex-col md:flex-col items-center w-2/5 h-full">
              <Quote />
            </div>

            <div className="flex flex-col md:flex-col w-6/12 h-full ml-12">
              <h1 className="lg:text-3xl md:text-xl font-bold mt-12 mb-2 ml-6">
                {data?.title}
              </h1>
              <p className="lg:text-xl md:text-base text-gray-500 mb-8 ml-6 mt-4 font-bold">
                {data?.sub_title}
              </p>
              <form className="flex flex-col w-full h-full">
                <input
                  className="lg:text-xl md:text-base bg-gray-100 border-2 border-gray-300 rounded-lg h-1/3 w-11/12 ml-6 shadow-lg lg:mb-6 md:mb-2"
                  type="text"
                  name="fullname"
                  placeholder={data?.fullname}
                  onChange={(e) => editData(e.target.name, e.target.value)}
                  required
                />
                <input
                  className="lg:text-xl md:text-base bg-gray-100 border-2 border-gray-300 rounded-lg h-1/3 w-11/12 ml-6 shadow-lg lg:mb-6 md:mb-2"
                  type="text"
                  name="email"
                  placeholder={data?.email}
                  onChange={(e) => editData(e.target.name, e.target.value)}
                  required
                />
                <select
                  className="lg:text-xl md:text-base bg-gray-100 border-2 border-gray-300 rounded-lg h-1/3 w-11/12 ml-6 shadow-lg lg:mb-6 md:mb-2"
                  type="text"
                  name="category"
                  placeholder="I represent a (company/school)"
                  onChange={(e) => editData(e.target.name, e.target.value)}
                  required
                >
                  {data.elements?.map((option) => (
                    <option value={option.value} label={option.text} />
                  ))}
                </select>
                <textarea
                  className="lg:text-xl md:text-base bg-gray-100 border-2 border-gray-300 rounded-lg h-4/5 w-11/12 ml-6 shadow-lg lg:mb-6 md:mb-2"
                  type="text"
                  name="message"
                  placeholder={data?.description}
                  onChange={(e) => editData(e.target.name, e.target.value)}
                  required
                />
                <div className="flex flex-row justify-center">
                  <button
                    onClick={(e) => {
                      handleForm();
                      e.preventDefault();
                      SubmitMail();
                    }}
                    type="submit"
                    required
                    className="bg-button-green-E10 shadow-lg text-white lg:text-xl md:text-base font-boldrounded-full hover:bg-green-300 h-4/5 w-4/5 flex justify-center items-center align-center rounded-[12px] lg:mb-8 md:mb-4"
                  >
                    {data?.CTA_label}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formulaire;
