# Informe de Colaboración Técnica y Arquitectónica — mus3o

**Autor de la contribución:** Jesús Rodolfo Gil Farías ([@jrgil20](https://github.com/jrgil20) / `jrgil.20@est.ucab.edu.ve`)  
**Proyecto:** [mus3o](../../README.md) (Platanus Hack 26 — Track Three-Dimensional)  
**Rol:** Arquitecto de Software & Core Full-Stack / 3D Graphics Engineer  

---

## 1. Resumen Ejecutivo

Durante el desarrollo de **mus3o**, Jesús Rodolfo Gil Farías actuó como uno de los dos pilares técnicos principales del proyecto, liderando el diseño y la implementación de los subsistemas más críticos del producto: el asistente autónomo **Aris** con síntesis y reconocimiento de voz en tiempo real, el motor de activos procedurales en 3D, el pipeline de optimización de costos y compresión DSL (*Low-Token Architecture*), la infraestructura de resiliencia y seguridad contra inyección de prompts, y la puesta en producción en Render.

### Métricas Clave de Colaboración

| Métrica | Valor | Impacto en el Proyecto |
|---|:---:|---|
| **Commits Realizados** | **198** | ~38.4% del total histórico del repositorio (128 como Jesús Rodolfo Gil Farías + 70 como Jrgil20). |
| **Líneas Modificadas** | **+42.497 / -23.163** | Volumen principal de código en frontend 3D, backend Express, shared contracts y tests. |
| **Archivos de Test Tocados/Creados** | **> 50 suites** | Cobertura integral TDD en parsers, audio, navegación, navegación A*, seguridad y cachés. |
| **Ahorro Económico en Tokens** | **~84% por museo (~$246 USD en 7 días)** | Diseño de micro-DSL e integración de Prompt Caching efímero en Claude Sonnet 5.5. |
| **Subsistemas Fundacionales** | **5 áreas clave** | Voz/STT/TTS, Procedural 3D, Pipeline DSL, Seguridad/Sanitización, Infraestructura Deploy. |

---

## 2. Pilares de Contribución Técnica

### 2.1. Aris: Agente Cognitivo Autónomo y Motor de Voz Multimodal

Jesús concibió e implementó integralmente al compañero de estudio **Aris**, transformándolo de un concepto estático en un agente interactivo con presencia espacial y voz continua.

- **Pipeline de Voz con Doble Respaldo:**
  - Implementación en cliente y servidor de síntesis ([`apps/server/src/tts.ts`](../../apps/server/src/tts.ts)) y transcripción en tiempo real ([`apps/server/src/stt.ts`](../../apps/server/src/stt.ts)) con la API de ElevenLabs vía proxy seguro en Express ([`apps/server/src/elevenlabs.ts`](../../apps/server/src/elevenlabs.ts)).
  - Fallback automático y transparente a la Web Speech API nativa del navegador con timeout estricto de 2.5 segundos ([`apps/web/src/lib/voice.ts`](../../apps/web/src/lib/voice.ts)), garantizando funcionamiento aún sin conexión o sin API keys.
  - Scribe y normalización determinista de transcripción por voz ([`apps/web/src/lib/scribe.ts`](../../apps/web/src/lib/scribe.ts)).
- **Inteligencia y Conversación Continua:**
  - Máquina de estados conversacional y memoria de contexto de estudio en [`apps/web/src/palace/arisConversation.ts`](../../apps/web/src/palace/arisConversation.ts) y [`apps/web/src/palace/arisBrain.ts`](../../apps/web/src/palace/arisBrain.ts).
  - Tolerancia a errores léxicos y enrutamiento inteligente: resolución local determinista por reglas y fallback acotado a Claude Haiku cuando el usuario hace preguntas fuera de libreto.
- **Cinemática, Presencia Espacial y Evasión:**
  - Algoritmo de seguimiento elástico con resorte amortiguado del jugador en 3D ([`apps/web/src/scene/ArisCompanion.tsx`](../../apps/web/src/scene/ArisCompanion.tsx)).
  - Sistema de evasión de colisiones y detección de obstáculos en salas ([`apps/web/src/scene/arisAvoidance.ts`](../../apps/web/src/scene/arisAvoidance.ts)) e integración con navegación A* para guiado inter-salas ([`packages/dungeon-core/src/astar.ts`](../../packages/dungeon-core/src/astar.ts)).
  - Posturas y estados animados procedurales ([`apps/web/src/scene/arisPose.ts`](../../apps/web/src/scene/arisPose.ts)).

---

### 2.2. Gráficos 3D, Escenas Espaciales y Experiencia de Usuario

Jesús lideró el desarrollo de múltiples experiencias visuales e interactivas usando Three.js y React Three Fiber:

- **Diorama Interactivo del Loro en la Portada (Lobby Vitrine):**
  - Creación de [`apps/web/src/scene/ParrotDiorama.tsx`](../../apps/web/src/scene/ParrotDiorama.tsx) y aislamiento de iluminación y shaders en [`apps/web/src/scene/LobbyPoster.tsx`](../../apps/web/src/scene/LobbyPoster.tsx).
  - Simulación de vitrina de museo con efecto paralaje reactivo al puntero del mouse y optimización de materiales translúcidos.
- **Generación Procedural de Modelos 3D:**
  - Sistema generativo de geometrías modulares para conceptos sin modelo GLB externo:
    - Activos de hardware y computación: [`apps/web/src/palace/assets/pcAssets.ts`](../../apps/web/src/palace/assets/pcAssets.ts) (tarjetas madre, CPUs, GPUs, RAM, gabinetes).
    - Activos de biología y anatomía: [`apps/web/src/palace/assets/bioAssets.ts`](../../apps/web/src/palace/assets/bioAssets.ts) (células, hélices de ADN, órganos).
    - Activos históricos y clásicos: [`apps/web/src/palace/assets/romanAssets.ts`](../../apps/web/src/palace/assets/romanAssets.ts).
    - Centrado automático y cálculo de *bounding box* para pedestales: [`apps/web/src/scene/modelBounds.ts`](../../apps/web/src/scene/modelBounds.ts) y [`apps/web/src/scene/DynamicTotem.tsx`](../../apps/web/src/scene/DynamicTotem.tsx).
- **Entorno de Mazmorras y Progresión Arquitectónica:**
  - Integración de activos modulares KayKit y pipeline Git LFS ([`apps/web/src/scene/DungeonAssets.tsx`](../../apps/web/src/scene/DungeonAssets.tsx)).
  - Mecánica física de puertas, cerraduras, llaves doradas y desbloqueo progresivo entre salas.
- **Controles Móviles Táctiles:**
  - Joystick virtual dinámico multitáctil y adaptación responsive de interfaz (HUD y minimapa) para dispositivos móviles y visores.

---

### 2.3. Arquitectura Low-Token DSL y Optimización Radical de Costos

Un diferencial clave de **mus3o** frente a otros proyectos del hackathon fue su estricta ingeniería de costos LLM (*Tokenomics*), diseñada y documentada principalmente por Jesús:

- **Pipeline Low-Token DSL:**
  - Diseño y evolución del Domain-Specific Language (DSL) en [`packages/shared/src/dsl.ts`](../../packages/shared/src/dsl.ts). En vez de pedirle a Claude 5.5 generar estructuras JSON masivas (~10.900 tokens), el modelo emite un DSL compacto (~1.800 tokens), reduciendo el consumo de tokens de salida en más de un 80%.
  - Fusión de dirección de arte de dioramas en la llamada principal mediante directivas de micro-DSL (`DIO`, `D_PROP`), eliminando llamadas LLM adicionales redundantes.
- **Prompt Caching y Eficiencia de Inferencia:**
  - Configuración y validación de bloques de caché efímera de Anthropic, logrando un 99% de aciertos de caché en prompts de sistema e instrucciones, ahorrando ~$246 USD en 7 días de desarrollo continuo.
- **Biblioteca Propia y Estrategia de Fallbacks en Cascada:**
  - Creación del sistema de biblioteca de modelos propia con cola de revisión y promoción ([`apps/server/src/assetReview.ts`](../../apps/server/src/assetReview.ts)).
  - Sembrado de 80 modelos procedurales generados y curados para garantizar respuesta inmediata a costo $0.
  - Integración con el catálogo Poly Pizza para modelos low-poly externos con caché LRU de candidatos ([`apps/server/src/polyPizza.ts`](../../apps/server/src/polyPizza.ts)), y fallback determinista local si los servicios externos se saturan o carecen de credenciales.

---

### 2.4. Resiliencia, Seguridad y Persistencia

Jesús implementó la capa de hardening y protección contra fallos del sistema:

- **Hardening Bidireccional de Prompts e I/O:**
  - Sanitización estricta de entradas de usuario (texto e imágenes) y filtrado de respuestas del modelo en [`packages/shared/src/security.ts`](../../packages/shared/src/security.ts).
  - Aislamiento de prompts de inyección (*jailbreak defense*), delimitadores seguros y normalización Unicode ante variaciones sintácticas.
- **Protección de Red y Servidor:**
  - Validación de esquemas de redirección de CDN contra ataques de SSRF, restricción de protocolos seguros en URLs dinámicas de assets, y configuración estricta de CORS y reverse-proxy headers en Express ([`apps/server/src/app.ts`](../../apps/server/src/app.ts)).
- **Gestión de Presupuesto y Persistencia Offline:**
  - Creación de [`apps/server/src/budgetStore.ts`](../../apps/server/src/budgetStore.ts) para persistir cuotas y límites diarios de consumo de API en disco.
  - Persistencia en cliente de imágenes generadas/subidas mediante IndexedDB para prevenir pérdida de datos al presionar F5 ([`apps/web/src/lib/imageStorage.ts`](../../apps/web/src/lib/imageStorage.ts)).
  - Caché de museos en disco con escrituras asíncronas atómicas y validación estricta Zod.

---

### 2.5. DevOps, Infraestructura y Documentación

- **Despliegue Continuo en Producción:**
  - Especificación del blueprint de Render ([`render.yaml`](../../render.yaml)), endpoints de *healthcheck* dedicados y configuración para servir la SPA de React compilada junto con la API en un único runtime unificado.
  - Gestión de dependencias y migración del monorepo (`pnpm` / workspaces de npm) eliminando bloqueos de lockfile.
- **Suite Documental de Alto Nivel:**
  - Redacción y mantenimiento de guías clave:
    - [Reporte de Costos y Ahorro](../reporte-costos-y-ahorros.md)
    - [Catálogo Exhaustivo de Optimizaciones](../catalogo-optimizaciones.md)
    - [Manual de Configuración y Arquitectura de Voz](../voz.md)
    - [Auditoría de Seguridad y Resiliencia](../auditoria-seguridad-y-fallbacks.md)
    - [Arquitectura de Servidor](../servidor.md) y [Frontend](../frontend.md)

---

## 3. Inventario de Módulos y Archivos de Mayor Relevancia

| Módulo / Archivo | Responsabilidad Principal Implementada por Jesús |
|---|---|
| [`apps/web/src/palace/arisConversation.ts`](../../apps/web/src/palace/arisConversation.ts) | Máquina de diálogo continuo, memoria contextual y disparadores de audio de Aris. |
| [`apps/web/src/lib/voice.ts`](../../apps/web/src/lib/voice.ts) | Orquestador de síntesis de voz con timeout de 2.5s y conmutación entre ElevenLabs y Web Speech. |
| [`apps/server/src/stt.ts`](../../apps/server/src/stt.ts) & [`tts.ts`](../../apps/server/src/tts.ts) | Servicios de audio ElevenLabs en backend para síntesis y reconocimiento. |
| [`packages/shared/src/dsl.ts`](../../packages/shared/src/dsl.ts) | Parser y normalizador del lenguaje DSL para generación espacial compacta. |
| [`apps/web/src/scene/ParrotDiorama.tsx`](../../apps/web/src/scene/ParrotDiorama.tsx) | Diorama 3D interactivo con vitrina física, paralaje de cursor y gestión de luces en el lobby. |
| [`apps/web/src/palace/assets/pcAssets.ts`](../../apps/web/src/palace/assets/pcAssets.ts) | Modelador procedural 3D de piezas informáticas con Three.js CSG/geometrías compuestas. |
| [`apps/web/src/scene/arisAvoidance.ts`](../../apps/web/src/scene/arisAvoidance.ts) | Algoritmo de detección de colisiones y evasión de obstáculos para el compañero 3D. |
| [`apps/server/src/budgetStore.ts`](../../apps/server/src/budgetStore.ts) | Almacenamiento transaccional de cuotas y presupuestos en disco para control de consumo. |
| [`packages/shared/src/security.ts`](../../packages/shared/src/security.ts) | Filtros de desinfección de texto/imágenes, saneamiento de prompts y mitigación de inyecciones. |
| [`apps/web/src/lib/imageStorage.ts`](../../apps/web/src/lib/imageStorage.ts) | Capa de persistencia local en IndexedDB para retención de imágenes post-recarga. |

---

## 4. Conclusión

El trabajo de Jesús Rodolfo Gil Farías abarcó tanto la profundidad algorítmica y matemática (geometría 3D, física de movimiento, navegación A*, compresión de DSL) como la robustez operativa de nivel producción (control de costes de inferencia, seguridad contra inyección, suites de tests automatizados y despliegue en la nube). Su liderazgo técnico fue fundamental para que **mus3o** no solo cumpliera los objetivos del hackathon, sino que alcanzara un nivel de sofisticación arquitectónica, estética y de rendimiento excepcional.
