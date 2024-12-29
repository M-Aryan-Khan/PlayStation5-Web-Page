import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FrontPage from "./components/FrontPage";
import Navbar from "./components/Navbar";
import PS5SpecsPage from "./components/Ps5SpecsPage";
import Ps5GameSpecsPage from "./components/Ps5GameSpecsPage";
import Headphones from "./components/Headphones";
import Controller from "./components/Controller";
import HardWare from "./components/HardWare";
import "./components/styles.css";
import Games from "./components/Games";
import Services from "./components/Services";
import BackToTopButton from "./components/BackToTopButton";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <FrontPage />
              <PS5SpecsPage />
              <Ps5GameSpecsPage />
              <Headphones />
              <Controller />
              <BackToTopButton />
            </>
          }
        />
        <Route path="/accessories" element={<><HardWare /> <BackToTopButton/></>} />
        <Route path="/games" element={<><Games /><BackToTopButton/></>} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
