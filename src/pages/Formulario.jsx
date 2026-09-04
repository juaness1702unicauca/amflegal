import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { WEB3FORMS_ACCESS_KEY, whatsappLink } from '../config/siteConfig';
import { Send, CheckCircle2, MessageSquare, ShieldCheck, Mail, Phone, MapPin, User, FileText, X, AlertCircle, BookOpen, Check } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import './Formulario.css';

export const Formulario = () => {
  const [searchParams] = useSearchParams();

  // Determine initial necessity based on URL parameters if present
  const getInitialNecesidad = () => {
    const servicio = searchParams.get('servicio')?.toLowerCase();
    const plan = searchParams.get('plan')?.toLowerCase();

    if (servicio === 'penal' || servicio === 'derecho-penal') {
      return 'Defensa Penal (24/7)';
    }
    if (servicio === 'fuerzapublica' || servicio === 'fuerza-publica' || plan) {
      return 'Planes y Suscripción Fuerza Pública';
    }
    if (servicio === 'tutela' || servicio === 'tutelas' || servicio === 'constitucional') {
      return 'Protección Constitucional (Tutelas / Peticiones)';
    }
    if (servicio === 'victima' || servicio === 'victimas') {
      return 'Representación de Víctimas';
    }
    return 'Consulta General / Orientación Legal';
  };

  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    ciudad: '',
    necesidad: getInitialNecesidad(),
    // Campos para Fuerza Pública
    institucion: 'Policía Nacional',
    planInteres: searchParams.get('plan') ? `Plan ${searchParams.get('plan')}` : 'Fortaleza ($79.900/mes)',
    // Campos para Penal / Víctima / General
    situacionPenal: 'Consulta / Asesoría preventiva',
    audienciaProxima: 'No por el momento',
    urgencia: 'No por el momento',
    detalles: '',
    aceptaDatos: false
  });

  const [showPolicyModal, setShowPolicyModal] = useState(false);
  const [errorDatos, setErrorDatos] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (showPolicyModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showPolicyModal]);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && showPolicyModal) {
        setShowPolicyModal(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showPolicyModal]);

  useEffect(() => {
    const initialNec = getInitialNecesidad();
    if (initialNec !== formData.necesidad) {
      setFormData(prev => ({ ...prev, necesidad: initialNec }));
    }
  }, [searchParams]);

  const [status, setStatus] = useState({ loading: false, success: false, error: null });
  const [errors, setErrors] = useState({});
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case 'nombre':
        if (!value || !value.toString().trim()) return 'El nombre completo es obligatorio.';
        return '';
      case 'telefono':
        if (!value || !value.toString().trim()) return 'El número de WhatsApp o teléfono es obligatorio.';
        return '';
      case 'ciudad':
        if (!value || !value.toString().trim()) return 'La ciudad es obligatoria.';
        return '';
      case 'email':
        if (!value || !value.toString().trim()) return 'El correo electrónico es obligatorio.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.toString().trim())) return 'Ingresa un correo electrónico válido.';
        return '';
      case 'detalles':
        if (!value || !value.toString().trim()) return 'Por favor describe brevemente tu caso o consulta.';
        return '';
      case 'aceptaDatos':
        if (!value) return 'Debes autorizar el tratamiento de datos personales conforme a la ley colombiana.';
        return '';
      default:
        return '';
    }
  };

  const validateAll = () => {
    const newErrors = {};
    const fieldsToValidate = ['nombre', 'telefono', 'ciudad', 'email', 'detalles', 'aceptaDatos'];
    fieldsToValidate.forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData(prev => ({
      ...prev,
      [name]: val
    }));

    // If this field currently has an error, validate on change to clear or update it
    if (errors[name] || hasAttemptedSubmit) {
      const err = validateField(name, val);
      setErrors(prev => {
        const next = { ...prev };
        if (err) {
          next[name] = err;
        } else {
          delete next[name];
        }
        return next;
      });
    }

    if (name === 'aceptaDatos' && checked) {
      setErrorDatos(false);
    }
  };

  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    const err = validateField(name, val);
    if (err) {
      setErrors(prev => ({ ...prev, [name]: err }));
    } else {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasAttemptedSubmit(true);

    const validationErrors = validateAll();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      if (validationErrors.aceptaDatos) {
        setErrorDatos(true);
      }
      // Auto-scroll to the first field that has an error
      const firstKey = Object.keys(validationErrors)[0];
      const targetElement = document.getElementsByName(firstKey)[0] || document.getElementById(firstKey);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetElement.focus?.();
      }
      return;
    }

    const msg = getWhatsAppMessageFromForm();
    window.open(whatsappLink(undefined, msg), '_blank');
    setStatus({ loading: false, success: true, error: null });
  };

  const getFieldStyle = (fieldName) => {
    const isError = Boolean(errors[fieldName]);
    return {
      width: '100%',
      padding: '0.85rem 1rem',
      borderRadius: 'var(--radius-sm)',
      fontSize: '1rem',
      fontFamily: 'inherit',
      transition: 'border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease',
      border: isError ? '1.5px solid #DC2626' : '1px solid var(--color-border)',
      backgroundColor: isError ? '#FEF2F2' : '#FFFFFF',
      boxShadow: isError ? '0 0 0 3px rgba(220, 38, 38, 0.12)' : 'none',
      color: 'var(--color-text-main)'
    };
  };

  const getLabelStyle = (fieldName) => {
    const isError = Boolean(errors[fieldName]);
    return {
      display: 'block',
      fontWeight: 600,
      color: isError ? '#DC2626' : 'var(--color-wine)',
      marginBottom: '0.4rem',
      fontSize: '0.95rem',
      transition: 'color 0.2s ease'
    };
  };

  // Helper to build custom prefilled WhatsApp message from form inputs
  const getWhatsAppMessageFromForm = () => {
    let msg = `Hola AMF Legal, envío una solicitud desde la página web:\n\n`;
    msg += `👤 *Nombre:* ${formData.nombre}\n`;
    msg += `📞 *Teléfono:* ${formData.telefono}\n`;
    if (formData.email) msg += `✉️ *Correo:* ${formData.email}\n`;
    msg += `📍 *Ciudad:* ${formData.ciudad}\n`;
    msg += `📌 *Asunto/Necesidad:* ${formData.necesidad}\n\n`;

    if (formData.necesidad === 'Planes y Suscripción Fuerza Pública') {
      msg += `🎖️ *Institución:* ${formData.institucion}\n`;
      msg += `🛡️ *Plan de interés:* ${formData.planInteres}\n`;
    } else if (formData.necesidad === 'Defensa Penal (24/7)' || formData.necesidad === 'Representación de Víctimas') {
      msg += `⚖️ *Situación:* ${formData.situacionPenal}\n`;
      msg += `⏰ *Audiencia Próxima:* ${formData.audienciaProxima}\n`;
    } else {
      msg += `🚨 *Nivel de Urgencia:* ${formData.urgencia}\n`;
    }

    if (formData.detalles) {
      msg += `\n💬 *Detalles del caso:* ${formData.detalles}\n`;
    }

    return msg;
  };

  return (
    <main>
      <SEOHead pageKey="formulario" />
      <section className="section" style={{ backgroundColor: 'var(--color-cream)', paddingTop: '2.5rem', paddingBottom: '3rem' }}>
        <div className="container text-center" style={{ maxWidth: '820px', margin: '0 auto' }}>
          <h1 className="text-serif" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', color: 'var(--color-wine)', marginBottom: '1rem' }}>
            Formulario de Contacto y Asesoría Legal
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
            Diligencia tus datos a continuación. El formulario organizará tu consulta y abrirá **WhatsApp** listo para enviar a nuestro equipo de abogados.
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-paper)' }}>
        <div className="container container-narrow">
          
          <div className="card" style={{ padding: '2.5rem', backgroundColor: '#FFF', boxShadow: 'var(--shadow-md)', borderRadius: 'var(--radius-lg)' }}>
            
            {status.success ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <CheckCircle2 size={64} className="text-gold" style={{ margin: '0 auto 1.5rem auto' }} />
                <h2 className="text-serif" style={{ fontSize: '2rem', color: 'var(--color-wine)', marginBottom: '1rem' }}>
                  ¡WhatsApp Abierto!
                </h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
                  Se ha generado el mensaje con tus datos. Presiona <strong>Enviar</strong> dentro del chat de WhatsApp para comunicarte con nuestro equipo legal de inmediato.
                </p>

                <div style={{ backgroundColor: 'var(--color-cream)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-gold)', marginBottom: '1.5rem' }}>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-wine)', fontWeight: 600, marginBottom: '1rem' }}>
                    ¿No se abrió WhatsApp automáticamente?
                  </p>
                  <button
                    onClick={() => window.open(whatsappLink(undefined, getWhatsAppMessageFromForm()), '_blank')}
                    className="btn btn-gold"
                    style={{ fontSize: '1rem', width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                  >
                    <MessageSquare size={18} />
                    <span>Abrir WhatsApp Ahora</span>
                  </button>
                </div>

                <button 
                  onClick={() => setStatus({ loading: false, success: false, error: null })} 
                  className="btn btn-secondary"
                  style={{ fontSize: '0.9rem' }}
                >
                  Modificar datos o nueva consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                
                {/* ALERTA DE CAMPOS PENDIENTES */}
                {hasAttemptedSubmit && Object.keys(errors).length > 0 && (
                  <div 
                    style={{ 
                      backgroundColor: '#FEF2F2', 
                      border: '1.5px solid #FCA5A5', 
                      borderRadius: 'var(--radius-sm)', 
                      padding: '0.9rem 1.25rem', 
                      color: '#991B1B', 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.65rem', 
                      fontSize: '0.92rem', 
                      fontWeight: 600 
                    }}
                  >
                    <AlertCircle size={20} style={{ flexShrink: 0 }} />
                    <span>Por favor diligencia todos los campos requeridos señalados en rojo para poder enviar tu consulta.</span>
                  </div>
                )}

                {/* DATOS DE CONTACTO GENERAL */}
                <div>
                  <label style={getLabelStyle('nombre')}>
                    Nombre Completo *
                  </label>
                  <input 
                    type="text"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Ej. María Fernanda Gómez"
                    style={getFieldStyle('nombre')}
                  />
                  {errors.nombre && (
                    <span style={{ color: '#DC2626', fontSize: '0.82rem', marginTop: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 500 }}>
                      <AlertCircle size={14} style={{ flexShrink: 0 }} />
                      {errors.nombre}
                    </span>
                  )}
                </div>

                <div className="grid-2">
                  <div>
                    <label style={getLabelStyle('telefono')}>
                      WhatsApp / Teléfono *
                    </label>
                    <input 
                      type="tel"
                      name="telefono"
                      required
                      value={formData.telefono}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Ej. 310 123 4567"
                      style={getFieldStyle('telefono')}
                    />
                    {errors.telefono && (
                      <span style={{ color: '#DC2626', fontSize: '0.82rem', marginTop: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 500 }}>
                        <AlertCircle size={14} style={{ flexShrink: 0 }} />
                        {errors.telefono}
                      </span>
                    )}
                  </div>

                  <div>
                    <label style={getLabelStyle('ciudad')}>
                      Ciudad *
                    </label>
                    <input 
                      type="text"
                      name="ciudad"
                      required
                      value={formData.ciudad}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Ej. Bogotá, Medellín, Cali..."
                      style={getFieldStyle('ciudad')}
                    />
                    {errors.ciudad && (
                      <span style={{ color: '#DC2626', fontSize: '0.82rem', marginTop: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 500 }}>
                        <AlertCircle size={14} style={{ flexShrink: 0 }} />
                        {errors.ciudad}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label style={getLabelStyle('email')}>
                    Correo Electrónico *
                  </label>
                  <input 
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="ejemplo@correo.com"
                    style={getFieldStyle('email')}
                  />
                  {errors.email && (
                    <span style={{ color: '#DC2626', fontSize: '0.82rem', marginTop: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 500 }}>
                      <AlertCircle size={14} style={{ flexShrink: 0 }} />
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* TIPO DE SERVICIO / REQUERIMIENTO */}
                <div>
                  <label style={{ display: 'block', fontWeight: 600, color: 'var(--color-wine)', marginBottom: '0.4rem', fontSize: '0.95rem' }}>
                    ¿Qué servicio o tipo de asesoría necesitas? *
                  </label>
                  <select
                    name="necesidad"
                    value={formData.necesidad}
                    onChange={handleChange}
                    style={{ 
                      width: '100%', 
                      padding: '0.85rem 1rem', 
                      borderRadius: 'var(--radius-sm)', 
                      border: '1.5px solid var(--color-gold)', 
                      fontSize: '1rem', 
                      fontWeight: 600, 
                      backgroundColor: 'var(--color-cream)', 
                      color: 'var(--color-wine)' 
                    }}
                  >
                    <option value="Consulta General / Orientación Legal">Consulta General / Orientación Legal</option>
                    <option value="Defensa Penal (24/7)">Defensa Penal (Atención 24/7)</option>
                    <option value="Representación de Víctimas">Representación de Víctimas</option>
                    <option value="Protección Constitucional (Tutelas / Peticiones)">Protección Constitucional (Tutelas y Derechos de Petición)</option>
                    <option value="Planes y Suscripción Fuerza Pública">Planes y Suscripción Fuerza Pública</option>
                    <option value="Otros Servicios Legales">Otros Servicios Legales (Asesoría Empresarial / Civil)</option>
                  </select>
                </div>

                {/* OPCIONES DINÁMICAS SEGÚN SELECCIÓN */}

                {/* OPCIÓN A: PLANES Y SUSCRIPCIÓN FUERZA PÚBLICA */}
                {formData.necesidad === 'Planes y Suscripción Fuerza Pública' && (
                  <div style={{ backgroundColor: 'var(--color-cream)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-gold)', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    
                    <div>
                      <label style={{ display: 'block', fontWeight: 600, color: 'var(--color-wine)', marginBottom: '0.4rem', fontSize: '0.9rem' }}>
                        ¿A qué institución perteneces o te vinculas?
                      </label>
                      <select
                        name="institucion"
                        value={formData.institucion}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', fontSize: '0.95rem', backgroundColor: '#FFF' }}
                      >
                        <option value="Policía Nacional">Policía Nacional</option>
                        <option value="Ejército Nacional">Ejército Nacional</option>
                        <option value="Armada de Colombia">Armada de Colombia</option>
                        <option value="Fuerza Aeroespacial Colombiana">Fuerza Aeroespacial Colombiana</option>
                        <option value="Pensionado / Retirado FF.MM. / PONAL">Pensionado / Retirado FF.MM. o PONAL</option>
                        <option value="Familiar / Vínculo Civil">Familiar / Vínculo Civil</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontWeight: 600, color: 'var(--color-wine)', marginBottom: '0.4rem', fontSize: '0.9rem' }}>
                        ¿Qué plan te interesa?
                      </label>
                      <select
                        name="planInteres"
                        value={formData.planInteres}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', fontSize: '0.95rem', backgroundColor: '#FFF' }}
                      >
                        <option value="Escudo ($59.900/mes)">Plan Escudo ($59.900/mes)</option>
                        <option value="Fortaleza ($79.900/mes)">Plan Fortaleza ($79.900/mes) - Más Elegido</option>
                        <option value="Bastión ($119.900/mes)">Plan Bastión ($119.900/mes)</option>
                        <option value="Quiero que me orienten">Quiero orientación para elegir el mejor plan</option>
                      </select>
                    </div>

                  </div>
                )}

                {/* OPCIÓN B: DERECHO PENAL O VÍCTIMA */}
                {(formData.necesidad === 'Defensa Penal (24/7)' || formData.necesidad === 'Representación de Víctimas') && (
                  <div style={{ backgroundColor: 'var(--color-cream)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border-gold)', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    
                    <div>
                      <label style={{ display: 'block', fontWeight: 600, color: 'var(--color-wine)', marginBottom: '0.4rem', fontSize: '0.9rem' }}>
                        ¿Cuál es la situación actual del caso?
                      </label>
                      <select
                        name="situacionPenal"
                        value={formData.situacionPenal}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', fontSize: '0.95rem', backgroundColor: '#FFF' }}
                      >
                        <option value="Consulta / Asesoría preventiva">Consulta o asesoría preventiva</option>
                        <option value="Me citó la Fiscalía">Me citó la Fiscalía / Indagación</option>
                        <option value="Existe una captura o retención">Existe una captura o detención inminente</option>
                        <option value="Me denunciaron">Me denunciaron</option>
                        <option value="Estoy siendo investigado">Estoy siendo investigado</option>
                        <option value="Tengo audiencia próxima">Tengo audiencia próxima</option>
                        <option value="Estoy en etapa de juicio">Estoy en etapa de juicio</option>
                        <option value="Existe condena o apelación">Existe condena o recurso de apelación</option>
                        <option value="Soy víctima de un delito">Soy víctima de un delito</option>
                        <option value="Otro escenario penal">Otro escenario penal</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontWeight: 600, color: 'var(--color-wine)', marginBottom: '0.4rem', fontSize: '0.9rem' }}>
                        ¿Tienes fecha de audiencia o diligencia formal programada?
                      </label>
                      <select
                        name="audienciaProxima"
                        value={formData.audienciaProxima}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', fontSize: '0.95rem', backgroundColor: '#FFF' }}
                      >
                        <option value="No por el momento">No por el momento</option>
                        <option value="Sí (Fecha próxima / Urgente)">Sí (Fecha próxima - Urgente)</option>
                      </select>
                    </div>

                  </div>
                )}

                {/* OPCIÓN C: CONSULTA GENERAL / TUTELAS / OTROS */}
                {formData.necesidad !== 'Planes y Suscripción Fuerza Pública' && formData.necesidad !== 'Defensa Penal (24/7)' && formData.necesidad !== 'Representación de Víctimas' && (
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, color: 'var(--color-wine)', marginBottom: '0.4rem', fontSize: '0.95rem' }}>
                      ¿Requiere atención de urgencia?
                    </label>
                    <select
                      name="urgencia"
                      value={formData.urgencia}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', fontSize: '0.95rem' }}
                    >
                      <option value="No por el momento">No, consulta regular</option>
                      <option value="Sí (Urgente - Resp. en 24h)">Sí, plazo o respuesta urgente</option>
                      <option value="Atención Inmediata">Requiero asesoría prioritaria hoy mismo</option>
                    </select>
                  </div>
                )}

                {/* DETALLES DEL CASO (Común para todos) */}
                <div>
                  <label style={getLabelStyle('detalles')}>
                    Resumen del caso o consulta *
                  </label>
                  <textarea
                    name="detalles"
                    rows={4}
                    required
                    value={formData.detalles}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Cuéntanos brevemente de qué se trata tu consulta o situación de manera confidencial..."
                    style={{ ...getFieldStyle('detalles'), fontSize: '0.95rem' }}
                  />
                  {errors.detalles && (
                    <span style={{ color: '#DC2626', fontSize: '0.82rem', marginTop: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 500 }}>
                      <AlertCircle size={14} style={{ flexShrink: 0 }} />
                      {errors.detalles}
                    </span>
                  )}
                </div>

                {/* AUTORIZACIÓN Y TRATAMIENTO DE DATOS PERSONALES (LEY 1581 DE 2012) */}
                <div 
                  style={{ 
                    backgroundColor: (errorDatos || errors.aceptaDatos) ? '#FEF2F2' : 'var(--color-cream)', 
                    border: (errorDatos || errors.aceptaDatos) ? '1.5px solid #DC2626' : '1.5px solid var(--color-border-gold)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.2rem 1.35rem',
                    transition: 'all 0.25s ease',
                    marginTop: '0.25rem',
                    boxShadow: (errorDatos || errors.aceptaDatos) ? '0 0 0 3px rgba(220, 38, 38, 0.12)' : 'none'
                  }}
                >
                  <label 
                    htmlFor="aceptaDatos"
                    style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: '0.85rem', 
                      cursor: 'pointer',
                      userSelect: 'none'
                    }}
                  >
                    <input 
                      type="checkbox"
                      id="aceptaDatos"
                      name="aceptaDatos"
                      checked={formData.aceptaDatos}
                      onChange={handleChange}
                      required
                      style={{ 
                        marginTop: '0.2rem',
                        width: '1.25rem',
                        height: '1.25rem',
                        cursor: 'pointer',
                        accentColor: 'var(--color-wine)',
                        flexShrink: 0
                      }}
                    />
                    <div style={{ fontSize: '0.9rem', color: 'var(--color-text-main)', lineHeight: '1.5' }}>
                      <span style={{ fontWeight: 700, color: (errorDatos || errors.aceptaDatos) ? '#DC2626' : 'var(--color-wine)', display: 'block', marginBottom: '0.25rem', transition: 'color 0.2s ease' }}>
                        Autorización de Tratamiento de Datos Personales *
                      </span>
                      <span style={{ color: 'var(--color-text-main)' }}>
                        Autorizo de manera previa, expresa e informada a <strong>AMF Firma Legal</strong> para recolectar y tratar mis datos personales conforme a la <strong>Ley 1581 de 2012</strong> (Habeas Data) y su Política de Tratamiento de Datos.
                      </span>
                      <div style={{ marginTop: '0.45rem' }}>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            setShowPolicyModal(true);
                          }}
                          style={{
                            background: 'none',
                            border: 'none',
                            padding: 0,
                            color: 'var(--color-wine)',
                            fontWeight: 700,
                            textDecoration: 'underline',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            fontSize: '0.88rem'
                          }}
                        >
                          <BookOpen size={15} className="text-gold" />
                          <span>Leer términos y autorización completa</span>
                        </button>
                      </div>
                    </div>
                  </label>

                  {(errorDatos || errors.aceptaDatos) && (
                    <div 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem', 
                        marginTop: '0.85rem', 
                        paddingTop: '0.75rem',
                        borderTop: '1px solid #FCA5A5',
                        color: '#B91C1C', 
                        fontSize: '0.86rem', 
                        fontWeight: 600 
                      }}
                    >
                      <AlertCircle size={16} style={{ flexShrink: 0 }} />
                      <span>{errors.aceptaDatos || 'Debes marcar la casilla para aceptar el tratamiento de datos personales conforme a la ley colombiana.'}</span>
                    </div>
                  )}
                </div>

                {/* Botón de Envío Directo a WhatsApp */}
                <button 
                  type="submit" 
                  disabled={!formData.aceptaDatos}
                  className={`btn ${formData.aceptaDatos ? 'btn-gold' : ''}`}
                  style={{ 
                    fontSize: '1.05rem', 
                    padding: '1rem 2rem', 
                    marginTop: '0.5rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: '0.5rem',
                    cursor: formData.aceptaDatos ? 'pointer' : 'not-allowed',
                    opacity: formData.aceptaDatos ? 1 : 0.6,
                    backgroundColor: formData.aceptaDatos ? 'var(--color-gold)' : '#D1C2A5',
                    color: formData.aceptaDatos ? 'var(--color-paper)' : '#5A4A35',
                    border: formData.aceptaDatos ? '1px solid var(--color-gold)' : '1px solid #D1C2A5',
                    boxShadow: formData.aceptaDatos ? 'var(--shadow-gold)' : 'none',
                    transition: 'all 0.25s ease'
                  }}
                  title={!formData.aceptaDatos ? 'Debes autorizar el tratamiento de datos para habilitar el envío' : ''}
                >
                  <MessageSquare size={20} />
                  <span>
                    {formData.necesidad === 'Planes y Suscripción Fuerza Pública' ? 'Enviar Solicitud de Afiliación por WhatsApp' : 'Enviar Consulta por WhatsApp'}
                  </span>
                </button>

                {!formData.aceptaDatos && (
                  <p style={{ textAlign: 'center', fontSize: '0.82rem', color: 'var(--color-wine)', margin: '-0.5rem 0 0 0', fontWeight: 500 }}>
                    * El botón se habilitará una vez aceptada la autorización de datos personales.
                  </p>
                )}

                <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', marginTop: '0.2rem' }}>
                  <ShieldCheck size={15} className="text-gold" />
                  <span>Toda la información proporcionada está amparada por el secreto y reserva profesional de abogado.</span>
                </p>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* MODAL DE POLÍTICA Y TRATAMIENTO DE DATOS PERSONALES (LEY 1581 DE 2012) */}
      {showPolicyModal && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={() => setShowPolicyModal(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(29, 3, 4, 0.78)',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#FFFFFF',
              width: '100%',
              maxWidth: '740px',
              maxHeight: '88vh',
              borderRadius: 'var(--radius-lg)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              border: '1px solid var(--color-border-gold)'
            }}
          >
            {/* Modal Header */}
            <div 
              style={{ 
                backgroundColor: 'var(--color-wine)', 
                color: '#FFF', 
                padding: '1.25rem 1.75rem',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                borderBottom: '2px solid var(--color-gold)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <ShieldCheck size={20} className="text-gold" />
                  <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-gold)', fontWeight: 600 }}>
                    Protección de Datos Personales · Habeas Data
                  </span>
                </div>
                <h3 id="modal-title" className="text-serif" style={{ fontSize: '1.35rem', color: '#FFF', margin: 0, lineHeight: '1.3' }}>
                  Autorización para el Tratamiento de Datos Personales
                </h3>
                <p style={{ margin: '0.35rem 0 0 0', fontSize: '0.82rem', color: 'rgba(255,255,255,0.75)' }}>
                  En cumplimiento de la Ley Estatutaria 1581 de 2012 y Decreto 1377 de 2013 (República de Colombia)
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowPolicyModal(false)}
                aria-label="Cerrar ventana"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  color: '#FFF',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                  marginLeft: '1rem',
                  flexShrink: 0
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div 
              style={{ 
                padding: '1.75rem', 
                overflowY: 'auto', 
                fontSize: '0.92rem', 
                color: 'var(--color-text-main)', 
                lineHeight: '1.65',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem'
              }}
            >
              <div style={{ backgroundColor: 'var(--color-cream)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-sm)', borderLeft: '4px solid var(--color-gold)' }}>
                <p style={{ margin: 0, fontWeight: 500, color: 'var(--color-wine)' }}>
                  Al diligenciar este formulario y marcar la casilla de aceptación, autorizas de manera voluntaria, previa, explícita e inequívoca a <strong>AMF FIRMA LEGAL</strong> para recolectar, almacenar y tratar los datos personales suministrados de acuerdo con la normatividad colombiana.
                </p>
              </div>

              <div>
                <h4 style={{ color: 'var(--color-wine)', fontSize: '1.05rem', marginBottom: '0.4rem', fontFamily: 'var(--font-serif)' }}>
                  1. Identificación del Responsable del Tratamiento
                </h4>
                <p style={{ margin: 0 }}>
                  <strong>AMF FIRMA LEGAL</strong>, firma especializada en asesoría, consultoría y representación judicial en el territorio colombiano (sedes y atención presencial bajo cita previa en Bogotá D.C., Cali, Medellín y Piendamó - Cauca). Canales oficiales de contacto: Línea oficial WhatsApp (+57 315 5977466) y formulario web oficial.
                </p>
              </div>

              <div>
                <h4 style={{ color: 'var(--color-wine)', fontSize: '1.05rem', marginBottom: '0.4rem', fontFamily: 'var(--font-serif)' }}>
                  2. Finalidades Autorizadas del Tratamiento
                </h4>
                <p style={{ margin: 0, marginBottom: '0.5rem' }}>
                  Los datos personales suministrados (nombre, teléfono, correo electrónico, ciudad y descripción del asunto) se tratarán con las siguientes finalidades:
                </p>
                <ul style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <li>Establecer contacto directo e inmediato vía WhatsApp, teléfono o correo electrónico para resolver tu consulta o solicitud de orientación legal.</li>
                  <li>Efectuar un análisis y diagnóstico jurídico preliminar del caso penal, disciplinario, constitucional o civil consultado.</li>
                  <li>Presentar cotizaciones, propuestas de representación judicial y estructuración de planes de afiliación para integrantes de la Fuerza Pública.</li>
                  <li>Formalizar mandatos judiciales, contratos de prestación de servicios profesionales y tramitaciones administrativas correspondientes si se suscribe el servicio.</li>
                  <li>Cumplir con las obligaciones legales, tributarias y contables vigentes en Colombia.</li>
                </ul>
              </div>

              <div>
                <h4 style={{ color: 'var(--color-wine)', fontSize: '1.05rem', marginBottom: '0.4rem', fontFamily: 'var(--font-serif)' }}>
                  3. Derechos del Titular de los Datos (Artículo 8 - Ley 1581 de 2012)
                </h4>
                <p style={{ margin: 0, marginBottom: '0.5rem' }}>
                  De conformidad con la legislación colombiana de Habeas Data, en tu calidad de titular tienes derecho a:
                </p>
                <ul style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <li><strong>Conocer, actualizar y rectificar</strong> tus datos personales frente a AMF Firma Legal.</li>
                  <li><strong>Solicitar prueba</strong> de la autorización otorgada para el tratamiento de tus datos.</li>
                  <li><strong>Ser informado</strong> sobre el uso específico que se le ha dado a tus datos personales.</li>
                  <li><strong>Revocar la autorización y/o solicitar la supresión</strong> de tus datos cuando no medie un deber legal o contractual que impida su eliminación.</li>
                  <li><strong>Presentar quejas</strong> ante la Superintendencia de Industria y Comercio (SIC) por presuntas infracciones a las disposiciones de la Ley 1581 de 2012.</li>
                  <li><strong>Acceder gratuitamente</strong> a tus datos personales que hayan sido objeto de tratamiento.</li>
                </ul>
              </div>

              <div>
                <h4 style={{ color: 'var(--color-wine)', fontSize: '1.05rem', marginBottom: '0.4rem', fontFamily: 'var(--font-serif)' }}>
                  4. Tratamiento de Datos Sensibles
                </h4>
                <p style={{ margin: 0 }}>
                  En los términos del artículo 6 de la Ley 1581 de 2012, te informamos que no estás obligado a responder preguntas sobre datos sensibles. Si en razón del análisis jurídico se aportan datos relacionados con investigaciones penales o disciplinarias, los mismos serán tratados bajo máxima reserva y con el único fin de proveer la debida defensa técnica solicitada.
                </p>
              </div>

              <div>
                <h4 style={{ color: 'var(--color-wine)', fontSize: '1.05rem', marginBottom: '0.4rem', fontFamily: 'var(--font-serif)' }}>
                  5. Secreto Profesional y Confidencialidad
                </h4>
                <p style={{ margin: 0 }}>
                  Conforme al <strong>artículo 74 de la Constitución Política de Colombia</strong> y la Ley 1123 de 2007 (Código Disciplinario del Abogado), la totalidad de las comunicaciones, hechos expuestos y documentos transmitidos a nuestra firma están amparados por el <strong>inviolable secreto profesional del abogado</strong>. AMF Firma Legal jamás cede ni comercializa información personal con terceros.
                </p>
              </div>

              <div>
                <h4 style={{ color: 'var(--color-wine)', fontSize: '1.05rem', marginBottom: '0.4rem', fontFamily: 'var(--font-serif)' }}>
                  6. Canales para Ejercer los Derechos de Habeas Data
                </h4>
                <p style={{ margin: 0 }}>
                  Para consultas, rectificaciones, actualizaciones o revocatoria de tu autorización, puedes comunicarte a través de nuestra línea de WhatsApp oficial (+57 315 5977466) o por los canales institucionales de AMF Firma Legal indicando tu nombre completo, número de documento y solicitud.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div 
              style={{ 
                padding: '1rem 1.75rem', 
                backgroundColor: 'var(--color-cream)', 
                borderTop: '1px solid var(--color-border-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.75rem'
              }}
            >
              <button
                type="button"
                onClick={() => setShowPolicyModal(false)}
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-wine)',
                  padding: '0.65rem 1.25rem',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}
              >
                Cerrar
              </button>

              <button
                type="button"
                onClick={() => {
                  setFormData(prev => ({ ...prev, aceptaDatos: true }));
                  setErrorDatos(false);
                  setShowPolicyModal(false);
                }}
                className="btn btn-gold"
                style={{ fontSize: '0.9rem', padding: '0.65rem 1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
              >
                <Check size={16} />
                <span>Aceptar Tratamiento y Continuar</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </main>
  );
};

