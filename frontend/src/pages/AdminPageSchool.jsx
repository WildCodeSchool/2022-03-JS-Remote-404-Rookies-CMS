/* eslint-disable import/no-unresolved */
import { Outlet } from "react-router-dom";

import React from "react";
import NavBarAdminSchool from "../components/Admin/NavBarAdminSchool";
import NavbarAdmin from "../components/Admin/NavbarAdmin";
import Page2 from "./Page2";

function AdminPageCompany() {
  return (
    <div className="flex flex-col h-full w-full">
      <NavbarAdmin />
      <div className="flex flex-row w-full h-full">
        <div className="flex flex-col justify-start text-center h-full w-full">
          <NavBarAdminSchool />
        </div>
        <div className="flex flex-col justify-start text-center h-1/12 w-3/4 object-contain">
          <Page2 />
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default AdminPageCompany;
