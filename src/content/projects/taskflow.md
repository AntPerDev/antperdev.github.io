---
title: "TaskFlow — Kanban Board"
description: "Tablero Kanban interactivo construido con Vanilla JavaScript puro, con soporte para drag & drop y persistencia en localStorage."
repo: "https://github.com/AntPerDev/taskflow"
live: "https://cool-druid-f5274a.netlify.app/"
tech: ["JavaScript", "HTML", "CSS", "LocalStorage"]
stars: 0
featured: true
date: 2026-05-26
---

# TaskFlow — Kanban Board

**TaskFlow** es un tablero Kanban minimalista y funcional construido exclusivamente con **Vanilla JavaScript**, sin ningún framework ni librería externa. Su objetivo es demostrar que las interfaces de usuario dinámicas e interactivas pueden construirse con los estándares web puros, sin añadir peso innecesario al bundle.

## ¿Qué problema resuelve?
La mayoría de implementaciones de tableros Kanban dependen de frameworks pesados (React, Vue, Angular) para gestionar el estado de las tarjetas y columnas. TaskFlow demuestra que el DOM API nativo y los eventos del navegador son suficientes para construir una experiencia de usuario fluida y completa.

## Decisiones Técnicas
- **Drag & Drop API Nativa**: Se utiliza la API `draggable` del navegador para mover tarjetas entre columnas sin necesidad de librerías externas como SortableJS.
- **Persistencia con LocalStorage**: El estado del tablero (columnas, tarjetas y su orden) se serializa a JSON y se guarda automáticamente en `localStorage`, sobreviviendo a recargas de página.
- **Separación de responsabilidades**: El código se organiza en módulos ES6 con responsabilidades claras: renderizado, persistencia y gestión de eventos, siguiendo el principio de Single Responsibility.

## Aprendizajes
Este proyecto reforzó la comprensión profunda del ciclo de vida del DOM y la importancia de gestionar el estado de la aplicación de forma explícita cuando no se dispone del sistema reactivo de un framework. La gestión manual del estado enseña los fundamentos que cualquier framework resuelve por debajo.
