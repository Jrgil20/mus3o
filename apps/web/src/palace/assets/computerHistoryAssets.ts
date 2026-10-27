import type { Part } from '@mus3o/shared'
import { box, cyl, sphere, cone } from './partHelper'

/**
 * Modelos procedurales tridimensionales para la historia de la computación.
 * Diseñados para renderizarse nativamente en React Three Fiber con PartSchema (máx 10 partes).
 */

/** 1. Válvula de Vacío Termiónica (Tubo de vacío con filamento incandescente) - 9 partes */
export function vacuumTube(): Part[] {
  return [
    // Base de baquelita negra
    cyl(0.55, 0.55, 0.25, [0, 0.12, 0], '#18181b'),
    // Pines de contacto dorados
    cyl(0.04, 0.04, 0.18, [-0.25, 0.02, -0.25], '#ffd700'),
    cyl(0.04, 0.04, 0.18, [0.25, 0.02, -0.25], '#ffd700'),
    cyl(0.04, 0.04, 0.18, [-0.25, 0.02, 0.25], '#ffd700'),
    cyl(0.04, 0.04, 0.18, [0.25, 0.02, 0.25], '#ffd700'),
    // Ánodo cilíndrico metálico
    cyl(0.42, 0.42, 0.9, [0, 0.7, 0], '#475569'),
    // Filamento catódico de tungsteno
    cyl(0.06, 0.06, 0.75, [0, 0.72, 0], '#ff7700'),
    // Bulbo de vidrio protector exterior
    cyl(0.52, 0.52, 1.3, [0, 0.85, 0], '#67e8f9'),
    // Cúpula superior del bulbo
    sphere(0.52, [0, 1.5, 0], '#67e8f9'),
  ]
}

/** 2. Tarjeta Perforada de 80 Columnas (Hollerith / Jacquard) - 10 partes */
export function punchCard(): Part[] {
  return [
    // Sustrato de cartón manila
    box(2.2, 1.0, 0.04, [0, 0.5, 0], '#fef3c7'),
    // Franja superior de impresión de texto
    box(2.1, 0.12, 0.05, [0, 0.9, 0.01], '#78350f'),
    // Esquina recortada diagonal izquierda
    box(0.15, 0.15, 0.06, [-1.02, 0.92, 0], '#09090b'),
    // Perforaciones rectangulares en código binario
    box(0.08, 0.05, 0.06, [-0.7, 0.65, 0.01], '#1c1917'),
    box(0.08, 0.05, 0.06, [-0.4, 0.55, 0.01], '#1c1917'),
    box(0.08, 0.05, 0.06, [-0.1, 0.75, 0.01], '#1c1917'),
    box(0.08, 0.05, 0.06, [0.2, 0.45, 0.01], '#1c1917'),
    box(0.08, 0.05, 0.06, [0.5, 0.65, 0.01], '#1c1917'),
    box(0.08, 0.05, 0.06, [0.8, 0.35, 0.01], '#1c1917'),
    // Guías de columnas
    box(2.0, 0.02, 0.05, [0, 0.2, 0.01], '#d97706'),
  ]
}

/** 3. Transistor de Silicio Planar (TO-39 / TO-92) - 9 partes */
export function planarTransistor(): Part[] {
  return [
    cyl(0.5, 0.5, 0.45, [0, 0.6, 0], '#94a3b8'),
    box(0.12, 0.08, 0.08, [0.5, 0.45, 0], '#64748b'),
    cyl(0.48, 0.48, 0.08, [0, 0.38, 0], '#1e293b'),
    cyl(0.04, 0.04, 0.4, [-0.2, 0.2, -0.1], '#ffd700'),
    cyl(0.04, 0.04, 0.4, [0, 0.2, 0.2], '#ffd700'),
    cyl(0.04, 0.04, 0.4, [0.2, 0.2, -0.1], '#ffd700'),
    box(0.25, 0.1, 0.25, [0, 0.72, 0], '#0284c7'),
    cyl(0.02, 0.02, 0.2, [-0.08, 0.75, 0], '#f59e0b', [0, 0, Math.PI / 4]),
    cyl(0.02, 0.02, 0.2, [0.08, 0.75, 0], '#f59e0b', [0, 0, -Math.PI / 4]),
  ]
}

