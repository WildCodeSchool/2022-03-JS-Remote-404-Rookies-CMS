import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ExportContext from "../../contexts/Context";

function NavBarAdminCompany() {
  const { selectLanguage, allLanguages, handleLanguages } = useContext(
    ExportContext.Context
  );

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
    <div className="flex flex-col justify-start text-center navbar-layout h-full w-full">
      <div className="flex flex-col justify-around border-4 border-green-400 text-4xl text-green-600 font-bold">
        <ul className="flex flex-col justify-around gap-10 underline">
          <li className="flex justify-around">
            <Link to="/dashboard/languages">Language</Link>
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
          </li>
          <li className="flex flex-col gap-10 text-left">
            <Link to="/dashboard/company">Company</Link>
            <li className="text-center">
              <Link to="/dashboard/company/home">Home</Link>
            </li>
            <li className="text-center">
              <Link to="/dashboard/company/carousellogo">Carrousel Logo</Link>
            </li>
            <li className="text-center">
              <Link to="/dashboard/company/presentation">Presentation</Link>
            </li>
            <li className="text-center">
              <Link to="/dashboard/company/presentationadvantages">
                Presentation advantages
              </Link>
            </li>
            <li className="text-center">
              <Link to="/dashboard/company/process">Process</Link>
            </li>
            <li className="text-center">
              <Link to="/dashboard/company/profits">Profits</Link>
            </li>
            <li className="text-center">
              <Link to="/dashboard/company/carrouselReview">
                Carousel review
              </Link>
            </li>
            <li className="text-center">
              <Link to="/dashboard/company/KPI">KPI</Link>
            </li>
            <li className="text-center">
              <Link to="/dashboard/company/QA">QA</Link>
            </li>
            <li className="text-center">
              <Link to="/dashboard/company/newsletter">NewsLetter</Link>
            </li>
            <li className="text-center">
              <Link to="/dashboard/company/footer">Footer</Link>
            </li>
          </li>
          <li className="flex flex-col gap-10 text-left">
            <Link to="/dashboard/school">School</Link>
            <li className="text-center">
              <Link to="/dashboard/school/home">Home</Link>
            </li>
            <li className="text-center">
              <Link to="/dashboard/shcool/formulaire">Formulaire</Link>
            </li>
            <li className="text-center">
              <Link to="/dashboard/shcool/carouselLogo">Carroussel Logo</Link>
            </li>
            <li className="text-center">
              <Link to="/dashboard/school/presentation">Presentation</Link>
            </li>
            <li className="text-center">
              <Link to="/dashboard/school/process">Process</Link>
            </li>
            <li className="text-center">
              <Link to="/dashboard/school/profits">Profit</Link>
            </li>
            <li className="text-center">
              <Link to="/dashboard/school/carrousselReview">
                Carroussel Review
              </Link>
            </li>
            <li className="text-center">
              <Link to="/dashboard/school/QA">QA</Link>
            </li>
            <li className="text-center">
              <Link to="/dashboard/school/newsletter">Newsletter</Link>
            </li>
          </li>
          <li className="flex flex-col gap-10 text-left">
            <Link to="/dashboard/casestudy">CaseStudy</Link>
            <li className="text-center">
              <Link to="/dashboard/studyCase/home">Study Case Home</Link>
            </li>
            <li className="text-center">
              <Link to="/dashboard/studyCase/projects">Projects</Link>
            </li>
            <li className="text-center">
              <Link to="/dashboard/studyCase/cta">CTA</Link>
            </li>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBarAdminCompany;
