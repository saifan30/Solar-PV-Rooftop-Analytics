import { MonthlyPerformance, BOQItem, ComponentSpec, SystemLoss, Financial25Year, ValidationItem } from '../types';

export const PROJECT_SUMMARY = {
  projectName: "Mini Project - Residential Rooftop Solar PV",
  location: "ABC Residential Building, India (Lat 18.60 °N, Long 73.80 °E, Altitude 560 m)",
  systemType: "Grid-Connected, Fixed Tilt",
  installedCapacityDC: 5.50, // kWp
  installedCapacityAC: 5.00, // kWac
  numModules: 10,
  numInverters: 1,
  moduleManufacturer: "Longi Solar",
  moduleModel: "LR5-72HPH-550M G2 (550 Wp Mono PERC)",
  inverterManufacturer: "Sungrow",
  inverterModel: "SG5.0RS (5.00 kWac)",
  tiltAzimuth: "18° / 0° (South)",
  weatherDataSource: "Meteonorm 8.1 (1996-2015), Sat=100% - Synthetic",
  simulationDate: "02/08/26 20:38",
  projectLifetime: 25, // Years
  totalInstallationCost: 275000, // INR
  costPerWp: 50.0, // INR/Wp
  ownFunds: 200000, // INR
  subsidy: 75000, // INR
  lcoe: 4.80, // INR/kWh
  paybackPeriod: 6.5, // Years
  npv: 266412.68, // INR
  irr: 20.71, // %
  roi: 133.20, // %
  annualProduction: 8663.77, // kWh/year
  usedEnergy: 7900.06, // kWh/year
  specificProduction: 1575, // kWh/kWp/year
  performanceRatio: 81.27, // %
  solarFraction: 63.46, // %
  p50Production: 8664, // kWh/year
  p90Production: 8463, // kWh/year
  p95Production: 8407, // kWh/year
  lifetimeCO2Saved: 202.1, // tCO2 net
  replacedCO2: 245.2, // tCO2
  generatedCO2: 10.66, // tCO2
  feedInTariff: 3.00, // INR/kWh
  selfConsumptionTariff: 8.50, // INR/kWh
};

