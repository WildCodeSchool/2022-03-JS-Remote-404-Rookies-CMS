import React from "react";
import { Link } from "react-router-dom";

function NavBarAdminCompany() {
  return (
    <div className="flex flex-col justify-start text-center navbar-layout h-full w-full">
      <div className="flex flex-col justify-around border-4 border-green-400 text-4xl text-green-600 font-bold">
        <ul className="flex flex-col justify-around underline">
          <li className="mb-52 mt-52">
            <Link to="/dashboard/company/home">Home</Link>
          </li>
          <li className="mb-52 mt-52">
            <Link to="/dashboard/company/carousellogo">Carrousel Logo</Link>
          </li>
          <li className="mb-52 mt-52">
            <Link to="/dashboard/company/presentation">Presentation</Link>
          </li>
          <li className="mb-52 mt-52">
            <Link to="/dashboard/company/presentationadvantages">
              Presentation advantages
            </Link>
          </li>
          <li className="my-96">
            <Link to="/dashboard/company/process">Process</Link>
          </li>
          <li className="my-96">
            <Link to="/dashboard/company/profits">Profits</Link>
          </li>
          <li className="my-72">
            <Link to="/dashboard/company/CarrousselReview">
              Carousel review
            </Link>
          </li>
          <li className="my-72">
            <Link to="/dashboard/company/KPI">KPI</Link>
          </li>
          <li className="my-96">
            <Link to="/dashboard/company/QA">QA</Link>
          </li>
          <li className="mb-52 mt-36">
            <Link to="/dashboard/company/newsletter">NewsLetter</Link>
          </li>
          <li className="mb-52 mt-36">
            <Link to="/dashboard/company/footer">Footer</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBarAdminCompany;
