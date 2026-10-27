import type { Part } from '@mus3o/shared'
import { box, cyl, sphere, cone } from './partHelper'

/**
 * Modelos procedurales tridimensionales para la historia de la computación.
 * Diseñados para renderizarse nativamente en React Three Fiber con PartSchema.
 */

/** 1. Válvula de Vacío Termiónica (Tubo de vacío con filamento incandescente) */
export function vacuumTube(): Part[] {
  return [
    // Base de baquelita / cerámica negra
    cyl(0.55, 0.55, 0.25, [0, 0.12, 0], '#18181b'),
    // Pines de contacto de la base
    cyl(0.04, 0.04, 0.18, [-0.25, 0.02, -0.25], '#ffd700'),
    cyl(0.04, 0.04, 0.18, [0.25, 0.02, -0.25], '#ffd700'),
    cyl(0.04, 0.04, 0.18, [-0.25, 0.02, 0.25], '#ffd700'),
    cyl(0.04, 0.04, 0.18, [0.25, 0.02, 0.25], '#ffd700'),
    // Ánodo cilíndrico de chapa perforada metálica
    cyl(0.42, 0.42, 0.9, [0, 0.7, 0], '#475569'),
    // Rejilla de control de alambre espiral (representada por anillos concéntricos)
    cyl(0.3, 0.3, 0.7, [0, 0.7, 0], '#94a3b8'),
    // Filamento catódico incandescente de tungsteno (brillante cálido)
    cyl(0.06, 0.06, 0.75, [0, 0.72, 0], '#ff7700'),
    // Resplandor térmico central
    sphere(0.18, [0, 0.72, 0], '#ffaa00'),
    // Bulbo de vidrio protector exterior
    cyl(0.52, 0.52, 1.3, [0, 0.85, 0], '#67e8f9'),
    // Cúpula superior del bulbo
    sphere(0.52, [0, 1.5, 0], '#67e8f9'),
  ]
}

/** 2. Tarjeta Perforada de 80 Columnas (Hollerith / IBM) */
export function punchCard(): Part[] {
  return [
    // Sustrato de cartón manila / marfil
    box(2.2, 1.0, 0.04, [0, 0.5, 0], '#fef3c7'),
    // Franja superior de impresión de texto
    box(2.1, 0.12, 0.05, [0, 0.9, 0.01], '#78350f'),
    // Esquina recortada diagonal izquierda
    box(0.15, 0.15, 0.06, [-1.02, 0.92, 0], '#09090b'),
    // Perforaciones rectangulares en código binario (orificios oscuros)
    box(0.08, 0.05, 0.06, [-0.7, 0.65, 0.01], '#1c1917'),
    box(0.08, 0.05, 0.06, [-0.5, 0.55, 0.01], '#1c1917'),
    box(0.08, 0.05, 0.06, [-0.3, 0.75, 0.01], '#1c1917'),
    box(0.08, 0.05, 0.06, [-0.1, 0.45, 0.01], '#1c1917'),
    box(0.08, 0.05, 0.06, [0.1, 0.65, 0.01], '#1c1917'),
    box(0.08, 0.05, 0.06, [0.3, 0.35, 0.01], '#1c1917'),
    box(0.08, 0.05, 0.06, [0.5, 0.55, 0.01], '#1c1917'),
    box(0.08, 0.05, 0.06, [0.7, 0.75, 0.01], '#1c1917'),
    // Guías de columnas serigrafiadas
    box(2.0, 0.02, 0.05, [0, 0.25, 0.01], '#d97706'),
    box(2.0, 0.02, 0.05, [0, 0.15, 0.01], '#d97706'),
  ]
}

