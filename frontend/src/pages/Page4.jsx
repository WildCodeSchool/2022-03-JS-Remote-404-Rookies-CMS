import { Outlet } from "react-router-dom";

import React from "react";
import NavbarAdmin from "../components/Admin/NavbarAdmin";
import Page1 from "./Page1";

function AdminPage() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col justify-start text-center h-full w-full">
        <NavbarAdmin />
      </div>
      <div className="flex flex-col justify-start text-center h-1/12 w-full object-contain">
        <Page1 />
      </div>
      <Outlet />
    </div>
  );
}

export default AdminPage;