export const MONTHLY_PERFORMANCE: MonthlyPerformance[] = [
  { Month: "Jan", MonthNo: 1, GlobalHorizontalIrradiation: 152.5, DiffuseIrradiation: 40.38, AmbientTemperature: 20.01, GlobalIncidentIrradiation: 187.1, GlobalEffectiveIrradiation: 174.9, PVArrayEnergy: 865.8, UserEnergy: 671.0, SolarEnergy: 466.1, GridEnergy: 373.3, EnergyFromGrid: 204.9 },
  { Month: "Feb", MonthNo: 2, GlobalHorizontalIrradiation: 163.3, DiffuseIrradiation: 42.48, AmbientTemperature: 22.74, GlobalIncidentIrradiation: 188.9, GlobalEffectiveIrradiation: 179.1, PVArrayEnergy: 874.0, UserEnergy: 606.0, SolarEnergy: 441.1, GridEnergy: 404.0, EnergyFromGrid: 165.0 },
  { Month: "Mar", MonthNo: 3, GlobalHorizontalIrradiation: 200.6, DiffuseIrradiation: 59.26, AmbientTemperature: 26.53, GlobalIncidentIrradiation: 215.6, GlobalEffectiveIrradiation: 204.5, PVArrayEnergy: 985.3, UserEnergy: 671.0, SolarEnergy: 500.6, GridEnergy: 456.8, EnergyFromGrid: 170.4 },
  { Month: "Apr", MonthNo: 4, GlobalHorizontalIrradiation: 203.7, DiffuseIrradiation: 71.93, AmbientTemperature: 29.37, GlobalIncidentIrradiation: 203.3, GlobalEffectiveIrradiation: 194.1, PVArrayEnergy: 929.7, UserEnergy: 649.3, SolarEnergy: 479.4, GridEnergy: 423.4, EnergyFromGrid: 169.9 },
  { Month: "May", MonthNo: 5, GlobalHorizontalIrradiation: 206.8, DiffuseIrradiation: 79.90, AmbientTemperature: 29.90, GlobalIncidentIrradiation: 194.9, GlobalEffectiveIrradiation: 185.6, PVArrayEnergy: 894.8, UserEnergy: 671.0, SolarEnergy: 479.3, GridEnergy: 389.2, EnergyFromGrid: 191.6 },
  { Month: "Jun", MonthNo: 6, GlobalHorizontalIrradiation: 124.8, DiffuseIrradiation: 80.29, AmbientTemperature: 26.43, GlobalIncidentIrradiation: 116.3, GlobalEffectiveIrradiation: 109.2, PVArrayEnergy: 541.5, UserEnergy: 649.3, SolarEnergy: 357.9, GridEnergy: 164.8, EnergyFromGrid: 291.5 },
  { Month: "Jul", MonthNo: 7, GlobalHorizontalIrradiation: 88.6, DiffuseIrradiation: 62.25, AmbientTemperature: 25.07, GlobalIncidentIrradiation: 83.2, GlobalEffectiveIrradiation: 77.7, PVArrayEnergy: 386.2, UserEnergy: 671.0, SolarEnergy: 261.3, GridEnergy: 96.6, EnergyFromGrid: 409.6 },
  { Month: "Aug", MonthNo: 8, GlobalHorizontalIrradiation: 113.3, DiffuseIrradiation: 76.62, AmbientTemperature: 24.18, GlobalIncidentIrradiation: 109.8, GlobalEffectiveIrradiation: 103.1, PVArrayEnergy: 516.2, UserEnergy: 671.0, SolarEnergy: 337.7, GridEnergy: 159.8, EnergyFromGrid: 333.3 },
  { Month: "Sep", MonthNo: 9, GlobalHorizontalIrradiation: 134.6, DiffuseIrradiation: 76.87, AmbientTemperature: 24.47, GlobalIncidentIrradiation: 137.1, GlobalEffectiveIrradiation: 129.2, PVArrayEnergy: 642.9, UserEnergy: 649.3, SolarEnergy: 390.9, GridEnergy: 225.6, EnergyFromGrid: 258.4 },
  { Month: "Oct", MonthNo: 10, GlobalHorizontalIrradiation: 143.8, DiffuseIrradiation: 76.44, AmbientTemperature: 25.05, GlobalIncidentIrradiation: 156.7, GlobalEffectiveIrradiation: 147.2, PVArrayEnergy: 726.8, UserEnergy: 671.0, SolarEnergy: 430.3, GridEnergy: 274.8, EnergyFromGrid: 240.7 },
  { Month: "Nov", MonthNo: 11, GlobalHorizontalIrradiation: 144.7, DiffuseIrradiation: 53.08, AmbientTemperature: 22.35, GlobalIncidentIrradiation: 172.2, GlobalEffectiveIrradiation: 160.4, PVArrayEnergy: 794.4, UserEnergy: 649.3, SolarEnergy: 418.5, GridEnergy: 351.7, EnergyFromGrid: 230.8 },
  { Month: "Dec", MonthNo: 12, GlobalHorizontalIrradiation: 140.3, DiffuseIrradiation: 47.49, AmbientTemperature: 20.24, GlobalIncidentIrradiation: 173.3, GlobalEffectiveIrradiation: 161.9, PVArrayEnergy: 806.1, UserEnergy: 671.0, SolarEnergy: 450.1, GridEnergy: 330.8, EnergyFromGrid: 220.8 }
];

