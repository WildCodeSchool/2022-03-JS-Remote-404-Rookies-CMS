import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Navbar from "./components/NavBar";
import Module2S from "./components/Module2S";
import Module3E from "./components/Module3E";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/Page4" element={<Module3E />} />
        <Route path="/module" element={<Module2S />} />
      </Routes>
    </Router>
  );
}

export default App;
