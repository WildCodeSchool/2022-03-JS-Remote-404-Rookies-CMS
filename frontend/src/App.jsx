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
import PresentationAdmin from "./components/Admin/PresentationAdmin";
import NavbarAdmin from "./components/Admin/NavbarAdmin";
import ProcessAdmin from "./components/Admin/ProcessAdmin";

import LogoCarouselAdmin from "./components/Admin/CarouselLogoAdmin";

import Formulaire from "./components/Formulaire";
import "./App.css";
import HomeAdmin from "./components/Admin/HomeAdmin";
import KpiAdmin from "./components/Admin/KpiAdmin";
import NewsletterAdmin from "./components/Admin/NewsletterAdmin";
import ProfitsAdmin from "./components/Admin/ProfitsAdmin";
import FooterAdmin from "./components/Admin/FooterAdmin";
import PresentationAdvantagesAdmin from "./components/Admin/PresentationAdvantagesAdmin";
import CarrouselReviewAdmin from "./components/Admin/CarrouselReviewAdmin";
import QAAdmin from "./components/Admin/QaAdmin";
import StudyCaseHomeAdmin from "./components/Admin/StudyCaseHomeAdmin";
import CtaCaseStudy from "./components/Admin/CtaStudyCaseAdmin";
import ProjectAdmin from "./components/Admin/ProjectAdmin";
import ProjectAdminTest from "./components/Admin/ProjectAdminTest";

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
                <NavbarAdmin />
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route path="school" element={<AdminPageSchool />} />
            <Route path="company" element={<AdminPageCompany />} />
            <Route path="caseStudy" element={<AdminPageCaseStudy />} />
            <Route path="" element={<AdminPage />} />
            <Route
              path="company/:carousellogo"
              element={<LogoCarouselAdmin />}
            />
            <Route path="company/home" element={<HomeAdmin />} />
            <Route path="company/kpi" element={<KpiAdmin />} />
            <Route
              path="company/presentation"
              element={<PresentationAdmin />}
            />
            <Route path="company/newsletter" element={<NewsletterAdmin />} />
            <Route path="company/profits" element={<ProfitsAdmin />} />
            <Route path="company/process" element={<ProcessAdmin />} />
            <Route path="company/footer" element={<FooterAdmin />} />
            <Route
              path="company/presentationadvantages"
              element={<PresentationAdvantagesAdmin />}
            />
            <Route
              path="company/carrouselReview"
              element={<CarrouselReviewAdmin />}
            />
            <Route path="company/QA" element={<QAAdmin />} />
            <Route path="studyCase/home" element={<StudyCaseHomeAdmin />} />
            <Route path="studyCase/cta" element={<CtaCaseStudy />} />
            <Route path="studyCase/projects" element={<ProjectAdmin />} />
            <Route
              path="studyCase/projects/test"
              element={<ProjectAdminTest />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
