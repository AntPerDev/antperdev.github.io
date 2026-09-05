---
title: "Blog Astro Engine"
description: "Blog estático de alto rendimiento creado siguiendo el tutorial oficial de Astro 6.1.1, optimizado para carga instantánea y SEO."
repo: "https://github.com/AntPerDev/blog-astro"
live: "https://boisterous-begonia-2e9726.netlify.app/"
tech: ["Astro", "TypeScript", "Markdown", "CSS"]
stars: 0
featured: true
date: 2026-03-22
draft: true

---

# Blog Astro Engine

Este proyecto representa un blog estático moderno construido con **Astro 6.1.1**, diseñado específicamente para maximizar las métricas de Core Web Vitals (con puntuaciones perfectas de 100% en Lighthouse) mediante la eliminación de JavaScript innecesario en el cliente.

## ¿Qué problema resuelve?
La mayoría de plataformas de blogging modernas (como WordPress o Medium) inyectan cantidades masivas de scripts de terceros, estilos no utilizados y código innecesario, ralentizando la experiencia del usuario final. 

**Blog Astro Engine** aborda esto renderizando todo a HTML 100% estático durante el proceso de build. Solo se envía CSS crítico al navegador, logrando tiempos de carga instantáneos incluso bajo conexiones móviles inestables de red (3G).

## Decisiones Técnicas
- **Enrutamiento Basado en Archivos**: Aprovechando el sistema de páginas de Astro en `src/pages/`, estructuramos dinámicamente el listado de posts y la vista detallada de los mismos.
- **Content Collections**: Implementamos la validación de esquemas Zod nativa de Astro para asegurar que todos los posts del blog posean frontmatter consistente (título, descripción, fecha de publicación, etiquetas y autor).
- **TypeScript Estricto**: Todo el código de mapeo de metadatos y enrutamiento cuenta con tipado estricto para evitar errores sintácticos o de accesibilidad en build-time.

## Aprendizajes
La experiencia de migración a Astro demostró la ventaja de su filosofía de "islas de interactividad". Mantener la interactividad confinada únicamente a donde se necesita ayuda a preservar la agilidad de la web y a simplificar la estructura del lado del cliente.
