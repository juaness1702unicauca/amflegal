import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { FuerzaPublica } from './pages/FuerzaPublica';
import { Planes } from './pages/Planes';
import { DerechoPenal } from './pages/DerechoPenal';
import { OtrosServicios } from './pages/OtrosServicios';
import { Equipo } from './pages/Equipo';
import { Ubicaciones } from './pages/Ubicaciones';
import { Formulario } from './pages/Formulario';

// Scroll to top helper on route navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-paper)' }}>
        <Navbar />
        <div className="page-content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fuerza-publica" element={<FuerzaPublica />} />
            <Route path="/planes" element={<Planes />} />
            <Route path="/derecho-penal" element={<DerechoPenal />} />
            <Route path="/otros-servicios" element={<OtrosServicios />} />
            <Route path="/equipo" element={<Equipo />} />
            <Route path="/ubicaciones" element={<Ubicaciones />} />
            <Route path="/formulario" element={<Formulario />} />
            {/* Catch-all fallback redirecting to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
