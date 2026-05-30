---
title: "Adivina el Pokémon Vue Game"
description: "Un divertido juego interactivo interactivo de trivia Pokémon desarrollado en Vue.js que consume dinámicamente la PokeAPI."
repo: "https://github.com/AntPerDev/adivina-pokemon-vue"
live: "https://game-pokemon-vue-antperdev.netlify.app/"
tech: ["VueJS", "JavaScript", "CSS", "PokeAPI"]
stars: 0
featured: true
date: 2022-08-15
---

# Adivina el Pokémon Vue Game

Un proyecto web lúdico e interactivo diseñado para poner a prueba los conocimientos sobre la franquicia Pokémon. Consiste en una interfaz limpia donde el usuario debe identificar el Pokémon oculto en las sombras a partir de una selección de cuatro opciones posibles.

## ¿Qué problema resuelve?
Consumir APIs públicas con grandes colecciones de datos (como la PokeAPI) en tiempo de juego ágil requiere lógica de optimización:
1. **Petición asíncrona ágil**: Cargar de forma eficiente la información del Pokémon (incluyendo su sprite visual) y generar tres opciones incorrectas aleatorias de manera instantánea.
2. **Ciclo de vida del juego**: Controlar con precisión los estados de la interfaz (cargando, jugando, respuesta correcta, respuesta incorrecta, y reinicio del juego).

## Decisiones Técnicas
- **PokeAPI REST Service**: Consumo asíncrono para descargar un grupo aleatorio de 4 Pokémon para cada ronda de juego.
- **Filtros Gráficos en CSS**: El sprite silueteado en negro se logra mediante filtros CSS avanzados (`filter: brightness(0)`), el cual se remueve dinámicamente con una transición suave en cuanto el usuario responde.
- **Pruebas de Componentes**: Estructurado con una división limpia entre lógica de consumo (helpers JS puros) y el componente UI en Vue para facilitar la mantenibilidad.

## Aprendizajes
La manipulación directa de estilos condicionales y clases dinámicas en VueJS agilizó la curva de aprendizaje de interactividad fluida. Este desarrollo es un excelente ejemplo de cómo combinar lógica asíncrona ágil con animaciones visuales ligeras.