/** 4. Rotor Criptográfico Bombe (Bletchley Park) - 9 partes */
export function turingBombeRotor(): Part[] {
  return [
    cyl(0.9, 0.9, 0.3, [0, 0.6, 0], '#b45309'),
    cyl(0.78, 0.78, 0.08, [0, 0.6, 0.16], '#1c1917'),
    cyl(0.06, 0.06, 0.1, [-0.4, 0.6, 0.18], '#fbbf24'),
    cyl(0.06, 0.06, 0.1, [0.4, 0.6, 0.18], '#fbbf24'),
    cyl(0.06, 0.06, 0.1, [0, 1.0, 0.18], '#fbbf24'),
    cyl(0.06, 0.06, 0.1, [0, 0.2, 0.18], '#fbbf24'),
    cyl(0.06, 0.06, 0.1, [-0.3, 0.9, 0.18], '#fbbf24'),
    cyl(0.35, 0.35, 0.45, [0, 0.6, 0], '#78350f'),
    cyl(0.12, 0.12, 0.65, [0, 0.6, 0], '#e2e8f0'),
  ]
}

/** 5. Relé Electromecánico Harvard Mark II con el Primer Bug - 10 partes */
export function hopperRelayBug(): Part[] {
  return [
    box(1.4, 0.15, 1.2, [0, 0.08, 0], '#451a03'),
    cyl(0.35, 0.35, 0.65, [-0.3, 0.48, 0], '#b45309', [Math.PI / 2, 0, 0]),
    cyl(0.16, 0.16, 0.8, [-0.3, 0.48, 0], '#64748b', [Math.PI / 2, 0, 0]),
    box(0.12, 0.6, 0.4, [0.2, 0.5, 0], '#94a3b8'),
    box(0.08, 0.08, 0.12, [0.15, 0.72, 0], '#e2e8f0'),
    box(0.08, 0.08, 0.12, [0.25, 0.72, 0], '#e2e8f0'),
    cyl(0.05, 0.05, 0.14, [0.2, 0.73, 0], '#78716c', [0, 0, Math.PI / 2]),
    box(0.22, 0.02, 0.18, [0.2, 0.77, 0], '#f5d0fe'),
    cyl(0.08, 0.08, 0.2, [0.55, 0.2, -0.4], '#ffd700'),
    cyl(0.08, 0.08, 0.2, [0.55, 0.2, 0.4], '#ffd700'),
  ]
}

/** 6. Circuito Integrado DIP (Intel 4004 / 8086) - 9 partes */
export function dipMicrochip(): Part[] {
  return [
    box(1.8, 0.3, 0.75, [0, 0.4, 0], '#18181b'),
    cyl(0.12, 0.12, 0.32, [-0.9, 0.4, 0], '#09090b'),
    box(1.2, 0.02, 0.4, [0, 0.56, 0], '#fbbf24'),
    box(0.08, 0.35, 0.1, [-0.6, 0.2, -0.42], '#e2e8f0'),
    box(0.08, 0.35, 0.1, [0.0, 0.2, -0.42], '#e2e8f0'),
    box(0.08, 0.35, 0.1, [0.6, 0.2, -0.42], '#e2e8f0'),
    box(0.08, 0.35, 0.1, [-0.6, 0.2, 0.42], '#e2e8f0'),
    box(0.08, 0.35, 0.1, [0.0, 0.2, 0.42], '#e2e8f0'),
    box(0.08, 0.35, 0.1, [0.6, 0.2, 0.42], '#e2e8f0'),
  ]
}

