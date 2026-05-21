import React, { useState, useRef } from "react";
import { INTERACTIVE_ZONES, FLUORESCENCE_DATABASE } from "../data/fluorescenceData";
import { InteractiveZone, FluorescenceEntry } from "../types";
import { Sparkles, Eye, Info } from "lucide-react";

interface SkinVisualizerProps {
  onZoneSelect: (zone: InteractiveZone, entry: FluorescenceEntry | undefined) => void;
  selectedZoneId?: string;
  isUvOn: boolean;
  setIsUvOn: (value: boolean) => void;
}

export default function SkinVisualizer({
  onZoneSelect,
  selectedZoneId,
  isUvOn,
  setIsUvOn
}: SkinVisualizerProps) {
  const [flashlightPos, setFlashlightPos] = useState({ x: 250, y: 200 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle flashlight beam tracing
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setFlashlightPos({ x, y });
  };

  const selectZone = (zone: InteractiveZone) => {
    const entry = FLUORESCENCE_DATABASE.find((e) => e.id === zone.fluorescenceId);
    onZoneSelect(zone, entry);
  };

  return (
    <div
      id="uv-visualizer-container"
      className="relative flex flex-col items-center bg-[#0c0c0c] border border-white/10 rounded-[32px] p-6 shadow-2xl overflow-hidden transition-all duration-700"
    >
      {/* Top action header */}
      <div id="visualizer-header" className="w-full flex justify-between items-center mb-5 z-10">
        <div>
          <span className="text-[9px] font-mono font-bold tracking-[0.25em] text-[#bc98ff] bg-[#bc98ff]/5 px-3 py-1 rounded-full border border-[#bc98ff]/15">
            MODELO INTERACTIVO DE EXAMEN
          </span>
          <h3 className="text-base font-light tracking-wide text-white mt-1.5">
            Explorador de Piel <span className="italic font-serif text-[#bc98ff] font-light">3D-Vectorial</span>
          </h3>
        </div>
        <div className="flex gap-2">
          <button
            id="toggle-uv-btn"
            onClick={() => setIsUvOn(!isUvOn)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
              isUvOn
                ? "bg-gradient-to-r from-[#9D50BB] to-[#6E48AA] text-white shadow-[0_0_15px_rgba(157,80,187,0.5)] border border-transparent"
                : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
            }`}
          >
            <Sparkles className="w-3 h-3 text-[#bc98ff]" />
            {isUvOn ? "Wood On" : "Wood Off"}
          </button>
        </div>
      </div>

      {/* The main SVG canvas containing the face (styled with premium #1a1512 inner dermal shadow space) */}
      <div
        id="interactive-face-canvas"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="relative w-full max-w-[420px] aspect-[4/5] rounded-[30px] bg-[#1a1512] cursor-crosshair overflow-hidden border border-white/5"
        style={{
          boxShadow: isUvOn 
            ? "inset 0 0 50px rgba(139, 92, 246, 0.22), 0 10px 30px rgba(0, 0, 0, 0.5)" 
            : "inset 0 0 30px rgba(0, 0, 0, 0.8), 0 10px 30px rgba(0, 0, 0, 0.4)"
        }}
      >
        {/* Glow grid background when UV is ON */}
        {isUvOn && (
          <div className="absolute inset-0 bg-radial-gradient opacity-45 pointer-events-none transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(88,28,135,0.4)_0%,transparent_75%)]" />
        )}

        {/* Dynamic UV Flashlight lens follower */}
        {isUvOn && isHovering && (
          <div
            id="uv-torch-lens"
            className="absolute rounded-full pointer-events-none mix-blend-screen transition-all duration-75 ease-out shadow-[0_0_60px_rgba(168,85,247,0.35)] border border-purple-500/10"
            style={{
              left: flashlightPos.x - 75,
              top: flashlightPos.y - 75,
              width: 150,
              height: 150,
              background: "radial-gradient(circle, rgba(188,152,255,0.22) 0%, rgba(139,92,246,0.06) 60%, transparent 100%)",
            }}
          />
        )}

        {/* The vector drawing of the serene human face */}
        <svg
          viewBox="0 0 500 580"
          className="w-full h-full select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Static Definitions */}
          <defs>
            {/* Skin base gradients */}
            <radialGradient id="normalSkin" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f9eee0" />
              <stop offset="60%" stopColor="#eedecc" />
              <stop offset="100%" stopColor="#d1b392" />
            </radialGradient>
            
            <radialGradient id="uvSkin" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#221138" />
              <stop offset="70%" stopColor="#100520" />
              <stop offset="100%" stopColor="#06010d" />
            </radialGradient>

            {/* Glowing filter effects */}
            <filter id="neonGlowOrange" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="neonGlowGreen" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="neonGlowBlue" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="neonGlowYellow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="7" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* MAIN HEAD STRUCTURE */}
          {/* Neck background */}
          <path
            d="M 180 430 L 180 520 C 180 540, 320 540, 320 520 L 320 430 Z"
            fill={isUvOn ? "#0d051a" : "#ca9e73"}
            stroke={isUvOn ? "#3b1675" : "#a38260"}
            strokeWidth="1.5"
            className="transition-all duration-700"
          />

          {/* Shoulders */}
          <path
            d="M 110 520 Q 250 560, 390 520 L 410 580 L 90 580 Z"
            fill={isUvOn ? "#080214" : "#c49567"}
            className="transition-all duration-700"
          />

          {/* Face base structure */}
          <path
            d="M 250 70 C 110 70, 110 380, 250 440 C 390 380, 390 70, 250 70 Z"
            fill={isUvOn ? "url(#uvSkin)" : "url(#normalSkin)"}
            stroke={isUvOn ? "#5b21b6" : "#b88556"}
            strokeWidth="2.5"
            className="transition-all duration-700"
          />

          {/* Left Ear */}
          <path
            d="M 116 230 C 85 230, 85 310, 114 310 Z"
            fill={isUvOn ? "#150826" : "#e0be96"}
            stroke={isUvOn ? "#5b21b6" : "#b88556"}
            strokeWidth="1.5"
            className="transition-all duration-700"
          />

          {/* Right Ear */}
          <path
            d="M 384 230 C 415 230, 415 310, 386 310 Z"
            fill={isUvOn ? "#150826" : "#e0be96"}
            stroke={isUvOn ? "#5b21b6" : "#b88556"}
            strokeWidth="1.5"
            className="transition-all duration-700"
          />

          {/* Hair shape */}
          <path
            d="M 120 180 C 130 90, 370 90, 380 180 C 400 130, 360 40, 250 40 C 140 40, 100 130, 120 180 Z"
            fill={isUvOn ? "#09030d" : "#38291b"}
            className="transition-all duration-700"
          />

          {/* Eyes structure */}
          <g className="transition-all duration-700" opacity={0.8}>
            {/* Eye Brows */}
            <path
              d="M 150 195 Q 185 180, 210 195"
              fill="none"
              stroke={isUvOn ? "#280a3d" : "#1a110a"}
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M 350 195 Q 315 180, 290 195"
              fill="none"
              stroke={isUvOn ? "#280a3d" : "#1a110a"}
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* Serene Closed Eyes */}
            <path
              d="M 160 215 Q 185 230, 210 215"
              fill="none"
              stroke={isUvOn ? "#522f80" : "#452f20"}
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M 340 215 Q 315 230, 290 215"
              fill="none"
              stroke={isUvOn ? "#522f80" : "#452f20"}
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>

          {/* NOSE */}
          <path
            d="M 250 195 L 250 282 L 238 288 Q 250 295, 262 288 Z"
            fill="none"
            stroke={isUvOn ? "#4c1d95" : "#aa7b4c"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-700"
          />

          {/* LIPS */}
          <path
            d="M 220 350 Q 250 342, 280 350 Q 250 365, 220 350 Z"
            fill={isUvOn ? "#200d30" : "#d1706b"}
            stroke={isUvOn ? "#4a197b" : "#9e4642"}
            strokeWidth="1.5"
            className="transition-all duration-700"
          />

          {/* Normal daylight blemishes */}
          {!isUvOn && (
            <g id="daylands" className="opacity-70 transition-opacity duration-500">
              <ellipse cx="250" cy="130" rx="20" ry="8" fill="#ffffff" opacity="0.12" />
              <circle cx="250" cy="265" r="10" fill="#ffffff" opacity="0.12" />
              <circle cx="242" cy="275" r="2" fill="#8c6849" />
              <circle cx="258" cy="265" r="2.5" fill="#8c6849" />
              <circle cx="249" cy="285" r="1.5" fill="#8c6849" />
              <circle cx="254" cy="272" r="2" fill="#8c6849" />
              <path d="M 205 65 Q 215 55, 225 60" stroke="#ede1d5" strokeWidth="2" fill="none" opacity="0.5" />
              <path
                d="M 120 280 C 110 300, 130 320, 150 295 C 135 285, 125 270, 120 280 Z"
                fill="#fae5cd"
                opacity="0.45"
              />
            </g>
          )}

          {/* ==================================================== */}
          {/* UV FLUORESCENCE ACTIVE OVERLAYS                      */}
          {/* ==================================================== */}
          {isUvOn && (
            <g id="uv-active-phenomenons" className="animate-pulse">
              {/* 1. SCALP: TINEA (Neon Green/Lima) */}
              <g id="glow-scalp-tinea" filter="url(#neonGlowGreen)">
                <path
                  d="M 190 73 C 210 52, 235 55, 245 76 C 230 89, 210 82, 190 73 Z"
                  fill="#a3e635"
                  opacity="0.85"
                />
                <circle cx="218" cy="65" r="12" fill="#c0f26d" opacity="0.75" />
                <path d="M 210 50 L 214 74 M 225 54 L 219 78" stroke="#ffffff" strokeWidth="1.5" />
              </g>

              {/* 2. NOSE: ACNE (Coral Orange / Neon Orange) */}
              <g id="glow-nose-acne" filter="url(#neonGlowOrange)" opacity="0.95">
                <circle cx="250" cy="260" r="5" fill="#FF5F1F" />
                <circle cx="240" cy="268" r="4.5" fill="#ff7a00" />
                <circle cx="258" cy="264" r="5" fill="#ff9100" />
                <circle cx="248" cy="275" r="5.5" fill="#ff0055" />
                <circle cx="259" cy="278" r="4" fill="#FF5F1F" />
                <circle cx="243" cy="282" r="5" fill="#ff7a00" />
                <circle cx="251" cy="288" r="6" fill="#ff3300" />
                <circle cx="250" cy="235" r="2.5" fill="#FF5F1F" />
                <circle cx="246" cy="245" r="3" fill="#ff9100" />
              </g>

              {/* 3. FOREHEAD: ZONE T SEBUM (Rhodamine orange coral shimmer) */}
              <g id="glow-forehead-sebum" filter="url(#neonGlowOrange)" opacity="0.7">
                <ellipse cx="250" cy="130" rx="36" ry="12" fill="#e25c00" opacity="0.45" />
                <circle cx="235" cy="132" r="3" fill="#ffaa44" />
                <circle cx="255" cy="126" r="2.5" fill="#ffaa44" />
                <circle cx="264" cy="134" r="3" fill="#FF5F1F" />
              </g>

              {/* 4. CHEEK SIDE: VITILIGO (Razor-sharp bright Bluish-White) */}
              <g id="glow-cheek-vitiligo" filter="url(#neonGlowBlue)" opacity="0.9">
                <path
                  d="M 120 280 C 105 310, 130 330, 150 295 C 135 282, 125 264, 120 280 Z"
                  fill="#f0f9ff"
                  stroke="#00FFFF"
                  strokeWidth="2.5"
                />
                <ellipse cx="158" cy="308" rx="7" ry="4" fill="#f0f9ff" stroke="#00FFFF" strokeWidth="1.5" />
              </g>

              {/* 5. SIDE CHEEK/PÓMULO: MALASSEZIA (Yellow-Gold cobrizo glow) */}
              <g id="glow-pómulo-tinea-versicolor" filter="url(#neonGlowYellow)" opacity="0.85">
                <ellipse cx="365" cy="195" rx="16" ry="10" fill="#a16207" opacity="0.35" />
                <path
                  d="M 353 190 Q 365 185, 375 192 A 1 1 0 0 1 360 202 Z"
                  fill="#eab308"
                />
                <circle cx="361" cy="196" r="3" fill="#facc15" />
              </g>
            </g>
          )}

          {/* ==================================================== */}
          {/* INTERACTIVE CLICK-ABLE TARGETS                       */}
          {/* ==================================================== */}
          <g id="interactive-glow-targets">
            {INTERACTIVE_ZONES.map((zone) => {
              const isSelected = selectedZoneId === zone.id;
              
              return (
                <g
                  key={zone.id}
                  className="group cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    selectZone(zone);
                  }}
                >
                  {/* Outer breathing ring when UV is active or selected */}
                  <circle
                    cx={zone.x}
                    cy={zone.y}
                    r={zone.r + 8}
                    fill="transparent"
                    stroke={isSelected ? "#bc98ff" : zone.glowColor}
                    strokeWidth={isSelected ? "3" : "1"}
                    strokeDasharray={isSelected ? "none" : "5,5"}
                    className={`transition-all duration-300 ${
                      isSelected ? "opacity-100 scale-110" : "opacity-0 group-hover:opacity-75"
                    }`}
                  />

                  {/* Secondary subtle shadow fill */}
                  <circle
                    cx={zone.x}
                    cy={zone.y}
                    r={zone.r}
                    fill={isSelected ? `${zone.glowColor}20` : "transparent"}
                    className="transition-all duration-300 group-hover:fill-white/5"
                  />

                  {/* Interactive Dot handle overlay */}
                  <circle
                    cx={zone.x}
                    cy={zone.y}
                    r="8"
                    fill={isSelected ? "#ffffff" : zone.glowColor}
                    stroke="#050505"
                    strokeWidth="2.5"
                    className="transition-transform duration-300 group-hover:scale-125 shadow-xl"
                  />
                  
                  {/* Hover tooltips */}
                  <foreignObject
                    x={zone.x - 70}
                    y={zone.y - 45}
                    width="140"
                    height="32"
                    className="pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="bg-[#050505] border border-white/10 text-[9px] text-[#e0e0e0] text-center py-1 px-2 rounded-lg truncate shadow-2xl font-mono tracking-wide">
                      {zone.name}
                    </div>
                  </foreignObject>
                </g>
              );
            })}
          </g>
        </svg>

        {/* Info Guide Overlay at the bottom */}
        <div className="absolute bottom-3 left-3 right-3 bg-[#050505]/95 border border-white/10 rounded-2xl px-4 py-2 text-center text-[10px] text-slate-300 pointer-events-none flex items-center justify-center gap-2 shadow-2xl backdrop-blur-md">
          <Info className="w-3.5 h-3.5 text-[#bc98ff] shrink-0" />
          <span className="font-light">Haz clic en los nodos fluorescentes para analizar la causa microbiológica.</span>
        </div>
      </div>

      {/* Manual Swapper Buttons (capsule pill indicators) */}
      <div id="vis-control-panel" className="w-full grid grid-cols-2 gap-3 mt-5 z-10">
        <button
          id="btn-switch-day"
          onClick={() => setIsUvOn(false)}
          className={`flex items-center justify-center gap-2 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all duration-300 cursor-pointer ${
            !isUvOn
              ? "bg-amber-950/20 border-amber-500/40 text-amber-300"
              : "bg-white/5 border-white/5 text-slate-400 hover:text-slate-200"
          }`}
        >
          <Eye className="w-3.5 h-3.5" />
          Luz de Día
        </button>
        <button
          id="btn-switch-uv"
          onClick={() => setIsUvOn(true)}
          className={`flex items-center justify-center gap-2 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all duration-300 cursor-pointer ${
            isUvOn
              ? "bg-[#bc98ff]/10 border-[#bc98ff]/40 text-[#bc98ff] shadow-[0_0_15px_rgba(188,152,255,0.12)]"
              : "bg-white/5 border-white/5 text-slate-400 hover:text-slate-200"
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-[#bc98ff]" />
          Luz UV Blacklight
        </button>
      </div>
    </div>
  );
}
