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
  apolloGuidanceComputer,
  cpuDieLandscape,
  codeMonolith,
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

export const computingHistoryNotes = `Por amor al arte: Génesis, Pioneros, Máquinas y Mundos Digitales

I. Los Orígenes Mecánicos y el Telar Simbólico
El cómputo nació milenios antes del silicio. Desde el ábaco mesopotámico y los algoritmos formalizados por Al-Juarismi en Bagdad, la humanidad buscó automatizar el razonamiento lógico.
En 1804, Joseph Marie Jacquard diseñó un telar automatizado que leía tarjetas perforadas de madera, demostrando que instrucciones simbólicas podían dirigir la acción mecánica física.
Charles Babbage concibió la Máquina Diferencial y posteriormente la Máquina Analítica, la primera computadora de propósito general programable de la historia con molino (CPU) y almacén (memoria).
El telar de Jacquard tejía retratos con 24.000 tarjetas perforadas, estableciendo el puente conceptual entre tela, agujeros y código binario.

II. Ada Lovelace: La Primera Programadora
Ada Lovelace publicó en 1843 sus Notas sobre la Máquina Analítica de Babbage, conteniendo el primer algoritmo computacional para calcular los números de Bernoulli.
Lovelace comprendió antes que nadie que las máquinas podían manipular cualquier símbolo abstracto, componer música y procesar gráficos, no solo números aritméticos.
"La Máquina Analítica teje patrones algebraicos tal como el telar de Jacquard teje flores y hojas", escribió Lovelace en una de las frases más visionarias de la historia.

III. Alan Turing y la Cripto-Guerra de Bletchley Park
En 1936, Alan Turing concibió en Cambridge el concepto de la Máquina de Turing Universal, demostrando los límites matemáticos del cálculo y el problema de la parada (Halting Problem).
Durante la Segunda Guerra Mundial en Bletchley Park (Hut 8), Turing dirigió el desarrollo de la Bombe electro-mecánica, descifrando los mensajes navales de la máquina Enigma alemana.
Turing propuso en 1950 el célebre Test de Turing para evaluar la inteligencia artificial de las máquinas y modeló la morfogénesis biológica a través de matemáticas no lineales.

IV. Grace Hopper y el Nacimiento del Software Moderno
Grace Murray Hopper, matemática y contraalmirante de la Armada de EE.UU., fue una de las arquitectas fundamentales del software moderno en la Universidad de Harvard.
El 9 de septiembre de 1947, operando la computadora electromecánica Harvard Mark II, Hopper y su equipo encontraron una polilla atrapada en el relé número 70 del Panel F, acuñando el término "debugging".
Hopper inventó en 1952 el sistema A-0, el primer compilador de la historia que traducía pseudocódigo en lenguaje máquina, y lideró la creación del lenguaje COBOL para negocios.
Para ilustrar la latencia eléctrica a sus oficiales, Hopper distribuía alambres cortados a exactamente 30 centímetros: la distancia física que la luz viaja en un nanosegundo en el vacío.

V. Margaret Hamilton: El Software que Salvó el Alunizaje del Apolo 11
Margaret Hamilton dirigió la División de Ingeniería de Software del MIT Instrumentation Laboratory, desarrollando el software de navegación del Apollo Guidance Computer (AGC).
Hamilton acuñó el término formal "Ingeniería de Software" para exigir el mismo rigor y respeto que las disciplinas de ingeniería mecánica y eléctrica.
El 20 de julio de 1969, a tres minutos del alunizaje en la Luna, el AGC se sobrecargó con datos de radar no requeridos; el sistema de prioridades de Hamilton descartó tareas secundarias y salvó la misión del Apolo 11.
La famosa fotografía de Hamilton muestra una torre de listados de código ensamblador impresos en papel que alcanza exactamente su estatura física.

VI. Unix, C y el Movimiento del Software Libre
En 1969, Ken Thompson y Dennis Ritchie crearon en Bell Labs el sistema operativo Unix y el lenguaje de programación C, estableciendo la filosofía de herramientas pequeñas y tuberías (pipes).
Richard Stallman fundó en 1983 el Proyecto GNU y redactó la Licencia Pública General (GPL), consagrando las cuatro libertades esenciales del software libre.
Linus Torvalds publicó en 1991 el kernel Linux desde su dormitorio en Helsinki, desatando la mayor colaboración comunitaria global que hoy impulsa servidores, nubes y smartphones.

VII. John von Neumann y la Arquitectura del Programa Almacenado
En 1945, John von Neumann redactó el célebre informe "First Draft of a Report on the EDVAC", formalizando la arquitectura que gobierna casi todas las computadoras modernas.
La arquitectura Von Neumann unificó en una misma memoria física compartida tanto las instrucciones del programa como los datos de ejecución, eliminando el re-cableado manual.
El "Cuello de Botella de Von Neumann" surge de la limitación del bus de datos compartido entre el procesador y la memoria principal, forzando la evolución de jerarquías de caché complejas.
Von Neumann también sentó las bases de los autómatas celulares autorreplicantes y diseñó el computador MANIAC I para simulaciones nucleares de Montecarlo.

VIII. La Era de las Válvulas y los Gigantes: ENIAC
El ENIAC (Electronic Numerical Integrator and Computer), concluido en 1945 en la Universidad de Pensilvania por Eckert y Mauchly, fue el primer computador electrónico de propósito general.
Con más de 18.000 válvulas de vacío termiónicas, ocupaba 167 metros cuadrados y consumía 150 kilovatios de potencia eléctrica, calculando trayectorias balísticas a velocidades sin precedentes.
La programación del ENIAC era realizada manualmente por seis brillantes matemáticas (Kay McNulty, Betty Jennings, Betty Snyder, Marlyn Wescoff, Frances Bilas y Ruth Lichterman) configurando cables en paneles.
Las primeras memorias electrónicas utilizaban tubos de retardo de ondas acústicas en mercurio líquido, donde los pulsos ultrasónicos circulaban en bucles de recirculación continua.

IX. La Revolución del Estado Sólido & Mainframes IBM
La invención del transistor de contacto puntual en 1947 por John Bardeen, Walter Brattain y William Shockley en Bell Labs sustituyó las frágiles válvulas por semiconductores de estado sólido.
Robert Noyce y Jean Hoerni en Fairchild Semiconductor desarrollaron el proceso planar de silicio, permitiendo imprimir transistores, pistas y resistencias en una misma oblea monolítica.
En 1964, IBM presentó la familia System/360, revolucionando la industria al introducir por primera vez compatibilidad de arquitectura y software entre computadoras de diferente potencia y tamaño.
Los centros de cómputo adoptaron el almacenamiento en cintas magnéticas de 9 pistas y los discos duros de cabezal móvil Winchester, introducidos por IBM en 1973 con el modelo 3340.

X. El Microchip y la Revolución del Computador Personal
En 1971, Ted Hoff, Federico Faggin y Masatoshi Shima crearon el Intel 4004, el primer microprocesador monolítico de 4 bits que concentró 2.300 transistores en una pastilla de silicio de 12 mm².
Gordon Moore formuló la Ley de Moore en 1965, prediciendo que el número de transistores en un circuito integrado se duplicaría aproximadamente cada dos años con una reducción constante de costo.
El Homebrew Computer Club en California incubó la revolución del PC, dando origen al Apple II diseñado por Steve Wozniak en 1977, con gráficos en color y arquitectura abierta.
En 1981, IBM lanzó el IBM PC modelo 5150 con procesador Intel 8088 y sistema operativo MS-DOS de Microsoft, estableciendo la arquitectura estándar x86 que dominaría la industria.

XI. Viaje al Interior del Silicio: La Arquitectura del Die
Dentro de un procesador moderno habitan más de 100 mil millones de transistores FinFET y GAAFET conectados por kilómetros de pistas microscópicas de cobre de apenas unos nanómetros.
La Unidad Aritmético-Lógica (ALU) forja operaciones aritméticas y booleanas en picosegundos, rodeada por registros de trabajo y colas de decodificación de microinstrucciones.
La jerarquía de cachés multinivel (L1 de 1 ciclo, L2 de 4 ciclos, L3 compartida de 15 ciclos) amortigua la lentitud de la memoria externa y mantiene a los núcleos saciados de datos.
El bus interno de interconexión (Infinity Fabric, Mesh o Ring Bus) actúa como una autopista de fotones y electrones a terabytes por segundo entre núcleos y controladores de memoria.

XII. El Ciberespacio y el Mundo del Código
El código fuente es la única materia abstracta que puede autoejecutarse y alterar el mundo físico en tiempo real a través de millones de dispositivos interconectados.
Desde el código binario y el lenguaje ensamblador hasta lenguajes expresivos modernos como TypeScript, Rust y Python, el software es poesía lógica en acción.
Los compiladores traducen la intención humana en árboles de sintaxis abstracta (AST), optimizando el flujo de datos mediante grafos de control antes de emitir lenguaje de máquina.
Las redes globales y los sistemas distribuidos convierten millones de computadoras individuales en un único organismo computacional planetario.`

