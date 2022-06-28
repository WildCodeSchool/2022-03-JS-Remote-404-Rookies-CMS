/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import ExportContext from "../contexts/Context";
import Quote from "./Quote";

function Formulaire() {
  const { handleForm } = React.useContext(ExportContext.Context);
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
              <h1 className="text-3xl font-bold mt-12 mb-2 ml-6">
                Drop us a message
              </h1>
              <p className="text-xl text-gray-500 mb-8 ml-6 mt-4 font-bold">
                We will get back to you as soon as possible.
              </p>
              <form className="flex flex-col w-full h-full">
                <input
                  className="text-xl bg-gray-100 border-2 border-gray-300 rounded-lg h-1/3 w-11/12 ml-6 shadow-lg mb-6"
                  type="text"
                  placeholder="First name & Last name"
                />
                <input
                  className="text-xl bg-gray-100 border-2 border-gray-300 rounded-lg h-1/3 w-11/12 ml-6 shadow-lg mb-6"
                  type="text"
                  placeholder="Email"
                />
                <input
                  className="text-xl bg-gray-100 border-2 border-gray-300 rounded-lg h-1/3 w-11/12 ml-6 shadow-lg mb-6"
                  type="text"
                  placeholder="
                      I represent a (company/school)"
                />
                <textarea
                  className="text-xl bg-gray-100 border-2 border-gray-300 rounded-lg h-4/5 w-11/12 ml-6 shadow-lg mb-6"
                  type="text"
                  placeholder="Message"
                />
                <div className="flex flex-row justify-center">
                  <button
                    onClick={() => handleForm()}
                    type="button"
                    className="bg-button-green-E10 shadow-lg text-white font-boldrounded-full hover:bg-green-300 h-4/5 w-4/5 flex justify-center items-center align-center rounded-[12px] mb-8"
                  >
                    Submit
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
