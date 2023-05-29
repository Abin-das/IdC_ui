import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/Page1/HomePage";
import SecondPage from "./Components/Page2/Second";
import ThankYou from "./Components/Page4/ThankYou";
import ThirdPage from "./Components/Page3/ThirdPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SecondPage" element={<SecondPage />} />
          <Route path="/ThirdPage" element={<ThirdPage />} />
          <Route path="/ThankYou" element={<ThankYou />} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