/** 7. Memoria de Núcleos de Ferrita - 10 partes */
export function magneticCoreMemory(): Part[] {
  return [
    box(1.8, 0.1, 1.8, [0, 0.05, 0], '#334155'),
    box(1.6, 0.02, 0.04, [0, 0.12, -0.4], '#b45309'),
    box(1.6, 0.02, 0.04, [0, 0.12, 0.4], '#b45309'),
    box(0.04, 0.02, 1.6, [-0.4, 0.12, 0], '#b45309'),
    box(0.04, 0.02, 1.6, [0.4, 0.12, 0], '#b45309'),
    box(1.9, 0.02, 0.03, [0, 0.14, 0], '#38bdf8', [0, Math.PI / 4, 0]),
    cyl(0.14, 0.14, 0.08, [-0.4, 0.13, -0.4], '#0f172a'),
    cyl(0.14, 0.14, 0.08, [0.4, 0.13, -0.4], '#0f172a'),
    cyl(0.14, 0.14, 0.08, [-0.4, 0.13, 0.4], '#0f172a'),
    cyl(0.14, 0.14, 0.08, [0.4, 0.13, 0.4], '#0f172a'),
  ]
}

/** 8. Criostato Cuántico y Procesador de Qubits - 10 partes */
export function quantumQubitChamber(): Part[] {
  return [
    cyl(1.1, 1.1, 0.06, [0, 1.5, 0], '#fbbf24'),
    cyl(0.85, 0.85, 0.06, [0, 1.1, 0], '#fbbf24'),
    cyl(0.65, 0.65, 0.06, [0, 0.7, 0], '#fbbf24'),
    cyl(0.45, 0.45, 0.08, [0, 0.3, 0], '#fbbf24'),
    cyl(0.04, 0.04, 1.3, [-0.3, 0.9, -0.3], '#e2e8f0'),
    cyl(0.04, 0.04, 1.3, [0.3, 0.9, -0.3], '#e2e8f0'),
    cyl(0.04, 0.04, 1.3, [0, 0.9, 0.35], '#e2e8f0'),
    cyl(0.02, 0.02, 0.9, [-0.15, 0.8, -0.1], '#f59e0b'),
    cyl(0.35, 0.35, 0.25, [0, 0.15, 0], '#475569'),
    sphere(0.16, [0, 0.15, 0], '#06b6d4'),
  ]
}

/** 9. Apollo Guidance Computer (DSKY) - 10 partes */
export function apolloGuidanceComputer(): Part[] {
  return [
    box(1.5, 1.2, 0.4, [0, 0.6, 0], '#334155'),
    box(0.55, 0.35, 0.05, [-0.35, 0.85, 0.2], '#064e3b'),
    box(0.48, 0.28, 0.06, [-0.35, 0.85, 0.21], '#22c55e'),
    box(0.55, 0.35, 0.05, [0.35, 0.85, 0.2], '#18181b'),
    box(0.48, 0.06, 0.06, [0.35, 0.94, 0.21], '#f59e0b'),
    box(0.48, 0.06, 0.06, [0.35, 0.85, 0.21], '#f59e0b'),
    box(0.48, 0.06, 0.06, [0.35, 0.76, 0.21], '#f59e0b'),
    box(1.3, 0.45, 0.06, [0, 0.35, 0.2], '#1e293b'),
    box(0.8, 0.3, 0.08, [0.1, 0.35, 0.22], '#e2e8f0'),
    box(0.2, 0.2, 0.08, [-0.45, 0.35, 0.22], '#ef4444'),
  ]
}

/** 10. Paisaje Arquitectónico de un Die de CPU - 10 partes */
export function cpuDieLandscape(): Part[] {
  return [
    box(2.2, 0.08, 2.2, [0, 0.04, 0], '#09090b'),
    box(0.7, 0.18, 0.7, [-0.5, 0.12, -0.5], '#0284c7'),
    box(0.7, 0.18, 0.7, [0.5, 0.12, -0.5], '#0284c7'),
    box(0.7, 0.18, 0.7, [-0.5, 0.12, 0.5], '#0284c7'),
    box(0.7, 0.18, 0.7, [0.5, 0.12, 0.5], '#0284c7'),
    box(0.25, 0.22, 1.8, [0, 0.14, 0], '#00ffcc'),
    box(1.8, 0.04, 0.08, [0, 0.09, 0], '#ffd700'),
    box(0.08, 0.04, 1.8, [0, 0.09, 0], '#ffd700'),
    box(2.0, 0.12, 0.15, [0, 0.1, -0.95], '#f59e0b'),
    box(2.0, 0.12, 0.15, [0, 0.1, 0.95], '#f59e0b'),
  ]
}