export const computingHistoryMuseum: Museum = MuseumSchema.parse({
  title: 'Por amor al arte: Monumento a la Computación y sus Pioneros',
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
      description: 'El umbral del razonamiento automático: algoritmos de Bagdad, telar de Jacquard y las máquinas de vapor de Babbage.',
      theme: 'ancient',
      palette: { primary: '#d97706', fogColor: '#1c1917' },
      monument: 'ring_system',
      pieces: [
        {
          id: 'orig-abacus-algo',
          title: 'Algoritmos y Cálculo Simbólico',
          text: 'Al-Juarismi formalizó en el siglo IX las reglas paso a paso para la resolución de ecuaciones algebraicas.',
          fact: 'La palabra "algoritmo" proviene de su nombre latinizado, fundando la idea de procedimiento ejecutable.',
          mnemonicCue: 'Un pergamino de seda dorada que despliega ecuaciones matemáticas flotando sobre un ábaco de bronce milenario.',
          model: { type: 'procedural', parts: systemClock() },
          imageSearch: { wikiTitle: 'Al-Juarismi', lang: 'es' },
          source: { quote: 'El cómputo nació milenios antes del silicio. Desde el ábaco mesopotámico y los algoritmos formalizados por Al-Juarismi', line: 4 },
        },
        {
          id: 'orig-jacquard',
          title: 'Telar de Jacquard y Tarjetas Perforadas',
          text: 'En 1804 Jacquard automatizó el tejido de patrones complejos leyendo tarjetas perforadas de madera.',
          fact: 'Un retrato de Jacquard requirió 24.000 tarjetas perforadas para ser tejido automáticamente con hilos de seda.',
          mnemonicCue: 'Un telar monumental de roble que teje telas luminosas alimentado por tiras de madera con orificios ardientes.',
          model: { type: 'procedural', parts: punchCard() },
          imageSearch: { wikiTitle: 'Telar de Jacquard', lang: 'es' },
          source: { quote: 'Joseph Marie Jacquard diseñó un telar automatizado que leía tarjetas perforadas de madera', line: 5 },
        },
        {
          id: 'orig-babbage-diff',
          title: 'Máquina Diferencial de Babbage',
          text: 'Calculadora mecánica diseñada para tabular polinomios usando el método matemático de diferencias finitas.',
          fact: 'Eliminaba los errores humanos de los tipógrafos en las tablas náuticas y astronómicas de navegación.',
          mnemonicCue: 'Una columna vertical de ruedas dentadas de latón que giran con precisión de relojería suiza.',
          model: { type: 'procedural', parts: controlUnit() },
          imageSearch: { wikiTitle: 'Máquina diferencial', lang: 'es' },
          source: { quote: 'Charles Babbage concibió la Máquina Diferencial y posteriormente la Máquina Analítica', line: 6 },
        },
        {
          id: 'orig-babbage-analytical',
          title: 'Máquina Analítica de Babbage',
          text: 'Primer diseño de computadora programable de propósito general: poseía molino (CPU) y almacén (memoria).',
          fact: 'Accionada por vapor, usaba tarjetas de Jacquard tanto para instrucciones como para variables de datos.',
          mnemonicCue: 'Una catedral de engranajes de bronce de diez metros de alto haciendo girar columnas de cilindros dentados.',
          model: { type: 'procedural', parts: motherboard() },
          imageSearch: { wikiTitle: 'Máquina analítica', lang: 'es' },
          source: { quote: 'la primera computadora de propósito general programable de la historia con molino (CPU) y almacén (memoria)', line: 6 },
        },
        {
          id: 'orig-weaving-algebra',
          title: 'El Tejido del Álgebra',
          text: 'La síntesis teórica que unió la física textil con la abstracción matemática del cómputo universal.',
          fact: 'La idea de tarjeta perforada sobrevivió más de 170 años hasta el final de la era de los mainframes.',
          mnemonicCue: 'Hilos dorados que se entrelazan en el aire formando matrices de bits y puertas lógicas transparentes.',
          model: { type: 'procedural', parts: dataBus() },
          imageSearch: { wikiTitle: 'Tarjeta perforada', lang: 'es' },
          source: { quote: 'estableciendo el puente conceptual entre tela, agujeros y código binario', line: 7 },
        },
      ],
    },

    // -----------------------------------------------------------------------------------------
    // SALA 2: ADA LOVELACE
    // -----------------------------------------------------------------------------------------
    {
      id: 'r-lovelace',
      name: 'Ada Lovelace & La Ciencia Poética',
      description: 'La primera programadora de la historia, la visión de manipular símbolos abstractos y el algoritmo de Bernoulli.',
      theme: 'cathedral',
      palette: { primary: '#a855f7', fogColor: '#2e1065' },
      monument: 'crystal',
      diorama: {
        title: 'El Salón de Babbage y Lovelace en Londres',
        terrain: 'interior',
        time: 'sunset',
        palette: { ground: '#3b0764', sky: '#c084fc', accent: '#fbbf24' },
        props: [
          { kind: 'figure', pose: 'standing', pos: [0, 0], scale: 1.1, color: '#9333ea', label: 'Ada Lovelace con sus manuscritos' },
          { kind: 'figure', pose: 'pointing', pos: [2, 0], scale: 1.15, color: '#7e22ce', label: 'Charles Babbage' },
          { kind: 'custom', pos: [-2, 1], scale: 1.3, parts: punchCard(), count: 3, spread: 1, label: 'Tarjetas del Algoritmo de Bernoulli' },
          { kind: 'column', pos: [-4, -3], scale: 1.4, color: '#581c87', label: 'Columna Victoriana' },
          { kind: 'column', pos: [4, -3], scale: 1.4, color: '#581c87', label: 'Columna Victoriana' },
        ],
      },
      pieces: [
        {
          id: 'lov-bernoulli',
          title: 'El Primer Algoritmo de la Historia (1843)',
          text: 'Programa escrito por Ada Lovelace para calcular la serie de números de Bernoulli en la Máquina Analítica.',
          fact: 'Incluía bucles iterativos condicionales (loops), bifurcaciones y asignación de registros de memoria.',
          mnemonicCue: 'Una pluma victoriana de plata que escribe en el aire líneas de código flotante que se transforman en números.',
          model: { type: 'procedural', parts: registerFile() },
          imageSearch: { wikiTitle: 'Ada Lovelace', lang: 'es' },
          source: { quote: 'Ada Lovelace publicó en 1843 sus Notas sobre la Máquina Analítica de Babbage, conteniendo el primer algoritmo', line: 10 },
        },
        {
          id: 'lov-poetic-science',
          title: 'Ciencia Poética y Abstracción',
          text: 'Visión interdisciplinaria de Lovelace que unió el rigor analítico con la imaginación metafísica.',
          fact: 'Hija del poeta Lord Byron, aplicó la sensibilidad literaria para comprender el potencial de las máquinas.',
          mnemonicCue: 'Un arpa de cristal cuyos acordes generan figuras geométricas fractales en el cielo de la catedral.',
          model: { type: 'procedural', parts: systemClock() },
          imageSearch: { wikiTitle: 'Lord Byron', lang: 'es' },
          source: { quote: 'Lovelace comprendió antes que nadie que las máquinas podían manipular cualquier símbolo abstracto', line: 11 },
        },
        {
          id: 'lov-music-graphics',
          title: 'Música y Arte Computacional',
          text: 'Lovelace predijo que las máquinas podrían componer piezas musicales elaboradas y procesar imágenes.',
          fact: 'Esta intuición anticipó la revolución del software multimedia 140 años antes del computador personal.',
          mnemonicCue: 'Una partitura musical luminosa que se transforma en un mapa de píxeles multicolores suspendido.',
          model: { type: 'procedural', parts: codeMonolith() },
          imageSearch: { wikiTitle: 'Música por computadora', lang: 'es' },
          source: { quote: 'componer música y procesar gráficos, no solo números aritméticos', line: 11 },
        },
        {
          id: 'lov-weaving-metaphor',
          title: 'La Metáfora del Telar Algebraico',
          text: 'Su célebre principio: "La máquina analítica teje patrones algebraicos igual que el telar de Jacquard flores y hojas".',
          fact: 'Publicado en las notas de traducción del artículo del ingeniero militar italiano Luigi Menabrea.',
          mnemonicCue: 'Un tapiz de seda violeta bordado con fórmulas diferenciales que florecen como rosas plateadas.',
          model: { type: 'procedural', parts: punchCard() },
          imageSearch: { wikiTitle: 'Luigi Federico Menabrea', lang: 'es' },
          source: { quote: 'La Máquina Analítica teje patrones algebraicos tal como el telar de Jacquard teje flores y hojas', line: 12 },
        },
        {
          id: 'lov-legacy',
          title: 'El Lenguaje Ada del Pentágono',
          text: 'En 1980, el Departamento de Defensa de EE.UU. bautizó en su honor el lenguaje Ada para sistemas de misión crítica.',
          fact: 'Se diseñó con tipado fuerte y concurrencia estricta para la aviación militar y la exploración espacial.',
          mnemonicCue: 'Un escudo de acero con el sello de Ada grabado que desvía rayos de errores de desbordamiento.',
          model: { type: 'procedural', parts: aluChip() },
          imageSearch: { wikiTitle: 'Ada (lenguaje de programación)', lang: 'es' },
          source: { quote: 'Ada Lovelace publicó en 1843 sus Notas sobre la Máquina Analítica de Babbage', line: 10 },
        },
      ],
    },

    // -----------------------------------------------------------------------------------------
    // SALA 3: ALAN TURING & BLETCHLEY PARK
    // -----------------------------------------------------------------------------------------
    {
      id: 'r-turing',
      name: 'Alan Turing & Bletchley Park',
      description: 'La máquina universal, el criptoanálisis de Enigma en Hut 8, el test de inteligencia y la morfogénesis.',
      theme: 'void',
      palette: { primary: '#38bdf8', fogColor: '#0c4a6e' },
      monument: 'dodecahedron',
      diorama: {
        title: 'Hut 8 y la Máquina Bombe en Bletchley Park',
        terrain: 'interior',
        time: 'night',
        palette: { ground: '#1c1917', sky: '#0284c7', accent: '#fbbf24' },
        props: [
          { kind: 'figure', pose: 'seated', pos: [0, 0], scale: 1.2, color: '#0369a1', label: 'Alan Turing en su mesa' },
          { kind: 'custom', pos: [-3, 2], scale: 1.5, parts: turingBombeRotor(), label: 'Rotores Bombe Criptoanalítica' },
          { kind: 'custom', pos: [3, 2], scale: 1.2, parts: punchCard(), label: 'Cintas telegráficas Enigma' },
          { kind: 'flag', pattern: 'stripes', pos: [-6, -4], color: '#dc2626', secondary: '#ffffff', label: 'Estandarte Aliado' },
          { kind: 'figure', pose: 'pointing', pos: [2, -1], scale: 1.1, color: '#0284c7', label: 'Criptoanalista auxiliar' },
        ],
      },
      pieces: [
        {
          id: 'tur-machine',
          title: 'Máquina Universal de Turing (1936)',
          text: 'Modelo formal de cálculo con una cinta infinita de celdas y un cabezal de lectura y escritura.',
          fact: 'Demostró que ningún algoritmo puede resolver de forma general el problema de la parada (Halting Problem).',
          mnemonicCue: 'Una cinta de película transparente infinita que atraviesa los muros de la sala girando sobre una aguja de luz.',
          model: { type: 'procedural', parts: dataBus() },
          imageSearch: { wikiTitle: 'Máquina de Turing', lang: 'es' },
          source: { quote: 'Alan Turing concibió en Cambridge el concepto de la Máquina de Turing Universal, demostrando los límites matemáticos', line: 15 },
        },
        {
          id: 'tur-bombe',
          title: 'La Bombe Criptoanalítica',
          text: 'Dispositivo electromecánico con 36 réplicas de la máquina Enigma girando a alta velocidad.',
          fact: 'Redujo el tiempo de descifrado de días a minutos, acortando la Segunda Guerra Mundial en al menos dos años.',
          mnemonicCue: 'Un muro gigantesco de tambores de bronce girando acompasadamente con chispas azules entre sus contactos.',
          model: { type: 'procedural', parts: turingBombeRotor() },
          imageSearch: { wikiTitle: 'Bombe', lang: 'es' },
          source: { quote: 'Turing dirigió el desarrollo de la Bombe electro-mecánica, un dispositivo que descifró los mensajes navales', line: 16 },
        },
        {
          id: 'tur-test',
          title: 'El Test de Turing y la IA (1950)',
          text: 'Criterio operacional de cognición de máquinas: el "Juego de la Imitación" frente a un juez interrogador ciego.',
          fact: 'Publicado en su ensayo "Computing Machinery and Intelligence", seminal para toda la disciplina de IA.',
          mnemonicCue: 'Un espejo veneciano que refleja por un lado una mente humana y por el otro un laberinto de cables brillantes.',
          model: { type: 'procedural', parts: controlUnit() },
          imageSearch: { wikiTitle: 'Test de Turing', lang: 'es' },
          source: { quote: 'Turing propuso en 1950 el célebre Test de Turing para evaluar la inteligencia artificial', line: 17 },
        },
        {
          id: 'tur-morphogenesis',
          title: 'Morfogénesis y Biología Matemática',
          text: 'En 1952 modeló cómo reacciones químicas difusivas generan patrones biológicos como rayas de cebra o espirales.',
          fact: 'Fue una de las primeras aplicaciones del cómputo para resolver ecuaciones diferenciales no lineales en biología.',
          mnemonicCue: 'Gotas de tinta química que caen en un estanque y forman espontáneamente pétalos de flores fractales.',
          model: { type: 'procedural', parts: systemClock() },
          imageSearch: { wikiTitle: 'Morfogénesis', lang: 'es' },
          source: { quote: 'e investigó la morfogénesis biológica a través de modelos computacionales matemáticos', line: 17 },
        },
        {
          id: 'tur-ace',
          title: 'El Motor de Cómputo Automático (ACE)',
          text: 'Diseño pionero de computadora de programa almacenado ultra-rápida con memoria de mercurio en el NPL.',
          fact: 'Turing priorizó la velocidad de ciclo y el microcódigo optimizado frente a la complejidad del hardware.',
          mnemonicCue: 'Un reactor de tubos plateados donde paquetes de pulsos electrónicos corren como bólidos de luz.',
          model: { type: 'procedural', parts: motherboard() },
          imageSearch: { wikiTitle: 'Pilot ACE', lang: 'es' },
          source: { quote: 'Alan Turing concibió en Cambridge el concepto de la Máquina de Turing Universal', line: 15 },
        },
      ],
    },

    // -----------------------------------------------------------------------------------------
    // SALA 4: GRACE HOPPER & COMPILADORES
    // -----------------------------------------------------------------------------------------
    {
      id: 'r-hopper',
      name: 'Grace Hopper & La Alborada del Software',
      description: 'El primer bug en Harvard Mark II, la invención del compilador A-0, el lenguaje COBOL y el nanosegundo.',
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
          { kind: 'custom', pos: [2, 1], scale: 1.4, parts: hopperRelayBug(), label: 'Relé 70 con la Polilla Original' },
          { kind: 'custom', pos: [-2, 1], scale: 1.2, parts: punchCard(), label: 'Bitácora del 9 de septiembre de 1947' },
          { kind: 'figure', pose: 'seated', pos: [-3, 0], scale: 1.0, color: '#065f46', label: 'Técnico de Harvard' },
        ],
      },
      pieces: [
        {
          id: 'hop-bug',
          title: 'El Primer "Bug" Documentado (1947)',
          text: 'Una polilla real atrapada entre los contactos del relé número 70 detuvo la máquina Harvard Mark II.',
          fact: 'Fue extraída y pegada con cinta adhesiva en el cuaderno de bitácora del laboratorio militar.',
          mnemonicCue: 'Una polilla dorada gigantesca suspendida inmóvil entre dos polos eléctricos de cristal resplandeciente.',
          model: { type: 'procedural', parts: hopperRelayBug() },
          imageSearch: { wikiTitle: 'Grace Murray Hopper', lang: 'es' },
          source: { quote: 'encontraron una polilla atrapada en el relé número 70 del Panel F, acuñando el término "debugging"', line: 21 },
        },
        {
          id: 'hop-compiler',
          title: 'Sistema A-0: El Primer Compilador (1952)',
          text: 'Hopper demostró que las computadoras podían traducir instrucciones en lenguaje legible humano a código binario.',
          fact: 'Sus pares afirmaban que las máquinas no podían entender palabras, solo procesar operaciones aritméticas.',
          mnemonicCue: 'Un prisma de cristal que refracta un texto en inglés convirtiéndolo en un haz de ceros y unos.',
          model: { type: 'procedural', parts: aluChip() },
          imageSearch: { wikiTitle: 'Compilador', lang: 'es' },
          source: { quote: 'Hopper inventó en 1952 el sistema A-0, el primer compilador de la historia que traducía pseudocódigo', line: 22 },
        },
        {
          id: 'hop-cobol',
          title: 'COBOL: El Lenguaje Universal de Negocios',
          text: 'Lenguaje creado en 1959 basado en FLOW-MATIC de Hopper, redactado en inglés llano para transacciones bancarias.',
          fact: 'Más del 70% de las transacciones financieras mundiales todavía ejecutan código COBOL en mainframes.',
          mnemonicCue: 'Un libro mayor mercantil con encuadernación de cuero cuyas páginas emiten código binario indestructible.',
          model: { type: 'procedural', parts: codeMonolith() },
          imageSearch: { wikiTitle: 'COBOL', lang: 'es' },
          source: { quote: 'y lideró la creación del lenguaje COBOL para negocios', line: 22 },
        },
        {
          id: 'hop-nanosecond',
          title: 'El Nanosegundo de Grace Hopper',
          text: 'Cables de exactamente 30 cm de largo que Hopper entregaba para ilustrar físicamente el retardo de propagación.',
          fact: 'La luz recorre 29,979 centímetros en el vacío en una milmillonésima de segundo.',
          mnemonicCue: 'Un filamento de oro de 30 centímetros que pulsa rítmicamente liberando relámpagos de fotones cada nanosegundo.',
          model: { type: 'procedural', parts: systemClock() },
          imageSearch: { wikiTitle: 'Nanosegundo', lang: 'es' },
          source: { quote: 'Hopper distribuía alambres cortados a exactamente 30 centímetros: la distancia física que la luz viaja en un nanosegundo', line: 23 },
        },
        {
          id: 'hop-admiral',
          title: 'La Gran Dama del Software',
          text: 'Se retiró de la Armada con el rango de Contraalmirante a los 79 años, siendo la oficial en servicio más longeva.',
          fact: 'El destructor con misiles guiados USS Hopper (DDG-70) fue bautizado en su honor.',
          mnemonicCue: 'Un ancla naval forjada en aleación de silicio que reposa en el centro del altar de la sala.',
          model: { type: 'procedural', parts: motherboard() },
          imageSearch: { wikiTitle: 'USS Hopper (DDG-70)', lang: 'es' },
          source: { quote: 'Grace Murray Hopper, matemática y contraalmirante de la Armada de EE.UU.', line: 20 },
        },
      ],
    },

    // -----------------------------------------------------------------------------------------
    // SALA 5: MARGARET HAMILTON & EL APOLO 11
    // -----------------------------------------------------------------------------------------
    {
      id: 'r-hamilton-apollo',
      name: 'Margaret Hamilton & El Código de la Luna',
      description: 'El nacimiento de la Ingeniería de Software, la interfaz DSKY y el sistema de prioridades que salvó el Apolo 11.',
      theme: 'void',
      palette: { primary: '#38bdf8', fogColor: '#0f172a' },
      monument: 'ring_system',
      diorama: {
        title: 'Módulo Lunar Apolo 11 y el Software del MIT',
        terrain: 'interior',
        time: 'night',
        palette: { ground: '#09090b', sky: '#1e293b', accent: '#38bdf8' },
        props: [
          { kind: 'figure', pose: 'standing', pos: [0, 0], scale: 1.15, color: '#0284c7', label: 'Margaret Hamilton junto a su código' },
          { kind: 'custom', pos: [-2, 1], scale: 1.4, parts: apolloGuidanceComputer(), label: 'Terminal DSKY del AGC' },
          { kind: 'custom', pos: [2, 1], scale: 1.3, parts: magneticCoreMemory(), label: 'Memoria Core Rope Memory (LOL)' },
          { kind: 'flag', pattern: 'saltire', pos: [4, -2], color: '#3b82f6', secondary: '#ffffff', label: 'Emblema de la Misión Apolo' },
        ],
      },
      pieces: [
        {
          id: 'ham-software-eng',
          title: 'El Nacimiento de la Ingeniería de Software',
          text: 'Hamilton acuñó el término "Software Engineering" para que la programación tuviera la misma categoría que la ingeniería de hardware.',
          fact: 'Sus críticos se burlaban al inicio, pero el éxito absoluto en 11 misiones tripuladas consagró la disciplina.',
          mnemonicCue: 'Un compás de oro gigantesco que traza planos matemáticos de código sobre el suelo de la sala.',
          model: { type: 'procedural', parts: codeMonolith() },
          imageSearch: { wikiTitle: 'Margaret Hamilton (científica)', lang: 'es' },
          source: { quote: 'Hamilton acuñó el término formal "Ingeniería de Software" para exigir el mismo rigor y respeto', line: 27 },
        },
        {
          id: 'ham-agc-dsky',
          title: 'El Apollo Guidance Computer (DSKY)',
          text: 'Interfaz con teclado y displays numéricos de fósforo verde donde los astronautas ingresaban órdenes VERB / NOUN.',
          fact: 'Fue una de las primeras computadoras en utilizar circuitos integrados de silicio en la historia aeroespacial.',
          mnemonicCue: 'Un panel con teclas fosforescentes que titila con números verdes marcando la altitud sobre el mar de la tranquilidad.',
          model: { type: 'procedural', parts: apolloGuidanceComputer() },
          imageSearch: { wikiTitle: 'Apollo Guidance Computer', lang: 'es' },
          source: { quote: 'desarrollando el software de navegación del Apollo Guidance Computer (AGC)', line: 26 },
        },
        {
          id: 'ham-1202-alarm',
          title: 'La Alarma 1202 y el Alunizaje del Apolo 11',
          text: 'A 3 minutos de alunizar, el radar saturó la CPU. El software de Hamilton descartó tareas bajas y ejecutó los propulsores.',
          fact: 'Si el sistema no hubiera tenido planificación asíncrona por prioridades, el Apolo 11 se habría estrellado.',
          mnemonicCue: 'Una sirena de luz amarilla que se apaga sola cuando un escudo de software inteligente toma el control.',
          model: { type: 'procedural', parts: controlUnit() },
          imageSearch: { wikiTitle: 'Apolo 11', lang: 'es' },
          source: { quote: 'el sistema de prioridades de Hamilton descartó tareas secundarias y salvó la misión del Apolo 11', line: 28 },
        },
        {
          id: 'ham-core-rope',
          title: 'Memoria Core Rope: El Tejido "LOL"',
          text: 'El software de vuelo se tejía a mano con alambres pasando por núcleos magnéticos (Little Old Lady memory).',
          fact: 'Un cable pasando por un núcleo era un 1; pasando por fuera era un 0. Era memoria ROM físicamente indestructible.',
          mnemonicCue: 'Un telar con hilos de cobre y anillos de ferrita dorada que blindan los programas contra radiación cósmica.',
          model: { type: 'procedural', parts: magneticCoreMemory() },
          imageSearch: { wikiTitle: 'Memoria de núcleo magnético', lang: 'es' },
          source: { quote: 'desarrollando el software de navegación del Apollo Guidance Computer (AGC)', line: 26 },
        },
        {
          id: 'ham-code-tower',
          title: 'La Torre de Código Impreso',
          text: 'La célebre fotografía de 1969 donde Margaret Hamilton posa junto a los tomos de código ensamblador de su misma estatura.',
          fact: 'Contenía miles de líneas de código ensamblador hiper-optimizado sin herramientas gráficas modernas.',
          mnemonicCue: 'Una columna vertical de hojas de papel blanco de dos metros de alto que emite una luz azul celeste.',
          model: { type: 'procedural', parts: punchCard() },
          imageSearch: { wikiTitle: 'Margaret Hamilton (científica)', lang: 'es' },
          source: { quote: 'muestra una torre de listados de código ensamblador impresos en papel que alcanza exactamente su estatura física', line: 29 },
        },
      ],
    },

    // -----------------------------------------------------------------------------------------
    // SALA 6: UNIX, C & SOFTWARE LIBRE
    // -----------------------------------------------------------------------------------------
    {
      id: 'r-unix-open-source',
      name: 'Unix, C & El Movimiento del Software Libre',
      description: 'Ken Thompson, Dennis Ritchie, la filosofía de las tuberías de Unix, Richard Stallman y el kernel Linux.',
      theme: 'cyberpunk',
      palette: { primary: '#10b981', fogColor: '#064e3b' },
      monument: 'dodecahedron',
      diorama: {
        title: 'Taller Hacker: De Bell Labs a Helsinki',
        terrain: 'interior',
        time: 'night',
        palette: { ground: '#18181b', sky: '#10b981', accent: '#38bdf8' },
        props: [
          { kind: 'figure', pose: 'seated', pos: [-2, 0], scale: 1.1, color: '#059669', label: 'Ken Thompson y Dennis Ritchie' },
          { kind: 'figure', pose: 'standing', pos: [2, 0], scale: 1.1, color: '#0284c7', label: 'Linus Torvalds en 1991' },
          { kind: 'custom', pos: [0, 2], scale: 1.2, parts: pcTower(), label: 'Servidor PDP-11 ejecutando Unix' },
          { kind: 'custom', pos: [0, 0], scale: 1.3, parts: codeMonolith(), label: 'El Manifiesto GNU de Stallman' },
        ],
      },
      pieces: [
        {
          id: 'unx-philosophy',
          title: 'La Filosofía Unix y las Tuberías (Pipes)',
          text: '"Escribe programas que hagan una sola cosa bien y que trabajen juntos mediante flujos de texto plano".',
          fact: 'Douglas McIlroy inventó las tuberías (|), permitiendo combinar herramientas pequeñas en pipelines infinitos.',
          mnemonicCue: 'Tuberías transparentes que transportan palabras incandescentes de un procesador a otro sin perder una letra.',
          model: { type: 'procedural', parts: dataBus() },
          imageSearch: { wikiTitle: 'Filosofía de Unix', lang: 'es' },
          source: { quote: 'crearon en Bell Labs el sistema operativo Unix y el lenguaje de programación C, estableciendo la filosofía de herramientas pequeñas', line: 32 },
        },
        {
          id: 'unx-c-lang',
          title: 'El Lenguaje C de Dennis Ritchie (1972)',
          text: 'El lenguaje fundacional de los sistemas operativos modernos, combinando eficiencia cercana al hardware con portabilidad.',
          fact: 'El 99% de los núcleos de Linux, Windows, macOS y motores de bases de datos están escritos en C y C++.',
          mnemonicCue: 'Una llave maestra forjada en tungsteno que abre todas las compuertas de la memoria y la CPU.',
          model: { type: 'procedural', parts: codeMonolith() },
          imageSearch: { wikiTitle: 'C (lenguaje de programación)', lang: 'es' },
          source: { quote: 'crearon en Bell Labs el sistema operativo Unix y el lenguaje de programación C', line: 32 },
        },
        {
          id: 'unx-gnu-fsf',
          title: 'Richard Stallman y las Cuatro Libertades GNU',
          text: 'Libertad de usar, estudiar, modificar y redistribuir el software, consagrada en la licencia copyleft GPL.',
          fact: 'Garantizó que los frutos colectivos del software no pudieran ser privatizados ni cerrados a la comunidad.',
          mnemonicCue: 'Un pergamino con un sello verde resplandeciente que disuelve las cerraduras de todos los programas.',
          model: { type: 'procedural', parts: registerFile() },
          imageSearch: { wikiTitle: 'Richard Stallman', lang: 'es' },
          source: { quote: 'Richard Stallman fundó en 1983 el Proyecto GNU y redactó la Licencia Pública General (GPL)', line: 33 },
        },
        {
          id: 'unx-linux-kernel',
          title: 'Linus Torvalds y el Kernel Linux (1991)',
          text: '"Estoy haciendo un sistema operativo libre (solo un pasatiempo, no será grande ni profesional como GNU)".',
          fact: 'Hoy Linux gobierna el 100% de las 500 supercomputadoras más veloces del mundo y miles de millones de teléfonos.',
          mnemonicCue: 'Un pingüino tallado en obsidiana que sostiene el globo terráqueo sobre su lomo iluminado por fibra óptica.',
          model: { type: 'procedural', parts: motherboard() },
          imageSearch: { wikiTitle: 'Linux (núcleo)', lang: 'es' },
          source: { quote: 'Linus Torvalds publicó en 1991 el kernel Linux desde su dormitorio en Helsinki', line: 34 },
        },
        {
          id: 'unx-git',
          title: 'Git y la Colaboración Distribuida',
          text: 'Creado por Torvalds en 2005 para gestionar el código de Linux mediante árboles Merkle criptográficos con SHA.',
          fact: 'Reemplazó el control de versiones centralizado por grafos acíclicos dirigidos (DAGs) inmutables.',
          mnemonicCue: 'Un árbol de cristal que ramifica hojas de colores y las fusiona en un tronco indestructible con cada commit.',
          model: { type: 'procedural', parts: addressBus() },
          imageSearch: { wikiTitle: 'Git', lang: 'es' },
          source: { quote: 'la mayor colaboración comunitaria global que hoy impulsa servidores, nubes y smartphones', line: 34 },
        },
      ],
    },

    // -----------------------------------------------------------------------------------------
    // SALA 7: JOHN VON NEUMANN & PROGRAMA ALMACENADO
    // -----------------------------------------------------------------------------------------
    {
      id: 'r-von-neumann',
      name: 'John von Neumann & El Programa Almacenado',
      description: 'El diseño unificado de memoria, la formalización del EDVAC, el cuello de botella de bus y autómatas celulares.',
      theme: 'cyberpunk',
      palette: { primary: '#06b6d4', fogColor: '#083344' },
      monument: 'ring_system',
      diorama: {
        title: 'Auditorio del Institute for Advanced Study (IAS), Princeton',
        terrain: 'interior',
        time: 'day',
        palette: { ground: '#1e293b', sky: '#06b6d4', accent: '#f59e0b' },
        props: [
          { kind: 'figure', pose: 'standing', pos: [0, 0], scale: 1.15, color: '#0891b2', label: 'John von Neumann' },
          { kind: 'custom', pos: [-2, 1], scale: 1.3, parts: aluChip(), label: 'Diseño del EDVAC' },
          { kind: 'custom', pos: [2, 1], scale: 1.3, parts: cacheL1(), label: 'Jerarquía de Memoria del IAS' },
        ],
      },
      pieces: [
        {
          id: 'vn-edvac-report',
          title: 'Arquitectura Von Neumann (1945)',
          text: 'Unificó en una misma memoria física compartida tanto las instrucciones de código como las variables de datos.',
          fact: 'El informe preliminar de EDVAC eliminó para siempre la necesidad de recablear físicamente las computadoras.',
          mnemonicCue: 'Una pirámide de cristal con una CPU en la cúspide que proyecta torrentes de datos hacia una base de memoria infinita.',
          model: { type: 'procedural', parts: aluChip() },
          imageSearch: { wikiTitle: 'Arquitectura de von Neumann', lang: 'es' },
          source: { quote: 'En 1945, John von Neumann redactó el célebre informe "First Draft of a Report on the EDVAC"', line: 37 },
        },
        {
          id: 'vn-bottleneck',
          title: 'El Cuello de Botella de Von Neumann',
          text: 'Limitación impuesta por el bus compartido entre procesador y memoria: la CPU espera porque el bus no da abasto.',
          fact: 'Obligó a inventar memorias caché multinivel (L1, L2, L3), prefetching predictivo y jerarquías complejas.',
          mnemonicCue: 'Un reloj de arena de titanio donde millones de esferas de luz intentan pasar por un canal estrecho resplandeciente.',
          model: { type: 'procedural', parts: cacheL1() },
          imageSearch: { wikiTitle: 'Cuello de botella de von Neumann', lang: 'es' },
          source: { quote: 'El "Cuello de Botella de Von Neumann" surge de la limitación del bus de datos compartido', line: 39 },
        },
        {
          id: 'vn-cellular-automata',
          title: 'Autómatas Celulares Autorreplicantes',
          text: 'Demostró formalmente que una máquina puede contener un plano para construir una copia exacta de sí misma.',
          fact: 'Diseñó un autómata celular de 29 estados sobre una cuadrícula bidimensional infinita.',
          mnemonicCue: 'Un tapiz viviente de celdas cuadradas que titilan y se multiplican infinitamente por las paredes.',
          model: { type: 'procedural', parts: controlUnit() },
          imageSearch: { wikiTitle: 'Autómata celular', lang: 'es' },
          source: { quote: 'Von Neumann también sentó las bases de los autómatas celulares autorreplicantes', line: 40 },
        },
        {
          id: 'vn-maniac',
          title: 'La Computadora MANIAC I',
          text: 'Construida bajo su dirección en Los Álamos para realizar cálculos termonucleares y simulaciones de Montecarlo.',
          fact: 'Utilizaba tubos Williams-Kilburn electrostáticos de rayos catódicos para almacenar bits.',
          mnemonicCue: 'Un armario blindado que simula el nacimiento y colisión de estrellas en un halo verde.',
          model: { type: 'procedural', parts: pcTower() },
          imageSearch: { wikiTitle: 'MANIAC I', lang: 'es' },
          source: { quote: 'y diseñó el computador MANIAC I para simulaciones nucleares de Montecarlo', line: 40 },
        },
        {
          id: 'vn-game-theory',
          title: 'Teoría de Juegos y Decisión Racional',
          text: 'Junto a Oskar Morgenstern fundó la Teoría de Juegos, clave para algoritmos de IA, economía y sistemas multiagente.',
          fact: 'Estudió estrategias minimax y equilibrios en juegos de suma cero mucho antes de las redes neuronales.',
          mnemonicCue: 'Un tablero de ajedrez tridimensional donde las piezas toman decisiones probabilísticas calculadas.',
          model: { type: 'procedural', parts: registerFile() },
          imageSearch: { wikiTitle: 'Teoría de juegos', lang: 'es' },
          source: { quote: 'formalizando la arquitectura que gobierna casi todas las computadoras modernas', line: 37 },
        },
      ],
    },

    // -----------------------------------------------------------------------------------------
    // SALA 8: LA ERA DE LAS VÁLVULAS & ENIAC
    // -----------------------------------------------------------------------------------------
    {
      id: 'r-tubes',
      name: 'La Era de las Válvulas y los Gigantes: ENIAC',
      description: 'Los colosos de 30 toneladas, conmutación por tubos termiónicos y las matemáticas pioneras que programaron a mano.',
      theme: 'ancient',
      palette: { primary: '#ea580c', fogColor: '#29140e' },
      monument: 'torus',
      diorama: {
        title: 'La Gran Nave del ENIAC en Filadelfia',
        terrain: 'interior',
        time: 'night',
        palette: { ground: '#1e1e24', sky: '#ea580c', accent: '#f59e0b' },
        props: [
          { kind: 'figure', pose: 'pointing', pos: [-2, 0], scale: 1.1, color: '#c2410c', label: 'Betty Snyder programando' },
          { kind: 'figure', pose: 'seated', pos: [2, 0], scale: 1.1, color: '#9a3412', label: 'Kay McNulty en el panel' },
          { kind: 'custom', pos: [0, 2], scale: 1.5, parts: vacuumTube(), count: 4, spread: 2, label: 'Muro de Válvulas Termiónicas' },
          { kind: 'custom', pos: [0, -2], scale: 1.2, parts: punchCard(), label: 'Lector de Tarjetas IBM' },
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
          source: { quote: 'Con más de 18.000 válvulas de vacío termiónicas, ocupaba 167 metros cuadrados', line: 44 },
        },
        {
          id: 'tub-eniac',
          title: 'ENIAC y el Cálculo Balístico (1945)',
          text: 'Construido por Eckert y Mauchly en Filadelfia; pesaba 30 toneladas y consumía 150 kilovatios de electricidad.',
          fact: 'Calculaba la trayectoria de un proyectil en 30 segundos, cuando un calculador humano tardaba 20 horas.',
          mnemonicCue: 'Un coloso de armarios de hierro negro de 30 metros de largo que ruge con el calor de miles de filamentos.',
          model: { type: 'procedural', parts: motherboard() },
          imageSearch: { wikiTitle: 'ENIAC', lang: 'es' },
          source: { quote: 'El ENIAC (Electronic Numerical Integrator and Computer), concluido en 1945', line: 43 },
        },
        {
          id: 'tub-programmers',
          title: 'Las Seis Programadoras del ENIAC',
          text: 'Kay McNulty, Betty Jennings, Betty Snyder, Marlyn Wescoff, Frances Bilas y Ruth Lichterman programaron el monstruo.',
          fact: 'Programaban sin ensamblador ni sistema operativo, configurando físicamente cientos de cables en paneles.',
          mnemonicCue: 'Una telaraña infinita de cables negros con clavijas doradas conectadas a un panel de conmutación.',
          model: { type: 'procedural', parts: dataBus() },
          imageSearch: { wikiTitle: 'Betty Snyder Holberton', lang: 'es' },
          source: { quote: 'La programación del ENIAC era realizada manualmente por seis brillantes matemáticas', line: 45 },
        },
        {
          id: 'tub-delay-line',
          title: 'Líneas de Retardo de Mercurio',
          text: 'Primeras memorias de acceso aleatorio dinámico basadas en ondas sonoras viajando a través de tubos de mercurio líquido.',
          fact: 'Un pulso acústico se regeneraba al llegar al extremo opuesto, permitiendo almacenar cientos de palabras en bucle.',
          mnemonicCue: 'Tubos cilíndricos de plata líquida por donde viajan ondas de sonido fosforescentes.',
          model: { type: 'procedural', parts: controlBus() },
          imageSearch: { wikiTitle: 'Línea de retardo', lang: 'es' },
          source: { quote: 'Las primeras memorias electrónicas utilizaban tubos de retardo de ondas acústicas en mercurio líquido', line: 46 },
        },
        {
          id: 'tub-colossus',
          title: 'Colossus: El Gigante Británico (1943)',
          text: 'Construido por Tommy Flowers con 2.400 válvulas para descifrar el teletipo Lorenz SZ40 de Hitler.',
          fact: 'Permaneció bajo estricto secreto militar durante más de 30 años tras finalizar la guerra.',
          mnemonicCue: 'Un bastidor metálico monumental que lee rollos de papel perforado a 5.000 caracteres por segundo.',
          model: { type: 'procedural', parts: systemClock() },
          imageSearch: { wikiTitle: 'Colossus (computadora)', lang: 'es' },
          source: { quote: 'El ENIAC (Electronic Numerical Integrator and Computer), concluido en 1945', line: 43 },
        },
      ],
    },

    // -----------------------------------------------------------------------------------------
    // SALA 9: EL ESTADO SÓLIDO & MAINFRAMES IBM
    // -----------------------------------------------------------------------------------------
    {
      id: 'r-transistors',
      name: 'La Revolución del Estado Sólido & Mainframes',
      description: 'El transistor en Bell Labs, el silicio planar de Noyce, el estándar IBM System/360 y discos Winchester.',
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
          { kind: 'custom', pos: [0, -2], scale: 1.2, parts: pcTower(), label: 'Consola Central IBM 2050' },
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
          source: { quote: 'La invención del transistor de contacto puntual en 1947 por John Bardeen, Walter Brattain y William Shockley', line: 49 },
        },
        {
          id: 'tra-ibm360',
          title: 'IBM System/360 (1964)',
          text: 'Primera familia de computadoras comerciales con compatibilidad binaria de software entre modelos de diferente escala.',
          fact: 'Estandarizó el byte de 8 bits y el direccionamiento por bytes en toda la industria.',
          mnemonicCue: 'Una hilera de armarios azules impolutos con paneles frontales titilando al unísono con luces blancas.',
          model: { type: 'procedural', parts: pcTower() },
          imageSearch: { wikiTitle: 'IBM S/360', lang: 'es' },
          source: { quote: 'En 1964, IBM presentó la familia System/360, revolucionando la industria al introducir por primera vez compatibilidad', line: 51 },
        },
        {
          id: 'tra-mag-tape',
          title: 'Cintas Magnéticas y Discos Winchester',
          text: 'El almacenamiento secundario masivo migró de tarjetas a bobinas magnéticas de 9 pistas y discos duros sellados.',
          fact: 'El IBM 305 RAMAC en 1956 almacenaba 5 Megabytes en 50 discos magnéticos del tamaño de ruedas de carreta.',
          mnemonicCue: 'Dos carretes de cinta magnética dorada girando a velocidades vertiginosas con frenadas neumáticas instantáneas.',
          model: { type: 'procedural', parts: nvmeSsd() },
          imageSearch: { wikiTitle: 'Cinta magnética de almacenamiento de datos', lang: 'es' },
          source: { quote: 'Los centros de cómputo adoptaron el almacenamiento en cintas magnéticas de 9 pistas y los discos duros', line: 52 },
        },
        {
          id: 'tra-fairchild',
          title: 'Fairchild Semiconductor & Los Ocho Traidores',
          text: 'Grupo de jóvenes científicos que abandonó Shockley para fundar Fairchild e inventar el circuito integrado de silicio.',
          fact: 'Fue el embrión de Silicon Valley; de allí nacieron Intel, AMD y decenas de gigantes tecnológicos.',
          mnemonicCue: 'Ocho placas de silicio doradas que se entrelazan formando una corona de laureles electrónicos.',
          model: { type: 'procedural', parts: dipMicrochip() },
          imageSearch: { wikiTitle: 'Ocho traidores', lang: 'es' },
          source: { quote: 'Robert Noyce y Jean Hoerni en Fairchild Semiconductor desarrollaron el proceso planar de silicio', line: 50 },
        },
        {
          id: 'tra-ferrite-plane',
          title: 'Planos de Memoria de Ferrita',
          text: 'Matrices de anillos magnéticos tejidos a mano que constituyeron la memoria principal durante más de dos décadas.',
          fact: 'El término "core dump" (volcado de memoria) proviene de imprimir el estado físico de estos núcleos de ferrita.',
          mnemonicCue: 'Una cuadrícula de alambres de cobre con anillos negros flotando en un campo magnético visible.',
          model: { type: 'procedural', parts: magneticCoreMemory() },
          imageSearch: { wikiTitle: 'Memoria de núcleo magnético', lang: 'es' },
          source: { quote: 'Los centros de cómputo adoptaron el almacenamiento en cintas magnéticas', line: 52 },
        },
      ],
    },

    // -----------------------------------------------------------------------------------------
    // SALA 10: EL MICROCHIP & LA COMPUTADORA PERSONAL
    // -----------------------------------------------------------------------------------------
    {
      id: 'r-microprocessors',
      name: 'La Era del Microchip & Computación Personal',
      description: 'El Intel 4004 en un solo die, la Ley de Moore, el Homebrew Computer Club, Apple II y el estándar IBM PC.',
      theme: 'cyberpunk',
      palette: { primary: '#10b981', fogColor: '#022c22' },
      monument: 'crystal',
      diorama: {
        title: 'Taller del Homebrew Computer Club en Menlo Park',
        terrain: 'interior',
        time: 'sunset',
        palette: { ground: '#292524', sky: '#10b981', accent: '#f59e0b' },
        props: [
          { kind: 'figure', pose: 'seated', pos: [0, 0], scale: 1.1, color: '#059669', label: 'Steve Wozniak ensamblando el Apple II' },
          { kind: 'custom', pos: [-2, 1], scale: 1.3, parts: dipMicrochip(), label: 'Chip Intel 4004 / 8080' },
          { kind: 'custom', pos: [2, 1], scale: 1.1, parts: keyboard(), label: 'Teclado y monitor de fósforo verde' },
          { kind: 'figure', pose: 'standing', pos: [2, -1], scale: 1.15, color: '#047857', label: 'Miembro del club observando' },
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
          source: { quote: 'En 1971, Ted Hoff, Federico Faggin y Masatoshi Shima crearon el Intel 4004, el primer microprocesador monolítico', line: 55 },
        },
        {
          id: 'mic-moore',
          title: 'La Ley de Moore y el Escalado',
          text: 'Predicción de Gordon Moore: duplicación del número de transistores por chip cada dos años con costo decreciente.',
          fact: 'Pasamos de 2.300 transistores en 1971 a más de 100.000 millones en los chips actuales.',
          mnemonicCue: 'Una escalera mecánica infinita que duplica su altura a cada paso mientras se vuelve invisible al ojo humano.',
          model: { type: 'procedural', parts: aluChip() },
          imageSearch: { wikiTitle: 'Ley de Moore', lang: 'es' },
          source: { quote: 'Gordon Moore formuló la Ley de Moore en 1965, prediciendo que el número de transistores en un circuito integrado', line: 56 },
        },
        {
          id: 'mic-apple-two',
          title: 'Apple II: La Computadora de Masas (1977)',
          text: 'Diseñada íntegramente por Steve Wozniak con gráficos en color, ranuras de expansión y carcasa de plástico integrada.',
          fact: 'La hoja de cálculo VisiCalc convirtió al Apple II en una herramienta indispensable para empresas mundiales.',
          mnemonicCue: 'Una manzana de cristal arcoíris que proyecta una cuadrícula de hojas de cálculo tridimensionales.',
          model: { type: 'procedural', parts: keyboard() },
          imageSearch: { wikiTitle: 'Apple II', lang: 'es' },
          source: { quote: 'El Homebrew Computer Club en California incubó la revolución del PC, dando origen al Apple II', line: 57 },
        },
        {
          id: 'mic-ibm-pc',
          title: 'IBM PC 5150 y la Arquitectura Estándar (1981)',
          text: 'IBM adoptó componentes de mercado: procesador Intel 8088 y sistema operativo MS-DOS, forjando el estándar de la industria.',
          fact: 'Su arquitectura abierta provocó la eclosión de los "clones compatibles IBM PC" en todo el planeta.',
          mnemonicCue: 'Un monitor beige de rayos catódicos con letras verde esmeralda resplandeciendo en la oscuridad.',
          model: { type: 'procedural', parts: pcTower() },
          imageSearch: { wikiTitle: 'IBM Personal Computer', lang: 'es' },
          source: { quote: 'En 1981, IBM lanzó el IBM PC modelo 5150 con procesador Intel 8088 y sistema operativo MS-DOS', line: 58 },
        },
        {
          id: 'mic-x86-dominance',
          title: 'El Monopolio de la Arquitectura x86',
          text: 'Desde el 8086 hasta los procesadores multinúcleo de 64 bits (x86-64), la arquitectura retrocompatible dominante.',
          fact: 'Mantuvo la capacidad de ejecutar binarios de los años 80 en los chips más potentes del siglo XXI.',
          mnemonicCue: 'Un monolito de silicio que sostiene una bóveda donde conviven programas de todas las décadas.',
          model: { type: 'procedural', parts: motherboard() },
          imageSearch: { wikiTitle: 'X86', lang: 'es' },
          source: { quote: 'estableciendo la arquitectura estándar x86 que dominaría la industria', line: 58 },
        },
      ],
    },

    // -----------------------------------------------------------------------------------------
    // SALA 11: VIAJE AL INTERIOR DEL CPU (MUNDO SILICIO)
    // -----------------------------------------------------------------------------------------
    {
      id: 'r-inside-cpu',
      name: 'Viaje al Interior del Silicio: El Die de CPU',
      description: 'Una inmersión a escala nanométrica: núcleos de cómputo, autopistas Infinity Fabric, jerarquía de caché y transistores FinFET.',
      theme: 'cyberpunk',
      palette: { primary: '#00ffcc', fogColor: '#030712' },
      monument: 'ring_system',
      diorama: {
        title: 'Mundo Dentro del CPU: El Laberinto de Silicio',
        terrain: 'interior',
        time: 'night',
        palette: { ground: '#050b14', sky: '#00ffcc', accent: '#f59e0b' },
        props: [
          { kind: 'custom', pos: [0, 0], scale: 1.8, parts: cpuDieLandscape(), label: 'Die de Silicio Complejo (Core Complex)' },
          { kind: 'custom', pos: [-4, 2], scale: 1.4, parts: aluChip(), label: 'Unidad Aritmética de Fuego Lógico' },
          { kind: 'custom', pos: [4, 2], scale: 1.3, parts: cacheL1(), label: 'Monolito de Caché L3 de Cristal' },
          { kind: 'custom', pos: [0, -3], scale: 1.2, parts: dataBus(), label: 'Autopista de Bus de Datos Fotónica' },
        ],
      },
      pieces: [
        {
          id: 'cpu-finfet-gaa',
          title: 'Transistores 3D: FinFET y Nanosheets (GAAFET)',
          text: 'Aletas tridimensionales de silicio que abrazan el canal de conducción para evitar corrientes de fuga cuántica.',
          fact: 'Con compuertas de menos de 3 nanómetros, el aislante tiene el grosor de apenas un puñado de átomos.',
          mnemonicCue: 'Aletas de titanio reluciente que canalizan ríos de electrones sin dejar escapar una sola chispa.',
          model: { type: 'procedural', parts: planarTransistor() },
          imageSearch: { wikiTitle: 'FinFET', lang: 'es' },
          source: { quote: 'Dentro de un procesador moderno habitan más de 100 mil millones de transistores FinFET y GAAFET', line: 61 },
        },
        {
          id: 'cpu-alu-furnace',
          title: 'La Fragua de la ALU y los Registros',
          text: 'El núcleo de cómputo donde se ejecutan sumas y operaciones booleanas en fracciones de nanosegundo.',
          fact: 'Opera en sincronía con registros de trabajo accesibles en un único ciclo de reloj.',
          mnemonicCue: 'Una fragua de magma digital que forja sumas a la velocidad de la luz en el centro de la sala.',
          model: { type: 'procedural', parts: aluChip() },
          imageSearch: { wikiTitle: 'Unidad aritmético lógica', lang: 'es' },
          source: { quote: 'La Unidad Aritmético-Lógica (ALU) forja operaciones aritméticas y booleanas en picosegundos', line: 62 },
        },
        {
          id: 'cpu-cache-strata',
          title: 'Estratificación de Caché: L1, L2 y L3',
          text: 'Memorias ultrarrápidas de transistores estáticos SRAM integradas para evitar el viaje a la lenta memoria RAM.',
          fact: 'La caché L1 entrega datos en 1 nanosegundo; la caché L3 compartida puede superar los 96 MB de 3D V-Cache.',
          mnemonicCue: 'Murallas concéntricas de hielo cristalino que entregan datos congelados al procesador al instante.',
          model: { type: 'procedural', parts: cacheL1() },
          imageSearch: { wikiTitle: 'Memoria caché', lang: 'es' },
          source: { quote: 'La jerarquía de cachés multinivel (L1 de 1 ciclo, L2 de 4 ciclos, L3 compartida de 15 ciclos)', line: 63 },
        },
        {
          id: 'cpu-interconnect',
          title: 'Interconexión de Bus: Infinity Fabric & Mesh',
          text: 'Redes internas de comunicación que interconectan múltiples chiplets y núcleos a terabytes por segundo.',
          fact: 'Los procesadores modernos abandonaron el silicio monolítico para adoptar chiplets modulares interconectados.',
          mnemonicCue: 'Una autopista de fotones dorados cruzando puentes elevados entre ciudades de transistores.',
          model: { type: 'procedural', parts: dataBus() },
          imageSearch: { wikiTitle: 'Bus (informática)', lang: 'es' },
          source: { quote: 'El bus interno de interconexión (Infinity Fabric, Mesh o Ring Bus) actúa como una autopista de fotones', line: 64 },
        },
        {
          id: 'cpu-pipelining-deep',
          title: 'Pipelining y Ejecución Especulativa Fuera de Orden',
          text: 'Los procesadores modernos ejecutan instrucciones en desorden anticipando el resultado de ramas de código.',
          fact: 'Si la predicción es errónea, la CPU descarta el trabajo y reinicia la tubería sin alterar la coherencia.',
          mnemonicCue: 'Cientos de trenes de levitación magnética corriendo en vías paralelas sin colisionar jamás.',
          model: { type: 'procedural', parts: controlUnit() },
          imageSearch: { wikiTitle: 'Ejecución fuera de orden', lang: 'es' },
          source: { quote: 'rodeada por registros de trabajo y colas de decodificación de microinstrucciones', line: 62 },
        },
      ],
    },

    // -----------------------------------------------------------------------------------------
    // SALA 12: EL CIBERESPACIO & EL MUNDO DEL CÓDIGO
    // -----------------------------------------------------------------------------------------
    {
      id: 'r-code-world',
      name: 'El Ciberespacio y el Mundo del Código',
      description: 'El reino del software puro: compiladores, árboles de sintaxis, la red global y la poesía lógica en acción.',
      theme: 'cathedral',
      palette: { primary: '#a855f7', fogColor: '#1e1b4b' },
      monument: 'dodecahedron',
      diorama: {
        title: 'El Ciberespacio: Monolitos de Sintaxis Cósmica',
        terrain: 'abstract',
        time: 'night',
        palette: { ground: '#050515', sky: '#8b5cf6', accent: '#00ffcc' },
        props: [
          { kind: 'custom', pos: [0, 0], scale: 1.6, parts: codeMonolith(), label: 'El Gran Monolito de Código' },
          { kind: 'custom', pos: [-3, 2], scale: 1.2, parts: codeMonolith(), label: 'Árbol de Sintaxis Abstracta (AST)' },
          { kind: 'custom', pos: [3, 2], scale: 1.2, parts: codeMonolith(), label: 'Pipeline de Optimización LLVM' },
          { kind: 'custom', pos: [0, -2], scale: 1.3, parts: dataBus(), label: 'Fibra Óptica de la Red Global' },
        ],
      },
      pieces: [
        {
          id: 'cod-ast',
          title: 'Árboles de Sintaxis Abstracta (AST)',
          text: 'Estructura en árbol que representa la jerarquía gramatical del código fuente antes de la compilación.',
          fact: 'Permite a los compiladores aplicar optimizaciones como eliminación de código muerto y desenrollado de bucles.',
          mnemonicCue: 'Un roble cósmico hecho de luz violeta cuyas ramas son expresiones y cuyas hojas son sentencias lógicas.',
          model: { type: 'procedural', parts: codeMonolith() },
          imageSearch: { wikiTitle: 'Árbol de sintaxis abstracta', lang: 'es' },
          source: { quote: 'Los compiladores traducen la intención humana en árboles de sintaxis abstracta (AST)', line: 69 },
        },
        {
          id: 'cod-paradigms',
          title: 'Paradigmas: De Imperativo a Funcional',
          text: 'Diferentes modelos mentales para estructurar el pensamiento computacional: estados mutables versus funciones puras.',
          fact: 'Los lenguajes modernos combinan paradigmas para maximizar la seguridad de memoria y el paralelismo.',
          mnemonicCue: 'Dos espejos enfrentados: uno refleja engranajes mecánicos y el otro un flujo continuo de agua cristalina.',
          model: { type: 'procedural', parts: registerFile() },
          imageSearch: { wikiTitle: 'Paradigma de programación', lang: 'es' },
          source: { quote: 'Desde el código binario y el lenguaje ensamblador hasta lenguajes expresivos modernos', line: 68 },
        },
        {
          id: 'cod-internet-mesh',
          title: 'La Red Global: TCP/IP y el Enrutamiento Mundial',
          text: 'Protocolos descentralizados de conmutación de paquetes diseñados para sobrevivir a fallos masivos de infraestructura.',
          fact: 'Conecta miles de millones de computadoras independientes en un único sistema nervioso planetario.',
          mnemonicCue: 'Una telaraña planetaria de pulsos de luz que envuelve la Tierra conectando todas las mentes humanas.',
          model: { type: 'procedural', parts: dataBus() },
          imageSearch: { wikiTitle: 'Internet', lang: 'es' },
          source: { quote: 'Las redes globales y los sistemas distribuidos convierten millones de computadoras individuales en un único organismo', line: 70 },
        },
        {
          id: 'cod-qubit-horizon',
          title: 'El Horizonte Cuántico y Supercómputo',
          text: 'La convergencia entre la supercomputación a escala Exaflop y la manipulación de estados cuánticos puros.',
          fact: 'Criostatos a 15 milikelvin operan qubits superconductores para resolver problemas inaccesibles a la física clásica.',
          mnemonicCue: 'Un chandelier dorado que congela el tiempo mientras una esfera de luz cian vibra en dos mundos a la vez.',
          model: { type: 'procedural', parts: quantumQubitChamber() },
          imageSearch: { wikiTitle: 'Computación cuántica', lang: 'es' },
          source: { quote: 'El código fuente es la única materia abstracta que puede autoejecutarse y alterar el mundo físico', line: 67 },
        },
        {
          id: 'cod-love-of-art',
          title: 'Por Amor al Arte: La Belleza del Cómputo',
          text: 'La computación es una de las mayores expresiones de arte intelectual colectivo creadas por la especie humana.',
          fact: 'Desde la tarjeta de Ada Lovelace hasta los clusters de IA, cada línea de código es un acto de creación pura.',
          mnemonicCue: 'Un monumento de cristal puro que refleja todos los rostros de los pioneros fundiéndose en una aurora boreal.',
          model: { type: 'procedural', parts: systemClock() },
          imageSearch: { wikiTitle: 'Informática', lang: 'es' },
          source: { quote: 'Por amor al arte: Génesis, Pioneros, Máquinas y Mundos Digitales', line: 1 },
        },
      ],
    },
  ],
  graph: {
    start: 'r-origin',
    edges: [
      // 1. Conexiones desde el Origen (múltiples caminos abiertos)
      { from: 'r-origin', to: 'r-lovelace', kind: 'next' },
      { from: 'r-origin', to: 'r-turing', kind: 'next' },
      { from: 'r-origin', to: 'r-tubes', kind: 'next' },
      { from: 'r-origin', to: 'r-inside-cpu', kind: 'next' },

      // 2. Ruta de Ada Lovelace
      { from: 'r-lovelace', to: 'r-turing', kind: 'related' },
      { from: 'r-lovelace', to: 'r-hopper', kind: 'next' },

      // 3. Ruta de Alan Turing
      { from: 'r-turing', to: 'r-hopper', kind: 'related' },
      { from: 'r-turing', to: 'r-tubes', kind: 'related' },
      { from: 'r-turing', to: 'r-von-neumann', kind: 'next' },

      // 4. Ruta de Grace Hopper
      { from: 'r-hopper', to: 'r-hamilton-apollo', kind: 'next' },
      { from: 'r-hopper', to: 'r-code-world', kind: 'related' },

      // 5. Ruta de Margaret Hamilton
      { from: 'r-hamilton-apollo', to: 'r-unix-open-source', kind: 'next' },
      { from: 'r-hamilton-apollo', to: 'r-microprocessors', kind: 'related' },

      // 6. Ruta Unix & Software Libre
      { from: 'r-unix-open-source', to: 'r-code-world', kind: 'next' },

      // 7. Ruta Von Neumann
      { from: 'r-von-neumann', to: 'r-inside-cpu', kind: 'next' },
      { from: 'r-von-neumann', to: 'r-transistors', kind: 'related' },

      // 8. Ruta Válvulas (ENIAC)
      { from: 'r-tubes', to: 'r-transistors', kind: 'next' },

      // 9. Ruta Transistores & Mainframes
      { from: 'r-transistors', to: 'r-microprocessors', kind: 'next' },
      { from: 'r-transistors', to: 'r-inside-cpu', kind: 'related' },

      // 10. Ruta Microprocesadores & PC
      { from: 'r-microprocessors', to: 'r-code-world', kind: 'related' },
      { from: 'r-microprocessors', to: 'r-inside-cpu', kind: 'next' },

      // 11. Convergencia final hacia el Mundo del Código
      { from: 'r-inside-cpu', to: 'r-code-world', kind: 'next' },
    ],
  },
})
