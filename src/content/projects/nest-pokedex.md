---
title: "NestJS PokeAPI Backend"
description: "Servicio backend API REST de alto rendimiento desarrollado en NestJS con TypeScript, persistencia en MongoDB y validación estricta."
repo: "https://github.com/AntPerDev/nest-pokedex"
live: ""
tech: ["NestJS", "TypeScript", "MongoDB", "NodeJS"]
stars: 0
featured: true
date: 2023-09-13
draft: true

---

# NestJS PokeAPI Backend

Una robusta infraestructura de backend para el manejo y consulta de una Pokédex completa. Construida bajo una arquitectura modular y escalable con el framework empresarial **NestJS**, cuenta con persistencia de datos eficiente en una base de datos NoSQL (**MongoDB**).

## ¿Qué problema resuelve?
El desarrollo de backends en NodeJS requiere un orden estricto de carpetas, inyección de dependencias sólida y validación de tipos en runtime para prevenir inyecciones o caídas por datos corruptos provenientes del cliente.

**NestJS PokeAPI Backend** soluciona esto estructurando la lógica en módulos independientes de Nest (Pokemon, Seed, Common) y utilizando validadores estrictos a nivel global (`ValidationPipe` con `class-validator` y `class-transformer`).

## Decisiones Técnicas
- **Mongoose & MongoDB**: Modelado de esquemas altamente eficientes con indexación de campos clave (`name` y `no` de Pokémon) para responder consultas en milisegundos.
- **DTOs (Data Transfer Objects)**: Validación estricta en las operaciones de creación e inserción de nuevos registros, bloqueando campos innecesarios (principio de mínimo privilegio).
- **Semilla de Base de Datos (Seeding)**: Implementación de un endpoint optimizado para poblar la base de datos de manera masiva mediante operaciones por lotes (`insertMany`), evitando la saturación por peticiones secuenciales.

## Aprendizajes
Este desarrollo fortaleció la aplicación práctica de patrones de diseño avanzados en el lado del servidor, tales como el patrón Repositorio y la Inyección de Dependencias. La tipificación con TypeScript en conjunto con NestJS agiliza radicalmente la documentación e integración con APIs frontend.
---
