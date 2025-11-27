# Proyecto: Impacto de la Inteligencia Artificial en el Mercado Laboral Chileno  
**Bootcamp Fullstack JavaScript – Módulo Front-End (Integración JavaScript)**

Este repositorio contiene el desarrollo progresivo de una página web informativa sobre la IA en Chile. En esta etapa, el proyecto ha evolucionado desde una maquetación estática con **HTML/CSS/Bootstrap** hacia una aplicación web interactiva mediante la integración de **JavaScript (DOM Manipulation)**, además de contar con un contenido editorial profundizado y actualizado.

---

## 📌 Objetivos de aprendizaje alcanzados

- **Estructura y Estilos:** Maquetación semántica (HTML5), diseño responsivo (CSS Grid/Flexbox) y uso de Frameworks (Bootstrap 5).
- **Organización de Archivos:** Arquitectura de carpetas escalable (`ASSETS/CSS`, `ASSETS/IMG`, `ASSETS/JS`).
- **Integración de JavaScript:**
  - Vinculación correcta de scripts externos al documento HTML.
  - Manipulación del **DOM** (Document Object Model).
  - Manejo de eventos (`addEventListener`) para interacciones de usuario.
  - Uso de propiedades de ventana (`window.scrollY`) y métodos de desplazamiento (`window.scrollTo`).
- **Contenido:** Redacción técnica y expansión de textos informativos para mejorar la experiencia de lectura.

---

## 📁 Estructura del Proyecto

Se ha añadido el directorio `JS` para la lógica del cliente.


/M2_EP4
│
├── index.html                  # Estructura principal (Actualizada con script y botón)
│
├── ASSETS
│   ├── IMG
│   │   ├── ia_trabajo.jpg
│   │   └── Captura_responsividad.jpg
│   │
│   ├── CSS
│   │   └── styles.css          # Estilos personalizados y media queries
│   │
│   └── JS                      # Nuevo: Lógica de interacción
│       └── app.js              # Script del botón "Ir Arriba"
│
└── README.md                   # Documentación del proyecto


-----

## 🧩 Tecnologías utilizadas

  - **HTML5** (Semántica y atributos de accesibilidad)
  - **CSS3** (Flexbox, Grid, Media Queries)
  - **Bootstrap 5** (Navbar responsiva, clases de utilidad y componentes de botones)
  - **JavaScript (ES6+)** (Lógica de interacción y manipulación del DOM)
  - **Git/GitHub** (Control de versiones)

-----

## ⚡ Nuevas Funcionalidades (JavaScript)

### Botón "Ir Arriba" (Scroll to Top)

Se implementó un botón flotante que mejora la navegabilidad en dispositivos móviles y escritorio:

1.  **Detección de Scroll:** El botón permanece oculto y solo aparece cuando el usuario desciende más de **300px** (`window.scrollY > 300`).
2.  **Interacción:** Al hacer clic, se ejecuta `window.scrollTo` con la propiedad `behavior: 'smooth'`, generando un desplazamiento suave hacia el inicio de la página.
3.  **Código:** La lógica se encuentra aislada en `ASSETS/JS/app.js` para mantener la separación de responsabilidades.

-----

## 📚 Actualización de Contenido

El contenido textual (`index.html`) ha sido **extendido y profundizado** para ofrecer un análisis más robusto:

  - **Header:** Nueva introducción detallada (ampliada en un 200%) sobre la Cuarta Revolución Industrial y el posicionamiento de Chile.
  - **Secciones:** Profundización en datos sobre minería, retail, legislación (Política Nacional de IA) y desafíos de reconversión laboral.

-----

## 🎨 Diseño Responsivo

El proyecto mantiene su enfoque **Mobile First**:

  - **Móvil:** Diseño lineal, menú hamburguesa y botón "Ir Arriba" accesible con el pulgar.
  - **Tablet/Escritorio:** Layout en Grid, Navbar expandida y textos optimizados para lectura en pantallas grandes.

-----

## 🧑‍💻 Autor

Desarrollado por:  
**Luis Fiedler** Bootcamp DESARROLLO DE APLICACIONES FULL STACK JAVASCRIPT TRAINEE V2.0 – OTEC POSICIONA – 2025

-----

## ✔️ Estado del proyecto

🟩 **Completado: Maquetación, Estilos y Lógica JS Básica.**