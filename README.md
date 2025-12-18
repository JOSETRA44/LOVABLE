# Portafolio Minimalista

Un portafolio virtual estático, diseñado con una arquitectura escalable y listo para desplegarse en GitHub Pages.

## Arquitectura

El proyecto está construido utilizando tecnologías web estándar (HTML5, CSS3, JavaScript ES6) con un enfoque en la separación de responsabilidades:

-   **Datos (`js/data.js`)**: Contiene toda la información del portafolio (perfil, proyectos, habilidades) en un objeto estructurado. Esto hace que actualizar el contenido sea tan fácil como editar este archivo.
-   **Lógica (`js/script.js`)**: Se encarga de renderizar el contenido dinámicamente en el DOM.
-   **Estilos (`css/style.css`)**: Utiliza Variables CSS para facilitar la personalización de colores y fuentes. Diseño minimalista y responsive.
-   **Estructura (`index.html`)**: HTML semántico limpio.

## Cómo desplegar en GitHub Pages

1.  Haz un **fork** de este repositorio o sube los archivos a tu propio repositorio en GitHub.
2.  Ve a la pestaña **Settings** (Configuración) de tu repositorio.
3.  En el menú lateral izquierdo, haz clic en **Pages**.
4.  En la sección **Source**, selecciona `Deploy from a branch`.
5.  En **Branch**, selecciona tu rama principal (usualmente `main` o `master`) y la carpeta `/` (root).
6.  Haz clic en **Save**.

GitHub generará un enlace a tu portafolio en unos minutos.

## Personalización

Para personalizar el portafolio con tus propios datos:

1.  Abre el archivo `js/data.js`.
2.  Modifica los valores del objeto `portfolioData` (nombre, bio, enlaces, proyectos).
3.  Guarda los cambios y haz push a tu repositorio.

## Documentación Adicional

Se incluye un archivo `documentation.me` con detalles técnicos en formato Groff.
