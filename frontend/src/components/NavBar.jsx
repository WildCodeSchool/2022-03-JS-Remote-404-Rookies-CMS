import { HashLink as Link } from "react-router-hash-link";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import ExportContext from "../contexts/Context";

export default function Navbar() {
  const { language, selectLanguage, media } = useContext(ExportContext.Context);

  const [data, setData] = useState([]);

  const [css, setCss] = useState("mt-2");
  const [css1, setCss1] = useState("nav");
  const [css2, setCss2] = useState("menu-bg");
  const [click, setClick] = useState(false);

  const options = [
    { value: 1, label: "GB", state: true },
    { value: 2, label: "FR", state: true },
  ];

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/navigation/${language}`)
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
      <div className="flex justify-between align-center items-center my-14 mx-14">
        <img src={data?.image_link} alt={data?.image_alt} className="static" />
        <ul className="flex gap-10 font-bold text-xl">
          <Link to={`/page1/${language}`}>
            <li className="navTextGreen">
              {data.links && data.links[0].label}
            </li>
          </Link>
          <Link to={`/page2/${language}`}>
            <li>{data.links && data.links[1].label}</li>
          </Link>
          <Link to={`/page3/${language}`}>
            <li>{data.links && data.links[2].label}</li>
          </Link>
          <Link to={`/page4/${language}`} className="hidden">
            <li>{data.links && data.links[3].label}</li>
          </Link>
        </ul>
        <div className="flex flex-row">
          <button
            type="button"
            className="pt-2 pb-3 pl-3 pr-3 rounded-full buttonNav mr-10 text-xl text-white"
          >
            {data.links && data.links[4].label}
          </button>
          {language === "1" ? (
            <img
              className="w-10 h-10 justifdy-center items-center mr-2 mt-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ3TuVTTYPanFfn3EZRam9bMcnGfnT6zbknA&usqp=CAU"
              alt="britflag"
            />
          ) : (
            <img
              className="w-10 h-10 justifdy-center items-center mr-2 mt-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShiKc2vuXXlwonKWzUTu1LaaovzuuRA-k9MeN8vZ103iwRpVaSwmcCKfhWZPMmb02fgKE&usqp=CAU"
              alt="frenchflag"
            />
          )}
          <select
            className="border py-2 px-5"
            name="language"
            id="language"
            onChange={(e) => selectLanguage(e.target.value)}
          >
            {options
              .filter((option) => option.state === true)
              .map((option) => {
                return (
                  <option
                    id="option"
                    value={option.value}
                    label={option.label}
                    key={option.value}
                  />
                );
              })}
          </select>
        </div>
      </div>
    );
  } else {
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
                <Link to={`/page1/${language}`}>
                  <li className="navTextGreen -mt-4">
                    {data.links && data.links[0].label}
                  </li>
                </Link>
                <Link to={`/page2/${language}`}>
                  <li>{data.links && data.links[1].label}</li>
                </Link>
                <Link to={`/page3/${language}`}>
                  <li>{data.links && data.links[2].label}</li>
                </Link>
                <Link to={`/page4/${language}`} className="hidden">
                  <li>{data.links && data.links[3].label}</li>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
