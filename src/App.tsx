import { useState } from "react";
import { motion } from "motion/react";
import SkinVisualizer from "./components/SkinVisualizer";
import FluorescenceExplorer from "./components/FluorescenceExplorer";
import FluorescenceDetailPanel from "./components/FluorescenceDetailPanel";
import UvGallery from "./components/UvGallery";
import UvFAQ from "./components/UvFAQ";
import { InteractiveZone, FluorescenceEntry } from "./types";
import { FLUORESCENCE_DATABASE, INTERACTIVE_ZONES } from "./data/fluorescenceData";
import { Sparkles, Fingerprint, ShieldCheck } from "lucide-react";

export default function App() {
  const [selectedZone, setSelectedZone] = useState<InteractiveZone | undefined>(undefined);
  const [selectedEntry, setSelectedEntry] = useState<FluorescenceEntry | undefined>(
    FLUORESCENCE_DATABASE[0] // Default to the first entry (Active Acne)
  );
  const [isUvOn, setIsUvOn] = useState<boolean>(true); // Start with UV active for immediate visual feedback

  const handleZoneSelect = (zone: InteractiveZone, entry: FluorescenceEntry | undefined) => {
    setSelectedZone(zone);
    if (entry) {
      setSelectedEntry(entry);
    }
  };

  const handleEntrySelect = (entry: FluorescenceEntry) => {
    setSelectedEntry(entry);
    // Link to corresponding face area if applicable
    const matchingZone = INTERACTIVE_ZONES.find((z) => z.fluorescenceId === entry.id);
    setSelectedZone(matchingZone);
  };

  return (
    <div
      id="app-root-wrapper"
      className="min-h-screen bg-[#050505] text-[#e0e0e0] flex flex-col font-sans selection:bg-[#bc98ff]/30 selection:text-white transition-colors duration-700 pb-16"
    >
      {/* Dynamic Top Ambient Glow Bar */}
      <div 
        className="w-full h-1.5 transition-all duration-700" 
        style={{
          boxShadow: isUvOn ? "0 2px 30px rgba(188, 152, 255, 0.85)" : "none",
          background: isUvOn 
            ? "linear-gradient(90deg, #FF5F1F, #39FF14, #00FFFF, #eab308, #ff0055)" 
            : "rgba(255, 255, 255, 0.1)"
        }}
      />

      {/* Main Elegant Header */}
      <header id="main-navigation-header" className="max-w-7xl w-full mx-auto px-6 pt-10 pb-6 border-b border-white/5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            {/* Elegant glowing gradient sphere representing radiation source */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#9D50BB] to-[#6E48AA] shadow-[0_0_20px_rgba(157,80,187,0.65)] relative shrink-0">
              <div className="absolute inset-0 rounded-full bg-purple-400 opacity-20 animate-ping" />
            </div>
            
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#bc98ff] bg-[#bc98ff]/5 px-3 py-1 rounded-full border border-[#bc98ff]/20 flex items-center gap-1.5">
                  <Fingerprint className="w-3.5 h-3.5" /> LUMINANCE • UV SPECTRUM ANALYSIS
                </span>
              </div>
              <h1 id="app-heading" className="text-3xl md:text-4xl font-extralight tracking-tight text-white mt-2 flex items-center gap-2">
                Fluorescencia UV <span className="italic font-serif text-[#bc98ff] font-light">Guía Lámpara de Wood</span>
              </h1>
              <p id="app-subtitle" className="text-sm text-slate-400 mt-2 max-w-2xl font-light">
                Herramienta interactiva para simular el efecto de la radiación ultravioleta de 365nm de onda larga sobre pigmentos dérmicos reactivos y sustancias del día a día.
              </p>
            </div>
          </div>

          {/* Quick status indicator */}
          <div 
            id="uv-status-badge"
            className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-500 bg-[#0c0c0c] ${
              isUvOn 
                ? "border-[#bc98ff]/30 text-[#bc98ff] shadow-[0_0_25px_rgba(188,152,255,0.08)]" 
                : "border-white/5 text-slate-400"
            }`}
          >
            <div className="relative flex h-3 w-3 shrink-0">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isUvOn ? "bg-purple-400" : "bg-slate-700"}`}></span>
              <span className={`relative inline-flex rounded-full h-3 w-3 ${isUvOn ? "bg-[#bc98ff]" : "bg-slate-600"}`}></span>
            </div>
            <div>
              <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/40 block">EMISIÓN FOTÓNICA</span>
              <span className="text-xs font-sans font-medium block">{isUvOn ? "365.4nm Wood Activa" : "Espectro Visible Regular"}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Layout Grid */}
      <main id="main-dashboard-grid" className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-8">
        
        {/* Left Column: Interactive face model (lg:col-span-5) */}
        <div id="grid-col-visualizer" className="lg:col-span-5 flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SkinVisualizer
              onZoneSelect={handleZoneSelect}
              selectedZoneId={selectedZone?.id}
              isUvOn={isUvOn}
              setIsUvOn={setIsUvOn}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <UvGallery />
          </motion.div>
        </div>

        {/* Right Column: Search panel, FAQ and diagnostic details (lg:col-span-7) */}
        <div id="grid-col-details" className="lg:col-span-7 flex flex-col gap-8">
          {/* Diagnostic Details card (changes dynamically when clicked) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <FluorescenceDetailPanel
              entry={selectedEntry}
              isUvActive={isUvOn}
            />
          </motion.div>

          {/* Interactive Catalog and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FluorescenceExplorer
              selectedEntryId={selectedEntry?.id}
              onSelectEntry={handleEntrySelect}
              isUvActive={isUvOn}
            />
          </motion.div>

          {/* Dedicated FAQ address (Naranja & Verde answers) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <UvFAQ />
          </motion.div>
        </div>
      </main>

      {/* Fine-grained luxury footer */}
      <footer id="app-footer-credit" className="max-w-7xl w-full mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-white/40 tracking-[0.15em] uppercase">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-purple-700/80" />
          <span>Espectro de resolución: 12-bit por canal • Lux-Core Systems</span>
        </div>
        <div>
          <span>© 2026 Grupo de Investigación Dérmica • Lámpara de Wood</span>
        </div>
      </footer>
    </div>
  );
}
