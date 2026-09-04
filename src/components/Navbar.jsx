import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const logoWine  = '/assets/logos/Sin Fondo/AMF FIRMA LEGAL VINO TINTO.png';
const logoCrema = '/assets/logos/Sin Fondo/AMF FIRMA LEGAL CREMA .png';

const WhatsAppIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    style={{ display: 'block', flexShrink: 0 }}
  >
    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.201.3-.777.978-.953 1.179-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.424-1.496-.896-.798-1.502-1.784-1.678-2.085-.176-.301-.019-.464.131-.614.136-.135.301-.351.452-.527.15-.176.201-.301.301-.502.1-.201.05-.377-.025-.527-.075-.15-.678-1.633-.929-2.237-.244-.588-.492-.508-.678-.517-.176-.008-.377-.01-.578-.01s-.527.075-.803.377c-.276.3-1.054 1.03-1.054 2.513s1.08 2.914 1.23 3.114c.15.2 2.125 3.245 5.15 4.553.72.31 1.282.495 1.721.635.724.23 1.383.197 1.904.12.58-.087 1.78-.727 2.03-1.43.25-.703.25-1.305.176-1.43-.075-.125-.276-.201-.577-.351z" />
    <path d="M12.004 2c-5.523 0-10 4.477-10 10 0 1.77.46 3.435 1.266 4.887L2 22l5.248-1.237A9.957 9.957 0 0 0 12.004 22c5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.2a8.163 8.163 0 0 1-4.168-1.144l-.299-.177-3.1 0.73.737-3.022-.194-.31a8.168 8.168 0 0 1-1.18-4.277c0-4.524 3.68-8.2 8.204-8.2 4.524 0 8.2 3.676 8.2 8.2 0 4.524-3.676 8.2-8.204 8.2z" />
  </svg>
);

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Detectar si estamos en cualquier pestaña / subpágina interna diferente a Inicio
  const isDarkNav = location.pathname !== '/';

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
    { label: 'Clientes', path: '/clientes' },
    { label: 'Equipo', path: '/equipo' },
    { label: 'Ubicaciones', path: '/ubicaciones' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''} ${isDarkNav ? 'navbar-dark' : ''}`}>
      <div className="container">
        <div className="navbar-content">

          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} onClick={() => setMobileOpen(false)}>
            <img
              src={isDarkNav ? logoCrema : logoWine}
              alt="AMF Firma Legal - Abogados en Colombia"
              className="navbar-logo-img"
              onError={(e) => {
                // Fallback text if logo file is not loaded
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div style={{ display: 'none', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.4rem', color: isDarkNav ? 'var(--color-paper)' : 'var(--color-wine)' }}>
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            <button
              onClick={() => navigate('/formulario')}
              className={`btn ${isDarkNav ? 'btn-gold' : 'btn-primary'}`}
              style={{ padding: '0.55rem 1.1rem', fontSize: '0.85rem', whiteSpace: 'nowrap' }}
            >
              <WhatsAppIcon size={16} />
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
              padding: '1rem 0 1.5rem',
              borderTop: isDarkNav ? '1px solid rgba(169, 134, 62, 0.3)' : '1px solid var(--color-border)',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: isDarkNav ? '#350108' : 'var(--color-paper)'
            }}
          >
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className="mobile-nav-link"
                onClick={() => setMobileOpen(false)}
                style={{
                  fontSize: '1.05rem',
                  fontWeight: location.pathname === item.path ? '700' : '500',
                  color: isDarkNav
                    ? (location.pathname === item.path ? 'var(--color-gold)' : 'var(--color-paper)')
                    : (location.pathname === item.path ? '#34110B' : 'var(--color-ink)'),
                  padding: '0.85rem 0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: index < navItems.length - 1
                    ? (isDarkNav ? '2px solid rgba(253, 249, 242, 0.15)' : '2px solid rgba(52, 17, 11, 0.25)')
                    : 'none'
                }}
              >
                <span>{item.label}</span>
              </Link>
            ))}

            <div style={{ paddingTop: '1.25rem', marginTop: '0.5rem' }}>
              <button
                onClick={() => {
                  navigate('/formulario');
                  setMobileOpen(false);
                }}
                className="btn btn-gold"
                style={{ width: '100%' }}
              >
                <WhatsAppIcon size={18} />
                <span>Hablar con AMF</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};

