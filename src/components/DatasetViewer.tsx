import React, { useState } from 'react';
import { Database, Download, Table as TableIcon, Search, FileSpreadsheet, CheckCircle, Info } from 'lucide-react';
import {
  PROJECT_SUMMARY,
  MONTHLY_PERFORMANCE,
  BOQ_ITEMS,
  PV_COMPONENTS,
  SYSTEM_LOSSES,
  FINANCIAL_25_YEAR,
  VALIDATION_TABLE
} from '../data/solarData';

interface DatasetViewerProps {
  onDownloadCSV: (filename: string, content: string) => void;
  onDownloadAllCSV: () => void;
}

export const DatasetViewer: React.FC<DatasetViewerProps> = ({ onDownloadCSV, onDownloadAllCSV }) => {
  const [activeTable, setActiveTable] = useState<string>('Monthly_Performance');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const tableList = [
    { id: 'Project_Summary', label: '1. Project_Summary', count: 1 },
    { id: 'BOQ', label: '2. BOQ', count: BOQ_ITEMS.length },
    { id: 'PV_Components', label: '3. PV_Components', count: PV_COMPONENTS.length },
    { id: 'Monthly_Performance', label: '4. Monthly_Performance', count: MONTHLY_PERFORMANCE.length },
    { id: 'System_Losses', label: '5. System_Losses', count: SYSTEM_LOSSES.length },
    { id: 'Financial_Summary', label: '6. Financial_Summary', count: 1 },
    { id: 'Financial_25_Year', label: '7. Financial_25_Year', count: FINANCIAL_25_YEAR.length },
    { id: 'Environmental', label: '8. Environmental', count: 3 }
  ];

  // CSV Generator helper
  const generateCSVForTable = (tableId: string): { filename: string; content: string } => {
    if (tableId === 'Monthly_Performance') {
      const headers = ['Month', 'MonthNo', 'GlobalHorizontalIrradiation', 'DiffuseIrradiation', 'AmbientTemperature', 'GlobalIncidentIrradiation', 'GlobalEffectiveIrradiation', 'PVArrayEnergy', 'UserEnergy', 'SolarEnergy', 'GridEnergy', 'EnergyFromGrid'];
      const rows = MONTHLY_PERFORMANCE.map(m => [
        m.Month, m.MonthNo, m.GlobalHorizontalIrradiation, m.DiffuseIrradiation, m.AmbientTemperature,
        m.GlobalIncidentIrradiation, m.GlobalEffectiveIrradiation, m.PVArrayEnergy, m.UserEnergy,
        m.SolarEnergy, m.GridEnergy, m.EnergyFromGrid
      ].join(','));
      return { filename: 'Monthly_Performance.csv', content: [headers.join(','), ...rows].join('\n') };
    }
    if (tableId === 'BOQ') {
      const headers = ['SNo', 'CategoryCode', 'Category', 'ItemDescription', 'Specification', 'Quantity', 'Unit', 'UnitCost_INR', 'TotalCost_INR', 'Source'];
      const rows = BOQ_ITEMS.map(b => [
        b.SNo, `"${b.CategoryCode}"`, `"${b.Category}"`, `"${b.ItemDescription}"`, `"${b.Specification}"`,
        b.Quantity, `"${b.Unit}"`, b.UnitCost, b.TotalCost, `"${b.Source}"`
      ].join(','));
      return { filename: 'BOQ.csv', content: [headers.join(','), ...rows].join('\n') };
    }
    if (tableId === 'PV_Components') {
      const headers = ['Component', 'Category', 'Manufacturer', 'Model', 'Quantity', 'UnitPower', 'TotalPower', 'Specification'];
      const rows = PV_COMPONENTS.map(c => [
        `"${c.Component}"`, `"${c.Category}"`, `"${c.Manufacturer}"`, `"${c.Model}"`, c.Quantity,
        `"${c.UnitPower}"`, `"${c.TotalPower}"`, `"${c.Specification}"`
      ].join(','));
      return { filename: 'PV_Components.csv', content: [headers.join(','), ...rows].join('\n') };
    }
    if (tableId === 'System_Losses') {
      const headers = ['Category', 'Description', 'Percentage', 'EnergyValueKWh'];
      const rows = SYSTEM_LOSSES.map(s => [
        `"${s.Category}"`, `"${s.Description}"`, s.Percentage, s.EnergyValueKWh || ''
      ].join(','));
      return { filename: 'System_Losses.csv', content: [headers.join(','), ...rows].join('\n') };
    }
    if (tableId === 'Financial_25_Year') {
      const headers = ['Year', 'ElectricitySale_INR', 'OwnFunds_INR', 'RunCosts_INR', 'Depreciation_INR', 'TaxableIncome_INR', 'Taxes_INR', 'AfterTaxProfit_INR', 'SelfConsumptionSaving_INR', 'CumulativeProfit_INR', 'AmortizationPercentage'];
      const rows = FINANCIAL_25_YEAR.map(f => [
        f.Year, f.ElectricitySale, f.OwnFunds, f.RunCosts, f.Depreciation, f.TaxableIncome,
        f.Taxes, f.AfterTaxProfit, f.SelfConsumptionSaving, f.CumulativeProfit, f.AmortizationPercentage
      ].join(','));
      return { filename: 'Financial_25_Year.csv', content: [headers.join(','), ...rows].join('\n') };
    }
    if (tableId === 'Project_Summary') {
      const headers = ['Parameter', 'Value', 'Unit', 'Source'];
      const rows = [
        ['ProjectName', `"${PROJECT_SUMMARY.projectName}"`, 'String', 'PVsyst Report & BOQ'],
        ['Location', `"${PROJECT_SUMMARY.location}"`, 'String', 'PVsyst Page 2'],
        ['SystemType', `"${PROJECT_SUMMARY.systemType}"`, 'String', 'PVsyst Page 2'],
        ['InstalledCapacityDC', PROJECT_SUMMARY.installedCapacityDC, 'kWp', 'PVsyst Page 2'],
        ['InstalledCapacityAC', PROJECT_SUMMARY.installedCapacityAC, 'kWac', 'PVsyst Page 2'],
        ['NumModules', PROJECT_SUMMARY.numModules, 'Units', 'PVsyst Page 2'],
        ['NumInverters', PROJECT_SUMMARY.numInverters, 'Units', 'PVsyst Page 2'],
        ['TiltAzimuth', `"${PROJECT_SUMMARY.tiltAzimuth}"`, 'Deg', 'PVsyst Page 2']
      ].map(r => r.join(','));
      return { filename: 'Project_Summary.csv', content: [headers.join(','), ...rows].join('\n') };
    }
    if (tableId === 'Financial_Summary') {
      const headers = ['Parameter', 'Value', 'Unit'];
      const rows = [
        ['TotalInstallationCost', PROJECT_SUMMARY.totalInstallationCost, 'INR'],
        ['CostPerWp', PROJECT_SUMMARY.costPerWp, 'INR/Wp'],
        ['OwnFunds', PROJECT_SUMMARY.ownFunds, 'INR'],
        ['Subsidy', PROJECT_SUMMARY.subsidy, 'INR'],
        ['LCOE', PROJECT_SUMMARY.lcoe, 'INR/kWh'],
        ['PaybackPeriod', PROJECT_SUMMARY.paybackPeriod, 'Years'],
        ['NPV', PROJECT_SUMMARY.npv, 'INR'],
        ['IRR', PROJECT_SUMMARY.irr, '%'],
        ['ROI', PROJECT_SUMMARY.roi, '%']
      ].map(r => r.join(','));
      return { filename: 'Financial_Summary.csv', content: [headers.join(','), ...rows].join('\n') };
    }
    // Environmental
    const headers = ['Metric', 'Value', 'Unit', 'Category'];
    const rows = [
      ['Net Lifetime CO2 Saved', PROJECT_SUMMARY.lifetimeCO2Saved, 'tCO2', 'Environmental Balance'],
      ['Replaced Emissions', PROJECT_SUMMARY.replacedCO2, 'tCO2', 'Environmental Balance'],
      ['Generated Emissions', PROJECT_SUMMARY.generatedCO2, 'tCO2', 'Environmental Balance']
    ].map(r => r.join(','));
    return { filename: 'Environmental.csv', content: [headers.join(','), ...rows].join('\n') };
  };

  const currentCSV = generateCSVForTable(activeTable);

  return (
    <div className="space-y-6 pb-12">
      {/* Title Header */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-md flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Database className="w-4 h-4" />
            <span>Part 1 & 2 • Clean Power BI Ready Dataset</span>
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">Structured Dataset Tables & CSV Exporter</h2>
          <p className="text-xs text-slate-400 mt-1">
            Separated Fact & Dimension Tables • 100% Extracted Source Data • Direct Power BI Desktop Import
          </p>
        </div>

        <button
          onClick={onDownloadAllCSV}
          className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all shadow-md"
        >
          <Download className="w-4 h-4" />
          <span>Download All 8 CSV Tables</span>
        </button>
      </div>

      {/* Table Selector Pills */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-xs">
        <div className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">Select Table to Inspect & Export:</div>
        <div className="flex flex-wrap gap-2">
          {tableList.map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTable(t.id)}
              className={`flex items-center space-x-2 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                activeTable === t.id
                  ? 'bg-blue-600 text-white shadow-xs font-bold'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <TableIcon className="w-3.5 h-3.5" />
              <span>{t.label}</span>
              <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                activeTable === t.id ? 'bg-blue-800 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
              }`}>
                {t.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Active Table Viewer */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center space-x-2">
              <FileSpreadsheet className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Active Table: {activeTable}.csv</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Power BI Desktop ready CSV export table with standard headers.</p>
          </div>

          <button
            onClick={() => onDownloadCSV(currentCSV.filename, currentCSV.content)}
            className="flex items-center space-x-1.5 px-3 py-1.5 bg-blue-50 dark:bg-blue-950/70 hover:bg-blue-100 dark:hover:bg-blue-900/80 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 rounded-xl text-xs font-bold transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export {activeTable}.csv</span>
          </button>
        </div>

        {/* CSV Preview Textarea */}
        <div className="bg-slate-950 text-emerald-400 p-4 rounded-xl font-mono text-xs overflow-x-auto shadow-inner border border-slate-800 max-h-96 overflow-y-auto">
          <pre>{currentCSV.content}</pre>
        </div>
      </div>
    </div>
  );
};
