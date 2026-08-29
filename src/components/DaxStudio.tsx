import React, { useState } from 'react';
import { Code2, Copy, Check, Search, Filter, Terminal, Sparkles, BookOpen } from 'lucide-react';
import { DAX_MEASURES } from '../data/daxMeasures';
import { DaxMeasure } from '../types';

export const DaxStudio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [search, setSearch] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ['All', 'Energy', 'Cost', 'Financial', 'Environmental'];

  const filteredMeasures = DAX_MEASURES.filter(m => {
    const matchesCat = activeCategory === 'All' || m.category === activeCategory;
    const matchesSearch = m.name.toLowerCase().includes(search.toLowerCase()) ||
                          m.code.toLowerCase().includes(search.toLowerCase()) ||
                          m.explanation.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleCopy = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Title Header */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-md flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Code2 className="w-4 h-4" />
            <span>Part 6 • Power BI DAX Measures Studio</span>
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">Complete DAX Formula Library</h2>
          <p className="text-xs text-slate-400 mt-1">
            {DAX_MEASURES.length} Verified Microsoft Power BI Desktop DAX Measures • Exact DAX Syntax & Explanations
          </p>
        </div>

        {/* Quick Search */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search DAX measures..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-800 text-white placeholder-slate-400 text-xs rounded-xl pl-9 pr-3 py-2 border border-slate-700 outline-none focus:border-amber-400 transition-colors"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-slate-900 p-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-slate-500 dark:text-slate-400" />
          <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Filter Category:</span>
          <div className="flex flex-wrap gap-1.5">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="text-xs text-slate-500 dark:text-slate-400">
          Showing <span className="font-bold text-slate-800 dark:text-slate-200">{filteredMeasures.length}</span> of {DAX_MEASURES.length} measures
        </div>
      </div>

      {/* Measures Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredMeasures.map((measure: DaxMeasure) => {
          const isCopied = copiedId === measure.id;
          return (
            <div key={measure.id} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                    measure.category === 'Energy' ? 'bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300' :
                    measure.category === 'Cost' ? 'bg-blue-100 dark:bg-blue-950/70 text-blue-800 dark:text-blue-300' :
                    measure.category === 'Financial' ? 'bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300' :
                    'bg-indigo-100 dark:bg-indigo-950/70 text-indigo-800 dark:text-indigo-300'
                  }`}>
                    {measure.category}
                  </span>
                  <button
                    onClick={() => handleCopy(measure.id, measure.code)}
                    className="flex items-center space-x-1 px-2.5 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-medium transition-colors"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />}
                    <span>{isCopied ? 'Copied DAX!' : 'Copy DAX'}</span>
                  </button>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{measure.name}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">{measure.explanation}</p>

                {/* Code Block */}
                <div className="bg-slate-950 rounded-xl p-3 text-emerald-400 font-mono text-xs overflow-x-auto shadow-inner border border-slate-800 mb-3">
                  <pre>{measure.code}</pre>
                </div>
              </div>

              {/* Source Columns Footer */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-slate-700 dark:text-slate-300">Required Source Columns: </span>
                {measure.sourceColumns.join(', ')}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
