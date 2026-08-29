import React from 'react';
import {
  LayoutDashboard,
  DollarSign,
  GitBranch,
  Code2,
  Database,
  Palette,
  BookOpen,
  CheckCircle2,
  Download,
  Sun,
  Moon
} from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onDownloadAllCSV: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onDownloadAllCSV,
  isDarkMode,
  toggleDarkMode
}) => {
  const tabs = [
    { id: 'dash1', label: 'Technical Dashboard', icon: LayoutDashboard },
    { id: 'dash2', label: 'Cost & Financial', icon: DollarSign },
    { id: 'model', label: 'Data Model', icon: GitBranch },
    { id: 'dax', label: 'DAX Studio', icon: Code2 },
    { id: 'dataset', label: 'Dataset & CSVs', icon: Database },
    { id: 'theme', label: 'Power BI Theme', icon: Palette },
    { id: 'guide', label: 'PBIX Guide', icon: BookOpen },
    { id: 'validation', label: 'Audit Validation', icon: CheckCircle2 },
  ];

  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand & Project Info */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-yellow-400 to-blue-600 p-0.5 flex items-center justify-center shadow-lg shadow-amber-500/10">
              <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                <Sun className="w-5 h-5 text-amber-400 animate-pulse" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-base font-bold text-white tracking-wide">Solar_PV_Analytics.pbix</h1>
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full">
                  5.5 kWp Live Desktop Model
                </span>
              </div>
              <p className="text-xs text-slate-400">Power BI Rooftop Analytics Suite • PVsyst & BOQ Integrated</p>
            </div>
          </div>

          {/* Action buttons & Dark/Light Mode Toggle */}
          <div className="flex items-center space-x-3">
            {/* Dark/Light Mode Toggle Switch */}
            <div className="flex items-center bg-slate-800/90 border border-slate-700/80 rounded-full p-1 shadow-inner">
              <button
                type="button"
                role="switch"
                aria-checked={isDarkMode}
                onClick={toggleDarkMode}
                className="flex items-center space-x-1.5 focus:outline-hidden group"
                title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {/* Light Mode Indicator */}
                <div
                  className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                    !isDarkMode
                      ? 'bg-amber-400 text-slate-950 shadow-xs'
                      : 'text-slate-400 group-hover:text-slate-200'
                  }`}
                >
                  <Sun className={`w-3.5 h-3.5 ${!isDarkMode ? 'text-slate-950' : 'text-slate-400'}`} />
                  <span className="text-[11px] hidden sm:inline">Light</span>
                </div>

                {/* Dark Mode Indicator */}
                <div
                  className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isDarkMode
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-400 group-hover:text-slate-200'
                  }`}
                >
                  <Moon className={`w-3.5 h-3.5 ${isDarkMode ? 'text-white' : 'text-slate-400'}`} />
                  <span className="text-[11px] hidden sm:inline">Dark</span>
                </div>
              </button>
            </div>

            <button
              onClick={onDownloadAllCSV}
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-medium transition-all shadow-sm hover:shadow"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Export CSV Package</span>
              <span className="sm:hidden">CSVs</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 overflow-x-auto no-scrollbar border-t border-slate-800/80 pt-1 pb-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-xs font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-blue-600/90 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-300' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