/** 3. Transistor de Silicio Planar (Encapsulado clásico TO-39 / TO-92 con disipador) */
export function planarTransistor(): Part[] {
  return [
    // Cápsula cilíndrica metálica (canister)
    cyl(0.5, 0.5, 0.45, [0, 0.6, 0], '#94a3b8'),
    // Lengüeta de orientación en el borde de la cápsula
    box(0.12, 0.08, 0.08, [0.5, 0.45, 0], '#64748b'),
    // Base aislante de vidrio sellado
    cyl(0.48, 0.48, 0.08, [0, 0.38, 0], '#1e293b'),
    // Los tres terminales dorados: Emisor, Base y Colector
    cyl(0.04, 0.04, 0.4, [-0.2, 0.2, -0.1], '#ffd700'),
    cyl(0.04, 0.04, 0.4, [0, 0.2, 0.2], '#ffd700'),
    cyl(0.04, 0.04, 0.4, [0.2, 0.2, -0.1], '#ffd700'),
    // Die interno de silicio dopado visible en corte
    box(0.25, 0.1, 0.25, [0, 0.72, 0], '#0284c7'),
    // Cablecillos microscópicos de unión (bonding wires de oro)
    cyl(0.02, 0.02, 0.2, [-0.08, 0.75, 0], '#f59e0b', [0, 0, Math.PI / 4]),
    cyl(0.02, 0.02, 0.2, [0.08, 0.75, 0], '#f59e0b', [0, 0, -Math.PI / 4]),
  ]
}

/** 4. Rotor Criptográfico Bombe (Máquina de Bletchley Park de Alan Turing) */
export function turingBombeRotor(): Part[] {
  return [
    // Tambor cilíndrico principal de bronce pulido
    cyl(0.9, 0.9, 0.3, [0, 0.6, 0], '#b45309'),
    // Disco de contactos de baquelita frontal
    cyl(0.78, 0.78, 0.08, [0, 0.6, 0.16], '#1c1917'),
    // Matriz circular de contactos eléctricos dorados (alfabeto de 26 letras)
    cyl(0.06, 0.06, 0.1, [-0.5, 0.6, 0.18], '#fbbf24'),
    cyl(0.06, 0.06, 0.1, [0.5, 0.6, 0.18], '#fbbf24'),
    cyl(0.06, 0.06, 0.1, [0, 1.1, 0.18], '#fbbf24'),
    cyl(0.06, 0.06, 0.1, [0, 0.1, 0.18], '#fbbf24'),
    cyl(0.06, 0.06, 0.1, [-0.35, 0.95, 0.18], '#fbbf24'),
    cyl(0.06, 0.06, 0.1, [0.35, 0.95, 0.18], '#fbbf24'),
    cyl(0.06, 0.06, 0.1, [-0.35, 0.25, 0.18], '#fbbf24'),
    cyl(0.06, 0.06, 0.1, [0.35, 0.25, 0.18], '#fbbf24'),
    // Engranaje central de accionamiento
    cyl(0.35, 0.35, 0.45, [0, 0.6, 0], '#78350f'),
    // Eje central de giro de acero
    cyl(0.12, 0.12, 0.65, [0, 0.6, 0], '#e2e8f0'),
  ]
}

/** 5. Relé Electromecánico Harvard Mark II con el Primer "Bug" de Grace Hopper */
export function hopperRelayBug(): Part[] {
  return [
    // Base de baquelita marrón del relé
    box(1.4, 0.15, 1.2, [0, 0.08, 0], '#451a03'),
    // Bobina de alambre de cobre esmaltado
    cyl(0.35, 0.35, 0.65, [-0.3, 0.48, 0], '#b45309', [Math.PI / 2, 0, 0]),
    // Núcleo de hierro dulce
    cyl(0.16, 0.16, 0.8, [-0.3, 0.48, 0], '#64748b', [Math.PI / 2, 0, 0]),
    // Armadura basculante móvil de acero
    box(0.12, 0.6, 0.4, [0.2, 0.5, 0], '#94a3b8'),
    // Puntos de contacto de platino
    box(0.08, 0.08, 0.12, [0.15, 0.72, 0], '#e2e8f0'),
    box(0.08, 0.08, 0.12, [0.25, 0.72, 0], '#e2e8f0'),
    // La célebre polilla (moth bug) atrapada entre los contactos
    // Cuerpo de la polilla
    cyl(0.05, 0.05, 0.14, [0.2, 0.73, 0], '#78716c', [0, 0, Math.PI / 2]),
    // Alas abiertas de la polilla
    box(0.22, 0.02, 0.18, [0.2, 0.77, 0], '#f5d0fe'),
    // Terminales de tornillo para cableado
    cyl(0.08, 0.08, 0.2, [0.55, 0.2, -0.4], '#ffd700'),
    cyl(0.08, 0.08, 0.2, [0.55, 0.2, 0.4], '#ffd700'),
  ]
}

