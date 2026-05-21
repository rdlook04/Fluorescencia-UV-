import { FluorescenceEntry, InteractiveZone } from "../types";

export const FLUORESCENCE_DATABASE: FluorescenceEntry[] = [
  {
    id: "coral-orange-acne",
    colorName: "Naranja Coral / Rojo Anaranjado",
    hexColor: "#ff7a00",
    glowClass: "shadow-[0_0_15px_rgba(255,122,0,0.85)] border-orange-500 text-orange-400",
    woodLampLook: "Brillo naranja coral o rosado brillante localizado en folículos",
    substance: "Protoporfirinas",
    cause: "Acné Activo / Sebo Obstruido",
    microbiology: "Cutibacterium acnes (antes Propionibacterium acnes)",
    description: "Estas bacterias anaeróbicas que viven en las glándulas sebáceas producen porfirinas como parte de su metabolismo normal. Bajo la luz UV de 365nm (Lámpara de Wood), estas porfirinas brillan con un color naranja coral a rojo brillante. Si brilla intensamente, indica colonización activa en los folículos pilosebáceos.",
    symptoms: ["Puntos brillantes en la nariz y mejillas", "Puntos negros fluorescentes", "Inflamación folicular"],
    relevance: "Ayuda a dermatólogos a evaluar el nivel de colonización bacteriana y monitorear la efectividad del tratamiento antibacteriano o de fototerapia.",
    clinicalTip: "Un lavado facial profundo reduce temporalmente la fluorescencia al barrer el sebo y las porfirinas libres de la superficie."
  },
  {
    id: "coral-red-erythrasma",
    colorName: "Rojo Coral Intenso",
    hexColor: "#ff0055",
    glowClass: "shadow-[0_0_15px_rgba(255,0,85,0.85)] border-rose-500 text-rose-400",
    woodLampLook: "Fluorescencia rojo coral uniforme y extendida en pliegues cutáneos",
    substance: "Coproporfirina III",
    cause: "Eritrasma",
    microbiology: "Corynebacterium minutissimum",
    description: "El eritrasma es una infección bacteriana superficial común que ocurre en pliegues de la piel (ingles, axilas, espacios interdigitales de los pies). La bacteria produce coproporphyrin III, que causa una fluorescencia rojo coral brillante muy característica bajo la luz de Wood. Permite diferenciar instantáneamente esta condición de las infecciones fúngicas como la tiña, que no brilla en rojo.",
    symptoms: ["Placas marrones o rojizas descamativas", "Picazón leve en pliegues de la piel", "Maceración interdigital"],
    relevance: "Es el estándar de oro clínico rápido para diagnosticar eritrasma sin requerir cultivos de laboratorio.",
    clinicalTip: "No se debe lavar el área antes del examen de luz de Wood, ya que la coproporfirina es soluble en agua y el brillo rojo podría desaparecer temporalmente."
  },
  {
    id: "green-pseudomonas",
    colorName: "Verde Brillante / Amarillo-Verdoso",
    hexColor: "#39ff14",
    glowClass: "shadow-[0_0_15px_rgba(57,255,20,0.85)] border-green-500 text-green-400",
    woodLampLook: "Fluorescencia verde brillante luminiscente (casi de ciencia ficción)",
    substance: "Pioverdina o Fluoresceína",
    cause: "Infección por Pseudomonas (Quemaduras, Úlceras o Uñas)",
    microbiology: "Pseudomonas aeruginosa",
    description: "Esta bacteria oportunista produce el pigmento hidrosoluble pioverdina (un sideróforo fluorescente). Bajo la luz UV, genera un brillo verde claro brillante muy llamativo. Es crucial en unidades de quemados y clínicas de heridas para detectar contaminación bacteriana temprana antes de que se desarrolle una sepsis general.",
    symptoms: ["Exudado de olor dulce ('uvas' o 'tortilla')", "Coloración verdosa en vendajes o uñas", "Retraso en la cicatrización de heridas"],
    relevance: "Herramienta vital para cribado rápido en camas de quemaduras o detección de 'síndrome de la uña verde' (clonixis por pseudomonas).",
    clinicalTip: "La fluorescencia puede detectarse en los apósitos de las heridas incluso antes de que la herida misma muestre signos obvios de bacteriemia superficial."
  },
  {
    id: "green-tinea-capitis",
    colorName: "Verde Claro / Verde Lima",
    hexColor: "#a3e635",
    glowClass: "shadow-[0_0_15px_rgba(163,230,53,0.85)] border-lime-500 text-lime-400",
    woodLampLook: "Brillo verde claro brillante en los tallos de cabellos individuales",
    substance: "Metabolitos de Queratina Fúngicos",
    cause: "Tiña de la Cabeza (Micosis folicular)",
    microbiology: "Microsporum canis / Microsporum audouinii",
    description: "Ciertas especies de hongos dermatofitos degradan la queratina folicular produciendo un metabolito que fluoresce de forma muy brillante con un tono verde-azul o verde claro. Sin embargo, otras especies de dermatofitos como Trichophyton tonsurans (causa común en América) no fluorescen, por lo que un resultado negativo no descarta la infección.",
    symptoms: ["Zonas redondeadas de calvicie (alopecia areata-like)", "Puntos negros en el cuero cabelludo", "Descamación y picazón intensa en niños"],
    relevance: "Guía al médico sobre qué cabellos específicos arrancar o raspar para realizar el cultivo o examen micológico directo.",
    clinicalTip: "Si la sospecha clínica de tiña es alta pero no brilla verde, puede ser del género Trichophyton que requiere otro tipo de diagnóstico."
  },
  {
    id: "yellow-tinea-versicolor",
    colorName: "Amarillo Dorado / Cobrizo",
    hexColor: "#eab308",
    glowClass: "shadow-[0_0_15px_rgba(234,179,8,0.85)] border-yellow-500 text-yellow-400",
    woodLampLook: "Fluorescencia amarillo anaranjado suave, cobriza o dorada apagada",
    substance: "Compuestos de Piridona (Pitiacitrina/Pitiriarubina)",
    cause: "Tiña Versicolor (Pitiriasis Versicolor)",
    microbiology: "Malassezia furfur (antes Pityrosporum ovale)",
    description: "Este hongo levaduriforme es parte de la flora de la piel sana pero puede proliferar en climas cálidos y húmedos. Produce metabolitos con propiedades de absorción de luz como la pitiacitrina, que bajo luz ultravioleta emite una luminiscencia amarillo-dorada o cobriza. Ayuda a distinguir las manchas hipopigmentadas de vitiligo (que brillan blanco-azul).",
    symptoms: ["Manchas redondas más claras o más oscuras que la piel en el torso", "Fina descamación al raspar la mancha (signo del uñazo)", "Ligera picazón con el sudor"],
    relevance: "Clave para confirmar que las manchas claras en piel bronceada se deben a este hongo activo y no a una pérdida pigmentaria permanente.",
    clinicalTip: "Malassezia necesita lípidos para prosperar, por lo que suele colonizar el pecho, la espalda alta y la cara."
  },
  {
    id: "bluish-white-vitiligo",
    colorName: "Blanco Azulado Brillante",
    hexColor: "#38bdf8",
    glowClass: "shadow-[0_0_15px_rgba(56,189,248,0.85)] border-sky-500 text-sky-400",
    woodLampLook: "Blanco tiza muy brillante y nítido, con bordes perfectamente delimitados",
    substance: "Reflexión del Colágeno Dérmico (Ausencia de Melanina)",
    cause: "Vitíligo o Hipopigmentación Completa",
    microbiology: "Ausencia de melanocitos activos (Condición Autoinmune)",
    description: "La melanina es el protector solar natural que absorbe la radiación UV. Cuando hay vitíligo, la falta absoluta de melanina hace que los rayos ultravioleta atraviesen la epidermis directamente hasta la dermis profunda, rebotando en el colágeno colindante y emitiendo una fluorescencia blanco-azulada sumamente brillante y de bordes definidos que no es visible bajo luz normal.",
    symptoms: ["Parches de piel completamente blanca con bordes definidos", "Pérdida de color en cabello, pestañas o cejas", "Sin picazón física pero de gran impacto estético"],
    relevance: "Permite delimitar el tamaño real de la mancha que a veces bajo el ojo desnudo parece más pequeña, y evaluar manchas sutiles en personas de piel muy clara.",
    clinicalTip: "La pitiriasis alba o hipopigmentación post-inflamatoria brilla de forma mucho más tenue (blanco sucio o sin brillo especial) porque aún contiene trazas de melanina."
  }
];

