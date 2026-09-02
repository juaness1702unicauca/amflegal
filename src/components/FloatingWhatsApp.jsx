import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { whatsappLink, WA_MESSAGES } from '../config/siteConfig';
import './FloatingWhatsApp.css';

export const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '8px'
      }}
    >
      {showTooltip && (
        <div 
          style={{
            backgroundColor: '#075E54',
            color: '#FFFFFF',
            padding: '10px 14px',
            borderRadius: '12px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
            fontSize: '0.85rem',
            maxWidth: '240px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '8px',
            animation: 'fadeIn 0.4s ease'
          }}
        >
          <span>💬 ¿Necesitas un abogado en Colombia? Escríbenos 24/7</span>
          <button 
            onClick={() => setShowTooltip(false)}
            style={{ background: 'none', border: 'none', color: '#FFF', cursor: 'pointer', opacity: 0.8 }}
            aria-label="Cerrar aviso de WhatsApp"
          >
            <X size={14} />
          </button>
        </div>
      )}

      <a
        href={whatsappLink(undefined, WA_MESSAGES.HOME_CAROUSEL_PENAL)}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: '#FFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 25px rgba(37, 211, 102, 0.45)',
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
        aria-label="Contactar a AMF por WhatsApp 24/7"
        title="Hablar con un abogado por WhatsApp"
      >
        <MessageSquare size={30} fill="#FFF" />
      </a>
    </div>
  );
};
