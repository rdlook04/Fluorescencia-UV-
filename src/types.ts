export interface FluorescenceEntry {
  id: string;
  colorName: string;
  hexColor: string; // Tailwind glow color
  glowClass: string; // Tailwind shadow/glow class
  woodLampLook: string; // Description of the uv glow
  substance: string; // The biological/chemical compound
  cause: string; // Diagnoses (Erythrasma, Pseudomonas, Acne, Vitiligo, etc.)
  microbiology: string; // Microorganism or pigment involved
  description: string; // Medical explanation
  symptoms: string[]; // Associated symptoms or areas
  relevance: string; // Clinic diagnostic value
  clinicalTip: string; // Care note/tip
}

export interface InteractiveZone {
  id: string;
  name: string;
  title: string;
  x: number; // SVG coordinates for mapping
  y: number;
  r: number; // Point radius click-target
  normalPhotoLook: string; // normal visual appearance
  uvColor: string; // Fluorescence color name
  glowColor: string; // Hex/CSS color
  fluorescenceId: string; // Links to FluorescenceEntry
  placementDescription: string;
}
