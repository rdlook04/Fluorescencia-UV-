import { HelpCircle, Sparkles } from "lucide-react";

export default function UvFAQ() {
  const faqItems = [
    {
      question: "¿Qué significa ver un color NARANJA o ROJO sobre la piel bajo luz UV?",
      answer: "Si observas máculas o puntillados naranja o rojizos bajo la lámpara de Wood, las causas más probables son:",
      points: [
        {
          title: "Porfirinas del Acné (Naranja Brillante / Coral)",
          desc: "Los poros obstruidos con exceso de sebo y presencia de la bacteria Cutibacterium acnes secretan compuestos porfirínicos, que brillan con un tono naranja coral sumamente nítido en el área de la nariz, mentón y frente."
        },
        {
          title: "Eritrasma (Rojo Coral Intenso)",
          desc: "Infección bacteriana superficial en pliegues húmedos provocada por Corynebacterium minutissimum, que emite una respuesta rojo coral muy definida debido a la coproporfirina III. Clave en el descarte de tiñas fúngicas."
        },
        {
          title: "Residuos Cosméticos o Maquillaje",
          desc: "Ciertas bases de maquillaje, aceites esenciales, bálsamos labiales o tónicos exfoliantes contienen filtros solares químicos o conservantes fotoactivos que producen luminiscencia rosa o naranja persistente."
        }
      ]
    },
    {
      question: "¿Qué significa ver un color VERDE o AMARILLO-VERDOSO sobre la piel?",
      answer: "Un brillo verde o amarillo-verdoso es un indicador clínico altamente confiable para las siguientes etiologías fúngicas o bacterianas:",
      points: [
        {
          title: "Infección por Pseudomonas (Verde Neón Brillante)",
          desc: "La bacteria Pseudomonas aeruginosa coloniza humedades epiteliales y lechos ungueales. Sintetizan pioverdina, un metabolito hidrosoluble que genera un brillo verde fosforescente sumamente llamativo."
        },
        {
          title: "Tiña de la Cabeza / Dermofitosis (Verde Claro / Lima)",
          desc: "Especies fúngicas antropofílicas y zoofílicas del género Microsporum que invaden el tallo del cabello producen pteridina de forma natural que resplandece en un color verde lima característico."
        },
        {
          title: "Compuestos de Vitamina B o Riboflavina (Amarillo-Verde Eléctrico)",
          desc: "La riboflavina es un nutriente hidrosoluble fluorescentemente muy activo. Salpicaduras accidentales de suplementos vitamínicos o bebidas energéticas se encienden con una luminiscencia amarillo-limón intensa."
        }
      ]
    }
  ];

  return (
    <div id="uv-faq-section" className="bg-[#0c0c0c] border border-white/10 rounded-[32px] p-6 shadow-2xl h-full">
      <div className="mb-5">
        <h3 className="text-base font-light text-white flex items-center gap-2 tracking-wide">
          <HelpCircle className="w-4.5 h-4.5 text-[#bc98ff]" />
          Guía de Colores Especiales
        </h3>
        <p className="text-xs text-slate-400 mt-1 font-light">
          Análisis e interpretación clínica de la fluorescencia naranja, roja, verde y amarilla.
        </p>
      </div>

      <div className="space-y-6">
        {faqItems.map((item, index) => (
          <div
            key={index}
            id={`faq-item-${index}`}
            className="bg-[#050505] p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-300"
          >
            <h4 className="text-xs font-semibold text-white flex items-start gap-2.5 leading-snug">
              <Sparkles className="w-4 h-4 text-[#bc98ff] shrink-0 mt-0.5" />
              {item.question}
            </h4>
            
            <p className="text-xs text-slate-400 mt-2.5 font-light">
              {item.answer}
            </p>

            <div className="mt-4 space-y-3">
              {item.points.map((pt, pIdx) => (
                <div key={pIdx} className="pl-3.5 border-l-2 border-[#bc98ff]/30">
                  <span className="text-xs font-semibold text-slate-300 block">
                    {pt.title}
                  </span>
                  <span className="text-[11px] text-slate-400 mt-1 block leading-relaxed font-light">
                    {pt.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
