import React from 'react';
import { BookOpen, CheckCircle2, FileCheck, Layers, Terminal, ArrowRight } from 'lucide-react';

export const ImplementationGuide: React.FC = () => {
  const steps = [
    {
      num: 1,
      title: "Import the Final Clean Datasets",
      details: "In Power BI Desktop, click 'Get Data' → 'Text/CSV'. Select all 8 exported CSV files: Project_Summary.csv, BOQ.csv, PV_Components.csv, Monthly_Performance.csv, System_Losses.csv, Financial_Summary.csv, Financial_25_Year.csv, and Environmental.csv."
    },
    {
      num: 2,
      title: "Clean & Transform Data in Power Query",
      details: "In Power Query Editor, verify data types: ensure Year, MonthNo, Quantity, UnitCost, TotalCost, PVArrayEnergy, UserEnergy, SolarEnergy, GridEnergy are numeric (Whole Number or Decimal Number)."
    },
    {
      num: 3,
      title: "Create DAX Calendar Dimension Table",
      details: "In Data View, click 'New Table' and enter: Calendar = CALENDAR(DATE(2026,1,1), DATE(2051,12,31)). Add calculated columns: MonthNo = MONTH([Date]), MonthName = FORMAT([Date], \"mmm\"), Year = YEAR([Date])."
    },
    {
      num: 4,
      title: "Establish Data Model Relationships",
      details: "In Model View, connect: 1) Calendar[MonthNo] → Monthly_Performance[MonthNo] (1:*), 2) Calendar[Year] → Financial_25_Year[Year] (1:*), 3) BOQ[CategoryCode] → PV_Components[Category] (*:1)."
    },
    {
      num: 5,
      title: "Create Measure Table & Load DAX Formulas",
      details: "Click 'Enter Data' to create an empty table named '_Measures'. Add all 20+ DAX measures provided in the DAX Studio tab (e.g., [Total Energy Production], [Performance Ratio], [Payback Period], [NPV], [LCOE])."
    },
    {
      num: 6,
      title: "Build Dashboard 1: Technical & Performance",
      details: "Create page 'Technical Performance'. Add 10 KPI Cards at top. Add Visual 1 (Composed Chart for Monthly PV vs Demand), Visual 2 (Donut Chart for Solar vs Grid), Visual 3 (GEff vs Yield), Visual 4 (User Energy Stacked Bar), Visual 8 (System Losses Bar Chart)."
    },
    {
      num: 7,
      title: "Build Dashboard 2: Cost & Financial Analysis",
      details: "Create page 'Cost & Financial Analysis'. Add 12 KPI Cards. Add Visual 1 (BOQ Cost by Category Donut), Visual 2 (Line Items Ranking), Visual 8 (Financing Mix), Visual 10 (Yearly Net Profit Stacked), Visual 11 (Cumulative Breakeven Curve)."
    },
    {
      num: 8,
      title: "Add Interactive Slicers & Page Navigation",
      details: "Add Month slicer (Dropdown) and BOQ Category slicer. Configure Sync Slicers across both pages. Add page navigation buttons at top ('Technical Overview' ↔ 'Financial Analysis')."
    },
    {
      num: 9,
      title: "Import Custom Theme & Format Visuals",
      details: "Go to View → Themes → 'Browse for themes'. Select 'Solar_PV_Theme.json'. Ensure visual background is white, page background is #F8FAFC, and card borders are 8px rounded."
    },
    {
      num: 10,
      title: "Validate Key Metrics against Audit Table",
      details: "Verify that Total Capacity = 5.50 kWp, Annual Yield = 8,663.77 kWh, PR = 81.27%, Total Capex = ₹2,75,000, LCOE = ₹4.80/kWh, Payback = 6.5 years, NPV = ₹2,66,412.68."
    },
    {
      num: 11,
      title: "Save Final Report File",
      details: "Save file as 'Solar_PV_Analytics.pbix'. All visuals, tables, measures, and datasets remain 100% editable in Power BI Desktop!"
    }
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* Title Header */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-md">
        <div className="flex items-center space-x-2 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-1">
          <BookOpen className="w-4 h-4" />
          <span>Part 9 • Power BI Desktop Implementation Guide</span>
        </div>
        <h2 className="text-2xl font-black text-white tracking-tight">Step-by-Step PBIX Creation Protocol</h2>
        <p className="text-xs text-slate-400 mt-1">
          Complete sequence to construct the editable Solar_PV_Analytics.pbix file in Power BI Desktop
        </p>
      </div>

      {/* Steps List */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4">
        {steps.map((step) => (
          <div key={step.num} className="flex items-start space-x-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500 transition-colors">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-black text-sm flex items-center justify-center shrink-0">
              {step.num}
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">{step.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{step.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
