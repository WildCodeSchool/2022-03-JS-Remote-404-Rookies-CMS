/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import ExportContext from "../contexts/Context";
import Quote from "./Quote";

function Formulaire() {
  const { handleForm } = React.useContext(ExportContext.Context);
  return (
    <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex bg-gray-900/75">
      <div className="absolute h-full w-3/4 flex flex-col justify-between bg-slate-50 rounded-[16px]">
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
          <div className="flex flex-row md:flex-row items-center">
            <div className="flex flex-col md:flex-col items-center w-2/5">
              <Quote />
            </div>

            <div className="flex flex-col md:flex-col items-center w-7/12">
              <div className="flex flex-col w-full mt-8">
                <h1 className="text-3xl font-bold mt-12 mb-2 ml-3">
                  Drop us a message
                </h1>
                <p className="text-xl text-gray-500 mb-8 ml-3 mt-4 font-bold">
                  We will get back to you as soon as possible.
                </p>
                <form className="flex flex-col w-full">
                  <div className="flex flex-col h-1/4">
                    <input
                      className="text-xl bg-gray-100 border-2 border-gray-300 rounded-lg p-6 w-11/12 ml-6 shadow-lg mb-6"
                      type="text"
                      placeholder="First name & Last name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      className="text-xl bg-gray-100 border-2 border-gray-300 rounded-lg p-6 w-11/12 ml-6 shadow-lg mb-6"
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      className="text-xl bg-gray-100 border-2 border-gray-300 rounded-lg p-6 w-11/12 ml-6 shadow-lg mb-6"
                      type="text"
                      placeholder="Company Name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      className="text-xl bg-gray-100 border-2 border-gray-300 rounded-lg p-6 w-11/12 ml-6 shadow-lg mb-6"
                      type="text"
                      placeholder="Phone number"
                    />
                  </div>
                  <div className="flex flex-col">
                    <textarea
                      className="text-xl bg-gray-100 border-2 border-gray-300 rounded-lg p-6 w-11/12 ml-6 shadow-lg mb-6"
                      type="text"
                      placeholder="Tell us more about your project"
                    />
                  </div>
                  <div className="flex justify-center">
                    <button
                      onClick={() => handleForm()}
                      type="button"
                      className="bg-button-green-E10 shadow-lg text-white font-bold py-2 px-4 mb-2 rounded-full hover:bg-green-300 mt-4"
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
    </div>
  );
}

export default Formulaire;
