/* eslint-disable import/no-unresolved */
import { Outlet } from "react-router-dom";

import React from "react";
import NavBarAdminCompany from "../components/Admin/NavBarAdminCompany";
import NavbarAdmin from "../components/Admin/NavbarAdmin";
import Page1 from "./Page1";

function AdminPageSchool() {
  return (
    <div className="flex flex-col h-full w-full">
      <NavbarAdmin />
      <div className="flex flex-row w-full h-full">
        <div className="flex flex-col justify-start text-center h-full w-full">
          <NavBarAdminCompany />
        </div>
        <div className="flex flex-col justify-start text-center h-1/12 w-3/4 object-contain">
          <Page1 />
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default AdminPageSchool;
