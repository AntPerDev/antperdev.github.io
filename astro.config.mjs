import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // URL completa del sitio en GitHub Pages (repo: antperdev.github.io/miportfolio)
  site: 'https://antperdev.github.io/miportfolio',
  // Ruta base para que los enlaces se generen bajo /miportfolio/
  base: '/miportfolio/',
  // Asegura que los archivos estáticos tengan barra final y se sirvan correctamente
  trailingSlash: 'always',
});
