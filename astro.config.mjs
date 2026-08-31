import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // URL completa del sitio en GitHub Pages (repo: antperdev.github.io)
  site: 'https://antperdev.github.io',
  // Ruta base para que los enlaces se generen en la raíz del dominio
  // base: '/docs',
  // Asegura que los archivos estáticos tengan barra final y se sirvan correctamente
  trailingSlash: 'always',
});
