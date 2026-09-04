/**
 * Configuración global del sitio AMF Firma Legal
 * 
 * PLACEHOLDERS PARA COMPLETAR ANTES DE PUBLICAR EN PRODUCCIÓN:
 * 1. WHATSAPP_NUMBER: Número corporativo de WhatsApp de AMF en formato internacional sin el signo '+'. Ej: '573101234567'
 * 2. WEB3FORMS_ACCESS_KEY: Clave de acceso del servicio Web3Forms o EmailJS para la recepción de formularios.
 * 3. PAYMENT_LINKS: URLs de la pasarela de pagos externa para cada uno de los 3 planes de Fuerza Pública.
 */

export const WHATSAPP_NUMBER = "573155977466";

export const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY"; // PLACEHOLDER: Reemplazar con la Access Key de Web3Forms

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
 * Resuelve rutas de archivos estáticos respetando la base del entorno (GitHub Pages o dominio propio).
 */
export const getAssetUrl = (path) => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const baseUrl = import.meta.env.BASE_URL || './';
  return `${baseUrl}${cleanPath}`;
};

/**
 * Mensajes prellenados de WhatsApp unificados por contexto (Sección 18 del Brief)
 */
export const WA_MESSAGES = {
  HOME_CAROUSEL_FUERZA_PUBLICA: "Hola, quiero información sobre la suscripción jurídica AMF para Fuerza Pública.",
  HOME_CAROUSEL_PENAL: "Hola, necesito orientación de AMF sobre una situación penal.",
  DESDE_SUSCRIPCIONES: "Hola, quiero información sobre la suscripción jurídica AMF para Fuerza Pública.",
  DESDE_PENAL: "Hola, necesito orientación de AMF sobre una situación penal.",
  PLAN_ESCUDO: "Hola, quiero información para afiliarme al Plan Escudo.",
  PLAN_FORTALEZA: "Hola, quiero información para afiliarme al Plan Fortaleza.",
  PLAN_BASTION: "Hola, quiero información para afiliarme al Plan Bastión.",
  SEDE_BOGOTA: "Hola, quiero agendar atención con AMF en Bogotá.",
  SEDE_CALI: "Hola, quiero agendar atención con AMF en Cali.",
  SEDE_PIENDAMO: "Hola, quiero agendar atención con AMF en Piendamó.",
  SEDE_MEDELLIN: "Hola, quiero agendar atención con AMF en Medellín.",
  ATENCION_VIRTUAL: "Hola, me gustaría agendar una atención virtual con AMF Firma Legal."
};
