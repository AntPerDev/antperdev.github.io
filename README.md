# 🚀 Portfolio Personal - AntPerDev

Mi portafolio profesional construido con **Astro**, showcaseando proyectos, artículos de blog y experiencia como desarrollador de software y arquitecto web.

**🌐 Visita el proyecto:** [https://antperdev.github.io](https://antperdev.github.io)

---

## 📋 Descripción

Este es un portafolio web moderno y de alto rendimiento que destaca:

- **Proyectos Destacados**: Una colección curada de mis proyectos más relevantes en desarrollo web
- **Blog Técnico**: Artículos sobre patrones de diseño, herramientas, cursos y tecnologías
- **Diseño Responsivo**: Experiencia optimizada para desktop, tablet y dispositivos móviles
- **Performance Optimizado**: Construido con Astro para máxima velocidad y SEO
- **TypeScript**: Todo el código escrito en TypeScript para mayor seguridad y mantenibilidad

---

## 🛠 Tecnologías Utilizadas

### Frontend

- **[Astro](https://astro.build/)** - Framework moderno para sitios estáticos ultra-rápidos
- **[TypeScript](https://www.typescriptlang.org/)** - Lenguaje tipado basado en JavaScript
- **CSS3** - Estilos modernos con animaciones y diseño responsivo

### Testing & Quality

- **[Jest](https://jestjs.io/)** - Framework de testing
- **[Astro Check](https://docs.astro.build/en/reference/cli-reference/#astro-check)** - Validación de tipos

### Build & Deployment

- **GitHub Pages** - Hosting del sitio
- **GitHub Actions** - CI/CD (configurado para deploy automático)

---

## 📁 Estructura del Proyecto

```bash
src/
├── components/          # Componentes reutilizables de Astro
│   ├── BlogCard.astro
│   ├── Header.astro
│   ├── ProjectCard.astro
│   └── ProjectHero.astro
├── content/             # Contenido estructurado (blog y proyectos)
│   ├── blog/           # Posts del blog en Markdown
│   └── projects/       # Descripción de proyectos en Markdown
├── layouts/            # Layouts base reutilizables
│   └── BaseLayout.astro
├── pages/              # Rutas de la aplicación
│   ├── index.astro     # Página principal
│   ├── blog/
│   │   ├── [slug].astro   # Página individual de posts
│   │   └── index.astro    # Listado de blog
│   └── projects/
│       ├── [slug].astro   # Página individual de proyectos
│       └── index.astro    # Listado de proyectos
├── styles/             # Estilos globales y temas
└── utils/              # Funciones utilitarias
```

---

## 🚀 Empezando

### Requisitos Previos

- **Node.js** 18.0 o superior
- **npm** o **yarn**

### Instalación

1. **Clona el repositorio**

   ```bash
   git clone https://github.com/antperdev/antperdev.github.io.git
   cd antperdev.github.io
   ```

2. **Instala las dependencias**

   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**

   ```bash
   npm run dev
   ```

   El sitio estará disponible en `http://localhost:421`

### Comandos Disponibles

```bash
# Iniciar servidor de desarrollo
npm run dev
npm start

# Compilar el proyecto para producción
npm run build

# Previsualizar la compilación de producción localmente
npm preview

# Ejecutar tests con Jest
npm test

# Acceso a CLI de Astro directamente
npm run astro
```

---

## 📝 Contenido

### Blog

Artículos técnicos sobre:

- Patrones de Diseño
- Cursos y tutoriales
- Herramientas de desarrollo
- Bases de datos y arquitectura

**Acceder**: [antperdev.github.io/blog](https://antperdev.github.io/blog)

### Proyectos

Portfolio de proyectos incluyendo:

- Aplicaciones web full-stack
- Proyectos de Vue, React, Next.js, Astro
- Herramientas de línea de comandos
- APIs y microservicios

**Acceder**: [antperdev.github.io/projects](https://antperdev.github.io/projects)

---

## 🧪 Testing

El proyecto incluye tests configurados con Jest para asegurar la calidad del código.

```bash
# Ejecutar tests
npm test

# Ejecutar tests con cobertura
npm test -- --coverage
```

---

## 🔍 SEO & Performance

- ✅ Meta etiquetas optimizadas
- ✅ Sitemap dinámico
- ✅ Precompilación TypeScript con `astro check`
- ✅ Optimización de imágenes automática
- ✅ CSS crítico inlineado
- ✅ Carga diferida (lazy loading)

---

## 🌟 Características Principales

✨ **Diseño Moderno**: UI/UX limpia e intuitiva con animaciones fluidas

🎨 **Totalmente Personalizable**: Fácil de extender y modificar

📱 **Mobile-First**: Optimizado para todos los dispositivos

⚡ **Ultra Rápido**: Astro genera HTML estático puro

♿ **Accesible**: Cumple con estándares WCAG

🔒 **Seguro**: Sin dependencias innecesarias en el cliente

---

## 📧 Contacto & Enlaces

- **Portfolio**: [https://antperdev.github.io](https://antperdev.github.io)
- **GitHub**: [@antperdev](https://github.com/antperdev)
- **Email**: Disponible en el portafolio

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT** - ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas! Si encuentras un bug o tienes sugerencias:

1. Abre un [Issue](https://github.com/antperdev/antperdev.github.io/issues)
2. Haz un fork del proyecto
3. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
4. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
5. Push a la rama (`git push origin feature/AmazingFeature`)
6. Abre un Pull Request

---

## ⭐ Créditos & Inspiración

Construido con ❤️ usando [Astro](https://astro.build/)

---

**Hecho por [@antperdev](https://github.com/antperdev)** 🚀
