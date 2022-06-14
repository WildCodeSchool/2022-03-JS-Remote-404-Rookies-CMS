import { HashLink as Link } from "react-router-hash-link";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import ExportContext from "../contexts/Context";
import logo from "../assets/RookiesLogo.png";

export default function Navbar() {
  const { selectLanguage } = useContext(ExportContext.Context);
  /* eslint-disable camelcase */
  const { language_id } = useParams();
  const [data, setData] = useState([]);

  console.warn(data);

  const options = [
    { value: "1", label: "\uD83C\uDDEC\uD83C\uDDE7", state: true },
    { value: "2", label: "\uD83C\uDDEB\uD83C\uDDF7", state: true },
  ];

  useEffect(() => {
    axios.get`http://localhost:5000/navigation/${language_id}`
      .then((response) => {
        console.warn(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  return (
    <div className="flex justify-between align-center items-center my-14 mx-14">
      <img src={logo} alt="logo Rookies" />
      <ul className="flex gap-10 font-bold text-xl">
        <Link to="/page1/:language_id">
          <li className="navTextGreen">Companies</li>
        </Link>
        <Link to="/page2/:language_id">
          <li>Universities</li>
        </Link>
        <Link to="/page3/:language_id">
          <li>Students</li>
        </Link>
        <Link to="/page4/:language_id">
          <li>About</li>
        </Link>
      </ul>
      <div className="">
        <button
          type="button"
          className="pt-2 pb-3 pl-3 pr-3 rounded-full buttonNav mr-10 text-xl text-white"
        >
          contact us
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
                  key={option.value}
                  label={option.label}
                />
              );
            })}
        </select>
      </div>
    </div>
  );
}
