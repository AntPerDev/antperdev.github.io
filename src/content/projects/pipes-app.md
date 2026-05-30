---
title: "Pipes App — Angular Pipes"
description: "Aplicación Angular demostrativa de pipes nativos y personalizados, incluyendo transformaciones de datos, formateo de fechas, monedas y filtros avanzados."
repo: "https://github.com/AntPerDev/Pipes-App"
live: ""
tech: ["Angular", "TypeScript", "RxJS", "SCSS"]
stars: 0
featured: true
date: 2025-08-25
---

# Pipes App — Angular Pipes

**Pipes App** es una aplicación Angular construida como laboratorio práctico para explorar en profundidad el sistema de **pipes** de Angular, tanto los integrados en el framework como pipes personalizados construidos desde cero.

## ¿Qué problema resuelve?
La transformación y el formateo de datos en la capa de presentación es uno de los puntos donde más código repetitivo y propenso a errores se genera en aplicaciones frontend. Los pipes de Angular ofrecen una solución declarativa, reutilizable y testeble para este problema. Esta aplicación documenta y demuestra de forma interactiva todas sus variantes.

## Decisiones Técnicas
- **Pipes Puros vs. Impuros**: Se implementan y comparan pipes puros (sin efectos secundarios, memoizables) contra pipes impuros (con detección de cambios reactiva), documentando el impacto en rendimiento de cada uno.
- **Pipes Personalizados**: Se construyen pipes a medida para casos de uso reales: truncado de texto, formateo de números de teléfono y filtrado dinámico de listas con tipado genérico.
- **Integración con RxJS**: Uso del pipe `async` para manejar Observables directamente en la plantilla, eliminando la necesidad de suscripciones manuales y previniendo fugas de memoria.
- **TypeScript Estricto**: El modo estricto de TypeScript garantiza que todas las transformaciones de tipos en los pipes estén validadas en tiempo de compilación.

## Aprendizajes
Este proyecto dejó claro que los pipes bien diseñados son una herramienta de arquitectura, no solo de visualización. Centralizar la lógica de transformación en pipes testebles reduce drásticamente la complejidad de los componentes y mejora la mantenibilidad del código.
