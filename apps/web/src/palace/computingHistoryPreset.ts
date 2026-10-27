import { MuseumSchema, type Museum } from '@mus3o/shared'
import {
  vacuumTube,
  punchCard,
  planarTransistor,
  turingBombeRotor,
  hopperRelayBug,
  dipMicrochip,
  magneticCoreMemory,
  quantumQubitChamber,
} from './assets/computerHistoryAssets'
import {
  aluChip,
  controlUnit,
  registerFile,
  systemClock,
  cacheL1,
  ramStick,
  nvmeSsd,
  dataBus,
  addressBus,
  controlBus,
  pcTower,
  keyboard,
  motherboard,
} from './assets/pcAssets'

export const computingHistoryNotes = `Por amor al arte: Génesis y Evolución de las Computadoras

I. Los Orígenes Mecánicos y Filosóficos
El cómputo nació milenios antes del silicio. Desde el ábaco mesopotámico y los algoritmos formulados por Al-Juarismi en Bagdad, la humanidad buscó automatizar el razonamiento lógico.
En 1804, Joseph Marie Jacquard diseñó un telar automatizado que leía tarjetas perforadas de madera, demostrando que instrucciones simbólicas podían dirigir la acción mecánica física.
Charles Babbage concibió la Máquina Diferencial y posteriormente la Máquina Analítica, la primera computadora de propósito general programable de la historia con molino (CPU) y almacén (memoria).
Ada Lovelace publicó en 1843 sus Notas sobre la Máquina Analítica, conteniendo el primer algoritmo computacional para calcular los números de Bernoulli, anticipando que la máquina podría componer música y procesar símbolos abstractos.

II. La Ruptura Teórica y la Guerra Criptográfica
En 1936, Alan Turing concibió en Cambridge el concepto de la Máquina de Turing Universal, demostrando los límites matemáticos del cálculo y el problema de la parada (Halting Problem).
Durante la Segunda Guerra Mundial en Bletchley Park, Turing dirigió el desarrollo de la Bombe electro-mecánica, un dispositivo que descifró las comunicaciones navales de la máquina Enigma alemana.
Turing propuso en 1950 el célebre Test de Turing para evaluar la inteligencia de las máquinas e investigó la morfogénesis biológica a través de modelos computacionales matemáticos.

III. Compiladores, Relés y el Nacimiento del Software
Grace Murray Hopper, matemática y oficial de la Armada de los Estados Unidos, fue una pionera fundamental de la programación moderna trabajando en la Universidad de Harvard.
El 9 de septiembre de 1947, operando la computadora electromecánica Harvard Mark II, Hopper y su equipo encontraron una polilla atrapada en el relé número 70 del Panel F, acuñando el término "debugging".
Hopper creó en 1952 el sistema A-0, el primer compilador de la historia que traducía código legible a lenguaje máquina binario, y lideró la creación del lenguaje COBOL para negocios.
Para ilustrar la latencia eléctrica, Hopper distribuía cables cortados a exactamente 30 centímetros de longitud, representando físicamente la distancia que la luz viaja en un nanosegundo.

IV. De la Mecánica al Bit: Shannon y Lovelace
Claude Shannon publicó en 1937 su tesis de maestría en el MIT, demostrando que el álgebra de George Boole podía implementarse perfectamente usando circuitos de interruptores y relés eléctricos.
En 1948, Shannon formuló la Teoría Matemática de la Comunicación en los Laboratorios Bell, definiendo formalmente el "Bit" como la unidad fundamental de entropía e información del universo.
Shannon construyó autómatas pioneros como el ratón electromecánico Teseo (Theseus), capaz de aprender y memorizar la salida de un laberinto mediante matrices de relés.

V. La Arquitectura Von Neumann y el Programa Almacenado
En 1945, John von Neumann redactó el informe preliminar "First Draft of a Report on the EDVAC", formalizando la arquitectura que gobierna casi todas las computadoras modernas.
La arquitectura Von Neumann unificó en una misma memoria física compartida tanto las instrucciones del programa como los datos de ejecución, eliminando el re-cableado manual.
El "Cuello de Botella de Von Neumann" surge de la limitación del bus de datos compartido entre el procesador y la memoria principal, forzando la evolución de jerarquías de caché complejas.
Von Neumann también sentó las bases de los autómatas celulares autorreplicantes y colaboró en el diseño de la computadora MANIAC I para simulaciones nucleares de Montecarlo.

VI. La Era de las Válvulas y los Gigantes: ENIAC
El ENIAC (Electronic Numerical Integrator and Computer), concluido en 1945 en la Universidad de Pensilvania por Presper Eckert y John Mauchly, fue el primer computador electrónico de propósito general.
Con más de 18.000 válvulas de vacío termiónicas, ocupaba 167 metros cuadrados y consumía 150 kilovatios de potencia eléctrica, calculando trayectorias balísticas a velocidades sin precedentes.
La programación del ENIAC era realizada manualmente por seis brillantes matemáticas (Kay McNulty, Betty Jennings, Betty Snyder, Marlyn Wescoff, Frances Bilas y Ruth Lichterman) configurando cables en paneles.
Las primeras memorias electrónicas utilizaban tubos de retardo de ondas acústicas en mercurio líquido, donde los pulsos ultrasónicos circulaban en bucles de recirculación continua.

VII. La Revolución del Estado Sólido & Mainframes IBM
La invención del transistor de contacto puntual en 1947 por John Bardeen, Walter Brattain y William Shockley en Bell Labs sustituyó las frágiles válvulas por semiconductores de estado sólido.
Robert Noyce y Jean Hoerni en Fairchild Semiconductor desarrollaron el proceso planar de silicio, permitiendo imprimir transistores, pistas y resistencias en una misma oblea monolítica.
En 1964, IBM presentó la familia System/360, revolucionando la industria al introducir por primera vez compatibilidad de arquitectura y software entre computadoras de diferente potencia y tamaño.
Los centros de cómputo adoptaron el almacenamiento en cintas magnéticas de 9 pistas y los discos duros de cabezal móvil Winchester, introducidos por IBM en 1973 con el modelo 3340.

VIII. El Microchip y la Revolución del Computador Personal
En 1971, Ted Hoff, Federico Faggin y Masatoshi Shima crearon el Intel 4004, el primer microprocesador monolítico de 4 bits que concentró 2.300 transistores en una pastilla de silicio de 12 mm².
Gordon Moore formuló la Ley de Moore en 1965, prediciendo que el número de transistores en un circuito integrado se duplicaría aproximadamente cada dos años con una reducción constante de costo.
El Homebrew Computer Club en California incubó la revolución del PC, dando origen al Apple II diseñado por Steve Wozniak en 1977, con gráficos en color y arquitectura abierta.
En 1981, IBM lanzó el IBM PC modelo 5150 con procesador Intel 8088 y sistema operativo MS-DOS de Microsoft, estableciendo la arquitectura estándar x86 que dominaría la industria.

IX. Compuertas Lógicas, Silicio y Fotolitografía EUV
Los circuitos digitales modernos se sustentan en transistores MOSFET complementarios (CMOS), combinando compuertas NMOS y PMOS para minimizar el consumo de energía en estado de reposo.
Las compuertas lógicas universales NAND y NOR permiten construir cualquier función booleana, sumador binario, multiplexor o cerrojo biestable (flip-flop) del procesador.
La fabricación a escala nanométrica emplea escáneres de fotolitografía ultravioleta extrema (EUV) de ASML, proyectando patrones atómicos de luz de 13,5 nm sobre obleas de silicio ultrapuro.
A frecuencias superiores a 5 GHz, los procesadores enfrentan límites térmicos severos debido a la corriente de fuga cuántica por efecto túnel y la densidad de potencia disipada en vatios.

X. Evolución de la CPU: De CISC a RISC y Multi-Core
El pipelining de instrucciones divide el ciclo de ejecución en etapas simultáneas (Fetch, Decode, Execute, Memory, Write-back), maximizando el caudal de instrucciones por ciclo de reloj (IPC).
La filosofía RISC (Reduced Instruction Set Computer) demostró que instrucciones simples de tamaño fijo y registros universales superaban en eficiencia a las complejas arquitecturas CISC tradicionales.
Al agotarse el escalado de frecuencia de Dennard hacia 2005, la industria giró hacia microprocesadores multinúcleo (Multi-Core) y arquitecturas heterogéneas con núcleos de rendimiento y eficiencia.
Las unidades SIMD y motores vectoriales modernos (AVX-512, NEON) permiten procesar matrices paralelas en una sola instrucción, esenciales para la física 3D y la inferencia de redes neuronales.

XI. Evolución de la Memoria: De Núcleos a NVMe y HBM3e
La memoria de núcleos de ferrita magnética dominó los años 50 y 60, almacenando bits persistentes mediante la dirección del campo magnético en pequeños anillos enhebrados a mano.
La jerarquía de memoria moderna escalona memorias estáticas ultrarrápidas SRAM (L1, L2, L3) con latencias de 1 a 15 nanosegundos para amortiguar la latencia de la memoria principal.
La memoria RAM dinámica (DRAM DDR5) almacena cargas en condensadores microscópicos que requieren refresco continuo miles de veces por segundo para evitar la pérdida del estado lógico.
Los discos de estado sólido NVMe sobre bus PCIe y la memoria apilada HBM3e (High Bandwidth Memory) ofrecen anchos de banda masivos de varios terabytes por segundo mediante vías de silicio 3D (TSV).

XII. Frontera de la Computación: Supercómputo y Qubits Cuánticos
Las supercomputadoras modernas como Frontier superan el Exaflop (un trillón de operaciones de punto flotante por segundo), combinando decenas de miles de CPUs y GPUs interconectadas.
La computación cuántica reemplaza el bit binario por el Qubit superconductor, aprovechando principios de la física cuántica como la superposición lineal y el entrelazamiento cuántico.
Algoritmos cuánticos como el de Shor para factorización de números primos y el de Grover para búsqueda en bases no estructuradas desafían los fundamentos de la criptografía asimétrica clásica.
Los procesadores cuánticos operan dentro de criostatos de dilución de helio enfriados a 15 milikelvin (más fríos que el espacio exterior) para preservar la coherencia de la función de onda cuántica.`

