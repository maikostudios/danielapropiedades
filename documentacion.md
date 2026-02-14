# Documentacion funcional y de producto

Fecha de referencia: 2026-02-14  
Proyecto: `Plantilla_landingpage1`

## 1) Alcance de este documento

Este documento describe:

- Componentes, vistas y secciones que ya existen en la web actual.
- Caracteristicas UI/UX implementadas hoy.
- Lo que deberia contener la solucion al salir a produccion en 3 alternativas:
- Alternativa A: pagina estatica.
- Alternativa B: pagina dinamica.
- Alternativa C: pagina autoadministrable.

## 2) Inventario actual (estado demo)

### 2.1 Estructura tecnica actual

- `index.html`: vista principal (landing + buscador + listado + servicios + contacto).
- `detalle.html`: vista de detalle por propiedad (`?id=`).
- `assets/css/style.css`: estilos globales, componentes visuales y responsive.
- `assets/js/properties-data.js`: dataset local (`window.PROPERTIES_DATA`).
- `assets/js/app.js`: logica de filtros, render de cards y newsletter en landing.
- `assets/js/detalle.js`: logica de detalle, carrusel y propiedades relacionadas.
- `assets/img/logo-daniela.svg`: logo marca.
- `assets/img/maikostudios-logo.svg`: logo de autor/demo.

### 2.2 Vista 1: Landing (`index.html`)

Secciones y componentes:

- Header sticky con menu anclado (`Inicio`, `Destacadas`, `Servicios`, `Contacto`).
- CTA superior de WhatsApp.
- Hero con propuesta de valor y dos CTAs (`Explorar propiedades`, `Agenda una asesoria`).
- Buscador avanzado con filtros:
- Campo de texto por palabra clave/sector.
- Select de region.
- Select de provincia dependiente de region.
- Select de comuna dependiente de region/provincia.
- Select de tipo de propiedad.
- Botones `Buscar propiedades` y `Limpiar`.
- Seccion de propiedades destacadas con:
- Metadata de resultados (`X de Y disponibles`).
- Grid de tarjetas generadas por JS.
- Estado vacio (`No encontramos propiedades...`).
- Seccion de servicios (4 tarjetas).
- Footer de contacto/redes.
- Formulario de newsletter con validacion de email.
- Boton flotante de WhatsApp.
- Toast de feedback para acciones (limpiar filtros y newsletter).

### 2.3 Vista 2: Detalle (`detalle.html`)

Secciones y componentes:

- Header con retorno al listado y CTA WhatsApp.
- Card de titulo con breadcrumb y badge de estado (ej. `Venta`).
- Carrusel Bootstrap con indicadores + controles prev/next.
- Bloque `Descripcion general`.
- Bloque `Video de la propiedad` (iframe YouTube).
- Bloque `Ubicacion referencial` (iframe Google Maps).
- Sidebar de precio y especificaciones:
- Precio UF.
- Precio CLP referencial.
- Tipo, areas, dormitorios, banos.
- Lista de modalidades de pago.
- CTA `Contactar por WhatsApp`.
- CTA `Agendar tour virtual`.
- Seccion `Otras propiedades que pueden interesarte` (3 cards).
- Footer simple y WhatsApp flotante.

### 2.4 Modelo de datos actual

Cada propiedad en `window.PROPERTIES_DATA` incluye:

- Identificacion y comercial: `id`, `title`, `type`, `tag`, `status`.
- Precio: `priceUf`, `priceClp`.
- Ubicacion: `region`, `province`, `commune`, `sector`.
- Atributos fisicos: `buildArea`, `landArea`, `beds`, `baths`, `parking`.
- Media: `images[]`, `videoUrl`, `mapUrl`.
- Contenido comercial: `description`, `paymentOptions[]`, `agendaUrl`.

### 2.5 Componentes funcionales (JS)

`assets/js/app.js`:

- Inicializa estado y referencias DOM.
- Normaliza texto para busqueda (incluye soporte para acentos al filtrar).
- Genera opciones unicas para filtros.
- Aplica filtros combinados por texto + region + provincia + comuna + tipo.
- Renderiza tarjetas dinamicamente.
- Administra estado vacio y contador de resultados.
- Restaura filtros y muestra toast de confirmacion.
- Valida formulario newsletter y muestra feedback de exito/error.

`assets/js/detalle.js`:

- Lee `id` desde query string.
- Busca propiedad por id con fallback a la primera propiedad.
- Inyecta datos en titulo, precios, descripcion, specs, video, mapa, pagos.
- Construye mensaje dinamico para enlace WhatsApp.
- Renderiza carrusel de imagenes.
- Renderiza propiedades relacionadas (hasta 3).

### 2.6 Caracteristicas UI/UX actuales

- Identidad visual definida por variables CSS (`--brand-black`, `--brand-gold`, etc).
- Tipografia dual: `Cinzel` (titulares) + `Montserrat` (texto).
- Header sticky con backdrop blur.
- Hero con fondo fotografico + overlay degradado.
- Tarjetas de propiedad con hover elevation y zoom de imagen.
- Boton WhatsApp flotante con animacion `pulse`.
- Feedback inmediato con toast para acciones de usuario.
- Navegacion por anclas con `scroll-behavior: smooth`.
- Diseno responsive por multiples breakpoints:
- `<375`, `<360`, `<576`, `>=768`, `>=1024`, `>=1200`.
- Optimizaciones de percepcion:
- `loading="lazy"` en imagenes y iframes.
- Estructura clara de secciones y jerarquia visual.

### 2.7 Brechas para produccion (actualmente faltante)

