---
title: "Blackjack Refactored with Vite"
description: "Refactorización integral y optimización del clásico juego de Blackjack utilizando JavaScript moderno (ES6) y empaquetado con Vite."
repo: "https://github.com/AntPerDev/blackjack-vite"
live: "https://antperdev.github.io/blackjack-vite/"
tech: ["JavaScript", "Vite", "HTML5", "CSS3"]
stars: 0
featured: true
date: 2022-12-17
---

# Blackjack Refactored with Vite

Este proyecto consistió en tomar una base de código heredada (legacy) del juego Blackjack estructurada con JavaScript tradicional, optimizarla bajo los estándares modernos de desarrollo (ES6 Modules) y adaptarla a un entorno ágil con **Vite**.

## ¿Qué problema resuelve?
El código JavaScript antiguo y monolítico suele carecer de modularidad, lo cual dificulta la inyección de optimizaciones en el bundle, el testing independiente de funciones y la legibilidad. Las dependencias inyectadas globalmente en el objeto `window` pueden generar colisiones de nombres o fugas de memoria.

Refactorizamos el juego separando la lógica del DOM de las utilidades puras de la baraja (creación del deck, barajado dinámico y cálculo de valor de las cartas) utilizando **módulos de ES6**.

## Decisiones Técnicas
- **Vite Bundler**: Adoptado para agilizar la recarga en caliente (HMR) durante el desarrollo y producir un compilado de producción minificado y altamente optimizado.
- **Algoritmo de Barajado Fisher-Yates (Shuffle)**: Implementación robusta en JS puro para barajar las cartas de forma verdaderamente aleatoria y probabilística.
- **CSS Flexbox/Grid**: Estructuramos la interfaz responsiva para que el tapete de juego se adapte fluidamente tanto a pantallas móviles táctiles como a monitores de escritorio.

## Aprendizajes
La experiencia de refactorización demostró el inmenso valor de modularizar el código antes de escalar un proyecto. Migrar hacia Vite reduce significativamente los tiempos de arranque de desarrollo y simplifica drásticamente el proceso de despliegue mediante GitHub Actions.
