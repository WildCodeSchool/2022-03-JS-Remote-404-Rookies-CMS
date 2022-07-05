/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { NavLink, useLocation } from "react-router-dom";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import ExportContext from "../contexts/Context";

function Navbar() {
  const { language, selectLanguage, handleLanguages, allLanguages, media } =
    useContext(ExportContext.Context);
  const location = useLocation();

  const [data, setData] = useState([]);

  const [css, setCss] = useState("mt-2");
  const [css1, setCss1] = useState("nav");
  const [css2, setCss2] = useState("menu-bg");
  const [click, setClick] = useState(false);

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

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/navigation/${language.id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [language]);

  const menuOnClick = () => {
    if (click) {
      setCss1("nav change mt-2");
      setCss2("menu-bg change-bg");
      setCss("change");
      setClick(false);
    } else {
      setCss1("nav");
      setCss2("menu-bg");
      setCss("");
      setClick(!false);
    }
  };

  if (!media) {
    return (
      <div className="flex justify-between w-full align-center items-center fixed bg-white p-2 z-50">
        <img src={data?.image_link} alt={data?.image_alt} className="static" />
        <ul className="flex justify-evenly w-2/4 gap-10 font-bold text-3xl">
          <NavLink to={`/${language.languages}/page1`}>
            <li
              className={
                location.pathname.includes("page1") ? "tab-active" : "tab"
              }
            >
              {data.links && data.links[0].label}
            </li>
          </NavLink>
          <NavLink
            to={`/${language.languages}/page2`}
            className={
              location.pathname.includes("page2") ? "tab-active" : "tab"
            }
          >
            <li>{data.links && data.links[1].label}</li>
          </NavLink>
          <NavLink
            to={`/${language.languages}/page3`}
            className={
              location.pathname.includes("page3") ? "tab-active" : "tab"
            }
          >
            <li>{data.links && data.links[2].label}</li>
          </NavLink>
          <NavLink to={`${language.languages}/page4/`} className="hidden">
            <li>{data.links && data.links[3].label}</li>
          </NavLink>
        </ul>
        <div className="flex flex-row">
          <button
            type="button"
            className="pt-2 pb-3 pl-3 pr-3 rounded-full buttonNav mr-10 text-xl text-white"
          >
            {data.links && data.links[4].label}
          </button>
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
      </div>
    );
  }
  return (
    <div>
      <div className="flex flex-start items-center justify-between">
        <img
          src={data?.image_link}
          alt={data?.image_alt}
          className="w-1/2 order-1"
        />
        <div id="menu flex justify-between" className="mr-4">
          <div id="menu-bar" onClick={() => menuOnClick()} className={css}>
            <div className={css2} id="menu-bg" />
            <div id="bar1" className="bar" />
            <div id="bar2" className="bar" />
            <div id="bar3" className="bar" />
          </div>
          <nav className={css1} id="nav">
            <ul>
              <NavLink to={`/${language}/page1`}>
                <li className="-mt-4 font-bold">
                  {data.links && data.links[0].label}
                </li>
              </NavLink>
              <NavLink to={`/${language}/page2`}>
                <li className="-mt-4 font-bold">
                  {data.links && data.links[1].label}
                </li>
              </NavLink>
              <NavLink to={`/${language}/page3`}>
                <li className="-mt-4 font-bold">
                  {data.links && data.links[2].label}
                </li>
              </NavLink>
              <NavLink to={`/${language}/page4`} className="hidden">
                <li className="-mt-4 font-bold">
                  {data.links && data.links[3].label}
                </li>
              </NavLink>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
