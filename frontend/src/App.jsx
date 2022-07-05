import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./pages/Layout/MainLayout";
import ExportContext from "./contexts/Context";

import DashboardLayout from "./pages/Layout/DashboardLayout";
import ProtectedRoute from "./pages/Layout/ProtectedRoute";
import Login from "./pages/Login";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import AdminPage from "./pages/Page4";
import AdminPageCompany from "./pages/AdminPageCompany";
import AdminPageSchool from "./pages/AdminPageSchool";
import AdminPageCaseStudy from "./pages/AdminPageCaseStudy";

import LogoCarouselAdmin from "./components/Admin/CarouselLogoAdmin";

import Formulaire from "./components/Formulaire";
import "./App.css";
import HomeAdmin from "./components/Admin/HomeAdmin";

function App() {
  const { isFormOpen, user } = React.useContext(ExportContext.Context);
  return (
    <div>
      {isFormOpen && <Formulaire />}
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path=":language/page1" element={<Page1 />} />
            <Route path=":language/page2" element={<Page2 />} />
            <Route path=":language/page3" element={<Page3 />} />
            <Route path="/rookies-admin" element={<Login />} />
          </Route>
          <Route
            path="/dashboard/"
            element={
              <ProtectedRoute user={user}>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route path="school" element={<AdminPageSchool />} />
            <Route path="company" element={<AdminPageCompany />} />
            <Route path="caseStudy" element={<AdminPageCaseStudy />} />
            <Route path="" element={<AdminPage />} />
            <Route path="logoCarousel" element={<LogoCarouselAdmin />} />
            <Route path="company/home" element={<HomeAdmin />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
