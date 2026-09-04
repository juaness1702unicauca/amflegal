import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEO_DATA, SITE_DOMAIN, SITE_NAME, DEFAULT_OG_IMAGE } from '../config/seoConfig';

export const SEOHead = ({ pageKey }) => {
  const meta = SEO_DATA[pageKey] || SEO_DATA.home;
  const canonicalUrl = `${SITE_DOMAIN}${meta.path}`;

  const breadcrumbSchema = meta.path !== '/' ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": `${SITE_DOMAIN}/`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": meta.breadcrumbName || meta.title,
        "item": canonicalUrl
      }
    ]
  } : null;

  return (
    <Helmet>
      {/* Basic HTML Meta Tags */}
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="es_CO" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />

      {/* Dynamic Breadcrumbs Schema.org for Google Search Rich Results */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};
