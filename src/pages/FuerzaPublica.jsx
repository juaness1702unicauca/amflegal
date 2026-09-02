import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  MessageSquare,
  Scale,
  HeartHandshake,
  ArrowRight,
  FileCheck,
  CreditCard,
  Building2,
  Check,
  X,
  Sparkles,
  Info,
  ChevronRight
} from 'lucide-react';
import { whatsappLink, WA_MESSAGES, PAYMENT_LINKS } from '../config/siteConfig';

export const FuerzaPublica = () => {
  const navigate = useNavigate();
  const [activeModalPlan, setActiveModalPlan] = useState(null);

  const plansData = {
    escudo: {
      id: 'escudo',
      name: 'AMF ESCUDO',
      badge: 'RESPALDO PERMANENTE',
      price: '$59.900',
      period: '/ mes',
      shortDesc: 'Tu respaldo jurídico permanente.',
      discount: '20% de descuento en honorarios profesionales adicionales',
      reps: 'Hasta 2 representaciones jurídicas/año*',
      paymentUrl: PAYMENT_LINKS.escudo,
      waMessage: WA_MESSAGES.PLAN_ESCUDO,
      features: [
        'Consultas jurídicas ilimitadas sin consumo de representaciones',
        'Hasta 2 representaciones jurídicas al año en procesos disciplinarios o según cobertura del plan*',
        'Orientación preventiva frente a decisiones del servicio',
        'Orientación jurídica frente a procesos ya existentes',
        'Protección Constitucional AMF (Acción de Tutela, Salud, Derechos de Petición, Debido Proceso)',
        'Beneficios constitucionales familiares conforme a las condiciones del servicio',
        'Atención digital inmediata y presencial bajo agendamiento previo',
        '20% de descuento en honorarios AMF para servicios profesionales adicionales no cubiertos'
      ]
    },
    fortaleza: {
      id: 'fortaleza',
      name: 'AMF FORTALEZA',
      badge: 'MÁS ELEGIDO / RECOMENDADO',
      price: '$79.900',
      period: '/ mes',
      shortDesc: 'Más acompañamiento para ti y tu familia.',
      discount: '30% de descuento en honorarios profesionales adicionales',
      reps: 'Hasta 3 representaciones jurídicas/año*',
      paymentUrl: PAYMENT_LINKS.fortaleza,
      waMessage: WA_MESSAGES.PLAN_FORTALEZA,
      features: [
        'Todo lo incluido en el Plan Escudo',
        'Hasta 3 representaciones jurídicas al año*',
        'Atención prioritaria preferencial en canales AMF',
        'Asesoría jurídica para familiares autorizados según condiciones del servicio',
        'Protección Constitucional ampliada (Salud, Medicamentos, Pensiones y Tutelas)',
        'Elaboración de documentos, peticiones y recursos según cobertura',
        'Seguimiento periódico de asuntos atendidos',
        '30% de descuento en honorarios AMF para servicios profesionales adicionales no cubiertos'
      ]
    },
    bastion: {
      id: 'bastion',
      name: 'AMF BASTIÓN',
      badge: 'NIVEL PREMIUM',
      price: '$119.900',
      period: '/ mes',
      shortDesc: 'El máximo nivel de protección AMF.',
      discount: '40% de descuento en honorarios profesionales adicionales',
      reps: 'Hasta 5 representaciones jurídicas/año*',
      paymentUrl: PAYMENT_LINKS.bastion,
      waMessage: WA_MESSAGES.PLAN_BASTION,
      features: [
        'Todo lo incluido en el Plan Fortaleza',
        'Hasta 5 representaciones jurídicas al año*',
        'Canal prioritario de respuesta directa VIP',
        'Atención jurídica preferencial priorizada',
        'Seguimiento preventivo proactivo de riesgos jurídicos',
        'Protección Constitucional preferencial integral',
        'Hasta 3 familiares beneficiarios directos según condiciones',
        '40% de descuento en honorarios AMF para servicios profesionales adicionales no cubiertos'
      ]
    }
  };

  return (
    <main>
      {/* SECCIÓN UNIFICADA: ENCABEZADO Y PLANES DE SUSCRIPCIÓN FUERZA PÚBLICA */}
      <section className="section" style={{ backgroundColor: 'var(--color-cream)', paddingTop: '2.2rem', paddingBottom: '4rem' }}>
        <div className="container">

          {/* Encabezado Principal Unificado */}
          <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 3rem auto' }}>
            <span className="badge badge-gold" style={{ marginBottom: '1.2rem' }}>
              <ShieldCheck size={14} /> EXCLUSIVO PARA FUERZA PÚBLICA EN COLOMBIA
            </span>

            <h1 className="text-serif" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', color: 'var(--color-wine)', marginBottom: '1rem', lineHeight: '1.2' }}>
              Suscripción Jurídica para Fuerza Pública
            </h1>

            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '0.8rem', lineHeight: '1.6' }}>
              Protección legal permanente para Policía Nacional, Ejército, Armada y Fuerza Aeroespacial con consultas ilimitadas y respaldo familiar.
            </p>
          </div>

          {/* Grilla de 3 Planes de Suscripción */}
          <div className="grid-3" style={{ alignItems: 'stretch' }}>

            {/* ESCUDO */}
            <div
              className="card"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#FFF', cursor: 'pointer' }}
              onClick={() => setActiveModalPlan(plansData.escudo)}
            >
              <div>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-muted)', letterSpacing: '0.05em' }}>AMF ESCUDO</span>
                <div style={{ margin: '1rem 0' }}>
                  <span style={{ fontSize: '2.6rem', fontWeight: 700, color: 'var(--color-wine)', fontFamily: 'var(--font-serif)' }}>$59.900</span>
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}> / mes</span>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1.2rem' }}>
                  Tu respaldo jurídico permanente.
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', marginBottom: '1.8rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--color-wine)' }}>
                    <Check size={16} className="text-gold" />
                    <span>Consultas ilimitadas</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Check size={16} className="text-gold" />
                    <span>Hasta 2 representaciones/año*</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Check size={16} className="text-gold" />
                    <span>Protección Constitucional & Salud</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Check size={16} className="text-gold" />
                    <span>20% de descuento en honorarios</span>
                  </li>
                </ul>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <button
                  onClick={(e) => { e.stopPropagation(); setActiveModalPlan(plansData.escudo); }}
                  className="btn btn-secondary"
                  style={{ width: '100%', fontSize: '0.9rem' }}
                >
                  <Info size={16} />
                  <span>Ver detalles ampliados</span>
                </button>

                <a
                  href={plansData.escudo.paymentUrl || whatsappLink(undefined, plansData.escudo.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="btn btn-gold"
                  style={{ width: '100%', fontSize: '0.9rem' }}
                >
                  Activar Escudo
                </a>
              </div>
            </div>

            {/* FORTALEZA */}
            <div
              className="card plan-featured"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer' }}
              onClick={() => setActiveModalPlan(plansData.fortaleza)}
            >
              <div className="plan-ribbon">MÁS ELEGIDO / RECOMENDADO</div>
              <div>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-gold)', letterSpacing: '0.05em' }}>AMF FORTALEZA</span>
                <div style={{ margin: '1.2rem 0 1rem 0' }}>
                  <span style={{ fontSize: '2.8rem', fontWeight: 700, color: 'var(--color-wine)', fontFamily: 'var(--font-serif)' }}>$79.900</span>
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}> / mes</span>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-wine)', fontWeight: 600, marginBottom: '1.2rem' }}>
                  Más acompañamiento para ti y tu familia.
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', marginBottom: '1.8rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--color-wine)' }}>
                    <Check size={16} style={{ color: 'var(--color-wine)' }} />
                    <span>Todo lo de Escudo + Atención Prioritaria</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                    <Check size={16} style={{ color: 'var(--color-wine)' }} />
                    <span>Hasta 3 representaciones/año*</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Check size={16} style={{ color: 'var(--color-wine)' }} />
                    <span>Asesoría familiar autorizada</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Check size={16} style={{ color: 'var(--color-wine)' }} />
                    <span>30% de descuento en honorarios</span>
                  </li>
                </ul>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <button
                  onClick={(e) => { e.stopPropagation(); setActiveModalPlan(plansData.fortaleza); }}
                  className="btn btn-secondary"
                  style={{ width: '100%', fontSize: '0.9rem' }}
                >
                  <Info size={16} />
                  <span>Ver detalles ampliados</span>
                </button>

                <a
                  href={plansData.fortaleza.paymentUrl || whatsappLink(undefined, plansData.fortaleza.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="btn btn-gold"
                  style={{ width: '100%', fontSize: '0.9rem' }}
                >
                  Quiero Fortaleza
                </a>
              </div>
            </div>

            {/* BASTIÓN */}
            <div
              className="card"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#FFF', cursor: 'pointer' }}
              onClick={() => setActiveModalPlan(plansData.bastion)}
            >
              <div>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-muted)', letterSpacing: '0.05em' }}>AMF BASTIÓN (PREMIUM)</span>
                <div style={{ margin: '1rem 0' }}>
                  <span style={{ fontSize: '2.6rem', fontWeight: 700, color: 'var(--color-wine)', fontFamily: 'var(--font-serif)' }}>$119.900</span>
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}> / mes</span>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1.2rem' }}>
                  El máximo nivel de protección AMF.
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', marginBottom: '1.8rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--color-wine)' }}>
                    <Check size={16} className="text-gold" />
                    <span>Todo lo de Fortaleza + Canal VIP</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                    <Check size={16} className="text-gold" />
                    <span>Hasta 5 representaciones/año*</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Check size={16} className="text-gold" />
                    <span>Hasta 3 familiares beneficiarios</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Check size={16} className="text-gold" />
                    <span>40% de descuento en honorarios</span>
                  </li>
                </ul>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <button
                  onClick={(e) => { e.stopPropagation(); setActiveModalPlan(plansData.bastion); }}
                  className="btn btn-secondary"
                  style={{ width: '100%', fontSize: '0.9rem' }}
                >
                  <Info size={16} />
                  <span>Ver detalles ampliados</span>
                </button>

                <a
                  href={plansData.bastion.paymentUrl || whatsappLink(undefined, plansData.bastion.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="btn btn-primary"
                  style={{ width: '100%', fontSize: '0.9rem' }}
                >
                  Elegir Bastión
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECCIÓN 2: BENEFICIOS CLAVE & PILARES DE SERVICIO */}
      <section className="section" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
            <span className="badge badge-wine" style={{ marginBottom: '1rem' }}>Servicios Incluidos</span>
            <h2 className="text-serif" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--color-wine)' }}>
              Seis pilares de protección para tu carrera y tu hogar
            </h2>
          </div>

          <div className="grid-3">

            <div className="card" style={{ backgroundColor: '#FFF', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <MessageSquare size={32} className="text-gold" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-wine)', marginBottom: '0.5rem' }}>∞ Consultas Ilimitadas</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                  Pregunta las veces que necesites. Resolver tus dudas preventivamente evita investigaciones graves.
                </p>
              </div>
              <button
                onClick={() => window.open(whatsappLink(undefined, WA_MESSAGES.DESDE_SUSCRIPCIONES), '_blank')}
                className="btn btn-secondary"
                style={{ width: '100%', fontSize: '0.9rem' }}
              >
                <MessageSquare size={16} />
                <span>Preguntar a un Abogado</span>
              </button>
            </div>

            <div className="card" style={{ backgroundColor: '#FFF', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <Scale size={32} className="text-gold" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-wine)', marginBottom: '0.5rem' }}>Representaciones Incluidas</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                  Hasta 5 representaciones jurídicas al año (disciplinario, administrativo) según la cobertura de tu plan.
                </p>
              </div>
              <button
                onClick={() => setActiveModalPlan(plansData.fortaleza)}
                className="btn btn-secondary"
                style={{ width: '100%', fontSize: '0.9rem' }}
              >
                <span>Ver Cobertura de Planes</span>
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="card" style={{ backgroundColor: '#FFF', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <FileCheck size={32} className="text-gold" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-wine)', marginBottom: '0.5rem' }}>Protección Constitucional</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                  Defensa de tus derechos fundamentales: salud, tutelas, derechos de petición y debido proceso.
                </p>
              </div>
              <button
                onClick={() => navigate('/formulario')}
                className="btn btn-secondary"
                style={{ width: '100%', fontSize: '0.9rem' }}
              >
                <span>Solicitar Protección</span>
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="card" style={{ backgroundColor: '#FFF', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <HeartHandshake size={32} className="text-gold" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-wine)', marginBottom: '0.5rem' }}>Respaldo Familiar</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                  Protección constitucional para tu cónyuge e hijos conforme a las condiciones del servicio.
                </p>
              </div>
              <button
                onClick={() => window.open(whatsappLink(undefined, 'Hola, quiero conocer la protección constitucional para mi grupo familiar.'), '_blank')}
                className="btn btn-secondary"
                style={{ width: '100%', fontSize: '0.9rem' }}
              >
                <MessageSquare size={16} />
                <span>Consultar Amparo Familiar</span>
              </button>
            </div>

            <div className="card" style={{ backgroundColor: '#FFF', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <Building2 size={32} className="text-gold" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-wine)', marginBottom: '0.5rem' }}>Presencial + Digital</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                  Abogados reales con atención presencial agendada en Bogotá, Cali, Piendamó y Medellín + canal virtual.
                </p>
              </div>
              <button
                onClick={() => navigate('/ubicaciones')}
                className="btn btn-secondary"
                style={{ width: '100%', fontSize: '0.9rem' }}
              >
                <span>Agendar Cita Presencial</span>
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="card" style={{ backgroundColor: '#FFF', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <CreditCard size={32} className="text-gold" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-wine)', marginBottom: '0.5rem' }}>Pago Automático</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                  Activa tu suscripción una vez y continúa mediante pagos recurrentes automatizados sin preocuparte.
                </p>
              </div>
              <button
                onClick={() => setActiveModalPlan(plansData.escudo)}
                className="btn btn-secondary"
                style={{ width: '100%', fontSize: '0.9rem' }}
              >
                <span>Afiliarme Ahora</span>
                <ChevronRight size={16} />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* MODAL INTERACTIVO DE INFORMACIÓN AMPLIADA DEL PLAN */}
      {activeModalPlan && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={() => setActiveModalPlan(null)}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              maxWidth: '680px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              border: '2px solid var(--color-gold)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              position: 'relative',
              padding: '2rem'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalPlan(null)}
              style={{
                position: 'absolute',
                top: '1.2rem',
                right: '1.2rem',
                background: 'var(--color-cream)',
                border: '1px solid var(--color-wine)',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-wine)',
                cursor: 'pointer'
              }}
              aria-label="Cerrar modal"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div style={{ marginBottom: '1.5rem', paddingRight: '2rem' }}>
              <span className="badge badge-gold" style={{ marginBottom: '0.5rem' }}>
                <Sparkles size={14} /> {activeModalPlan.badge}
              </span>
              <h2 className="text-serif" style={{ fontSize: '2.2rem', color: 'var(--color-wine)', margin: '0.4rem 0' }}>
                {activeModalPlan.name}
              </h2>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
                <span style={{ fontSize: '2.4rem', fontWeight: 700, color: 'var(--color-wine)', fontFamily: 'var(--font-serif)' }}>
                  {activeModalPlan.price}
                </span>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '1rem' }}>{activeModalPlan.period}</span>
              </div>
              <p style={{ fontSize: '1rem', color: 'var(--color-gold)', fontWeight: 600, marginTop: '0.4rem' }}>
                {activeModalPlan.discount}
              </p>
            </div>

            {/* Features Expanded List */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--color-wine)', marginBottom: '1rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>
                Detalles Ampliados de Cobertura:
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {activeModalPlan.features.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--color-ink)' }}>
                    <Check size={18} className="text-gold" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Discreto aviso legal */}
            <div style={{ backgroundColor: 'var(--color-cream)', padding: '1rem', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
              * Planes con vigencia inicial de 12 meses. Pago mensual recurrente procesado a través de pasarela autorizada. Las representaciones están sujetas a los términos del contrato de servicio.
            </div>

            {/* Modal Actions */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href={activeModalPlan.paymentUrl || whatsappLink(undefined, activeModalPlan.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
                style={{ flex: 1, textAlign: 'center' }}
              >
                Activar Este Plan Ahora
              </a>
              <button
                onClick={() => setActiveModalPlan(null)}
                className="btn btn-secondary"
              >
                Cerrar
              </button>
            </div>

          </div>
        </div>
      )}

      {/* CTA Final Fuerza Pública */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container container-narrow">
          <h2 className="text-serif" style={{ fontSize: '2.4rem', color: 'var(--color-paper)', marginBottom: '1rem' }}>
            Protege tu uniforme y a tu familia desde hoy
          </h2>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-on-dark-muted)', marginBottom: '2rem' }}>
            Planes desde $59.900/mes sin trámites complejos.
          </p>
          <button
            onClick={() => window.open(whatsappLink(undefined, WA_MESSAGES.DESDE_SUSCRIPCIONES), '_blank')}
            className="btn btn-gold"
          >
            <MessageSquare size={18} />
            <span>Hablar con un Asesor AMF</span>
          </button>
        </div>
      </section>
    </main>
  );
};
