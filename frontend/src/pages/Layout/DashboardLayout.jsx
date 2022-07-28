import { Outlet } from "react-router-dom";

import React from "react";

function DashboardLayout() {
  return (
    <div className="flex w-full">
      <Outlet />
    </div>
  );
}
export default DashboardLayout;
