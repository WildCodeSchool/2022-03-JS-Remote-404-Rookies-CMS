import React, { useContext, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ExportContext from "../../contexts/Context";

function NavbarAdmin() {
  const { language, selectLanguage, handleLanguages, allLanguages } =
    useContext(ExportContext.Context);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/languages/`)
      .then((response) => {
        handleLanguages(response.data);
        selectLanguage(response.data[0]);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  return (
    <div className="flex flex-row text-center justify-evenly navbar-layout h-full w-full">
      <div className="flex flex-row justify-evenly text-xl text-green-600 font-bold w-full">
        <ul className="flex flex-row m-4 justify-evenly underline w-full">
          <li className="flex justify-between">
            <Link to="/dashboard/company">Company</Link>
          </li>
          <li className="flex justify-between">
            <Link to="/dashboard/school">School</Link>
          </li>
          <li className="flex justify-between">
            <Link to="/dashboard/casestudy">CaseStudy</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-row justify-end">
        <img
          src={language.images_link}
          alt={language.images_alt}
          className="w-2/12 object-contain mr-4"
        />
        <select
          className="border py-2 px-5"
          name="language"
          id="language"
          onChange={(e) => selectLanguage(allLanguages[e.target.value - 1])}
        >
          {allLanguages &&
            allLanguages.map((option) => {
              return (
                <option
                  id="option"
                  value={option.id}
                  label={option.languages}
                  key={option.id}
                />
              );
            })}
        </select>
      </div>
    </div>
  );
}

export default NavbarAdmin;
