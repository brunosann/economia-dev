import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Aside from "./components/aside/Aside";
import Header from "./components/header/Header";
import Dashboard from "./components/dashboard/Dashboard";
import { GlobalStorage } from "./GlobalStorage";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";

function App() {
  return (
    <GlobalStorage>
      <BrowserRouter>
        <Header />
        <Aside />
        <div className="container mt">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="login/*" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </GlobalStorage>
  );
}

export default App;
