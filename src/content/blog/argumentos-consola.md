---
title: "Recibir argumentos desde la consola en NodeJS"
description: "Cómo usar el objeto nativo process.argv en NodeJS para leer parámetros directamente desde la línea de comandos."
date: 2023-09-24
tags: ["NodeJS", "JavaScript", "CLI", "Backend"]
---

NodeJS nos proporciona métodos nativos para capturar e interactuar con parámetros, banderas u opciones pasados desde la consola de comandos de nuestro sistema sin necesidad de librerías externas.

## Recibir argumentos de forma nativa con NodeJS

El punto de entrada principal para esta funcionalidad es la propiedad nativa `process.argv`.

`app.js`

```javascript
console.log(process.argv);

// Desestructuración para extraer el tercer argumento
// Si no se provee, asignamos por defecto 'base=5'
const [ , , argv3 = 'base=5'] = process.argv;

console.log(argv3);
```

### Ejecutar nuestra aplicación pasándole parámetros

Al iniciar la aplicación desde la consola:

```bash
node app --base=20
```

Obtendremos como salida el valor parseado desestructurado:
```plaintext
base=20
```

## ¿Cómo funciona process.argv?

La propiedad `process.argv` devuelve un arreglo con todos los argumentos de línea de comandos que se pasaron al lanzar el proceso de Node.js:
1. El **primer elemento** (`index 0`) es la ruta absoluta del ejecutable de Node.js.
2. El **segundo elemento** (`index 1`) es la ruta absoluta del archivo JavaScript que está siendo ejecutado.
3. Los **siguientes elementos** representan cualquier parámetro adicional ingresado por el usuario en consola.

### Ejemplo práctico

Crea el archivo `process-args.js`:

```javascript
import { argv } from 'node:process';

// Imprimir todos los argumentos indicando su posición
argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
```

Si ejecutas el script de la siguiente manera:

```bash
node process-args.js uno dos=tres cuatro
```

La salida esperada será:
```plaintext
0: /usr/local/bin/node
1: /Users/mjr/work/node/process-args.js
2: uno
3: dos=tres
4: cuatro
```
