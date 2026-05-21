import { useState } from "react";
import { Eye, Sparkles, Wand2 } from "lucide-react";

export default function UvGallery() {
  const [activeItem, setActiveItem] = useState<"orange" | "green" | "white">("orange");

  return (
    <div id="uv-gallery-pane" className="bg-[#0c0c0c] border border-white/10 rounded-[32px] p-6 shadow-2xl flex flex-col h-full">
      {/* Title */}
      <div className="mb-5">
        <h3 className="text-base font-light text-white flex items-center gap-2 tracking-wide">
          <Wand2 className="w-4.5 h-4.5 text-[#bc98ff]" />
          Galería de Close-ups UV
        </h3>
        <p className="text-xs text-slate-400 mt-1 font-light">
          Comparativa fotomicrográfica antes y después de encender el espectro de luz ultravioleta.
        </p>
      </div>

      {/* Selector Tabs styled cleanly */}
      <div className="flex gap-2 mb-5 bg-[#050505] p-1.5 rounded-2xl border border-white/5">
        <button
          onClick={() => setActiveItem("orange")}
          className={`flex-1 py-2 px-2 text-[10px] font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
            activeItem === "orange"
              ? "bg-orange-500/10 border border-orange-500/40 text-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.1)]"
              : "text-slate-500 hover:text-slate-300"
          }`}
        >
          Naranja (Poros)
        </button>
        <button
          onClick={() => setActiveItem("green")}
          className={`flex-1 py-2 px-2 text-[10px] font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
            activeItem === "green"
              ? "bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.1)]"
              : "text-slate-500 hover:text-slate-300"
          }`}
        >
          Verde (Cutículas)
        </button>
        <button
          onClick={() => setActiveItem("white")}
          className={`flex-1 py-2 px-2 text-[10px] font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
            activeItem === "white"
              ? "bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.08)]"
              : "text-slate-500 hover:text-slate-300"
          }`}
        >
          Blanco (Vitíligo)
        </button>
      </div>

      {/* Interactive split screen display card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-black/35 p-4 rounded-[24px] border border-white/5 flex-1">
        {/* Day-Light Normal view rendering */}
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-mono text-slate-400 bg-[#050505] border border-white/10 px-3 py-1 rounded-full mb-3 flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5 text-amber-500" /> Luz Normal
          </span>

          <div className="w-full aspect-[4/3] rounded-2xl bg-[#1a1512] border border-white/5 relative overflow-hidden flex items-center justify-center shadow-inner">
            {activeItem === "orange" && (
              <svg viewBox="0 0 200 150" className="w-full h-full">
                {/* Skin Background */}
                <rect width="200" height="150" fill="#f5dbb9" />
                {/* Stylized Nose Line */}
                <path d="M 100 40 Q 100 90, 85 105 Q 100 115, 115 105" fill="none" stroke="#d4ab7f" strokeWidth="2.5" />
                {/* Day normal skin pores */}
                <circle cx="80" cy="90" r="1.5" fill="#ca9e72" />
                <circle cx="85" cy="80" r="1" fill="#ca9e72" />
                <circle cx="120" cy="90" r="1.5" fill="#ca9e72" />
                <circle cx="115" cy="80" r="1.2" fill="#ca9e72" />
                <circle cx="100" cy="95" r="2" fill="#ba8f62" />
                <circle cx="94" cy="104" r="1.5" fill="#ba8f62" />
                <circle cx="106" cy="102" r="1.5" fill="#ba8f62" />
                {/* Tiny blackhead */}
                <circle cx="100" cy="85" r="1.5" fill="#4a3e3d" />
              </svg>
            )}

            {activeItem === "green" && (
              <svg viewBox="0 0 200 150" className="w-full h-full">
                {/* Base Skin */}
                <rect width="200" height="150" fill="#f0d5b4" />
                {/* Fingernail Outline */}
                <path d="M 60 110 C 60 40, 140 40, 140 110" fill="#fcf6ec" stroke="#d5b591" strokeWidth="2.5" />
                {/* Nail bed & tip */}
                <path d="M 60 70 C 65 30, 135 30, 140 70 Z" fill="#ebc9bd" opacity="0.6" stroke="#c49e91" strokeWidth="1" />
                {/* Fingertip border */}
                <path d="M 50 120 L 50 150 M 150 120 L 150 150" stroke="#d5b591" strokeWidth="2" />
                {/* Normal-looking dirty border around cuticle */}
                <path d="M 60 70 C 58 85, 80 82, 90 85" stroke="#bc9483" strokeWidth="1.5" fill="none" />
              </svg>
            )}

            {activeItem === "white" && (
              <svg viewBox="0 0 200 150" className="w-full h-full">
                {/* Slightly bronzed Skin */}
                <rect width="200" height="150" fill="#dab289" />
                {/* Almost invisible pale vitiligo spot */}
                <path d="M 60 50 Q 120 40, 150 70 Q 110 120, 70 110 Q 40 85, 60 50 Z" fill="#edd4ba" opacity="0.6" />
                <circle cx="150" cy="115" r="10" fill="#edd4ba" opacity="0.6" />
              </svg>
            )}
          </div>
        </div>

        {/* UV Blacklight view rendering */}
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-mono text-[#bc98ff] bg-[#bc98ff]/5 border border-[#bc98ff]/20 px-3 py-1 rounded-full mb-3 flex items-center gap-1.5 shadow-[0_0_10px_rgba(188,152,255,0.08)]">
            <Sparkles className="w-3.5 h-3.5 text-[#bc98ff]" /> Luz UV Wood
          </span>

          <div className="w-full aspect-[4/3] rounded-2xl bg-[#050505] border border-[#bc98ff]/20 relative overflow-hidden flex items-center justify-center shadow-[inset_0_0_20px_rgba(188,152,255,0.15)]">
            {activeItem === "orange" && (
              <svg viewBox="0 0 200 150" className="w-full h-full">
                {/* Glow filter */}
                <defs>
                  <filter id="glowOrange" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
                {/* UV Skin Deep Violet Background */}
                <rect width="200" height="150" fill="#180d28" />
                <path d="M 100 40 Q 100 90, 85 105 Q 100 115, 115 105" fill="none" stroke="#361754" strokeWidth="2.5" />
                
                {/* Glowing Orange Pores (Porfirinas do Acné) */}
                <g filter="url(#glowOrange)">
                  <circle cx="80" cy="90" r="3.5" fill="#ff7a00" />
                  <circle cx="85" cy="80" r="2.5" fill="#ff9000" />
                  <circle cx="120" cy="90" r="3.2" fill="#ff7a00" />
                  <circle cx="115" cy="80" r="2.8" fill="#ffaa00" />
                  <circle cx="100" cy="95" r="4.2" fill="#ff5e00" />
                  <circle cx="94" cy="104" r="3.5" fill="#ff5e00" />
                  <circle cx="106" cy="102" r="3" fill="#ff3c00" />
                  <circle cx="100" cy="85" r="3" fill="#ff3c77" /> {/* coral pink */}
                  <circle cx="100" cy="55" r="2" fill="#ff7a00" />
                  <circle cx="70" cy="70" r="2.2" fill="#ff7a00" />
                </g>
              </svg>
            )}

            {activeItem === "green" && (
              <svg viewBox="0 0 200 150" className="w-full h-full">
                <defs>
                   <filter id="glowGreen" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="4.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
                {/* UV Skin Hand Background */}
                <rect width="200" height="150" fill="#130922" />
                {/* Fingernail Contour */}
                <path d="M 60 110 C 60 40, 140 40, 140 110" fill="#20113c" stroke="#3a1c6a" strokeWidth="2" />
                {/* Pseudomonas around cuticle */}
                <g filter="url(#glowGreen)">
                  <path d="M 58 74 C 55 90, 85 86, 92 89" stroke="#a3e635" strokeWidth="4" fill="none" opacity="0.9" />
                  <ellipse cx="60" cy="85" rx="8" ry="4" fill="#c0f26d" opacity="0.8" />
                  <circle cx="70" cy="88" r="5" fill="#a3e635" opacity="0.85" />
                  <circle cx="84" cy="86" r="3.5" fill="#c0f26d" opacity="0.8" />
                </g>
              </svg>
            )}

            {activeItem === "white" && (
              <svg viewBox="0 0 200 150" className="w-full h-full">
                <defs>
                  <filter id="glowWhite" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
                {/* UV Deep Violet background */}
                <rect width="200" height="150" fill="#11051e" />
                {/* Intense glowing white-blue Vitiligo patch */}
                <g filter="url(#glowWhite)">
                  <path d="M 60 50 Q 120 40, 150 70 Q 110 120, 70 110 Q 40 85, 60 50 Z" fill="#f0f9ff" opacity="0.95" stroke="#00FFFF" strokeWidth="2" />
                  <circle cx="150" cy="115" r="10" fill="#f0f9ff" opacity="0.95" stroke="#00FFFF" strokeWidth="1.5" />
                </g>
              </svg>
            )}
          </div>
        </div>
      </div>

      {/* Description below image cards */}
      <div className="mt-5 bg-black/40 p-4 rounded-xl border border-white/5 text-xs text-slate-300 leading-relaxed font-light">
        {activeItem === "orange" && (
          <p>
            💡 <span className="font-semibold text-orange-400">Porfirinas del Acné (Naranja / Coral):</span> Las colonias de <i>Cutibacterium acnes</i> en el folículo pilosebáceo excretan coproporfirinas que, expuestas a 365.4nm, brillan con un reconocible color <b>anaranjado fosforescente o rojo coral</b>.
          </p>
        )}
        {activeItem === "green" && (
          <p>
            💡 <span className="font-semibold text-emerald-400">Pseudomonas (Verdes):</span> La secreción de la bacteria patógena <i>Pseudomonas aeruginosa</i> contiene <b>pioverdina</b>, un sideróforo fluorescente soluble en agua que emite un destello <b>verde fluorescente</b> bajo lámparas de Wood.
          </p>
        )}
        {activeItem === "white" && (
          <p>
            💡 <span className="font-semibold text-cyan-400">Vitíligo (Blanco Tiza / Azulado):</span> Al carecer de melanina dérmica protectora, la radiación UV atraviesa libremente el estrato córneo y excita el colágeno subepitelial, reflejándose como un brillo <b>blanco-azulado tiza impecable</b> de alta delimitación clínica.
          </p>
        )}
      </div>
    </div>
  );
}