export const BOQ_ITEMS: BOQItem[] = [
  { SNo: 1, CategoryCode: "A", Category: "PV Modules & Mounting", ItemDescription: "PV Module", Specification: "Longi Solar LR5-72HPH-550M G2, 550 Wp Mono PERC", Quantity: 10, Unit: "Nos", UnitCost: 8000, TotalCost: 80000, Source: "BOQ Excel Sheet / PVsyst Cost Table" },
  { SNo: 2, CategoryCode: "A", Category: "PV Modules & Mounting", ItemDescription: "Module Mounting Support", Specification: "MS support per module - RCC roof structure", Quantity: 10, Unit: "Nos", UnitCost: 6000, TotalCost: 60000, Source: "BOQ Excel Sheet / PVsyst Cost Table" },
  { SNo: 3, CategoryCode: "B", Category: "Inverter & Power Conditioning", ItemDescription: "String Inverter", Specification: "Sungrow SG5.0RS, 5.00 kWac, 40-560V DC input, DC:AC 1.10", Quantity: 1, Unit: "Nos", UnitCost: 45000, TotalCost: 45000, Source: "BOQ Excel Sheet / PVsyst Cost Table" },
  { SNo: 4, CategoryCode: "C", Category: "Cabling, Protection & Monitoring", ItemDescription: "DC/AC Wiring", Specification: "Solar DC cable + AC wiring runs", Quantity: 20, Unit: "Lot", UnitCost: 500, TotalCost: 10000, Source: "BOQ Excel Sheet / PVsyst Cost Table" },
  { SNo: 5, CategoryCode: "C", Category: "Cabling, Protection & Monitoring", ItemDescription: "Combiner Box", Specification: "DC combiner box with fuses/isolators", Quantity: 1, Unit: "Nos", UnitCost: 5000, TotalCost: 5000, Source: "BOQ Excel Sheet / PVsyst Cost Table" },
  { SNo: 6, CategoryCode: "C", Category: "Cabling, Protection & Monitoring", ItemDescription: "Monitoring System", Specification: "Display screen + monitoring unit", Quantity: 2, Unit: "Nos", UnitCost: 5000, TotalCost: 10000, Source: "BOQ Excel Sheet / PVsyst Cost Table" },
  { SNo: 7, CategoryCode: "C", Category: "Cabling, Protection & Monitoring", ItemDescription: "Measurement System", Specification: "Pyranometer + measurement kit", Quantity: 1, Unit: "Nos", UnitCost: 10000, TotalCost: 10000, Source: "BOQ Excel Sheet / PVsyst Cost Table" },
  { SNo: 8, CategoryCode: "C", Category: "Cabling, Protection & Monitoring", ItemDescription: "Surge Arrester", Specification: "AC/DC surge protection device", Quantity: 1, Unit: "Nos", UnitCost: 10000, TotalCost: 10000, Source: "BOQ Excel Sheet / PVsyst Cost Table" },
  { SNo: 9, CategoryCode: "D", Category: "Engineering & Installation", ItemDescription: "Engineering & Design", Specification: "System design, studies and analysis", Quantity: 1, Unit: "Lot", UnitCost: 10000, TotalCost: 10000, Source: "BOQ Excel Sheet / PVsyst Cost Table" },
  { SNo: 10, CategoryCode: "D", Category: "Engineering & Installation", ItemDescription: "Installation - Modules", Specification: "Global installation cost per module", Quantity: 10, Unit: "Nos", UnitCost: 1000, TotalCost: 10000, Source: "BOQ Excel Sheet / PVsyst Cost Table" },
  { SNo: 11, CategoryCode: "D", Category: "Engineering & Installation", ItemDescription: "Installation - Inverter", Specification: "Global installation cost per inverter", Quantity: 1, Unit: "Nos", UnitCost: 5000, TotalCost: 5000, Source: "BOQ Excel Sheet / PVsyst Cost Table" },
  { SNo: 12, CategoryCode: "D", Category: "Engineering & Installation", ItemDescription: "Transport", Specification: "Logistics for modules/equipment", Quantity: 10, Unit: "Trip", UnitCost: 300, TotalCost: 3000, Source: "BOQ Excel Sheet / PVsyst Cost Table" },
  { SNo: 13, CategoryCode: "D", Category: "Engineering & Installation", ItemDescription: "System Settings & Testing", Specification: "Commissioning and settings", Quantity: 1, Unit: "Lot", UnitCost: 1500, TotalCost: 1500, Source: "BOQ Excel Sheet / PVsyst Cost Table" },
  { SNo: 14, CategoryCode: "D", Category: "Engineering & Installation", ItemDescription: "Grid Connection Charges", Specification: "Utility grid interconnection", Quantity: 1, Unit: "Lot", UnitCost: 5500, TotalCost: 5500, Source: "BOQ Excel Sheet / PVsyst Cost Table" },
  { SNo: 15, CategoryCode: "E", Category: "Insurance & Statutory", ItemDescription: "Liability Insurance", Specification: "Project liability cover", Quantity: 1, Unit: "Lot", UnitCost: 5000, TotalCost: 5000, Source: "BOQ Excel Sheet / PVsyst Cost Table" },
  { SNo: 16, CategoryCode: "E", Category: "Insurance & Statutory", ItemDescription: "Other Taxes", Specification: "GST / statutory charges", Quantity: 1, Unit: "Lot", UnitCost: 5000, TotalCost: 5000, Source: "BOQ Excel Sheet / PVsyst Cost Table" }
];