/** 6. Circuito Integrado DIP-14 (Dual In-line Package / Intel 4004) */
export function dipMicrochip(): Part[] {
  return [
    // Cuerpo cerámico/epoxi negro rectangular
    box(1.8, 0.3, 0.75, [0, 0.4, 0], '#18181b'),
    // Muesca semicircular de orientación (pin 1)
    cyl(0.12, 0.12, 0.32, [-0.9, 0.4, 0], '#09090b'),
    // Serigrafía dorada superior
    box(1.2, 0.02, 0.4, [0, 0.56, 0], '#fbbf24'),
    // Patas de araña laterales plateadas (7 por lado = 14 pines)
    // Lado frontal (-Z)
    box(0.08, 0.35, 0.1, [-0.65, 0.2, -0.42], '#e2e8f0'),
    box(0.08, 0.35, 0.1, [-0.43, 0.2, -0.42], '#e2e8f0'),
    box(0.08, 0.35, 0.1, [-0.21, 0.2, -0.42], '#e2e8f0'),
    box(0.08, 0.35, 0.1, [0.01, 0.2, -0.42], '#e2e8f0'),
    box(0.08, 0.35, 0.1, [0.23, 0.2, -0.42], '#e2e8f0'),
    box(0.08, 0.35, 0.1, [0.45, 0.2, -0.42], '#e2e8f0'),
    box(0.08, 0.35, 0.1, [0.67, 0.2, -0.42], '#e2e8f0'),
    // Lado posterior (+Z)
    box(0.08, 0.35, 0.1, [-0.65, 0.2, 0.42], '#e2e8f0'),
    box(0.08, 0.35, 0.1, [-0.43, 0.2, 0.42], '#e2e8f0'),
    box(0.08, 0.35, 0.1, [-0.21, 0.2, 0.42], '#e2e8f0'),
    box(0.08, 0.35, 0.1, [0.01, 0.2, 0.42], '#e2e8f0'),
    box(0.08, 0.35, 0.1, [0.23, 0.2, 0.42], '#e2e8f0'),
    box(0.08, 0.35, 0.1, [0.45, 0.2, 0.42], '#e2e8f0'),
    box(0.08, 0.35, 0.1, [0.67, 0.2, 0.42], '#e2e8f0'),
  ]
}

