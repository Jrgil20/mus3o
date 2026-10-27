# Estrategia de Costos y Operación Abierta de mus3o

Este documento detalla los requerimientos financieros, arquitectónicos y de configuración para mantener **mus3o** disponible públicamente de forma 100% gratuita para los usuarios, asegurando sostenibilidad y protección contra costos imprevistos.

---

## 1. Resumen Ejecutivo de Escenarios

| Nivel Operativo | Infraestructura (Hosting) | IA (Anthropic) | Voz (Aris / TTS) | Capacidad Mensual | Costo Estimado |
|---|---|---|---|:---:|:---:|
| **Nivel 0: Zero-Cost Absoluto** | Render Free Tier ($0) | $0 (BYOK / Cuota comunitaria) | Web Speech API nativa ($0) | Ilimitado con claves propias | **$0.00 USD / mes** |
| **Nivel 1: Gratuito Comunitario (Recomendado)** | Render Starter ($7) | $15 (Tope en `budgetStore.ts`) | Fallback nativo ($0) + Free ElevenLabs | ~400 a 450 museos nuevos / mes | **~$22.00 USD / mes** |
| **Nivel 2: Tráfico Alto / Beta Pública** | Render Starter ($7) | $50 (Tope mensual) | Plan Starter ElevenLabs ($5) | ~1.400 museos nuevos + voz HD | **~$62.00 USD / mes** |
| **Nivel 3: Institucional / Universidad** | Render Standard ($25) | $150 (Tope mensual) | Plan Creator ElevenLabs ($22) | ~4.200 museos nuevos / mes | **~$197.00 USD / mes** |

---

## 2. Desglose de Rubros de Gasto

### 2.1. Inferencia de IA (Anthropic API)

Gracias a la compresión DSL implementada en el proyecto, la generación de un museo ya no consume ~10.900 tokens ($0.117 USD), sino **~3.500 tokens de salida**.

* **Costo por Museo nuevo generado (Claude Sonnet 5.5 + micro-DSL):** **~$0.036 USD**
* **Costo con caché de disco / repetición de temas:** **$0.00 USD** (se sirve directo de `.cache/museums`).
* **Consultas de Aris fuera de libreto (Claude Haiku 5.5):** **~$0.0001 USD / pregunta** (despreciable).

```
Solicitud de Usuario
       │
       ▼
¿En Caché de Disco? ──(Sí: 30-40% de casos)──► $0.00 USD (Instantáneo)
       │
      (No)
       ▼
Claude 5.5 + Prompt Caching ────────────────► DSL Compacto: ~$0.036 USD
```

### 2.2. Voz y Audio de Aris

mus3o fue diseñado con resiliencia de dos vías para la voz:
1. **ElevenLabs:**
   * Nivel Free: 10.000 caracteres/mes gratis (~20 a 30 diálogos de museos).
   * Plan Starter: $5 USD/mes (30.000 caracteres + recarga).
2. **Web Speech API nativa del navegador:**
   * **Costo: $0.00 USD.**
   * Si no hay API key o se agotan los caracteres, el cliente conmuta de inmediato a la síntesis del sistema operativo del usuario.

> **Regla de Operación:** Para mantener el museo libre con mínimo gasto, basta con configurar ElevenLabs para la demo principal y dejar que los usuarios cotidianos usen la síntesis nativa del navegador sin degradar la experiencia funcional.

### 2.3. Infraestructura y Hosting (Render)

Actualmente el proyecto está desplegado en Render (`https://mus3o.onrender.com`):

* **Opción A (Free Tier - $0.00/mes):**
  * La instancia entra en suspensión tras 15 minutos sin tráfico (*cold start* de ~50 segundos).
  * 750 horas de cómputo al mes (suficiente para 1 servicio activo continuo).
* **Opción B (Starter - $7.00/mes):**
  * **Recomendado:** Sin suspensión (*always on*), 512 MB RAM, latencia inmediata al entrar al museo.

---

## 3. Mecanismos de Protección Financiera Ya Implementados

Para garantizar que un pico de tráfico o un bot no genere cobros sorpresa en la tarjeta, mus3o cuenta con protecciones nativas en el código:

1. **`MAX_DAILY_GENERATIONS` en `apps/server/src/budgetStore.ts`:**
   * Limita mecánicamente la cantidad de museos generables por día (por defecto 200/día, configurable a 20 o 50/día).
   * Si se alcanza el límite, el servidor responde con error 429 amigable invitando a explorar los museos ya guardados en caché o usar clave propia.
2. **Caché Multi-Nivel LRU + Disco:**
   * Cada museo generado queda persistido en `.cache/museums/`. Cualquier usuario que ingrese con el mismo apunte o el mismo tema no consume ni un solo centavo de LLM.
3. **Hardening contra Inyección y Bucles:**
   * Máximos estrictos de longitud de entrada (`maxNotesChars`) y tokens de salida limitados a 4.096 para evitar que una petición drene créditos.

---

## 4. Configuración Recomendada de Variables de Entorno

Para operar el Nivel 1 (Gratuito Comunitario con tope mensual de ~$22 USD):

```bash
# apps/server/.env

# Límite de seguridad: 15 a 20 museos nuevos diarios (~$0.54 a $0.72 USD/día)
MAX_DAILY_GENERATIONS=20

# Modelo eficiente
ANTHROPIC_MODEL=claude-sonnet-5-5
HAIKU_MODEL=claude-haiku-5-5

# Formato optimizado DSL
FLOW_FORMAT=dsl

# Opcional: si se agota la cuota de ElevenLabs, se silencia en backend y el frontend usa Web Speech API
ELEVENLABS_API_KEY=tu_api_key_opcional
```

---

## 5. Estrategia BYOK (Bring Your Own Key) para Cero Costo

Cuando la cuota comunitaria diaria se agote:
1. El usuario puede seguir recorriendo todos los museos preexistentes sin límites.
2. Para generar un museo nuevo sin esperar al reseteo diario de la cuota, la interfaz permite ingresar una clave de Anthropic (`sk-ant-...`) que se usa exclusivamente en memoria durante esa sesión y no se almacena en el servidor.