export const computingHistoryMuseum: Museum = MuseumSchema.parse({
  title: 'Historia Integral de la Computación: De los Pioneros al Futuro Cuántico',
  theme: {
    palette: ['#00ffcc', '#3b82f6', '#f59e0b', '#10b981', '#a855f7'],
    ambience: 'cyberpunk',
  },
  mode: 'exploration',
  rooms: [
    // -----------------------------------------------------------------------------------------
    // SALA 1: EL ORIGEN
    // -----------------------------------------------------------------------------------------
    {
      id: 'r-origin',
      name: 'Orígenes del Cómputo: Por Amor al Arte',
      description: 'Desde los algoritmos de Bagdad y telares de Jacquard hasta el motor analítico de Babbage y Lovelace.',
      theme: 'ancient',
      palette: { primary: '#d97706', fogColor: '#1c1917' },
      monument: 'ring_system',
      pieces: [
        {
          id: 'orig-abacus-algo',
          title: 'Algoritmos y Cálculo Mecánico',
          text: 'Al-Juarismi en el siglo IX formalizó las reglas sistemáticas paso a paso para resolver ecuaciones.',
          fact: 'La palabra "algoritmo" proviene de la latinización del nombre del matemático persa Al-Juarismi.',
          mnemonicCue: 'Un pergamino de seda dorada que despliega ecuaciones matemáticas flotando sobre un ábaco de bronce milenario.',
          model: { type: 'procedural', parts: systemClock() },
          imageSearch: { wikiTitle: 'Al-Juarismi', lang: 'es' },
          source: { quote: 'El cómputo nació milenios antes del silicio. Desde el ábaco mesopotámico y los algoritmos formulados por Al-Juarismi', line: 4 },
        },
        {
          id: 'orig-jacquard',
          title: 'Telar de Jacquard y Tarjetas Perforadas',
          text: 'En 1804 Jacquard automatizó el tejido de seda mediante tarjetas perforadas de madera con código binario.',
          fact: 'Un retrato de Jacquard requirió 24.000 tarjetas perforadas para ser tejido automáticamente.',
          mnemonicCue: 'Un telar monumental de roble que teje telas luminosas alimentado por tiras de madera con orificios ardientes.',
          model: { type: 'procedural', parts: punchCard() },
          imageSearch: { wikiTitle: 'Telar de Jacquard', lang: 'es' },
          source: { quote: 'Joseph Marie Jacquard diseñó un telar automatizado que leía tarjetas perforadas de madera', line: 5 },
        },
        {
          id: 'orig-babbage',
          title: 'Máquina Analítica de Charles Babbage',
          text: 'Primer diseño de computadora programable de propósito general, con unidad de procesamiento (molino) y memoria (almacén).',
          fact: 'Diseñada con miles de engranajes y ruedas dentadas de latón accionadas por vapor.',
          mnemonicCue: 'Una catedral de engranajes de bronce de diez metros de alto haciendo girar columnas de cilindros dentados.',
          model: { type: 'procedural', parts: controlUnit() },
          imageSearch: { wikiTitle: 'Máquina analítica', lang: 'es' },
          source: { quote: 'Charles Babbage concibió la Máquina Diferencial y posteriormente la Máquina Analítica', line: 6 },
        },
        {
          id: 'orig-lovelace-notes',
          title: 'Ada Lovelace: La Primera Programadora',
          text: 'En 1843 escribió el primer algoritmo para calcular los números de Bernoulli en la Máquina Analítica.',
          fact: 'Comprendió antes que nadie que las máquinas podían manipular cualquier símbolo abstracto, no solo números.',
          mnemonicCue: 'Una pluma victoriana de plata que escribe en el aire líneas de código flotante que se transforman en partituras.',
          model: { type: 'procedural', parts: registerFile() },
          imageSearch: { wikiTitle: 'Ada Lovelace', lang: 'es' },
          source: { quote: 'Ada Lovelace publicó en 1843 sus Notas sobre la Máquina Analítica, conteniendo el primer algoritmo', line: 7 },
        },
      ],
    },

    // -----------------------------------------------------------------------------------------
    // SALA 2: ALAN TURING & BLETCHLEY PARK (RUTA PIONEROS)
    // -----------------------------------------------------------------------------------------
    {
      id: 'r-turing',
      name: 'Alan Turing & Bletchley Park',
      description: 'La formalización teórica del cómputo universal, el criptoanálisis de Enigma y los albores de la IA.',
      theme: 'void',
      palette: { primary: '#38bdf8', fogColor: '#0c4a6e' },
      monument: 'dodecahedron',
      diorama: {
        title: 'Hut 8 y la Máquina Bombe en Bletchley Park',
        terrain: 'interior',
        time: 'night',
        palette: { ground: '#1c1917', sky: '#0284c7', accent: '#fbbf24' },
        props: [
          { kind: 'figure', pose: 'seated', pos: [0, 0], scale: 1.2, color: '#0369a1', label: 'Alan Turing en su escritorio' },
          { kind: 'custom', pos: [-3, 2], scale: 1.5, parts: turingBombeRotor(), label: 'Tambores Bombe Criptoanalítica' },
          { kind: 'custom', pos: [3, 2], scale: 1.2, parts: punchCard(), label: 'Cintas de teleimpresor y códigos' },
          { kind: 'flag', pattern: 'stripes', pos: [-6, -4], color: '#dc2626', secondary: '#ffffff', label: 'Estandarte Aliado' },
        ],
      },
      pieces: [
        {
          id: 'tur-machine',
          title: 'Máquina Universal de Turing (1936)',
          text: 'Modelo matemático de cómputo con cinta infinita y cabezal de lectura/escritura que define qué es computable.',
          fact: 'Demostró que ninguna máquina puede resolver de forma general el problema de la parada.',
          mnemonicCue: 'Una cinta de película transparente infinita que atraviesa los muros de la sala girando sobre una aguja de luz.',
          model: { type: 'procedural', parts: dataBus() },
          imageSearch: { wikiTitle: 'Máquina de Turing', lang: 'es' },
          source: { quote: 'Alan Turing concibió en Cambridge el concepto de la Máquina de Turing Universal', line: 10 },
        },
        {
          id: 'tur-bombe',
          title: 'La Bombe Criptoanalítica',
          text: 'Máquina electromecánica con decenas de tambores giratorios sincronizados para descifrar la máquina Enigma.',
          fact: 'Redujo el tiempo de descifrado de días a minutos, acortando la Segunda Guerra Mundial en años.',
          mnemonicCue: 'Un muro gigantesco de tambores de bronce girando acompasadamente con chispas azules entre sus contactos.',
          model: { type: 'procedural', parts: turingBombeRotor() },
          imageSearch: { wikiTitle: 'Bombe', lang: 'es' },
          source: { quote: 'Turing dirigió el desarrollo de la Bombe electro-mecánica, un dispositivo que descifró', line: 11 },
        },
        {
          id: 'tur-test',
          title: 'El Test de Turing y la IA (1950)',
          text: 'Criterio operacional de inteligencia basado en si un juez ciego puede distinguir las respuestas humanas de las de una máquina.',
          fact: 'Publicado en su ensayo fundacional "Computing Machinery and Intelligence".',
          mnemonicCue: 'Un espejo veneciano que refleja por un lado una mente humana y por el otro un laberinto de cables brillantes.',
          model: { type: 'procedural', parts: controlUnit() },
          imageSearch: { wikiTitle: 'Test de Turing', lang: 'es' },
          source: { quote: 'Turing propuso en 1950 el célebre Test de Turing para evaluar la inteligencia', line: 12 },
        },
      ],
    },

    // -----------------------------------------------------------------------------------------
    // SALA 3: GRACE HOPPER & COMPILADORES (RUTA PIONEROS)
    // -----------------------------------------------------------------------------------------
    {
      id: 'r-hopper',
      name: 'Grace Hopper & El Nacimiento del Software',
      description: 'El primer compilador, el hallazgo del primer bug en Harvard Mark II y el diseño de COBOL.',
      theme: 'cathedral',
      palette: { primary: '#10b981', fogColor: '#064e3b' },
      monument: 'torus',
      diorama: {
        title: 'Laboratorio de Harvard Mark II y el Primer Bug',
        terrain: 'interior',
        time: 'day',
        palette: { ground: '#27272a', sky: '#10b981', accent: '#f59e0b' },
        props: [
          { kind: 'figure', pose: 'pointing', pos: [0, 0], scale: 1.1, color: '#047857', label: 'Contraalmirante Grace Hopper' },
          { kind: 'custom', pos: [2, 1], scale: 1.4, parts: hopperRelayBug(), label: 'Relé 70 con la Polilla Real' },
          { kind: 'custom', pos: [-2, 1], scale: 1.2, parts: punchCard(), label: 'Bitácora del 9 de septiembre de 1947' },
        ],
      },
      pieces: [
        {
          id: 'hop-bug',
          title: 'El Primer "Bug" Documentado (1947)',
          text: 'Una polilla atrapada en el relé número 70 del Harvard Mark II paralizó los cómputos de la máquina.',
          fact: 'El insecto fue pegado con cinta adhesiva en el cuaderno de bitácora con la nota "First actual case of bug being found".',
          mnemonicCue: 'Una polilla dorada gigantesca suspendida inmóvil entre dos polos eléctricos de cristal resplandeciente.',
          model: { type: 'procedural', parts: hopperRelayBug() },
          imageSearch: { wikiTitle: 'Grace Murray Hopper', lang: 'es' },
          source: { quote: 'encontraron una polilla atrapada en el relé número 70 del Panel F, acuñando el término "debugging"', line: 16 },
        },
        {
          id: 'hop-compiler',
          title: 'Sistema A-0 y el Primer Compilador',
          text: 'En 1952 desarrolló el primer compilador, permitiendo escribir programas en pseudocódigo en vez de código máquina.',
          fact: 'Sus colegas le dijeron inicialmente que las computadoras no podían escribir programas, solo calcular.',
          mnemonicCue: 'Un prisma de cristal que refracta un texto escrito en inglés convirtiéndolo en un haz de ceros y unos.',
          model: { type: 'procedural', parts: aluChip() },
          imageSearch: { wikiTitle: 'Compilador', lang: 'es' },
          source: { quote: 'Hopper creó en 1952 el sistema A-0, el primer compilador de la historia', line: 17 },
        },
        {
          id: 'hop-nanosecond',
          title: 'El Nanosegundo de Grace Hopper',
          text: 'Para explicar el costo de la latencia, regalaba trozos de alambre de 30 centímetros a los almirantes.',
          fact: '30 cm es la distancia exacta que viaja la luz en el vacío durante un nanosegundo (10⁻⁹ s).',
          mnemonicCue: 'Un filamento de oro de 30 centímetros que pulsa rítmicamente liberando relámpagos de fotones cada nanosegundo.',
          model: { type: 'procedural', parts: systemClock() },
          imageSearch: { wikiTitle: 'Nanosegundo', lang: 'es' },
          source: { quote: 'Hopper distribuía cables cortados a exactamente 30 centímetros de longitud', line: 18 },
        },
      ],
    },

    // -----------------------------------------------------------------------------------------
    // SALA 4: ADA LOVELACE Y CLAUDE SHANNON
    // -----------------------------------------------------------------------------------------
    {
      id: 'r-lovelace-shannon',
      name: 'Ada Lovelace y Claude Shannon',
      description: 'El puente entre la matemática simbólica y la teoría formal de la información y el Bit.',
      theme: 'cathedral',
      palette: { primary: '#a855f7', fogColor: '#3b0764' },
      monument: 'crystal',
      pieces: [
        {
          id: 'ls-bit-entropy',
          title: 'El Bit y la Teoría de la Información (1948)',
          text: 'Shannon formuló la medida matemática de la información y la compresión en canales con ruido.',
          fact: 'Definió el término "Bit" (Binary Digit) propuesto por John Tukey como la unidad cuántica del conocimiento.',
          mnemonicCue: 'Una balanza estelar que pesa cubos transparentes de información pura equilibrando el orden contra el caos.',
          model: { type: 'procedural', parts: addressBus() },
          imageSearch: { wikiTitle: 'Claude Shannon', lang: 'es' },
          source: { quote: 'Shannon formuló la Teoría Matemática de la Comunicación en los Laboratorios Bell, definiendo formalmente el "Bit"', line: 22 },
        },
        {
          id: 'ls-boolean-relays',
          title: 'Álgebra de Boole en Circuitos Eléctricos',
          text: 'Tesis de maestría de Shannon en 1937: demostró que interruptores en serie y paralelo resuelven lógica proposicional.',
          fact: 'Ha sido llamada la tesis de maestría más importante e influyente del siglo XX.',
          mnemonicCue: 'Un mapa de interruptores de mercurio que resuelven silogismos aristotélicos abriendo y cerrando compuertas.',
          model: { type: 'procedural', parts: controlBus() },
          imageSearch: { wikiTitle: 'Álgebra de Boole', lang: 'es' },
          source: { quote: 'demostrando que el álgebra de George Boole podía implementarse perfectamente usando circuitos de interruptores', line: 21 },
        },
        {
          id: 'ls-theseus-mouse',
          title: 'El Ratón Teseo (Theseus Mouse)',
          text: 'Primer robot con memoria de aprendizaje: un ratón magnético que aprende a escapar de un laberinto usando relés.',
          fact: 'Diseñado por Shannon en 1950, precursor del aprendizaje por refuerzo y la robótica autónoma.',
          mnemonicCue: 'Un pequeño ratón de bronce pulido navegando por un laberinto cuyas paredes cambian dinámicamente.',
          model: { type: 'procedural', parts: registerFile() },
          imageSearch: { wikiTitle: 'Laberinto', lang: 'es' },
          source: { quote: 'Shannon construyó autómatas pioneros como el ratón electromecánico Teseo', line: 23 },
        },
      ],
    },

    // -----------------------------------------------------------------------------------------
    // SALA 5: JOHN VON NEUMANN & PROGRAMA ALMACENADO
    // -----------------------------------------------------------------------------------------
    {
      id: 'r-von-neumann',
      name: 'John von Neumann & El Programa Almacenado',
      description: 'La arquitectura canónica del computador contemporáneo: CPU, memoria unificada y buses.',
      theme: 'cyberpunk',
      palette: { primary: '#06b6d4', fogColor: '#083344' },
      monument: 'ring_system',
      pieces: [
        {
          id: 'vn-edvac-report',
          title: 'Arquitectura Von Neumann (1945)',
          text: 'Integración en una misma memoria de instrucciones y datos, gobernados por una unidad de control y una ALU.',
          fact: 'El informe preliminar de EDVAC sentó las bases de la informática de hardware que aún rige hoy.',
          mnemonicCue: 'Una pirámide de cristal con una CPU en la cúspide que proyecta torrentes de datos hacia una base de memoria infinita.',
          model: { type: 'procedural', parts: aluChip() },
          imageSearch: { wikiTitle: 'Arquitectura de von Neumann', lang: 'es' },
          source: { quote: 'En 1945, John von Neumann redactó el informe preliminar "First Draft of a Report on the EDVAC"', line: 26 },
        },
        {
          id: 'vn-bottleneck',
          title: 'El Cuello de Botella de Von Neumann',
          text: 'Limitación física de rendimiento causada por el bus compartido y la diferencia de velocidad entre CPU y memoria.',
          fact: 'Obligó a inventar memorias caché, prefetching predictivo y jerarquías multinivel complejas.',
          mnemonicCue: 'Un reloj de arena de titanio donde millones de esferas de luz intentan pasar por un canal estrecho resplandeciente.',
          model: { type: 'procedural', parts: cacheL1() },
          imageSearch: { wikiTitle: 'Cuello de botella de von Neumann', lang: 'es' },
          source: { quote: 'El "Cuello de Botella de Von Neumann" surge de la limitación del bus de datos compartido', line: 28 },
        },
        {
          id: 'vn-cellular-automata',
          title: 'Autómatas Celulares y Auto-replicación',
          text: 'Investigación teórica de sistemas discretos en cuadrículas capaces de reproducirse y computar universalmente.',
          fact: 'Von Neumann diseñó un autómata celular de 29 estados capaz de construir una copia idéntica de sí mismo.',
          mnemonicCue: 'Un tapiz viviente de celdas cuadradas que titilan y se multiplican infinitamente por las paredes.',
          model: { type: 'procedural', parts: controlUnit() },
          imageSearch: { wikiTitle: 'Autómata celular', lang: 'es' },
          source: { quote: 'Von Neumann también sentó las bases de los autómatas celulares autorreplicantes', line: 29 },
        },
      ],
    },

    // -----------------------------------------------------------------------------------------
    // SALA 6: LA ERA DE LAS VÁLVULAS & ENIAC (RUTA MÁQUINAS)
    // -----------------------------------------------------------------------------------------
    {
      id: 'r-tubes',
      name: 'La Era de las Válvulas y los Gigantes: ENIAC',
      description: 'El primer computador electrónico a gran escala, tubos termiónicos y paneles de cableado manual.',
      theme: 'ancient',
      palette: { primary: '#ea580c', fogColor: '#29140e' },
      monument: 'torus',
      diorama: {
        title: 'La Gran Nave del ENIAC en Filadelfia',
        terrain: 'interior',
        time: 'night',
        palette: { ground: '#1e1e24', sky: '#ea580c', accent: '#f59e0b' },
        props: [
          { kind: 'figure', pose: 'pointing', pos: [-2, 0], scale: 1.1, color: '#c2410c', label: 'Programadora del ENIAC' },
          { kind: 'custom', pos: [0, 2], scale: 1.5, parts: vacuumTube(), count: 4, spread: 2, label: 'Muro de Válvulas Termiónicas' },
          { kind: 'custom', pos: [2, 0], scale: 1.2, parts: punchCard(), label: 'Lector de Tarjetas IBM' },
        ],
      },
      pieces: [
        {
          id: 'tub-vacuum',
          title: 'Válvula de Vacío Termiónica',
          text: 'Tubo de vidrio al vacío con cátodo, ánodo y rejilla de control que amplifica y conmuta electrones a alta velocidad.',
          fact: 'Se fundían varias válvulas cada día en ENIAC, requiriendo técnicos dedicados a reemplazarlas.',
          mnemonicCue: 'Una hilera de lámparas de vidrio incandescente brillando como soles rojos en la penumbra del laboratorio.',
          model: { type: 'procedural', parts: vacuumTube() },
          imageSearch: { wikiTitle: 'Válvula termoiónica', lang: 'es' },
          source: { quote: 'Con más de 18.000 válvulas de vacío termiónicas, ocupaba 167 metros cuadrados', line: 33 },
        },
        {
          id: 'tub-eniac',
          title: 'ENIAC y el Cálculo Balístico (1945)',
          text: 'Construido por Eckert y Mauchly en Filadelfia; pesaba 30 toneladas y consumía 150 kilovatios de electricidad.',
          fact: 'Calculaba la trayectoria de un proyectil en 30 segundos, cuando un calculador humano tardaba 20 horas.',
          mnemonicCue: 'Un coloso de armarios de hierro negro de 30 metros de largo que ruge con el calor de miles de filamentos.',
          model: { type: 'procedural', parts: motherboard() },
          imageSearch: { wikiTitle: 'ENIAC', lang: 'es' },
          source: { quote: 'El ENIAC (Electronic Numerical Integrator and Computer), concluido en 1945', line: 32 },
        },
        {
          id: 'tub-programmers',
          title: 'Las Seis Programadoras del ENIAC',
          text: 'Kay McNulty, Betty Jennings, Betty Snyder, Marlyn Wescoff, Frances Bilas y Ruth Lichterman programaron el monstruo.',
          fact: 'Programaban sin ensamblador ni sistema operativo, configurando físicamente cientos de cables en paneles.',
          mnemonicCue: 'Una telaraña infinita de cables negros con clavijas doradas conectadas a un panel de conmutación.',
          model: { type: 'procedural', parts: dataBus() },
          imageSearch: { wikiTitle: 'Betty Snyder Holberton', lang: 'es' },
          source: { quote: 'La programación del ENIAC era realizada manualmente por seis brillantes matemáticas', line: 34 },
        },
      ],
    },

    // -----------------------------------------------------------------------------------------
    // SALA 7: EL ESTADO SÓLIDO & MAINFRAMES IBM (RUTA MÁQUINAS)
    // -----------------------------------------------------------------------------------------
    {
      id: 'r-transistors',
      name: 'La Revolución del Estado Sólido & Mainframes',
      description: 'El transistor de silicio, el proceso planar y la consagración de la familia IBM System/360.',
      theme: 'cathedral',
      palette: { primary: '#0284c7', fogColor: '#082f49' },
      monument: 'dodecahedron',
      diorama: {
        title: 'Centro de Cómputo IBM System/360',
        terrain: 'interior',
        time: 'day',
        palette: { ground: '#e2e8f0', sky: '#0284c7', accent: '#0369a1' },
        props: [
          { kind: 'figure', pose: 'standing', pos: [0, 0], scale: 1.1, color: '#0369a1', label: 'Operador de Sistemas IBM' },
          { kind: 'custom', pos: [-3, 2], scale: 1.3, parts: planarTransistor(), label: 'Módulo de Lógica de Silicio SLT' },
          { kind: 'custom', pos: [3, 2], scale: 1.4, parts: magneticCoreMemory(), label: 'Armario de Memoria de Ferrita' },
        ],
      },
      pieces: [
        {
          id: 'tra-transistor',
          title: 'El Transistor de Silicio Planar',
          text: 'Shockley, Bardeen y Brattain (1947); Robert Noyce inventó el proceso planar que permitió fabricar circuitos monolíticos.',
          fact: 'Reemplazó el filamento caliente por física cuántica de semiconductores, multiplicando la vida útil por 10.000.',
          mnemonicCue: 'Un cristal de silicio triangular puro que al recibir una gota de luz conduce una cascada de energía.',
          model: { type: 'procedural', parts: planarTransistor() },
          imageSearch: { wikiTitle: 'Transistor', lang: 'es' },
          source: { quote: 'La invención del transistor de contacto puntual en 1947 por John Bardeen, Walter Brattain y William Shockley', line: 37 },
        },
        {
          id: 'tra-ibm360',
          title: 'IBM System/360 (1964)',
          text: 'Primera familia de computadoras comerciales con compatibilidad binaria de software entre modelos de diferente escala.',
          fact: 'Estandarizó el byte de 8 bits y el direccionamiento por bytes en toda la industria.',
          mnemonicCue: 'Una hilera de armarios azules impolutos con paneles frontales titilando al unísono con luces blancas.',
          model: { type: 'procedural', parts: pcTower() },
          imageSearch: { wikiTitle: 'IBM S/360', lang: 'es' },
          source: { quote: 'En 1964, IBM presentó la familia System/360, revolucionando la industria al introducir por primera vez compatibilidad', line: 39 },
        },
        {
          id: 'tra-mag-tape',
          title: 'Cintas Magnéticas y Discos Winchester',
          text: 'El almacenamiento secundario masivo migró de tarjetas a bobinas magnéticas de 9 pistas y discos duros sellados.',
          fact: 'El IBM 305 RAMAC en 1956 almacenaba 5 Megabytes en 50 discos magnéticos del tamaño de ruedas de carreta.',
          mnemonicCue: 'Dos carretes de cinta magnética dorada girando a velocidades vertiginosas con frenadas neumáticas instantáneas.',
          model: { type: 'procedural', parts: nvmeSsd() },
          imageSearch: { wikiTitle: 'Cinta magnética de almacenamiento de datos', lang: 'es' },
          source: { quote: 'Los centros de cómputo adoptaron el almacenamiento en cintas magnéticas de 9 pistas y los discos duros', line: 40 },
        },
      ],
    },

    // -----------------------------------------------------------------------------------------
    // SALA 8: MICROPROCESADORES & LA COMPUTADORA PERSONAL
    // -----------------------------------------------------------------------------------------
    {
      id: 'r-microprocessors',
      name: 'La Era del Microchip & Computación Personal',
      description: 'El Intel 4004, la Ley de Moore, el Homebrew Computer Club y el nacimiento del PC para masas.',
      theme: 'cyberpunk',
      palette: { primary: '#10b981', fogColor: '#022c22' },
      monument: 'crystal',
      diorama: {
        title: 'Taller del Homebrew Computer Club',
        terrain: 'interior',
        time: 'sunset',
        palette: { ground: '#292524', sky: '#10b981', accent: '#f59e0b' },
        props: [
          { kind: 'figure', pose: 'seated', pos: [0, 0], scale: 1.1, color: '#059669', label: 'Steve Wozniak ensamblando' },
          { kind: 'custom', pos: [-2, 1], scale: 1.3, parts: dipMicrochip(), label: 'Chip Intel DIP-14' },
          { kind: 'custom', pos: [2, 1], scale: 1.1, parts: keyboard(), label: 'Teclado y monitor de fósforo verde' },
        ],
      },
      pieces: [
        {
          id: 'mic-intel4004',
          title: 'Intel 4004: La CPU en un Chip (1971)',
          text: 'Primer microprocesador comercial del mundo en un solo die de silicio con 2.300 transistores.',
          fact: 'Diseñado por Faggin, Hoff y Shima originalmente para la calculadora japonesa Busicom 141-PF.',
          mnemonicCue: 'Un ciempiés negro de cerámica con 14 patas plateadas que bombea luz por cada una de sus extremidades.',
          model: { type: 'procedural', parts: dipMicrochip() },
          imageSearch: { wikiTitle: 'Intel 4004', lang: 'es' },
          source: { quote: 'En 1971, Ted Hoff, Federico Faggin y Masatoshi Shima crearon el Intel 4004, el primer microprocesador monolítico', line: 43 },
        },
        {
          id: 'mic-moore',
          title: 'La Ley de Moore y el Escalado',
          text: 'Predicción de Gordon Moore: duplicación del número de transistores por chip cada dos años con costo decreciente.',
          fact: 'Pasamos de 2.300 transistores en 1971 a más de 100.000 millones en los chips actuales.',
          mnemonicCue: 'Una escalera mecánica infinita que duplica su altura a cada paso mientras se vuelve invisible al ojo humano.',
          model: { type: 'procedural', parts: aluChip() },
          imageSearch: { wikiTitle: 'Ley de Moore', lang: 'es' },
          source: { quote: 'Gordon Moore formuló la Ley de Moore en 1965, prediciendo que el número de transistores en un circuito integrado', line: 44 },
        },
        {
          id: 'mic-pc-ibm',
          title: 'Apple II e IBM PC 5150',
          text: 'La computadora salió de los laboratorios corporativos para instalarse en hogares y oficinas de todo el planeta.',
          fact: 'El IBM PC eligió el procesador Intel 8088 y el sistema operativo MS-DOS, fijando el estándar Wintel.',
          mnemonicCue: 'Un monitor beige de rayos catódicos con letras verde esmeralda resplandeciendo en la oscuridad.',
          model: { type: 'procedural', parts: pcTower() },
          imageSearch: { wikiTitle: 'IBM Personal Computer', lang: 'es' },
          source: { quote: 'En 1981, IBM lanzó el IBM PC modelo 5150 con procesador Intel 8088 y sistema operativo MS-DOS', line: 46 },
        },
      ],
    },

    // -----------------------------------------------------------------------------------------
    // SALA 9: COMPUERTAS LÓGICAS & FOTOLITOGRAFÍA (RUTA COMPONENTES)
    // -----------------------------------------------------------------------------------------
    {
      id: 'r-logic-gates',
      name: 'Compuertas Lógicas, Silicio y Fotolitografía EUV',
      description: 'La física subyacente del cómputo: transistores CMOS, compuertas universales y escáneres ultravioleta.',
      theme: 'void',
      palette: { primary: '#8b5cf6', fogColor: '#1e1b4b' },
      monument: 'ring_system',
      pieces: [
        {
          id: 'log-cmos',
          title: 'Tecnología CMOS y Puertas Lógicas',
          text: 'Combinación de transistores NMOS y PMOS en complementario que reduce a cero el consumo estático de energía.',
          fact: 'Las compuertas NAND y NOR son universalmente suficientes: cualquier circuito digital puede armarse solo con ellas.',
          mnemonicCue: 'Un interruptor de cuarzo violeta que abre un portal cuando las dos señales de control coinciden exactamente.',
          model: { type: 'procedural', parts: planarTransistor() },
          imageSearch: { wikiTitle: 'CMOS', lang: 'es' },
          source: { quote: 'Los circuitos digitales modernos se sustentan en transistores MOSFET complementarios (CMOS)', line: 49 },
        },
        {
          id: 'log-euv',
          title: 'Fotolitografía Ultravioleta Extrema (EUV)',
          text: 'Máquinas de litografía ASML que proyectan luz de 13,5 nm rebotando en espejos de precisión atómica para imprimir silicio.',
          fact: 'La luz EUV se produce disparando rayos láser a gotas de estaño fundido que caen a 70 metros por segundo.',
          mnemonicCue: 'Un cañón láser ultravioleta que esculpe ciudades microscópicas sobre un disco espejado de silicio puro.',
          model: { type: 'procedural', parts: dipMicrochip() },
          imageSearch: { wikiTitle: 'Litografía ultravioleta extrema', lang: 'es' },
          source: { quote: 'La fabricación a escala nanométrica emplea escáneres de fotolitografía ultravioleta extrema (EUV)', line: 51 },
        },
        {
          id: 'log-clock-heat',
          title: 'Frecuencia de Reloj y Límite Térmico',
          text: 'A frecuencias mayores de 4 GHz, el calor por efecto Joule y las corrientes parásitas impiden seguir acelerando por MHz.',
          fact: 'El fin del escalado de Dennard obligó a abandonar los chips mononúcleo de alta frecuencia.',
          mnemonicCue: 'Un reloj de diamante que echa humo rojo mientras intenta latir más rápido que las leyes de la termodinámica.',
          model: { type: 'procedural', parts: systemClock() },
          imageSearch: { wikiTitle: 'Frecuencia de reloj', lang: 'es' },
          source: { quote: 'A frecuencias superiores a 5 GHz, los procesadores enfrentan límites térmicos severos debido a la corriente de fuga', line: 52 },
        },
      ],
    },

    // -----------------------------------------------------------------------------------------
    // SALA 10: EVOLUCIÓN DE LA CPU: CISC, RISC & MULTI-CORE
    // -----------------------------------------------------------------------------------------
    {
      id: 'r-cpu-evolution',
      name: 'Evolución de la CPU: De CISC a RISC y Multi-Core',
      description: 'Pipelining, predicción de saltos branch, la guerra arquitectónica ARM vs x86 y paralelismo moderno.',
      theme: 'cyberpunk',
      palette: { primary: '#f59e0b', fogColor: '#451a03' },
      monument: 'dodecahedron',
      pieces: [
        {
          id: 'cpu-pipeline',
          title: 'Pipelining y Predicción de Saltos',
          text: 'Segmentación del ciclo de instrucción como una línea de ensamblaje para ejecutar una instrucción por ciclo (IPC).',
          fact: 'Los procesadores modernos predicen con más del 95% de acierto hacia dónde bifurcará un salto antes de evaluarlo.',
          mnemonicCue: 'Una cinta transportadora luminosa donde 20 operarios trabajan simultáneamente en fases sucesivas de una joya.',
          model: { type: 'procedural', parts: controlUnit() },
          imageSearch: { wikiTitle: 'Segmentación (electrónica)', lang: 'es' },
          source: { quote: 'El pipelining de instrucciones divide el ciclo de ejecución en etapas simultáneas (Fetch, Decode, Execute)', line: 55 },
        },
        {
          id: 'cpu-risc-cisc',
          title: 'Guerra Arquitectónica: RISC vs CISC',
          text: 'Instrucciones reducidas de ejecución en un ciclo (ARM, RISC-V) frente a instrucciones complejas con microcódigo (x86).',
          fact: 'Los smartphones y supercomputadoras energéticamente eficientes adoptaron la arquitectura ARM de forma masiva.',
          mnemonicCue: 'Dos gladiadores cibernéticos: uno con una armadura pesada repleta de armas y otro ágil con una katana de luz pura.',
          model: { type: 'procedural', parts: aluChip() },
          imageSearch: { wikiTitle: 'Reduced instruction set computer', lang: 'es' },
          source: { quote: 'La filosofía RISC (Reduced Instruction Set Computer) demostró que instrucciones simples de tamaño fijo', line: 56 },
        },
        {
          id: 'cpu-multicore-simd',
          title: 'Multi-Core y Motores Vectoriales SIMD',
          text: 'Varios núcleos físicos en el mismo silicio coordinados con extensiones vectoriales para procesar matrices en paralelo.',
          fact: 'Clave para el auge del aprendizaje profundo y los modelos masivos de inteligencia artificial.',
          mnemonicCue: 'Una colmena hexagonal donde ocho cerebros mecánicos coordinan sus pensamientos mediante destellos dorados.',
          model: { type: 'procedural', parts: registerFile() },
          imageSearch: { wikiTitle: 'Multi-core', lang: 'es' },
          source: { quote: 'la industria giró hacia microprocesadores multinúcleo (Multi-Core) y arquitecturas heterogéneas', line: 57 },
        },
      ],
    },

    // -----------------------------------------------------------------------------------------
    // SALA 11: JERARQUÍA DE MEMORIA: DE FERRITA A HBM3E
    // -----------------------------------------------------------------------------------------
    {
      id: 'r-memory-evolution',
      name: 'Jerarquía de Memoria: De Núcleos a NVMe y HBM3e',
      description: 'El almacenamiento estratificado entre la velocidad del nanosegundo y la persistencia de petabytes.',
      theme: 'cathedral',
      palette: { primary: '#3b82f6', fogColor: '#172554' },
      monument: 'torus',
      pieces: [
        {
          id: 'mem-core-ferrite',
          title: 'Memoria de Núcleos Magnéticos de Ferrita',
          text: 'Anillos de ferrita ensartados en cuadrículas de alambre que preservaban la orientación magnética al apagarse.',
          fact: 'Se tejió a mano por costureras expertas; fue la memoria que llevó al ser humano a la Luna en el Apollo AGC.',
          mnemonicCue: 'Un manto de seda con miles de anillos negros de hierro entrelazados por hilos de cobre que guardan secretos estelares.',
          model: { type: 'procedural', parts: magneticCoreMemory() },
          imageSearch: { wikiTitle: 'Memoria de núcleo magnético', lang: 'es' },
          source: { quote: 'La memoria de núcleos de ferrita magnética dominó los años 50 y 60, almacenando bits persistentes', line: 60 },
        },
        {
          id: 'mem-cache-sram',
          title: 'SRAM y la Jerarquía de Cachés L1, L2 y L3',
          text: 'Memorias de 6 transistores por celda integradas en el silicio para evitar las paradas de acceso a la memoria externa.',
          fact: 'La caché L1 responde en ~1 nanosegundo, mientras que la RAM principal puede tardar 50-80 nanosegundos.',
          mnemonicCue: 'Una fortaleza de espejos concéntricos que guardan los recuerdos más recientes en el centro de la sala.',
          model: { type: 'procedural', parts: cacheL1() },
          imageSearch: { wikiTitle: 'Memoria caché', lang: 'es' },
          source: { quote: 'La jerarquía de memoria moderna escalona memorias estáticas ultrarrápidas SRAM (L1, L2, L3)', line: 61 },
        },
        {
          id: 'mem-dram-nvme-hbm',
          title: 'DRAM DDR5, 3D NAND y Memoria HBM3e',
          text: 'Desde condensadores que requieren refresco hasta pilas tridimensionales de silicio unidas con TSV a 3 TB/s.',
          fact: 'La memoria HBM3e apila verticalmente 8 a 12 matrices de silicio alrededor de las GPUs para entrenar LLMs.',
          mnemonicCue: 'Un rascacielos monolítico de chips de memoria superpuestos interconectados por pilares de luz vertical.',
          model: { type: 'procedural', parts: ramStick() },
          imageSearch: { wikiTitle: 'High Bandwidth Memory', lang: 'es' },
          source: { quote: 'Los discos de estado sólido NVMe sobre bus PCIe y la memoria apilada HBM3e (High Bandwidth Memory)', line: 63 },
        },
      ],
    },

    // -----------------------------------------------------------------------------------------
    // SALA 12: SUPERCOMPUTADORAS & CÓMPUTO CUÁNTICO (CONVERGENCIA FINAL)
    // -----------------------------------------------------------------------------------------
    {
      id: 'r-quantum-future',
      name: 'Frontera de la Computación: Supercómputo y Qubits',
      description: 'Supercomputación a escala Exaflop, superposición cuántica, entrelazamiento y criostatos a 15 mK.',
      theme: 'cyberpunk',
      palette: { primary: '#06b6d4', fogColor: '#083344' },
      monument: 'crystal',
      diorama: {
        title: 'Laboratorio Criogénico Cuántico',
        terrain: 'interior',
        time: 'night',
        palette: { ground: '#09090b', sky: '#06b6d4', accent: '#fbbf24' },
        props: [
          { kind: 'figure', pose: 'pointing', pos: [0, 0], scale: 1.1, color: '#0891b2', label: 'Físico Cuántico' },
          { kind: 'custom', pos: [0, 2], scale: 1.6, parts: quantumQubitChamber(), label: 'Refrigerador de Dilución Cuántica Dorado' },
          { kind: 'custom', pos: [-3, 1], scale: 1.2, parts: dipMicrochip(), label: 'Chip Cuántico Transmón' },
        ],
      },
      pieces: [
        {
          id: 'q-supercomputer',
          title: 'Supercomputación a Escala Exaflop',
          text: 'Sistemas que realizan más de 1.000.000.000.000.000.000 operaciones matemáticas de punto flotante por segundo.',
          fact: 'Supercomputadoras como Frontier consumen más de 20 megavatios de electricidad para simular el clima y el cosmos.',
          mnemonicCue: 'Una muralla de bastidores de servidores negros bañados en refrigerante líquido con cascadas de datos fluorescentes.',
          model: { type: 'procedural', parts: pcTower() },
          imageSearch: { wikiTitle: 'Supercomputadora', lang: 'es' },
          source: { quote: 'Las supercomputadoras modernas como Frontier superan el Exaflop (un trillón de operaciones)', line: 66 },
        },
        {
          id: 'q-qubit-superposition',
          title: 'El Qubit y la Superposición Cuántica',
          text: 'A diferencia del bit clásico (0 o 1), el qubit existe en una combinación lineal probabilística de ambos estados simultáneamente.',
          fact: 'Con 300 qubits perfectamente entrelazados se pueden representar más estados que partículas en el universo observable.',
          mnemonicCue: 'Una esfera de luz cian flotante que oscila en múltiples dimensiones al mismo tiempo sin decidir su color.',
          model: { type: 'procedural', parts: quantumQubitChamber() },
          imageSearch: { wikiTitle: 'Cúbit', lang: 'es' },
          source: { quote: 'La computación cuántica reemplaza el bit binario por el Qubit superconductor, aprovechando principios de la física cuántica', line: 67 },
        },
        {
          id: 'q-dilution-fridge',
          title: 'El Criostato Dorado a 15 Milikelvin',
          text: 'Refrigerador de dilución que enfría el procesador cuántico casi al cero absoluto (-273,13 °C) para evitar la decoherencia térmica.',
          fact: 'Es uno de los puntos más fríos conocidos en todo el universo conocido, superando la frialdad del espacio profundo.',
          mnemonicCue: 'Una lámpara de araña de discos de oro y tubos de plata que congela el aire circundante en copos de helio relucientes.',
          model: { type: 'procedural', parts: quantumQubitChamber() },
          imageSearch: { wikiTitle: 'Refrigerador de dilución', lang: 'es' },
          source: { quote: 'Los procesadores cuánticos operan dentro de criostatos de dilución de helio enfriados a 15 milikelvin', line: 69 },
        },
      ],
    },
  ],
  graph: {
    start: 'r-origin',
    edges: [
      // Ramificación desde el origen
      { from: 'r-origin', to: 'r-turing', kind: 'next' },
      { from: 'r-origin', to: 'r-tubes', kind: 'next' },
      { from: 'r-origin', to: 'r-logic-gates', kind: 'next' },

      // Ruta A: Pioneros
      { from: 'r-turing', to: 'r-hopper', kind: 'next' },
      { from: 'r-hopper', to: 'r-lovelace-shannon', kind: 'next' },
      { from: 'r-lovelace-shannon', to: 'r-von-neumann', kind: 'next' },

      // Ruta B: Evolución de Máquinas
      { from: 'r-tubes', to: 'r-transistors', kind: 'next' },
      { from: 'r-transistors', to: 'r-microprocessors', kind: 'next' },
      { from: 'r-microprocessors', to: 'r-quantum-future', kind: 'next' },

      // Ruta C: Componentes
      { from: 'r-logic-gates', to: 'r-cpu-evolution', kind: 'next' },
      { from: 'r-cpu-evolution', to: 'r-memory-evolution', kind: 'next' },

      // Conexiones transversales y convergencias
      { from: 'r-turing', to: 'r-tubes', kind: 'related' },
      { from: 'r-von-neumann', to: 'r-cpu-evolution', kind: 'related' },
      { from: 'r-von-neumann', to: 'r-quantum-future', kind: 'related' },
      { from: 'r-memory-evolution', to: 'r-quantum-future', kind: 'related' },
    ],
  },
})