export const INTERACTIVE_ZONES: InteractiveZone[] = [
  {
    id: "zone-nose-acne",
    name: "Nariz y Pores (Acné / Porphyrins)",
    title: "Poros de la Nariz y Mejillas",
    x: 250,
    y: 260,
    r: 22,
    normalPhotoLook: "Poros dilatados y algunos puntos negros de apariencia normal, piel ligeramente grasa en la zona T.",
    uvColor: "Naranja Coral / Rojo Anaranjado",
    glowColor: "#ff7a00",
    fluorescenceId: "coral-orange-acne",
    placementDescription: "Sobre la nariz y las mejillas centrales de la cara."
  },
  {
    id: "zone-forehead-sebum",
    name: "Frente (Sebo y Porfirinas)",
    title: "Sebo de la Zona T (Frente)",
    x: 250,
    y: 130,
    r: 25,
    normalPhotoLook: "Frente brillante por exceso de grasa sin lesiones macroscópicas graves.",
    uvColor: "Naranja Coral / Rojo Anaranjado",
    glowColor: "#ff7a00",
    fluorescenceId: "coral-orange-acne",
    placementDescription: "En la región central de la frente (Zona T)."
  },
  {
    id: "zone-scalp-tinea",
    name: "Cuero Cabelludo (Fongos / Tinea)",
    title: "Infección Fúngica capilar (Tiña)",
    x: 220,
    y: 50,
    r: 28,
    normalPhotoLook: "Pequeña zona circular descamativa con cabellos quebrados a nivel de la piel.",
    uvColor: "Verde Claro / Verde Lima",
    glowColor: "#a3e635",
    fluorescenceId: "green-tinea-capitis",
    placementDescription: "En el cuero cabelludo o línea del cabello."
  },
  {
    id: "zone-corner-cheek-vitiligo",
    name: "Mejilla Lateral (Pérdida de Pigmento)",
    title: "Despigmentación de Vitíligo",
    x: 120,
    y: 280,
    r: 32,
    normalPhotoLook: "Piel levemente más clara que los bordes, difícil de delimitar en personas de tez clara bajo luz de día.",
    uvColor: "Blanco Azulado Brillante",
    glowColor: "#38bdf8",
    fluorescenceId: "bluish-white-vitiligo",
    placementDescription: "En el contorno de la mejilla y mentón."
  },
  {
    id: "zone-brow-tinea-versicolor",
    name: "Sienes y Pómulos (Descamación fúngica)",
    title: "Pitiriasis Versicolor facial",
    x: 370,
    y: 190,
    r: 20,
    normalPhotoLook: "Manchas hipopigmentadas (más claras) con una fina descamación al tacto.",
    uvColor: "Amarillo Dorado / Cobrizo",
    glowColor: "#eab308",
    fluorescenceId: "yellow-tinea-versicolor",
    placementDescription: "Cerca de las sienes y área lateral de los pómulos."
  }
];