/** 11. Monolito del Ciberespacio y Código de Programación - 10 partes */
export function codeMonolith(): Part[] {
  return [
    box(0.8, 2.2, 0.2, [0, 1.1, 0], '#09090b'),
    box(0.55, 0.04, 0.22, [-0.05, 1.9, 0], '#38bdf8'),
    box(0.4, 0.04, 0.22, [-0.12, 1.75, 0], '#f43f5e'),
    box(0.65, 0.04, 0.22, [0, 1.6, 0], '#10b981'),
    box(0.35, 0.04, 0.22, [-0.15, 1.45, 0], '#f59e0b'),
    box(0.58, 0.04, 0.22, [-0.03, 1.3, 0], '#a855f7'),
    box(0.45, 0.04, 0.22, [-0.1, 1.15, 0], '#00ffcc'),
    box(0.62, 0.04, 0.22, [0.01, 1.0, 0], '#38bdf8'),
    box(0.52, 0.04, 0.22, [-0.06, 0.7, 0], '#10b981'),
    box(1.1, 0.12, 0.5, [0, 0.06, 0], '#18181b'),
  ]
}

// =========================================================================================
// NUEVOS MODELOS ESPECIALIZADOS PARA DIORAMAS HISTÓRICOS (TODOS <= 10 PARTES)
// =========================================================================================

/** 12. Escritorio Victoriano con Manuscritos y Tintero (Ada Lovelace) - 10 partes */
export function victorianDesk(): Part[] {
  return [
    // Tablero de madera de caoba
    box(1.8, 0.1, 1.0, [0, 0.75, 0], '#451a03'),
    // 4 patas torneadas
    cyl(0.06, 0.06, 0.75, [-0.75, 0.37, -0.4], '#2e1065'),
    cyl(0.06, 0.06, 0.75, [0.75, 0.37, -0.4], '#2e1065'),
    cyl(0.06, 0.06, 0.75, [-0.75, 0.37, 0.4], '#2e1065'),
    cyl(0.06, 0.06, 0.75, [0.75, 0.37, 0.4], '#2e1065'),
    // Manuscrito de pergamino de la Nota G
    box(0.5, 0.02, 0.4, [-0.2, 0.81, 0], '#fef3c7'),
    // Tintero de cristal victoriano
    cyl(0.06, 0.06, 0.08, [0.4, 0.84, -0.2], '#1e1b4b'),
    // Pluma de ave plateada inclinada
    cone(0.03, 0.25, [0.4, 0.95, -0.2], '#e2e8f0', [0, 0, Math.PI / 6]),
    // Cajón de archivo inferior
    box(0.5, 0.2, 0.6, [0.45, 0.6, 0], '#3b0764'),
    // Pomo de bronce del cajón
    sphere(0.03, [0.45, 0.6, 0.32], '#fbbf24'),
  ]
}

/** 13. Molino Analítico de Engranajes de Latón (Charles Babbage) - 9 partes */
export function babbageAnalyticalMill(): Part[] {
  return [
    // Bancada de fundición de hierro
    box(1.2, 0.2, 1.2, [0, 0.1, 0], '#1f2937'),
    // Columna central de transmisión
    cyl(0.12, 0.12, 1.8, [0, 1.0, 0], '#94a3b8'),
    // Discos dentados de bronce escalonados (acumulador de dígitos)
    cyl(0.7, 0.7, 0.12, [0, 0.5, 0], '#d97706'),
    cyl(0.65, 0.65, 0.12, [0, 0.8, 0], '#f59e0b'),
    cyl(0.6, 0.6, 0.12, [0, 1.1, 0], '#fbbf24'),
    cyl(0.55, 0.55, 0.12, [0, 1.4, 0], '#d97706'),
    // Manivela / biela de accionamiento
    box(0.06, 0.06, 0.5, [0, 1.7, 0.25], '#6b7280'),
    cyl(0.04, 0.04, 0.25, [0, 1.8, 0.5], '#b45309'),
    // Soporte de bastidor vertical
    cyl(0.08, 0.08, 1.8, [-0.4, 1.0, -0.4], '#374151'),
  ]
}

