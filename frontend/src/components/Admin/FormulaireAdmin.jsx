/* eslint-disable react/button-has-type */
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import ExportContext from "../../contexts/Context";
import Quote from "../Quote";
import NavBarAdminCompany from "./NavBarAdminCompany";

function FormulaireAdmin() {
  const [data, setData] = useState([]);
  const { handleForm, language } = useContext(ExportContext.Context);
  const [adminTouch, setAdminTouch] = React.useState("");

  const [mailData, setMailData] = useState([
    {
      fullname: "",
      category: "Company",
      email: "",
      message: "",
    },
  ]);

  const editData = (area, value) => {
    const newData = [...mailData];
    newData[0][area] = value;
    setMailData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submit = {};
    console.warn(submit);
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/images`, submit, {
        withCredentials: true,
      })
      .then(() => {
        console.warn("Yes !");
      })
      .catch(() => {
        console.warn("No !");
      });
  };

  const SubmitMail = () => {
    axios
      .post(`http://localhost:5000/sendEmail`, mailData, {
        withCredentials: true,
      })
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
    <div className="flex flex-row w-screen">
      <div className="w-1/5">
        <NavBarAdminCompany />
      </div>
      <div className="flex flex-col">
        <select
          className="bg-button-green-E10 text-02e494 text-2xl font-bold py-0 px-1 drop-shadow-md hover:bg-green-300"
          onChange={(e) => setAdminTouch(e.target.value)}
        >
          <option value="0">Choisissez une option</option>
          <option value="1">Get Started</option>
          <option value="2">Contact Us</option>
          <option value="3">Quote</option>
        </select>
      </div>
      {adminTouch === "1" ? (
        <div className="flex flex-col">
          <form className="flex flex-col">
            <div className="flex flex-col w-4/5">
              <label className="text-2xl font-bold">Title</label>
              <input
                className="text-02e494 text-2xl font-bold py-0 px-1 drop-shadow-md"
                type="text"
                placeholder="Full Name"
                onChange={(e) => editData("fullname", e.target.value)}
              />
            </div>
            <div className="flex flex-col w-4/5">
              <label className="text-2xl font-bold">Sub title</label>
              <input
                className="text-02e494 text-2xl font-bold py-0 px-1 drop-shadow-md"
                type="text"
                placeholder="Full Name"
                onChange={(e) => editData("fullname", e.target.value)}
              />
            </div>
            <div className="flex flex-col w-4/5">
              <label className="text-2xl font-bold">
                Placeholder name and surname
              </label>
              <input
                className="text-02e494 text-2xl font-bold py-0 px-1 drop-shadow-md"
                type="text"
                placeholder="Full Name"
                onChange={(e) => editData("fullname", e.target.value)}
              />
            </div>
            <div className="flex flex-col w-4/5">
              <label className="text-2xl font-bold">Placeholder Email</label>
              <input
                className="text-02e494 text-2xl font-bold py-0 px-1 drop-shadow-md"
                type="text"
                placeholder="Full Name"
                onChange={(e) => editData("fullname", e.target.value)}
              />
            </div>
            <div className="flex flex-col w-4/5">
              <label className="text-2xl font-bold">Full Name</label>
              <input
                className="text-02e494 text-2xl font-bold py-0 px-1 drop-shadow-md"
                type="text"
                placeholder="Full Name"
                onChange={(e) => editData("fullname", e.target.value)}
              />
            </div>
            <div className="flex flex-col w-4/5">
              <label className="text-2xl font-bold">Email</label>
              <input
                className="text-02e494 text-2xl font-bold py-0 px-1 drop-shadow-md"
                type="text"
                placeholder="Email"
                onChange={(e) => editData("email", e.target.value)}
              />
            </div>
            <div className="flex flex-col w-4/5">
              <label className="text-2xl font-bold">Email</label>
              <input
                className="text-02e494 text-2xl font-bold py-0 px-1 drop-shadow-md"
                type="text"
                placeholder="Email"
                onChange={(e) => editData("email", e.target.value)}
              />
            </div>
            <div className="flex flex-col w-4/5">
              <label className="text-2xl font-bold">Email</label>
              <input
                className="text-02e494 text-2xl font-bold py-0 px-1 drop-shadow-md"
                type="text"
                placeholder="Email"
                onChange={(e) => editData("email", e.target.value)}
              />
            </div>
            <div className="flex justify-center mt-4 mr-52">
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="justify-center items-center flex w-full">
            <div className="h-4/5 w-3/4 flex flex-col justify-between bg-slate-50 rounded-[16px]">
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
                  <div className="flex flex-col md:flex-col items-center w-full h-full">
                    <Quote />
                  </div>

                  <div className="flex flex-col md:flex-col w-6/12 h-full ml-12">
                    <h1 className="text-3xl font-bold mt-12 mb-2 ml-6">
                      {data?.title}
                    </h1>
                    <p className="text-xl text-gray-500 mb-8 ml-6 mt-4 font-bold">
                      {data?.sub_title}
                    </p>
                    <form className="flex flex-col w-full h-full">
                      <input
                        className="text-xl bg-gray-100 border-2 border-gray-300 rounded-lg h-1/3 w-11/12 ml-6 shadow-lg mb-6"
                        type="text"
                        name="fullname"
                        placeholder={data?.fullname}
                        onChange={(e) =>
                          editData(e.target.name, e.target.value)
                        }
                      />
                      <input
                        className="text-xl bg-gray-100 border-2 border-gray-300 rounded-lg h-1/3 w-11/12 ml-6 shadow-lg mb-6"
                        type="text"
                        name="email"
                        placeholder={data?.email}
                        onChange={(e) =>
                          editData(e.target.name, e.target.value)
                        }
                      />
                      <select
                        className="text-xl bg-gray-100 border-2 border-gray-300 rounded-lg h-1/3 w-11/12 ml-6 shadow-lg mb-6"
                        type="text"
                        name="category"
                        placeholder="I represent a (company/school)"
                        onChange={(e) =>
                          editData(e.target.name, e.target.value)
                        }
                      >
                        {data.elements?.map((option) => (
                          <option value={option.value} label={option.text} />
                        ))}
                      </select>
                      <textarea
                        className="text-xl bg-gray-100 border-2 border-gray-300 rounded-lg h-4/5 w-11/12 ml-6 shadow-lg mb-6"
                        type="text"
                        name="message"
                        placeholder={data?.description}
                        onChange={(e) =>
                          editData(e.target.name, e.target.value)
                        }
                      />
                      <div className="flex flex-row justify-center">
                        <button
                          onClick={(e) => {
                            handleForm();
                            e.preventDefault();
                            SubmitMail();
                          }}
                          type="button"
                          className="bg-button-green-E10 shadow-lg text-white font-boldrounded-full hover:bg-green-300 h-4/5 w-4/5 flex justify-center items-center align-center rounded-[12px] mb-8"
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
        </div>
      ) : null}
    </div>
  );
}

export default FormulaireAdmin;
