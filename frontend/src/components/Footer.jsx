import React from "react";
import Rookies from "../assets/rookies.png";
import French from "../assets/frenchtech.png";
import Pepite from "../assets/pepite.png";

function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div
        className="
          container
          flex flex-col flex-wrap mt-4
          px-4
          mx-auto
          md:items-center
          lg:items-start
          md:flex-row md:flex-nowrap
        "
      >
        <div className="flex flex-col text-center md:mx-0 md:text-left">
          <div
            className="
            flex justify-start lg:justify-center text-4xl font-bold md:justify-start
            "
          >
            <img src={Rookies} alt="logo" />
          </div>
          <a
            className="flex justity-center ml-4 mt-2 text-sm text-justify text-gray-500"
            href="tel:+33785680988"
          >
            +33 (0) 7 85 68 09 88
          </a>
          <p className="flex justify-start lg:flex lg:justify-center ml-4 mt-2 text-sm text-justify text-gray-500">
            integrer envoi mail
          </p>
          <div className="flex justify-center mt-4 lg:mt-2 lg:justify-start">
            <div className="ml-3">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6 text-pink-400"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </div>
            <div className="ml-3">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-6 h-6 text-blue-500"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx="4" cy="4" r="2" stroke="none" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-row lg:block justify-between w-full mt-4 text-center">
          <div className="w-1/3 px-4 mb-4 lg:w-2/3">
            <h2 className="font-bold text-lg mb-4 text-green-400">
              Quick Links
            </h2>
            <ul className="text-sm">
              <div className="flex justify-start flex-col">
                <li>
                  <div className="mb-4 text-gray-600 hover:text-gray-800">
                    Companies
                  </div>
                </li>
                <li>
                  <div className="mb-4 text-gray-600 hover:text-gray-800">
                    Student
                  </div>
                </li>
              </div>
              <div className="flex justify-center flex-col">
                <li>
                  <div className="mb-4 text-gray-600 hover:text-gray-800">
                    Universities
                  </div>
                </li>
                <li>
                  <div className="text-gray-600 hover:text-gray-800">About</div>
                </li>
              </div>
            </ul>
          </div>
          <div className="w-2/3 px-4 lg:w-2/3">
            <h2 className="flex justify-start mb-2 font-bold text-lg  text-green-400">
              Join our Newsletter
            </h2>
            <div className="flex mt-4">
              <input
                type="text"
                className="
                w-1/2 h-auto
                p-2
                text-sm
                border border-grey-light
                round
                text-grey-dark
              "
                placeholder="Your email address"
              />
              <button
                type="button"
                className="text-white bg-green-400  font-medium rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center"
              >
                <svg
                  className="w-5 h-5"
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
            <div className="flex mx-2 mt-4">
              <img className="mr-4" src={Pepite} alt="logo" />
              <img src={French} alt="logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <div className="flex space-x-4">
          <p className="text-base  text-gray-400">General terms</p>
          <p className="text-base  text-gray-400">Privacy policy</p>
        </div>
        <p className="flex justify-end text-base text-gray-400">
          2022 Rookies SAS. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
