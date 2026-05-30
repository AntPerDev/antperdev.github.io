---
title: "Gifs Search Angular App"
description: "Aplicación SPA modular desarrollada con Angular y TypeScript para buscar y gestionar Gifs utilizando la API de Giphy."
repo: "https://github.com/AntPerDev/Gifs-App"
live: ""
tech: ["Angular", "TypeScript", "Bootstrap", "RxJS"]
stars: 0
featured: true
date: 2025-08-12
---

# Gifs Search Angular App

Una práctica aplicación SPA (Single Page Application) construida bajo las directrices modernas de **Angular**, que permite a los usuarios buscar gifs temáticos, previsualizarlos en alta calidad y persistir un historial dinámico y persistente con sus últimas diez búsquedas en almacenamiento local.

## ¿Qué problema resuelve?
El consumo interactivo de APIs con contenido dinámico multimedia e interactivo en Angular requiere controlar los ciclos de actualización del DOM para evitar rebotes de pantalla (*layout shifts*) y fugas de rendimiento por llamadas duplicadas.

Nuestra solución encapsula las llamadas HTTP en un servicio central inyectable de Angular (`GifsService`) que gestiona el estado del listado y el historial en memoria, persistiendo los datos de manera limpia en el `localStorage` del cliente.

## Decisiones Técnicas
- **RxJS (Reactive Extensions)**: Uso de flujos de datos observables reactivos para controlar el consumo asíncrono del servicio REST, previniendo cuellos de botella de red.
- **Lazy Loading**: Los componentes se estructuran para cargarse condicionalmente bajo demanda, reduciendo drásticamente el peso del bundle inicial del framework.
- **Local Storage Integration**: Lógica de sanitización y persistencia para retener las búsquedas del usuario incluso después de refrescar el navegador.

## Aprendizajes
La arquitectura de servicios de Angular proporciona un desacoplamiento exquisito entre la capa de presentación y la lógica de consumo HTTP de la API externa. Este desarrollo reforzó la modularización estricta mediante Directivas, Pipes y componentes atómicos reutilizables.
---
