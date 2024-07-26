import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage.jsx";
import HomePage from "./pages/Home/HomePage.jsx";
import RegisterPage from "./pages/Register/RegisterPage.jsx";
import { BuildingProvider } from "./contexts/BuildingContext.jsx";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={
        <BuildingProvider>
          <HomePage />
        </BuildingProvider>
      }
    />
  </Routes>
  );
}

export default App;