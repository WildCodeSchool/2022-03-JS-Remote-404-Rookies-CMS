/* eslint-disable import/no-unresolved */
import { Outlet } from "react-router-dom";
import React from "react";
import NavBarAdminCompany from "../components/Admin/NavbarAdminCompany";
import Page1 from "./Page1";

function AdminPage() {
  return (
    <div className="flex flex-row w-full">
      <div className="w-1/5">
        <NavBarAdminCompany />
      </div>
      <div className="flex flex-col justify-start text-center h-1/12 w-4/5 object-contain">
        <Page1 />
      </div>
      <Outlet />
    </div>
  );
}

export default AdminPage;
