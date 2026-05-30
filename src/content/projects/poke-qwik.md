---
title: "Poke-Qwik — Pokédex con Qwik"
description: "Pokédex ultrarrápida construida con Qwik, aprovechando la reanudabilidad del framework para lograr tiempos de interacción instantáneos sin hidratación."
repo: "https://github.com/AntPerDev/poke-qwik"
live: ""
tech: ["Qwik", "TypeScript", "PokéAPI", "CSS"]
stars: 0
featured: true
date: 2025-07-25
---

# Poke-Qwik — Pokédex con Qwik

**Poke-Qwik** es una Pokédex construida con **Qwik**, el framework JavaScript diseñado para lograr tiempos de carga y de interactividad prácticamente instantáneos mediante su innovador modelo de **reanudabilidad** (*resumability*), eliminando por completo el proceso tradicional de hidratación del cliente.

## ¿Qué problema resuelve?
Los frameworks SPA tradicionales (React, Vue, Angular) requieren descargar, parsear y ejecutar todo el JavaScript de la aplicación antes de que la página sea interactiva, un proceso conocido como hidratación. En aplicaciones con muchos componentes este proceso puede bloquear el hilo principal durante cientos de milisegundos. Qwik resuelve este problema serializando el estado y los event listeners en el HTML, retomando la ejecución exactamente donde el servidor la dejó, sin necesidad de re-ejecutar nada.

## Decisiones Técnicas
- **Reanudabilidad sobre Hidratación**: Los componentes Qwik se cargan de forma lazy por defecto. Solo se descarga el JavaScript del componente concreto cuando el usuario interactúa con él, no antes.
- **`routeLoader$` para carga de datos**: Se utilizan los loaders de QwikCity para cargar los datos de la PokéAPI en el servidor, enviando al cliente únicamente el HTML ya renderizado.
- **`useSignal` y `useStore`**: La gestividad reactiva de Qwik permite suscripciones granulares al estado, actualizando únicamente los nodos del DOM afectados por cada cambio.
- **TypeScript de extremo a extremo**: Los tipos de la PokéAPI se comparten entre el código del servidor (loaders) y el del cliente (componentes), garantizando consistencia.

## Aprendizajes
Trabajar con Qwik cambió fundamentalmente la forma de pensar sobre la interactividad web. El modelo mental de "lazy loading por defecto" obliga a diseñar componentes con límites claros de responsabilidad, pues cada componente es una unidad de descarga independiente. Es un framework que penaliza la complejidad accidental y premia el diseño cuidadoso.
