import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage.jsx";
import HomePage from "./pages/Home/HomePage.jsx";
import RegisterPage from "./pages/Register/RegisterPage.jsx";
import { HomeProvider } from "./contexts/HomeContext.jsx";

function App() {
  return (
    <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/" element={
        <HomeProvider>
          <HomePage />
        </HomeProvider>
      }
    />
  </Routes>
  );
}

export default App;