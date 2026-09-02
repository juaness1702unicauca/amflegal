# AMF Firma Legal — Sitio Web Oficial

Sitio web estático moderno para **AMF Firma Legal** desarrollado en React + Vite con React Router v6.

## 🚀 Despliegue en Vercel o Netlify

El proyecto es 100% estático y listo para desplegar directamente en Vercel, Netlify o cualquier servidor Web estático.

1. **Vercel**: Importa la carpeta del proyecto en Vercel. El comando de build por defecto es `npm run build` y el directorio de salida es `dist`.
2. **Netlify**: Arrastra el proyecto o conéctalo desde Git con build command `npm run build` y publish directory `dist`.

---

## ⚙️ Placeholders a Completar Antes de Publicar

Todos los parámetros configurables del sitio se encuentran centralizados en el archivo:
`src/config/siteConfig.js`

El cliente o administrador debe actualizar los siguientes **3 datos clave**:

### 1. `WHATSAPP_NUMBER`
* **Descripción**: Número telefónico corporativo de WhatsApp de AMF en formato internacional (sin el signo `+`).
* **Ejemplo**: `"573101234567"`
* **Archivo**: `src/config/siteConfig.js` (Línea 11)

### 2. `WEB3FORMS_ACCESS_KEY`
* **Descripción**: Clave de acceso (Access Key) del servicio de formularios Web3Forms (o equivalente como EmailJS) para enviar las solicitudes del formulario inteligente directamente al correo corporativo.
* **Obtención**: Registrarse gratis en [https://web3forms.com](https://web3forms.com) y pegar la clave recibida.
* **Archivo**: `src/config/siteConfig.js` (Línea 13)

### 3. `PAYMENT_LINKS`
* **Descripción**: Enlaces de la pasarela de pago externa contratada previamente por el cliente para cada una de las 3 membresías de Fuerza Pública.
* **Valores a configurar**:
  ```js
  export const PAYMENT_LINKS = {
    escudo: "https://pasarela.com/link-escudo",     // $59.900/mes
    fortaleza: "https://pasarela.com/link-fortaleza", // $79.900/mes
    bastion: "https://pasarela.com/link-bastion"     // $119.900/mes
  };
  ```
* **Archivo**: `src/config/siteConfig.js` (Líneas 15-19)

---

## 💻 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar bundle de producción
npm run build
```
