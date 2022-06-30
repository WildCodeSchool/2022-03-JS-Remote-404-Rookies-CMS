import { Outlet } from "react-router-dom";

import React from "react";
import NavbarAdmin from "../../components/Admin/NavbarAdmin";

function DashboardLayout() {
  return (
    <div className="flex w-full  ">
      <NavbarAdmin />
      <Outlet />
    </div>
  );
}
export default DashboardLayout;
