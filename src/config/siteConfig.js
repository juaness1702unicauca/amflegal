/**
 * Configuración global del sitio AMF Firma Legal
 * 
 * PLACEHOLDERS PARA COMPLETAR ANTES DE PUBLICAR EN PRODUCCIÓN:
 * 1. WHATSAPP_NUMBER: Número corporativo de WhatsApp de AMF en formato internacional sin el signo '+'. Ej: '573101234567'
 * 2. WEB3FORMS_ACCESS_KEY: Clave de acceso del servicio Web3Forms o EmailJS para la recepción de formularios.
 * 3. PAYMENT_LINKS: URLs de la pasarela de pagos externa para cada uno de los 3 planes de Fuerza Pública.
 */

export const WHATSAPP_NUMBER = "573013302160";
export const CONTACT_EMAIL = "notificaciones@amfjuridico.com";

// ⚠️  ACCIÓN REQUERIDA ANTES DE PUBLICAR EN PRODUCCIÓN:
// Regístrate en https://web3forms.com con el correo notificaciones@amfjuridico.com, crea un access key gratuito y reemplaza "YOUR_WEB3FORMS_ACCESS_KEY" por tu clave real.
// Sin este paso, el formulario de contacto NO enviará correos.
export const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY"; // ← REEMPLAZAR CON TU CLAVE REAL

export const PAYMENT_LINKS = {
  escudo: "",   // PLACEHOLDER: URL de pasarela para el Plan Escudo ($59.900/mes)
  fortaleza: "", // PLACEHOLDER: URL de pasarela para el Plan Fortaleza ($79.900/mes)
  bastion: ""    // PLACEHOLDER: URL de pasarela para el Plan Bastión ($119.900/mes)
};

/**
 * Genera un enlace profundo (deep link) hacia WhatsApp con un mensaje prellenado.
 * @param {string} number - Número telefónico (ej. '573000000000')
 * @param {string} message - Texto del mensaje a prellenar
 * @returns {string} Enlace https://wa.me/
 */
export const whatsappLink = (number = WHATSAPP_NUMBER, message = "") => {
  const cleanNumber = number.replace(/[^0-9]/g, '');
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedMsg}`;
};

/**
 * Mensajes prellenados de WhatsApp unificados por contexto (Sección 18 del Brief)
 */
export const WA_MESSAGES = {
  // Canales globales
  GENERAL_FLOATING: "Hola, me comunico desde la página web de AMF Firma Legal. Deseo recibir asesoría jurídica sobre mi caso.",
  FOOTER_CONTACT: "Hola, me comunico con AMF Firma Legal. Me gustaría consultar sobre sus servicios de defensa jurídica y asesoría.",

  // Fuerza Pública
  HOME_CAROUSEL_FUERZA_PUBLICA: "Hola, soy miembro de la Fuerza Pública (Policía / FF.MM.) y deseo conocer la cobertura y afiliación a la suscripción jurídica de AMF.",
  DESDE_SUSCRIPCIONES: "Hola, soy miembro de la Fuerza Pública (Policía / FF.MM.) y deseo conocer la cobertura y afiliación a la suscripción jurídica de AMF.",

  // Planes específicos Fuerza Pública
  PLAN_ESCUDO: "Hola, me interesa afiliarme al Plan Escudo ($59.900/mes) de AMF Firma Legal. ¿Cuáles son los pasos para iniciar mi protección jurídica?",
  PLAN_FORTALEZA: "Hola, deseo afiliarme al Plan Fortaleza ($79.900/mes) de AMF Firma Legal. ¿Me podrían indicar los pasos para activar mi cobertura?",
  PLAN_BASTION: "Hola, deseo afiliarme al Plan Bastión ($119.900/mes) de AMF Firma Legal. Solicito información para formalizar mi suscripción.",

  // Defensa Penal Estratégica 24/7
  HOME_CAROUSEL_PENAL: "Hola, me comunico con AMF Firma Legal. Requiero atención prioritaria de un abogado penalista 24/7 para un caso urgente en Colombia.",
  DESDE_PENAL: "Hola, me comunico con AMF Firma Legal. Requiero atención prioritaria de un abogado penalista 24/7 para un caso urgente en Colombia.",

  // Sedes presenciales y virtual
  SEDE_BOGOTA: "Hola, deseo agendar una consulta presencial en la sede de AMF Firma Legal en Bogotá. ¿Qué fechas y horarios tienen disponibles?",
  SEDE_CALI: "Hola, deseo agendar una consulta presencial en la sede de AMF Firma Legal en Cali. ¿Qué fechas y horarios tienen disponibles?",
  SEDE_PIENDAMO: "Hola, deseo agendar una consulta presencial en la sede de AMF Firma Legal en Piendamó. ¿Qué fechas y horarios tienen disponibles?",
  SEDE_MEDELLIN: "Hola, deseo agendar una consulta presencial en la sede de AMF Firma Legal en Medellín. ¿Qué fechas y horarios tienen disponibles?",
  ATENCION_VIRTUAL: "Hola, deseo programar una asesoría jurídica virtual con AMF Firma Legal. ¿Cómo es el proceso y qué disponibilidad tienen?"
};
