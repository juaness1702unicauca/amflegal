import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageSquare, Menu, X, Shield, Gavel } from 'lucide-react';
import { whatsappLink, WA_MESSAGES } from '../config/siteConfig';
import './Navbar.css';

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    handleScroll(); // Verificar estado inicial
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Fuerza Pública', path: '/fuerza-publica' },
    { label: 'Derecho Penal 24/7', path: '/derecho-penal' },
    { label: 'Planes', path: '/planes' },
    { label: 'Otros Servicios', path: '/otros-servicios' },
    { label: 'Equipo', path: '/equipo' },
    { label: 'Ubicaciones', path: '/ubicaciones' },
  ];

  const handleWhatsAppClick = () => {
    let msg = WA_MESSAGES.HOME_CAROUSEL_PENAL;
    if (location.pathname.includes('fuerza-publica') || location.pathname.includes('planes')) {
      msg = WA_MESSAGES.DESDE_SUSCRIPCIONES;
    }
    window.open(whatsappLink(undefined, msg), '_blank');
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">

          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} onClick={() => setMobileOpen(false)}>
            <img
              src="/assets/logos/Sin Fondo/AMF FIRMA LEGAL VINO TINTO.png"
              alt="AMF Firma Legal"
              className="navbar-logo-img"
              onError={(e) => {
                // Fallback text if logo file is not loaded
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div style={{ display: 'none', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.4rem', color: 'var(--color-wine)' }}>
              <span>AMF</span>
              <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--color-gold)', letterSpacing: '0.1em' }}>FIRMA LEGAL</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Navegación principal">
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={handleWhatsAppClick}
              className="btn btn-primary"
              style={{ padding: '0.65rem 1.3rem', fontSize: '0.9rem' }}
            >
              <MessageSquare size={16} />
              <span>Hablar con AMF</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div
            style={{
              padding: '1.5rem 0',
              borderTop: '1px solid var(--color-border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              backgroundColor: 'var(--color-paper)'
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontSize: '1.1rem',
                  fontWeight: location.pathname === item.path ? '700' : '500',
                  color: location.pathname === item.path ? 'var(--color-wine)' : 'var(--color-ink)',
                  padding: '0.5rem 0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span>{item.label}</span>
              </Link>
            ))}

            <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
              <button
                onClick={() => {
                  handleWhatsAppClick();
                  setMobileOpen(false);
                }}
                className="btn btn-gold"
                style={{ width: '100%' }}
              >
                <MessageSquare size={18} />
                <span>Hablar por WhatsApp</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