/** 14. Máquina Cifradora Enigma M4 Naval con Steckerbrett (Alan Turing) - 10 partes */
export function enigmaMachine(): Part[] {
  return [
    // Caja de madera de roble barnizada
    box(1.1, 0.4, 0.9, [0, 0.2, 0], '#78350f'),
    // Tapa de madera abierta hacia atrás en ángulo
    box(1.08, 0.08, 0.88, [0, 0.7, -0.35], '#451a03', [-Math.PI / 3, 0, 0]),
    // Panel frontal metálico negro
    box(0.95, 0.05, 0.8, [0, 0.42, 0], '#18181b'),
    // Campo de los 4 rotores mecánicos de latón
    cyl(0.12, 0.12, 0.18, [-0.25, 0.5, -0.15], '#fbbf24', [0, 0, Math.PI / 2]),
    cyl(0.12, 0.12, 0.18, [-0.08, 0.5, -0.15], '#fbbf24', [0, 0, Math.PI / 2]),
    cyl(0.12, 0.12, 0.18, [0.08, 0.5, -0.15], '#fbbf24', [0, 0, Math.PI / 2]),
    cyl(0.12, 0.12, 0.18, [0.25, 0.5, -0.15], '#fbbf24', [0, 0, Math.PI / 2]),
    // Panel de lámparas de visualización de letras
    box(0.8, 0.02, 0.25, [0, 0.46, 0.05], '#0284c7'),
    // Teclado QWERTZ
    box(0.8, 0.03, 0.25, [0, 0.44, 0.25], '#334155'),
    // Clavijero Steckerbrett con cables cruzados en el frente
    box(0.85, 0.15, 0.04, [0, 0.22, 0.46], '#09090b'),
  ]
}

/** 15. Estufa de Carbón y Radiador con la Taza Encadenada de Turing - 9 partes */
export function hutStoveAndRadiator(): Part[] {
  return [
    // Estufa cilíndrica de hierro fundido (potbelly stove)
    cyl(0.4, 0.4, 0.9, [-0.5, 0.45, 0], '#1f2937'),
    // Chimenea de chapa negra hacia el techo
    cyl(0.12, 0.12, 1.4, [-0.5, 1.6, 0], '#111827'),
    // Resplandor cálido en la rendija de la puerta
    box(0.2, 0.1, 0.05, [-0.5, 0.35, 0.4], '#f97316'),
    // Radiador de calefacción de hierro con aletas verticales
    box(0.8, 0.7, 0.2, [0.6, 0.45, 0], '#64748b'),
    box(0.04, 0.6, 0.18, [0.4, 0.45, 0], '#475569'),
    box(0.04, 0.6, 0.18, [0.6, 0.45, 0], '#475569'),
    box(0.04, 0.6, 0.18, [0.8, 0.45, 0], '#475569'),
    // Taza de té de cerámica blanca
    cyl(0.08, 0.08, 0.12, [0.6, 0.86, 0], '#f8fafc'),
    // Cadena con candado atada a las aletas del radiador
    cyl(0.02, 0.02, 0.25, [0.6, 0.82, 0.08], '#ffd700'),
  ]
}

