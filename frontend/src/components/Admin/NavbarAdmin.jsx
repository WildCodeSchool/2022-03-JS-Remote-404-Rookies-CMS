import React from "react";
import { Link } from "react-router-dom";

function NavbarAdmin() {
  return (
    <div className="flex flex-row text-center justify-evenly navbar-layout h-full w-full">
      <div className="flex flex-row border-4 justify-evenly border-green-400 text-xl text-green-600 font-bold w-full">
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
    </div>
  );
}

export default NavbarAdmin;
