import React from 'react';
import { MapPin, MessageSquare, Clock, ShieldCheck, ArrowRight, Phone } from 'lucide-react';
import { whatsappLink, WA_MESSAGES } from '../config/siteConfig';

export const Ubicaciones = () => {
  return (
    <main>
      <section className="section" style={{ backgroundColor: 'var(--color-cream)', paddingTop: '2.2rem', paddingBottom: '3rem' }}>
        <div className="container text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="badge badge-gold" style={{ marginBottom: '1.2rem' }}>Presencia & Agendamiento</span>
          <h1 className="text-serif" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', color: 'var(--color-wine)', marginBottom: '1rem' }}>
            Sedes & Atención en Colombia
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
            Estamos cerca cuando necesitas sentarte frente a un abogado. Todas las atenciones presenciales se realizan bajo <strong>agendamiento previo</strong>.
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="container">
          
          <div className="grid-3" style={{ marginBottom: '3rem' }}>
            
            {/* BOGOTÁ */}
            <div className="card" style={{ backgroundColor: '#FFF', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gold)', fontWeight: 700, marginBottom: '0.75rem' }}>
                  <MapPin size={22} />
                  <span style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', color: 'var(--color-wine)' }}>BOGOTÁ D.C.</span>
                </div>
                <h3 style={{ fontSize: '1.05rem', color: 'var(--color-ink)', fontWeight: 600, marginBottom: '0.3rem' }}>Bulevar Tequendama</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>Calle 26A #13-97 · Oficina 2304</p>
                <div style={{ padding: '0.75rem', backgroundColor: 'var(--color-cream)', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', color: 'var(--color-wine)', fontWeight: 600, marginBottom: '1.5rem' }}>
                  Atención presencial con agendamiento previo.
                </div>
              </div>
              <button 
                onClick={() => window.open(whatsappLink(undefined, WA_MESSAGES.SEDE_BOGOTA), '_blank')}
                className="btn btn-secondary" 
                style={{ width: '100%' }}
              >
                Agendar Bogotá
              </button>
            </div>

            {/* CALI */}
            <div className="card" style={{ backgroundColor: '#FFF', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gold)', fontWeight: 700, marginBottom: '0.75rem' }}>
                  <MapPin size={22} />
                  <span style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', color: 'var(--color-wine)' }}>CALI</span>
                </div>
                <h3 style={{ fontSize: '1.05rem', color: 'var(--color-ink)', fontWeight: 600, marginBottom: '0.3rem' }}>Sede Cali</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>Calle 5 #88-29</p>
                <div style={{ padding: '0.75rem', backgroundColor: 'var(--color-cream)', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', color: 'var(--color-wine)', fontWeight: 600, marginBottom: '1.5rem' }}>
                  Atención presencial con agendamiento previo.
                </div>
              </div>
              <button 
                onClick={() => window.open(whatsappLink(undefined, WA_MESSAGES.SEDE_CALI), '_blank')}
                className="btn btn-secondary" 
                style={{ width: '100%' }}
              >
                Agendar Cali
              </button>
            </div>

            {/* PIENDAMÓ */}
            <div className="card" style={{ backgroundColor: '#FFF', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gold)', fontWeight: 700, marginBottom: '0.75rem' }}>
                  <MapPin size={22} />
                  <span style={{ fontSize: '1.3rem', fontFamily: 'var(--font-serif)', color: 'var(--color-wine)' }}>PIENDAMÓ</span>
                </div>
                <h3 style={{ fontSize: '1.05rem', color: 'var(--color-ink)', fontWeight: 600, marginBottom: '0.3rem' }}>Sede Piendamó, Cauca</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>Calle 10N #7-33</p>
                <div style={{ padding: '0.75rem', backgroundColor: 'var(--color-cream)', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', color: 'var(--color-wine)', fontWeight: 600, marginBottom: '1.5rem' }}>
                  Atención presencial bajo agendamiento previo.
                </div>
              </div>
              <button 
                onClick={() => window.open(whatsappLink(undefined, WA_MESSAGES.SEDE_PIENDAMO), '_blank')}
                className="btn btn-secondary" 
                style={{ width: '100%' }}
              >
                Agendar Piendamó
              </button>
            </div>

          </div>

          <div className="grid-2">
            <div className="card" style={{ backgroundColor: '#FFF', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-wine)', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>
                  Atención AMF en Medellín
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1.2rem' }}>
                  AMF cuenta con capacidad profesional de atención presencial en Medellín bajo agendamiento previo.
                </p>
              </div>
              <button 
                onClick={() => window.open(whatsappLink(undefined, WA_MESSAGES.SEDE_MEDELLIN), '_blank')}
                className="btn btn-gold"
              >
                Agendar Medellín
              </button>
            </div>

            <div className="card" style={{ backgroundColor: '#FFF', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-wine)', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>
                  Atención Virtual en toda Colombia
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1.2rem' }}>
                  Atención mediante plataformas virtuales para cualquier municipio de Colombia.
                </p>
              </div>
              <button 
                onClick={() => window.open(whatsappLink(undefined, WA_MESSAGES.ATENCION_VIRTUAL), '_blank')}
                className="btn btn-primary"
              >
                Atención Virtual Directa
              </button>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};
