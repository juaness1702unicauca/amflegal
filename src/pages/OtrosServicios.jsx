import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FileText, 
  Scale, 
  ShieldCheck, 
  Users, 
  Briefcase, 
  Building, 
  HeartHandshake, 
  ArrowRight
} from 'lucide-react';
import { whatsappLink } from '../config/siteConfig';
import { SEOHead } from '../components/SEOHead';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import './OtrosServicios.css';

export const OtrosServicios = () => {
  const navigate = useNavigate();

  const areas = [
    { title: 'Derecho Constitucional', desc: 'Acciones de tutela, derechos de petición, desacatos, protección del mínimo vital y debido proceso.' },
    { title: 'Derecho Disciplinario', desc: 'Investigaciones ante Procuraduría, Personería y control interno disciplinario de entidades públicas.' },
    { title: 'Derecho Administrativo', desc: 'Controversias contractuales, demandas de nulidad y restablecimiento del derecho, reparación directa.' },
    { title: 'Justicia Penal Militar y Policial', desc: 'Investigaciones penales militares por actos del servicio o en ocasión del mismo ante juzgados de instrucción militar.' },
    { title: 'Derecho de Familia', desc: 'Divorcios, cuotas alimentarias, custodias, sucesiones, régimen de visitas y protección patrimonial familiar.' },
    { title: 'Derecho Civil & Contratos', desc: 'Responsabilidad civil contractual y extracontractual, elaboración de contratos, controversias patrimoniales.' },
    { title: 'Derecho Laboral', desc: 'Reclamaciones laborales, fueros de estabilidad reforzada, liquidaciones, demandas ordinarias laborales.' },
    { title: 'Seguridad Social', desc: 'Pensiones de invalidez, sobreviviente, vejez, reliquidaciones de asignación de retiro y prestaciones de salud.' },
    { title: 'Insolvencia & Obligaciones', desc: 'Régimen de insolvencia de persona natural no comerciante y negociación de deudas u obligaciones.' }
  ];

  return (
    <main>
      <SEOHead pageKey="otrosServicios" />
      <section className="section" style={{ backgroundColor: 'var(--color-cream)', paddingTop: '2.2rem', paddingBottom: '3rem' }}>
        <div className="container text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 className="text-serif" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', color: 'var(--color-wine)', marginBottom: '1rem' }}>
            Otras Áreas Jurídicas de AMF
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
            Además de nuestras líneas principales de Fuerza Pública y Defensa Penal 24/7, nuestra firma cuenta con especialistas para atender diversas controversias legales.
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="container">
          <div className="grid-3">
            {areas.map((area, i) => (
              <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--color-wine)', marginBottom: '0.6rem', fontFamily: 'var(--font-serif)' }}>
                    {area.title}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    {area.desc}
                  </p>
                </div>
                <button
                  onClick={() => window.open(whatsappLink(undefined, `Hola, requiero asesoría en ${area.title}.`), '_blank')}
                  className="btn btn-secondary"
                  style={{ width: '100%', fontSize: '0.9rem' }}
                >
                  <WhatsAppIcon size={16} />
                  <span>Consultar esta área</span>
                </button>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
            <button 
              onClick={() => navigate('/formulario')}
              className="btn btn-gold"
              style={{ fontSize: '1.05rem', padding: '0.95rem 2rem' }}
            >
              Ir al Formulario Inteligente
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
