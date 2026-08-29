import React from 'react';
import { CheckCircle2, ShieldCheck, FileCheck, ArrowUpRight } from 'lucide-react';
import { VALIDATION_TABLE } from '../data/solarData';

export const ValidationTable: React.FC = () => {
  return (
    <div className="space-y-6 pb-12">
      {/* Title Header */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-md">
        <div className="flex items-center space-x-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">
          <ShieldCheck className="w-4 h-4" />
          <span>Part 10 • Data Accuracy Audit & Verification</span>
        </div>
        <h2 className="text-2xl font-black text-white tracking-tight">Source-to-Power-BI Audit Validation Table</h2>
        <p className="text-xs text-slate-400 mt-1">
          Cross-checking PVsyst V7.4.7 Report + BOQ Excel Source Values against Power BI DAX Measures (100% Pass)
        </p>
      </div>

      {/* Validation Table */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white border-b border-slate-800">
                <th className="p-3 font-bold">Metric</th>
                <th className="p-3 font-bold">Primary Source File</th>
                <th className="p-3 font-bold text-right">Source Value</th>
                <th className="p-3 font-bold text-right">Power BI DAX Value</th>
                <th className="p-3 font-bold text-center">Audit Status</th>
                <th className="p-3 font-bold">Traceability / Audit Note</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium text-slate-800 dark:text-slate-200">
              {VALIDATION_TABLE.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="p-3 font-bold text-slate-900 dark:text-white">{item.Metric}</td>
                  <td className="p-3 text-slate-600 dark:text-slate-400 text-[11px]">{item.Source}</td>
                  <td className="p-3 text-right font-mono font-bold text-slate-900 dark:text-slate-200">{item.SourceValue}</td>
                  <td className="p-3 text-right font-mono font-bold text-blue-700 dark:text-blue-400">{item.PbiValue}</td>
                  <td className="p-3 text-center">
                    <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                      <span>{item.Status}</span>
                    </span>
                  </td>
                  <td className="p-3 text-slate-500 dark:text-slate-400 text-[11px]">{item.Note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
