import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Scale,
  MessageSquare,
  PhoneCall,
  ArrowRight
} from 'lucide-react';
import { whatsappLink, WA_MESSAGES } from '../config/siteConfig';

export const DerechoPenal = () => {
  const navigate = useNavigate();

  return (
    <main>
      {/* SECCIÓN UNIFICADA: ENCABEZADO Y SITIACIONES DE ORIENTACIÓN PENAL */}
      <section className="section" style={{ backgroundColor: 'var(--color-cream)', paddingTop: '2.2rem', paddingBottom: '4rem' }}>
        <div className="container">

          {/* Encabezado Principal Unificado */}
          <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 3rem auto' }}>
            <span className="badge badge-gold" style={{ marginBottom: '1.2rem' }}>
              <Scale size={14} /> DEFENSE PENAL ESTRATÉGICA 24/7 EN COLOMBIA
            </span>

            <h1 className="text-serif" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', color: 'var(--color-wine)', marginBottom: '1rem', lineHeight: '1.2' }}>
              Defensa Penal Estratégica & Asistencia 24/7
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
              No te preguntamos qué código de delito es. Primero dinos qué situación estás enfrentando hoy para dar el primer paso con la estrategia adecuada:
            </p>
          </div>

          {/* Grilla de 6 Situaciones Penales */}
          <div className="grid-3">
            {[
              {
                title: '📞 ME CITÓ LA FISCALÍA',
                desc: 'Antes de declarar o rendir interrogatorio, entiende exactamente tu situación jurídica y tus derechos.',
                cta: 'Necesito orientación',
                msg: 'Hola, me citó la Fiscalía y necesito orientación antes de la diligencia.'
              },
              {
                title: '🚨 CAPTURARON A UN FAMILIAR',
                desc: 'Las primeras horas y legalización de captura son fundamentales. Asistencia presencial en URI y juzgados.',
                cta: 'Necesito asistencia',
                msg: 'Hola, capturaron a un familiar y necesito asistencia penal inmediata 24/7.'
              },
              {
                title: '📋 ME ESTÁN INVESTIGANDO',
                desc: 'Una defensa estratégica comienza mucho antes del juicio. Evaluamos el riesgo probatorio a tiempo.',
                cta: 'Evaluar mi caso',
                msg: 'Hola, me están investigando y quiero una evaluación reservada con AMF.'
              },
              {
                title: '⚖️ TENGO UNA AUDIENCIA',
                desc: 'Imputación, medida de aseguramiento, acusación o preparatoria. Conoce el escenario antes de entrar.',
                cta: 'Hablar con AMF',
                msg: 'Hola, tengo una audiencia penal programada y requiero defensa técnica.'
              },
              {
                title: '🏛️ SOY SERVIDOR PÚBLICO',
                desc: 'Investigaciones vinculadas con decisiones o ejercicio de funciones exigen lectura penal integral.',
                cta: 'Solicitar evaluación',
                msg: 'Hola, soy servidor público y requiero evaluación penal reservada de mi situación.'
              },
              {
                title: '👤 SOY VÍCTIMA',
                desc: 'No tienes que limitarte a esperar que la investigación avance sola. Impulsamos la representación penal activa.',
                cta: 'Quiero representación',
                msg: 'Hola, soy víctima de un delito y solicito representación legal penal activa con AMF.'
              }
            ].map((sit, idx) => (
              <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#FFF' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--color-wine)', marginBottom: '0.75rem', fontFamily: 'var(--font-serif)' }}>
                    {sit.title}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    {sit.desc}
                  </p>
                </div>

                <button
                  onClick={() => window.open(whatsappLink(undefined, sit.msg), '_blank')}
                  className="btn btn-secondary"
                  style={{ width: '100%', fontSize: '0.9rem' }}
                >
                  <MessageSquare size={16} />
                  <span>{sit.cta}</span>
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECCIÓN 2: ASUNTOS PENALES DESTACADOS */}
      <section className="section" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
            <span className="badge badge-gold" style={{ marginBottom: '1rem' }}>Áreas de Alta Complejidad</span>
            <h2 className="text-serif" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--color-wine)' }}>
              Casos que exigen una defensa especialmente estratégica
            </h2>
          </div>

          <div className="grid-2">
            {[
              {
                title: 'DELITOS CONTRA LA ADMINISTRACIÓN PÚBLICA',
                desc: 'Peculado, cohecho, concusión, celebración indebida de contratos y decisiones administrativas de servidores públicos.',
                linkText: 'Ver cómo intervenimos →',
                msg: 'Hola, requiero asesoría en un caso de delitos contra la administración pública.'
              },
              {
                title: 'LAVADO DE ACTIVOS & DELITOS FINANCIEROS',
                desc: 'Procesos con componentes patrimoniales, financieros y probatorios de alta complejidad técnica.',
                linkText: 'Evaluar mi situación →',
                msg: 'Hola, necesito orientación penal en asuntos de lavado de activos o patrimonio.'
              },
              {
                title: 'GDO · GAO · GAOR',
                desc: 'Investigaciones sobre estructuras u organizaciones criminales que requieren análisis cuidadoso de evidencia y atribución individual.',
                linkText: 'Hablar con un abogado →',
                msg: 'Hola, requiero abogado penal para una investigación relacionada con organizaciones o estructuras.'
              },
              {
                title: 'DELITOS SEXUALES',
                desc: 'Procesos especialmente sensibles donde la estrategia probatoria y el manejo responsable del caso son fundamentales.',
                linkText: 'Solicitar evaluación reservada →',
                msg: 'Hola, necesito evaluación reservada de un caso penal sobre delitos sexuales.'
              },
              {
                title: 'ESTAFA Y DELITOS PATRIMONIALES',
                desc: 'Casos relacionados con patrimonio, negocios, contratos, engaño y controversias comerciales con relevancia penal.',
                linkText: 'Contar mi caso →',
                msg: 'Hola, tengo una controversia por estafa o delitos patrimoniales y quiero asesoría.'
              },
              {
                title: 'VIOLENCIA INTRAFAMILIAR',
                desc: 'Situaciones familiares que pueden generar consecuencias penales, medidas de protección y actuaciones paralelas.',
                linkText: 'Necesito orientación →',
                msg: 'Hola, necesito orientación jurídica en un tema de violencia intrafamiliar.'
              },
              {
                title: 'PORTE ILEGAL DE ARMAS',
                desc: 'Defensa frente a investigaciones relacionadas con fabricación, tráfico, porte o tenencia de armas segun el caso.',
                linkText: 'Evaluar mi caso →',
                msg: 'Hola, necesito defensa penal en un caso de porte o tenencia de armas.'
              },
              {
                title: 'HOMICIDIO Y LESIONES',
                desc: 'Defensa o representación en investigaciones donde la evidencia forense y reconstrucción de hechos son determinantes.',
                linkText: 'Hablar con AMF →',
                msg: 'Hola, necesito representación o defensa penal en un caso de homicidio o lesiones.'
              }
            ].map((area, idx) => (
              <div key={idx} className="card" style={{ backgroundColor: '#FFF' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-wine)', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>
                  {area.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', marginBottom: '1.2rem', lineHeight: '1.6' }}>
                  {area.desc}
                </p>
                <button
                  onClick={() => window.open(whatsappLink(undefined, area.msg), '_blank')}
                  style={{ background: 'none', border: 'none', color: 'var(--color-gold)', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: 0 }}
                >
                  {area.linkText}
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECCIÓN 3: POSICIONAMIENTO PENAL */}
      <section className="section" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
            <span className="badge badge-gold" style={{ marginBottom: '1rem' }}>Compromiso Profesional</span>
            <h2 className="text-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-wine)', marginBottom: '1rem' }}>
              Estrategia. Orden. Defensa.
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
              No prometemos resultados milagrosos. Prometemos algo que sí depende de nuestra firma: estudiar seriamente el caso, ordenar la información, identificar los riesgos y construir una estrategia jurídica firme.
            </p>
          </div>

          <div className="grid-4">
            <div className="card" style={{ textAlign: 'center', backgroundColor: '#FFF' }}>
              <span className="text-serif" style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-gold)' }}>01</span>
              <h4 style={{ color: 'var(--color-wine)', margin: '0.5rem 0' }}>Entendemos</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Escuchamos el trasfondo de los hechos de manera objetiva.</p>
            </div>
            <div className="card" style={{ textAlign: 'center', backgroundColor: '#FFF' }}>
              <span className="text-serif" style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-gold)' }}>02</span>
              <h4 style={{ color: 'var(--color-wine)', margin: '0.5rem 0' }}>Analizamos</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Estudiamos la evidencia y la validez de los elementos probatorios.</p>
            </div>
            <div className="card" style={{ textAlign: 'center', backgroundColor: '#FFF' }}>
              <span className="text-serif" style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-gold)' }}>03</span>
              <h4 style={{ color: 'var(--color-wine)', margin: '0.5rem 0' }}>Definimos Estrategia</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Establecemos la teoría del caso y las metas procesales.</p>
            </div>
            <div className="card" style={{ textAlign: 'center', backgroundColor: '#FFF' }}>
              <span className="text-serif" style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-gold)' }}>04</span>
              <h4 style={{ color: 'var(--color-wine)', margin: '0.5rem 0' }}>Actuamos</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Representamos técnicamente en audiencias y estamentos jurídicos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: ECONOMÍA EN DERECHO PENAL */}
      <section className="section section-cream">
        <div className="container container-narrow text-center">
          <span className="badge badge-wine" style={{ marginBottom: '1rem' }}>Facilidades de Pago</span>
          <h2 className="text-serif" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--color-wine)', marginBottom: '1rem' }}>
            Necesitas defensa. El pago también necesita una solución.
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-ink)', marginBottom: '2rem' }}>
            Los servicios penales se adaptan a la etapa de cada caso. Pregunta por las alternativas de pago y cuotas disponibles para tu situación.
          </p>
          <button
            onClick={() => window.open(whatsappLink(undefined, 'Hola, quiero consultar las alternativas de pago disponibles para mi caso penal.'), '_blank')}
            className="btn btn-gold"
            style={{ fontSize: '1.05rem', padding: '0.95rem 2rem' }}
          >
            <MessageSquare size={18} />
            <span>Consultar Opciones de Pago</span>
          </button>
        </div>
      </section>

    </main>
  );
};
