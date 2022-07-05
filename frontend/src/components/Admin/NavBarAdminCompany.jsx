import React from "react";
import { Link } from "react-router-dom";

function NavBarAdminCompany() {
  return (
    <div className="flex flex-col justify-start text-center navbar-layout h-full w-full p-12">
      <div className="flex flex-col justify-around border-4 border-green-400 text-xl text-green-600 font-bold">
        <ul className="flex flex-col justify-around m-4 underline mb-36">
          <li className="mb-36 p-12">
            <Link to="/dashboard/entreprise/home">Home</Link>
          </li>
          <li className="mb-36 mt-12">
            <Link to="/dashboard/entreprise/CarouselLogo">Carrousel Logo</Link>
          </li>
          <li className="mb-36">
            <Link to="/dashboard/entreprise/presentation">Presentation</Link>
          </li>
          <li className="mb-36">
            <Link to="/dashboard/entreprise/presentation_advantages">
              Presentation advantages
            </Link>
          </li>
          <li className="mb-36">
            <Link to="/dashboard/entreprise/process">Process</Link>
          </li>
          <li className="mb-36">
            <Link to="/dashboard/entreprise/profits">Profits</Link>
          </li>
          <li className="mb-36">
            <Link to="/dashboard/entreprise/CarrousselReview">
              Carousel review
            </Link>
          </li>
          <li className="mb-36">
            <Link to="/dashboard/entreprise/KPI">KPI</Link>
          </li>
          <li className="mb-36">
            <Link to="/dashboard/entreprise/QA">QA</Link>
          </li>
          <li className="mb-36">
            <Link to="/dashboard/entreprise/GetStarted">Get started</Link>
          </li>
          <li className="mb-36">
            <Link to="/dashboard/entreprise/Footer">Footer</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBarAdminCompany;
