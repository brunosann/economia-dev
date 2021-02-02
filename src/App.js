import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Aside from "./components/aside/Aside";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { GlobalStorage } from "./GlobalStorage";

function App() {
  return (
    <GlobalStorage>
      <BrowserRouter>
        <Header />
        <Aside />
        <div className="container mt">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </GlobalStorage>
  );
}

export default App;
