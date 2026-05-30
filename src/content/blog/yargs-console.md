---
title: "Recibir argumentos desde la consola con Yargs"
description: "Cómo construir herramientas CLI interactivas y robustas analizando parámetros con la librería Yargs en NodeJS."
date: 2023-09-25
tags: ["NodeJS", "Yargs", "CLI", "JavaScript"]
---

Construir herramientas de terminal (CLI) interactivas en Node.js puede volverse complejo rápidamente cuando intentas parsear de forma manual cadenas de texto de `process.argv`. Por suerte, **Yargs** resuelve este problema de raíz.

Yargs te ayuda a estructurar y construir utilidades de línea de comandos ágiles mediante el análisis inteligente de argumentos, autogeneración de ayudas y validación de tipos.

## ¿Qué ventajas nos ofrece Yargs?

* **Comandos y opciones estructuradas**: Permite agrupar y validar argumentos fácilmente (por ejemplo: `mi-programa.js serve --port=5000`).
* **Menú de ayuda dinámico**: Genera e imprime automáticamente un menú de ayuda interactivo documentando las banderas, atajos y tipos aceptados.
* **Autocompletado en Bash/Zsh**: Genera scripts de autocompletado en terminal para mejorar drásticamente la experiencia de usuario.
* **Manejo de atajos (aliases)**: Permite configurar atajos rápidos para tus comandos de forma nativa.

## Recursos Importantes

* [Paquete Yargs en NPM](https://www.npmjs.com/package/yargs)
* [Referencia Oficial de la API de Yargs](https://yargs.js.org/docs/#api-reference-optionkey-opt)
