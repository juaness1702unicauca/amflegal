import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home } from 'lucide-react';
import { whatsappLink, WA_MESSAGES } from '../config/siteConfig';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import './NotFound.css';

export const NotFound = () => {
  return (
    <main className="not-found-page">
      <Helmet>
        <title>Pagina no encontrada | AMF Firma Legal</title>
        <meta name="description" content="La pagina que buscas no existe. Vuelve al inicio o contactanos directamente." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="not-found-container">
        <div className="not-found-code">404</div>
        <div className="not-found-divider" />
        <h1 className="not-found-title">Pagina no encontrada</h1>
        <p className="not-found-subtitle">
          La direccion que buscas no existe o fue movida. Pero tu caso si tiene solucion.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary not-found-btn">
            <Home size={18} />
            <span>Volver al inicio</span>
          </Link>
          <a
            href={whatsappLink(undefined, WA_MESSAGES.DESDE_PENAL)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold not-found-btn"
          >
            <WhatsAppIcon size={18} />
            <span>Hablar con AMF</span>
          </a>
        </div>
      </div>
    </main>
  );
};
