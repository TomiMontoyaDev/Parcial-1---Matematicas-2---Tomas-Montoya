# INTEGRA — Plataforma de Cálculo Integral

Plataforma web interactiva desarrollada para el curso de **Cálculo Integral + Desarrollo de Software** (Tecnología en Desarrollo de Software, UTP, 2026-II). Fase 1 del proyecto semestral.

## Arquitectura

Proyecto en **HTML / CSS / JavaScript puro** (sin frameworks ni build step), elegido para:
- Desplegar directamente en GitHub Pages sin proceso de compilación.
- Mantener cada módulo como una unidad independiente y fácil de razonar.
- Facilitar la explicación técnica en la sustentación en video.

```
calculo-integral-platform/
├── index.html                    # Home — hero animado + navegación a los 14 módulos
├── README.md
├── assets/
│   ├── css/design-system.css     # Sistema de diseño: tokens, componentes, animaciones
│   └── js/common.js              # Scroll reveal, acordeones, render KaTeX
├── modulo-01-riemann/            # ✅ Completo — Sumas de Riemann
├── modulo-02-trapecio/           # ✅ Completo — Regla del Trapecio
├── modulo-03-punto-medio/        # ✅ Completo — Regla del Punto Medio
├── modulo-04-simpson/            # ✅ Completo — Regla de Simpson
├── modulo-05-area/               # ✅ Completo — Integral Definida y Área
├── modulo-06-directa/            # ✅ Completo — Integración Directa
└── modulo-07-sustitucion/ … 14-partes/   # 🔒 Placeholder "Próximamente - Fase 2/3"
```

Cada módulo activo sigue la misma estructura interna:
1. **Panel de fórmulas** — renderizado con KaTeX.
2. **Visualizador interactivo** — construido con Plotly.js, con controles (`<input type="range">`) que recalculan la aproximación en vivo.
3. **Ejemplos resueltos** — acordeones con el procedimiento paso a paso.

## Herramientas usadas

| Herramienta | Uso |
|---|---|
| KaTeX | Renderizado de fórmulas matemáticas |
| Plotly.js | Visualizadores interactivos (curvas, rectángulos, trapecios) |
| Google Colab / Qwen Coder | Apoyo en la fase de desarrollo del código (documentado según lo permite Parte II del parcial) |
| GitHub Pages | Despliegue |

## Cómo correr el proyecto localmente

No requiere instalación. Basta con abrir `index.html` en el navegador, o servirlo con cualquier servidor estático:

```bash
npx serve .
# o
python3 -m http.server 8000
```

## Despliegue en GitHub Pages

1. Sube el repositorio a GitHub.
2. Ve a **Settings → Pages**.
3. En "Source", selecciona la rama `main` y la carpeta `/ (root)`.
4. La plataforma queda disponible en `https://<usuario>.github.io/<repo>/`.

## Cómo contribuir

El proyecto crece módulo por módulo, en fases alineadas con el curso. Para añadir o modificar un módulo:

1. **Ubica la carpeta correspondiente** (`modulo-07-sustitucion/`, etc.) — cada módulo vive en su propia carpeta, aislado del resto.
2. **Copia la estructura de un módulo ya completo** (por ejemplo `modulo-01-riemann/index.html`) como plantilla: panel de fórmulas → visualizador interactivo → ejemplos resueltos.
3. **Usa los estilos y tokens de `assets/css/design-system.css`** en vez de escribir CSS nuevo — mantiene visual consistente entre los 14 módulos.
4. **Reutiliza `assets/js/common.js`** para scroll reveal, acordeones de ejemplos y renderizado de KaTeX; solo el visualizador propio de cada módulo (Plotly) va en un `<script>` al final de su `index.html`.
5. **Reemplaza el placeholder**: borra el bloque `.locked-state` y sube el módulo de "🔒 Próximamente" a "✅ Disponible" en el array `MODULES` dentro de `index.html` (raíz).
6. **Verifica en local** (`npx serve .`) antes de hacer commit, y confirma que la página se ve bien en móvil (DevTools → responsive mode).

## Estado del proyecto (Fase 1)

- [x] Estructura base con navegación a los 14 módulos
- [x] Diseño responsive
- [x] Renderizado de fórmulas con KaTeX
- [x] Módulos 1–4 (Riemann, Trapecio, Punto Medio, Simpson) con visualizador interactivo
- [x] Módulos 5–6 (Área + Integración Directa)
- [ ] Módulos 7–10 — Fase 2 (Parcial 2)
- [ ] Módulos 11–14 — Fase 3 (Proyecto Final)
