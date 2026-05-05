import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import SmoothScroll from "./components/SmoothScroll";
import AmbientParticles from "./components/FallingDrops";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // Use Lenis if available, fallback to window
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="bg-sqz-bg text-sqz-ink min-h-screen relative" data-testid="app-root">
      <SmoothScroll />
      <Cursor />
      <AmbientParticles count={6} />
      <div className="grain" aria-hidden="true" />
      <ScrollToTop />
      <Navbar />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}