/** 7. Memoria de Núcleos de Ferrita (Magnetic Core Memory de los años 50-60) */
export function magneticCoreMemory(): Part[] {
  return [
    // Marco exterior de baquelita / metal
    box(1.8, 0.1, 1.8, [0, 0.05, 0], '#334155'),
    // Matriz de hilos conductores de cobre tensados (rejilla en X e Y)
    box(1.6, 0.02, 0.04, [0, 0.12, -0.4], '#b45309'),
    box(1.6, 0.02, 0.04, [0, 0.12, 0], '#b45309'),
    box(1.6, 0.02, 0.04, [0, 0.12, 0.4], '#b45309'),
    box(0.04, 0.02, 1.6, [-0.4, 0.12, 0], '#b45309'),
    box(0.04, 0.02, 1.6, [0, 0.12, 0], '#b45309'),
    box(0.04, 0.02, 1.6, [0.4, 0.12, 0], '#b45309'),
    // Hilo diagonal sensor (sense wire)
    box(1.9, 0.02, 0.03, [0, 0.14, 0], '#38bdf8', [0, Math.PI / 4, 0]),
    // Toroides magnéticos de ferrita negra en las intersecciones
    cyl(0.12, 0.12, 0.06, [-0.4, 0.13, -0.4], '#0f172a'),
    cyl(0.12, 0.12, 0.06, [0, 0.13, -0.4], '#0f172a'),
    cyl(0.12, 0.12, 0.06, [0.4, 0.13, -0.4], '#0f172a'),
    cyl(0.12, 0.12, 0.06, [-0.4, 0.13, 0], '#0f172a'),
    cyl(0.12, 0.12, 0.06, [0, 0.13, 0], '#0f172a'),
    cyl(0.12, 0.12, 0.06, [0.4, 0.13, 0], '#0f172a'),
    cyl(0.12, 0.12, 0.06, [-0.4, 0.13, 0.4], '#0f172a'),
    cyl(0.12, 0.12, 0.06, [0, 0.13, 0.4], '#0f172a'),
    cyl(0.12, 0.12, 0.06, [0.4, 0.13, 0.4], '#0f172a'),
  ]
}

/** 8. Criostato Cuántico y Procesador de Qubits Superconductores */
export function quantumQubitChamber(): Part[] {
  return [
    // Placas circulares escalonadas de enfriamiento de oro (chandelier cuántico)
    cyl(1.1, 1.1, 0.06, [0, 1.5, 0], '#fbbf24'),
    cyl(0.85, 0.85, 0.06, [0, 1.1, 0], '#fbbf24'),
    cyl(0.65, 0.65, 0.06, [0, 0.7, 0], '#fbbf24'),
    cyl(0.45, 0.45, 0.08, [0, 0.3, 0], '#fbbf24'),
    // Tubos verticales de soporte criogénico de acero inoxidable
    cyl(0.04, 0.04, 1.3, [-0.3, 0.9, -0.3], '#e2e8f0'),
    cyl(0.04, 0.04, 1.3, [0.3, 0.9, -0.3], '#e2e8f0'),
    cyl(0.04, 0.04, 1.3, [0, 0.9, 0.35], '#e2e8f0'),
    // Cables coaxiales trenzados de microondas dorados
    cyl(0.02, 0.02, 0.9, [-0.15, 0.8, -0.1], '#f59e0b'),
    cyl(0.02, 0.02, 0.9, [0.15, 0.8, -0.1], '#f59e0b'),
    // Blindaje magnético de mu-metal inferior
    cyl(0.35, 0.35, 0.25, [0, 0.15, 0], '#475569'),
    // Chip cuántico de transmón / resonador superconductor (brillo cuántico cian)
    sphere(0.15, [0, 0.15, 0], '#06b6d4'),
  ]
}

