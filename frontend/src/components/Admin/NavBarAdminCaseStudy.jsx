import React from "react";
import { Link } from "react-router-dom";

function NavBarAdminCaseStudy() {
  return (
    <div className="flex flex-col justify-start text-center navbar-layout h-full w-full">
      <div className="flex flex-col justify-around border-4 border-green-400 text-xl text-green-600 font-bold">
        <ul className="mb-4 flex flex-col justify-around m-4 underline">
          Page Case Study
          <li className="mb-12">
            <Link to="/dashboard/studyCase/home">Study Case Home</Link>
          </li>
          <li className="mb-12">
            <Link to="/dashboard/studyCase/projects">Projects</Link>
          </li>
          <li className="mb-12">
            <Link to="/dashboard/studyCase/cta">CTA</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBarAdminCaseStudy;
