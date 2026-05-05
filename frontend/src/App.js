import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FallingDrops from "./components/FallingDrops";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";

export default function App() {
  return (
    <div className="relative min-h-screen" data-testid="app-root">
      <FallingDrops count={14} />
      <div className="relative z-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}
