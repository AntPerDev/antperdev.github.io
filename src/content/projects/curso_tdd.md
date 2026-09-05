---
title: "Test-Driven Development Course"
description: "Ejercicios y proyectos prácticos construidos bajo la metodología Test-Driven Development (TDD) en entornos TypeScript/Jest."
repo: "https://github.com/AntPerDev/curso_tdd"
live: ""
tech: ["TypeScript", "Jest", "TDD", "Testing"]
stars: 0
featured: true
date: 2021-06-03
draft: true

---

# Test-Driven Development Course

Este repositorio reúne las prácticas avanzadas desarrolladas durante una especialización intensiva en **Test-Driven Development (TDD)**. Demuestra la disciplina de escribir pruebas que fallen (Red), implementar la solución mínima para que pasen (Green) y refactorizar el código de manera iterativa sin alterar el comportamiento (Refactor).

## ¿Qué problema resuelve?
El desarrollo de software sin pruebas unitarias automatizadas incrementa exponencialmente los riesgos de inyectar regresiones en producción al refactorizar o añadir nuevas características. Además, programar la lógica primero y los tests después suele resultar en arquitecturas acopladas difíciles de testear.

TDD nos fuerza a pensar en el diseño y los requisitos del software antes de escribir una sola línea de código de negocio, garantizando que el diseño sea modular, desacoplado y con una cobertura de pruebas del 100%.

## Decisiones Técnicas
- **Jest & ts-jest**: Suite de pruebas configurada con soporte para ESM y TypeScript, permitiendo una ejecución de pruebas sumamente rápida.
- **Mocks y Módulos Falsos (Stubs)**: Implementación de dobles de prueba para aislar las dependencias externas (llamadas HTTP, bases de datos o lecturas del filesystem) garantizando pruebas unitarias deterministas y veloces.
- **Pruebas de Límites (Boundary Testing)**: Cobertura exhaustiva para casos límite, valores nulos y control controlado de excepciones.

## Aprendizajes
La metodología TDD transforma la confianza del desarrollador al refactorizar código de gran escala. Escribir pruebas primero resulta invariablemente en funciones atómicas de responsabilidad única que se adhieren directamente al principio SOLID "Single Responsibility".
---
