import { useState } from "react";
import { FLUORESCENCE_DATABASE } from "../data/fluorescenceData";
import { EXTRA_MATERIALS_DATABASE } from "../data/extraMaterialsData";
import { FluorescenceEntry } from "../types";
import { Search, Sparkles, AlertCircle, Layers, Shirt } from "lucide-react";

interface ExplorerProps {
  onSelectEntry: (entry: FluorescenceEntry) => void;
  selectedEntryId?: string;
  isUvActive: boolean;
}

export default function FluorescenceExplorer({
  onSelectEntry,
  selectedEntryId,
  isUvActive
}: ExplorerProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<"skin" | "materials">("skin");
  const [colorFilter, setColorFilter] = useState<string>("all");

  const colorsList = [
    { name: "Todos", value: "all" },
    { name: "Naranja / Rojo", value: "orange" },
    { name: "Verde / Lima", value: "green" },
    { name: "Amarillo / Oro", value: "yellow" },
    { name: "Blanco / Azul", value: "blue" }
  ];

  const matchesColor = (itemColor: string, filter: string) => {
    if (filter === "all") return true;
    const colorLower = itemColor.toLowerCase();
    if (filter === "orange") return colorLower.includes("naranja") || colorLower.includes("rojo") || colorLower.includes("coral");
    if (filter === "green") return colorLower.includes("verde") || colorLower.includes("lima");
    if (filter === "yellow") return colorLower.includes("amarillo") || colorLower.includes("cobrizo") || colorLower.includes("oro");
    if (filter === "blue") return colorLower.includes("azul") || colorLower.includes("blanco") || colorLower.includes("tiza");
    return true;
  };

  const filteredSkinDb = FLUORESCENCE_DATABASE.filter((entry) => {
    const matchesSearch =
      entry.colorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.cause.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.substance.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCol = matchesColor(entry.colorName, colorFilter);
    return matchesSearch && matchesCol;
  });

  const filteredMaterialsDb = EXTRA_MATERIALS_DATABASE.filter((entry) => {
    const matchesSearch =
      entry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.source.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.chemicalCause.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCol = matchesColor(entry.uvColor, colorFilter);
    return matchesSearch && matchesCol;
  });

  return (
    <div id="fluorescence-explorer-section" className="bg-[#0c0c0c] border border-white/10 rounded-[32px] p-6 shadow-2xl flex flex-col h-full">
      {/* Title & Description */}
      <div className="mb-5">
        <h3 className="text-base font-light text-white flex items-center gap-2 tracking-wide">
          <Layers className="w-4.5 h-4.5 text-[#bc98ff]" />
          Catálogo del Espectro UV
        </h3>
        <p className="text-xs text-slate-400 mt-1 font-light">
          Filtra por color o busca una sustancia para comprobar su brillo reactivo y por qué.
        </p>
      </div>

      {/* Tabs styled with fine Elegant Dark border-white/5 and rounded corners */}
      <div className="grid grid-cols-2 gap-2 bg-white/5 p-1 rounded-2xl mb-5 border border-white/5">
        <button
          id="tab-skin-conditions"
          onClick={() => {
            setActiveTab("skin");
            setSearchTerm("");
          }}
          className={`flex items-center justify-center gap-2 py-2.5 text-[10px] font-bold tracking-widest uppercase rounded-xl transition-all cursor-pointer ${
            activeTab === "skin"
              ? "bg-white/10 text-white border border-white/10 shadow-sm"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-[#bc98ff]" />
          Piel Diagnóstico
        </button>
        <button
          id="tab-everyday-materials"
          onClick={() => {
            setActiveTab("materials");
            setSearchTerm("");
          }}
          className={`flex items-center justify-center gap-2 py-2.5 text-[10px] font-bold tracking-widest uppercase rounded-xl transition-all cursor-pointer ${
            activeTab === "materials"
              ? "bg-white/10 text-white border border-white/10 shadow-sm"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          <Shirt className="w-3.5 h-3.5 text-sky-400" />
          Materiales Diarios
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col gap-4 mb-5">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            id="explorer-search-input"
            type="text"
            placeholder="Buscar por color (ej. naranja, verde), causa o compuesto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#050505] border border-white/10 rounded-xl py-3 px-11 text-xs text-[#e0e0e0] placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#bc98ff]/50 focus:border-[#bc98ff] transition-all font-sans font-light"
          />
        </div>

        {/* Quick Color Tags */}
        <div id="color-pills-bar" className="flex flex-wrap gap-2">
          {colorsList.map((col) => {
            const isSelected = colorFilter === col.value;
            return (
              <button
                key={col.value}
                id={`btn-color-filter-${col.value}`}
                onClick={() => setColorFilter(col.value)}
                className={`px-3.5 py-2 rounded-xl text-[10px] font-bold tracking-wider uppercase cursor-pointer transition-all ${
                  isSelected
                    ? "bg-[#bc98ff]/10 border border-[#bc98ff] text-[#bc98ff] shadow-[0_0_10px_rgba(188,152,255,0.15)]"
                    : "bg-white/5 hover:bg-white/10 border border-white/5 text-slate-400"
                }`}
              >
                {col.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Viewport */}
      <div id="results-viewport" className="flex-1 overflow-y-auto max-h-[360px] pr-1.5 space-y-3.5 custom-scrollbar">
        {activeTab === "skin" ? (
          filteredSkinDb.length > 0 ? (
            filteredSkinDb.map((entry) => {
              const isSelected = selectedEntryId === entry.id;
              return (
                <div
                  key={entry.id}
                  id={`entry-card-${entry.id}`}
                  onClick={() => onSelectEntry(entry)}
                  className={`group relative p-4 rounded-xl border text-left cursor-pointer transition-all duration-300 ${
                    isSelected
                      ? "bg-white/5 border-[#bc98ff]/60 shadow-[0_0_15px_rgba(188,152,255,0.06)]"
                      : "bg-[#050505] border-white/5 hover:border-white/10 hover:bg-white/5"
                  }`}
                >
                  {/* Left indicator accent strip */}
                  <div
                    className="absolute left-0 top-3.5 bottom-3.5 w-1 rounded-r-md"
                    style={{ backgroundColor: entry.hexColor }}
                  />

                  <div className="pl-4">
                    <div className="flex justify-between items-start gap-2">
                      <span className="text-[9px] font-mono font-bold tracking-wider text-slate-500 block">
                        Causa: {entry.cause}
                      </span>
                      {/* Glow indicator circle */}
                      <span
                        className="w-2.5 h-2.5 rounded-full transition-transform duration-300 group-hover:scale-125"
                        style={{
                          backgroundColor: entry.hexColor,
                          boxShadow: isUvActive ? `0 0 10px ${entry.hexColor}` : "none"
                        }}
                      />
                    </div>

                    <h4 className="text-sm font-medium text-white mt-1">
                      {entry.colorName}
                    </h4>

                    {/* Scientific Compound */}
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      <span className="text-[#bc98ff] font-mono text-[10px] tracking-wide">Sustancia:</span> {entry.substance} ({entry.microbiology})
                    </p>

                    {/* Faded short description preview */}
                    <p className="text-[11px] text-slate-400 mt-2 bg-black/40 p-2 rounded-lg border border-white/5 truncate font-light">
                      {entry.description}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 text-slate-500 text-xs font-mono">
              Ninguna coincidencia clínica encontrada
            </div>
          )
        ) : filteredMaterialsDb.length > 0 ? (
          filteredMaterialsDb.map((material, idx) => (
            <div
              key={idx}
              id={`material-card-${idx}`}
              className="group relative p-4 rounded-xl border bg-[#050505] border-white/5 hover:border-white/10 hover:bg-white/5 text-left transition-all duration-300"
            >
              <div
                className="absolute left-0 top-3.5 bottom-3.5 w-1 rounded-r-md"
                style={{ backgroundColor: material.glowColor }}
              />

              <div className="pl-4">
                <div className="flex justify-between items-start gap-2">
                  <span className="text-[9px] font-mono font-bold tracking-wider text-slate-500 uppercase block">
                    Origen: {material.source}
                  </span>
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{
                      backgroundColor: material.glowColor,
                      boxShadow: isUvActive ? `0 0 10px ${material.glowColor}` : "none"
                    }}
                  />
                </div>

                <h4 className="text-sm font-medium text-white mt-1">
                  {material.name}
                </h4>

                <p className="text-xs text-slate-300 mt-1">
                  <span className="text-sky-400 font-mono text-[10px] tracking-wide">Glow UV:</span> <b style={{ color: material.glowColor }}>{material.uvColor}</b>
                </p>

                <p className="text-[11px] text-slate-400 mt-2 leading-relaxed font-light">
                  {material.description}
                </p>

                <div className="mt-3 text-[10px] text-slate-400 bg-black/40 p-2.5 rounded-lg border border-white/5 font-mono">
                  💡 <span className="text-slate-500">¿Por qué? {material.explanation}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10 text-slate-500 text-xs font-mono">
            Ningún material o residuo coincidente
          </div>
        )}
      </div>

      {/* Info Warning banner */}
      <div className="mt-5 pt-4 border-t border-white/5 flex gap-2.5 items-start text-[10px] text-slate-500 font-mono leading-relaxed">
        <AlertCircle className="w-4 h-4 text-purple-800 shrink-0" />
        <span>
          Aviso: La fluorescencia UV bajo lámpara de Wood es un apoyo diagnóstico inicial. Lave siempre suavemente la piel si tiene sospechas de residuos de cremas o maquillaje que alteren el resultado.
        </span>
      </div>
    </div>
  );
}
