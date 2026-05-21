export interface MaterialFluorescence {
  name: string;
  source: string; // Tonic water, sunblock, soap, etc.
  uvColor: string;
  chemicalCause: string;
  description: string;
  glowColor: string; // Tailwind hex
  explanation: string;
}

export const EXTRA_MATERIALS_DATABASE: MaterialFluorescence[] = [
  {
    name: "Agua Tónica (Manchas o Salpicaduras)",
    source: "Bebidas con Quinina",
    uvColor: "Azul Eléctrico Brillante",
    chemicalCause: "Quinina",
    description: "Si se te cae un poco de agua tónica sobre las manos, brazos o la ropa, esta brillará con un azul eléctrico sumamente llamativo bajo luz negra. La quinina es altamente fluorescente incluso en bajísimas concentraciones.",
    glowColor: "#00d2ff",
    explanation: "La quinina absorbe los fotones UV invisibles y los emite en longitudes de onda visibles azules con gran eficiencia."
  },
  {
    name: "Protector Solar (Bloqueador)",
    source: "Cofactores de filtro solar cosmético",
    uvColor: "Negro Absoluto o Violeta Opaco",
    chemicalCause: "Óxido de Zinc, Dióxido de Titanio o filtros químicos",
    description: "Al aplicarte protector solar en la piel y mirarte bajo luz UV, la zona aparecerá de color negro como el carbón o púrpura sumamente mate. No es que brille, sino que absorbe el 99% de la luz ultravioleta.",
    glowColor: "#200424",
    explanation: "Es un experimento clásico en dermatología para comprobar si te aplicaste el protector de forma uniforme en todas partes del rostro. Las zonas sin cubrir se verán azuladas/saludables; las zonas cubiertas se verán negras."
  },
  {
    name: "Detergente de Ropa y Suavizante",
    source: "Contacto con telas lavadas o jabones residuales",
    uvColor: "Blanco Azulado Criptonita",
    chemicalCause: "Blanqueadores Ópticos / Abrillantadores",
    description: "Los jabones de ropa contienen abrillantadores ópticos que se adhieren a la piel y las telas. Si tocas ropa recién lavada y luego te miras bajo luz negra, tus dedos o palmas pueden brillar con una luz blanca fluorescente que parece que brillarás en la oscuridad.",
    glowColor: "#80cfff",
    explanation: "Diseñados para hacer que la ropa se vea 'más blanca que el blanco' bajo el sol (que tiene UV natural), estos compuestos químicos permanecen sobre la superficie y son difíciles de lavar de la piel."
  },
  {
    name: "Vitamina B2 (Riboflavina)",
    source: "Bebidas energizantes, suplementos de vitaminas",
    uvColor: "Amarillo Verdoso Neón",
    chemicalCause: "Riboflavina",
    description: "La vitamina B2 es intensamente fluorescente. Si cae una gota de bebida energizante (que suele estar repleta de B2) en tu mano o boca, brillará con un verde-amarillo neón muy extraño bajo la luz negra.",
    glowColor: "#ccff00",
    explanation: "La molécula de riboflavina es sensible a la luz y se excita fácilmente con luz UV-A para emitir radiación verde amarillenta."
  },
  {
    name: "Dientes Falsos vs. Dientes Naturales",
    source: "Odontología reconstructiva, carillas de resina",
    uvColor: "Sin Brillo (Oscuro) vs. Azul-Blanco Perlado",
    chemicalCause: "Hidroxipatita natural vs. Resinas plásticas/porcelana barata",
    description: "Los dientes naturales brillan de forma saludable con un tono blanco perlado bajo la luz UV. Si tienes una carilla de porcelana, corona o una resina barata, se verán completamente oscuros o negros, lo que resalta inmediatamente.",
    glowColor: "#ffffff",
    explanation: "Las resinas dentales modernas intentan agregar flúor y compuestos de tierras raras para imitar la fluorescencia del diente real, pero las prótesis estándar carecen del brillo natural de la hidroxipatita dental."
  },
  {
    name: "Cosméticos y Labiales",
    source: "Maquillaje de noche, labiales, cremas anti-edad",
    uvColor: "Rosa Fucsia, Naranja Encendido o Verde",
    chemicalCause: "Pigmentos sintéticos (Eosina, Fluoresceínas)",
    description: "Muchos labiales de noche o maquillaje contienen compuestos que fluorescentemente estallan en colores llamativos bajo luz UV. Si te tocas los labios y luego tocas otras partes del rostro, puedes crear 'manchas fantasmas' invisibles bajo luz normal pero radiantes bajo luz de Wood.",
    glowColor: "#ff00bb",
    explanation: "Muchos polvos faciales refractarios y bases también contienen ácido salicílico o mica que emiten brillo azul o verde bajo la luz negra."
  }
];
