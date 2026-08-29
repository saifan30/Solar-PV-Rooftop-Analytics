import React, { useState } from 'react';
import { Header } from './components/Header';
import { SlicersBar } from './components/SlicersBar';
import { DashboardTechnical } from './components/DashboardTechnical';
import { DashboardFinancial } from './components/DashboardFinancial';
import { DataModelView } from './components/DataModelView';
import { DaxStudio } from './components/DaxStudio';
import { DatasetViewer } from './components/DatasetViewer';
import { ThemeStudio } from './components/ThemeStudio';
import { ImplementationGuide } from './components/ImplementationGuide';
import { ValidationTable } from './components/ValidationTable';
import { FilterState } from './types';
import {
  MONTHLY_PERFORMANCE,
  BOQ_ITEMS,
  PV_COMPONENTS,
  SYSTEM_LOSSES,
  FINANCIAL_25_YEAR,
  PROJECT_SUMMARY
} from './data/solarData';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('dash1');

  // Dark mode state with system preference & local persistence
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('solar_pv_theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Sync dark class on document element
  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('solar_pv_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('solar_pv_theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const initialFilters: FilterState = {
    selectedMonth: 'All',
    selectedCategory: 'All',
    energyType: 'All',
    yearRange: [0, 25],
    searchTerm: ''
  };

  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const handleResetFilters = () => {
    setFilters(initialFilters);
  };

  // CSV Exporter Utility
  const handleDownloadCSV = (filename: string, content: string) => {
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadAllCSV = () => {
    // Downloads all 8 datasets sequentially
    const tables = [
      { name: 'Monthly_Performance.csv', content: getMonthlyCSV() },
      { name: 'BOQ.csv', content: getBOQCSV() },
      { name: 'PV_Components.csv', content: getComponentsCSV() },
      { name: 'System_Losses.csv', content: getLossesCSV() },
      { name: 'Financial_25_Year.csv', content: getFinancial25CSV() },
      { name: 'Project_Summary.csv', content: getSummaryCSV() },
      { name: 'Financial_Summary.csv', content: getFinancialSummaryCSV() },
      { name: 'Environmental.csv', content: getEnvCSV() }
    ];

    tables.forEach((t, i) => {
      setTimeout(() => {
        handleDownloadCSV(t.name, t.content);
      }, i * 250);
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans antialiased transition-colors duration-200">
      {/* Top Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onDownloadAllCSV={handleDownloadAllCSV}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* Power BI Slicers Panel - Visible on Dashboard views */}
      {(activeTab === 'dash1' || activeTab === 'dash2') && (
        <SlicersBar
          filters={filters}
          setFilters={setFilters}
          onReset={handleResetFilters}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {activeTab === 'dash1' && <DashboardTechnical filters={filters} />}
        {activeTab === 'dash2' && <DashboardFinancial filters={filters} />}
        {activeTab === 'model' && <DataModelView />}
        {activeTab === 'dax' && <DaxStudio />}
        {activeTab === 'dataset' && (
          <DatasetViewer
            onDownloadCSV={handleDownloadCSV}
            onDownloadAllCSV={handleDownloadAllCSV}
          />
        )}
        {activeTab === 'theme' && <ThemeStudio onDownloadCSV={handleDownloadCSV} />}
        {activeTab === 'guide' && <ImplementationGuide />}
        {activeTab === 'validation' && <ValidationTable />}
      </main>

      {/* Footer Status Bar */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 text-xs py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white font-semibold">Solar_PV_Analytics.pbix</span>
            <span>• Power BI Desktop Ready Model</span>
          </div>
          <div>
            Source: <span className="text-slate-300">PVsyst V7.4.7 (VC0) & Solar_PV_BOQ_5.5kWp.xlsx</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// CSV Generator Helpers
function getMonthlyCSV() {
  const headers = ['Month', 'MonthNo', 'GlobalHorizontalIrradiation', 'DiffuseIrradiation', 'AmbientTemperature', 'GlobalIncidentIrradiation', 'GlobalEffectiveIrradiation', 'PVArrayEnergy', 'UserEnergy', 'SolarEnergy', 'GridEnergy', 'EnergyFromGrid'];
  const rows = MONTHLY_PERFORMANCE.map(m => [
    m.Month, m.MonthNo, m.GlobalHorizontalIrradiation, m.DiffuseIrradiation, m.AmbientTemperature,
    m.GlobalIncidentIrradiation, m.GlobalEffectiveIrradiation, m.PVArrayEnergy, m.UserEnergy,
    m.SolarEnergy, m.GridEnergy, m.EnergyFromGrid
  ].join(','));
  return [headers.join(','), ...rows].join('\n');
}

function getBOQCSV() {
  const headers = ['SNo', 'CategoryCode', 'Category', 'ItemDescription', 'Specification', 'Quantity', 'Unit', 'UnitCost_INR', 'TotalCost_INR', 'Source'];
  const rows = BOQ_ITEMS.map(b => [
    b.SNo, `"${b.CategoryCode}"`, `"${b.Category}"`, `"${b.ItemDescription}"`, `"${b.Specification}"`,
    b.Quantity, `"${b.Unit}"`, b.UnitCost, b.TotalCost, `"${b.Source}"`
  ].join(','));
  return [headers.join(','), ...rows].join('\n');
}

function getComponentsCSV() {
  const headers = ['Component', 'Category', 'Manufacturer', 'Model', 'Quantity', 'UnitPower', 'TotalPower', 'Specification'];
  const rows = PV_COMPONENTS.map(c => [
    `"${c.Component}"`, `"${c.Category}"`, `"${c.Manufacturer}"`, `"${c.Model}"`, c.Quantity,
    `"${c.UnitPower}"`, `"${c.TotalPower}"`, `"${c.Specification}"`
  ].join(','));
  return [headers.join(','), ...rows].join('\n');
}

function getLossesCSV() {
  const headers = ['Category', 'Description', 'Percentage', 'EnergyValueKWh'];
  const rows = SYSTEM_LOSSES.map(s => [
    `"${s.Category}"`, `"${s.Description}"`, s.Percentage, s.EnergyValueKWh || ''
  ].join(','));
  return [headers.join(','), ...rows].join('\n');
}

function getFinancial25CSV() {
  const headers = ['Year', 'ElectricitySale_INR', 'OwnFunds_INR', 'RunCosts_INR', 'Depreciation_INR', 'TaxableIncome_INR', 'Taxes_INR', 'AfterTaxProfit_INR', 'SelfConsumptionSaving_INR', 'CumulativeProfit_INR', 'AmortizationPercentage'];
  const rows = FINANCIAL_25_YEAR.map(f => [
    f.Year, f.ElectricitySale, f.OwnFunds, f.RunCosts, f.Depreciation, f.TaxableIncome,
    f.Taxes, f.AfterTaxProfit, f.SelfConsumptionSaving, f.CumulativeProfit, f.AmortizationPercentage
  ].join(','));
  return [headers.join(','), ...rows].join('\n');
}

function getSummaryCSV() {
  const headers = ['Parameter', 'Value', 'Unit'];
  const rows = [
    ['ProjectName', `"${PROJECT_SUMMARY.projectName}"`, 'String'],
    ['Location', `"${PROJECT_SUMMARY.location}"`, 'String'],
    ['SystemType', `"${PROJECT_SUMMARY.systemType}"`, 'String'],
    ['InstalledCapacityDC', PROJECT_SUMMARY.installedCapacityDC, 'kWp'],
    ['InstalledCapacityAC', PROJECT_SUMMARY.installedCapacityAC, 'kWac'],
    ['NumModules', PROJECT_SUMMARY.numModules, 'Units'],
    ['NumInverters', PROJECT_SUMMARY.numInverters, 'Units'],
    ['TiltAzimuth', `"${PROJECT_SUMMARY.tiltAzimuth}"`, 'Deg']
  ].map(r => r.join(','));
  return [headers.join(','), ...rows].join('\n');
}

function getFinancialSummaryCSV() {
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
  return [headers.join(','), ...rows].join('\n');
}

function getEnvCSV() {
  const headers = ['Metric', 'Value', 'Unit', 'Category'];
  const rows = [
    ['Net Lifetime CO2 Saved', PROJECT_SUMMARY.lifetimeCO2Saved, 'tCO2', 'Environmental Balance'],
    ['Replaced Emissions', PROJECT_SUMMARY.replacedCO2, 'tCO2', 'Environmental Balance'],
    ['Generated Emissions', PROJECT_SUMMARY.generatedCO2, 'tCO2', 'Environmental Balance']
  ].map(r => r.join(','));
  return [headers.join(','), ...rows].join('\n');
}
