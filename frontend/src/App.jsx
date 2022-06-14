import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExportContext from "./contexts/Context";

import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
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
          <Route path="/page1/:language_id" element={<Page1 />} />
          <Route path="/page2/:language_id" element={<Page2 />} />
          <Route path="/page3/:language_id" element={<Page3 />} />
          <Route path="/Page4/:language_id" element={<Page4 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
