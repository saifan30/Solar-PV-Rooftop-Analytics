import React from 'react';
import { GitBranch, Key, Database, ArrowRightLeft, Layers, Info, CheckCircle2 } from 'lucide-react';

export const DataModelView: React.FC = () => {
  const tables = [
    {
      name: "Monthly_Performance",
      type: "FACT",
      pk: "Month",
      fk: "MonthNo (relates to Calendar[MonthNo])",
      columns: [
        "Month (PK, String)",
        "MonthNo (FK, Int)",
        "GlobalHorizontalIrradiation (Decimal, kWh/m²)",
        "DiffuseIrradiation (Decimal, kWh/m²)",
        "AmbientTemperature (Decimal, °C)",
        "GlobalIncidentIrradiation (Decimal, kWh/m²)",
        "GlobalEffectiveIrradiation (Decimal, kWh/m²)",
        "PVArrayEnergy (Decimal, kWh)",
        "UserEnergy (Decimal, kWh)",
        "SolarEnergy (Decimal, kWh)",
        "GridEnergy (Decimal, kWh)",
        "EnergyFromGrid (Decimal, kWh)"
      ],
      description: "Core fact table storing monthly energy yield, irradiation, ambient temperature, and self-consumption dispatch metrics."
    },
    {
      name: "BOQ",
      type: "FACT",
      pk: "SNo",
      fk: "CategoryCode (relates to Category Dim)",
      columns: [
        "SNo (PK, Int)",
        "CategoryCode (FK, String)",
        "Category (String)",
        "ItemDescription (String)",
        "Specification (String)",
        "Quantity (Decimal)",
        "Unit (String)",
        "UnitCost (Decimal, INR)",
        "TotalCost (Decimal, INR)",
        "Source (String)"
      ],
      description: "Bill of Quantities fact table containing itemized equipment, installation, cabling, and statutory capital expenses."
    },
    {
      name: "Financial_25_Year",
      type: "FACT",
      pk: "Year",
      fk: "Year (relates to Calendar[Year])",
      columns: [
        "Year (PK, Int)",
        "ElectricitySale (Decimal, INR)",
        "OwnFunds (Decimal, INR)",
        "RunCosts (Decimal, INR)",
        "Depreciation (Decimal, INR)",
        "TaxableIncome (Decimal, INR)",
        "Taxes (Decimal, INR)",
        "AfterTaxProfit (Decimal, INR)",
        "SelfConsumptionSaving (Decimal, INR)",
        "CumulativeProfit (Decimal, INR)",
        "AmortizationPercentage (Decimal, %)"
      ],
      description: "25-year financial simulation fact table tracking annual electricity sales, running OPEX, tax depreciation, and equity payback."
    },
    {
      name: "Calendar",
      type: "DIMENSION",
      pk: "DateKey / MonthNo",
      fk: "None",
      columns: [
        "DateKey (PK, Date)",
        "Year (Int)",
        "MonthNo (Int)",
        "MonthName (String)",
        "MonthShort (String)",
        "Quarter (String)",
        "IsWeekend (Boolean)"
      ],
      description: "Standard DAX Calendar dimension table created using CALENDARAUTO() or CALENDAR() for time intelligence functions."
    },
    {
      name: "Project_Summary",
      type: "DIMENSION",
      pk: "ProjectID",
      fk: "None",
      columns: [
        "ProjectName (String)",
        "Location (String)",
        "SystemType (String)",
        "InstalledCapacityDC (Decimal, kWp)",
        "InstalledCapacityAC (Decimal, kWac)",
        "NumModules (Int)",
        "NumInverters (Int)",
        "ModuleManufacturer (String)",
        "InverterManufacturer (String)",
        "ProjectLifetime (Int, Years)"
      ],
      description: "Project metadata dimension containing system sizing, location, and technical specification parameters."
    },
    {
      name: "PV_Components",
      type: "DIMENSION",
      pk: "ComponentID",
      fk: "Category",
      columns: [
        "Component (PK, String)",
        "Category (FK, String)",
        "Manufacturer (String)",
        "Model (String)",
        "Quantity (Int)",
        "UnitPower (String)",
        "TotalPower (String)",
        "Specification (String)"
      ],
      description: "Component equipment dimension detailing module, inverter, mounting structure, and BOS specifications."
    },
    {
      name: "System_Losses",
      type: "FACT",
      pk: "LossID",
      fk: "Category",
      columns: [
        "Category (String)",
        "Description (String)",
        "Percentage (Decimal, %)",
        "EnergyValueKWh (Decimal, kWh)"
      ],
      description: "Loss factor table recording near-shading, IAM, soiling, thermal, wiring, and inverter efficiency loss steps."
    },
    {
      name: "Financial_Summary",
      type: "DIMENSION",
      pk: "ParamID",
      fk: "None",
      columns: [
        "TotalInstallationCost (Decimal, INR)",
        "OwnFunds (Decimal, INR)",
        "Subsidy (Decimal, INR)",
        "AnnualOMCost (Decimal, INR)",
        "LCOE (Decimal, INR/kWh)",
        "PaybackPeriod (Decimal, Years)",
        "NPV (Decimal, INR)",
        "IRR (Decimal, %)",
        "ROI (Decimal, %)"
      ],
      description: "High-level financial KPIs dimension for instant card visual bindings."
    },
    {
      name: "Environmental",
      type: "DIMENSION",
      pk: "MetricID",
      fk: "None",
      columns: [
        "Metric (String)",
        "Value (Decimal)",
        "Unit (String)",
        "Category (String)"
      ],
      description: "Environmental metrics table recording net lifetime CO2 balance, replaced grid emissions, and lifecycle generated emissions."
    }
  ];

  const relationships = [
    { from: "Calendar[MonthNo]", to: "Monthly_Performance[MonthNo]", cardinality: "1 : Many (1:*)", crossFilter: "Single (Calendar filters Monthly_Performance)", key: "MonthNo" },
    { from: "Calendar[Year]", to: "Financial_25_Year[Year]", cardinality: "1 : Many (1:*)", crossFilter: "Single (Calendar filters Financial_25_Year)", key: "Year" },
    { from: "Project_Summary[ProjectID]", to: "Monthly_Performance[ProjectID]", cardinality: "1 : Many (1:*)", crossFilter: "Single", key: "ProjectID" },
    { from: "BOQ[CategoryCode]", to: "PV_Components[Category]", cardinality: "Many : 1 (*:1)", crossFilter: "Both", key: "CategoryCode" }
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* Title Header */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-md">
        <div className="flex items-center space-x-2 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-1">
          <GitBranch className="w-4 h-4" />
          <span>Part 3 • Power BI Star-Schema Data Model</span>
        </div>
        <h2 className="text-2xl font-black text-white tracking-tight">Power BI Data Model Architecture</h2>
        <p className="text-xs text-slate-400 mt-1">
          Optimized Star Schema • 3 Fact Tables • 5 Dimension Tables • 1 Calendar Time Intelligence Dimension
        </p>
      </div>

      {/* Diagram Overview Box */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center space-x-2">
          <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <span>Star-Schema Model Diagram Architecture</span>
        </h3>
        <p className="text-xs text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
          The Power BI data model centers around the <span className="font-semibold text-slate-900 dark:text-slate-100">Calendar</span> dimension and <span className="font-semibold text-slate-900 dark:text-slate-100">Project_Summary</span> parameter table, connected via 1-to-many relationships to the core fact tables: <span className="font-semibold text-blue-700 dark:text-blue-400">Monthly_Performance</span>, <span className="font-semibold text-blue-700 dark:text-blue-400">BOQ</span>, and <span className="font-semibold text-blue-700 dark:text-blue-400">Financial_25_Year</span>.
        </p>

        {/* Visual Relationships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {relationships.map((rel, idx) => (
            <div key={idx} className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-xs">
              <div className="flex items-center justify-between text-[11px] font-bold text-blue-800 dark:text-blue-300 mb-1">
                <span>Rel #{idx + 1}</span>
                <span className="bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300 px-1.5 py-0.5 rounded text-[10px]">{rel.cardinality}</span>
              </div>
              <div className="font-mono text-slate-800 dark:text-slate-200 font-semibold truncate">{rel.from}</div>
              <div className="text-center text-slate-400 dark:text-slate-500 my-1">↓</div>
              <div className="font-mono text-slate-800 dark:text-slate-200 font-semibold truncate">{rel.to}</div>
              <div className="mt-2 text-[10px] text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-1">
                Filter: <span className="font-medium text-slate-700 dark:text-slate-300">{rel.crossFilter}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tables Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tables.map((t, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono ${
                  t.type === 'FACT' ? 'bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300' : 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300'
                }`}>
                  {t.type} TABLE
                </span>
                <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">PK: {t.pk}</span>
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">{t.name}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">{t.description}</p>

              <div className="bg-slate-50 dark:bg-slate-800/80 rounded-xl p-3 border border-slate-200/80 dark:border-slate-700/80 mb-3">
                <div className="text-[11px] font-semibold text-slate-600 dark:text-slate-300 mb-2 flex items-center space-x-1">
                  <Key className="w-3 h-3 text-amber-500" />
                  <span>Columns & Data Types:</span>
                </div>
                <ul className="space-y-1 text-[11px] font-mono text-slate-700 dark:text-slate-300 max-h-40 overflow-y-auto pr-1">
                  {t.columns.map((col, cIdx) => (
                    <li key={cIdx} className="truncate hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      • {col}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span>Source: Clean Extracted Dataset</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
