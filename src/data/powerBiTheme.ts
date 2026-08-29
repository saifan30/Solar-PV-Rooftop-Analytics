export const POWER_BI_THEME_JSON = {
  name: "Solar PV Rooftop Clean Energy Analytics",
  dataColors: [
    "#1E3A8A", // Deep Navy (Primary)
    "#0284C7", // Sky Blue (Grid / Secondary)
    "#10B981", // Emerald Green (Solar / Profit)
    "#F59E0B", // Solar Amber (Irradiation)
    "#64748B", // Slate Gray (Losses / Neutral)
    "#EC4899", // Rose Accent
    "#8B5CF6", // Violet Accent
    "#06B6D4"  // Cyan Accent
  ],
  background: "#F8FAFC",
  foreground: "#0F172A",
  tableAccent: "#1E3A8A",
  visualStyles: {
    "*": {
      "*": {
        outspacePane: [{ backgroundColor: "#F8FAFC" }],
        background: [{ show: true, color: { solid: { color: "#FFFFFF" } }, transparency: 0 }],
        visualHeader: [{ show: true, titleColor: { solid: { color: "#0F172A" } } }],
        border: [{ show: true, color: { solid: { color: "#E2E8F0" } }, radius: 10 }],
        dropShadow: [{ show: false }]
      }
    },
    card: {
      "*": {
        labels: [{ color: { solid: { color: "#1E3A8A" } }, fontSize: 24, fontFamily: "Segoe UI" }],
        categoryLabels: [{ color: { solid: { color: "#64748B" } }, fontSize: 11, fontFamily: "Segoe UI" }]
      }
    }
  }
};
