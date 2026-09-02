import React from 'react';
import { useNavigate } from 'react-router-dom';
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
import { whatsappLink, WA_MESSAGES } from '../config/siteConfig';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <main>

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
            <span className="badge badge-gold" style={{ marginBottom: '1rem' }}>Cobertura Jurídica Integral</span>
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

          <div className="grid-2" style={{ gap: '1.5rem', maxWidth: '750px', margin: '0 auto' }}>

            <div className="card card-dark" style={{ padding: '2rem', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase' }}>PROTECCIÓN PERMANENTE</span>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--color-paper)', margin: '0.5rem 0' }}>Soy Fuerza Pública</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-on-dark-muted)', marginBottom: '1.5rem' }}>
                  Quiero suscripción con consultas ilimitadas y protección familiar.
                </p>
              </div>
              <button
                onClick={() => navigate('/planes')}
                className="btn btn-gold"
                style={{ width: '100%', fontSize: '0.95rem' }}
              >
                Ver suscripciones →
              </button>
            </div>

            <div className="card card-dark" style={{ padding: '2rem', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-gold)', textTransform: 'uppercase' }}>NECESITO ACTUAR AHORA</span>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--color-paper)', margin: '0.5rem 0' }}>Tengo una situación penal</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-on-dark-muted)', marginBottom: '1.5rem' }}>
                  Investigaciones, citaciones, capturas u orientación penal 24/7.
                </p>
              </div>
              <button
                onClick={() => window.open(whatsappLink(undefined, WA_MESSAGES.DESDE_PENAL), '_blank')}
                className="btn btn-primary"
                style={{ width: '100%', fontSize: '0.95rem', backgroundColor: 'var(--color-wine-hover)' }}
              >
                Hablar con AMF →
              </button>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
};
