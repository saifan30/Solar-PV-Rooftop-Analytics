import { DaxMeasure } from '../types';

export const DAX_MEASURES: DaxMeasure[] = [
  // --- ENERGY MEASURES ---
  {
    id: "e1",
    name: "Total Energy Production",
    category: "Energy",
    code: `Total Energy Production = \nSUM(Monthly_Performance[PVArrayEnergy])`,
    explanation: "Calculates total solar energy produced by the PV array across selected months in kWh.",
    sourceColumns: ["Monthly_Performance[PVArrayEnergy]"]
  },
  {
    id: "e2",
    name: "Total User Energy",
    category: "Energy",
    code: `Total User Energy = \nSUM(Monthly_Performance[UserEnergy])`,
    explanation: "Calculates total energy consumed by the household load in kWh.",
    sourceColumns: ["Monthly_Performance[UserEnergy]"]
  },
  {
    id: "e3",
    name: "Total Solar Energy",
    category: "Energy",
    code: `Total Solar Energy = \nSUM(Monthly_Performance[SolarEnergy])`,
    explanation: "Calculates solar energy directly consumed by user load (self-consumption) in kWh.",
    sourceColumns: ["Monthly_Performance[SolarEnergy]"]
  },
  {
    id: "e4",
    name: "Total Grid Energy",
    category: "Energy",
    code: `Total Grid Energy = \nSUM(Monthly_Performance[GridEnergy])`,
    explanation: "Calculates surplus solar energy injected into the utility grid in kWh.",
    sourceColumns: ["Monthly_Performance[GridEnergy]"]
  },
  {
    id: "e5",
    name: "Average Monthly Production",
    category: "Energy",
    code: `Average Monthly Production = \nAVERAGE(Monthly_Performance[PVArrayEnergy])`,
    explanation: "Computes average monthly energy generation across selected periods.",
    sourceColumns: ["Monthly_Performance[PVArrayEnergy]"]
  },
  {
    id: "e6",
    name: "Specific Production",
    category: "Energy",
    code: `Specific Production = \nDIVIDE(\n    [Total Energy Production],\n    MAX(Project_Summary[InstalledCapacityDC]),\n    0\n)`,
    explanation: "Measures energy yield per installed kWp capacity (kWh/kWp/year). Source Value = 1575.",
    sourceColumns: ["Monthly_Performance[PVArrayEnergy]", "Project_Summary[InstalledCapacityDC]"]
  },
  {
    id: "e7",
    name: "Performance Ratio",
    category: "Energy",
    code: `Performance Ratio = \nDIVIDE(\n    [Total Energy Production],\n    SUM(Monthly_Performance[GlobalIncidentIrradiation]) * 0.026 * 5.5,\n    0\n) * 100`,
    explanation: "Overall quality ratio of the PV plant taking shading, thermal and wiring losses into account (81.27%).",
    sourceColumns: ["Monthly_Performance[PVArrayEnergy]", "Monthly_Performance[GlobalIncidentIrradiation]"]
  },
  {
    id: "e8",
    name: "Solar Fraction",
    category: "Energy",
    code: `Solar Fraction = \nDIVIDE(\n    [Total Solar Energy],\n    [Total User Energy],\n    0\n) * 100`,
    explanation: "Percentage of total consumer load powered directly by solar energy (63.46%).",
    sourceColumns: ["Monthly_Performance[SolarEnergy]", "Monthly_Performance[UserEnergy]"]
  },
  {
    id: "e9",
    name: "Grid Dependency",
    category: "Energy",
    code: `Grid Dependency = \nDIVIDE(\n    SUM(Monthly_Performance[EnergyFromGrid]),\n    [Total User Energy],\n    0\n) * 100`,
    explanation: "Percentage of load energy reliant on utility grid backup (36.54%).",
    sourceColumns: ["Monthly_Performance[EnergyFromGrid]", "Monthly_Performance[UserEnergy]"]
  },

  // --- COST MEASURES ---
  {
    id: "c1",
    name: "Total BOQ Cost",
    category: "Cost",
    code: `Total BOQ Cost = \nSUM(BOQ[TotalCost])`,
    explanation: "Calculates total capital expenditure across all BOQ line items (₹2,75,000).",
    sourceColumns: ["BOQ[TotalCost]"]
  },
  {
    id: "c2",
    name: "Installation Cost",
    category: "Cost",
    code: `Installation Cost = \nCALCULATE(\n    SUM(BOQ[TotalCost]),\n    BOQ[Category] = "Engineering & Installation"\n)`,
    explanation: "Extracts installation, logistics and grid connection costs (₹35,000).",
    sourceColumns: ["BOQ[TotalCost]", "BOQ[Category]"]
  },
  {
    id: "c3",
    name: "Cost per Wp",
    category: "Cost",
    code: `Cost per Wp = \nDIVIDE(\n    [Total BOQ Cost],\n    MAX(Project_Summary[InstalledCapacityDC]) * 1000,\n    0\n)`,
    explanation: "Calculates turnkey capital cost per peak watt installed (₹50.0/Wp).",
    sourceColumns: ["BOQ[TotalCost]", "Project_Summary[InstalledCapacityDC]"]
  },
  {
    id: "c4",
    name: "Annual O&M Cost",
    category: "Cost",
    code: `Annual O&M Cost = \nMAX(Financial_Summary[AnnualOMCost])`,
    explanation: "Year 1 operation and maintenance expense including 5% inflation factor (₹27,681.72).",
    sourceColumns: ["Financial_Summary[AnnualOMCost]"]
  },
  {
    id: "c5",
    name: "Total O&M Cost",
    category: "Cost",
    code: `Total O&M Cost = \nSUM(Financial_25_Year[RunCosts])`,
    explanation: "Aggregates total cumulative running costs over the 25-year simulation lifetime (₹6,92,043).",
    sourceColumns: ["Financial_25_Year[RunCosts]"]
  },

  // --- FINANCIAL MEASURES ---
  {
    id: "f1",
    name: "Own Investment",
    category: "Financial",
    code: `Own Investment = \nMAX(Financial_Summary[OwnFunds])`,
    explanation: "Net initial equity invested by owner excluding government subsidies (₹2,00,000).",
    sourceColumns: ["Financial_Summary[OwnFunds]"]
  },
  {
    id: "f2",
    name: "Subsidy Amount",
    category: "Financial",
    code: `Subsidy Amount = \nMAX(Financial_Summary[Subsidy])`,
    explanation: "Capital subsidy provided for rooftop solar installation (₹75,000).",
    sourceColumns: ["Financial_Summary[Subsidy]"]
  },
  {
    id: "f3",
    name: "LCOE",
    category: "Financial",
    code: `LCOE = \nMAX(Financial_Summary[LCOE])`,
    explanation: "Levelized Cost of Energy produced by system over 25 years (₹4.80/kWh).",
    sourceColumns: ["Financial_Summary[LCOE]"]
  },
  {
    id: "f4",
    name: "Payback Period",
    category: "Financial",
    code: `Payback Period = \nMAX(Financial_Summary[PaybackPeriod])`,
    explanation: "Equity payback duration in years based on self-consumption savings & grid feed-in revenue (6.5 years).",
    sourceColumns: ["Financial_Summary[PaybackPeriod]"]
  },
  {
    id: "f5",
    name: "NPV",
    category: "Financial",
    code: `NPV = \nMAX(Financial_Summary[NPV])`,
    explanation: "Net Present Value at 8.0% discount rate over 25-year lifetime (₹2,66,412.68).",
    sourceColumns: ["Financial_Summary[NPV]"]
  },
  {
    id: "f6",
    name: "IRR",
    category: "Financial",
    code: `IRR = \nMAX(Financial_Summary[IRR])`,
    explanation: "Internal Rate of Return of the system (20.71%).",
    sourceColumns: ["Financial_Summary[IRR]"]
  },
  {
    id: "f7",
    name: "ROI",
    category: "Financial",
    code: `ROI = \nMAX(Financial_Summary[ROI])`,
    explanation: "Return on Investment over 25 years (133.20%).",
    sourceColumns: ["Financial_Summary[ROI]"]
  },
  {
    id: "f8",
    name: "Yearly Net Profit",
    category: "Financial",
    code: `Yearly Net Profit = \nSUM(Financial_25_Year[SelfConsumptionSaving]) + SUM(Financial_25_Year[ElectricitySale]) - SUM(Financial_25_Year[RunCosts])`,
    explanation: "Net cash flow generated in selected operating years.",
    sourceColumns: ["Financial_25_Year[SelfConsumptionSaving]", "Financial_25_Year[ElectricitySale]", "Financial_25_Year[RunCosts]"]
  },
  {
    id: "f9",
    name: "Cumulative Profit",
    category: "Financial",
    code: `Cumulative Profit = \nMAX(Financial_25_Year[CumulativeProfit])`,
    explanation: "Cumulative profit after full equity payback across selected year.",
    sourceColumns: ["Financial_25_Year[CumulativeProfit]"]
  },

  // --- ENVIRONMENTAL MEASURES ---
  {
    id: "v1",
    name: "Lifetime CO2 Saved",
    category: "Environmental",
    code: `Lifetime CO2 Saved = \nMAX(Environmental[Value])`,
    explanation: "Net lifetime CO2 emissions avoided by replacing grid electricity (202.1 tCO2).",
    sourceColumns: ["Environmental[Value]"]
  },
  {
    id: "v2",
    name: "Replaced Emissions",
    category: "Environmental",
    code: `Replaced Emissions = \nCALCULATE(MAX(Environmental[Value]), Environmental[Metric] = "Replaced Emissions")`,
    explanation: "Gross grid CO2 offset based on 936 gCO2/kWh factor in India (245.2 tCO2).",
    sourceColumns: ["Environmental[Value]", "Environmental[Metric]"]
  }
];
