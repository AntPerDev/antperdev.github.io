---
title: "Country App — Angular REST"
description: "Aplicación Angular para explorar información de países del mundo mediante la REST Countries API, con búsqueda, filtrado por región y vista de detalle."
repo: "https://github.com/AntPerDev/Country-App"
live: ""
tech: ["Angular", "TypeScript", "REST Countries API", "RxJS"]
stars: 0
featured: true
date: 2025-08-25
---

# Country App — Angular REST

**Country App** es una aplicación de consulta geográfica construida con **Angular** que consume la **REST Countries API** para mostrar información detallada de todos los países del mundo: población, idiomas, monedas, banderas y países fronterizos.

## ¿Qué problema resuelve?
El consumo de APIs REST en aplicaciones Angular implica gestionar correctamente la asincronía, el manejo de errores de red, los estados de carga y la caché de respuestas. Country App aborda todos estos desafíos implementando un servicio robusto basado en RxJS que centraliza la comunicación con la API externa.

## Decisiones Técnicas
- **Servicio HTTP Centralizado**: Toda la comunicación con la REST Countries API se encapsula en un `CountryService` que expone Observables tipados, manteniendo los componentes libres de lógica de red.
- **Búsqueda Reactiva con `debounceTime`**: El campo de búsqueda utiliza operadores RxJS (`debounceTime`, `distinctUntilChanged`, `switchMap`) para evitar peticiones excesivas a la API mientras el usuario escribe.
- **Enrutamiento Dinámico**: Cada país tiene su propia ruta con slug basado en el código `cca3`, permitiendo URLs compartibles y navegación directa a cualquier país.
- **Manejo de Errores**: Se implementa el operador `catchError` de RxJS para gestionar errores de red de forma elegante, mostrando mensajes de usuario apropiados sin romper la aplicación.

## Aprendizajes
Country App consolidó el patrón de arquitectura de servicios en Angular: los componentes son "tontos" (solo renderizan datos) y los servicios son los responsables de la lógica de negocio y la comunicación externa. Esta separación hace la aplicación significativamente más testeable y mantenible.
