# Regex Simulator

Este proyecto es una aplicación web construida con **React**, **TypeScript** y **Vite** que permite simular la evaluación de cadenas frente a expresiones regulares utilizando un motor propio.

- Permite al usuario ingresar una expresión regular en una sintaxis simple (`*`, `+`, `|`, paréntesis).
- Evaluar cadenas para verificar si pertenecen al lenguaje descrito.
- Lleva un historial de resultados (aceptada/rechazada).
- Navegación básica entre páginas: simulador, teoría y ayuda.

## 📦 Dependencias principales
- `react` / `react-dom` – librería UI
- `react-router-dom` – navegación entre páginas
- `typescript` – tipado estático
- `vite` – bundler y servidor de desarrollo

## **Características del motor de regex**
El motor personalizado (`src/logic/regexEngine.ts`) implementa:
- Evaluación de cadenas determinísticas
- Manejo de operadores básicos: concatenación, unión (`|`), cerradura de Kleene (`*`) y `+`.

> Nota: El motor no cubre todas las expresiones regulares avanzadas de JavaScript, se limita a un subconjunto educativo.