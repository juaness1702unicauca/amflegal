import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { SEOHead } from '../components/SEOHead';
import {
  ShieldCheck,
  Scale,
  MapPin,
  CreditCard,
  FileText,
  Building2,
  MessageSquare,
  ChevronRight,
  PhoneCall,
  ArrowRight,
  Gavel,
  HeartPulse,
  Landmark,
  Briefcase
} from 'lucide-react';
import { InteractiveCarousel } from '../components/InteractiveCarousel';
import { whatsappLink, WA_MESSAGES, getAssetUrl } from '../config/siteConfig';

const WhatsAppIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    style={{ flexShrink: 0, verticalAlign: 'middle' }}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const ColombiaFlagIcon = ({ width = 34, height = 22 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 36 24"
    style={{
      display: 'inline-block',
      verticalAlign: 'middle',
      borderRadius: '4px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
      border: '1px solid rgba(255, 255, 255, 0.35)',
      flexShrink: 0
    }}
  >
    <rect x="0" y="0" width="36" height="12" fill="#FCD116" />
    <rect x="0" y="12" width="36" height="6" fill="#003893" />
    <rect x="0" y="18" width="36" height="6" fill="#CE1126" />
  </svg>
);

export const Home = () => {
  const navigate = useNavigate();

  return (
    <main>
      <SEOHead pageKey="home" />

      {/* 1. HERO PRINCIPAL CON EL CARRUSEL LIMPIO SIN MARCO */}
      <section className="hero-wrapper" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
        <div className="container">

          {/* Carrusel Limpio Minimalista */}
          <InteractiveCarousel />

          {/* Barra inferior de Sedes / Señal de Confianza */}
          <div
            style={{
              marginTop: '3rem',
              paddingTop: '1.8rem',
              borderTop: '1px solid rgba(253, 249, 242, 0.15)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--color-gold)', fontWeight: 600, fontSize: '0.95rem' }}>
              <MapPin size={18} />
              <span>Bogotá · Cali · Medellín · Piendamó · Atención virtual nacional</span>
            </div>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-text-on-dark-muted)', opacity: 0.9 }}>
              * Atención presencial siempre mediante agendamiento previo.
            </span>
          </div>

        </div>
      </section>

      {/* 2. RESUMEN COMBINADO DE ÁREAS Y SERVICIOS AMF (BASADO EN BRIEF) */}
      <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container">

          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            <h2 className="text-serif" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--color-wine)', marginBottom: '0.6rem' }}>
              Servicios & Cobertura AMF Legal
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
              Respaldo legal estructurado tanto para prevención permanente como para respuesta estratégica inmediata en Colombia.
            </p>
          </div>

          <div className="grid-3" style={{ gap: '1.8rem' }}>

            {/* 1. Suscripciones Fuerza Pública */}
            <div
              className="card"
              onClick={() => navigate('/fuerza-publica')}
              style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#FFF' }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <ShieldCheck size={36} className="text-gold" />
                </div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-wine)', marginBottom: '0.6rem', fontFamily: 'var(--font-serif)' }}>
                  Suscripciones Fuerza Pública
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  Protección mensual para Policía Nacional, Ejército, Armada y FAC. Consultas ilimitadas, procesos disciplinarios y respaldo constitucional familiar.
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-gold)', fontWeight: 700, fontSize: '0.95rem' }}>
                <span>Ver suscripciones →</span>
              </div>
            </div>

            {/* 2. Defensa Penal 24/7 */}
            <div
              className="card"
              onClick={() => navigate('/derecho-penal')}
              style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#FFF' }}
            >
              <div>
                <Scale size={36} className="text-gold" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-wine)', marginBottom: '0.6rem', fontFamily: 'var(--font-serif)' }}>
                  Defensa Penal Estratégica 24/7
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  Respuesta inmediata ante capturas, investigaciones, citaciones de Fiscalía, audiencias y delitos de alta complejidad procesal.
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-gold)', fontWeight: 700, fontSize: '0.95rem' }}>
                <span>Ver asistencia penal →</span>
              </div>
            </div>

            {/* 3. Justicia Penal Militar & Policial */}
            <div
              className="card"
              onClick={() => navigate('/otros-servicios')}
              style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#FFF' }}
            >
              <div>
                <Gavel size={36} className="text-gold" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-wine)', marginBottom: '0.6rem', fontFamily: 'var(--font-serif)' }}>
                  Justicia Penal Militar & Policial
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  Representación especializada en fuero militar, investigaciones operacionales y actos vinculados al cumplimiento del deber.
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-gold)', fontWeight: 700, fontSize: '0.95rem' }}>
                <span>Conocer cobertura →</span>
              </div>
            </div>

            {/* 4. Protección Constitucional & Familiar */}
            <div
              className="card"
              onClick={() => navigate('/otros-servicios')}
              style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#FFF' }}
            >
              <div>
                <HeartPulse size={36} className="text-gold" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-wine)', marginBottom: '0.6rem', fontFamily: 'var(--font-serif)' }}>
                  Protección Constitucional & Salud
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  Acciones de tutela, derechos de petición, reclamos de salud, debido proceso y seguridad social para ti y tu grupo familiar.
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-gold)', fontWeight: 700, fontSize: '0.95rem' }}>
                <span>Ver derechos fundamentales →</span>
              </div>
            </div>

            {/* 5. Derecho Disciplinario & Administrativo */}
            <div
              className="card"
              onClick={() => navigate('/otros-servicios')}
              style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#FFF' }}
            >
              <div>
                <Landmark size={36} className="text-gold" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-wine)', marginBottom: '0.6rem', fontFamily: 'var(--font-serif)' }}>
                  Disciplinario & Administrativo
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  Defensa integral para servidores públicos ante la Procuraduría, Personerías y oficinas de control interno disciplinario.
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-gold)', fontWeight: 700, fontSize: '0.95rem' }}>
                <span>Ver defensa disciplinaria →</span>
              </div>
            </div>

            {/* 6. Otras Áreas Jurídicas Especializadas */}
            <div
              className="card"
              onClick={() => navigate('/otros-servicios')}
              style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#FFF' }}
            >
              <div>
                <Briefcase size={36} className="text-gold" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-wine)', marginBottom: '0.6rem', fontFamily: 'var(--font-serif)' }}>
                  Familia, Civil & Laboral
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  Asesoría y representación en controversias de derecho de familia, patrimoniales, laborales e insolvencia de personas naturales.
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-gold)', fontWeight: 700, fontSize: '0.95rem' }}>
                <span>Ver otras áreas →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GRAN CTA FINAL */}
      <section className="section section-dark" style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="container container-narrow" style={{ position: 'relative', zIndex: 2 }}>

          <h2 className="text-serif" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', color: 'var(--color-paper)', marginBottom: '1.2rem' }}>
            No necesitas saber qué tipo de abogado necesitas.<br />
            <span style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>Solo cuéntanos qué está pasando.</span>
          </h2>

          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-on-dark-muted)', marginBottom: '2.5rem' }}>
            En AMF escuchamos tu situación, evaluamos tus riesgos y te damos una solución clara de inmediato.
          </p>

          <div className="grid-2" style={{ gap: '1.8rem', maxWidth: '820px', margin: '0 auto' }}>

            {/* Tarjeta 1: Fuerza Pública con background del carrusel y bandera de Colombia en la esquina */}
            <div
              className="card card-dark"
              style={{
                padding: '2.2rem',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundImage: `linear-gradient(135deg, rgba(20, 1, 4, 0.88) 0%, rgba(53, 1, 8, 0.84) 50%, rgba(10, 0, 2, 0.94) 100%), url("${getAssetUrl('assets/BACKGROUNDS/FUERZAS ARMADAS.png')}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: '1px solid var(--color-border-gold)',
                boxShadow: '0 12px 36px rgba(0, 0, 0, 0.45)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>PROTECCIÓN PERMANENTE</span>
                  <ColombiaFlagIcon width={36} height={24} />
                </div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--color-paper)', margin: '0.5rem 0 0.8rem 0', fontFamily: 'var(--font-serif)' }}>
                  Soy Fuerza Pública
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-on-dark-muted)', marginBottom: '1.8rem', lineHeight: '1.55' }}>
                  Quiero suscripción con consultas ilimitadas y protección familiar.
                </p>
              </div>
              <button
                onClick={() => navigate('/planes')}
                className="btn btn-gold"
                style={{ width: '100%', fontSize: '0.98rem' }}
              >
                Ver suscripciones →
              </button>
            </div>

            {/* Tarjeta 2: Defensa Penal con background #1d0304, botón dorado e icono de WhatsApp */}
            <div
              className="card card-dark"
              style={{
                padding: '2.2rem',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundImage: `linear-gradient(135deg, rgba(29, 3, 4, 0.92) 0%, rgba(29, 3, 4, 0.88) 50%, rgba(15, 1, 2, 0.95) 100%), url("${getAssetUrl('assets/BACKGROUNDS/JUSTICIA PENAL ESTRATEGICA.png')}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: '#1d0304',
                border: '1px solid var(--color-border-gold)',
                boxShadow: '0 12px 36px rgba(0, 0, 0, 0.45)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>NECESITO ACTUAR AHORA</span>
                  <Scale size={28} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
                </div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--color-paper)', margin: '0.5rem 0 0.8rem 0', fontFamily: 'var(--font-serif)' }}>
                  Tengo una situación penal
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-on-dark-muted)', marginBottom: '1.8rem', lineHeight: '1.55' }}>
                  Investigaciones, citaciones, capturas u orientación penal 24/7.
                </p>
              </div>
              <button
                onClick={() => window.open(whatsappLink(undefined, WA_MESSAGES.DESDE_PENAL), '_blank')}
                className="btn btn-gold"
                style={{ width: '100%', fontSize: '0.98rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
              >
                <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Hablar con AMF 24/7 →</span>
              </button>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
};
