import React from 'react';
import { SITE_DOMAIN } from '../config/seoConfig';

export const LegalFirmSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "AMF Firma Legal",
    "image": `${SITE_DOMAIN}/assets/logos/Sin%20Fondo/AMF%20FIRMA%20LEGAL%20VINO%20TINTO.png`,
    "@id": SITE_DOMAIN,
    "url": SITE_DOMAIN,
    "telephone": "+573155977466",
    "priceRange": "$$",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Calle 26A #13-97 · Oficina 2304, Bulevar Tequendama",
        "addressLocality": "Bogotá",
        "addressRegion": "Cundinamarca",
        "addressCountry": "CO"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Calle 5 #88-29",
        "addressLocality": "Cali",
        "addressRegion": "Valle del Cauca",
        "addressCountry": "CO"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Calle 10N #7-33",
        "addressLocality": "Piendamó",
        "addressRegion": "Cauca",
        "addressCountry": "CO"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Atención Presencial Bajo Agendamiento",
        "addressLocality": "Medellín",
        "addressRegion": "Antioquia",
        "addressCountry": "CO"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 4.6146,
      "longitude": -74.0704
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://wa.me/573155977466"
    ],
    "description": "Protección jurídica permanente para Fuerza Pública y defensa penal estratégica 24/7 en Colombia."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};