/** 16. Pila Gigante de Listados de Código Impreso del Apolo 11 (Margaret Hamilton) - 8 partes */
export function apolloSoftwareCodeStack(): Part[] {
  return [
    // Bloques de listados de papel plegado en acordeón apilados hasta 2 metros de altura
    box(0.8, 0.38, 0.5, [0, 0.19, 0], '#f8fafc'),
    box(0.8, 0.38, 0.5, [0.02, 0.57, -0.01], '#f1f5f9'),
    box(0.8, 0.38, 0.5, [-0.01, 0.95, 0.02], '#e2e8f0'),
    box(0.8, 0.38, 0.5, [0.01, 1.33, -0.02], '#f8fafc'),
    box(0.8, 0.38, 0.5, [0, 1.71, 0], '#f1f5f9'),
    // Encuadernaciones de anillas y etiquetas de código NASA AGC
    box(0.06, 1.9, 0.48, [-0.41, 0.95, 0], '#0284c7'),
    box(0.12, 0.25, 0.02, [-0.42, 1.6, 0], '#eab308'),
    // Tapa superior del listado abierto
    box(0.78, 0.02, 0.48, [0, 1.91, 0], '#ffffff'),
  ]
}

/** 17. Telar de Memoria de Núcleos Trenzada Core Rope / LOL (Apolo 11) - 9 partes */
export function coreRopeLoom(): Part[] {
  return [
    // Marco vertical de madera y aluminio del telar
    box(1.4, 1.6, 0.1, [0, 0.9, 0], '#334155'),
    box(1.2, 1.4, 0.08, [0, 0.9, 0], '#0f172a'),
    // Matriz de toroides de ferrita dispuestos verticalmente
    cyl(0.08, 0.08, 0.06, [-0.35, 1.2, 0.05], '#0284c7'),
    cyl(0.08, 0.08, 0.06, [0, 1.2, 0.05], '#0284c7'),
    cyl(0.08, 0.08, 0.06, [0.35, 1.2, 0.05], '#0284c7'),
    cyl(0.08, 0.08, 0.06, [-0.35, 0.7, 0.05], '#0284c7'),
    cyl(0.08, 0.08, 0.06, [0, 0.7, 0.05], '#0284c7'),
    cyl(0.08, 0.08, 0.06, [0.35, 0.7, 0.05], '#0284c7'),
    // Aguja con hilo conductor de cobre atravesando núcleos (1 = dentro, 0 = fuera)
    cyl(0.015, 0.015, 1.1, [0.1, 0.95, 0.08], '#fbbf24', [0, 0, Math.PI / 4]),
  ]
}

/** 18. Bastidor Minicomputador DEC PDP-11/20 (Bell Labs - Unix & C) - 9 partes */
export function pdp11Minicomputer(): Part[] {
  return [
    // Gabinete metálico de 19 pulgadas azul y magenta DEC
    box(1.1, 1.9, 0.9, [0, 0.95, 0], '#1e293b'),
    // Panel frontal biselado de la CPU
    box(1.0, 0.45, 0.08, [0, 1.35, 0.46], '#475569'),
    // Fila de llaves selectoras basculantes (rojas y blancas)
    box(0.9, 0.08, 0.04, [0, 1.3, 0.51], '#dc2626'),
    box(0.9, 0.08, 0.04, [0, 1.2, 0.51], '#f8fafc'),
    // Banco de luces indicadoras de dirección y datos UNIBUS
    box(0.85, 0.06, 0.03, [0, 1.45, 0.51], '#fbbf24'),
    // Lector de cinta de papel frontal
    box(0.4, 0.25, 0.1, [-0.25, 0.85, 0.48], '#0f172a'),
    // Ranuras de ventilación inferiores
    box(0.9, 0.35, 0.04, [0, 0.35, 0.46], '#09090b'),
    // Unidad de disco de cartucho extraíble RK05
    box(0.95, 0.28, 0.1, [0, 0.85, 0.47], '#334155'),
    // Logotipo digital PDP-11
    box(0.2, 0.06, 0.02, [0.35, 1.52, 0.51], '#38bdf8'),
  ]
}

