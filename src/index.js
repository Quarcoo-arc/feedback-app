import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AboutPage from "./Components/Pages/AboutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// <React.StrictMode> Implements additional checks

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
