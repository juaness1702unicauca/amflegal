import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import './Privacidad.css';

export const Privacidad = () => {
  return (
    <main>
      <Helmet>
        <title>Politica de Privacidad y Tratamiento de Datos | AMF Firma Legal</title>
        <meta name="description" content="Politica de tratamiento de datos personales de AMF Firma Legal conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013 de la Republica de Colombia." />
        <link rel="canonical" href="https://amfjuridico.com/privacidad" />
      </Helmet>

      {/* Header */}
      <section className="section priv-header" style={{ backgroundColor: 'var(--color-cream)', paddingTop: '2.2rem', paddingBottom: '3rem' }}>
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto' }}>
          <Link to="/" className="priv-back-link">
            <ArrowLeft size={16} />
            <span>Volver al inicio</span>
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', marginTop: '1.5rem' }}>
            <ShieldCheck size={32} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
            <h1 className="text-serif" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'var(--color-wine)', margin: 0 }}>
              Politica de Privacidad y Tratamiento de Datos Personales
            </h1>
          </div>
          <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)' }}>
            Ultima actualizacion: 7 de septiembre de 2026 &nbsp;|&nbsp; Ley 1581 de 2012 &middot; Decreto 1377 de 2013
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section" style={{ backgroundColor: 'var(--color-paper)', paddingTop: '3rem', paddingBottom: '5rem' }}>
        <div className="container priv-content" style={{ maxWidth: '860px', margin: '0 auto' }}>

          <div className="priv-section">
            <h2>1. Responsable del Tratamiento</h2>
            <p>
              <strong>AMF Firma Legal</strong> (en adelante "la Firma"), identificada con NIT vigente, con domicilio principal
              en Calle 26A #13-97, Oficina 2304, Bulevar Tequendama, Bogota D.C., Colombia, es responsable del tratamiento
              de los datos personales recopilados a traves de sus canales digitales, incluyendo el sitio web
              <strong> amfjuridico.com</strong> y sus canales de comunicacion (WhatsApp, formularios web y correo electronico).
            </p>
            <p>
              Contacto del area de datos: <strong>notificaciones@amfjuridico.com</strong>
            </p>
          </div>

          <div className="priv-section">
            <h2>2. Marco Legal</h2>
            <p>
              Esta politica se elabora en cumplimiento de la Ley Estatutaria 1581 de 2012 (Proteccion de Datos Personales),
              el Decreto Reglamentario 1377 de 2013, y las instrucciones de la Superintendencia de Industria y Comercio (SIC)
              de Colombia.
            </p>
          </div>

          <div className="priv-section">
            <h2>3. Datos Personales Recopilados</h2>
            <p>La Firma puede recopilar las siguientes categorias de datos personales:</p>
            <ul>
              <li><strong>Datos de identificacion:</strong> nombre completo, numero de cedula o documento de identidad.</li>
              <li><strong>Datos de contacto:</strong> numero de telefono movil, correo electronico, ciudad de residencia.</li>
              <li><strong>Datos del caso o asunto juridico:</strong> descripcion del motivo de consulta o situacion legal reportada por el titular a traves de formularios o mensajeria.</li>
              <li><strong>Datos de navegacion:</strong> direccion IP, tipo de dispositivo y navegador, paginas visitadas (recopilados de forma anonima con fines estadisticos).</li>
            </ul>
            <p>
              <strong>Nota:</strong> La Firma no recopila datos sensibles de forma deliberada (salud, religion, opinion politica, etc.) a traves de sus canales digitales. Si el titular los comparte voluntariamente en la descripcion de su caso, seran tratados con la maxima confidencialidad y conforme a las disposiciones legales aplicables.
            </p>
          </div>

          <div className="priv-section">
            <h2>4. Finalidades del Tratamiento</h2>
            <p>Los datos personales recopilados seran utilizados para las siguientes finalidades:</p>
            <ul>
              <li>Responder consultas, solicitudes de asesoria y cotizaciones juridicas.</li>
              <li>Gestionar la relacion contractual derivada de la prestacion de servicios juridicos.</li>
              <li>Enviar informacion relevante sobre los servicios de AMF Firma Legal, previa autorizacion del titular.</li>
              <li>Cumplir con obligaciones legales, reglamentarias o judiciales.</li>
              <li>Mejorar la experiencia de usuario en el sitio web y los canales digitales de la Firma.</li>
            </ul>
          </div>

          <div className="priv-section">
            <h2>5. Derechos del Titular</h2>
            <p>De conformidad con el articulo 8 de la Ley 1581 de 2012, el titular de los datos personales tiene derecho a:</p>
            <ul>
              <li>Conocer, actualizar y rectificar sus datos personales.</li>
              <li>Solicitar prueba de la autorizacion otorgada para el tratamiento.</li>
              <li>Ser informado sobre el uso que se ha dado a sus datos personales.</li>
              <li>Revocar la autorizacion y/o solicitar la supresion de sus datos, cuando no exista un deber legal o contractual que lo impida.</li>
              <li>Acceder gratuitamente a sus datos personales que hayan sido objeto de tratamiento.</li>
              <li>Presentar quejas ante la Superintendencia de Industria y Comercio (SIC) por infracciones a la normativa de proteccion de datos.</li>
            </ul>
            <p>
              Para ejercer cualquiera de estos derechos, el titular puede escribir al correo: <strong>notificaciones@amfjuridico.com</strong> indicando su nombre completo, documento de identidad y la solicitud especifica.
            </p>
          </div>

          <div className="priv-section">
            <h2>6. Transferencia y Transmision de Datos</h2>
            <p>
              AMF Firma Legal no vende, alquila ni comercializa datos personales a terceros. Los datos podran ser compartidos exclusivamente con:
            </p>
            <ul>
              <li>Abogados y profesionales vinculados a la Firma para la prestacion del servicio contratado.</li>
              <li>Autoridades judiciales o administrativas cuando exista una obligacion legal de suministrarlos.</li>
              <li>Proveedores tecnologicos de confianza (plataformas de comunicacion, formularios web) que actuan como encargados del tratamiento bajo instrucciones de la Firma y con garantias de confidencialidad.</li>
            </ul>
          </div>

          <div className="priv-section">
            <h2>7. Medidas de Seguridad</h2>
            <p>
              La Firma implementa medidas tecnicas, administrativas y organizativas razonables para proteger los datos personales contra acceso no autorizado, perdida, alteracion o divulgacion indebida. Las comunicaciones a traves de WhatsApp se realizan a traves del cifrado de extremo a extremo provisto por Meta Platforms, Inc.
            </p>
          </div>

          <div className="priv-section">
            <h2>8. Vigencia de la Politica y los Datos</h2>
            <p>
              Esta politica rige a partir de la fecha de su publicacion. Los datos personales seran conservados durante el tiempo necesario para cumplir las finalidades descritas o las obligaciones legales aplicables.
            </p>
            <p>
              AMF Firma Legal se reserva el derecho de modificar esta politica en cualquier momento. Los cambios sustanciales seran notificados a traves del sitio web <strong>amfjuridico.com</strong>.
            </p>
          </div>

          <div className="priv-contact-box">
            <ShieldCheck size={24} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
            <div>
              <p style={{ fontWeight: 700, color: 'var(--color-wine)', marginBottom: '0.3rem' }}>
                Canal de Atencion al Titular de Datos
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>
                Correo electronico: <strong>notificaciones@amfjuridico.com</strong><br />
                Tiempo de respuesta: hasta 15 dias habiles conforme a la Ley 1581 de 2012.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};
