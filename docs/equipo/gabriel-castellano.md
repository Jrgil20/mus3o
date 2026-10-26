# Informe de Colaboración Técnica y Arquitectónica — mus3o

**Autor de la contribución:** Gabriel David Castellano ([@gdcastellano](https://github.com/gdcastellano) / `gdcastellano.21@est.ucab.edu.ve`)  
**Proyecto:** [mus3o](../../README.md) (Platanus Hack 26 — Track Three-Dimensional)  
**Rol:** Arquitecto de Software & Core Frontend / 3D Spatial & VR Engineer  

---

## 1. Resumen Ejecutivo

Durante el desarrollo de **mus3o**, Gabriel David Castellano fungió como el co-líder técnico del proyecto, impulsando la experiencia inmersiva central de la aplicación. Fue el principal arquitecto y desarrollador del motor de **Dioramas Vivos ("Entrar al cuadro")**, del sistema integral de **Realidad Virtual (Modo VR / Cardboard / WebXR)**, del mecanismo visual de **Curva de Olvido (agrietamiento procedural en 3D)**, y del pipeline de **búsqueda y resolución de imágenes reales con trazabilidad a fuentes**.

### Métricas Clave de Colaboración

| Métrica | Valor | Impacto en el Proyecto |
|---|:---:|---|
| **Commits Realizados** | **201** | ~39.0% del total del repositorio (164 como `gdcastellano` + 37 como `Gabriel David`). |
| **Líneas Modificadas** | **+36.364 / -2.963** | Mayor volumen de creación neta de código en frontend 3D, runtime VR y dioramas. |
| **Archivos de Test Tocados/Creados** | **> 45 suites** | Pruebas unitarias de calibración VR, teleport, rig, layout de salas, dioramas y fuentes. |
| **Innovación Espacial** | **3 mecánicas core** | Portales a dioramas 3D, modo VR estereoscópico para móviles y degradación física por olvido. |

---

## 2. Pilares de Contribución Técnica

### 2.1. Dioramas Vivos y Portales Interactivos ("Entrar al Cuadro")

Gabriel diseñó y programó de punta a punta la experiencia de inmersión en micro-mundos 3D:

- **Runtime y Arquitectura de Portales:**
  - Creación de [`apps/web/src/scene/PortalPainting.tsx`](../../apps/web/src/scene/PortalPainting.tsx), [`apps/web/src/diorama/DioramaScene.tsx`](../../apps/web/src/diorama/DioramaScene.tsx) y [`apps/web/src/diorama/DioramaRuntime.tsx`](../../apps/web/src/diorama/DioramaRuntime.tsx).
  - Transición fluida en primera persona: el usuario enfoca un cuadro temático, pulsa `E` para proyectarse dentro de la pintura viviente y `Q` para retornar al museo.
  - Generación de terrenos procedurales, iluminación atmosférica diferenciada, niebla volumétrica y renderizado instanciado de props con etiquetas flotantes legibles.
- **Dioramas Científicos y Preset "Medicina":**
  - Implementación del kit para ciencias en [`apps/web/src/diorama/terrain.ts`](../../apps/web/src/diorama/terrain.ts): entornos celulares, vasos sanguíneos, núcleo con hebras de ADN y orgánulos mitocondriales orientados al jugador.
- **Mundos Vivos a partir de Fotos Reales ("Photo Worlds"):**
  - Creación de [`apps/server/src/photoDiorama.ts`](../../apps/server/src/photoDiorama.ts) y endpoints dedicados para recrear imágenes históricas como escenarios tridimensionales explorables, vinculando etiquetas de props con el guion de voz de Aris.

---

### 2.2. Sistema de Realidad Virtual Móvil (WebXR y Cardboard Fallback)

Gabriel construyó el subsistema de Realidad Virtual que permite recorrer los palacios y dioramas en cualquier smartphone con un visor de cartón:

- **Pipeline Óptico Estereoscópico:**
  - Proyección estéreo *off-axis* para visores móviles en [`apps/web/src/vr/VrRuntime.tsx`](../../apps/web/src/vr/VrRuntime.tsx), calculando la matriz inversa de mundo por ojo (`matrixWorldInverse`) para erradicar vistas estancadas (*stale frames*).
  - Corrección de distorsión de lentes, centros ópticos ajustables y panel de calibración en pantalla ([`apps/web/src/vr/calib.test.ts`](../../apps/web/src/vr/calib.test.ts)).
- **Locomoción y Seguimiento Cefálico:**
  - Fusión sensorial de giroscopio con acelerómetro del dispositivo y predicción de orientación de 1 frame para anular la latencia perceptual.
  - Navegación por mirada (*gaze-teleportation* / *dwell clicking*) en [`apps/web/src/vr/dwell.ts`](../../apps/web/src/vr/dwell.ts) y soporte nativo para mandos Bluetooth/gamepads ([`apps/web/src/vr/pad.ts`](../../apps/web/src/vr/pad.ts)).
  - Modo Confort: viñeteado dinámico durante el movimiento y atenuación de velocidad para prevenir mareo por movimiento (*motion sickness*).
  - Soporte PWA instalable a pantalla completa sin barras de navegación ([`apps/web/src/vr/enter.ts`](../../apps/web/src/vr/enter.ts)).

---

### 2.3. Curva del Olvido y Degradación Visual en 3D (Decay)

Uno de los conceptos pedagógicos más celebrados de **mus3o** fue materializado por Gabriel:

- **Efecto de Desgaste y Agrietamiento:**
  - Implementación de [`apps/web/src/scene/Decay.tsx`](../../apps/web/src/scene/Decay.tsx) y algoritmos de animación de fragmentos en [`apps/web/src/memory/anim.ts`](../../apps/web/src/memory/anim.ts).
  - Los conceptos que requieren repaso espaciado se quiebran visualmente sobre su pedestal; el usuario debe responder el examen interactivo para repararlos y devolverles su integridad.
- **Mecánica de Progresión y Llaves:**
  - Lógica de desbloqueo de puertas basada en el dominio de conceptos de cada sala y visualización del mapa de calor de memoria en el minimapa.

---

### 2.4. Trazabilidad Epistémica y Búsqueda de Imágenes

- **Búsqueda Inteligente en Wikimedia Commons:**
  - Creación de [`apps/server/src/images.ts`](../../apps/server/src/images.ts) y [`apps/server/src/imageStore.ts`](../../apps/server/src/imageStore.ts) con limitación de tasa (*throttling*) y filtrado estricto de relevancia para evitar imágenes desconectadas del contexto.
- **Validación de Citas y Trazabilidad:**
  - Vinculación mecánica en [`packages/shared/src/sources.ts`](../../packages/shared/src/sources.ts) de cada tarjeta de concepto 3D con la línea exacta del documento fuente (PDF/apuntes) de donde fue extraído.
- **Cuadros y Placas de Museo:**
  - Renderizado de cuadros con marcos de yeso y placas con créditos legibles sobre cualquier superficie en [`apps/web/src/scene/Painting.tsx`](../../apps/web/src/scene/Painting.tsx).

---

### 2.5. Layout Espacial y Dirección Estética (Teatro de la Memoria)

- **Distribución Incremental de Salas:**
  - Algoritmo de colocación y conectividad de salas según el grafo acíclico dirigido (DAG) de conceptos en [`apps/web/src/palace/layout.ts`](../../apps/web/src/palace/layout.ts) y [`slots.ts`](../../apps/web/src/palace/slots.ts).
- **Estilo Artístico 'Teatro de la Memoria':**
  - Configuración de iluminación solar directa, mapeo tonal plano para respetar los pigmentos minerales de los frescos, y estilización de las salas de exhibición.

---

## 3. Inventario de Módulos y Archivos de Mayor Relevancia

| Módulo / Archivo | Responsabilidad Principal Implementada por Gabriel |
|---|---|
| [`apps/web/src/diorama/DioramaScene.tsx`](../../apps/web/src/diorama/DioramaScene.tsx) | Renderizado del diorama 3D, iluminación, atmósfera, instanciación de props y cámara. |
| [`apps/web/src/scene/PortalPainting.tsx`](../../apps/web/src/scene/PortalPainting.tsx) | Mecánica de entrada y salida interactiva a mundos 3D desde los cuadros del museo. |
| [`apps/web/src/vr/VrRuntime.tsx`](../../apps/web/src/vr/VrRuntime.tsx) | Runtime estéreo WebXR y Cardboard con proyección off-axis y calibración de lentes. |
| [`apps/web/src/scene/Decay.tsx`](../../apps/web/src/scene/Decay.tsx) | Shader y efecto geométrico de degradación y agrietamiento por curva de olvido. |
| [`apps/web/src/palace/layout.ts`](../../apps/web/src/palace/layout.ts) | Algoritmo de generación espacial del museo a partir del grafo temático. |
| [`apps/server/src/images.ts`](../../apps/server/src/images.ts) | Resolutor, proxy y caché de imágenes de alta resolución en Wikimedia Commons. |
| [`apps/web/src/vr/pad.ts`](../../apps/web/src/vr/pad.ts) | Control de locomoción para Realidad Virtual mediante mandos Bluetooth y gamepad. |
| [`apps/web/src/scene/Painting.tsx`](../../apps/web/src/scene/Painting.tsx) | Marco tridimensional y placa descriptiva con créditos para obras de arte en sala. |

---

## 4. Conclusión

Gabriel David Castellano fue el artífice de las experiencias más inmersivas y diferenciadoras de **mus3o**. Su dominio de los gráficos en tiempo real con WebGL, la computación geométrica para realidad virtual móvil y el diseño de dinámicas sensoriales convirtieron una premisa educativa en un entorno 3D explorable, memorable y técnicamente impecable.
