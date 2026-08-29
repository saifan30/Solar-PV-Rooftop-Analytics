import React, { useState } from 'react';
import { Palette, Download, Copy, Check, Eye, Shield, Sparkles } from 'lucide-react';
import { POWER_BI_THEME_JSON } from '../data/powerBiTheme';

interface ThemeStudioProps {
  onDownloadCSV: (filename: string, content: string) => void;
}

export const ThemeStudio: React.FC<ThemeStudioProps> = ({ onDownloadCSV }) => {
  const [copied, setCopied] = useState(false);
  const themeString = JSON.stringify(POWER_BI_THEME_JSON, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(themeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    onDownloadCSV('Solar_PV_Theme.json', themeString);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Title Header */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-md flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Palette className="w-4 h-4" />
            <span>Part 8 • Power BI Custom Theme Config</span>
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">Solar_PV_Theme.json Inspector</h2>
          <p className="text-xs text-slate-400 mt-1">
            Renewable Energy Minimalist Palette • Deep Navy (#1E3A8A) • Sky Blue (#0284C7) • Emerald (#10B981)
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleCopy}
            className="flex items-center space-x-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold border border-slate-700 transition-all"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied Theme JSON!' : 'Copy JSON'}</span>
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center space-x-1.5 px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold shadow-sm transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Solar_PV_Theme.json</span>
          </button>
        </div>
      </div>

      {/* Palette Swatches */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3">Power BI Data Color Swatches & Aesthetic Rules</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {POWER_BI_THEME_JSON.dataColors.map((color, idx) => (
            <div key={idx} className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-center">
              <div
                className="w-full h-12 rounded-lg mb-2 shadow-inner border border-black/10"
                style={{ backgroundColor: color }}
              />
              <div className="text-[11px] font-mono font-bold text-slate-800 dark:text-slate-200">{color}</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium truncate">
                {idx === 0 ? 'Primary Navy' : idx === 1 ? 'Sky Blue' : idx === 2 ? 'Solar Emerald' : idx === 3 ? 'Irradiance Amber' : 'Neutral Slate'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* JSON Viewer */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">Power BI Theme JSON Import File</h3>
          <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded font-mono font-semibold">
            Import via Power BI Desktop → View → Themes → Browse for themes
          </span>
        </div>
        <div className="bg-slate-950 text-amber-300 p-4 rounded-xl font-mono text-xs overflow-x-auto shadow-inner border border-slate-800 max-h-96">
          <pre>{themeString}</pre>
        </div>
      </div>
    </div>
  );
};