export const PV_COMPONENTS: ComponentSpec[] = [
  { Component: "PV Module", Category: "Solar Array", Manufacturer: "Longi Solar", Model: "LR5-72HPH-550M G2", Quantity: 10, UnitPower: "550 Wp", TotalPower: "5.50 kWp", Specification: "Mono PERC, 1 string x 10 in series, Area: 25.8 m², Cell area: 24 m²" },
  { Component: "String Inverter", Category: "Power Conversion", Manufacturer: "Sungrow", Model: "SG5.0RS", Quantity: 1, UnitPower: "5.00 kWac", TotalPower: "5.00 kWac", Specification: "On-grid inverter, 40-560V DC voltage range, DC:AC ratio 1.10" },
  { Component: "Mounting Structure", Category: "Super-structure", Manufacturer: "Local Structural Steel", Model: "RCC Roof Frame 18° Tilt", Quantity: 10, UnitPower: "-", TotalPower: "5.50 kWp support", Specification: "Base plates 200x200x6, HDGI & Galvalume steel C-sections & purlins" },
  { Component: "BOS Cabling & Protection", Category: "Balance of System", Manufacturer: "Standard Solar Grade", Model: "Solar DC + AC Cable Set", Quantity: 1, UnitPower: "-", TotalPower: "20 m run", Specification: "Combiner box, surge arresters, pyranometer measurement unit & display screen" }
];

export const SYSTEM_LOSSES: SystemLoss[] = [
  { Category: "Shading & IAM", Description: "Near Shadings (irradiance loss)", Percentage: -2.33, EnergyValueKWh: -234.5 },
  { Category: "Shading & IAM", Description: "IAM factor on global (angle of incidence)", Percentage: -1.53, EnergyValueKWh: -153.9 },
  { Category: "Environmental", Description: "Soiling loss factor (dust & dirt)", Percentage: -2.00, EnergyValueKWh: -201.2 },
  { Category: "Module & Temperature", Description: "PV loss due to irradiance level", Percentage: -0.90, EnergyValueKWh: -90.5 },
  { Category: "Module & Temperature", Description: "PV loss due to temperature (at 50°C operating)", Percentage: -7.15, EnergyValueKWh: -719.5 },
  { Category: "Module & Quality", Description: "Module quality gain / tolerance", Percentage: +0.50, EnergyValueKWh: +50.3 },
  { Category: "Module & Quality", Description: "Light Induced Degradation (LID)", Percentage: -1.50, EnergyValueKWh: -150.9 },
  { Category: "Module & Quality", Description: "Mismatch loss (modules and strings)", Percentage: -1.15, EnergyValueKWh: -115.7 },
  { Category: "Electrical BOS", Description: "Ohmic wiring loss (DC cabling)", Percentage: -1.07, EnergyValueKWh: -107.6 },
  { Category: "Inverter Efficiency", Description: "Inverter Loss during operation (efficiency)", Percentage: -2.31, EnergyValueKWh: -207.0 },
  { Category: "Inverter Efficiency", Description: "Inverter Loss due to power threshold", Percentage: -0.04, EnergyValueKWh: -3.5 },
  { Category: "Auxiliary & Night", Description: "Night consumption", Percentage: -0.77, EnergyValueKWh: -69.0 },
  { Category: "System Downtime", Description: "System Unavailability (1.8 days/yr)", Percentage: -0.24, EnergyValueKWh: -21.2 }
];

