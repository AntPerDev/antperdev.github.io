---
title: "Pokemon Static — Astro SSG"
description: "Sitio estático de listado de Pokémon construido con Astro, generando rutas estáticas por cada Pokémon a partir de la PokéAPI."
repo: "https://github.com/AntPerDev/02-pokemon-static"
live: "https://jazzy-dusk-545caa.netlify.app/"
tech: ["Astro", "TypeScript", "PokéAPI", "CSS"]
stars: 0
featured: true
date: 2026-04-03
draft: true
---

# Pokemon Static — Astro SSG

**Pokemon Static** es una aplicación web de generación estática (SSG) construida con **Astro** que muestra el listado completo de Pokémon consumiendo la PokéAPI durante el build. Cada Pokémon tiene su propia página pre-renderizada con carga instantánea.

## ¿Qué problema resuelve?
Las aplicaciones de listado que dependen de APIs externas suelen realizar peticiones en el cliente en cada visita, generando latencia y aumentando la carga del servidor de la API. Este proyecto resuelve ese problema trasladando todas las peticiones a **build time**, produciendo HTML 100% estático que se sirve directamente desde una CDN sin ninguna petición de API en tiempo de ejecución.

## Decisiones Técnicas
- **`getStaticPaths` de Astro**: Se utiliza la función `getStaticPaths` para generar dinámicamente una ruta estática por cada uno de los 151 Pokémon de la primera generación, consumiendo la PokéAPI una única vez durante el build.
- **Tipado Estricto con TypeScript**: Las respuestas de la API están completamente tipadas para garantizar la consistencia de los datos entre el build y el renderizado.
- **Optimización de Imágenes**: Astro Image Integration pre-procesa todas las imágenes de los sprites de Pokémon durante el build, generando formatos modernos (WebP) con dimensiones optimizadas.
- **topics de GitHub**: El repositorio está etiquetado con `astro` y `static-site`, reflejando la naturaleza del proyecto.

## Aprendizajes
Este proyecto consolidó el entendimiento del modelo mental de Astro: separar claramente qué ocurre en *build time* (peticiones a APIs, generación de rutas) de qué ocurre en *runtime* (interacciones del usuario). Esta distinción es la clave de su rendimiento superior.
