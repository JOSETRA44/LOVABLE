# Portafolio Profesional Minimalista

Un portafolio web estático de alto rendimiento, diseñado con una arquitectura escalable y una interfaz de usuario pulida ("Best UI").

## Características Principales

*   **Diseño Minimalista & Moderno**: Tipografía limpia, espaciado generoso y estética profesional.
*   **Tema Claro/Oscuro**: Soporte nativo para modo oscuro con persistencia de preferencias.
*   **Arquitectura Escalable**: Todo el contenido reside en `js/data.js`. No es necesario tocar el HTML para actualizar textos o proyectos.
*   **Animaciones Suaves**: Efectos de entrada al hacer scroll y micro-interacciones.
*   **Totalmente Responsivo**: Se adapta perfectamente a móviles, tablets y escritorio.
*   **Iconografía Vectorial**: Uso de Feather Icons para una carga rápida y nitidez en cualquier pantalla.

## Estructura del Proyecto

*   **`js/data.js`**: El corazón del contenido. Edita este archivo para cambiar tu información, experiencia, proyectos, etc.
*   **`js/script.js`**: Lógica de renderizado, manejo de temas y animaciones.
*   **`css/style.css`**: Estilos avanzados utilizando variables CSS para fácil personalización.
*   **`index.html`**: El esqueleto semántico de la aplicación.

## Personalización

### 1. Actualizar Datos
Abre `js/data.js` y reemplaza la información de ejemplo con la tuya. El script se encargará de renderizar las nuevas secciones automáticamente.

### 2. Cambiar Colores
En `css/style.css`, busca el bloque `:root` y modifica las variables de color:
```css
:root {
    --accent: #2563eb; /* Tu color principal */
}
```

## Despliegue

Este proyecto está listo para GitHub Pages. Simplemente sube el código a tu repositorio y activa GitHub Pages desde la configuración apuntando a la raíz del proyecto.
