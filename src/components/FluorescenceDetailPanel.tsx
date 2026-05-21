import { FluorescenceEntry } from "../types";
import { Sparkles, ShieldAlert, CheckCircle2, FlaskConical } from "lucide-react";

interface DetailPanelProps {
  entry?: FluorescenceEntry;
  isUvActive: boolean;
}

export default function FluorescenceDetailPanel({ entry, isUvActive }: DetailPanelProps) {
  if (!entry) {
    return (
      <div
        id="detail-panel-placeholder"
        className="flex flex-col items-center justify-center p-8 border border-dashed border-white/10 bg-white/2 rounded-[32px] text-center min-h-[340px]"
      >
        <FlaskConical className="w-12 h-12 text-slate-700 animate-pulse mb-4" />
        <h4 className="text-sm font-sans font-medium text-slate-400">Ningún Color Seleccionado</h4>
        <p className="text-xs text-slate-500 max-w-[240px] mt-1 leading-relaxed font-light">
          Haz clic en cualquier punto del rostro o busca en el catálogo para revelar la causa clínica del brillo.
        </p>
      </div>
    );
  }

  return (
    <div
      id={`active-detail-${entry.id}`}
      className="bg-[#0c0c0c] border border-white/10 rounded-[32px] p-6 shadow-2xl flex flex-col justify-between h-full transition-all duration-500"
    >
      <div>
        {/* Color Glow Header Case */}
        <div className="flex justify-between items-start gap-4 mb-5">
          <div>
            <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block">
              DIAGNÓSTICO ESPECTRAL
            </span>
            <h3 className="text-xl font-light text-white mt-1 tracking-wide">
              {entry.cause}
            </h3>
          </div>
          
          {/* Vivid visual glow of the selected UV color */}
          <div
            id="glow-box-badge"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-[10px] uppercase font-mono font-bold tracking-wider transition-all duration-500"
            style={{
              borderColor: `${entry.hexColor}40`,
              backgroundColor: `${entry.hexColor}0c`,
              color: entry.hexColor,
              boxShadow: isUvActive ? `0 0 20px ${entry.hexColor}30` : "none"
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{entry.colorName}</span>
          </div>
        </div>

        {/* Compound details */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div className="bg-black/40 p-3.5 rounded-xl border border-white/5">
            <span className="text-[9px] font-mono text-slate-500 uppercase block">Compuesto Fluorescente</span>
            <span className="text-xs font-sans font-medium text-slate-200 mt-1 block">
              {entry.substance}
            </span>
          </div>
          <div className="bg-black/40 p-3.5 rounded-xl border border-white/5">
            <span className="text-[9px] font-mono text-slate-500 uppercase block">Agente / Patógeno</span>
            <span className="text-xs font-sans font-medium text-slate-200 mt-1 block">
              {entry.microbiology}
            </span>
          </div>
        </div>

        {/* Detailed Explanation */}
        <div className="mb-5">
          <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2">
            Análisis de Causa Básica
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed bg-black/40 p-4 rounded-xl border border-white/5 font-light">
            {entry.description}
          </p>
        </div>

        {/* Clinical Symptoms Markers */}
        <div className="mb-5">
          <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2.5">
            Manifestaciones Asociadas
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {entry.symptoms.map((sym, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-400 font-light">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{sym}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Actionable Clinical Tip Footer */}
      <div className="mt-5 pt-4 border-t border-white/5">
        <div className="bg-[#bc98ff]/5 border border-[#bc98ff]/20 rounded-2xl p-4 flex gap-3.5 items-start">
          <ShieldAlert className="w-5 h-5 text-[#bc98ff] shrink-0 mt-0.5" />
          <div>
            <h5 className="text-[10px] font-bold text-white tracking-widest uppercase">
              Evaluación Clínica & Cuidado
            </h5>
            <p className="text-[11px] text-[#e0e0e0]/80 mt-1 leading-relaxed font-light">
              {entry.clinicalTip}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
