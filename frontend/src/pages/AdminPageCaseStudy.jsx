/* eslint-disable import/no-unresolved */
import { Outlet } from "react-router-dom";

import React from "react";
import NavBarAdminCaseStudy from "../components/Admin/NavbarAdminCaseStudy";
import NavbarAdmin from "../components/Admin/NavbarAdmin";
import Page3 from "./Page3";

function AdminPageCaseStudy() {
  return (
    <div className="flex flex-col h-full w-full">
      <NavbarAdmin />
      <div className="flex flex-row w-full h-full">
        <div className="flex flex-col justify-start text-center h-full w-1/4">
          <NavBarAdminCaseStudy />
        </div>
        <div className="flex flex-col justify-start text-center h-1/12 w-3/4 object-contain">
          <Page3 />
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default AdminPageCaseStudy;