- Datos estan hardcodeados en JS local (sin fuente externa).
- Newsletter no persiste leads en una plataforma real.
- No hay backend para formularios, leads ni trazabilidad.
- No hay panel para crear/editar/publicar propiedades.
- No hay autenticacion, roles ni auditoria.
- SEO tecnico parcial (faltan OG/Twitter, sitemap, robots, schema.org).
- Falta instrumentacion analitica (GA4, eventos, embudos).
- Falta observabilidad y monitoreo de errores (Sentry/logs).
- Falta capa legal/compliance completa (cookies, privacidad, terminos).

## 3) Alternativa A: Produccion como pagina estatica

### 3.1 Arquitectura propuesta

- Hosting estatico: Netlify, Vercel Static, Cloudflare Pages o GitHub Pages.
- Frontend puro HTML/CSS/JS (mantener estructura actual).
- Datos en archivo versionado (`assets/data/properties.json`) o JS similar.
- CDN de imagenes optimizadas (WebP/AVIF + fallback).

### 3.2 Que contendra en produccion

- Las 2 vistas actuales (`index` y `detalle`) manteniendo la UX ya implementada.
- Dataset de propiedades editable por archivo (flujo manual por Git).
- Integracion real de newsletter via servicio externo:
- Mailchimp, Brevo, ConvertKit o endpoint serverless simple.
- SEO base completo:
- metadatos OG/Twitter, sitemap.xml, robots.txt, canonical y favicon set.
- Paginas legales:
- `politica-de-privacidad`, `terminos`, `politica-de-cookies`.
- Analitica y conversion:
- GA4 + eventos (click WhatsApp, envio newsletter, click en detalle).

### 3.3 Ventajas y limites

- Ventajas: costo bajo, deploy rapido, alta velocidad, bajo mantenimiento.
- Limites: actualizacion manual de contenido y sin backoffice nativo.

## 4) Alternativa B: Produccion como pagina dinamica

### 4.1 Arquitectura propuesta

- Frontend desacoplado (puede seguir similar al actual o migrar a framework).
- API backend (Node/Nest/Laravel/Django) para propiedades y leads.
- Base de datos (PostgreSQL/MySQL).
- Almacenamiento de media (S3/Cloudinary).

### 4.2 Que contendra en produccion

- Las 2 vistas publicas actuales, pero consumiendo API real.
- Listado y detalle cargados desde base de datos.
- Filtros server-side y/o client-side con datos reales.
- Persistencia de leads:
- Newsletter.
- Formularios de contacto.
- Interacciones de agenda.
- Integracion con WhatsApp y CRM (registro de origen de lead).
- SEO dinamico por propiedad:
- title, description, OG image y slug por item.
- Escalabilidad funcional:
- paginacion, ordenamiento, propiedades destacadas por fecha/regla.

### 4.3 Endpoints minimos sugeridos

- `GET /api/properties`
- `GET /api/properties/:id`
- `GET /api/catalog/regions`
- `POST /api/leads/newsletter`
- `POST /api/leads/contact`
- `POST /api/visits` (tracking de interes/agenda)

### 4.4 Ventajas y limites

- Ventajas: datos vivos, trazabilidad, integraciones, escalabilidad comercial.
- Limites: mas costo de desarrollo, infraestructura y operacion continua.

## 5) Alternativa C: Produccion autoadministrable

### 5.1 Arquitectura propuesta

- Base dinamica + panel admin.
- Implementacion recomendada:
- Opcion 1: Headless CMS (Strapi, Directus, Sanity) + frontend personalizado.
- Opcion 2: Backend propio + modulo admin interno.
- Control de acceso con roles y permisos.

### 5.2 Que contendra en produccion

Portal publico:

- Todo lo de la alternativa dinamica.
- SEO por propiedad editable desde admin.
- Programacion de publicaciones (fecha inicio/fin).

Panel autoadministrable:

- Dashboard con metricas clave:
- visitas, leads, CTR WhatsApp, propiedades mas vistas.
- CRUD completo de propiedades:
- crear, editar, duplicar, archivar, publicar/despublicar.
- Gestor de multimedia:
- subida, recorte basico, orden de galeria, texto ALT.
- Gestion de taxonomias:
- regiones, provincias, comunas, tipos, tags.
- Gestion de leads:
- bandeja, estado del lead, notas, exportacion CSV.
- Integraciones:
- mail marketing, CRM, WhatsApp API, Google Calendar.
- Control editorial:
- borrador, revision, publicado, historial y auditoria.
- Seguridad operativa:
- 2FA opcional, bloqueo por intentos, backup programado.

### 5.3 Ventajas y limites

- Ventajas: autonomia total del negocio, operacion diaria sin tocar codigo.
- Limites: mayor complejidad inicial, capacitacion de usuarios y gobierno de datos.

## 6) Recomendacion de evolucion por fases

- Fase 1 (rapida): lanzar alternativa estatica con SEO y analitica completa.
- Fase 2 (comercial): pasar a alternativa dinamica con API y leads persistentes.
- Fase 3 (operativa): habilitar autoadministracion con roles, workflows y CRM.

## 7) Checklist minimo de salida a produccion

- Rendimiento:
- imagenes comprimidas, lazy loading, minificacion y cache headers.
- Calidad:
- QA responsive (mobile/tablet/desktop), pruebas cross-browser.
- SEO:
- title/description por vista, sitemap, robots, Open Graph.
- Seguridad:
- CSP basica, validacion server-side, rate limit para formularios.
- Legal:
- politica de privacidad y consentimiento de datos.
- Medicion:
- GA4, eventos de conversion y panel de metricas.
- Operacion:
- entorno staging, pipeline CI/CD y plan de rollback.
