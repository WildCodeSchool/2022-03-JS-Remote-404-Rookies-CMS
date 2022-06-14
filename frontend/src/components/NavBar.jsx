import { HashLink as Link } from "react-router-hash-link";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import ExportContext from "../contexts/Context";

export default function Navbar() {
  const { language, selectLanguage } = useContext(ExportContext.Context);
  /* eslint-disable camelcase */
  const [data, setData] = useState([]);

  const options = [
    { value: 1, label: "https://ibb.co/7QmD7Xx", state: true },
    { value: 2, label: "\uD83C\uDDEB\uD83C\uDDF7", state: true },
  ];

  useEffect(() => {
    axios
      /*eslint-disable*/
      .get("http://localhost:5000/navigation/" + `${language}`)
      .then((response) => {
        setData(response.data);
        // console.warn("data" + { data });
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [language]);

  return (
    <div className="flex justify-between align-center items-center my-14 mx-14">
      <img src={data[0]?.image_link} alt={data[0]?.image_alt} />
      <ul className="flex gap-10 font-bold text-xl">
        <Link to={`/page1/${language}`}>
          <li className="navTextGreen">{data[0]?.label}</li>
        </Link>
        <Link to={`/page2/${language}`}>
          <li>{data[1]?.label}</li>
        </Link>
        <Link to={`/page3/${language}`}>
          <li>{data[2]?.label}</li>
        </Link>
        <Link to={`/page4/${language}`}>
          <li>{data[3]?.label}</li>
        </Link>
      </ul>
      <div className="">
        <button
          type="button"
          className="pt-2 pb-3 pl-3 pr-3 rounded-full buttonNav mr-10 text-xl text-white"
        >
          {data[0]?.cta_label}
        </button>
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
}
