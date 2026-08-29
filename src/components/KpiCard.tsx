import React from 'react';
import { LucideIcon } from 'lucide-react';

interface KpiCardProps {
  title: string;
  value: string | number;
  unit?: string;
  subtitle?: string;
  icon?: LucideIcon;
  badge?: string;
  badgeColor?: 'blue' | 'emerald' | 'amber' | 'slate' | 'rose' | 'indigo';
  borderAccent?: boolean;
}

export const KpiCard: React.FC<KpiCardProps> = ({
  title,
  value,
  unit,
  subtitle,
  icon: Icon,
  badge,
  badgeColor = 'blue',
  borderAccent = false
}) => {
  const badgeStyles = {
    blue: 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/60',
    emerald: 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60',
    amber: 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800/60',
    slate: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700',
    rose: 'bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800/60',
    indigo: 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800/60'
  };

  return (
    <div className={`bg-white dark:bg-slate-900 rounded-xl border p-4 transition-all duration-200 shadow-2xs hover:shadow-md flex flex-col justify-between ${
      borderAccent ? 'border-l-4 border-l-blue-600 border-t-slate-200 dark:border-t-slate-800 border-r-slate-200 dark:border-r-slate-800 border-b-slate-200 dark:border-b-slate-800' : 'border-slate-200 dark:border-slate-800'
    }`}>
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider truncate mr-2">
            {title}
          </span>
          {Icon && (
            <div className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>
          )}
        </div>

        <div className="flex items-baseline space-x-1.5 my-1">
          <span className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            {value}
          </span>
          {unit && (
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              {unit}
            </span>
          )}
        </div>
      </div>

      <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px]">
        {subtitle && (
          <span className="text-slate-500 dark:text-slate-400 font-normal truncate">
            {subtitle}
          </span>
        )}
        {badge && (
          <span className={`px-2 py-0.5 rounded-md font-semibold border text-[10px] ${badgeStyles[badgeColor]}`}>
            {badge}
          </span>
        )}
      </div>
    </div>
  );
};