export const FINANCIAL_25_YEAR: Financial25Year[] = [
  { Year: 0, ElectricitySale: 0, OwnFunds: 200000, RunCosts: 0, Depreciation: 0, TaxableIncome: 0, Taxes: 0, AfterTaxProfit: 0, SelfConsumptionSaving: 0, CumulativeProfit: -200000, AmortizationPercentage: 0.0 },
  { Year: 1, ElectricitySale: 11154, OwnFunds: 0, RunCosts: 14500, Depreciation: 9250, TaxableIncome: 0, Taxes: 0, AfterTaxProfit: -3346, SelfConsumptionSaving: 42612, CumulativeProfit: -163643, AmortizationPercentage: 18.2 },
  { Year: 2, ElectricitySale: 11154, OwnFunds: 0, RunCosts: 15225, Depreciation: 9250, TaxableIncome: 0, Taxes: 0, AfterTaxProfit: -4071, SelfConsumptionSaving: 43890, CumulativeProfit: -129504, AmortizationPercentage: 35.2 },
  { Year: 3, ElectricitySale: 11154, OwnFunds: 0, RunCosts: 15986, Depreciation: 9250, TaxableIncome: 0, Taxes: 0, AfterTaxProfit: -4832, SelfConsumptionSaving: 45207, CumulativeProfit: -97453, AmortizationPercentage: 51.3 },
  { Year: 4, ElectricitySale: 11154, OwnFunds: 0, RunCosts: 16786, Depreciation: 9250, TaxableIncome: 0, Taxes: 0, AfterTaxProfit: -5631, SelfConsumptionSaving: 46563, CumulativeProfit: -67367, AmortizationPercentage: 66.3 },
  { Year: 5, ElectricitySale: 11154, OwnFunds: 0, RunCosts: 17625, Depreciation: 9250, TaxableIncome: 0, Taxes: 0, AfterTaxProfit: -6471, SelfConsumptionSaving: 47960, CumulativeProfit: -39130, AmortizationPercentage: 80.4 },
  { Year: 6, ElectricitySale: 11154, OwnFunds: 0, RunCosts: 18506, Depreciation: 9250, TaxableIncome: 0, Taxes: 0, AfterTaxProfit: -7352, SelfConsumptionSaving: 49399, CumulativeProfit: -12633, AmortizationPercentage: 93.7 },
  { Year: 7, ElectricitySale: 11154, OwnFunds: 0, RunCosts: 19431, Depreciation: 9250, TaxableIncome: 0, Taxes: 0, AfterTaxProfit: -8277, SelfConsumptionSaving: 50881, CumulativeProfit: 12226, AmortizationPercentage: 106.1 },
  { Year: 8, ElectricitySale: 11154, OwnFunds: 0, RunCosts: 20403, Depreciation: 9250, TaxableIncome: 0, Taxes: 0, AfterTaxProfit: -9249, SelfConsumptionSaving: 52407, CumulativeProfit: 35543, AmortizationPercentage: 117.8 },
  { Year: 9, ElectricitySale: 11154, OwnFunds: 0, RunCosts: 21423, Depreciation: 9250, TaxableIncome: 0, Taxes: 0, AfterTaxProfit: -10269, SelfConsumptionSaving: 53980, CumulativeProfit: 57409, AmortizationPercentage: 128.7 },
  { Year: 10, ElectricitySale: 11154, OwnFunds: 0, RunCosts: 22494, Depreciation: 9250, TaxableIncome: 0, Taxes: 0, AfterTaxProfit: -11340, SelfConsumptionSaving: 55599, CumulativeProfit: 77910, AmortizationPercentage: 139.0 },
  { Year: 11, ElectricitySale: 11154, OwnFunds: 0, RunCosts: 23619, Depreciation: 9250, TaxableIncome: 0, Taxes: 0, AfterTaxProfit: -12465, SelfConsumptionSaving: 57267, CumulativeProfit: 97124, AmortizationPercentage: 148.6 },
  { Year: 12, ElectricitySale: 11154, OwnFunds: 0, RunCosts: 24800, Depreciation: 9250, TaxableIncome: 0, Taxes: 0, AfterTaxProfit: -13646, SelfConsumptionSaving: 58985, CumulativeProfit: 115129, AmortizationPercentage: 157.6 },
  { Year: 13, ElectricitySale: 11154, OwnFunds: 0, RunCosts: 26040, Depreciation: 9250, TaxableIncome: 0, Taxes: 0, AfterTaxProfit: -14886, SelfConsumptionSaving: 60755, CumulativeProfit: 131995, AmortizationPercentage: 166.0 },
  { Year: 14, ElectricitySale: 11154, OwnFunds: 0, RunCosts: 27342, Depreciation: 9250, TaxableIncome: 0, Taxes: 0, AfterTaxProfit: -16188, SelfConsumptionSaving: 62577, CumulativeProfit: 147789, AmortizationPercentage: 173.9 },
  { Year: 15, ElectricitySale: 11154, OwnFunds: 0, RunCosts: 28709, Depreciation: 9250, TaxableIncome: 0, Taxes: 0, AfterTaxProfit: -17555, SelfConsumptionSaving: 64454, CumulativeProfit: 162574, AmortizationPercentage: 181.3 },
  { Year: 16, ElectricitySale: 11154, OwnFunds: 0, RunCosts: 30144, Depreciation: 9250, TaxableIncome: 0, Taxes: 0, AfterTaxProfit: -18990, SelfConsumptionSaving: 66388, CumulativeProfit: 176409, AmortizationPercentage: 188.2 },
  { Year: 17, ElectricitySale: 11154, OwnFunds: 0, RunCosts: 31652, Depreciation: 9250, TaxableIncome: 0, Taxes: 0, AfterTaxProfit: -20498, SelfConsumptionSaving: 68380, CumulativeProfit: 189350, AmortizationPercentage: 194.7 },
  { Year: 18, ElectricitySale: 11154, OwnFunds: 0, RunCosts: 33234, Depreciation: 9250, TaxableIncome: 0, Taxes: 0, AfterTaxProfit: -22080, SelfConsumptionSaving: 70431, CumulativeProfit: 201449, AmortizationPercentage: 200.7 },
  { Year: 19, ElectricitySale: 11154, OwnFunds: 0, RunCosts: 34896, Depreciation: 9250, TaxableIncome: 0, Taxes: 0, AfterTaxProfit: -23742, SelfConsumptionSaving: 72544, CumulativeProfit: 212757, AmortizationPercentage: 206.4 },
  { Year: 20, ElectricitySale: 11154, OwnFunds: 0, RunCosts: 36641, Depreciation: 9250, TaxableIncome: 0, Taxes: 0, AfterTaxProfit: -25487, SelfConsumptionSaving: 74720, CumulativeProfit: 223320, AmortizationPercentage: 211.7 },
  { Year: 21, ElectricitySale: 11154, OwnFunds: 0, RunCosts: 38473, Depreciation: 0, TaxableIncome: 0, Taxes: 0, AfterTaxProfit: -27319, SelfConsumptionSaving: 76962, CumulativeProfit: 233182, AmortizationPercentage: 216.6 },
  { Year: 22, ElectricitySale: 11154, OwnFunds: 0, RunCosts: 40396, Depreciation: 0, TaxableIncome: 0, Taxes: 0, AfterTaxProfit: -29242, SelfConsumptionSaving: 79271, CumulativeProfit: 242385, AmortizationPercentage: 221.2 },
  { Year: 23, ElectricitySale: 11154, OwnFunds: 0, RunCosts: 42416, Depreciation: 0, TaxableIncome: 0, Taxes: 0, AfterTaxProfit: -31262, SelfConsumptionSaving: 81649, CumulativeProfit: 250966, AmortizationPercentage: 225.5 },
  { Year: 24, ElectricitySale: 11154, OwnFunds: 0, RunCosts: 44537, Depreciation: 0, TaxableIncome: 0, Taxes: 0, AfterTaxProfit: -33383, SelfConsumptionSaving: 84098, CumulativeProfit: 258964, AmortizationPercentage: 229.5 },
  { Year: 25, ElectricitySale: 11154, OwnFunds: 0, RunCosts: 46764, Depreciation: 0, TaxableIncome: 0, Taxes: 0, AfterTaxProfit: -35610, SelfConsumptionSaving: 86621, CumulativeProfit: 266413, AmortizationPercentage: 233.2 }
];

