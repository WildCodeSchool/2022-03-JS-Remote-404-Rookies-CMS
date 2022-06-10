import { HashLink as Link } from "react-router-hash-link";
import logo from "../assets/RookiesLogo.png";

export default function Navbar() {
  const options = [
    { value: "english", label: "\uD83C\uDDEC\uD83C\uDDE7", state: true },
    { value: "french", label: "\uD83C\uDDEB\uD83C\uDDF7", state: false },
  ];
  return (
    <div className="flex justify-between align-center items-center my-14 mx-14">
      <img src={logo} alt="logo Rookies" />
      <ul className="flex gap-10 font-bold text-xl">
        <Link to="/">
          <li className="navTextGreen">Companies</li>
        </Link>
        <Link to="/page2">
          <li>Universities</li>
        </Link>
        <Link to="/page3">
          <li>Students</li>
        </Link>
        <Link to="/page4">
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
        <select className="border py-2 px-5" name="language" id="language">
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
