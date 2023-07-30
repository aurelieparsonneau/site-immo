import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./components/Accueil";
import Avendre from "./components/Avendre";
import Alouer from "./components/Alouer";
import Agents from "./components/Agents";
import Footer from "./components/Footer";
import Utilisation from "./components/Utilisation";
import React from "react";
import Confidentialite from "./components/Confidentialite";
import Cookies from "./components/Cookies";
import Mentions from "./components/Mentions";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="avendre" element={<Avendre />} />
          <Route path="alouer" element={<Alouer />} />
          <Route path="agents" element={<Agents />} />
          <Route path="utilisation" element={<Utilisation />} />
          <Route path="confidentialite" element={<Confidentialite />} />
          <Route path="cookies" element={<Cookies />} />
          <Route path="mentions" element={<Mentions />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
