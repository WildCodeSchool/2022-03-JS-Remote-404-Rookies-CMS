/* eslint-disable import/no-unresolved */
import { Outlet } from "react-router-dom";

import React from "react";
import NavBarAdminCompany from "../components/Admin/NavBarAdminCompany";
import Page1 from "./Page1";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function AdminPageSchool() {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex flex-row w-full h-full">
        <div className="flex flex-col justify-start text-center h-full w-full">
          <NavBarAdminCompany />
        </div>
        <div className="flex flex-col justify-start text-center h-1/12 w-3/4 object-contain">
          <Navbar />
          <Page1 />
          <Footer />
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default AdminPageSchool;
