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
  victorianDesk,
  babbageAnalyticalMill,
  enigmaMachine,
  hutStoveAndRadiator,
  apolloSoftwareCodeStack,
  coreRopeLoom,
  pdp11Minicomputer,
  teletypeASR33,
  whiteboardPipes,
  blochSphereState,
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
  mouse,
  monitor,
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

VI. Claude Shannon: El Padre de la Teoría de la Información
Claude Shannon demostró en 1937 en el MIT que el álgebra booleana podía mapearse directamente en circuitos eléctricos de conmutación y relés.
En 1948 publicó "Una teoría matemática de la comunicación", fundando la teoría de la información y acuñando el Bit como la unidad atómica del conocimiento humano.
Construyó el ratón electromecánico Teseo (Theseus) en los Laboratorios Bell, uno de los primeros ejemplos prácticos de aprendizaje autónomo y memoria en laberintos.

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

IX. Colossus y Tommy Flowers: El Secreto de Bletchley
Tommy Flowers diseñó en 1943 Colossus en la estación de investigación de Dollis Hill, empleando 1.500 válvulas de vacío para descifrar el cifrado Lorenz SZ40 de Hitler.
Fue la primera máquina de cómputo totalmente electrónica de gran escala, leyendo cintas perforadas a la pasmosa velocidad de 5.000 caracteres por segundo.

X. La Revolución del Estado Sólido & Mainframes IBM
La invención del transistor de contacto puntual en 1947 por John Bardeen, Walter Brattain y William Shockley en Bell Labs sustituyó las frágiles válvulas por semiconductores de estado sólido.
Robert Noyce y Jean Hoerni en Fairchild Semiconductor desarrollaron el proceso planar de silicio, permitiendo imprimir transistores, pistas y resistencias en una misma oblea monolítica.
En 1964, IBM presentó la familia System/360, revolucionando la industria al introducir por primera vez compatibilidad de arquitectura y software entre computadoras de diferente potencia y tamaño.
Los centros de cómputo adoptaron el almacenamiento en cintas magnéticas de 9 pistas y los discos duros de cabezal móvil Winchester, introducidos por IBM en 1973 con el modelo 3340.

XI. Douglas Engelbart y Xerox PARC: La Madre de Todas las Demos
En 1968, Douglas Engelbart presentó en San Francisco la histórica "Madre de Todas las Demos", introduciendo el ratón de computadora, las ventanas gráficas, el hipertexto y el procesamiento colaborativo.
El centro de investigación Xerox PARC en Palo Alto refinó estas ideas creando el Xerox Alto en 1973 con interfaces gráficas (GUI), fuentes tipográficas proporcionales y red local Ethernet.

XII. El Microchip y la Revolución del Computador Personal
En 1971, Ted Hoff, Federico Faggin y Masatoshi Shima crearon el Intel 4004, el primer microprocesador monolítico de 4 bits que concentró 2.300 transistores en una pastilla de silicio de 12 mm².
Gordon Moore formuló la Ley de Moore en 1965, prediciendo que el número de transistores en un circuito integrado se duplicaría aproximadamente cada dos años con una reducción constante de costo.
El Homebrew Computer Club en California incubó la revolución del PC, dando origen al Apple II diseñado por Steve Wozniak en 1977, con gráficos en color y arquitectura abierta.
En 1981, IBM lanzó el IBM PC modelo 5150 con procesador Intel 8088 y sistema operativo MS-DOS de Microsoft, estableciendo la arquitectura estándar x86 que dominaría la industria.

XIII. Viaje al Interior del Silicio: La Arquitectura del Die
Dentro de un procesador moderno habitan más de 100 mil millones de transistores FinFET y GAAFET conectados por kilómetros de pistas microscópicas de cobre de apenas unos nanómetros.
La Unidad Aritmético-Lógica (ALU) forja operaciones aritméticas y booleanas en picosegundos, rodeada por registros de trabajo y colas de decodificación de microinstrucciones.
La jerarquía de cachés multinivel (L1 de 1 ciclo, L2 de 4 ciclos, L3 compartida de 15 ciclos) amortigua la lentitud de la memoria externa y mantiene a los núcleos saciados de datos.
El bus interno de interconexión (Infinity Fabric, Mesh o Ring Bus) actúa como una autopista de fotones y electrones a terabytes por segundo entre núcleos y controladores de memoria.

