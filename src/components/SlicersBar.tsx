import React from 'react';
import { Filter, RotateCcw, Calendar, Layers, Zap } from 'lucide-react';
import { FilterState } from '../types';

interface SlicersBarProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  onReset: () => void;
}

export const SlicersBar: React.FC<SlicersBarProps> = ({ filters, setFilters, onReset }) => {
  const months = ['All', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const categories = [
    'All',
    'PV Modules & Mounting',
    'Inverter & Power Conditioning',
    'Cabling, Protection & Monitoring',
    'Engineering & Installation',
    'Insurance & Statutory'
  ];

  return (
    <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-3 shadow-xs">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center space-x-2 text-slate-700 dark:text-slate-300 font-semibold">
          <Filter className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>Power BI Report Slicers:</span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Month Slicer */}
          <div className="flex items-center space-x-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2.5 py-1">
            <Calendar className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
            <span className="text-slate-500 dark:text-slate-400 font-medium">Month:</span>
            <select
              value={filters.selectedMonth}
              onChange={(e) => setFilters(prev => ({ ...prev, selectedMonth: e.target.value }))}
              className="bg-transparent font-semibold text-slate-800 dark:text-slate-200 outline-none cursor-pointer [&>option]:bg-white [&>option]:dark:bg-slate-800 [&>option]:dark:text-slate-200"
            >
              {months.map(m => (
                <option key={m} value={m}>{m === 'All' ? 'Full Year (All Months)' : m}</option>
              ))}
            </select>
          </div>

          {/* BOQ Category Slicer */}
          <div className="flex items-center space-x-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2.5 py-1">
            <Layers className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
            <span className="text-slate-500 dark:text-slate-400 font-medium">BOQ Category:</span>
            <select
              value={filters.selectedCategory}
              onChange={(e) => setFilters(prev => ({ ...prev, selectedCategory: e.target.value }))}
              className="bg-transparent font-semibold text-slate-800 dark:text-slate-200 outline-none cursor-pointer max-w-[180px] truncate [&>option]:bg-white [&>option]:dark:bg-slate-800 [&>option]:dark:text-slate-200"
            >
              {categories.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Energy Type Toggle */}
          <div className="flex items-center space-x-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1">
            <Zap className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-slate-500 dark:text-slate-400 font-medium mr-1">Energy View:</span>
            {(['All', 'Solar', 'Grid'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilters(prev => ({ ...prev, energyType: type }))}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                  filters.energyType === type
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Reset button */}
          <button
            onClick={onReset}
            className="flex items-center space-x-1 px-2.5 py-1 border border-slate-300 dark:border-slate-700 hover:border-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-300 text-xs font-medium transition-colors"
            title="Reset all slicers to default"
          >
            <RotateCcw className="w-3 h-3 text-slate-500 dark:text-slate-400" />
            <span>Reset Filters</span>
          </button>
        </div>
      </div>
    </div>
  );
};
