---
title: "Vue Maps Application"
description: "Aplicación interactiva de geolocalización y mapas desarrollada con Vue.js, Vuex y TypeScript usando Mapbox."
repo: "https://github.com/AntPerDev/09-mapasApp"
live: "https://thriving-dasik-a87c58.netlify.app"
tech: ["VueJS", "TypeScript", "Mapbox", "Tailwind"]
stars: 0
featured: true
date: 2021-09-02
draft: true

---

# Vue Maps Application

Desarrollada como parte de una especialización avanzada en **Vue.js**, esta aplicación interactiva permite a los usuarios geolocalizarse en tiempo real, buscar lugares clave, marcar coordenadas personalizadas y trazar rutas óptimas de navegación utilizando la API oficial de **Mapbox**.

## ¿Qué problema resuelve?
El renderizado interactivo de mapas en aplicaciones SPA suele ser costoso en términos de rendimiento. Además, el manejo consistente del estado geográfico (ubicación del usuario, coordenadas de búsqueda, pines activos, distancias y tiempos de viaje) requiere una sincronización sumamente precisa.

Esta aplicación resuelve la complejidad encapsulando la API de Mapbox en componentes reutilizables de Vue y centralizando el estado geográfico mediante **Vuex** con tipado TypeScript riguroso.

## Decisiones Técnicas
- **Mapbox GL JS**: Elegido por su motor de renderizado vectorial basado en WebGL, ofreciendo transiciones fluidas de cámara y zoom a 60 FPS.
- **Geolocalización Nativa**: Implementada mediante la API de geolocalización del navegador con manejo controlado de denegaciones de permisos de privacidad.
- **Cálculo de Rutas (Directions API)**: Consumimos de forma segura la API de direcciones de Mapbox para obtener las polilíneas de ruta, calculando la distancia exacta en kilómetros y el tiempo aproximado de viaje.

## Aprendizajes
Este desarrollo afianzó habilidades críticas en el manejo de interfaces de mapas asíncronas y el control de flujos de datos en Vuex. La integración de servicios de terceros con TypeScript garantiza que los cambios en las respuestas de la API no generen excepciones en runtime.
