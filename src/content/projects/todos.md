---
title: "Todos App — Gestión de Tareas"
description: "Aplicación de lista de tareas con filtrado por estado, persistencia en localStorage y arquitectura basada en componentes reutilizables."
repo: "https://github.com/AntPerDev/todos"
live: ""
tech: ["TypeScript", "HTML", "CSS", "LocalStorage"]
stars: 0
featured: true
date: 2025-05-01
---

# Todos App — Gestión de Tareas

**Todos App** es una aplicación de gestión de tareas pendientes construida con **TypeScript** puro, sin dependencias externas. Implementa las operaciones CRUD completas (crear, leer, actualizar y eliminar tareas) junto con un sistema de filtrado por estado y persistencia automática en `localStorage`.

## ¿Qué problema resuelve?
Una aplicación de tareas parece simple, pero es un banco de pruebas ideal para validar principios de arquitectura frontend: gestión de estado predecible, separación entre lógica y presentación, y sincronización entre el estado en memoria y la capa de persistencia. Este proyecto aplica esos principios de forma rigurosa usando solo TypeScript estándar.

## Decisiones Técnicas
- **TypeScript Estricto**: Todas las entidades (`Todo`, `FilterType`, `TodoStore`) están modeladas con interfaces y tipos explícitos, garantizando que el compilador detecte cualquier inconsistencia antes de runtime.
- **Patrón de Estado Centralizado**: El estado de la aplicación vive en un único objeto `store` que expone métodos para mutarlo. Los componentes de UI solo llaman a estos métodos y re-renderizan el DOM en respuesta, simulando el flujo unidireccional de datos de frameworks como Redux.
- **Persistencia Automática**: Cada mutación del estado dispara una serialización a `localStorage`, de modo que el estado se restaura automáticamente al recargar la página sin ninguna intervención del usuario.
- **Filtrado Declarativo**: Los tres filtros (Todas, Activas, Completadas) son simples funciones puras que operan sobre el array de tareas, haciendo el código de filtrado trivialmente testeable.

## Aprendizajes
Construir este proyecto sin frameworks obligó a tomar decisiones de arquitectura explícitas que normalmente quedan ocultas bajo la abstracción de React o Vue. Entender cómo funciona la gestión de estado "a mano" es fundamental para usar cualquier framework de forma consciente y eficiente.