XIV. El Ciberespacio y el Mundo del Código
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
    // 1. Orígenes
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
      ],
    },

    // 2. Ada Lovelace
    {
      id: 'r-lovelace',
      name: 'Ada Lovelace & La Ciencia Poética',
      description: 'La primera programadora de la historia, la visión de manipular símbolos abstractos y el algoritmo de Bernoulli.',
      theme: 'cathedral',
      palette: { primary: '#a855f7', fogColor: '#2e1065' },
      monument: 'crystal',
      diorama: {
        title: 'El Salón de Babbage y Lovelace en Londres',
        backdrop: '/api/image/file?u=https%3A%2F%2Fthumb.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa4%2FAda_Lovelace_portrait.jpg%2F960px-Ada_Lovelace_portrait.jpg',
        terrain: 'interior',
        time: 'sunset',
        palette: { ground: '#2e1045', sky: '#c084fc', accent: '#fbbf24' },
        props: [
          { kind: 'figure', pose: 'standing', pos: [0, -2.8], scale: 1.1, color: '#7c3aed', secondary: '#fef08a', label: 'Ada Lovelace con la Nota G', pieceId: 'lov-bernoulli' },
          { kind: 'figure', pose: 'pointing', pos: [2.5, -3.2], scale: 1.15, color: '#312e81', secondary: '#fbbf24', label: 'Charles Babbage supervisando el molino', pieceId: 'lov-poetic-science' },
          { kind: 'custom', pos: [0, -2.0], scale: 1.2, parts: victorianDesk(), label: 'Escritorio con Manuscrito de Bernoulli', pieceId: 'lov-bernoulli' },
          { kind: 'custom', pos: [2.6, -2.2], scale: 1.3, parts: babbageAnalyticalMill(), label: 'Molino Analítico de Engranajes', pieceId: 'lov-weaving-metaphor' },
          { kind: 'custom', pos: [-2.5, -2.5], scale: 1.3, parts: punchCard(), label: 'Tarjetas Jacquard para la Máquina Analítica', pieceId: 'lov-weaving-metaphor' },
          { kind: 'column', pos: [-3.8, -1.8], scale: 1.1, color: '#a855f7', label: 'Atril de Música Algorítmica', pieceId: 'lov-music-graphics' },
          { kind: 'column', pos: [-6, -5], scale: 1.8, color: '#581c87' },
          { kind: 'column', pos: [6, -5], scale: 1.8, color: '#581c87' },
          { kind: 'column', pos: [-6, 2], scale: 1.8, color: '#581c87' },
          { kind: 'column', pos: [6, 2], scale: 1.8, color: '#581c87' },
          { kind: 'arch', pos: [0, -8], scale: 2.2, color: '#7e22ce' },
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
      ],
    },

    // 3. Alan Turing
    {
      id: 'r-turing',
      name: 'Alan Turing & Bletchley Park',
      description: 'La máquina universal, el criptoanálisis de Enigma en Hut 8, el test de inteligencia y la morfogénesis.',
      theme: 'void',
      palette: { primary: '#38bdf8', fogColor: '#0c4a6e' },
      monument: 'dodecahedron',
      diorama: {
        title: 'Hut 8 y la Máquina Bombe en Bletchley Park',
        backdrop: '/api/image/file?u=https%3A%2F%2Fthumb.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F4f%2FBletchley_Park_Bombe.jpg%2F1280px-Bletchley_Park_Bombe.jpg',
        terrain: 'interior',
        time: 'storm',
        palette: { ground: '#1c1917', sky: '#334155', accent: '#38bdf8' },
        props: [
          { kind: 'figure', pose: 'seated', pos: [0, -2.5], scale: 1.1, color: '#334155', secondary: '#94a3b8', label: 'Alan Turing descifrando Enigma Naval', pieceId: 'tur-bombe' },
          { kind: 'figure', pose: 'pointing', pos: [-3.5, -2.0], scale: 1.05, color: '#1e293b', secondary: '#f8fafc', label: 'Operadora WRNS calibrando conmutadores' },
          { kind: 'custom', pos: [0, -1.8], scale: 1.1, parts: enigmaMachine(), label: 'Cifradora Enigma M4 con Steckerbrett', pieceId: 'tur-enigma' },
          { kind: 'custom', pos: [-3.2, -3.5], scale: 1.6, parts: turingBombeRotor(), label: 'Banco de Rotores de la Máquina Bombe', pieceId: 'tur-bombe' },
          { kind: 'custom', pos: [3.2, -2.8], scale: 1.2, parts: hutStoveAndRadiator(), label: 'Estufa de Hut 8 y Taza Encadenada' },
          { kind: 'custom', pos: [-1.8, -1.5], scale: 1.1, parts: punchCard(), label: 'Hojas Perforadas de Banburismus', pieceId: 'tur-halting' },
          { kind: 'custom', pos: [2.2, -1.5], scale: 1.2, parts: dataBus(), label: 'Cinta Infinita de la Máquina Universal', pieceId: 'tur-machine' },
          { kind: 'tent', pos: [-7, -5], scale: 1.5, color: '#292524' },
          { kind: 'tent', pos: [7, -5], scale: 1.5, color: '#292524' },
          { kind: 'column', pos: [-5, -6], scale: 1.4, color: '#44403c' },
          { kind: 'column', pos: [5, -6], scale: 1.4, color: '#44403c' },
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
      ],
    },

    // 4. Grace Hopper
    {
      id: 'r-hopper',
      name: 'Grace Hopper & La Alborada del Software',
      description: 'El primer bug en Harvard Mark II, la invención del compilador A-0, el lenguaje COBOL y el nanosegundo.',
      theme: 'cathedral',
      palette: { primary: '#10b981', fogColor: '#064e3b' },
      monument: 'torus',
      diorama: {
        title: 'Laboratorio del Harvard Mark I y el Primer Bug',
        backdrop: '/api/image/file?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fa%2Fad%2FCommodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg',
        terrain: 'interior',
        time: 'day',
        palette: { ground: '#1e293b', sky: '#64748b', accent: '#0284c7' },
        props: [
          { kind: 'figure', pose: 'pointing', pos: [0, -2.8], scale: 1.1, color: '#0f172a', secondary: '#f8fafc', label: 'Grace Hopper con uniforme naval', pieceId: 'hop-compiler-a0' },
          { kind: 'custom', pos: [1.8, -2.2], scale: 1.3, parts: hopperRelayBug(), label: 'Relé #70 con la Polilla en el Cuaderno', pieceId: 'hop-first-bug' },
          { kind: 'custom', pos: [0, -4.5], scale: 1.8, parts: magneticCoreMemory(), label: 'Bastidor electromecánico del Mark I', pieceId: 'hop-first-bug' },
          { kind: 'custom', pos: [-2.2, -2.2], scale: 1.2, parts: dipMicrochip(), label: 'Compilador A-0 y Especificación COBOL', pieceId: 'hop-cobol' },
          { kind: 'test-tube-rack', pos: [3.5, -2.0], scale: 1.1, label: 'Alambre de Nanosegundo y Calibradores', pieceId: 'hop-nanosecond' },
          { kind: 'column', pos: [-6, -4], scale: 1.6, color: '#334155' },
          { kind: 'column', pos: [6, -4], scale: 1.6, color: '#334155' },
          { kind: 'column', pos: [-3, -6], scale: 1.4, color: '#1e293b' },
          { kind: 'column', pos: [3, -6], scale: 1.4, color: '#1e293b' },
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
      ],
    },

    // 5. Margaret Hamilton & Apolo 11
    {
      id: 'r-hamilton-apollo',
      name: 'Margaret Hamilton & El Código de la Luna',
      description: 'El nacimiento de la Ingeniería de Software, la interfaz DSKY y el sistema de prioridades que salvó el Apolo 11.',
      theme: 'void',
      palette: { primary: '#38bdf8', fogColor: '#0f172a' },
      monument: 'ring_system',
      diorama: {
        title: 'Sala de Control y el Software del Apolo 11',
        backdrop: '/api/image/file?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fd%2Fdb%2FMargaret_Hamilton_-_restoration.jpg',
        terrain: 'interior',
        time: 'night',
        palette: { ground: '#0b132b', sky: '#1c2541', accent: '#eab308' },
        props: [
          { kind: 'figure', pose: 'standing', pos: [0, -2.5], scale: 1.1, color: '#0284c7', secondary: '#f8fafc', label: 'Margaret Hamilton junto al código de vuelo', pieceId: 'ham-sw-engineering' },
          { kind: 'custom', pos: [1.2, -2.5], scale: 1.3, parts: apolloSoftwareCodeStack(), label: 'Pila Impresa del Código Fuente del AGC', pieceId: 'ham-sw-engineering' },
          { kind: 'custom', pos: [-1.8, -2.0], scale: 1.2, parts: apolloGuidanceComputer(), label: 'Consola DSKY con Alarma 1202', pieceId: 'ham-1202-alarm' },
          { kind: 'custom', pos: [-3.5, -3.2], scale: 1.3, parts: coreRopeLoom(), label: 'Telar de Memoria Core Rope (Método LOL)', pieceId: 'ham-core-rope' },
          { kind: 'custom', pos: [3.2, -3.2], scale: 1.2, parts: controlUnit(), label: 'Computadora de Navegación del Módulo Lunar Eagle', pieceId: 'ham-dsky' },
          { kind: 'column', pos: [-6, -5], scale: 1.6, color: '#1f2937' },
          { kind: 'column', pos: [6, -5], scale: 1.6, color: '#1f2937' },
          { kind: 'column', pos: [0, -7], scale: 1.8, color: '#111827' },
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

    // 6. Claude Shannon
    {
      id: 'r-shannon-info',
      name: 'Claude Shannon & La Teoría de la Información',
      description: 'El Bit como unidad de entropía, el álgebra de Boole en relés y el ratón cibernético Teseo.',
      theme: 'cathedral',
      palette: { primary: '#a855f7', fogColor: '#3b0764' },
      monument: 'crystal',
      pieces: [
        {
          id: 'shn-bit-entropy',
          title: 'El Bit y la Teoría de la Comunicación (1948)',
          text: 'Shannon formuló la medida matemática de la información y la compresión en canales con ruido.',
          fact: 'Definió el término "Bit" (Binary Digit) como la unidad fundamental de incertidumbre y conocimiento.',
          mnemonicCue: 'Una balanza estelar que pesa cubos transparentes de información pura equilibrando el orden contra el caos.',
          model: { type: 'procedural', parts: addressBus() },
          imageSearch: { wikiTitle: 'Claude Shannon', lang: 'es' },
          source: { quote: 'En 1948 publicó "Una teoría matemática de la comunicación", fundando la teoría de la información y acuñando el Bit', line: 33 },
        },
        {
          id: 'shn-boolean-circuits',
          title: 'Álgebra Booleana en Circuitos Eléctricos',
          text: 'Tesis de maestría en el MIT en 1937: demostró que interruptores en serie y paralelo resuelven lógica proposicional.',
          fact: 'Considerada la tesis de maestría más importante e influyente de todo el siglo XX.',
          mnemonicCue: 'Un mapa de interruptores de mercurio que resuelven silogismos aristotélicos abriendo y cerrando compuertas.',
          model: { type: 'procedural', parts: controlBus() },
          imageSearch: { wikiTitle: 'Álgebra de Boole', lang: 'es' },
          source: { quote: 'Claude Shannon demostró en 1937 en el MIT que el álgebra booleana podía mapearse directamente en circuitos eléctricos', line: 32 },
        },
        {
          id: 'shn-theseus-mouse',
          title: 'El Ratón Cibernético Teseo (Theseus)',
          text: 'Primer robot con memoria de aprendizaje: un ratón magnético que aprende a escapar de un laberinto usando relés.',
          fact: 'Diseñado por Shannon en 1950 en Bell Labs, pionero de la robótica y el aprendizaje automático.',
          mnemonicCue: 'Un pequeño ratón de bronce pulido navegando por un laberinto cuyas paredes cambian dinámicamente.',
          model: { type: 'procedural', parts: mouse() },
          imageSearch: { wikiTitle: 'Laberinto', lang: 'es' },
          source: { quote: 'Construyó el ratón electromecánico Teseo (Theseus) en los Laboratorios Bell, uno de los primeros ejemplos prácticos', line: 34 },
        },
      ],
    },

    // 7. John von Neumann
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
          { kind: 'figure', pose: 'standing', pos: [0, -2.5], scale: 1.15, color: '#0891b2', secondary: '#f8fafc', label: 'John von Neumann presentando el EDVAC', pieceId: 'vn-edvac-report' },
          { kind: 'custom', pos: [-2.5, -2.0], scale: 1.3, parts: aluChip(), label: 'Arquitectura Von Neumann (CPU y Memoria)', pieceId: 'vn-edvac-report' },
          { kind: 'custom', pos: [2.5, -2.0], scale: 1.3, parts: cacheL1(), label: 'Canal del Cuello de Botella de Bus', pieceId: 'vn-bottleneck' },
          { kind: 'custom', pos: [0, -4.0], scale: 1.4, parts: controlUnit(), label: 'Matriz de Autómata Celular de 29 Estados', pieceId: 'vn-cellular-automata' },
          { kind: 'column', pos: [-6, -5], scale: 1.6, color: '#164e63' },
          { kind: 'column', pos: [6, -5], scale: 1.6, color: '#164e63' },
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
      ],
    },

    // 8. Válvulas & ENIAC
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
          { kind: 'figure', pose: 'pointing', pos: [-2.2, -2.5], scale: 1.1, color: '#c2410c', secondary: '#fef08a', label: 'Betty Snyder programando el recableado', pieceId: 'tub-programmers' },
          { kind: 'figure', pose: 'seated', pos: [2.2, -2.5], scale: 1.1, color: '#9a3412', secondary: '#fed7aa', label: 'Kay McNulty registrando trayectorias', pieceId: 'tub-programmers' },
          { kind: 'custom', pos: [0, -3.5], scale: 1.6, parts: vacuumTube(), label: 'Bastidor de 18.000 Válvulas Termiónicas', pieceId: 'tub-vacuum' },
          { kind: 'custom', pos: [-3.5, -3.5], scale: 1.3, parts: punchCard(), label: 'Lector de Tarjetas IBM del ENIAC', pieceId: 'tub-eniac' },
          { kind: 'custom', pos: [3.5, -3.5], scale: 1.4, parts: dataBus(), label: 'Tablero de Conmutación de 150 kW', pieceId: 'tub-eniac' },
          { kind: 'column', pos: [-6, -5], scale: 1.6, color: '#431407' },
          { kind: 'column', pos: [6, -5], scale: 1.6, color: '#431407' },
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
      ],
    },

    // 9. Colossus & Tommy Flowers
    {
      id: 'r-colossus',
      name: 'Colossus & Los Secretos de Bletchley',
      description: 'Tommy Flowers y la primera máquina de cómputo totalmente electrónica del mundo para descifrar el teletipo de Hitler.',
      theme: 'void',
      palette: { primary: '#64748b', fogColor: '#0f172a' },
      monument: 'dodecahedron',
      pieces: [
        {
          id: 'col-flowers',
          title: 'Tommy Flowers y el Diseño Electrónico (1943)',
          text: 'Ingeniero de correos británico que demostró que miles de válvulas podían operar de forma fiable sin apagarse.',
          fact: 'Financió parte de la construcción de Colossus de su propio bolsillo cuando el gobierno dudaba del proyecto.',
          mnemonicCue: 'Un bastidor metálico monumental que lee rollos de papel perforado a 5.000 caracteres por segundo.',
          model: { type: 'procedural', parts: vacuumTube() },
          imageSearch: { wikiTitle: 'Tommy Flowers', lang: 'es' },
          source: { quote: 'Tommy Flowers diseñó en 1943 Colossus en la estación de investigación de Dollis Hill', line: 49 },
        },
        {
          id: 'col-optical-reader',
          title: 'Lectores Ópticos de Cinta de Alta Velocidad',
          text: 'Colossus leía cintas perforadas a 5.000 caracteres por segundo mediante células fotoeléctricas sincronizadas.',
          fact: 'La cinta corría a casi 50 km/h; si se rompía, el papel salía disparado por la sala como metralla.',
          mnemonicCue: 'Una cinta de papel perforado que viaja a la velocidad del viento atravesando un haz de luz violeta.',
          model: { type: 'procedural', parts: punchCard() },
          imageSearch: { wikiTitle: 'Colossus (computadora)', lang: 'es' },
          source: { quote: 'leyendo cintas perforadas a la pasmosa velocidad de 5.000 caracteres por segundo', line: 50 },
        },
        {
          id: 'col-secrecy',
          title: 'Treinta Años de Secreto Militar',
          text: 'Winston Churchill ordenó desmantelar Colossus en pedazos del tamaño de un puño tras la guerra.',
          fact: 'Flowers y su equipo guardaron silencio hasta la desclasificación de los archivos en los años 70.',
          mnemonicCue: 'Un cofre de acero sellado con siete candados de plomo custodiado por sombras de espías silenciosos.',
          model: { type: 'procedural', parts: registerFile() },
          imageSearch: { wikiTitle: 'Bletchley Park', lang: 'es' },
          source: { quote: 'Fue la primera máquina de cómputo totalmente electrónica de gran escala', line: 50 },
        },
      ],
    },

    // 10. Transistores en Bell Labs
    {
      id: 'r-transistors',
      name: 'La Revolución del Estado Sólido',
      description: 'El transistor de contacto puntual de Bardeen, Brattain y Shockley que sustituyó las válvulas por semiconductores.',
      theme: 'cathedral',
      palette: { primary: '#0284c7', fogColor: '#082f49' },
      monument: 'dodecahedron',
      diorama: {
        title: 'Laboratorio de Estado Sólido en Bell Labs (1947)',
        terrain: 'interior',
        time: 'day',
        palette: { ground: '#e2e8f0', sky: '#0284c7', accent: '#0369a1' },
        props: [
          { kind: 'figure', pose: 'standing', pos: [0, -2.5], scale: 1.1, color: '#0369a1', secondary: '#f8fafc', label: 'John Bardeen y Walter Brattain', pieceId: 'tra-transistor' },
          { kind: 'custom', pos: [-2.2, -2.0], scale: 1.4, parts: planarTransistor(), label: 'Transistor de Contacto Puntual de Germanio', pieceId: 'tra-transistor' },
          { kind: 'custom', pos: [2.2, -2.0], scale: 1.3, parts: systemClock(), label: 'Osciloscopio y Pruebas Cuánticas de Silicio', pieceId: 'tra-semiconductors' },
          { kind: 'custom', pos: [0, -3.8], scale: 1.3, parts: controlUnit(), label: 'Módulo de Estado Sólido de Alta Confiabilidad', pieceId: 'tra-reliability' },
          { kind: 'column', pos: [-6, -4], scale: 1.5, color: '#075985' },
          { kind: 'column', pos: [6, -4], scale: 1.5, color: '#075985' },
        ],
      },
      pieces: [
        {
          id: 'tra-transistor',
          title: 'El Transistor de Contacto Puntual (1947)',
          text: 'Shockley, Bardeen y Brattain descubrieron la amplificación en estado sólido usando una cuña de plástico y germanio.',
          fact: 'Les valió el Premio Nobel de Física en 1956 y marcó el inicio de la era moderna de la electrónica.',
          mnemonicCue: 'Un cristal de silicio triangular puro que al recibir una gota de luz conduce una cascada de energía.',
          model: { type: 'procedural', parts: planarTransistor() },
          imageSearch: { wikiTitle: 'Transistor', lang: 'es' },
          source: { quote: 'La invención del transistor de contacto puntual en 1947 por John Bardeen, Walter Brattain y William Shockley', line: 53 },
        },
        {
          id: 'tra-semiconductors',
          title: 'Física Cuántica de Semiconductores',
          text: 'Dopaje de silicio y germanio con impurezas tipo P y N para crear uniones PN y canales de conducción controlables.',
          fact: 'Permitió miniaturizar circuitos reduciendo el consumo eléctrico en más de un 99% respecto a las válvulas.',
          mnemonicCue: 'Átomos de fósforo y boro brillando en azul y ámbar dentro de una red cristalina perfecta.',
          model: { type: 'procedural', parts: aluChip() },
          imageSearch: { wikiTitle: 'Semiconductor', lang: 'es' },
          source: { quote: 'sustituyó las frágiles válvulas por semiconductores de estado sólido', line: 53 },
        },
        {
          id: 'tra-reliability',
          title: 'Confiabilidad y Vida Útil Infinita',
          text: 'A diferencia de los filamentos incandescentes que se quemaban, el transistor no posee partes móviles ni desgaste térmico.',
          fact: 'Hizo posible enviar computadoras en misiones espaciales y construir satélites de telecomunicaciones duraderos.',
          mnemonicCue: 'Una pirámide de cuarzo inmutable que late eternamente sin emitir una sola gota de calor destructivo.',
          model: { type: 'procedural', parts: controlUnit() },
          imageSearch: { wikiTitle: 'Semiconductor', lang: 'es' },
          source: { quote: 'sustituyó las frágiles válvulas por semiconductores de estado sólido', line: 53 },
        },
      ],
    },

    // 11. Fairchild & El Proceso Planar
    {
      id: 'r-fairchild-silicon',
      name: 'Fairchild Semiconductor & El Silicio Planar',
      description: 'Robert Noyce, Jean Hoerni, los Ocho Traidores y la invención del circuito integrado monolítico.',
      theme: 'cathedral',
      palette: { primary: '#f59e0b', fogColor: '#451a03' },
      monument: 'crystal',
      pieces: [
        {
          id: 'fch-traitorous-eight',
          title: 'Los Ocho Traidores (1957)',
          text: 'Ocho brillantes científicos que abandonaron el laboratorio tiránico de Shockley para fundar Fairchild en Mountain View.',
          fact: 'Fueron el catalizador directo que transformó los huertos de ciruelos del Valle de Santa Clara en Silicon Valley.',
          mnemonicCue: 'Ocho placas de silicio doradas que se entrelazan formando una corona de laureles electrónicos.',
          model: { type: 'procedural', parts: dipMicrochip() },
          imageSearch: { wikiTitle: 'Ocho traidores', lang: 'es' },
          source: { quote: 'Robert Noyce y Jean Hoerni en Fairchild Semiconductor desarrollaron el proceso planar de silicio', line: 54 },
        },
        {
          id: 'fch-planar-process',
          title: 'El Proceso Planar de Jean Hoerni',
          text: 'Técnica de pasivación con dióxido de silicio y difusión que permitió imprimir componentes planos protegidos.',
          fact: 'Permitió conectar transistores depositando aluminio evaporado encima, eliminando los cables soldados a mano.',
          mnemonicCue: 'Una oblea circular que brilla con capas sucesivas de óxido y pistas metálicas espejadas.',
          model: { type: 'procedural', parts: planarTransistor() },
          imageSearch: { wikiTitle: 'Proceso planar', lang: 'es' },
          source: { quote: 'permitiendo imprimir transistores, pistas y resistencias en una misma oblea monolítica', line: 54 },
        },
        {
          id: 'fch-monolithic-ic',
          title: 'El Circuito Integrado Monolítico de Robert Noyce',
          text: 'La integración de múltiples transistores, diodos y resistencias en una única pastilla indivisible de silicio.',
          fact: 'Noyce y Jack Kilby (de Texas Instruments) comparten la paternidad del circuito integrado contemporáneo.',
          mnemonicCue: 'Una pastilla cuadrada negra que al ser tocada despliega una ciudad microscópica tridimensional.',
          model: { type: 'procedural', parts: dipMicrochip() },
          imageSearch: { wikiTitle: 'Circuito integrado', lang: 'es' },
          source: { quote: 'permitiendo imprimir transistores, pistas y resistencias en una misma oblea monolítica', line: 54 },
        },
      ],
    },

    // 12. IBM System/360 & Mainframes
    {
      id: 'r-ibm360',
      name: 'IBM System/360 & La Era del Mainframe',
      description: 'La estandarización del byte de 8 bits, compatibilidad binaria de software y centros de cómputo corporativos.',
      theme: 'cathedral',
      palette: { primary: '#0284c7', fogColor: '#082f49' },
      monument: 'dodecahedron',
      diorama: {
        title: 'Centro de Cómputo IBM System/360',
        terrain: 'interior',
        time: 'day',
        palette: { ground: '#e2e8f0', sky: '#0284c7', accent: '#0369a1' },
        props: [
          { kind: 'figure', pose: 'standing', pos: [0, -2.5], scale: 1.1, color: '#0369a1', secondary: '#f8fafc', label: 'Operador de Sistemas IBM System/360', pieceId: 'ibm-system360' },
          { kind: 'custom', pos: [-2.5, -2.5], scale: 1.3, parts: pcTower(), label: 'Consola Central IBM System/360', pieceId: 'ibm-system360' },
          { kind: 'custom', pos: [2.5, -2.5], scale: 1.4, parts: magneticCoreMemory(), label: 'Armario de Memoria de Ferrita de 8 Bits', pieceId: 'ibm-core-memory' },
          { kind: 'custom', pos: [0, -4.2], scale: 1.3, parts: nvmeSsd(), label: 'Unidad de Discos Winchester IBM 3340', pieceId: 'ibm-winchester-disk' },
          { kind: 'column', pos: [-6, -5], scale: 1.6, color: '#1e3a8a' },
          { kind: 'column', pos: [6, -5], scale: 1.6, color: '#1e3a8a' },
        ],
      },
      pieces: [
        {
          id: 'ibm-system360',
          title: 'IBM System/360 (1964)',
          text: 'Primera familia de computadoras comerciales con compatibilidad binaria de software entre modelos de diferente escala.',
          fact: 'Estandarizó el byte de 8 bits y el direccionamiento por bytes en toda la industria.',
          mnemonicCue: 'Una hilera de armarios azules impolutos con paneles frontales titilando al unísono con luces blancas.',
          model: { type: 'procedural', parts: pcTower() },
          imageSearch: { wikiTitle: 'IBM S/360', lang: 'es' },
          source: { quote: 'En 1964, IBM presentó la familia System/360, revolucionando la industria al introducir por primera vez compatibilidad', line: 55 },
        },
        {
          id: 'ibm-mag-tape',
          title: 'Cintas Magnéticas de 9 Pistas',
          text: 'El soporte rey para copias de seguridad bancarias y procesamiento por lotes durante tres décadas.',
          fact: 'Una bobina de cinta de media pulgada podía almacenar 100 megabytes con verificación de paridad vertical.',
          mnemonicCue: 'Dos carretes de cinta magnética dorada girando a velocidades vertiginosas con frenadas neumáticas instantáneas.',
          model: { type: 'procedural', parts: nvmeSsd() },
          imageSearch: { wikiTitle: 'Cinta magnética de almacenamiento de datos', lang: 'es' },
          source: { quote: 'Los centros de cómputo adoptaron el almacenamiento en cintas magnéticas de 9 pistas', line: 56 },
        },
        {
          id: 'ibm-ramac-winchester',
          title: 'Discos Duros: Del RAMAC al Winchester',
          text: 'Desde los 50 discos del tamaño de mesas del IBM 305 RAMAC hasta las cabezas flotantes selladas Winchester 3340.',
          fact: 'El término Winchester nació porque el modelo experimental usaba dos cabezales de 30 megabytes (30-30, como el rifle).',
          mnemonicCue: 'Platos circulares de espejo pulido girando a 7.200 RPM con brazos de lectura flotando a nanómetros.',
          model: { type: 'procedural', parts: nvmeSsd() },
          imageSearch: { wikiTitle: 'Disco duro', lang: 'es' },
          source: { quote: 'y los discos duros de cabezal móvil Winchester, introducidos por IBM en 1973', line: 56 },
        },
      ],
    },

    // 13. Douglas Engelbart & Xerox PARC
    {
      id: 'r-gui-mouse',
      name: 'Engelbart & Xerox PARC: La Interfaz Humana',
      description: 'El ratón de madera, hipertexto, ventanas gráficas interactivas y la red local Ethernet.',
      theme: 'cyberpunk',
      palette: { primary: '#3b82f6', fogColor: '#1e3a8a' },
      monument: 'torus',
      diorama: {
        title: 'La Madre de Todas las Demos (San Francisco, 1968)',
        terrain: 'interior',
        time: 'night',
        palette: { ground: '#111827', sky: '#3b82f6', accent: '#f59e0b' },
        props: [
          { kind: 'figure', pose: 'seated', pos: [0, -2.5], scale: 1.15, color: '#2563eb', secondary: '#f8fafc', label: 'Douglas Engelbart con su auricular', pieceId: 'gui-mother-demo' },
          { kind: 'custom', pos: [-2.2, -2.0], scale: 1.3, parts: mouse(), label: 'El Primer Ratón de Madera de Nogal', pieceId: 'gui-wooden-mouse' },
          { kind: 'custom', pos: [2.2, -2.0], scale: 1.2, parts: monitor(), label: 'Pantalla de Rayos Catódicos con Ventanas', pieceId: 'gui-mother-demo' },
          { kind: 'custom', pos: [0, -4.0], scale: 1.3, parts: keyboard(), label: 'Estación de Trabajo Xerox Alto y Red Ethernet', pieceId: 'gui-xerox-alto' },
          { kind: 'column', pos: [-6, -5], scale: 1.6, color: '#1e40af' },
          { kind: 'column', pos: [6, -5], scale: 1.6, color: '#1e40af' },
        ],
      },
      pieces: [
        {
          id: 'gui-mother-demo',
          title: 'La Madre de Todas las Demos (1968)',
          text: 'Engelbart presentó en vivo el ratón, videoconferencia, hipervínculos, edición colaborativa y ventanas gráficas.',
          fact: 'Fue una demostración futurista que predijo cómo interactuaría la humanidad con las computadoras 30 años después.',
          mnemonicCue: 'Una pantalla monumental en blanco y negro donde un puntero se mueve al unísono con la mano del usuario.',
          model: { type: 'procedural', parts: monitor() },
          imageSearch: { wikiTitle: 'La madre de todas las demostraciones', lang: 'es' },
          source: { quote: 'En 1968, Douglas Engelbart presentó en San Francisco la histórica "Madre de Todas las Demos"', line: 59 },
        },
        {
          id: 'gui-wooden-mouse',
          title: 'El Primer Ratón de Madera de Engelbart',
          text: 'Tallado en madera de nogal con dos ruedas metálicas perpendiculares para registrar el movimiento en los ejes X e Y.',
          fact: 'Se llamó "mouse" porque el cable de conexión salía por detrás pareciendo la cola de un ratón.',
          mnemonicCue: 'Un bloque de madera barnizada con un botón rojo que al deslizarse sobre el mármol emite chispas de luz.',
          model: { type: 'procedural', parts: mouse() },
          imageSearch: { wikiTitle: 'Ratón (informática)', lang: 'es' },
          source: { quote: 'introduciendo el ratón de computadora, las ventanas gráficas, el hipertexto', line: 59 },
        },
        {
          id: 'gui-xerox-alto',
          title: 'Xerox Alto y la Interfaz Gráfica (1973)',
          text: 'Creada en Xerox PARC por Alan Kay, Butler Lampson y Charles Thacker con mapa de bits, iconos y Ethernet.',
          fact: 'Steve Jobs visitó Xerox PARC en 1979 e incorporó estas ideas en el Apple Lisa y el Macintosh.',
          mnemonicCue: 'Un monitor vertical que muestra una hoja de papel blanca con carpetas y un cesto de basura en el escritorio.',
          model: { type: 'procedural', parts: keyboard() },
          imageSearch: { wikiTitle: 'Xerox Alto', lang: 'es' },
          source: { quote: 'El centro de investigación Xerox PARC en Palo Alto refinó estas ideas creando el Xerox Alto en 1973', line: 60 },
        },
      ],
    },

    // 14. El Microchip y la Revolución del PC
    {
      id: 'r-microprocessors',
      name: 'La Era del Microchip & El Computador Personal',
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
          { kind: 'figure', pose: 'seated', pos: [0, -2.5], scale: 1.1, color: '#059669', secondary: '#fed7aa', label: 'Steve Wozniak ensamblando la placa madre', pieceId: 'mic-homebrew-apple' },
          { kind: 'custom', pos: [-2.5, -2.2], scale: 1.4, parts: dipMicrochip(), label: 'Microprocesador Monolítico Intel 4004', pieceId: 'mic-intel4004' },
          { kind: 'custom', pos: [2.5, -2.2], scale: 1.2, parts: keyboard(), label: 'Computador Personal con Teclado Integrado', pieceId: 'mic-homebrew-apple' },
          { kind: 'custom', pos: [0, -4.2], scale: 1.3, parts: pcTower(), label: 'Estándar Abierto del IBM PC (1981)', pieceId: 'mic-ibm-pc' },
          { kind: 'column', pos: [-6, -5], scale: 1.5, color: '#064e3b' },
          { kind: 'column', pos: [6, -5], scale: 1.5, color: '#064e3b' },
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
          source: { quote: 'En 1971, Ted Hoff, Federico Faggin y Masatoshi Shima crearon el Intel 4004, el primer microprocesador monolítico', line: 63 },
        },
        {
          id: 'mic-moore',
          title: 'La Ley de Moore y el Escalado',
          text: 'Predicción de Gordon Moore: duplicación del número de transistores por chip cada dos años con costo decreciente.',
          fact: 'Pasamos de 2.300 transistores en 1971 a más de 100.000 millones en los chips actuales.',
          mnemonicCue: 'Una escalera mecánica infinita que duplica su altura a cada paso mientras se vuelve invisible al ojo humano.',
          model: { type: 'procedural', parts: aluChip() },
          imageSearch: { wikiTitle: 'Ley de Moore', lang: 'es' },
          source: { quote: 'Gordon Moore formuló la Ley de Moore en 1965, prediciendo que el número de transistores en un circuito integrado', line: 64 },
        },
        {
          id: 'mic-apple-two',
          title: 'Apple II: La Computadora de Masas (1977)',
          text: 'Diseñada íntegramente por Steve Wozniak con gráficos en color, ranuras de expansión y carcasa de plástico integrada.',
          fact: 'La hoja de cálculo VisiCalc convirtió al Apple II en una herramienta indispensable para empresas mundiales.',
          mnemonicCue: 'Una manzana de cristal arcoíris que proyecta una cuadrícula de hojas de cálculo tridimensionales.',
          model: { type: 'procedural', parts: keyboard() },
          imageSearch: { wikiTitle: 'Apple II', lang: 'es' },
          source: { quote: 'El Homebrew Computer Club en California incubó la revolución del PC, dando origen al Apple II', line: 65 },
        },
        {
          id: 'mic-ibm-pc',
          title: 'IBM PC 5150 y la Arquitectura Estándar (1981)',
          text: 'IBM adoptó componentes de mercado: procesador Intel 8088 y sistema operativo MS-DOS, forjando el estándar de la industria.',
          fact: 'Su arquitectura abierta provocó la eclosión de los "clones compatibles IBM PC" en todo el planeta.',
          mnemonicCue: 'Un monitor beige de rayos catódicos con letras verde esmeralda resplandeciendo en la oscuridad.',
          model: { type: 'procedural', parts: pcTower() },
          imageSearch: { wikiTitle: 'IBM Personal Computer', lang: 'es' },
          source: { quote: 'En 1981, IBM lanzó el IBM PC modelo 5150 con procesador Intel 8088 y sistema operativo MS-DOS', line: 66 },
        },
      ],
    },

    // 15. ARPANET e Internet
    {
      id: 'r-internet-arpanet',
      name: 'ARPANET, TCP/IP & La Telaraña Mundial',
      description: 'Conmutación de paquetes, Vint Cerf, Bob Kahn, Tim Berners-Lee y el nacimiento de la World Wide Web.',
      theme: 'cyberpunk',
      palette: { primary: '#3b82f6', fogColor: '#172554' },
      monument: 'ring_system',
      pieces: [
        {
          id: 'net-arpanet',
          title: 'ARPANET y el Primer Mensaje "LO" (1969)',
          text: 'Primera red de computadoras interconectada entre UCLA y Stanford mediante procesadores IMP.',
          fact: 'El primer mensaje enviado debía ser "LOGIN", pero el sistema colapsó tras transmitir las dos primeras letras "LO".',
          mnemonicCue: 'Un cable coaxial gigante que une dos continentes y pulsa con las letras "LO" en neón azul.',
          model: { type: 'procedural', parts: dataBus() },
          imageSearch: { wikiTitle: 'ARPANET', lang: 'es' },
          source: { quote: 'Las redes globales y los sistemas distribuidos convierten millones de computadoras individuales en un único organismo', line: 75 },
        },
        {
          id: 'net-tcp-ip',
          title: 'Los Protocolos TCP/IP de Cerf y Kahn (1974)',
          text: 'Arquitectura de paquetes descentralizada donde cada enrutador reenvía fragmentos de datos sin estado central.',
          fact: 'Permite que la red siga funcionando incluso si múltiples nodos intermedios son destruidos físicamente.',
          mnemonicCue: 'Sobres de luz que se dividen en mil sellos voladores y se ensamblan solos al llegar a su destino.',
          model: { type: 'procedural', parts: addressBus() },
          imageSearch: { wikiTitle: 'Modelo TCP/IP', lang: 'es' },
          source: { quote: 'Las redes globales y los sistemas distribuidos convierten millones de computadoras individuales', line: 75 },
        },
        {
          id: 'net-www-berners-lee',
          title: 'Tim Berners-Lee y la World Wide Web (1989)',
          text: 'En el CERN inventó el protocolo HTTP, las URLs y el lenguaje HTML sobre una computadora NeXTcube.',
          fact: 'Rehusó patentar la Web, entregándola libremente a la humanidad como un bien público universal.',
          mnemonicCue: 'Una telaraña infinita de hilos de diamante que conecta todos los libros de la historia humana.',
          model: { type: 'procedural', parts: codeMonolith() },
          imageSearch: { wikiTitle: 'World Wide Web', lang: 'es' },
          source: { quote: 'Las redes globales y los sistemas distribuidos convierten millones de computadoras individuales', line: 75 },
        },
      ],
    },

    // 16. Unix, C y Software Libre
    {
      id: 'r-unix-open-source',
      name: 'Unix, C & El Movimiento del Software Libre',
      description: 'Ken Thompson, Dennis Ritchie, las tuberías de Unix, Richard Stallman y el kernel Linux.',
      theme: 'cyberpunk',
      palette: { primary: '#10b981', fogColor: '#064e3b' },
      monument: 'dodecahedron',
      diorama: {
        title: 'Laboratorio de Bell Labs (Sala 2C-514, 1972)',
        backdrop: '/api/image/file?u=https%3A%2F%2Fthumb.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F1%2F1b%2FKen_Thompson_and_Dennis_Ritchie--1973.jpg%2F1280px-Ken_Thompson_and_Dennis_Ritchie--1973.jpg',
        terrain: 'interior',
        time: 'day',
        palette: { ground: '#1e293b', sky: '#475569', accent: '#f59e0b' },
        props: [
          { kind: 'figure', pose: 'seated', pos: [-1.2, -2.5], scale: 1.1, color: '#334155', secondary: '#f8fafc', label: 'Dennis Ritchie programando el compilador de C', pieceId: 'unix-c-lang' },
          { kind: 'figure', pose: 'standing', pos: [1.2, -2.8], scale: 1.15, color: '#1e293b', secondary: '#e2e8f0', label: 'Ken Thompson depurando el kernel de UNIX', pieceId: 'unix-philosophy' },
          { kind: 'custom', pos: [0, -3.8], scale: 1.5, parts: pdp11Minicomputer(), label: 'Gabinete DEC PDP-11/20 con panel de switches', pieceId: 'unix-philosophy' },
          { kind: 'custom', pos: [-1.2, -1.8], scale: 1.2, parts: teletypeASR33(), label: 'Terminal Teletype ASR-33 con rollo de papel', pieceId: 'unix-c-lang' },
          { kind: 'custom', pos: [3.2, -2.5], scale: 1.2, parts: whiteboardPipes(), label: 'Pizarra con el concepto de tuberías (Pipes |)', pieceId: 'unix-philosophy' },
          { kind: 'custom', pos: [-3.5, -3.5], scale: 1.4, parts: magneticCoreMemory(), label: 'Unidad de almacenamiento de cintas magnéticas' },
          { kind: 'column', pos: [-6, -5], scale: 1.5, color: '#334155' },
          { kind: 'column', pos: [6, -5], scale: 1.5, color: '#334155' },
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
          id: 'unx-linux-kernel',
          title: 'Linus Torvalds y el Kernel Linux (1991)',
          text: '"Estoy haciendo un sistema operativo libre (solo un pasatiempo, no será grande ni profesional como GNU)".',
          fact: 'Hoy Linux gobierna el 100% de las 500 supercomputadoras más veloces del mundo y miles de millones de teléfonos.',
          mnemonicCue: 'Un pingüino tallado en obsidiana que sostiene el globo terráqueo sobre su lomo iluminado por fibra óptica.',
          model: { type: 'procedural', parts: motherboard() },
          imageSearch: { wikiTitle: 'Linux (núcleo)', lang: 'es' },
          source: { quote: 'Linus Torvalds publicó en 1991 el kernel Linux desde su dormitorio en Helsinki', line: 34 },
        },
      ],
    },

    // 17. Viaje al Interior del CPU (Mundo Silicio)
    {
      id: 'r-inside-cpu',
      name: 'Viaje al Interior del Silicio: El Die de CPU',
      description: 'Una inmersión a escala nanométrica: núcleos de cómputo, autopistas Infinity Fabric, jerarquía de caché y transistores FinFET.',
      theme: 'cyberpunk',
      palette: { primary: '#00ffcc', fogColor: '#030712' },
      monument: 'ring_system',
      diorama: {
        title: 'Mundo Dentro del CPU: El Laberinto de Silicio',
        backdrop: '/api/image/file?u=https%3A%2F%2Fthumb.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F5%2F52%2FIntel_4004.jpg%2F1280px-Intel_4004.jpg',
        terrain: 'cellular',
        time: 'night',
        palette: { ground: '#022c22', sky: '#064e3b', accent: '#10b981' },
        props: [
          { kind: 'custom', pos: [0, -3.2], scale: 1.8, parts: aluChip(), label: 'Unidad Aritmético-Lógica (ALU) de 64 bits', pieceId: 'proc-alu' },
          { kind: 'custom', pos: [-3.5, -2.5], scale: 1.5, parts: dataBus(), label: 'Etapas del Pipeline de Ejecución', pieceId: 'proc-pipeline' },
          { kind: 'custom', pos: [3.5, -2.5], scale: 1.5, parts: cacheL1(), label: 'Bancos de Memoria Caché ultrarrápida', pieceId: 'proc-cache' },
          { kind: 'custom', pos: [0, -1.2], scale: 1.4, parts: controlUnit(), label: 'Unidad de Control y Secuenciador', pieceId: 'proc-control-unit' },
          { kind: 'custom', pos: [0, -5.0], scale: 2.2, parts: cpuDieLandscape(), label: 'Complejo de Núcleos y Bus Infinity Fabric' },
          { kind: 'column', pos: [-6, -4], scale: 1.2, color: '#059669' },
          { kind: 'column', pos: [6, -4], scale: 1.2, color: '#059669' },
          { kind: 'column', pos: [-3, -6], scale: 1.5, color: '#10b981' },
          { kind: 'column', pos: [3, -6], scale: 1.5, color: '#10b981' },
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
          source: { quote: 'Dentro de un procesador moderno habitan más de 100 mil millones de transistores FinFET y GAAFET', line: 69 },
        },
        {
          id: 'cpu-alu-furnace',
          title: 'La Fragua de la ALU y los Registros',
          text: 'El núcleo de cómputo donde se ejecutan sumas y operaciones booleanas en fracciones de nanosegundo.',
          fact: 'Opera en sincronía con registros de trabajo accesibles en un único ciclo de reloj.',
          mnemonicCue: 'Una fragua de magma digital que forja sumas a la velocidad de la luz en el centro de la sala.',
          model: { type: 'procedural', parts: aluChip() },
          imageSearch: { wikiTitle: 'Unidad aritmético lógica', lang: 'es' },
          source: { quote: 'La Unidad Aritmético-Lógica (ALU) forja operaciones aritméticas y booleanas en picosegundos', line: 70 },
        },
        {
          id: 'cpu-cache-strata',
          title: 'Estratificación de Caché: L1, L2 y L3',
          text: 'Memorias ultrarrápidas de transistores estáticos SRAM integradas para evitar el viaje a la lenta memoria RAM.',
          fact: 'La caché L1 entrega datos en 1 nanosegundo; la caché L3 compartida puede superar los 96 MB de 3D V-Cache.',
          mnemonicCue: 'Murallas concéntricas de hielo cristalino que entregan datos congelados al procesador al instante.',
          model: { type: 'procedural', parts: cacheL1() },
          imageSearch: { wikiTitle: 'Memoria caché', lang: 'es' },
          source: { quote: 'La jerarquía de cachés multinivel (L1 de 1 ciclo, L2 de 4 ciclos, L3 compartida de 15 ciclos)', line: 71 },
        },
        {
          id: 'cpu-interconnect',
          title: 'Interconexión de Bus: Infinity Fabric & Mesh',
          text: 'Redes internas de comunicación que interconectan múltiples chiplets y núcleos a terabytes por segundo.',
          fact: 'Los procesadores modernos abandonaron el silicio monolítico para adoptar chiplets modulares interconectados.',
          mnemonicCue: 'Una autopista de fotones dorados cruzando puentes elevados entre ciudades de transistores.',
          model: { type: 'procedural', parts: dataBus() },
          imageSearch: { wikiTitle: 'Bus (informática)', lang: 'es' },
          source: { quote: 'El bus interno de interconexión (Infinity Fabric, Mesh o Ring Bus) actúa como una autopista de fotones', line: 72 },
        },
      ],
    },

    // 18. GPUs y Cómputo Paralelo
    {
      id: 'r-gpu-parallel',
      name: 'La Revolución de las GPUs & Cómputo Masivo',
      description: 'De la aceleración de polígonos 3D y Shaders a la inferencia de Inteligencia Artificial y matrices tensoriales.',
      theme: 'cyberpunk',
      palette: { primary: '#10b981', fogColor: '#052e16' },
      monument: 'torus',
      pieces: [
        {
          id: 'gpu-cuda-cores',
          title: 'Núcleos CUDA y Procesamiento Masivo Paralelo',
          text: 'Miles de pequeños núcleos ALU que ejecutan la misma instrucción sobre miles de hilos en paralelo (SIMT).',
          fact: 'Una GPU moderna ejecuta más de 16.000 hilos concurrentes para calcular geometría 3D o multiplicar matrices.',
          mnemonicCue: 'Un ejército de diez mil soldados mecánicos disparando flechas de fuego al mismo milisegundo.',
          model: { type: 'procedural', parts: motherboard() },
          imageSearch: { wikiTitle: 'Unidad de procesamiento gráfico', lang: 'es' },
          source: { quote: 'El código fuente es la única materia abstracta que puede autoejecutarse y alterar el mundo físico', line: 73 },
        },
        {
          id: 'gpu-tensor-cores',
          title: 'Núcleos Tensoriales y Multiplicación de Matrices',
          text: 'Hardware especializado para operar matrices FP16, BF16 e INT8 en un solo ciclo, motor de los LLMs modernos.',
          fact: 'Capaces de procesar cientos de TeraFLOPs de cálculo tensorial dedicados a redes neuronales profundas.',
          mnemonicCue: 'Un cubo rubik de plasma dorado que rota todas sus caras en una fracción de nanosegundo.',
          model: { type: 'procedural', parts: aluChip() },
          imageSearch: { wikiTitle: 'Unidad de procesamiento tensorial', lang: 'es' },
          source: { quote: 'Dentro de un procesador moderno habitan más de 100 mil millones de transistores', line: 69 },
        },
        {
          id: 'gpu-shaders-raytracing',
          title: 'Shaders y Trazado de Rayos en Tiempo Real (RTX)',
          text: 'Aceleradores dedicados para calcular intersecciones de rayos de luz contra cajas envolventes (BVH) en tiempo real.',
          fact: 'Simula el comportamiento físico real de fotones para reflejos y refracciones fotorrealistas en 3D.',
          mnemonicCue: 'Láseres dorados rebotando en millones de prismas creando reflejos de vidrio viviente.',
          model: { type: 'procedural', parts: monitor() },
          imageSearch: { wikiTitle: 'Trazado de rayos (gráficos)', lang: 'es' },
          source: { quote: 'Dentro de un procesador moderno habitan más de 100 mil millones de transistores', line: 69 },
        },
      ],
    },

    // 19. Jerarquía de Memoria
    {
      id: 'r-memory-strata',
      name: 'Jerarquía de Memoria: De Núcleos a HBM3e',
      description: 'El escalonamiento de almacenamiento entre la velocidad del nanosegundo y la persistencia de petabytes.',
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
          source: { quote: 'Los centros de cómputo adoptaron el almacenamiento en cintas magnéticas', line: 56 },
        },
        {
          id: 'mem-dram-ddr5',
          title: 'DRAM Dinámica DDR5',
          text: 'Memoria principal volátil con condensadores microscópicos que requieren refresco continuo miles de veces por segundo.',
          fact: 'Alcanza tasas de transferencia de más de 6.400 MT/s con canales duales de 32 bits por módulo.',
          mnemonicCue: 'Un tablero de ajedrez donde cada casilla retiene una esfera de luz eléctrica que se recarga sin cesar.',
          model: { type: 'procedural', parts: ramStick() },
          imageSearch: { wikiTitle: 'DDR5 SDRAM', lang: 'es' },
          source: { quote: 'La jerarquía de cachés multinivel (L1 de 1 ciclo, L2 de 4 ciclos, L3 compartida de 15 ciclos)', line: 71 },
        },
        {
          id: 'mem-hbm-3d',
          title: 'Memoria Apilada HBM3e y Vías 3D (TSV)',
          text: 'Pilas verticales de dados de silicio conectados mediante vías a través de silicio (TSV) con anchos de banda de 3 TB/s.',
          fact: 'Se coloca en el mismo interposer de silicio pegada a la GPU para eliminar la latencia de trazas externas.',
          mnemonicCue: 'Un rascacielos monolítico de chips superpuestos atravesados por columnas verticales de fotones.',
          model: { type: 'procedural', parts: nvmeSsd() },
          imageSearch: { wikiTitle: 'High Bandwidth Memory', lang: 'es' },
          source: { quote: 'El bus interno de interconexión (Infinity Fabric, Mesh o Ring Bus) actúa como una autopista de fotones', line: 72 },
        },
      ],
    },

    // 20. El Mundo del Código y Ciberespacio
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
        palette: { ground: '#09090b', sky: '#18181b', accent: '#a855f7' },
        props: [
          { kind: 'custom', pos: [0, -3.2], scale: 1.8, parts: codeMonolith(), label: 'Monolito de Sintaxis y Código Fuente', pieceId: 'prog-clean-code' },
          { kind: 'custom', pos: [-3.5, -2.5], scale: 1.4, parts: addressBus(), label: 'Árbol de Sintaxis Abstracta (AST) del Compilador', pieceId: 'prog-compilers' },
          { kind: 'custom', pos: [3.5, -2.5], scale: 1.4, parts: registerFile(), label: 'Red de Tipos Estáticos y Polimorfismo', pieceId: 'prog-type-systems' },
          { kind: 'custom', pos: [0, -1.2], scale: 1.3, parts: controlBus(), label: 'Pila de Ejecución (Call Stack) y Memoria Heap', pieceId: 'prog-paradigms' },
          { kind: 'column', pos: [-5, -5], scale: 1.6, color: '#d946ef' },
          { kind: 'column', pos: [5, -5], scale: 1.6, color: '#d946ef' },
          { kind: 'column', pos: [0, -7], scale: 2.0, color: '#8b5cf6' },
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
          source: { quote: 'Los compiladores traducen la intención humana en árboles de sintaxis abstracta (AST)', line: 75 },
        },
        {
          id: 'cod-paradigms',
          title: 'Paradigmas: De Imperativo a Funcional',
          text: 'Diferentes modelos mentales para estructurar el pensamiento computacional: estados mutables versus funciones puras.',
          fact: 'Los lenguajes modernos combinan paradigmas para maximizar la seguridad de memoria y el paralelismo.',
          mnemonicCue: 'Dos espejos enfrentados: uno refleja engranajes mecánicos y el otro un flujo continuo de agua cristalina.',
          model: { type: 'procedural', parts: registerFile() },
          imageSearch: { wikiTitle: 'Paradigma de programación', lang: 'es' },
          source: { quote: 'Desde el código binario y el lenguaje ensamblador hasta lenguajes expresivos modernos', line: 74 },
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

    // 21. Hardware para IA y Redes Neuronales
    {
      id: 'r-ai-neural',
      name: 'Arquitecturas para Inteligencia Artificial',
      description: 'TPUs, aceleradores neuromórficos, motores de atención matricial y chips diseñados para Transformers.',
      theme: 'cyberpunk',
      palette: { primary: '#ec4899', fogColor: '#500724' },
      monument: 'ring_system',
      pieces: [
        {
          id: 'ai-tpu-matrix',
          title: 'Unidades de Procesamiento Tensorial (TPU)',
          text: 'Arreglos sistólicos donde los datos fluyen a través de una cuadrícula de multiplicadores sin volver a registros.',
          fact: 'Reducen drásticamente el consumo energético en multiplicaciones de matrices densas de cientos de gigabytes.',
          mnemonicCue: 'Una ola marina de cristal rosa que baña una cuadrícula de prismas que multiplican matrices al contacto.',
          model: { type: 'procedural', parts: aluChip() },
          imageSearch: { wikiTitle: 'Tensor Processing Unit', lang: 'es' },
          source: { quote: 'Dentro de un procesador moderno habitan más de 100 mil millones de transistores', line: 69 },
        },
        {
          id: 'ai-transformer-engine',
          title: 'El Motor Transformer y Mecanismos de Atención',
          text: 'Hardware adaptativo que conmuta dinámicamente entre precisión FP8 y FP16 para acelerar la atención de autoatención.',
          fact: 'Permite entrenar y ejecutar modelos de lenguaje masivos con billones de parámetros en clústeres gigantescos.',
          mnemonicCue: 'Un ojo cibernético gigante que enfoca múltiples puntos de un texto simultáneamente con haces de luz púrpura.',
          model: { type: 'procedural', parts: controlUnit() },
          imageSearch: { wikiTitle: 'Transformador (modelo de aprendizaje profundo)', lang: 'es' },
          source: { quote: 'El código fuente es la única materia abstracta que puede autoejecutarse', line: 73 },
        },
        {
          id: 'ai-neuromorphic',
          title: 'Cómputo Neuromórfico y Redes de Picos (SNN)',
          text: 'Circuitos integrados analógico-digitales que emulan la dinámica de potencial de membrana de sinapsis biológicas.',
          fact: 'Chips como Loihi de Intel consumen mil veces menos energía al disparar señales solo cuando hay eventos relevantes.',
          mnemonicCue: 'Una red de dendritas de silicio que emiten destellos luminosos exactamente como las neuronas del cerebro humano.',
          model: { type: 'procedural', parts: planarTransistor() },
          imageSearch: { wikiTitle: 'Ingeniería neuromórfica', lang: 'es' },
          source: { quote: 'convierte millones de computadoras individuales en un único organismo computacional planetario', line: 76 },
        },
      ],
    },

    // 22. Supercomputadoras a Escala Exaflop
    {
      id: 'r-supercomputers',
      name: 'Supercomputadoras a Escala Exaflop',
      description: 'Frontier, Aurora, clústeres interconectados con Slingshot e InfiniBand para simulaciones del cosmos y el clima.',
      theme: 'cyberpunk',
      palette: { primary: '#3b82f6', fogColor: '#1e3a8a' },
      monument: 'dodecahedron',
      pieces: [
        {
          id: 'sup-frontier',
          title: 'Frontier y la Barrera del Exaflop (2022)',
          text: 'Primera supercomputadora en superar 1,1 ExaFLOPs en Oak Ridge: más de un trillón de cálculos por segundo.',
          fact: 'Ocupa 74 gabinetes del tamaño de furgonetas refrigerados por 22.000 litros de agua por minuto.',
          mnemonicCue: 'Una muralla de bastidores de servidores negros bañados en refrigerante líquido con cascadas de datos fluorescentes.',
          model: { type: 'procedural', parts: pcTower() },
          imageSearch: { wikiTitle: 'Frontier (supercomputadora)', lang: 'es' },
          source: { quote: 'Las supercomputadoras modernas como Frontier superan el Exaflop (un trillón de operaciones de punto flotante)', line: 75 },
        },
        {
          id: 'sup-infiniband',
          title: 'Redes Ópticas InfiniBand y Slingshot',
          text: 'Interconexión de baja latencia (sub-microsegundo) con RDMA que permite a GPUs acceder a memorias remotas.',
          fact: 'Evita la pila de red del sistema operativo transfiriendo datos directamente de memoria a memoria.',
          mnemonicCue: 'Autopistas de fibra de vidrio azul que conectan miles de gabinetes sin producir un solo atasco.',
          model: { type: 'procedural', parts: dataBus() },
          imageSearch: { wikiTitle: 'InfiniBand', lang: 'es' },
          source: { quote: 'Las redes globales y los sistemas distribuidos convierten millones de computadoras individuales', line: 75 },
        },
        {
          id: 'sup-scientific-sim',
          title: 'Simulaciones del Clima y Fusión Nuclear',
          text: 'Modelado por elementos finitos de reactores de fusión tokamak y dinámicas climáticas planetarias globales.',
          fact: 'Calcula ecuaciones magnetohidrodinámicas que serían imposibles de resolver analíticamente a mano.',
          mnemonicCue: 'Una esfera de plasma solar flotando en el centro de la sala contenida por campos magnéticos invisibles.',
          model: { type: 'procedural', parts: systemClock() },
          imageSearch: { wikiTitle: 'Simulación por computadora', lang: 'es' },
          source: { quote: 'convierte millones de computadoras individuales en un único organismo computacional planetario', line: 76 },
        },
      ],
    },

    // 23. Criptografía y Seguridad
    {
      id: 'r-cryptography',
      name: 'Criptografía, Llaves Asimétricas & Blockchain',
      description: 'De RSA y curvas elípticas a árboles Merkle inmutables y la defensa contra ataques cuánticos.',
      theme: 'void',
      palette: { primary: '#eab308', fogColor: '#422006' },
      monument: 'crystal',
      pieces: [
        {
          id: 'cry-rsa-diffie',
          title: 'Diffie-Hellman y la Criptografía Asimétrica (1976)',
          text: 'Permitió a dos partes acordar una clave secreta a través de un canal público inseguro sin conocerse previamente.',
          fact: 'Fundó la seguridad de todo el comercio electrónico, HTTPS y las firmas digitales de Internet.',
          mnemonicCue: 'Dos llaves de oro entrelazadas que se cierran con candados que solo el destinatario puede abrir.',
          model: { type: 'procedural', parts: controlBus() },
          imageSearch: { wikiTitle: 'Criptografía asimétrica', lang: 'es' },
          source: { quote: 'El código fuente es la única materia abstracta que puede autoejecutarse', line: 73 },
        },
        {
          id: 'cry-merkle-trees',
          title: 'Árboles Merkle y Consenso Distribuido',
          text: 'Estructuras de datos criptográficas con hashes anidados que permiten verificar la integridad de bloques de datos.',
          fact: 'Base matemática de Git, sistemas de archivos ZFS y las redes descentralizadas blockchain.',
          mnemonicCue: 'Un árbol de raíces doradas donde cada hoja sella criptográficamente a todas las ramas inferiores.',
          model: { type: 'procedural', parts: addressBus() },
          imageSearch: { wikiTitle: 'Árbol de Merkle', lang: 'es' },
          source: { quote: 'Las redes globales y los sistemas distribuidos convierten millones de computadoras individuales', line: 75 },
        },
        {
          id: 'cry-post-quantum',
          title: 'Criptografía Post-Cuántica (PQC)',
          text: 'Algoritmos basados en retículos matemáticos multidimensionales inmunes a los ataques del algoritmo de Shor.',
          fact: 'El NIST estandarizó en 2024 los primeros esquemas post-cuánticos (ML-KEM y ML-DSA) para blindar el futuro.',
          mnemonicCue: 'Un hipercubo en cuatro dimensiones que refracta los rayos láser cuánticos sin permitir su lectura.',
          model: { type: 'procedural', parts: registerFile() },
          imageSearch: { wikiTitle: 'Criptografía postcuántica', lang: 'es' },
          source: { quote: 'convierte millones de computadoras individuales en un único organismo computacional planetario', line: 76 },
        },
      ],
    },

    // 24. Frontera Cuántica
    {
      id: 'r-quantum-future',
      name: 'Frontera de la Computación: Qubits & Criostatos a 15 mK',
      description: 'Superposición, entrelazamiento cuántico, algoritmos de Shor y refrigeradores de dilución cerca del cero absoluto.',
      theme: 'cyberpunk',
      palette: { primary: '#06b6d4', fogColor: '#083344' },
      monument: 'crystal',
      diorama: {
        title: 'El Criostato Cuántico a 15 Millikelvin',
        backdrop: '/api/image/file?u=https%3A%2F%2Fthumb.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F91%2FIBM_Quantum_System_One.jpg%2F1280px-IBM_Quantum_System_One.jpg',
        terrain: 'interior',
        time: 'night',
        palette: { ground: '#030712', sky: '#111827', accent: '#6366f1' },
        props: [
          { kind: 'custom', pos: [0, -3.8], scale: 2.0, parts: quantumQubitChamber(), label: 'Criostato de Dilución de Oro (15 mK)', pieceId: 'comp-quantum-cryo' },
          { kind: 'custom', pos: [-3.2, -2.5], scale: 1.4, parts: blochSphereState(), label: 'Esfera de Bloch: Superposición |ψ⟩', pieceId: 'comp-quantum-qubit' },
          { kind: 'custom', pos: [3.2, -2.5], scale: 1.3, parts: planarTransistor(), label: 'Resonador de Entrelazamiento Cuántico', pieceId: 'comp-quantum-entanglement' },
          { kind: 'custom', pos: [0, -1.5], scale: 1.2, parts: dipMicrochip(), label: 'Procesador Cuántico de Qubits Superconductores', pieceId: 'comp-quantum-algorithms' },
          { kind: 'column', pos: [-6, -5], scale: 1.6, color: '#fbbf24' },
          { kind: 'column', pos: [6, -5], scale: 1.6, color: '#fbbf24' },
        ],
      },
      pieces: [
        {
          id: 'q-qubit-superposition',
          title: 'El Qubit y la Superposición Cuántica',
          text: 'A diferencia del bit clásico (0 o 1), el qubit existe en una combinación lineal probabilística de ambos estados simultáneamente.',
          fact: 'Con 300 qubits perfectamente entrelazados se pueden representar más estados que partículas en el universo observable.',
          mnemonicCue: 'Una esfera de luz cian flotante que oscila en múltiples dimensiones al mismo tiempo sin decidir su color.',
          model: { type: 'procedural', parts: quantumQubitChamber() },
          imageSearch: { wikiTitle: 'Cúbit', lang: 'es' },
          source: { quote: 'El código fuente es la única materia abstracta que puede autoejecutarse y alterar el mundo físico', line: 73 },
        },
        {
          id: 'q-entanglement-gates',
          title: 'Entrelazamiento y Puertas Lógicas Cuánticas',
          text: 'Puertas cuánticas unitarias (Hadamard, CNOT) que manipulan la fase y amplitud de ondas sin colapsar la superposición.',
          fact: 'Einstein llamó al entrelazamiento "acción fantasmal a distancia" (spooky action at a distance).',
          mnemonicCue: 'Dos anillos de luz que giran sincronizados a kilómetros de distancia reflejando cada movimiento mutuo.',
          model: { type: 'procedural', parts: systemClock() },
          imageSearch: { wikiTitle: 'Entrelazamiento cuántico', lang: 'es' },
          source: { quote: 'convierte millones de computadoras individuales en un único organismo computacional planetario', line: 76 },
        },
        {
          id: 'q-dilution-fridge',
          title: 'El Criostato Dorado a 15 Milikelvin',
          text: 'Refrigerador de dilución de helio que enfría el procesador cuántico casi al cero absoluto (-273,13 °C).',
          fact: 'Es uno de los puntos más fríos de todo el cosmos conocido, superando la frialdad del vacío interestelar.',
          mnemonicCue: 'Una lámpara de araña de discos de oro y tubos de plata que congela el aire circundante en copos de helio relucientes.',
          model: { type: 'procedural', parts: quantumQubitChamber() },
          imageSearch: { wikiTitle: 'Refrigerador de dilución', lang: 'es' },
          source: { quote: 'convierte millones de computadoras individuales en un único organismo computacional planetario', line: 76 },
        },
      ],
    },
  ],
  graph: {
    start: 'r-origin',
    edges: [
      // 1. Origen hacia las 4 puertas principales
      { from: 'r-origin', to: 'r-lovelace', kind: 'next' },
      { from: 'r-origin', to: 'r-turing', kind: 'next' },
      { from: 'r-origin', to: 'r-tubes', kind: 'next' },
      { from: 'r-origin', to: 'r-inside-cpu', kind: 'next' },

      // 2. Ruta Pioneros: Lovelace, Turing, Hopper, Hamilton, Shannon
      { from: 'r-lovelace', to: 'r-turing', kind: 'related' },
      { from: 'r-lovelace', to: 'r-hopper', kind: 'next' },
      { from: 'r-turing', to: 'r-colossus', kind: 'related' },
      { from: 'r-turing', to: 'r-hopper', kind: 'related' },
      { from: 'r-turing', to: 'r-von-neumann', kind: 'next' },
      { from: 'r-hopper', to: 'r-hamilton-apollo', kind: 'next' },
      { from: 'r-hopper', to: 'r-shannon-info', kind: 'related' },
      { from: 'r-hamilton-apollo', to: 'r-unix-open-source', kind: 'next' },
      { from: 'r-hamilton-apollo', to: 'r-gui-mouse', kind: 'related' },
      { from: 'r-shannon-info', to: 'r-cryptography', kind: 'next' },
      { from: 'r-shannon-info', to: 'r-von-neumann', kind: 'related' },

      // 3. Ruta Máquinas Históricas: ENIAC, Colossus, Transistores, IBM 360
      { from: 'r-tubes', to: 'r-colossus', kind: 'next' },
      { from: 'r-tubes', to: 'r-transistors', kind: 'next' },
      { from: 'r-colossus', to: 'r-transistors', kind: 'related' },
      { from: 'r-transistors', to: 'r-fairchild-silicon', kind: 'next' },
      { from: 'r-transistors', to: 'r-ibm360', kind: 'related' },
      { from: 'r-fairchild-silicon', to: 'r-microprocessors', kind: 'next' },
      { from: 'r-fairchild-silicon', to: 'r-inside-cpu', kind: 'related' },
      { from: 'r-ibm360', to: 'r-microprocessors', kind: 'next' },
      { from: 'r-ibm360', to: 'r-memory-strata', kind: 'related' },

      // 4. Ruta Revolución Personal e Interfaces: PC, GUI, Internet, Unix
      { from: 'r-microprocessors', to: 'r-gui-mouse', kind: 'next' },
      { from: 'r-gui-mouse', to: 'r-internet-arpanet', kind: 'next' },
      { from: 'r-internet-arpanet', to: 'r-unix-open-source', kind: 'related' },
      { from: 'r-internet-arpanet', to: 'r-code-world', kind: 'next' },
      { from: 'r-unix-open-source', to: 'r-code-world', kind: 'next' },

      // 5. Ruta Silicio, Arquitectura y Cómputo Masivo
      { from: 'r-von-neumann', to: 'r-inside-cpu', kind: 'next' },
      { from: 'r-inside-cpu', to: 'r-gpu-parallel', kind: 'next' },
      { from: 'r-inside-cpu', to: 'r-memory-strata', kind: 'next' },
      { from: 'r-gpu-parallel', to: 'r-ai-neural', kind: 'next' },
      { from: 'r-gpu-parallel', to: 'r-supercomputers', kind: 'related' },
      { from: 'r-memory-strata', to: 'r-supercomputers', kind: 'related' },
      { from: 'r-ai-neural', to: 'r-supercomputers', kind: 'next' },
      { from: 'r-supercomputers', to: 'r-quantum-future', kind: 'next' },

      // 6. Criptografía y Convergencia hacia el Ciberespacio y la Física Cuántica
      { from: 'r-code-world', to: 'r-cryptography', kind: 'next' },
      { from: 'r-code-world', to: 'r-ai-neural', kind: 'related' },
      { from: 'r-cryptography', to: 'r-quantum-future', kind: 'next' },
    ],
  },
})