/** 9. Apollo Guidance Computer (AGC DSKY - Margaret Hamilton) */
export function apolloGuidanceComputer(): Part[] {
  return [
    // Chasis metálico aeroespacial gris
    box(1.5, 1.2, 0.4, [0, 0.6, 0], '#334155'),
    // Panel de indicadores electroluminiscentes verde fósforo (alarmas 1201 y 1202)
    box(0.55, 0.35, 0.05, [-0.35, 0.85, 0.2], '#064e3b'),
    box(0.48, 0.28, 0.06, [-0.35, 0.85, 0.21], '#22c55e'),
    // Displays numéricos de 7 segmentos dorados
    box(0.55, 0.35, 0.05, [0.35, 0.85, 0.2], '#18181b'),
    box(0.48, 0.06, 0.06, [0.35, 0.94, 0.21], '#f59e0b'),
    box(0.48, 0.06, 0.06, [0.35, 0.85, 0.21], '#f59e0b'),
    box(0.48, 0.06, 0.06, [0.35, 0.76, 0.21], '#f59e0b'),
    // Teclado numérico físico (VERB / NOUN / ENTER / RESET)
    box(1.3, 0.45, 0.06, [0, 0.35, 0.2], '#1e293b'),
    box(0.16, 0.1, 0.08, [-0.45, 0.45, 0.22], '#e2e8f0'),
    box(0.16, 0.1, 0.08, [-0.22, 0.45, 0.22], '#e2e8f0'),
    box(0.16, 0.1, 0.08, [0.01, 0.45, 0.22], '#e2e8f0'),
    box(0.16, 0.1, 0.08, [0.24, 0.45, 0.22], '#e2e8f0'),
    box(0.16, 0.1, 0.08, [0.47, 0.45, 0.22], '#e2e8f0'),
    // Botón de emergencia Key Release
    box(0.16, 0.1, 0.08, [-0.45, 0.28, 0.22], '#ef4444'),
  ]
}

/** 10. Paisaje Arquitectónico de un Die de CPU (Inside a CPU) */
export function cpuDieLandscape(): Part[] {
  return [
    // Sustrato de silicio base reflectante
    box(2.2, 0.08, 2.2, [0, 0.04, 0], '#09090b'),
    // Núcleos de procesamiento (Core Complex)
    box(0.7, 0.18, 0.7, [-0.5, 0.12, -0.5], '#0284c7'),
    box(0.7, 0.18, 0.7, [0.5, 0.12, -0.5], '#0284c7'),
    box(0.7, 0.18, 0.7, [-0.5, 0.12, 0.5], '#0284c7'),
    box(0.7, 0.18, 0.7, [0.5, 0.12, 0.5], '#0284c7'),
    // Bloque central de Caché L3 compartida
    box(0.25, 0.22, 1.8, [0, 0.14, 0], '#00ffcc'),
    // Pistas de interconexión Infinity Fabric doradas
    box(1.8, 0.04, 0.08, [0, 0.09, 0], '#ffd700'),
    box(0.08, 0.04, 1.8, [0, 0.09, 0], '#ffd700'),
    // Controladores de memoria perimetrales (I/O Die)
    box(2.0, 0.12, 0.15, [0, 0.1, -0.95], '#f59e0b'),
    box(2.0, 0.12, 0.15, [0, 0.1, 0.95], '#f59e0b'),
  ]
}

/** 11. Monolito del Ciberespacio y Código de Programación */
export function codeMonolith(): Part[] {
  return [
    // Monolito negro azabache vertical
    box(0.8, 2.2, 0.2, [0, 1.1, 0], '#09090b'),
    // Líneas de código resplandecientes en sintaxis coloreada
    box(0.55, 0.04, 0.22, [-0.05, 1.9, 0], '#38bdf8'),
    box(0.4, 0.04, 0.22, [-0.12, 1.75, 0], '#f43f5e'),
    box(0.65, 0.04, 0.22, [0, 1.6, 0], '#10b981'),
    box(0.35, 0.04, 0.22, [-0.15, 1.45, 0], '#f59e0b'),
    box(0.58, 0.04, 0.22, [-0.03, 1.3, 0], '#a855f7'),
    box(0.45, 0.04, 0.22, [-0.1, 1.15, 0], '#00ffcc'),
    box(0.62, 0.04, 0.22, [0.01, 1.0, 0], '#38bdf8'),
    box(0.38, 0.04, 0.22, [-0.13, 0.85, 0], '#e2e8f0'),
    box(0.52, 0.04, 0.22, [-0.06, 0.7, 0], '#10b981'),
    // Base de pedestal de obsidiana
    box(1.1, 0.12, 0.5, [0, 0.06, 0], '#18181b'),
  ]
}
