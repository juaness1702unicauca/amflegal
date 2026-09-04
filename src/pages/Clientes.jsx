import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { whatsappLink, WA_MESSAGES } from '../config/siteConfig';
import { SEOHead } from '../components/SEOHead';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import './Clientes.css';

const logoConvivalle = '/assets/logos/Logo Convivalle.avif';
const logoEsmart     = '/assets/logos/ESMART.avif';
const logoQualitas   = '/assets/logos/QUALITAS.avif';
const logoDali       = '/assets/logos/DALI.avif';

export const Clientes = () => {
  const navigate = useNavigate();

  const clientsData = [
    {
      id: 'convivalle',
      name: 'CONVIVALLE S.A.S.',
      category: 'Infraestructura & Obras Civiles',
      logo: logoConvivalle,
      description:
        'Una empresa de asesoría y construcción de proyectos de obras civiles, con amplia participación en grandes proyectos de infraestructura vial en el suroccidente colombiano, comprometidos con sus clientes en la ejecución efectiva de sus proyectos dentro del alcance, plazo y presupuesto previsto. Cumpliendo normatividad y estándares de calidad exigidos, cuidado del medio ambiente, responsabilidad social y seguridad en el trabajo.',
      highlights: ['Obras Civiles', 'Infraestructura Vial', 'Cumplimiento Normativo']
    },
    {
      id: 'esmart',
      name: 'ESMART',
      category: 'Tecnología & Transformación Digital',
      logo: logoEsmart,
      description:
        'Esmart es una empresa colombiana enfocada en soluciones tecnológicas y transformación digital, que ofrece servicios de desarrollo de software, automatización de procesos y consultoría IT. Se especializa en optimizar la operación de empresas mediante herramientas digitales, integraciones y plataformas a medida. Además, impulsa la innovación empresarial con soluciones eficientes y escalables. Su enfoque está orientado a mejorar la productividad y competitividad de sus clientes.',
      highlights: ['Desarrollo de Software', 'Automatización IT', 'Transformación Digital']
    },
    {
      id: 'qualitas',
      name: 'QUALITAS TEAM',
      category: 'Consultoría & Fortalecimiento Organizacional',
      logo: logoQualitas,
      description:
        'Qualitas Team es una empresa enfocada en brindar soluciones integrales de consultoría, formación y fortalecimiento organizacional. Ofrece servicios en gestión empresarial, desarrollo de talento humano y optimización de procesos. Su enfoque está orientado a mejorar la productividad, cultura organizacional y cumplimiento normativo de las empresas. Además, acompaña a sus clientes en procesos de crecimiento y sostenibilidad empresarial.',
      highlights: ['Gestión Empresarial', 'Talento Humano', 'Cumplimiento Organizacional']
    },
    {
      id: 'dali',
      name: 'DALI ACADEMY',
      category: 'Formación Artística & Emprendimiento',
      logo: logoDali,
      description:
        'DALI Academy es una academia enfocada en la formación de aprendices en el arte del tatuaje y disciplinas relacionadas. Ofrece programas prácticos y teóricos orientados al desarrollo de habilidades técnicas y creativas. Su enfoque está en profesionalizar a nuevos artistas mediante acompañamiento, experiencia real y formación integral. Además, impulsa el crecimiento artístico y el emprendimiento dentro de la industria del tatuaje.',
      highlights: ['Formación Técnica', 'Emprendimiento Artístico', 'Capacitación Integral']
    }
  ];

  return (
    <main>
      <SEOHead pageKey="clientes" />

      {/* Hero Header Estándar de las Subpáginas */}
      <section className="section" style={{ backgroundColor: 'var(--color-cream)', paddingTop: '2.2rem', paddingBottom: '3rem' }}>
        <div className="container text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1
            className="text-serif"
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
              color: 'var(--color-wine)',
              marginBottom: '1rem'
            }}
          >
            Nuestros Clientes
          </h1>

          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: '1.65' }}>
            Empresas e instituciones líderes en infraestructura, tecnología, consultoría y formación que confían en el blindaje jurídico y la representación estratégica de <strong>AMF Firma Legal</strong>.
          </p>
        </div>
      </section>

      {/* Corporate Clients Grid */}
      <section className="section" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="container">

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem'
            }}
          >
            {clientsData.map((client) => (
              <article
                key={client.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-md)',
                  padding: '2.2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                  e.currentTarget.style.borderColor = 'var(--color-gold)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                }}
              >
                <div>
                  {/* Top Bar: Logo Container & Category */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      marginBottom: '1.8rem',
                      paddingBottom: '1.2rem',
                      borderBottom: '1px solid var(--color-border)'
                    }}
                  >
                    <div
                      style={{
                        width: '120px',
                        height: '75px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#FAF7F2',
                        borderRadius: 'var(--radius-md)',
                        padding: '0.6rem',
                        border: '1px solid rgba(169, 134, 62, 0.2)'
                      }}
                    >
                      <img
                        src={client.logo}
                        alt={`Logo de ${client.name} - Cliente corporativo de AMF Firma Legal`}
                        loading="lazy"
                        style={{
                          maxHeight: '100%',
                          maxWidth: '100%',
                          objectFit: 'contain'
                        }}
                      />
                    </div>

                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        color: 'var(--color-gold)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        textAlign: 'right',
                        maxWidth: '180px'
                      }}
                    >
                      {client.category}
                    </span>
                  </div>

                  {/* Name & Description */}
                  <h2
                    className="text-serif"
                    style={{
                      fontSize: '1.6rem',
                      color: 'var(--color-wine)',
                      marginBottom: '1rem'
                    }}
                  >
                    {client.name}
                  </h2>

                  <p
                    style={{
                      color: 'var(--color-text-muted)',
                      fontSize: '0.96rem',
                      lineHeight: '1.65',
                      marginBottom: '1.5rem'
                    }}
                  >
                    {client.description}
                  </p>

                  {/* Highlights Tags */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}
                  >
                    {client.highlights.map((tag, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          backgroundColor: 'var(--color-cream)',
                          color: 'var(--color-wine)',
                          padding: '0.3rem 0.75rem',
                          borderRadius: 'var(--radius-full)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem'
                        }}
                      >
                        <CheckCircle2 size={13} style={{ color: 'var(--color-gold)' }} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Banner de Afiliación Corporativa */}
          <div
            style={{
              marginTop: '4.5rem',
              backgroundColor: 'var(--color-wine)',
              color: 'var(--color-paper)',
              borderRadius: 'var(--radius-lg)',
              padding: '3rem 2rem',
              textAlign: 'center',
              border: '2px solid var(--color-gold)',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            <Building2 size={44} style={{ color: 'var(--color-gold)', marginBottom: '1rem' }} />
            <h2 className="text-serif" style={{ fontSize: '2.1rem', color: 'var(--color-paper)', marginBottom: '1rem' }}>
              ¿Buscas blindaje jurídico para tu empresa o proyecto?
            </h2>
            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--color-text-on-dark-muted)',
                maxWidth: '750px',
                margin: '0 auto 2rem auto',
                lineHeight: '1.6'
              }}
            >
              En <strong>AMF Firma Legal</strong> ofrecemos consultoría preventiva, representación litigiosa y acompañamiento permanente en derecho corporativo, comercial, laboral y administrativo.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.2rem' }}>
              <button
                onClick={() => navigate('/formulario')}
                className="btn btn-gold"
                style={{ padding: '0.9rem 2rem', fontSize: '1rem', fontWeight: 700 }}
              >
                <span>Solicitar Diagnóstico Jurídico</span>
                <ArrowRight size={18} />
              </button>
              <a
                href={whatsappLink(undefined, 'Hola AMF Firma Legal, me interesa una cita de consultoría corporativa para mi empresa.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light"
                style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}
              >
                <WhatsAppIcon size={18} />
                <span>Hablar con Asesor Corporativo</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
};
