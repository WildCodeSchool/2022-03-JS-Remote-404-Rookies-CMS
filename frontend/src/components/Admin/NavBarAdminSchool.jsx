import React from "react";
import { Link } from "react-router-dom";

function NavBarAdminSchool() {
  return (
    <div className="flex flex-col justify-start text-center navbar-layout h-full w-full">
      <div className="flex flex-col justify-around border-4 border-green-400 text-xl text-green-600 font-bold">
        <ul className="mb-4 flex flex-col justify-around m-4 underline">
          Page School
          <li className="mb-12">
            <Link to="/dashboard/school/home">Home</Link>
          </li>
          <li className="mb-12">
            <Link to="/dashboard/shcool/formulaire">Formulaire</Link>
          </li>
          <li className="mb-12">
            <Link to="/dashboard/shcool/carouselLogo">Carroussel Logo</Link>
          </li>
          <li className="mb-12">
            <Link to="/dashboard/school/presentation">Presentation</Link>
          </li>
          <li className="mb-12">
            <Link to="/dashboard/school/process">Process</Link>
          </li>
          <li>
            <Link to="/dashboard/school/profit">Profit</Link>
          </li>
          <li className="mb-12">
            <Link to="/dashboard/school/carrousselReview">
              Carroussel Review
            </Link>
          </li>
          <li className="mb-12">
            <Link to="/dashboard/school/QA">QA</Link>
          </li>
          <li className="mb-12">
            <Link to="/dashboard/school/newsletter">Newsletter</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBarAdminSchool;
