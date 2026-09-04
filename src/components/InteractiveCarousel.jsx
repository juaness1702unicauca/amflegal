import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  Scale,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  MessageSquare
} from 'lucide-react';
import { whatsappLink, WA_MESSAGES, getAssetUrl } from '../config/siteConfig';
import './InteractiveCarousel.css';

// Icono oficial de WhatsApp 🟢
const WhatsAppIcon = ({ size = 22, color = 'currentColor' }) => (
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

// Icono de la Bandera de Colombia 🇨🇴
const ColombiaFlagIcon = ({ width = 40, height = 26 }) => (
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
    {/* Franja Amarilla (50%) */}
    <rect x="0" y="0" width="36" height="12" fill="#FCD116" />
    {/* Franja Azul (25%) */}
    <rect x="0" y="12" width="36" height="6" fill="#003893" />
    {/* Franja Roja (25%) */}
    <rect x="0" y="18" width="36" height="6" fill="#CE1126" />
  </svg>
);

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
      bgImage: getAssetUrl('assets/BACKGROUNDS/FUERZAS ARMADAS.png'),
      badge: 'DEFENSA PARA FUERZAS ARMADAS Y POLICÍA',
      headline: 'Protección Jurídica para la Fuerza Pública',
      subheadline: 'Consultas ilimitadas, defensa técnica disciplinaria y cobertura legal permanente para ti y tu familia.',
      primaryBtnText: 'Afiliarme por WhatsApp',
      primaryAction: () => {
        window.open(whatsappLink(undefined, WA_MESSAGES.HOME_CAROUSEL_FUERZA_PUBLICA), '_blank');
      },
      secondaryBtnText: 'Ver Planes y Precios →',
      secondaryAction: () => navigate('/planes'),
      titleIcon: <ColombiaFlagIcon width={40} height={26} />
    },
    {
      id: 'defensa-penal',
      bgImage: getAssetUrl('assets/BACKGROUNDS/JUSTICIA PENAL ESTRATEGICA.png'),
      badge: 'RESPUESTA JURÍDICA INMEDIATA 24/7',
      headline: 'Defensa Penal Estratégica 24/7',
      subheadline: 'Representación experta las 24 horas ante capturas, investigaciones, citaciones de Fiscalía y audiencias.',
      primaryBtnText: 'Hablar con Penalista 24/7',
      primaryAction: () => {
        window.open(whatsappLink(undefined, WA_MESSAGES.HOME_CAROUSEL_PENAL), '_blank');
      },
      secondaryBtnText: 'Contar mi Caso en Formulario →',
      secondaryAction: () => navigate('/formulario'),
      titleIcon: <Scale size={38} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
    }
  ];

  const currentSlide = slides[currentIndex];

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        margin: '0 auto'
      }}
      aria-roledescription="carrusel"
      aria-label="Carrusel de Inicio AMF"
    >
      {/* Background Image Layers - FULL BLEED 100vw */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          style={{
            position: 'absolute',
            top: '-4.5rem',
            bottom: '-4.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100vw',
            backgroundImage: `linear-gradient(135deg, rgba(20, 1, 4, 0.82) 0%, rgba(53, 1, 8, 0.78) 50%, rgba(10, 0, 2, 0.90) 100%), url("${slide.bgImage}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: currentIndex === idx ? 1 : 0,
            transition: 'opacity 0.8s ease-in-out',
            zIndex: 0,
            pointerEvents: 'none'
          }}
        />
      ))}

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '960px', margin: '0 auto' }}>

        {/* Minimalist Side Arrow Left */}
        <button
          onClick={() => handleManualSwitch(currentIndex === 0 ? 1 : 0)}
          style={{
            position: 'absolute',
            left: '-10px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            background: 'rgba(53, 1, 8, 0.85)',
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
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(53, 1, 8, 0.85)'; e.currentTarget.style.color = 'var(--color-gold)'; }}
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
            right: '-10px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            background: 'rgba(53, 1, 8, 0.85)',
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
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(53, 1, 8, 0.85)'; e.currentTarget.style.color = 'var(--color-gold)'; }}
          aria-label="Siguiente tarjeta"
          title="Siguiente"
        >
          <ChevronRight size={26} />
        </button>

        {/* Clean Slide Content with smooth fade */}
        <div
          style={{
            textAlign: 'center',
            padding: '1rem 1rem',
            opacity: fade ? 1 : 0,
            transform: fade ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.25s ease, transform 0.25s ease'
          }}
        >

          {/* Headline de Alto Impacto Directo con icono en el mismo renglón */}
          <h1
            className="text-serif"
            style={{
              fontSize: 'clamp(2.1rem, 4.5vw, 3.4rem)',
              color: 'var(--color-paper)',
              lineHeight: '1.2',
              marginBottom: '1rem',
              maxWidth: '900px',
              margin: '0 auto 1rem auto'
            }}
          >
            {currentSlide.headline}{' '}
            <span style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '0.4rem', whiteSpace: 'nowrap' }}>
              {currentSlide.titleIcon}
            </span>
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
              style={{ fontSize: '1.08rem', padding: '1.05rem 2.2rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <WhatsAppIcon size={22} />
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

    </div>
  );
};