/** 19. Terminal de Teletipo Teletype ASR-33 (UNIX v1 Console) - 10 partes */
export function teletypeASR33(): Part[] {
  return [
    // Pedestal cilíndrico metálico verde oliva
    cyl(0.08, 0.08, 0.65, [0, 0.32, 0], '#334155'),
    // Base trípode inferior
    box(0.7, 0.06, 0.7, [0, 0.03, 0], '#1e293b'),
    // Carcasa principal del teletipo
    box(0.8, 0.35, 0.7, [0, 0.8, 0], '#e2e8f0'),
    // Teclado mecánico negro con teclas grises
    box(0.65, 0.08, 0.25, [0, 0.72, 0.28], '#0f172a'),
    box(0.6, 0.04, 0.2, [0, 0.76, 0.28], '#94a3b8'),
    // Cilindro del rollo de papel continuo
    cyl(0.12, 0.12, 0.6, [0, 0.95, -0.15], '#ffffff', [0, 0, Math.PI / 2]),
    // Hoja de salida de papel con texto impreso
    box(0.55, 0.2, 0.02, [0, 1.05, -0.05], '#f8fafc', [-Math.PI / 6, 0, 0]),
    // Lector perforador de cinta de papel lateral
    box(0.18, 0.2, 0.3, [-0.42, 0.8, 0.05], '#475569'),
    // Tapa de cristal sobre la cabeza impresora
    box(0.6, 0.02, 0.25, [0, 0.9, 0.05], '#67e8f9'),
    // Interruptor de encendido de línea
    box(0.05, 0.05, 0.05, [0.35, 0.75, 0.25], '#ef4444'),
  ]
}

/** 20. Pizarra de Laboratorio con Diagrama de Tuberías UNIX (Pipes) - 8 partes */
export function whiteboardPipes(): Part[] {
  return [
    // Pizarra blanca montada sobre caballete
    box(1.8, 1.1, 0.06, [0, 1.4, 0], '#f8fafc'),
    // Marco de aluminio
    box(1.84, 1.14, 0.04, [0, 1.4, -0.02], '#94a3b8'),
    // Patas de caballete de madera
    cyl(0.04, 0.04, 1.5, [-0.8, 0.75, -0.1], '#475569', [Math.PI / 16, 0, 0]),
    cyl(0.04, 0.04, 1.5, [0.8, 0.75, -0.1], '#475569', [Math.PI / 16, 0, 0]),
    // Diagrama escrito: cat | grep | wc (tubería de Unix)
    box(0.4, 0.15, 0.02, [-0.5, 1.5, 0.04], '#0284c7'),
    box(0.06, 0.3, 0.02, [-0.15, 1.5, 0.04], '#ef4444'), // símbolo pipe |
    box(0.4, 0.15, 0.02, [0.2, 1.5, 0.04], '#10b981'),
    // Bandeja de rotuladores y borrador
    box(1.4, 0.04, 0.1, [0, 0.83, 0.06], '#cbd5e1'),
  ]
}

/** 21. Esfera de Bloch para Estado de Superposición Cuántica |ψ⟩ - 8 partes */
export function blochSphereState(): Part[] {
  return [
    // Pedestal negro
    cyl(0.3, 0.3, 0.2, [0, 0.1, 0], '#09090b'),
    // Eje vertical z (|0⟩ y |1⟩)
    cyl(0.03, 0.03, 1.6, [0, 0.9, 0], '#e2e8f0'),
    // Esfera translúcida de estado cuántico
    sphere(0.65, [0, 0.9, 0], '#6366f1'),
    // Anillo del ecuador cuántico (plano x-y)
    cyl(0.66, 0.66, 0.02, [0, 0.9, 0], '#38bdf8'),
    // Polo norte |0⟩
    sphere(0.08, [0, 1.65, 0], '#10b981'),
    // Polo sur |1⟩
    sphere(0.08, [0, 0.15, 0], '#ef4444'),
    // Vector de estado en superposición oblicuo
    cyl(0.04, 0.04, 0.75, [0.22, 1.15, 0.22], '#fbbf24', [Math.PI / 4, 0, Math.PI / 4]),
    // Punta del vector de estado
    cone(0.08, 0.15, [0.38, 1.35, 0.38], '#ffd700', [Math.PI / 4, 0, Math.PI / 4]),
  ]
}
