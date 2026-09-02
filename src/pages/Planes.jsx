import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ShieldCheck, MessageSquare, ArrowRight, Info, HelpCircle } from 'lucide-react';
import { PAYMENT_LINKS, whatsappLink, WA_MESSAGES } from '../config/siteConfig';
import './Planes.css';

export const Planes = () => {
  return (
    <main>
      {/* Header Planes */}
      <section className="section" style={{ backgroundColor: 'var(--color-cream)', paddingTop: '2.2rem', paddingBottom: '3rem' }}>
        <div className="container text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="badge badge-gold" style={{ marginBottom: '1.2rem' }}>
            <ShieldCheck size={14} /> TARIFAS Y PLANES TRANSPARENTES
          </span>
          <h1 className="text-serif" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', color: 'var(--color-wine)', marginBottom: '1rem' }}>
            Elige el nivel de protección que necesitas
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
            Sin sorpresas ni costos ocultos. Todas nuestras suscripciones incluyen consultas jurídicas ilimitadas y respaldo ante problemas de salud o derechos fundamentales.
          </p>
        </div>
      </section>

      {/* Grid de los 3 Planes (Sección 4 del Brief) */}
      <section className="section" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="container">
          
          <div className="grid-3" style={{ alignItems: 'stretch' }}>
            
            {/* ESCUDO */}
            <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-muted)', letterSpacing: '0.05em' }}>AMF ESCUDO</span>
                <div style={{ margin: '1rem 0' }}>
                  <span style={{ fontSize: '2.8rem', fontWeight: 700, color: 'var(--color-wine)', fontFamily: 'var(--font-serif)' }}>$59.900</span>
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}> / mes</span>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                  Tu respaldo jurídico permanente.
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.92rem', marginBottom: '2rem' }}>
                  {[
                    'Consultas jurídicas ilimitadas',
                    'Hasta 2 representaciones jurídicas/año*',
                    'Orientación preventiva y frente a procesos existentes',
                    'Protección Constitucional AMF',
                    'Beneficios constitucionales familiares conforme a condiciones',
                    'Atención digital y presencial agendada',
                    '20% de descuento en honorarios AMF para servicios adicionales'
                  ].map((feat, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                      <Check size={16} className="text-gold" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={PAYMENT_LINKS.escudo || whatsappLink(undefined, WA_MESSAGES.PLAN_ESCUDO)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ width: '100%' }}
              >
                Activar Escudo
              </a>
            </div>

            {/* FORTALEZA (MÁS ELEGIDO) */}
            <div className="card plan-featured" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div className="plan-ribbon">MÁS ELEGIDO / RECOMENDADO</div>
              <div>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-gold)', letterSpacing: '0.05em' }}>AMF FORTALEZA</span>
                <div style={{ margin: '1.2rem 0 1rem 0' }}>
                  <span style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--color-wine)', fontFamily: 'var(--font-serif)' }}>$79.900</span>
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}> / mes</span>
                </div>
                <p style={{ fontSize: '1rem', color: 'var(--color-wine)', fontWeight: 600, marginBottom: '1.5rem' }}>
                  Más acompañamiento para ti y tu familia.
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.92rem', marginBottom: '2rem' }}>
                  {[
                    'Todo lo del Plan Escudo',
                    'Hasta 3 representaciones jurídicas/año*',
                    'Atención prioritaria preferencial',
                    'Asesoría para familiares autorizados según condiciones',
                    'Protección Constitucional ampliada',
                    'Elaboración de documentos según cobertura',
                    'Seguimiento de asuntos atendidos',
                    '30% de descuento en honorarios AMF para servicios adicionales'
                  ].map((feat, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                      <Check size={16} style={{ color: 'var(--color-wine)', marginTop: '3px', flexShrink: 0 }} />
                      <span style={{ fontWeight: i <= 1 ? 600 : 400 }}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={PAYMENT_LINKS.fortaleza || whatsappLink(undefined, WA_MESSAGES.PLAN_FORTALEZA)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
                style={{ width: '100%' }}
              >
                Quiero Fortaleza
              </a>
            </div>

            {/* BASTIÓN */}
            <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-muted)', letterSpacing: '0.05em' }}>AMF BASTIÓN (PREMIUM)</span>
                <div style={{ margin: '1rem 0' }}>
                  <span style={{ fontSize: '2.8rem', fontWeight: 700, color: 'var(--color-wine)', fontFamily: 'var(--font-serif)' }}>$119.900</span>
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}> / mes</span>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                  El máximo nivel de protección AMF.
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.92rem', marginBottom: '2rem' }}>
                  {[
                    'Todo lo del Plan Fortaleza',
                    'Hasta 5 representaciones jurídicas/año*',
                    'Canal prioritario de respuesta rápida',
                    'Atención jurídica preferencial VIP',
                    'Seguimiento preventivo proactivo',
                    'Protección Constitucional preferencial',
                    'Hasta 3 familiares beneficiarios según condiciones',
                    '40% de descuento en honorarios AMF para servicios adicionales'
                  ].map((feat, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                      <Check size={16} className="text-gold" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={PAYMENT_LINKS.bastion || whatsappLink(undefined, WA_MESSAGES.PLAN_BASTION)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Elegir Bastión
              </a>
            </div>

          </div>

          {/* Texto Legal Discreto (Sección 4 Brief) */}
          <div style={{ marginTop: '3.5rem', backgroundColor: 'var(--color-cream)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(53,1,8,0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <Info size={20} className="text-wine" style={{ flexShrink: 0, marginTop: '2px' }} />
              <h4 style={{ color: 'var(--color-wine)', fontSize: '1rem' }}>Términos de Cobertura y Pago Recurrente</h4>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
              * Las representaciones jurídicas están sujetas al alcance y condiciones específicas de cada plan. Los planes cuentan con una vigencia inicial de 12 meses. El precio está expresado mensualmente y el cobro se procesa mediante pago recurrente en el medio de pago autorizado.
            </p>
          </div>

        </div>
      </section>

      {/* Duda sobre cuál elegir */}
      <section className="section section-dark text-center">
        <div className="container container-narrow">
          <h2 className="text-serif" style={{ fontSize: '2.2rem', color: 'var(--color-paper)', marginBottom: '1rem' }}>
            ¿No estás seguro de cuál plan elegir?
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-on-dark-muted)', marginBottom: '2rem' }}>
            Nuestros asesores juristas evalúan tu rango e institución para recomendarte el plan perfecto.
          </p>
          <button 
            onClick={() => window.open(whatsappLink(undefined, WA_MESSAGES.DESDE_SUSCRIPCIONES), '_blank')}
            className="btn btn-gold"
          >
            <MessageSquare size={18} />
            <span>Asesoría por WhatsApp</span>
          </button>
        </div>
      </section>

    </main>
  );
};