export const VALIDATION_TABLE: ValidationItem[] = [
  { Metric: "Installed Capacity (DC)", Source: "PVsyst Report & BOQ Excel", SourceValue: "5.50 kWp", PbiValue: "5.50 kWp", Status: "MATCH", Note: "Exact match across PVsyst header and BOQ Page 1" },
  { Metric: "Installed Capacity (AC)", Source: "PVsyst Report Page 3", SourceValue: "5.00 kWac", PbiValue: "5.00 kWac", Status: "MATCH", Note: "Sungrow SG5.0RS inverter rating" },
  { Metric: "Number of PV Modules", Source: "PVsyst Report Page 2 & BOQ Page 3", SourceValue: "10 units", PbiValue: "10 units", Status: "MATCH", Note: "1 string x 10 modules in series" },
  { Metric: "Annual Energy Production", Source: "PVsyst Report Page 2 & 7", SourceValue: "8,663.77 kWh/yr", PbiValue: "8,663.77 kWh/yr", Status: "MATCH", Note: "Total system produced energy" },
  { Metric: "Used Energy (Self-Consumed)", Source: "PVsyst Report Page 2 & 7", SourceValue: "7,900.06 kWh/yr", PbiValue: "7,900.06 kWh/yr", Status: "MATCH", Note: "Energy consumed by daily household needs" },
  { Metric: "Specific Production", Source: "PVsyst Report Page 2 & 7", SourceValue: "1,575 kWh/kWp/yr", PbiValue: "1,575 kWh/kWp/yr", Status: "MATCH", Note: "8,663.77 / 5.50 = 1,575.2" },
  { Metric: "Performance Ratio (PR)", Source: "PVsyst Report Page 2 & 7", SourceValue: "81.27 %", PbiValue: "81.27 %", Status: "MATCH", Note: "System performance ratio" },
  { Metric: "Solar Fraction (SF)", Source: "PVsyst Report Page 2 & 7", SourceValue: "63.46 %", PbiValue: "63.46 %", Status: "MATCH", Note: "Percentage of load met by solar (5,013.1 / 7,900.1)" },
  { Metric: "Total Installation Cost", Source: "PVsyst Page 12 & BOQ Page 5", SourceValue: "INR 2,75,000.00", PbiValue: "INR 2,75,000.00", Status: "MATCH", Note: "Grand total BOQ = PVsyst cost" },
  { Metric: "Cost per Watt Peak", Source: "PVsyst Page 7 & BOQ Page 10", SourceValue: "INR 50.0 / Wp", PbiValue: "INR 50.0 / Wp", Status: "MATCH", Note: "2,75,000 / 5,500 Wp" },
  { Metric: "Own Funds / Investment", Source: "PVsyst Page 13 & BOQ Page 9", SourceValue: "INR 2,00,000.00", PbiValue: "INR 2,00,000.00", Status: "MATCH", Note: "Net equity invested by rooftop owner" },
  { Metric: "Government Subsidy", Source: "PVsyst Page 13 & BOQ Page 10", SourceValue: "INR 75,000.00", PbiValue: "INR 75,000.00", Status: "MATCH", Note: "Financial subsidy contribution" },
  { Metric: "Levelized Cost of Energy (LCOE)", Source: "PVsyst Page 12 & 13", SourceValue: "INR 4.80 / kWh", PbiValue: "INR 4.80 / kWh", Status: "MATCH", Note: "4.8045 INR/kWh exact" },
  { Metric: "Payback Period", Source: "PVsyst Page 7 & 13", SourceValue: "6.5 years", PbiValue: "6.5 years", Status: "MATCH", Note: "Payback achieved in Year 7 (month ~6)" },
  { Metric: "Net Present Value (NPV)", Source: "PVsyst Page 13 & BOQ Page 9", SourceValue: "INR 2,66,412.68", PbiValue: "INR 2,66,412.68", Status: "MATCH", Note: "At 8% discount rate over 25 years" },
  { Metric: "Internal Rate of Return (IRR)", Source: "PVsyst Page 13 & BOQ Page 10", SourceValue: "20.71 %", PbiValue: "20.71 %", Status: "MATCH", Note: "Project financial return" },
  { Metric: "Return on Investment (ROI)", Source: "PVsyst Page 13 & BOQ Page 10", SourceValue: "133.20 %", PbiValue: "133.20 %", Status: "MATCH", Note: "Over 25-year lifetime" },
  { Metric: "P50 Annual Production", Source: "PVsyst Page 10", SourceValue: "8,664 kWh", PbiValue: "8,664 kWh", Status: "MATCH", Note: "50% exceedance probability" },
  { Metric: "P90 Annual Production", Source: "PVsyst Page 10 & BOQ Page 2", SourceValue: "8,463 kWh", PbiValue: "8,463 kWh", Status: "MATCH", Note: "90% exceedance probability" },
  { Metric: "Net Lifetime CO2 Saved", Source: "PVsyst Page 16 & BOQ Page 9", SourceValue: "202.1 tCO2", PbiValue: "202.1 tCO2", Status: "MATCH", Note: "Net environmental balance" },
  { Metric: "Replaced Grid Emissions", Source: "PVsyst Page 16", SourceValue: "245.2 tCO2", PbiValue: "245.2 tCO2", Status: "MATCH", Note: "Based on 936 gCO2/kWh grid factor" }
];
