import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExportContext from "./contexts/Context";

import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Footer from "./components/Footer";
import LogoCarouselAdmin from "./pages/CarouselLogoAdmin";
import Navbar from "./components/NavBar";
import Formulaire from "./components/Formulaire";
import "./App.css";

function App() {
  const { isFormOpen } = React.useContext(ExportContext.Context);
  return (
    <div>
      {isFormOpen && <Formulaire />}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/page1/:language" element={<Page1 />} />
          <Route path="/page2/:language" element={<Page2 />} />
          <Route path="/page3/:language" element={<Page3 />} />
          <Route path="/Page4/:language" element={<Page4 />} />
          <Route path="/Page5/:page5" element={<LogoCarouselAdmin />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
