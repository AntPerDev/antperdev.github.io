---
title: "Patrones de Arquitectura Frontend: Evolución de un CRUD Progresivo en TypeScript Nativo"
description: "Análisis técnico de la transición desde un estado en memoria básico hacia una solución persistente, fuertemente tipada y modular con Vite y TypeScript."
date: 2026-09-25
author: "DAW Developer"
tags: ["typescript", "architecture", "vite", "git", "clean-code"]
---

El desarrollo de software basado en la plataforma web requiere una comprensión clara de la manipulación del DOM, el ciclo de vida del estado y los contratos de datos. Este artículo analiza la evolución técnica de un sistema de gestión de inventario (*CRUD*) desarrollado con **TypeScript Nativo** sobre **Vite**, estructurado a través de una serie de *commits* en Git que representan hitos específicos de arquitectura.

---

## 1. Mapeo de Commits y Evolución del Proyecto

Para analizar o replicar el progreso del código directamente en el repositorio de GitHub, se puede navegar a través de las distintas etapas utilizando las etiquetas de historial (*tags* o *commits*):

```bash
# Para explorar una versión específica del proyecto en el repositorio local:
git checkout v1.0-data-contract
git checkout v2.0-arrow-refactor
git checkout v3.0-local-storage
```

## 2. Hito 1:  Contrato de Datos e Inyección Inicial (v1.0-data-contract)

La primera fase establece la estructura fundamental del dominio mediante contratos estrictos (interface). La restricción del modelo garantiza la integridad de los objetos antes de su procesamiento en memoria.

```TypeScript
// Strict data contract definition
interface Product {
  id: number;
  name: string;
  price: number;
  isAvailable: boolean;
}

// In-memory state array
const inventory: Product[] = [
  { id: 1, name: "Mechanical Keyboard", price: 45.99, isAvailable: true },
  { id: 2, name: "Optical Mouse", price: 15.50, isAvailable: false }
];
```

El renderizado inicial se realiza mediante la concatenación de Template Literals e inyección directa en el nodo del DOM mediante la API innerHTML:

```TypeScript
const appElement = document.querySelector<HTMLDivElement>('#app');

if (appElement) {
  appElement.innerHTML = `
    <h1>Inventory Management</h1>
    <ul>
      ${inventory.map(item => `
        <li>
          <strong>${item.name}</strong> -$${item.price.toFixed(2)}            (${item.isAvailable ? 'In Stock' : 'Out of Stock'})
        </li>
      `).join('')}
    </ul>
  `;
}
```

## 3. Hito 2: Refactorización a Funciones de Flecha y Clean Code (v2.0-arrow-refactor)

Con el objetivo de adaptar la sintaxis a los estándares contemporáneos (ES6+) y mantener una nomenclatura uniforme en inglés (Clean Code), el código se refactoriza sustituyendo las declaraciones tradicionales por expresiones de función de flecha asignadas a constantes.

```TypeScript
// Explicit return typing using arrow syntax
const render = (): void => {
  if (!appElement) return;

  appElement.innerHTML = `
    <h1>Inventory Management</h1>
    <form id="product-form">
      <input type="text" id="product-name" placeholder="Product name" required />
      <input type="number" id="product-price" step="0.01" placeholder="Price" required />
      <button type="submit">Add Product</button>
    </form>
    <!-- List item rendering -->
  `;
};
```

## 4. Hito 3: Persistencia y Gestión del Almacenamiento Local (v3.0-local-storage)

Para evitar la pérdida de estado ante eventos de recarga de la página, la capa de persistencia se integra utilizando la API localStorage.

Prevención de Magic Strings
Se aplica el principio de centralización de constantes para la clave del almacenamiento. Esto elimina cadenas literales duplicadas y previene errores en tiempo de ejecución.

```TypeScript
const STORAGE_KEY = 'inventory_app_v1';
```

Lógica de Carga Defensiva y Guardado
La deserialización de datos se protege mediante un bloque try/catch para manejar escenarios de datos corruptos o inexistentes:

```TypeScript
const loadInventory = (): Product[] => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (!savedData) {
    return [{ id: 1, name: "Mechanical Keyboard", price: 45.99, isAvailable: true }];
  }

  try {
    return JSON.parse(savedData) as Product[];
  } catch (error) {
    console.error("Failed to parse local storage data, resetting state:", error);
    return [];
  }
};

const saveToStorage = (): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(inventory));
};
```

## 5. Arquitectura del Flujo de Datos

El sistema implementa un patrón de flujo de datos unidireccional. La manipulación de los datos del array desencadena tanto la actualización del almacenamiento físico como la re-ejecución del ciclo de renderizado:

[ Form/Delete Event ] ──> [ Update Array ] ──> [ saveToStorage() ] ──> [ render() ]

## Conclusión

El diseño defensivo mediante tipado estricto, la eliminación de valores literales dispersos y la separación del ciclo de vida del estado permiten construir componentes robustos y mantenibles sin requerir dependencias de frameworks externos.
