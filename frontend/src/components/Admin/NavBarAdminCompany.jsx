import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ExportContext from "../../contexts/Context";

function NavBarAdminCompany() {
  const {
    selectLanguage,
    allLanguages,
    handleLanguages,
    receptionEmail,
    handleReceptionEmail,
    handlePosition,
  } = useContext(ExportContext.Context);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/languages/`, {
        withCredentials: true,
      })
      .then((response) => {
        handleLanguages(response.data);
        selectLanguage(response.data[0]);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/email`,
        {
          id: 1,
          AdminMail: receptionEmail,
        },
        { withCredentials: true }
      )
      .then(() => {
        console.warn("Yes !");
      })
      .catch(() => {
        console.warn("No !");
      });
  };

  return (
    <div className="flex flex-col justify-start text-center navbar-layout h-full w-full">
      <div className="flex flex-col justify-around border-4 border-green-400 text-4xl text-green-600  font-bold">
        <ul className="flex flex-col justify-around gap-10">
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
          <form className="flex flex-col text-base">
            <label className="flex flex-col text-gray-900 text-xl font-bold mb-2 ml-6 mt-2 justify-center">
              Email de reception
              <input
                value={receptionEmail && receptionEmail.AdminMail}
                className="bg-gray-100 border-2 text-base border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={receptionEmail && receptionEmail.AdminMail}
                onChange={(e) => handleReceptionEmail(e.target.value)}
              />
            </label>
            <button
              type="submit"
              onClick={(e) => handleSubmit(e)}
              className="text-green-500"
            >
              Submit
            </button>
          </form>
          <li className="text-left ml-28 text-2xl hover:text-green-400">
            <Link to="/dashboard/navigation">NavBar</Link>
          </li>
          <li className="flex flex-col gap-10 text-left">
            <Link className="underline" to="/dashboard/company">
              Company
            </Link>
            <li className="text-left ml-28 text-2xl hover:text-green-400">
              <Link
                to="/dashboard/company/home"
                onClick={() => handlePosition(1)}
              >
                Home
              </Link>
            </li>
            <li className="text-left ml-28 text-2xl hover:text-green-400">
              <Link
                to="/dashboard/company/carousellogo"
                onClick={() => handlePosition(1)}
              >
                Carrousel Logo
              </Link>
            </li>
            <li className="text-left ml-28 text-2xl hover:text-green-400">
              <Link
                to="/dashboard/company/presentation"
                onClick={() => handlePosition(1)}
              >
                Presentation
              </Link>
            </li>
            <li className="text-left ml-28 text-2xl hover:text-green-400">
              <Link
                to="/dashboard/company/presentationadvantages"
                onClick={() => handlePosition(1)}
              >
                Presentation advantages
              </Link>
            </li>
            <li className="text-left ml-28 text-2xl hover:text-green-400">
              <Link
                to="/dashboard/company/process"
                onClick={() => handlePosition(1)}
              >
                Process
              </Link>
            </li>
            <li className="text-left ml-28 text-2xl hover:text-green-400">
              <Link
                to="/dashboard/company/profits"
                onClick={() => handlePosition(1)}
              >
                Profits
              </Link>
            </li>
            <li className="text-left ml-28 text-2xl hover:text-green-400">
              <Link
                to="/dashboard/company/carrouselReview"
                onClick={() => handlePosition(1)}
              >
                Carousel review
              </Link>
            </li>
            <li className="text-left ml-28 text-2xl hover:text-green-400">
              <Link
                to="/dashboard/company/KPI"
                onClick={() => handlePosition(1)}
              >
                KPI
              </Link>
            </li>
            <li className="text-left ml-28 text-2xl hover:text-green-400">
              <Link
                to="/dashboard/company/QA"
                onClick={() => handlePosition(1)}
              >
                QA
              </Link>
            </li>
            <li className="text-left ml-28 text-2xl hover:text-green-400">
              <Link
                to="/dashboard/company/newsletter"
                onClick={() => handlePosition(1)}
              >
                NewsLetter
              </Link>
            </li>
            <li className="text-left ml-28 text-2xl hover:text-green-400">
              <Link
                to="/dashboard/company/footer"
                onClick={() => handlePosition(1)}
              >
                Footer
              </Link>
            </li>
          </li>
          <li className="flex flex-col gap-10 text-left">
            <Link
              className="underline"
              to="/dashboard/school"
              onClick={() => handlePosition(2)}
            >
              School
            </Link>
            <li className="text-left ml-28 text-2xl hover:text-green-400">
              <Link
                to="/dashboard/school/home"
                onClick={() => handlePosition(2)}
              >
                Home
              </Link>
            </li>
            <li className="text-left ml-28 text-2xl hover:text-green-400">
              <Link
                to="/dashboard/school/formulaire"
                onClick={() => handlePosition(2)}
              >
                Formulaire
              </Link>
            </li>
            <li className="text-left ml-28 text-2xl hover:text-green-400">
              <Link
                to="/dashboard/school/carousellogo"
                onClick={() => handlePosition(2)}
              >
                Carroussel Logo
              </Link>
            </li>
            <li className="text-left ml-28 text-2xl hover:text-green-400">
              <Link
                to="/dashboard/school/presentation"
                onClick={() => handlePosition(2)}
              >
                Presentation
              </Link>
            </li>
            <li className="text-left ml-28 text-2xl hover:text-green-400">
              <Link
                to="/dashboard/school/process"
                onClick={() => handlePosition(2)}
              >
                Process
              </Link>
            </li>
            <li className="text-left ml-28 text-2xl hover:text-green-400">
              <Link
                to="/dashboard/school/profits"
                onClick={() => handlePosition(2)}
              >
                Profit
              </Link>
            </li>
            <li className="text-left ml-28 text-2xl hover:text-green-400">
              <Link
                to="/dashboard/school/carrouselReview"
                onClick={() => handlePosition(2)}
              >
                Carroussel Review
              </Link>
            </li>
            <li className="text-left ml-28 text-2xl hover:text-green-400">
              <Link to="/dashboard/school/QA" onClick={() => handlePosition(2)}>
                QA
              </Link>
            </li>
            <li className="text-left ml-28 text-2xl hover:text-green-400">
              <Link
                to="/dashboard/school/newsletter"
                onClick={() => handlePosition(2)}
              >
                Newsletter
              </Link>
            </li>
          </li>
          <li className="flex flex-col gap-10 text-left">
            <Link className="underline" to="/dashboard/casestudy">
              CaseStudy
            </Link>
            <li className="text-left ml-28 text-2xl hover:text-green-400">
              <Link to="/dashboard/studyCase/home">Study Case Home</Link>
            </li>
            <li className="text-left ml-28 text-2xl hover:text-green-400">
              <Link to="/dashboard/studyCase/projects">Projects</Link>
            </li>
            <li className="text-left ml-28 text-2xl hover:text-green-400">
              <Link to="/dashboard/studyCase/cta">CTA</Link>
            </li>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBarAdminCompany;
