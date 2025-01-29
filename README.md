# Cotizador de Criptomonedas

Una aplicación web desarrollada con React y TypeScript que permite consultar precios actualizados de criptomonedas en diferentes divisas.

## 🚀 Características

- Consulta en tiempo real de precios de criptomonedas
- Soporte para múltiples divisas (USD, EUR, GBP, MXN, ARS)
- Información detallada incluyendo:
  - Precio actual
  - Precio más alto del día
  - Precio más bajo del día
  - Variación en las últimas 24 horas
  - Última actualización

## 🛠️ Tecnologías Utilizadas

- React 18
- TypeScript
- Zustand (manejo de estado)
- Zod (validación de esquemas)
- Vite
- Axios
- CSS puro para los estilos

## 📚 Aprendizajes

- Implementación de TypeScript en un proyecto React
- Gestión de estado global con Zustand
- Validación de tipos en tiempo de ejecución con Zod
- Manejo de APIs externas con Axios
- Tipado estricto y mejores prácticas de TypeScript
- Componentes reutilizables y arquitectura limpia

## 🚦 Comenzando

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o pnpm

### Instalación

1. Clona el repositorio
```bash
git clone [URL del repositorio]
```

2. Instala las dependencias
```bash
npm install
```

3. Inicia el servidor de desarrollo
```bash
npm run dev
```


4. Abre http://localhost:5173 en tu navegador

## 🏗️ Scripts Disponibles

- `dev`: Inicia el servidor de desarrollo
- `build`: Genera la versión de producción
- `preview`: Previsualiza la versión de producción
- `lint`: Ejecuta el linter

## 📝 Estructura del Proyecto
src/
├── components/ # Componentes React
├── services/ # Servicios y llamadas API
├── store/ # Configuración de Zustand
├── types/ # Definiciones de tipos
├── schema/ # Esquemas de validación Zod
└── data/ # Datos estáticos