import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage.jsx";
import HomePage from "./pages/Home/HomePage.jsx";
import RegisterPage from "./pages/Register/RegisterPage.jsx";
import { AuthenticationProvider } from "./contexts/AuthenticationContext.jsx"; 

function App() {
  return (
    <BrowserRouter>
        <AuthenticationProvider>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
        </AuthenticationProvider>
    </BrowserRouter>
  );
}

export default App;