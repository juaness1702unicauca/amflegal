import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ShieldCheck, Scale, Phone, ArrowUpRight } from 'lucide-react';
import { whatsappLink, WA_MESSAGES } from '../config/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';
import './Footer.css';

const logoCrema = '/assets/logos/Sin Fondo/AMF FIRMA LEGAL CREMA .png';

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-wine)', color: 'var(--color-paper)', paddingTop: '4rem', paddingBottom: '2.5rem', borderTop: '2px solid var(--color-gold)' }}>
      <div className="container">

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '3rem', marginBottom: '3.5rem' }}>

          {/* Column 1: Brand & Tagline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <img
              src={logoCrema}
              alt="AMF Firma Legal - Abogados en Colombia"
              loading="lazy"
              style={{ height: '52px', width: 'auto', objectFit: 'contain', alignSelf: 'flex-start' }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <h3 className="text-serif" style={{ fontSize: '1.3rem', color: 'var(--color-gold)' }}>
              AMF FIRMA LEGAL
            </h3>
            <p style={{ color: 'var(--color-text-on-dark-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Protección jurídica permanente para Fuerza Pública y defensa penal estratégica 24/7 en Colombia. Respaldamos tus decisiones cuando realmente importa.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-gold)' }}>
              <MapPin size={16} />
              <span>Bogotá · Cali · Medellín · Piendamó · Virtual</span>
            </div>
          </div>

          {/* Column 2: Líneas de Negocio */}
          <div>
            <h4 style={{ color: 'var(--color-gold)', fontSize: '1.1rem', marginBottom: '1.2rem', fontFamily: 'var(--font-serif)' }}>
              Líneas de Atención
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem' }}>
              <li>
                <Link to="/fuerza-publica" style={{ color: 'var(--color-text-on-dark-muted)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#FFF'}>
                  Suscripciones Fuerza Pública
                </Link>
              </li>
              <li>
                <Link to="/planes" style={{ color: 'var(--color-text-on-dark-muted)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#FFF'}>
                  Planes y Precios (Escudo, Fortaleza, Bastión)
                </Link>
              </li>
              <li>
                <Link to="/derecho-penal" style={{ color: 'var(--color-text-on-dark-muted)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#FFF'}>
                  Defensa Penal Estratégica 24/7
                </Link>
              </li>
              <li>
                <Link to="/otros-servicios" style={{ color: 'var(--color-text-on-dark-muted)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#FFF'}>
                  Otras Áreas Jurídicas
                </Link>
              </li>
              <li>
                <Link to="/clientes" style={{ color: 'var(--color-text-on-dark-muted)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#FFF'}>
                  Clientes Corporativos
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Atención Presencial & Transparencia */}
          <div>
            <h4 style={{ color: 'var(--color-gold)', fontSize: '1.1rem', marginBottom: '1.2rem', fontFamily: 'var(--font-serif)' }}>
              Atención Presencial & Virtual
            </h4>
            <p style={{ color: 'var(--color-text-on-dark-muted)', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: '1.5' }}>
              Atención presencial siempre mediante <strong>agendamiento previo</strong> en nuestras sedes de Bogotá, Cali, Piendamó y Medellín.
            </p>
            <Link
              to="/ubicaciones"
              className="btn btn-outline-light"
              style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', width: 'fit-content' }}
            >
              Ver Sedes y Agendamiento
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Column 4: Contacto Directo */}
          <div>
            <h4 style={{ color: 'var(--color-gold)', fontSize: '1.1rem', marginBottom: '1.2rem', fontFamily: 'var(--font-serif)' }}>
              Contacto Inmediato
            </h4>
            <p style={{ color: 'var(--color-text-on-dark-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
              ¿Tienes una urgencia o quieres afiliarte hoy mismo?
            </p>
            <a
              href={whatsappLink(undefined, WA_MESSAGES.DESDE_PENAL)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              style={{ width: '100%', fontSize: '0.9rem' }}
            >
              <WhatsAppIcon size={16} />
              <span>WhatsApp 24/7</span>
            </a>
          </div>

        </div>

        {/* Legal Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(253, 249, 242, 0.15)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.85rem',
            color: 'var(--color-text-on-dark-muted)'
          }}
        >
          <div>
            © {new Date().getFullYear()} AMF Firma Legal. Todos los derechos reservados. Colombia.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <span>* Las representaciones y servicios están sujetos a los términos de cada plan.</span>
            <Link to="/formulario" style={{ color: 'var(--color-gold)', textDecoration: 'underline' }}>
              Tratamiento de Datos (Ley 1581)
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
