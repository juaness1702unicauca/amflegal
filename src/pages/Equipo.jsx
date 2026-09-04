import React, { useState, useEffect } from 'react';
import { ShieldCheck, Scale, Award, MessageSquare, X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { whatsappLink, WA_MESSAGES, getAssetUrl } from '../config/siteConfig';
import { SEOHead } from '../components/SEOHead';
import './Equipo.css';

const estebanPhoto = getAssetUrl('assets/Equipo fotos/Esteban Avila.png');
const jorgePhoto   = getAssetUrl('assets/Equipo fotos/Jorge Florez.png');
const juanPhoto    = getAssetUrl('assets/Equipo fotos/Juan Gregorio.png');
const stevenPhoto  = getAssetUrl('assets/Equipo fotos/Steven Alegrias.png');
const martinezPhoto = getAssetUrl('assets/Equipo fotos/Martinez.png');

export const Equipo = () => {
  const [selectedMemberIndex, setSelectedMemberIndex] = useState(null);

  const teamMembers = [
    {
      name: 'Esteban Ávila Meneses',
      role: 'Socio Fundador – AMF Firma Legal',
      subtitle: 'Especialista en Derecho Procesal Penal (U. Externado)',
      bio: 'Abogado, especialista en Derecho Procesal Penal de la Universidad Externado de Colombia, con amplia experiencia en litigio estratégico y defensa técnica en escenarios judiciales y administrativos.',
      photo: estebanPhoto,
      badge: 'Socio Fundador'
    },
    {
      name: 'Jorge Ernesto Flórez Martínez',
      role: 'Socio Fundador – AMF Firma Legal',
      subtitle: 'Abogado Penalista | Esp. y Maestrando en Derecho Penal',
      bio: 'Abogado con sólida formación académica y experiencia práctica en Derecho Penal. Fue funcionario judicial de la Rama Judicial, desempeñándose en Juzgados Penales Municipales con Funciones de Control de Garantías y Juzgados Penales del Circuito con Funciones de Conocimiento en Santiago de Cali.',
      photo: jorgePhoto,
      objectPosition: 'center 45%',
      badge: 'Socio Fundador'
    },
    {
      name: 'Juan Gregorio Minda Cerón',
      role: 'Contador Público y Abogado',
      subtitle: 'Esp. en Finanzas y D. Procesal Penal | Maestrante en D. de Familia',
      bio: 'Contador Público y Abogado con amplia experiencia en asesoría jurídica, contable y financiera, integrando el análisis legal con la precisión técnica de la contabilidad, la auditoría y la gestión organizacional.',
      photo: juanPhoto,
      badge: 'Finanzas & Derecho'
    },
    {
      name: 'Steven Alegrías Bolaños',
      role: 'Abogado Especialista',
      subtitle: 'Derecho Administrativo y Derecho Legislativo (U. del Cauca)',
      bio: 'Abogado de la Universidad del Cauca, con enfoque en derecho administrativo y derecho legislativo. Cuenta con experiencia como auxiliar jurídico en oficinas jurídicas y entidades públicas, así como en el asesoramiento jurídico en el Congreso de la República.',
      photo: stevenPhoto,
      badge: 'Administrativo'
    },
    {
      name: 'Martínez',
      role: 'Abogado Especialista',
      subtitle: 'Derecho Administrativo y Derecho Legislativo (U. del Cauca)',
      bio: 'Abogado de la Universidad del Cauca, con enfoque en derecho administrativo y derecho legislativo. Cuenta con experiencia como auxiliar jurídico en oficinas jurídicas y entidades públicas, así como en el asesoramiento jurídico en el Congreso de la República.',
      photo: martinezPhoto,
      badge: 'Administrativo'
    }
  ];

  // Manejo de teclado en Modal (Esc, Flecha Izquierda, Flecha Derecha)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedMemberIndex === null) return;

      if (e.key === 'Escape') {
        setSelectedMemberIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setSelectedMemberIndex((prev) => (prev > 0 ? prev - 1 : teamMembers.length - 1));
      } else if (e.key === 'ArrowRight') {
        setSelectedMemberIndex((prev) => (prev < teamMembers.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMemberIndex, teamMembers.length]);

  const activeMember = selectedMemberIndex !== null ? teamMembers[selectedMemberIndex] : null;

  return (
    <main>
      <SEOHead pageKey="equipo" />
      {/* Header Equipo */}
      <section className="section" style={{ backgroundColor: 'var(--color-cream)', paddingTop: '2.5rem', paddingBottom: '3.5rem' }}>
        <div className="container text-center" style={{ maxWidth: '850px', margin: '0 auto' }}>
          <h1 className="text-serif" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', color: 'var(--color-wine)', marginBottom: '1rem' }}>
            Equipo Profesional AMF Firma Legal
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-ink)', lineHeight: '1.65' }}>
            Litigantes penalistas, administrativistas y contadores integrados bajo una estrategia de alto nivel.
          </p>
        </div>
      </section>

      {/* Grid del Equipo en Vista Resumida */}
      <section className="section" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="container">


          <div className="team-grid">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="team-card-summary"
                onClick={() => setSelectedMemberIndex(i)}
                title="Haz clic para ver trayectoria completa"
              >
                {/* Foto más grande en vista resumida (195px) */}
                <div className="team-photo-summary-wrapper">
                  <img
                    src={member.photo}
                    alt={`${member.name} - ${member.role} | AMF Firma Legal`}
                    loading="lazy"
                    className="team-photo-summary"
                    style={{ objectPosition: member.objectPosition || 'top center', ...(member.imgStyle || {}) }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerText = 'AMF';
                    }}
                  />
                </div>

                <span className="badge badge-gold" style={{ marginBottom: '0.75rem', fontSize: '0.75rem' }}>
                  {member.badge}
                </span>

                <h3 className="team-summary-name">{member.name}</h3>
                <p className="team-summary-role">{member.role}</p>

                <div className="btn-view-profile">
                  <span>Ver perfil completo</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </div>

          {/* CTA para Consultas */}
          <div style={{ marginTop: '4.5rem', textAlign: 'center', backgroundColor: 'var(--color-cream)', padding: '3rem 2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-gold)' }}>
            <h3 className="text-serif" style={{ fontSize: '1.8rem', color: 'var(--color-wine)', marginBottom: '0.8rem' }}>
              ¿Necesitas evaluar tu caso directamente con nuestro equipo?
            </h3>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', maxWidth: '650px', margin: '0 auto 1.8rem auto' }}>
              Agenda una atención presencial o virtual confidencial con nuestros abogados expertos.
            </p>
            <button
              onClick={() => window.open(whatsappLink(undefined, WA_MESSAGES.DESDE_PENAL), '_blank')}
              className="btn btn-gold"
              style={{ fontSize: '1.05rem', padding: '1rem 2.2rem' }}
            >
              <MessageSquare size={20} />
              <span>Contactar al Equipo Legal AMF</span>
            </button>
          </div>

        </div>
      </section>

      {/* VISTA AMPLIADA / MODAL CON NAVEGACIÓN PROMINENTE ENTRE MIEMBROS */}
      {selectedMemberIndex !== null && activeMember && (
        <div className="team-modal-overlay" onClick={() => setSelectedMemberIndex(null)}>
          
          {/* Flecha Flotante Izquierda (Anterior) */}
          <button
            className="modal-side-nav-btn modal-side-nav-prev"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedMemberIndex(selectedMemberIndex > 0 ? selectedMemberIndex - 1 : teamMembers.length - 1);
            }}
            title="Perfil Anterior (Flecha Izquierda)"
            aria-label="Perfil Anterior"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Flecha Flotante Derecha (Siguiente) */}
          <button
            className="modal-side-nav-btn modal-side-nav-next"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedMemberIndex(selectedMemberIndex < teamMembers.length - 1 ? selectedMemberIndex + 1 : 0);
            }}
            title="Perfil Siguiente (Flecha Derecha)"
            aria-label="Perfil Siguiente"
          >
            <ChevronRight size={28} />
          </button>

          <div className="team-modal-card" onClick={(e) => e.stopPropagation()}>

            {/* Botón de cierre */}
            <button
              className="close-modal-btn"
              onClick={() => setSelectedMemberIndex(null)}
              title="Cerrar (Esc)"
              aria-label="Cerrar perfil"
            >
              <X size={22} />
            </button>



            {/* Cabecera Modal */}
            <div className="team-modal-header">
              <div className="team-modal-photo-wrapper">
                <img
                  src={activeMember.photo}
                  alt={`${activeMember.name} - ${activeMember.role} | AMF Firma Legal`}
                  className="team-modal-photo"
                  style={{ objectPosition: activeMember.objectPosition || 'top center', ...(activeMember.imgStyle || {}) }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <span className="badge badge-gold" style={{ marginBottom: '0.6rem', fontSize: '0.75rem' }}>
                  {activeMember.badge}
                </span>
                <h2 className="text-serif" style={{ fontSize: '1.8rem', color: 'var(--color-wine)', marginBottom: '0.3rem' }}>
                  {activeMember.name}
                </h2>
                <p style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-gold)', marginBottom: '0.4rem' }}>
                  {activeMember.role}
                </p>
                {activeMember.subtitle && (
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', fontStyle: 'italic', fontWeight: 600 }}>
                    {activeMember.subtitle}
                  </p>
                )}
              </div>
            </div>

            {/* Biografía Completa */}
            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.2rem' }}>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--color-wine)', marginBottom: '0.6rem', fontFamily: 'var(--font-serif)' }}>
                Trayectoria & Perfil Profesional
              </h4>
              <p style={{ fontSize: '1rem', color: 'var(--color-ink)', lineHeight: '1.7', whiteSpace: 'pre-line' }}>
                {activeMember.bio}
              </p>
            </div>

            {/* CTA directo dentro del modal */}
            <div style={{ backgroundColor: 'var(--color-cream)', padding: '1rem 1.5rem', borderRadius: 'var(--radius-md)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
              <div>
                <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-wine)' }}>
                  ¿Deseas consultar un asunto con {activeMember.name.split(' ')[0]}?
                </p>
                <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                  Atención presencial o virtual previa agendamiento.
                </p>
              </div>
              <button
                onClick={() => window.open(whatsappLink(undefined, `Hola, me interesa agendar una consulta sobre el perfil de ${activeMember.name}.`), '_blank')}
                className="btn btn-gold"
                style={{ padding: '0.6rem 1.2rem', fontSize: '0.88rem' }}
              >
                <MessageSquare size={16} />
                <span>Agendar Consulta</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </main>
  );
};
