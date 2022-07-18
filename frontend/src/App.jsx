/* eslint-disable import/no-unresolved */
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import MainLayout from "./pages/Layout/MainLayout";
import ExportContext from "./contexts/Context";

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
import QAAdmin from "./components/Admin/QAAdmin";
import StudyCaseHomeAdmin from "./components/Admin/StudyCaseHomeAdmin";
import CtaCaseStudy from "./components/Admin/CtaStudyCaseAdmin";
import ProjectAdminTest from "./components/Admin/ProjectAdminTest";
import FormContactUs from "./components/FormContactUs";
import LanguagesAdmin from "./components/Admin/LanguagesAdmin";
import FormulaireAdmin from "./components/Admin/FormulaireAdmin";
import NavigationElements from "./components/Admin/NavigationElements";

function App() {
  const { isFormOpen, user, isContactOpen, data } = React.useContext(
    ExportContext.Context
  );
  return (
    <div>
      {isFormOpen && <Formulaire />}
      {isContactOpen && <FormContactUs />}
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              index
              path={`:language/${data.links && data.links[0].path}`}
              element={<Page1 />}
            />
            <Route
              path={`:language/${data.links && data.links[1].path}`}
              element={<Page2 />}
            />
            <Route
              path={`:language/${data.links && data.links[2].path}`}
              element={<Page3 />}
            />
            <Route path="/rookies-admin" element={<Login />} />
            <Route path="" element={<Navigate to="EN/Company" />} />
          </Route>
          <Route
            path="/dashboard/"
            element={
              <ProtectedRoute user={user}>
                <Outlet />
              </ProtectedRoute>
            }
          >
            <Route path="school" element={<AdminPageSchool />} />
            <Route path="company" element={<AdminPageCompany />} />
            <Route path="caseStudy" element={<AdminPageCaseStudy />} />
            <Route path="languages" element={<LanguagesAdmin />} />
            <Route path="navigation" element={<NavigationElements />} />
            <Route path="" element={<AdminPage />} />
            <Route
              path="company/carousellogo"
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
            <Route path="school/presentation" element={<PresentationAdmin />} />
            <Route path="company/QA" element={<QAAdmin />} />
            <Route path="studyCase/home" element={<StudyCaseHomeAdmin />} />
            <Route path="studyCase/cta" element={<CtaCaseStudy />} />
            <Route path="studyCase/projects" element={<ProjectAdminTest />} />
            <Route path="school/formulaire" element={<FormulaireAdmin />} />
            <Route path="school/newsletter" element={<NewsletterAdmin />} />
            <Route path="school/profits" element={<ProfitsAdmin />} />
            <Route path="school/QA" element={<QAAdmin />} />
            <Route path="school/home" element={<HomeAdmin />} />
            <Route path="school/carousellogo" element={<LogoCarouselAdmin />} />
            <Route path="school/process" element={<ProcessAdmin />} />
            <Route
              path="school/carrouselReview"
              element={<CarrouselReviewAdmin />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
