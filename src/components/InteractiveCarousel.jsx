import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  Scale,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  MessageSquare
} from 'lucide-react';
import { whatsappLink, WA_MESSAGES } from '../config/siteConfig';
import './InteractiveCarousel.css';

export const InteractiveCarousel = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fade, setFade] = useState(true);

  // Check system prefers-reduced-motion for WCAG 2.2.2 compliance
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) setIsPaused(true);

    const handleChange = (e) => {
      if (e.matches) setIsPaused(true);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  // Reliable Auto-switch slide every 10 seconds (10000ms)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev === 0 ? 1 : 0));
        setFade(true);
      }, 250); // smooth 250ms fade transition
    }, 10000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleManualSwitch = (newIndex) => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setFade(true);
    }, 150);
  };

  const slides = [
    {
      id: 'fuerza-publica',
      badge: 'DEFENSA PARA FUERZAS ARMADAS Y POLICÍA',
      headline: 'Protección Jurídica para la Fuerza Pública',
      subheadline: 'Consultas ilimitadas, defensa técnica disciplinaria y cobertura legal permanente para ti y tu familia.',
      primaryBtnText: 'Afiliarme por WhatsApp',
      primaryAction: () => {
        window.open(whatsappLink(undefined, WA_MESSAGES.HOME_CAROUSEL_FUERZA_PUBLICA), '_blank');
      },
      secondaryBtnText: 'Ver Planes y Precios →',
      secondaryAction: () => navigate('/planes'),
      icon: <ShieldCheck size={40} className="text-gold" />
    },
    {
      id: 'defensa-penal',
      badge: 'RESPUESTA JURÍDICA INMEDIATA 24/7',
      headline: 'Defensa Penal Estratégica 24/7',
      subheadline: 'Representación experta las 24 horas ante capturas, investigaciones, citaciones de Fiscalía y audiencias.',
      primaryBtnText: 'Hablar con Penalista 24/7',
      primaryAction: () => {
        window.open(whatsappLink(undefined, WA_MESSAGES.HOME_CAROUSEL_PENAL), '_blank');
      },
      secondaryBtnText: 'Contar mi Caso en Formulario →',
      secondaryAction: () => navigate('/formulario'),
      icon: <Scale size={40} className="text-gold" />
    }
  ];

  const currentSlide = slides[currentIndex];

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '960px',
        margin: '0 auto',
        padding: '0 1rem'
      }}
      aria-roledescription="carrusel"
      aria-label="Carrusel de Inicio AMF"
    >

      {/* Minimalist Side Arrow Left */}
      <button
        onClick={() => handleManualSwitch(currentIndex === 0 ? 1 : 0)}
        style={{
          position: 'absolute',
          left: '-20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'rgba(53, 1, 8, 0.75)',
          border: '2px solid var(--color-gold)',
          borderRadius: '50%',
          width: '46px',
          height: '46px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-gold)',
          cursor: 'pointer',
          boxShadow: '0 4px 18px rgba(0,0,0,0.5)',
          transition: 'all 0.25s ease'
        }}
        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-gold)'; e.currentTarget.style.color = 'var(--color-wine)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(53, 1, 8, 0.75)'; e.currentTarget.style.color = 'var(--color-gold)'; }}
        aria-label="Tarjeta anterior"
        title="Anterior"
      >
        <ChevronLeft size={26} />
      </button>

      {/* Minimalist Side Arrow Right */}
      <button
        onClick={() => handleManualSwitch(currentIndex === 0 ? 1 : 0)}
        style={{
          position: 'absolute',
          right: '-20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'rgba(53, 1, 8, 0.75)',
          border: '2px solid var(--color-gold)',
          borderRadius: '50%',
          width: '46px',
          height: '46px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-gold)',
          cursor: 'pointer',
          boxShadow: '0 4px 18px rgba(0,0,0,0.5)',
          transition: 'all 0.25s ease'
        }}
        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-gold)'; e.currentTarget.style.color = 'var(--color-wine)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(53, 1, 8, 0.75)'; e.currentTarget.style.color = 'var(--color-gold)'; }}
        aria-label="Siguiente tarjeta"
        title="Siguiente"
      >
        <ChevronRight size={26} />
      </button>

      {/* Clean Slide Content with smooth fade */}
      <div
        style={{
          textAlign: 'center',
          padding: '1rem 0',
          opacity: fade ? 1 : 0,
          transform: fade ? 'translateY(0)' : 'translateY(8px)',
          transition: 'opacity 0.25s ease, transform 0.25s ease'
        }}
      >
        {/* Badge distintivo del servicio */}
        <span
          className="badge badge-gold"
          style={{
            marginBottom: '1rem',
            fontSize: '0.85rem',
            letterSpacing: '0.05em',
            padding: '0.4rem 1rem'
          }}
        >
          {currentSlide.badge}
        </span>

        {/* Headline de Alto Impacto Directo */}
        <h1
          className="text-serif"
          style={{
            fontSize: 'clamp(2.1rem, 4.5vw, 3.4rem)',
            color: 'var(--color-paper)',
            lineHeight: '1.15',
            marginBottom: '1rem',
            maxWidth: '900px',
            margin: '0 auto 1rem auto'
          }}
        >
          {currentSlide.headline}
        </h1>

        {/* Subtítulo Conciso y Directo */}
        <p
          style={{
            fontSize: 'clamp(1.1rem, 1.9vw, 1.3rem)',
            color: 'var(--color-text-on-dark-muted)',
            maxWidth: '750px',
            margin: '0 auto 2.2rem auto',
            lineHeight: '1.5'
          }}
        >
          {currentSlide.subheadline}
        </p>

        {/* Dual Action Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.2rem', marginBottom: '2.5rem' }}>

          {/* Botón Primario: WhatsApp */}
          <button
            onClick={currentSlide.primaryAction}
            className="btn btn-gold"
            style={{ fontSize: '1.08rem', padding: '1.05rem 2.2rem', fontWeight: 700 }}
          >
            <MessageSquare size={20} />
            <span>{currentSlide.primaryBtnText}</span>
          </button>

          {/* Botón Secundario */}
          <button
            onClick={currentSlide.secondaryAction}
            style={{
              background: 'linear-gradient(135deg, rgba(169, 134, 62, 0.3) 0%, rgba(53, 1, 8, 0.7) 100%)',
              color: 'var(--color-paper)',
              border: '2px solid var(--color-gold)',
              borderRadius: 'var(--radius-md)',
              padding: '1.05rem 2.2rem',
              fontWeight: 700,
              fontSize: '1.08rem',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(169, 134, 62, 0.35)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--color-gold)';
              e.currentTarget.style.color = 'var(--color-wine)';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(169, 134, 62, 0.55)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(169, 134, 62, 0.3) 0%, rgba(53, 1, 8, 0.7) 100%)';
              e.currentTarget.style.color = 'var(--color-paper)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(169, 134, 62, 0.35)';
            }}
          >
            <span>{currentSlide.secondaryBtnText}</span>
          </button>

        </div>

      </div>

      {/* Control Bar Inferior: Indicador de Diapositiva y Pausa (10s) */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginTop: '0.5rem' }}>

        {/* Dot Indicators */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => handleManualSwitch(idx)}
              style={{
                width: currentIndex === idx ? '40px' : '12px',
                height: '12px',
                borderRadius: '999px',
                backgroundColor: currentIndex === idx ? 'var(--color-gold)' : 'rgba(253, 249, 242, 0.3)',
                border: currentIndex === idx ? '1px solid #FFF' : 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              aria-label={`Ir a tarjeta ${idx + 1}`}
              title={idx === 0 ? 'Fuerza Pública' : 'Defensa Penal 24/7'}
            />
          ))}
        </div>

        {/* Pause/Play Compliance Control */}
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="pause-pill"
          style={{ fontSize: '0.85rem', padding: '0.4rem 0.95rem', fontWeight: 600 }}
          title={isPaused ? 'Reanudar rotación' : 'Pausar rotación'}
        >
          {isPaused ? <Play size={14} /> : <Pause size={14} />}
          <span>{isPaused ? 'Pausado' : 'Auto 10s'}</span>
        </button>

      </div>

    </div>
  );
};
